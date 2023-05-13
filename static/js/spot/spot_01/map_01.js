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
        { id: "5", name: null, source: "6", target:"9" , lineStyle: { normal: {} } },
        { id: "6", name: null, source: "7", target:"9" , lineStyle: { normal: {} } },
        { id: "7", name: null, source: "8", target:"9" , lineStyle: { normal: {} } },
        { id: "8", name: null, source: "5", target:"10" , lineStyle: { normal: {} } },
        { id: "9", name: null, source: "9", target:"10" , lineStyle: { normal: {} } },

    ],
    "nodes": [
        { id: "0", name: "上海城市历史发展陈列馆", itemStyle: null, symbolSize:10, x: null, y: null, category: 0, draggable: true, attributes: { modularity_class:  1} },
        { id: "1", name: "78m环动多媒体秀", itemStyle: null, symbolSize:10, x: null, y: null, category: 0, draggable: true, attributes: { modularity_class:  1} },
        { id: "2", name: "259m全透明悬空观光廊", itemStyle: null, symbolSize:10, x: null, y: null, category: 0, draggable: true, attributes: { modularity_class:  1} },
        { id: "3", name: "263m主观光层", itemStyle: null, symbolSize:10, x: null, y: null, category: 0, draggable: true, attributes: { modularity_class:  1} },
        { id: "4", name: "351m太空舱", itemStyle: null, symbolSize:10, x: null, y: null, category: 0, draggable: true, attributes: { modularity_class:  1} },
        { id: "5", name: "建筑内部", itemStyle: null, symbolSize:30, x: null, y: null, category: 0, draggable: true, attributes: { modularity_class:  1} },
        { id: "6", name: "地标乐园", itemStyle: null, symbolSize:10, x: null, y: null, category: 0, draggable: true, attributes: { modularity_class:  2} },
        { id: "7", name: "卡丁体验中心", itemStyle: null, symbolSize:10, x: null, y: null, category: 0, draggable: true, attributes: { modularity_class:  2} },
        { id: "8", name: "游船", itemStyle: null, symbolSize:10, x: null, y: null, category: 0, draggable: true, attributes: { modularity_class:  2} },
        { id: "9", name: "建筑外部", itemStyle: null, symbolSize:30, x: null, y: null, category: 0, draggable: true, attributes: { modularity_class:  2} },
        { id: "10", name: "东方明珠", itemStyle: null, symbolSize:50, x: null, y: null, category: 0, draggable: true, attributes: { modularity_class:  3} }
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
