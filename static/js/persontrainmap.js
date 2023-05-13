(function () {

    var geoCoordMap = {
        '新疆': [86.61, 40.79],
        '西藏': [89.13, 30.66],
        '黑龙江': [128.34, 47.05],
        '吉林': [126.32, 43.38],
        '辽宁': [123.42, 41.29],
        '内蒙古': [112.17, 42.81],
        '北京': [116.40, 40.40],
        '宁夏': [106.27, 36.76],
        '山西': [111.95, 37.65],
        '河北': [115.21, 38.44],
        '天津': [117.04, 39.52],
        '青海': [97.07, 35.62],
        '甘肃': [103.82, 36.05],
        '山东': [118.01, 36.37],
        '陕西': [108.94, 34.46],
        '河南': [113.46, 34.25],
        '安徽': [117.28, 31.86],
        '江苏': [120.26, 32.54],
        '上海': [121.46, 31.28],
        '四川': [103.36, 30.65],
        '湖北': [112.29, 30.98],
        '浙江': [120.15, 29.28],
        '重庆': [107.51, 29.63],
        '湖南': [112.08, 27.79],
        '江西': [115.89, 27.97],
        '贵州': [106.91, 26.67],
        '福建': [118.31, 26.07],
        '云南': [101.71, 24.84],
        '台湾': [121.01, 23.54],
        '广西': [108.67, 23.68],
        '广东': [113.98, 22.82],
        '海南': [110.03, 19.33],
        '澳门': [113.54, 22.19],
        '香港': [114.17, 22.32],
    };

    var BJData = [
        [{
            name: '上海'
        }, {
            name: '上海',
            value: 200
        }],
        [{
            name: '上海'
        }, {
            name: '内蒙古',
            value: 90
        }],
        [{
            name: '上海'
        }, {
            name: '黑龙江',
            value: 90
        }],
        [{
            name: '上海'
        }, {
            name: '河北',
            value: 90
        }],
        [{
            name: '上海'
        }, {
            name: '云南',
            value: 30
        }],
        [{
            name: '上海'
        }, {
            name: '北京',
            value: 100
        }],
        [{
            name: '上海'
        }, {
            name: '吉林',
            value: 40
        }],
        [{
            name: '上海'
        }, {
            name: '重庆',
            value: 40
        }],
        [{
            name: '上海'
        }, {
            name: '贵州',
            value: 50
        }],
        [{
            name: '上海'
        }, {
            name: '广西',
            value: 30
        }],
        [{
            name: '上海'
        }, {
            name: '山东',
            value: 10
        }],
        [{
            name: '上海'
        }, {
            name: '山西',
            value: 10
        }],
        [{
            name: '上海'
        }, {
            name: '辽宁',
            value: 10
        }],
        [{
            name: '上海'
        }, {
            name: '江苏',
            value: 10
        }],
        [{
            name: '上海'
        }, {
            name: '浙江',
            value: 10
        }],
        [{
            name: '上海'
        }, {
            name: '安徽',
            value: 10
        }],
        [{
            name: '上海'
        }, {
            name: '福建',
            value: 10
        }],
        [{
            name: '上海'
        }, {
            name: '江西',
            value: 10
        }],
        [{
            name: '上海'
        }, {
            name: '河南',
            value: 10
        }],
        [{
            name: '上海'
        }, {
            name: '湖北',
            value: 10
        }],
        [{
            name: '上海'
        }, {
            name: '湖南',
            value: 10
        }],
        [{
            name: '上海'
        }, {
            name: '广东',
            value: 10
        }],
        [{
            name: '上海'
        }, {
            name: '海南',
            value: 10
        }],
        [{
            name: '上海'
        }, {
            name: '四川',
            value: 10
        }],
        [{
            name: '上海'
        }, {
            name: '陕西',
            value: 10
        }],
        [{
            name: '上海'
        }, {
            name: '甘肃',
            value: 10
        }],
        [{
            name: '上海'
        }, {
            name: '青海',
            value: 10
        }],
        [{
            name: '上海'
        }, {
            name: '台湾',
            value: 10
        }],
        [{
            name: '上海'
        }, {
            name: '西藏',
            value: 10
        }],
        [{
            name: '上海'
        }, {
            name: '宁夏',
            value: 10
        }],
        [{
            name: '上海'
        }, {
            name: '新疆',
            value: 10
        }],
        [{
            name: '上海'
        }, {
            name: '天津',
            value: 10
        }],
        [{
            name: '上海'
        }, {
            name: '香港',
            value: 10
        }],
        [{
            name: '上海'
        }, {
            name: '澳门',
            value: 10
        }]
    ];


    var planePath = 'path://M.6,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705';

    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
                res.push({
                    fromName: dataItem[0].name,
                    toName: dataItem[1].name,
                    coords: [fromCoord, toCoord],
                    value: dataItem[1].value
                });
            }
        }
        return res;
    };

    var color = ['#3ed4ff', '#ffa022', '#a6c84c'];
    var series = [];
    [
        ['上海', BJData]
    ].forEach(function (item, i) {
        series.push({
            // name: item[0] + '',
            type: 'lines',
            zlevel: 1,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: '#fff',
                symbolSize: 3
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 0,
                    curveness: 0.2
                }
            },
            data: convertData(item[1])
        }, {
            // name: item[0] + '',
            type: 'lines',
            zlevel: 2,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: planePath,
                symbolSize: 15
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 1,
                    opacity: 0.4,
                    curveness: 0.2
                }
            },
            data: convertData(item[1])
        }, {
            // name: item[0] + '',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize: function (val) {
                return val[2] / 8;
            },
            itemStyle: {
                normal: {
                    color: color[i]
                }
            },
            data: item[1].map(function (dataItem) {
                return {
                    name: dataItem[1].name,
                    value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                };
            })
        });
    });

    var option = {
        backgroundColor: '#080a20',
        tooltip: {
            trigger: "item",
            formatter: function (params, ticket, callback) {
                if (params.seriesType == "effectScatter") {
                    return params.data.name + "   " + params.data.value[2];
                }
            }
        },
        geo: {
            map: 'china',
            zoom: 1.2,
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#132937',
                    borderColor: '#0692a4'
                },
                emphasis: {
                    areaColor: '#0b1c2d'
                }
            }
        },
        series: series
    };


    var myecharts = echarts.init($('.map .geo')[0]);
    myecharts.setOption(option)

})();