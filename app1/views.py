import django

# from django.contrib.auth import authenticate, login
from django.shortcuts import render, HttpResponse, redirect
from django.http import HttpResponse, JsonResponse
from app1 import models
from elasticsearch7 import Elasticsearch
import json
from bert_serving.client import BertClient
import numpy as np
import csv
import pymysql
import simpleui.templates
# Create your views here.

the_user = ''
the_user_id = ''
the_user_type = ''
the_user_driving = ''

start_point = ''
destination = ''
transport_type = ''

recommendationFlag = 0
temp_user_dataset = []
tempSpotList = []
temp_user_rating = []
recommend_spot_index = []
recommend_spot = []
def initialDataset():
    with open('E:/大创/testing/recommendAlgorithms/result.csv', 'r') as _csvfile:
        _reader = csv.reader(_csvfile)
        global temp_user_dataset
        temp_user_dataset = [row for row in _reader]
    _csvfile.close()

def tempReadSpot():
    #txt_tables = []
    f = open("E:/大创/testing/recommendAlgorithms/temp/scenery_name.txt", "r", encoding='utf-8')
    global tempSpotList
    tempSpotList = f.read().splitlines()
    f.close()

def tempRecommend(rating):
    recommend_spot_index = []
    global recommend_spot
    recommend_spot = []
    flag = -1
    distance = 10E10
    global temp_user_rating
    for i in range(0, 84):
        temp_user_rating.append(0)
    temp_user_rating[15] = rating
    for i in temp_user_dataset:
        temp = 0
        for j in range(0, 84):
            temp += (float(temp_user_rating[j]) - float(i[j]))**2
        if temp < distance:
            distance = temp
            flag = temp_user_dataset.index(i)
    tempList = temp_user_dataset[flag]
    for i in tempList:
        if float(i) >= 4.85:
            recommend_spot_index.append(tempList.index(i))
    recommend_spot_index = list(set(recommend_spot_index))
    for i in recommend_spot_index:
        recommend_spot.append(tempSpotList[i])
        print(tempSpotList[i])


def my_login(request):
    flag = 0
    if request.method == 'POST':  # 判断采用的是何种请求
        username = request.POST['username']  # request.POST[]或request.POST.get()获取数据
        password = request.POST['password']
        if username.strip() and password:  # 确保用户名和密码都不为空
            try:
                user = models.User.objects.get(user_name=username)
            except:
                flag = 1
                print("用户不存在")
                return render(request, 'login.html', context={'console_flag': flag})
            if user.user_password == password:
                global the_user, the_user_id, the_user_type, the_user_driving
                the_user = username
                the_user_id = user.id
                the_user_type = user.user_type
                the_user_driving = user.user_driving
                return redirect('/users/home')
            else:
                flag = 1
                return render(request, 'login.html', context={'console_flag': flag})
    return render(request, 'login.html')

def my_register(request):
    conn = pymysql.connect(host='127.0.0.1'  # 连接名称，默认127.0.0.1
                           , user='root'  # 用户名
                           , passwd=''  # 密码
                           , port=3306  # 端口，默认为3306
                           , db='route'  # 数据库名称
                           , charset='utf8'  # 字符编码
                           )
    if request.method == "GET":
        return render(request, 'register.html')
    else:
        username = request.POST['username']
        password = request.POST['password']
        again_password = request.POST['again_password']
        try:
            user_type = request.POST['type']
            type_flag = 1
        except django.utils.datastructures.MultiValueDictKeyError:
            type_flag = 0
        try:
            driving_license = request.POST['driving_license']
            driving_license_flag = 1
        except django.utils.datastructures.MultiValueDictKeyError:
            driving_license_flag = 0

        same_name_user = models.User.objects.filter(user_name=username)
        if len(username) > 10:
            username_length_flag = 1
            return render(request, 'register.html', context={'username_length_flag': username_length_flag})
        if password != again_password:
            password_repeat_flag = 1
            return render(request, 'register.html', context={'password_repeat_flag': password_repeat_flag})
        if len(password) > 15:
            password_length_flag = 1
            return render(request, 'register.html', context={'password_length_flag': password_length_flag})
        if same_name_user:
            repeat_username_flag = 1
            return render(request, 'register.html', context={'repeat_username_flag': repeat_username_flag})


        new_user = models.User()
        new_user.user_name = username
        new_user.user_password = password


        cur = conn.cursor()  # 生成游标对象
        sql = "insert INTO userinf(username,password) VALUES('%s','%s')" % (username,password)
        cur.execute(sql)  # 执行SQL语句
        conn.commit()
        cur.close()  # 关闭游标
        if type_flag:
            cur = conn.cursor()
            new_user.user_type = user_type
            sql1 = "update userinf set type='%s' where username='%s'" % (user_type,username)
            cur.execute(sql1)  # 执行SQL语句%
            conn.commit()
            cur.close()
        if driving_license_flag:
            cur = conn.cursor()
            new_user.user_driving = driving_license
            sql2 = "update userinf set driving='%s' where username='%s'" % (driving_license,username)
            cur.execute(sql2)  # 执行SQL语句
            conn.commit()
            cur.close()

        conn.close()  # 关闭连接
        new_user.save()
        return redirect('/users/login')


def home(request):
    if request.method == "GET":
        return render(request, 'home.html', context={'username': the_user})

def my_route(request):
    if request.method == "GET":
        return render(request, 'route_request.html', context={'driving': the_user_driving})
    if request.method == "POST":
        data = request.POST
        global start_point, destination, transport_type
        start_point = request.POST['start_point']
        destination = request.POST['destination']
        transport_type = int(request.POST['transport_type'])
        if transport_type == 0:
            print(transport_type)
            # return render(request, 'publicTransportationRoute.html', context={'start_point': start_point, 'destination': destination})
            return redirect('/users/publicTransportationRoute')
        elif transport_type == 1:
            return redirect('/users/bikeRoute')
        elif transport_type == 2:
            return redirect('/users/drivingRoute')
        return render(request, 'route_request.html', )

def public(request):
    print(start_point)
    print(destination)
    return render(request, 'publicTransportationRoute.html', context={'start_point': start_point, 'destination': destination})

def bike(request):
    print(start_point)
    print(destination)
    return render(request, 'bikeRoute.html', context={'start_point': start_point, 'destination': destination})

def driving(request):
    print(start_point)
    print(destination)
    return render(request, 'drivingRoute.html', context={'start_point': start_point, 'destination': destination})


def spot(request):
    if request.method == "GET":
        return render(request, 'spot_test.html', context={'username': the_user, 'five': 1592, 'four': 168, 'three': 30})
    elif request.method == "POST":
        tempReadSpot()
        initialDataset()
        #print(request.POST['rating'])
        #print(the_user_id)
        existing_rating = models.Rating.objects.filter(user_id=int(the_user_id), spot_id=16)
        if existing_rating:
            existing_rating[0].rating = int(request.POST['rating'])
            existing_rating[0].save()
        else:
            new_rating = models.Rating()
            new_rating.spot_id = 16
            new_rating.user_id = the_user_id
            new_rating.rating = int(request.POST['rating'])
            new_rating.save()
        if request.POST['rating'] == '5':
            return render(request, 'spot_test.html',
                          context={'flag': 1, 'username': the_user, 'five': 1593, 'four': 168, 'three': 30})
        elif request.POST['rating'] == '4':
            return render(request, 'spot_test.html',
                          context={'flag': 1, 'username': the_user, 'five': 1592, 'four': 169, 'three': 30})
        elif request.POST['rating'] == '3':
            return render(request, 'spot_test.html',
                          context={'flag': 1, 'username': the_user, 'five': 1592, 'four': 168, 'three': 31})
        else:
            return render(request, 'spot_test.html',
                          context={'flag': 1, 'username': the_user, 'five': 1592, 'four': 168, 'three': 30})
        tempRecommend(request.POST['rating'])
        #return HttpResponse(recommend_spot)
        #return JsonResponse(recommend_spot, safe=False, json_dumps_params={'ensure_ascii':False})


def spot_01(request):
    if request.method == "GET":
        return render(request, 'spot_01.html', context={'username': the_user})
    elif request.method == "POST":
        tempReadSpot()
        initialDataset()
        print(request.POST['rating'])
        tempRecommend(request.POST['rating'])
        #return HttpResponse(recommend_spot)
        #return JsonResponse(recommend_spot, safe=False, json_dumps_params={'ensure_ascii':False})
        return render(request, 'spot_01.html', context={'flag': 1, 'username': the_user, 's0': recommend_spot[0]\
                                                          , 's1': recommend_spot[1], 's2': recommend_spot[2]})

def spot_02(request):
    if request.method == "GET":
        return render(request, 'spot_02.html', context={'username': the_user})
    elif request.method == "POST":
        tempReadSpot()
        initialDataset()
        #print(request.POST['rating'])
        tempRecommend(request.POST['rating'])
        #return HttpResponse(recommend_spot)
        #return JsonResponse(recommend_spot, safe=False, json_dumps_params={'ensure_ascii':False})
        return render(request, 'spot_02.html', context={'username': the_user, 's0': recommend_spot[0]\
                                                          , 's1': recommend_spot[1], 's2': recommend_spot[2]})



def spot_recommendation_input (request):
    if request.method == 'GET':
        return render(request, 'spot_recommendation_input.html')
    else:
        #tempReadSpot()
        #initialDataset()
        print(request.POST)
        #print(request.POST['rating'])
        #tempRecommend(request.POST['rating'])
        global recommendationFlag
        recommendationFlag = 1
        if request.POST['type'] == '2':
            return redirect('/users/spot_recommendation_output')

        return render(request, 'spot_recommendation_input.html', context={'flag': recommendationFlag})

def spot_recommendation_output(request):
    return render(request, 'spot_recommendation_output.html')

def scenic(request):
    if request.method=="GET":
        id=request.GET['sid']
        pid=request.GET['pid']
        inf={}#数据库内容
        conn = pymysql.connect(host='127.0.0.1'  # 连接名称，默认127.0.0.1
                               , user='root'  # 用户名
                               , passwd=''  # 密码
                               , port=3306  # 端口，默认为3306
                               , db='route'  # 数据库名称
                               , charset='utf8'  # 字符编码
                               )
        cur = conn.cursor()  # 生成游标对象
        sql = '''select sname,pricen,main,price,cloud 
        from `sightsinf` 
          WHERE id='%s' '''%(id)
        cur.execute(sql)  # 执行SQL语句
        data = cur.fetchall()  # 通过fetchall方法获得数据

        print(data)
        inf["name"]= data[0][0]
        inf["pricen"]= data[0][1]
        inf["main"]= data[0][2]
        inf["price"]= data[0][3]
        inf["pid"]= pid
        if data[0][4] == "no":
            inf["cloud"]="此景点暂未开启云参观"
            inf["cloudlink"]="#"
        else:
            inf["cloud"]="点此云参观"+inf["name"]
            inf["cloudlink"]=data[0][4]
        return render(request,'scenic.html',inf)


def messagewall(request):
    return render(request, 'messagewall.html')


def que(request):
    if request.method == "GET":
        return render(request, 'que.html')
    elif request.method == "POST":
        ans = ""
        que = request.POST['que']
        print(que)
        es = Elasticsearch(
            ['http://localhost:9200/'],

            # 启动前嗅探es集群服务器
            sniff_on_start=True,
            # es集群服务器结点连接异常时是否刷新es节点信息
            sniff_on_connection_fail=True,
            # 每60秒刷新节点信息
            sniffer_timeout=60,

        )
        query = {
            "query": {
                "match": {
                    "question": {
                        "query": que
                    }

                }
            }
        }

        ret = es.search(index="tour", body=query)
        #ret = es.search(index="movies", body=query)

        results = ret['hits']['hits']
        print(ret)
        for i in range(0, ret['hits']['total']['value'] ):
            try:
                print(results[i]['_source']['question'])
            except IndexError:
                ansres = '{"data":"Sorry"}'
                return HttpResponse(ansres)
        ans = results[0]['_source']['answer']
        ansres = '{"data":"'+ans+'"}'
        print("\n")
        # print(ansres)
        max = 0
        res = 0
        for i in range(0, ret['hits']['total']['value']):
            question = results[i]['_source']['question']
            sim = similarity_bert(que, question)
            print(question)
            if sim >= max:
                sim = max
                res = i
        print(ansres)
        return HttpResponse(ansres)

def cos_similar(sen_a_vec,sen_b_vec):
    vector_a = np.mat(sen_a_vec)
    vector_b = np.mat(sen_b_vec)
    num = float(vector_a * vector_b.T)
    denom = np.linalg.norm(vector_a) * np.linalg.norm(vector_b)
    cos = num/denom
    #print(cos)
    return cos

def similarity_bert(word1,word2):
    bc = BertClient()
    print(word1)
    vec1 = bc.encode([word1])
    vec2 = bc.encode([word2])
    print(vec2)
    print(len(vec2[0]))
    sim = cos_similar(vec1, vec2)
    print(sim)
    return sim
