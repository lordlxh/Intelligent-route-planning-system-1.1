// 自调用函数
(function () {
  // 封装函数
  var setFont = function () {
    // 获取html元素
    var html = document.documentElement;
    // var html = document.querySelector('html');
    // 获取宽度
    var width = html.clientWidth;
    // 如果小于1024，那么就按1024
    if (width < 1024) {
      width = 1024;
    }
    // 如果大于1920，那么就按1920
    if (width > 1920) {
      width = 1920;
    }
    // 计算
    var fontSize = width / 80 + 'px';
    // 设置给html
    html.style.fontSize = fontSize;
  }
  setFont();
  // onresize：改变大小事件
  window.onresize = function () {
    setFont();
  }

})();

// tab切换
(function () {

  $('.monitor').on('click', '.tabs a', function () {
    // 点击谁给谁加类名，其他去除类名
    $(this).addClass('active').siblings().removeClass('active');
    // 把对应的content显示，其他的隐藏
    var index = $(this).attr('data-index');
    // 显示
    $('.content').eq(index).show().siblings('.content').hide();

  });


  // 滚动复制一份
  $('.monitor .marquee').each(function () {
    // 拿到了marquee里面的所有row
    var rows = $(this).children().clone();
    // 追加进去
    $(this).append(rows);
    // 父.append(子)==>子.appendTo(父)
    // $('ul').append($('<li>li</li>'));==>$('<li>li</li>').appendTo('ul');
  });
})();

(function () {
  // 返回对象
  var myChart = echarts.init(document.querySelector('.pie'));
  // 配置
  var option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },

    series: [
      {
        name: '留学生',
        type: 'pie',
        radius: ['10%', '70%'],
        center: ['50%', '50%'],
        roseType: 'area',
        data: [
          { value: 20, name: '亚洲' },
          { value: 26, name: '非洲' },
          { value: 24, name: '北美' },
          { value: 25, name: '南美' },
          { value: 20, name: '欧洲' },
          { value: 25, name: '大洋洲' }
        ],
        labelLine: {
          length: 8,
          length2: 10,
        },
      }
    ],
    color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
    label: {
      fontSize: 10
    },


  };
  myChart.setOption(option);

})();

(function () {
  // 中间省略的数据  准备三项
  var item = {
    name: '',
    value: 1200,
    // 柱子颜色
    itemStyle: {
      color: '#254065'
    },
    // 鼠标经过柱子颜色
    emphasis: {
      itemStyle: {
        color: '#254065'
      }
    },
    // 工具提示隐藏
    tooltip: {
      extraCssText: 'opacity:0'
    }
  };
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
        data: ['化工学院', '化学与分子工程学院', '生物工程学院', '药学院', '材料科学与工程学院', '信息科学与工程学院', '机械与动力学院', '资源与环境工程学院', '商学院', '社会与公共管理学院', '理学院', '艺术设计与传媒学院', '外国语学院'],
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
        name: '各学院学生',
        // 图表类型
        type: 'bar',
        // 柱子宽度
        barWidth: '60%',
        // 数据
        data: [2100, 1900, 1700, 1560, 1400, 500, 300, 600, 900, 750, 600, 480, 240]
      }
    ]
  };
  var myechart = echarts.init($('.users .bar')[0]);
  myechart.setOption(option);
})();

// 订单
(function () {
  // 数据
  var data = {
    // 属性，成员，键
    day365: { orders: '20301', amount: '19834' },
    day90: { orders: '10987', amount: '9834' },
    day30: { orders: '4087', amount: '3834' },
    day1: { orders: '987', amount: '834' }
  }

  // 获取h4
  var h4orders = $('.order .data h4:eq(0)');
  var h4amount = $('.order .data h4:eq(1)');

  // 点击的时候，获取当前a的自定义属性，
  // 根据这个属性在data里面查找对应的对象，把这个对象设置到页面上既可
  $('.order').on('click', '.filter a', function () {
    // 添加类名
    $(this).addClass('active').siblings().removeClass('active');
    // data-key：点击谁就获取谁的
    var key = $(this).attr('data-key');
    // var key = $(this).data('key');
    var val = data[key];// 如果键名是可以的，必须用对象[属性]
    // console.log(val);
    // 设置内容
    h4orders.html(val.orders);
    h4amount.html(val.amount);
  });

  var index = 0;
  // 启动定时器
  window.setInterval(function () {
    index++;
    if (index > 3) {
      index = 0;
    }
    // 自动触发事件
    $('.order .filter a').eq(index).click();
  }, 1000);

})();

(function () {
  var option = {
    xAxis: {
      type: 'category',
      data: ['2017', '2018', '2019', '2020', '2021'],
      axisTick: {
        show: false // 去除刻度线
      },
      axisLabel: {
        color: '#4c9bfd' // 文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      },
      boundaryGap: false  // 去除轴内间距
    },
    yAxis: {
      type: 'value',
      axisTick: {
        show: false  // 去除刻度
      },
      axisLabel: {
        color: '#4c9bfd' // 文字颜色
      },
      splitLine: {
        lineStyle: {
          color: '#012f4a' // 分割线颜色
        }
      }
    },
    series: [{
      name: '招生人数',
      data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
      type: 'line',
      smooth: true,
      itemStyle: {
        color: '#ed3f35'  // 线颜色
      }
    }],
    // 设置网格样式
    grid: {
      show: true,// 显示边框
      top: '20%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      borderColor: '#012f4a',// 边框颜色
      containLabel: true // 包含刻度文字在内
    },
    legend: {
      textStyle: {
        color: '#4c9bfd' // 图例文字颜色
        //  fontSize
      },
      right: '10%' // 距离右边10%
    },
  };
  // $(jQ对象)==>DOM对象
  var myChart = echarts.init(document.querySelector('.line'))
  myChart.setOption(option);

  // 数据
  var data = {
    year: [
      [40, 64, 191, 324, 290]
    ],
    quarter: [
      [43, 31, 65, 23, 78]
    ],
    month: [
      [56, 43, 98, 21, 56]
    ],
    week: [
      [32, 54, 34, 87, 32]
    ]
  }
  // 点击的时候获取自定义属性，通过这个属性，到data里面取出我们要用的数据
  // 之后吧这个数据，是一个数组，第一个数组给series第一个数据，同理第二个给第二个
  $('.sales').on('click', '.caption a', function () {
    $(this).addClass('active').siblings('a').removeClass('active');
    // 获取自定义属性
    var arr = data[$(this).attr('data-type')];
    // console.log(arr);
    // 设置修改option配置
    option.series[0].data = arr[0];
    //修改完成之后，在此设置 
    myChart.setOption(option);
  });

  // 一样
  var index = 0;
  // 定时器
  var dsq = window.setInterval(function () {
    index++;
    if (index > 3) {
      index = 0;
    }
    $('.sales .caption a').eq(index).click();
  }, 1000);

  // 鼠标进入停止
  // mouseover == mouseenter
  // mouseout == mouseleave
  $('.line').mouseenter(function () {
    // console.log('哇哈哈');
    window.clearInterval(dsq);
  });
  // 鼠标离开启动
  $('.line').mouseleave(function () {
    dsq = window.setInterval(function () {
      index++;
      if (index > 3) {
        index = 0;
      }
      $('.sales .caption a').eq(index).click();
    }, 1000);
  });
})();


(function () {
  // 配置项
  var option = {
    series: [
      {
        type: 'pie',
        radius: ['130%', '150%'],  // 放大图形
        center: ['48%', '80%'],    // 往下移动  套住75%文字
        label: {
          show: false,
        },
        startAngle: 180,
        hoverOffset: 0,
        data: [
          { value: 290 }, // 不需要名称
          { value: 10, }, // 不需要名称
          { value: 300, itemStyle: { color: 'transparent' } } // 透明隐藏第三块区域
        ]
      }
    ]
  };
  var myChart = echarts.init(document.querySelector('.gauge'));
  myChart.setOption(option);


})();

(function () {
  // 返回对象
  var myChart = echarts.init(document.querySelector('.sub'));
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
        radius: '60%',
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
      fontSize: 10
    },


  };
  myChart.setOption(option);

})();

