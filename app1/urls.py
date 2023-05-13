from django.urls import path
from . import views
from django.conf.urls import url, include
temp_start = views.start_point
temp_des = views.destination
#temp_request =
app_name = 'app1'   # 定义一个命名空间，用来区分不同应用之间的链接地址
urlpatterns = [
    #path('login.html', views.my_login, name='login'),
    url(r'login/', views.my_login),
    #path('login/', views.my_login),
    url(r'que/', views.que),
    url(r'home/', views.home),
    url(r'spot_test/', views.spot),
    url(r'spot_01/', views.spot_01),
    url(r'spot_02/', views.spot_02),
    url(r'register/', views.my_register),
    url(r'route_request/', views.my_route),
    url(r'publicTransportationRoute/', views.public),
    url(r'bikeRoute/', views.bike),
    url(r'drivingRoute/', views.driving),
    url(r'messagewall/', views.messagewall),
    url(r'spot_recommendation_input/', views.spot_recommendation_input),
    url(r'spot_recommendation_output/', views.spot_recommendation_output),
    url(r'scenic/$', views.scenic),
    url(r'discussion/$', views.scenic),

]