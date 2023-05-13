
var myChart = echarts.init(document.getElementById('main'));
    var categories = [];
    var con=["所在地","推荐景点"];
    for (var i = 0; i < 2; i++) {
        categories[i] = {
            name: '类目:' + con[i]
        };
    }
    option = {
        // 图的标题
        title: {
            text: '智能景点推荐小助手'
        },
        // 提示框的配置
        // 工具箱
        toolbox: {
            // 显示工具箱
            show: true,
            feature: {
                mark: {
                    show: true
                },
                // 还原
                restore: {
                    show: true
                },
                // 保存为图片
                saveAsImage: {
                    show: true
                }
            }
        },
        legend: [{
            // selectedMode: 'single',
            data: categories.map(function (a) {
                return a.name;
            })
        }],
        series: [{
            type: 'graph', // 类型:关系图
            layout: 'force', //图的布局，类型为力导图
            symbolSize: 40, // 调整节点的大小
            roam: true, // 是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移,可以设置成 'scale' 或者 'move'。设置成 true 为都开启
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [2, 10],
            edgeLabel: {
                normal: {
                    textStyle: {
                        fontSize: 20
                    }
                }
            },
            force: {
                repulsion: 2500,
                edgeLength: [50, 250]
            },
            draggable: true,
            lineStyle: {
                normal: {
                    width: 2,
                    color: '#4b565b',
                }
            },
            edgeLabel: {
                normal: {
                    show: true,
                    formatter: function (x) {
                        return x.data.name;
                    }
                }
            },
            label: {
                normal: {
                    show: true,
                    textStyle: {}
                }
            },
 
            // 数据
            data: [{
                name: '所在地',
                symbolSize: 100,
                category: 0,
            }, {
                name: '景点A',
                symbolSize: 70,
                category: 1,
                edgeLength:50
            }, {
                name: '景点B',
                symbolSize: 70,
                category: 1,
            }, {
                name: '景点C',
                symbolSize: 70,
                category: 1,
            }, {
                name: '景点D',
                symbolSize: 70,
                category: 1,
            },
            {
                name: '景点E',
                symbolSize: 70,
                category: 1,
                
            }
           ],
            links: [{
                source: '所在地',
                target: '景点A',
                name: '',
                value:50
            }, {
               
                source: '所在地',
                target: '景点B',
                name: '',
                value:250
            }, {
                 source: '所在地',
                target: '景点C',
                name: '',
                value:150
            }, {
                 source: '所在地',
                target: '景点D',
                name: '',
                value:90
            }, {
                 source: '所在地',
                target: '景点E',
                name: ''
            }
            
            ],
            categories: categories,
        }]
    };
    myChart.setOption(option);