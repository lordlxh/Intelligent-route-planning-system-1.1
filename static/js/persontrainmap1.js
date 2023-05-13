(function () {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".map .chart"));
  // 2. 指定配置和数据
  // 2. 指定配置和数据
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

  var XAData = [
    [{ name: "上海" }, { name: "上海", value: 200 }],
    [{ name: "上海" }, { name: "北京", value: 100 }],
    [{ name: "上海" }, { name: "广东", value: 100 }],
    [{ name: "上海" }, { name: "四川", value: 10 }],
    [{ name: "上海" }, { name: "浙江", value: 80 }],
    [{ name: "上海" }, { name: "吉林", value: 10 }],
    [{ name: "上海" }, { name: "山西", value: 20 }],
    [{ name: "上海" }, { name: "重庆", value: 50 }],
    [{ name: "上海" }, { name: "湖北", value: 40 }],
  ];


  var planePath =
    "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
  //var planePath = 'arrow';
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

  var color = ["#fff", "#fff", "#fff"]; //航线的颜色
  var series = [];
  [
    ["上海", XAData]
  ].forEach(function (item, i) {
    series.push(
      // {
      //   name: item[0] + " Top3",
      //   type: "lines",
      //   zlevel: 1,
      //   effect: {
      //     show: true,
      //     period: 6,
      //     trailLength: 0.7,
      //     color: "red", //arrow箭头的颜色
      //     symbolSize: 3
      //   },
      //   lineStyle: {
      //     normal: {
      //       color: color[i],
      //       width: 0,
      //       curveness: 0.2
      //     }
      //   },
      //   data: convertData(item[1])
      // },
      //线
      {
        name: item[0] + " Top3",
        type: "lines",
        zlevel: 2,
        symbol: ["none", "arrow"],
        symbolSize: 10,
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
            opacity: 0.6,
            curveness: 0.2
          }
        },
        data: convertData(item[1])
      },
      {
        name: item[0] + " Top3",
        type: "effectScatter",
        coordinateSystem: "geo",
        zlevel: 2,
        rippleEffect: {
          brushType: "stroke"
        },
        label: {
          normal: {
            show: true,
            position: "right",
            formatter: "{b}"
          }
        },
        symbolSize: function (val) {
          return val[2] / 8;
        },
        itemStyle: {
          normal: {
            color: color[i]
          },
          emphasis: {
            areaColor: "#2B91B7"
          }
        },
        data: item[1].map(function (dataItem) {
          return {
            name: dataItem[1].name,
            value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
          };
        })
      }
    );
  });
  var option = {
    tooltip: {
      trigger: "item",
      formatter: function (params, ticket, callback) {
        if (params.seriesType == "effectScatter") {
          return params.data.name + "：" + params.data.value[2];
        } else if (params.seriesType == "lines") {
          return (
            params.data.fromName +
            "-->" +
            params.data.toName +
            "<br />" +
            params.data.value
          );
        } else {
          return params.name;
        }
      }
    },

    geo: {
      map: "china",
      label: {
        emphasis: {
          show: true,
          color: "#fff"
        }
      },
      roam: false,
      //   放大我们的地图
      zoom: 1,
      itemStyle: {
        normal: {
          areaColor: "rgba(43, 196, 243, 0.42)",
          borderColor: "rgba(43, 196, 243, 1)",
          borderWidth: 1
        },
        emphasis: {
          areaColor: "#2B91B7"
        }
      }
    },
    series: series
  };
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
