// 柱状图1模块
(function () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"));

  var option;

  option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // Use axis to trigger tooltip
        type: 'shadow'        // 'shadow' as default; can also be 'line' or 'shadow'
      }
    },
    legend: {
      data: ['博士', '硕士', '本科'],
      textStyle: {
        fontSize: 18,
        color: '#FFFFFF'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      axisLabel: {
        fontSize: 14,
        color: '#4c9bfd'
      }
    },
    yAxis: {
      type: 'category',
      data: ['2017', '2018', '2019', '2020', '2021'],
      axisLabel: {
        fontSize: 14,
        color: '#4c9bfd'
      }
    },
    series: [
      {
        name: '博士',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [320, 302, 301, 334, 390]
      },
      {
        name: '硕士',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [2532, 2734, 2900, 3230, 3210]
      },
      {
        name: '本科',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [4020, 4182, 4291, 4434, 4590]
      }
    ]
  };

  option && myChart.setOption(option);
})();




(function () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector(".line .chart"));
  var option;

  option = {
    // 工具提示
    tooltip: {
      // 触发类型  经过轴触发axis  经过轴触发item
      trigger: 'item',
      // 轴触发提示才有效
      axisPointer: {
        // 默认为直线，可选为：'line' 线效果 | 'shadow' 阴影效果       
        type: 'shadow'
      }
    },
    // 图表边界控制
    grid: {
      // 距离 上右下左 的距离
      left: '0',
      right: '3%',
      bottom: '3%',
      top: '5%',
      // 大小是否包含文本【类似于boxsizing】
      containLabel: true,
      //显示边框
      show: true,
      //边框颜色
      borderColor: 'rgba(0, 240, 255, 0.3)'
    },
    // 控制x轴
    xAxis: [
      {
        // 使用类目，必须有data属性
        type: 'category',
        // 使用 data 中的数据设为刻度文字
        data: ['化工学院', '化学与分子工程学院', '生物工程学院', '药学院', '材料科学与工程学院', '信息科学与工程学院', '机械与动力学院', '资源与环境工程学院', '商学院', '社会与公共管理学院', '理学院', '艺术设计与传媒学院', '外国语学院', '法学院', '体育科学与工程学院', '马克思主义学院', '中德工学院', '国际卓越工程师学院'],
        // 刻度设置
        axisTick: {
          // true意思：图形在刻度中间
          // false意思：图形在刻度之间
          alignWithLabel: false,
          show: false
        },
        //文字
        axisLabel: {
          show: false,//不显示坐标轴上的文字
          color: '#4c9bfd'
        }
      }
    ],
    // 控制y轴
    yAxis: [
      {
        // 使用数据的值设为刻度文字
        type: 'value',
        axisTick: {
          // true意思：图形在刻度中间
          // false意思：图形在刻度之间
          alignWithLabel: false,
          show: false
        },
        //文字
        axisLabel: {
          color: '#4c9bfd'
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(0, 240, 255, 0.3)'
          }
        },
      }
    ],
    // 控制x轴
    series: [

      {
        // series配置
        // 颜色
        itemStyle: {
          // 提供的工具函数生成渐变颜色
          color: new echarts.graphic.LinearGradient(
            // (x1,y2) 点到点 (x2,y2) 之间进行渐变
            0, 0, 0, 1,
            [
              { offset: 0, color: '#00fffb' }, // 0 起始颜色
              { offset: 1, color: '#0061ce' }  // 1 结束颜色
            ]
          )
        },
        // 图表数据名称
        name: '学生分布',
        // 图表类型
        type: 'bar',
        // 柱子宽度
        barWidth: '60%',
        // 数据
        data: [2100, 1900, 1700, 1560, 1400, 500, 300, 600, 900, 750, 600, 480, 240, 200, 300, 250, 340, 120]
      }
    ]
  };

  option && myChart.setOption(option);
})();

// 饼形图定制
// 折线图定制
(function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".pie .chart"));

  var option;

  option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      top: '5%',
      left: 'center',
      textStyle: {
        fontSize: 15,
        color: '#FFFFFF'
      }
    },
    series: [
      {
        name: '留学生',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 20, name: '亚洲' },
          { value: 26, name: '非洲' },
          { value: 24, name: '北美' },
          { value: 25, name: '南美' },
          { value: 20, name: '欧洲' },
          { value: 25, name: '大洋洲' }
        ]
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
// 学习进度柱状图模块
(function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".bar1 .chart"));

  var data = [65, 20, 10, 5];
  var titlename = ["就业", "继续深造", "公考之路", "自主创业"];
  var valdata = ["", "", "", ""];
  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448"];
  option = {
    //图标位置
    grid: {
      top: "10%",
      left: "22%",
      bottom: "10%"
    },
    xAxis: {
      show: false
    },
    yAxis: [
      {
        show: true,
        data: titlename,
        inverse: true,
        axisLine: {
          show: false,

        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: "#fff",
          fontSize: 18,
          rich: {
            lg: {
              backgroundColor: "#339911",
              color: "#fff",
              borderRadius: 15,
              // padding: 5,
              align: "center",
              width: 15,
              height: 15
            }
          }
        }
      },
      {
        show: true,
        inverse: true,
        data: valdata,
        axisLabel: {
          textStyle: {
            fontSize: 11,
            color: "#fff"
          }
        }
      }
    ],
    series: [
      {
        name: "条",
        type: "bar",
        yAxisIndex: 0,
        data: data,
        barCategoryGap: 50,
        barWidth: 10,
        itemStyle: {
          normal: {
            barBorderRadius: 20,
            color: function (params) {
              var num = myColor.length;
              return myColor[params.dataIndex % num];
            }
          }
        },
        label: {
          normal: {
            show: true,
            position: "inside",
            formatter: "{c}%"
          }
        }
      },
      {
        name: "框",
        type: "bar",
        yAxisIndex: 1,
        barCategoryGap: 50,
        data: [100, 100, 100, 100],
        barWidth: 15,
        itemStyle: {
          normal: {
            color: "none",
            borderColor: "#00c1de",
            borderWidth: 3,
            barBorderRadius: 15
          }
        }
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();


// 折线图 
(function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".line1 .chart"));
  var app = {};

  var option;

  var posList = [
    'left', 'right', 'top', 'bottom',
    'inside',
    'insideTop', 'insideLeft', 'insideRight', 'insideBottom',
    'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
  ];

  app.configParameters = {
    rotate: {
      min: -90,
      max: 90
    },
    align: {
      options: {
        left: 'left',
        center: 'center',
        right: 'right'
      }
    },
    verticalAlign: {
      options: {
        top: 'top',
        middle: 'middle',
        bottom: 'bottom'
      }
    },
    position: {
      options: posList.reduce(function (map, pos) {
        map[pos] = pos;
        return map;
      }, {})
    },
    distance: {
      min: 0,
      max: 100
    }
  };

  app.config = {
    rotate: 90,
    align: 'left',
    verticalAlign: 'middle',
    position: 'insideBottom',
    distance: 15,
    onChange: function () {
      var labelOption = {
        normal: {
          rotate: app.config.rotate,
          align: app.config.align,
          verticalAlign: app.config.verticalAlign,
          position: app.config.position,
          distance: app.config.distance
        }
      };
      myChart.setOption({
        series: [{
          label: labelOption
        }, {
          label: labelOption
        }, {
          label: labelOption
        }, {
          label: labelOption
        }]
      });
    }
  };


  var labelOption = {
    show: true,
    position: app.config.position,
    distance: app.config.distance,
    align: app.config.align,
    verticalAlign: app.config.verticalAlign,
    rotate: app.config.rotate,
    formatter: '{c}' + '%',
    fontSize: 16,
    rich: {
      name: {
      }
    }
  };

  option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['Forest', 'Steppe', 'Desert', 'Wetland']
    },
    toolbox: {
      show: true,
      orient: 'vertical',
      left: 'right',
      top: 'center'
    },
    xAxis: [
      {
        type: 'category',
        axisTick: { show: false },
        data: ['民营企业', '国有企业', '三资企业', '事业单位'],
        //文字
        axisLabel: {
          color: '#ffffff',
          interval: 0,
          rotate: 40,
          fontSize: 15
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        //文字
        axisLabel: {
          color: '#4c9bfd'
        },
      }
    ],
    series: [
      {
        name: '本',
        type: 'bar',
        barGap: 0,
        label: labelOption,
        emphasis: {
          focus: 'series'
        },
        data: [48.34, 25.49, 22.93, 3.24]
      },
      {
        name: '硕',
        type: 'bar',
        label: labelOption,
        emphasis: {
          focus: 'series'
        },
        data: [34.32, 25.75, 32.22, 7.71]
      }
    ]
  };



  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();



// 点位分布统计模块
(function () {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".pie1  .chart"));

  // 配置
  var option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },

    series: [
      {
        name: '毕业生',
        type: 'pie',
        radius: '80%',
        center: ['50%', '50%'],
        data: [
          { value: 5, name: '东北' },
          { value: 80, name: '东部' },
          { value: 10, name: '中部' },
          { value: 5, name: '西部' }
        ],
        labelLine: {
          length: 8,
          length2: 10,
        },
      }
    ],
    color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
    label: {
      fontSize: 20
    },


  };
  myChart.setOption(option);

  // 3. 配置项和数据给我们的实例化对象
  myChart.setOption(option);
  // 4. 当我们浏览器缩放的时候，图表也等比例缩放
  window.addEventListener("resize", function () {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
  });
})();
