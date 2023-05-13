var dom = document.getElementById("map1");
var myChart = echarts.init(dom);
var app = {};
option = null;
myChart.showLoading();
myChart.hideLoading();

var data = [];

var graph = {
    "links": [
        { id: "0", name: null, source: "0", target:"5" , lineStyle: { normal: {} } },
        { id: "1", name: null, source: "1", target:"5" , lineStyle: { normal: {} } },
        { id: "2", name: null, source: "2", target:"5" , lineStyle: { normal: {} } },
        { id: "3", name: null, source: "3", target:"5" , lineStyle: { normal: {} } },
        { id: "4", name: null, source: "4", target:"5" , lineStyle: { normal: {} } },



    ],
    "nodes": [
        { id: "0", name: "第一部分 前仆后继救亡图存", itemStyle: null, symbolSize:10, x: null, y: null, category: 0, draggable: true, attributes: { modularity_class:  1} },
        { id: "1", name: "第二部分 民众觉醒主义抉择", itemStyle: null, symbolSize:10, x: null, y: null, category: 0, draggable: true, attributes: { modularity_class:  2} },
        { id: "2", name: "第三部分 早期组织星火初燃", itemStyle: null, symbolSize:10, x: null, y: null, category: 0, draggable: true, attributes: { modularity_class:  3} },
        { id: "3", name: "第四部分 开天辟地日出东方", itemStyle: null, symbolSize:10, x: null, y: null, category: 0, draggable: true, attributes: { modularity_class:  4} },
        { id: "4", name: "第五部分 砥砺前行光辉历程", itemStyle: null, symbolSize:10, x: null, y: null, category: 0, draggable: true, attributes: { modularity_class:  5} },
        { id: "5", name: "中共一大会址", itemStyle: null, symbolSize:50, x: null, y: null, category: 0, draggable: true, attributes: { modularity_class:  6} },

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
