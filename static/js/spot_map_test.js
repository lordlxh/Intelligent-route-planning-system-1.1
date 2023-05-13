var dom = document.getElementById("map1");
var myChart = echarts.init(dom);
var app = {};
option = null;
myChart.showLoading();
myChart.hideLoading();

var data = [];

var graph = {
    "links": [
        { id: "0", name: null, source: "0", target:"2" , lineStyle: { normal: {} } },
        { id: "1", name: null, source: "1", target: "2", lineStyle: { normal: {} } },
        { id: "2", name: null, source: "3", target: "6", lineStyle: { normal: {} } },
        { id: "3", name: null, source: "4", target: "6", lineStyle: { normal: {} } },
        { id: "4", name: null, source: "5", target: "6", lineStyle: { normal: {} } },
        { id: "5", name: null, source: "7", target: "9", lineStyle: { normal: {} } },
        { id: "6", name: null, source: "8", target: "9", lineStyle: { normal: {} } },
        { id: "7", name: null, source: "10", target: "11", lineStyle: { normal: {} } },
        { id: "8", name: null, source: "12", target: "14", lineStyle: { normal: {} } },
        { id: "9", name: null, source: "13", target: "14", lineStyle: { normal: {} } },
        { id: "10", name: null, source: "15", target: "17", lineStyle: { normal: {} } },
        { id: "11", name: null, source: "16", target: "17", lineStyle: { normal: {} } },
        { id: "12", name: null, source: "18", target: "20", lineStyle: { normal: {} } },
        { id: "13", name: null, source: "19", target: "20", lineStyle: { normal: {} } },
        { id: "14", name: null, source: "2", target: "21", lineStyle: { normal: {} } },
        { id: "15", name: null, source: "6", target: "21", lineStyle: { normal: {} } },
        { id: "16", name: null, source: "9", target: "21", lineStyle: { normal: {} } },
        { id: "17", name: null, source: "11", target: "21", lineStyle: { normal: {} } },
        { id: "18", name: null, source: "14", target: "21", lineStyle: { normal: {} } },
        { id: "19", name: null, source: "17", target: "21", lineStyle: { normal: {} } },
        { id: "20", name: null, source: "20", target: "21", lineStyle: { normal: {} } }
    ],
    "nodes": [
        { id: "0", name: "天幕水极", itemStyle: null, symbolSize:10, x: null, y: null, category: 0, draggable: true, attributes: { modularity_class:  1} },
        { id: "1", name: "奇境：穿越北纬30°", itemStyle: null, symbolSize:10, x: null, y: null, category: 0, draggable: true, attributes: { modularity_class:1  } },
        { id: "2", name: "阳光港区", itemStyle: null, symbolSize:30, x: null, y: null, category: 0, draggable: true, attributes: { modularity_class: 1 } },
        { id: "3", name: "谷木游龙", itemStyle: null, symbolSize:10, x: null, y: null, category: 0, draggable: true, attributes: { modularity_class: 2 } },
        { id: "4", name: "天地双雄", itemStyle: null, symbolSize:10, x: null, y: null, category: 0, draggable: true, attributes: { modularity_class: 2 } },
        { id: "5", name: "欢乐对对碰", itemStyle: null, symbolSize:10, x: null, y: null, category: 0, draggable: true, attributes: { modularity_class:2  } },
        { id: "6", name: "欢乐时光区", itemStyle: null, symbolSize:30 , x: null, y: null, category: 0, draggable: true, attributes: { modularity_class:2  } },
        { id: "7", name: "绝顶雄风", itemStyle: null, symbolSize:10, x: null, y: null, category: 0, draggable: true, attributes: { modularity_class:3  } },
        { id: "8", name: "大摆锤", itemStyle: null, symbolSize:10, x: null, y: null, category: 0, draggable: true, attributes: { modularity_class:3  } },
        { id: "9", name: "上海滩区", itemStyle: null, symbolSize:30, x: null, y: null, category: 0, draggable: true, attributes: { modularity_class:3  } },
        { id: "10", name: "蓝月飞车", itemStyle: null, symbolSize:10, x: null, y: null, category: 0, draggable: true, attributes: { modularity_class:4  } },
        { id: "11", name: "香格里拉区", itemStyle: null, symbolSize:30, x: null, y: null, category: 0, draggable: true, attributes: { modularity_class:4  } },
        { id: "12", name: "大洋历险", itemStyle: null, symbolSize:10, x: null, y: null, category: 0, draggable: true, attributes: { modularity_class:5  } },
        { id: "13", name: "水上飞艇", itemStyle: null, symbolSize:10, x: null, y: null, category: 0, draggable: true, attributes: { modularity_class:5  } },
        { id: "14", name: "欢乐海洋区", itemStyle: null, symbolSize:30, x: null, y: null, category: 0, draggable: true, attributes: { modularity_class:5  } },
        { id: "15", name: "矿山历险", itemStyle: null, symbolSize:10, x: null, y: null, category: 0, draggable: true, attributes: { modularity_class:6  } },
        { id: "16", name: "金银岛", itemStyle: null, symbolSize:10, x: null, y: null, category: 0, draggable: true, attributes: { modularity_class:6  } },
        { id: "17", name: "金矿镇", itemStyle: null, symbolSize:30, x: null, y: null, category: 0, draggable: true, attributes: { modularity_class:6  } },
        { id: "18", name: "激流勇进", itemStyle: null, symbolSize:10, x: null, y: null, category: 0, draggable: true, attributes: { modularity_class: 7 } },
        { id: "19", name: "极速旋风", itemStyle: null, symbolSize:10, x: null, y: null, category: 0, draggable: true, attributes: { modularity_class: 7 } },
        { id: "20", name: "飓风湾区", itemStyle: null, symbolSize:30, x: null, y: null, category: 0, draggable: true, attributes: { modularity_class: 7 } },
        { id: "21", name: "上海欢乐谷", itemStyle: null, symbolSize:50 , x: null, y: null, category: 0, draggable: true, attributes: { modularity_class:0} }
        ]
};


var categories = [];
for (var i = 0; i < 10; i++) {
    categories[i] = {
        name: '类目' + i
    };
}

graph.nodes.forEach(function (node) {
    node.itemStyle = null;
    node.category = node.attributes.modularity_class;
    node.x = node.y = null;
    node.draggable = true;
    node.label = {
        normal: {
            show: node.symbolSize > 20
        }
    };
});

var edges = [];

option = {
    title: {
        top: 'bottom',
        left: 'right'
    },
    tooltip: {},
    animation: false,
    series: [
        {
            type: 'graph',
            layout: 'force',
            data: data,
            categories: categories,
            roam: true,
            label: {
                position: 'right'
            },
            force: {
                repulsion: 500,
                edgeLength: 1
            },
            edges: edges
        }
    ]
};
var j = 0;
var interval = setInterval(function () {
    if (data.length < graph.nodes.length) {//这里是限制循环，否则会无穷循环下去
        data.push(graph.nodes[data.length])
        myChart.setOption({
            series: [{
                roam: true,
                data: data,
                edges: edges
            }]
        });
    }
    while (j < graph.links.length && graph.links[j].target == data.length - 1) {
        edges.push({
            source: graph.links[j].source,
            target: graph.links[j].target
        });
        j++;
    }
    myChart.setOption({
        series: [{
            roam: true,
            data: data,
            edges: edges
        }]
    });
    if (data.length == graph.nodes.length) {
        clearInterval(interval);
    }
    myChart.on('click', function (parmms) {
        alert(params.name);
    });
}, 500);;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
};
