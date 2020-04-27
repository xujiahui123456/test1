$(document).ready(function () {

/* 折线面积图开始 */
  //指定图标的配置和数据
  var opt1 = {
      title:{
          text:''
      },
      tooltip:{},
      legend:{
          data:['用户来源']
      },
      xAxis:{
          type: 'category',
          /* 定义的样式是否显示在内容中，false表示不显示默认中间，true为显示默认中间 */
          boundaryGap: false,
          data:["2019/01","2019/02","2019/03","2019/04","2019/05","2019/06"],
          axisLabel : {
              formatter: '{value}',
              textStyle: { //改变刻度字体样式
                  color: '#fff',
                  fontStyle: 12
              }
          },
          /*改变xy轴颜色*/
          axisLine: {
              lineStyle: {
                  color: 'rgba(255,255,255,0.5)',
                  width: 1, //这里是为了突出显示加上的  
              }
          },
          splitLine:{  //不修改平行x轴的线
              show:false,
          }
      },
      yAxis:{
          axisLabel : {
              formatter: '{value}',
              textStyle: { //改变刻度字体样式
                  color: '#fff',
                  fontStyle: 12
              }
          },
          /*改变xy轴颜色*/
          axisLine: {
              lineStyle: {
                  color: 'rgba(255,255,255,0.5)',
                  width: 1, //这里是为了突出显示加上的  
              }
          },
          splitLine:{  
              show:true,
              lineStyle:{
              color:'rgba(255,255,255,0.5)',
              width: 1
              }
          }
      },
      series:[{
          name:'对接数量',
          type:'line',
          smooth:true,
          data:[100,280,240,380,300,400],
          areaStyle: { //折线颜色不取渐变色，取color设置值
             normal: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1, //从左到右，但不能从上到下，需要借助辅助系列
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#36d1dc' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#5b86e5' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
              },
          }
      },
      itemStyle : { 
           normal : { 
           color:'#5b86e5', //改变折线点的颜色
             lineStyle:{ 
                color:'#5b86e5' //改变折线颜色
            } 
         } 
      },
  }]
};
  //初始化echarts实例
  var myChart1 = echarts.init(document.getElementById('tzContainer'));
  //使用制定的配置项和数据显示图表
  myChart1.setOption(opt1);

/* 折线面积图结束 */

/* 圆环1 */

var opt8 = {
  title:{
      text:''
  },
  tooltip:{
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  color:['#e1e52a','#eaa510','#00fffe'],
  legend:{
       selectedMode:false,//取消图例上的点击事件
       textStyle: {
       color: '#00D2FF'
      },
       icon:'circle',
       orient: 'vertical',
       x: '430',
       y: '120',
       data:['贷款','中收','存款'] 
  },
  series:[{
  name:'母行赋能主要指标',
  type:'pie',
  radius: ['50%', '70%'],
  center: ['50%', '60%'],
  data:[
      {value:35365, name:'贷款'},
      {value:25365, name:'中收'},
      {value:25654, name:'存款'}
  ],
  itemStyle:{
      emphasis: {
          shadowBlur: 10,
          shadowOffsetX: -5,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
      }
   },
            label: {
                  normal: {
                      textStyle: {
                          color: '#00D2FF'
                      }
                  }
              },
  labelLine: {
        normal: {
            lineStyle: {
               color: '#00D2FF'
          },
          smooth: 0.2,
          length: 10,
          length2: 20
      }
  },
}
]
};

/* 圆环1结束 */

/* 圆环2开始 */
var opt5 = {
  title:{
      text:''
  },
  tooltip:{
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  color:['#eaa510','#00fffe'],
  legend:{
        selectedMode:false,//取消图例上的点击事件
        textStyle: {
        color: '#00D2FF'
       },
        icon:'circle',
        orient: 'vertical',
        x: '430',
        y: '120',
        data:['贷记卡','借记卡'] 
  },
  series:[{
  name:'母行赋能主要指标',
  type:'pie',
  radius: ['50%', '70%'],
  center: ['50%', '60%'],
  data:[
      {value:9365, name:'贷记卡'},
      {value:15658, name:'借记卡'}
  ],
  itemStyle:{
      emphasis: {
          shadowBlur: 10,
          shadowOffsetX: -5,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
      }
   },
            label: {
                  normal: {
                      textStyle: {
                          color: '#00D2FF'
                      }
                  }
              },
  labelLine: {
        normal: {
            lineStyle: {
               color: '#00D2FF'
          },
          smooth: 0.2,
          length: 10,
          length2: 20
      }
  },
}
]
};

/* 圆环2结束 */

/* 圆环3开始 */
var opt6 = {
  title:{
      text:''
  },
  tooltip:{
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  color:['#eaa510','#00fffe'],
  legend:{
      selectedMode:false,//取消图例上的点击事件
       textStyle: {
       color: '#00D2FF'
      },
       icon:'circle',
       orient: 'vertical',
       x: '430',
       y: '120',
       data:['基本账户','一般账户'] 
  },
  series:[{
  name:'母行赋能主要指标',
  type:'pie',
  radius: ['50%', '70%'],
  center: ['50%', '60%'],
  data:[
      {value:19365, name:'基本账户'},
      {value:65658, name:'一般账户'}
  ],
  itemStyle:{
      emphasis: {
          shadowBlur: 10,
          shadowOffsetX: -5,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
      }
   },
            label: {
                  normal: {
                      textStyle: {
                          color: '#00D2FF'
                      }
                  }
              },
  labelLine: {
        normal: {
            lineStyle: {
               color: '#00D2FF'
          },
          smooth: 0.2,
          length: 10,
          length2: 20
      }
  },
}
]
};

/* 圆环3结束 */

  /* 圆环4 */

  var opt7 = {
      title:{
          text:''
      },
      tooltip:{
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      color:['#e1e52a','#eaa510','#00fffe'],
      legend:{
           selectedMode:false,//取消图例上的点击事件
           textStyle: {
           color: '#00D2FF'
          },
           icon:'circle',
           orient: 'vertical',
           x: '430',
           y: '120',
           data:['贷款','中收','存款'] 
      },
      series:[{
      name:'母行赋能主要指标',
      type:'pie',
      radius: ['50%', '70%'],
      center: ['50%', '60%'],
      data:[
          {value:35365, name:'贷款'},
          {value:25365, name:'中收'},
          {value:25654, name:'存款'}
      ],
      itemStyle:{
          emphasis: {
              shadowBlur: 10,
              shadowOffsetX: -5,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
       },
            label: {
                  normal: {
                      textStyle: {
                          color: '#00D2FF'
                      }
                  }
              },
      labelLine: {
            normal: {
                lineStyle: {
                   color: '#00D2FF'
              },
              smooth: 0.2,
              length: 10,
              length2: 20
          }
      },
  }
]
};

/* 用户画像柱形图 */
 /* 柱形图开始 */
     //指定图标的配置和数据
     var opt9 = {
      title:{
          text:''
      },
      tooltip:{
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
      },
      legend:{
          icon:"circle",
          selectedMode:false,//取消图例上的点击事件
          orient: "vartical",
          data:['男','女'],
          right: '4%',
          top:'4%',
          itemWidth: 20,
          itemHeight: 10,
          itemGap: 10,
          textStyle: {
             fontSize: 12,
             color: '#F1F1F3'
          }
      },
      grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
      },
      xAxis:{
          type: 'category',
          boundaryGap: true,
          data:["25岁以下","25-35岁","35岁以上"],
          axisLabel : {
              formatter: '{value}',
              textStyle: { //改变刻度字体样式
                  color: '#00FFFF',
                  fontStyle: 12
              }
          },
          /*改变xy轴颜色*/
              axisLine: {
              lineStyle: {
                  color: '#00FFFF',
                  width: 1, //这里是为了突出显示加上的  
              }
          },
          splitLine:{  //不修改平行x轴的线
              show:false,
          }
      },
      yAxis:{
          axisLabel : {
              formatter: '{value}',
              textStyle: { //改变刻度字体样式
                  color: '#fff',
                  fontStyle: 12
              }
          },
          axisLine: {
              show: false
          },
          splitLine: {
              show: false
          },
          axisLabel: {
              color: '#00FFFF'
          }
      },
      series:[{
      name:'男',
      type:'pictorialBar',
      symbol: 'rect',
      symbolRepeat: true,
      symbolSize: [10, 2],
      symbolMargin: 1,
      barGap: 0.5, //柱子之间间距
      barWidth:10,
      data:[0, 0, 0],
      itemStyle:{
          normal:{
          //柱状颜色
          color:function(params){
              var colorList=['rgba(255,204,0,1)','rgba(255,204,0,1)','rgba(255,204,0,1)'];
               return colorList[params.dataIndex];
           }
          }
       }
  },
  {
      name:'女',
      type:'bar',
      type:'pictorialBar',
      symbol: 'rect',
      symbolRepeat: true,
      symbolSize: [10, 2],
      symbolMargin: 1,
      barGap: 0.5, //柱子之间间距
      barWidth:10,
      // stack: '广告',
      data:[0,0,0],
      itemStyle:{
          normal:{
          //柱状颜色
          color:function(params){
              var colorList=['rgba(0,252,255,1)','rgba(0,252,255,1)','rgba(0,252,255,1)'];
               return colorList[params.dataIndex];
           }
          }
       }
  }]
  };

/* 用户画像柱形图结束 */

/* 全国和省 */
/* 获取ajax */
/* str:表示ajax的地址  identify：用来判断页面是否需要项目进度列表 index：用来判断是全国省为1 还是市和区为2*/
function getAjax(str,identify,index){
    $.ajax({
        url: '/cenp/'+str,
        type: "GEt",
        data: {},
        dataType: "json",
        success: function(ret){
         /* 柱形图开始 */
         //指定图标的配置和数据
        
                 var opt2 = {
                  title:{
                      text:''
                  },
                  tooltip:{
                      trigger: 'axis',
                      axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                      }
                  },
                  legend:{
                      selectedMode:false,//取消图例上的点击事件
                      data:['签约笔数','签约金额'],
                      right: '4%',
                      top:'10%',
                      itemWidth: 20,
                      itemHeight: 10,
                      itemGap: 10,
                      textStyle: {
                         fontSize: 12,
                         color: '#F1F1F3'
                      }
                  },
                  grid: {
                      left: '3%',
                      right: '4%',
                      bottom: '3%',
                      containLabel: true
                  },
                  xAxis:{
                      type: 'category',
                      boundaryGap: true,
                      data:["2009/10"],
                      axisLabel : {
                          formatter: '{value}',
                          textStyle: { //改变刻度字体样式
                              color: '#fff',
                              fontStyle: 12
                          }
                      },
                      /*改变xy轴颜色*/
                          axisLine: {
                          lineStyle: {
                              color: 'rgba(255,255,255,0.5)',
                              width: 1, //这里是为了突出显示加上的  
                          }
                      },
                      splitLine:{  //不修改平行x轴的线
                          show:false,
                      }
                  },
                  yAxis:{
                      axisLabel : {
                          formatter: '{value}',
                          textStyle: { //改变刻度字体样式
                              color: '#fff',
                              fontStyle: 12
                          }
                      },
                      /*改变xy轴颜色*/
                      axisLine: {
                          lineStyle: {
                              color: 'rgba(255,255,255,0.5)',
                              width: 1, //这里是为了突出显示加上的  
                          }
                      },
                      splitLine:{  
                          show:true,
                          lineStyle:{
                          color:'rgba(255,255,255,0.5)',
                          width: 1
                          }
                      }
                  },
                  series:[{
                  name:'签约笔数',
                  type:'bar',
                  barWidth:10,
                  data:[ret.onlineSignNumList[0]],
                  itemStyle:{
                      normal:{
                      //柱状颜色
                      color:function(params){
                          var colorList=['rgba(255,204,0,1)','rgba(255,204,0,1)','rgba(255,204,0,1)','rgba(255,204,0,1)','rgba(255,204,0,1)','rgba(255,204,0,1)'];
                           return colorList[params.dataIndex];
                       }
                      }
                   }
              },
              {
                  name:'签约金额',
                  type:'bar',
                  barWidth:10,
                  // stack: '广告',
                  data:[ret.onlineSignMoneyList[0]],
                  itemStyle:{
                      normal:{
                      //柱状颜色
                      color:function(params){
                          var colorList=['rgba(0,252,255,1)','rgba(0,252,255,1)','rgba(0,252,255,1)','rgba(0,252,255,1)','rgba(0,252,255,1)','rgba(0,252,255,1)'];
                           return colorList[params.dataIndex];
                       }
                      }
                   }
              }]
              };
        
        
          /* 数字动效 */
          var projectSignNum = ret.projectSignNum;
          fiveNum(projectSignNum,'.yxNumber1');
        
          var openShop = ret.openShop;
          fiveNum(openShop,'.yxNumber2');
          
        //   项目总览
          var totalStoreProject = ret.totalStoreProject;
          totalStoreProject = numHandle(totalStoreProject,6);
          $('.yxNum1').text(totalStoreProject);
        
          var totalStoreHouse = ret.totalStoreHouse;
          totalStoreHouse = numHandle(totalStoreHouse,6);
          $('.yxNum2').text(totalStoreHouse);
        
          var totalSignProject = ret.totalSignProject;
          totalSignProject = numHandle(totalSignProject,6);
          $('.yxNum3').text(totalSignProject);
        
          var totalSignHouse = ret.totalSignHouse;
          totalSignHouse = numHandle(totalSignHouse,6);
          $('.yxNum4').text(totalSignHouse);
          
          // 房源项目数
          var storeProjectArray = [ret.rentStoreProject,ret.ownStoreProject,ret.operationStoreProject,ret.noStoreProject];
          var storeHouseArray = [ret.rentStoreHouse,ret.ownStoreHouse,ret.operationStoreHouse,ret.noStoreHouse];
          var signProjectArray = [ret.rentSignProject,ret.ownSignProject,ret.operationSignProject,ret.noSignProject];
          var signHouseArray = [ret.rentSignHouse,ret.ownSignHouse,ret.operationSignHouse,ret.noSignHouse];

          houseProject(storeProjectArray,'.yxNum5',2);
          houseProject(storeHouseArray,'.yxNum6',2);
          houseProject(signProjectArray,'.yxNum7',2);
          houseProject(signHouseArray,'.yxNum8',2);
          
          /* 1:表示全国和省  2表示市和区 */
          if(index==1){
          /* 母行赋能主要指标 */
          opt5.series[0].data[0].value = ret.creditCard;
          opt5.series[0].data[1].value = ret.debitCard;
          myChart5 = echarts.init(document.getElementById('tzContainer2'));/*  */
          changeData(opt5);
          myChart5.setOption(opt5);
        
          opt6.series[0].data[0].value = ret.basicAccount;
          opt6.series[0].data[1].value = ret.normalAccount;
          changeData(opt6); 
          var myChart6 = echarts.init(document.getElementById('tzContainer3'));
          myChart6.setOption(opt6);
        
          opt8.series[0].data[0].value = ret.loanBalance;
          opt8.series[0].data[1].value = ret.companyIncome;
          opt8.series[0].data[2].value = ret.depositsd;
          changeData(opt8);
          //初始化echarts实例
          var myChart8 = echarts.init(document.getElementById('tzContainer1'));
          //使用制定的配置项和数据显示图表
          myChart8.setOption(opt8);
        
          opt7.series[0].data[0].value = ret.loanBalance;
          opt7.series[0].data[1].value = ret.companyIncome;
          opt7.series[0].data[2].value = ret.depositsd;
          changeData(opt7);
          var myChart7 = echarts.init(document.getElementById('tzContainer4'));
          myChart7.setOption(opt7);
        
          // 效益指标区域实现收入
          $('.xyLeftTopNum1').text(ret.cumulativeRentIncome+'万元');
          $('.xyLeftTopNum2').text(ret.cumulativeServiceIncome+'万元');
          $('.xyLeftTopNum3').text(ret.cumulativeOtherIncome+'万元');
        
          //   效益指标区域确认成本
          $('.xyLeftBottomNum1').text(ret.cumulativeRentCost+'万元');
          $('.xyLeftBottomNum2').text(ret.cumulativeOtherCost+'万元');
          $('.xyLeftBottomNum3').text(ret.cumulativeDecorationCost+'万元');
         
          // 效益指标区域资金
          var areaInvested = ret.areaInvested;
          var areaCreditLine = ret.areaCreditLine;
          var areaLoanBalance = ret.areaLoanBalance;
          areaCapital(areaInvested,'.xynumber1');
          areaCapital(areaCreditLine,'.xynumber2');
          areaCapital(areaLoanBalance,'.xynumber3');
          }
          else if(index==2){
              $('.investNum5').text(numHandle(ret.preInvest,6));
              $('.investNum1').text(numHandle(ret.invested,6));
              $('.investNum2').text(numHandle(ret.creditPay,6));
              $('.investNum3').text(numHandle(ret.decorateBudget,6));
              $('.investNum4').text(numHandle(ret.creditBalance,6));
              for(var i=0;i<$('.incomeNum1').children().children().length;i++){
                var a = $('.incomeNum1').children().children()[i];  
                if(i%2==0){
                    a.innerHTML = numHandle(ret.yearRentIncome,5);
                  }
                else {
                    a.innerHTML = numHandle(ret.yearManageIncome,5);
                  }
              }
              for(var j=0;j<$('.incomeNum2').children().children().length;j++){
                var b = $('.incomeNum2').children().children()[j];  
                if(j%2==0){
                    b.innerHTML = numHandle(ret.monthRentIncome,5);
                  }
                else {
                    b.innerHTML = numHandle(ret.monthManageIncome,5);
                  } 
              }
              var html = '';
              var ul1 = document.createElement('ul');
              for(var z=0;z<ret.rentDistrictMsgList.length;z++){
                  html +=' <li><span class="span1">'+ret.rentDistrictMsgList[z].districtName+'</span><span class="span2">'+ret.rentDistrictMsgList[z].monthRentIncome+'万元'+'</span><span class="span3">'+ret.rentDistrictMsgList[z].yearRentIncome+'万元'+'</span></li>';
              }
              ul1.innerHTML = html;
              $('.zoneName').append(ul1);

              var sum = '';
              var ul2 = document.createElement('ul');
              for(var k=0;k<ret.manageDistrictMsgList.length;k++){
                sum +=' <li><span class="span1">'+ret.manageDistrictMsgList[k].districtName+'</span><span class="span2">'+ret.manageDistrictMsgList[k].monthRentIncome+'万元'+'</span><span class="span3">'+ret.manageDistrictMsgList[k].yearRentIncome+'万元'+'</span></li>';
              }
              ul2.innerHTML = sum;
              $('.zoneName-2').append(ul2);
          }
          //运营指标数字
          var firstArray = [ret.centralizedRentedHouse,ret.centralizedCanOperationHouse];
          var secondArray = [ret.avgPrice,ret.totalCanOperationHouse];
          houseProject(firstArray,'.yyNumber1',1);
          houseProject(secondArray,'.yyNumber2',1);
        
          // 签约交易
          var Arr = [{Data:['交易笔数','交易金额'],name1:'交易笔数',data1:[ret.onlineTradeNumList[0]],name2:'交易金额',data2:[ret.onlineTradeMoneyList[0]]},
          {Data:['签约笔数','签约金额'],name1:'签约笔数',data1:[ret.onlineSignNumList[0]],name2:'签约金额',data2:[ret.onlineSignMoneyList[0]]}];
              setInterval(function(){
                  var allData = Arr[0];
                  opt2.legend.data = Arr[0].Data;
                  opt2.series[0].name = Arr[0].name1;
                  opt2.series[0].data = Arr[0].data1;
                  opt2.series[1].name = Arr[0].name2;
                  opt2.series[1].data = Arr[0].data2;
                  Arr.shift();
                  Arr.push(allData);
                  myChart2.setOption(opt2);
        },4000);
          var myChart2 = echarts.init(document.getElementById('yyContainer'));
          myChart2.setOption(opt2);
        
          //码表
          $('.yypercent1').text(parseInt(ret.staticRentPercent*100)+'%');
          codeRotation('.yypercent1','.yyzhizheng1');
          var arr = [parseInt(ret.onlineStaticRentPercent*100)+'%',parseInt(ret.staticRentPercent*100)+'%'];
          setInterval(function(){
              $('.yypercent1').html(arr[0]);
              var percent = arr[0];
              codeRotation('.yypercent1','.yyzhizheng1');
              arr.shift();
              arr.push(percent);
        
          },4000);
        
          // 用户画像
          opt9.series[0].data[0] = ret.twentyFiveDownMan;
          opt9.series[0].data[1] = ret.twentyFiveToThirtyFiveMan;
          opt9.series[0].data[2] = ret.thirtyFiveUpMan;
          opt9.series[1].data[0] = ret.twentyFiveDownWoman;
          opt9.series[1].data[1] = ret.twentyFiveToThirtyFiveWoman;
          opt9.series[1].data[2] = ret.thirtyFiveUpWoman;
          var myChart9 = echarts.init(document.getElementById('yyCenterRightContainer'));
          myChart9.setOption(opt9);
        
          /* 进度条 */
          $('.geshu1').text(ret.projectApproval+'个');
          $('.geshu2').text(ret.design+'个');
          $('.geshu3').text(ret.projectIn+'个');
          $('.geshu4').text(ret.agreementSign+'个');
          $('.geshu5').text(ret.disburse+'个');
          $('.geshu6').text(ret.decoration+'个');
          $('.geshu7').text(ret.operation+'个');
          $('.geshu8').text(ret.projectOut+'个');
          progressMove('.geshu1','.yyProgress1 .progress1',ret.big);
          progressMove('.geshu2','.yyProgress2 .progress2',ret.big);
          progressMove('.geshu3','.yyProgress3 .progress3',ret.big);
          progressMove('.geshu4','.yyProgress4 .progress4',ret.big);
          progressMove('.geshu5','.yyProgress5 .progress5',ret.big);
          progressMove('.geshu6','.yyProgress6 .progress6',ret.big);
          progressMove('.geshu7','.yyProgress7 .progress7',ret.big);
          progressMove('.geshu8','.yyProgress8 .progress8',ret.big);
        
          /* 列表 */
          var myTimer;
          if(identify==1){
            $('.yyBottomArea').children().remove();
            var html = '';
            var ul = document.createElement('ul');
            for(j=0;j<ret.branchMsgList.length;j++){
                if(ret.branchMsgList[j].branchName == ''){
                    continue;
                }
                else{
                    html += '<li class="shouyeList"><span class="s1">'+ret.branchMsgList[j].branchName+'</span><span class="s2">'+ret.branchMsgList[j].receive+'套'+'</span><span class="s3">'+ret.branchMsgList[j].operation+'套'+'</span><span class="s4">'+ret.branchMsgList[j].rented+'套'+'</span><span class="s5">'+ret.branchMsgList[j].store+'套'+'</span></li>'
                }
            }
            ul.innerHTML = html;
            $('.yyBottomArea').append(ul);

            /* 项目数据列表 */
            var logo = 1;
            myTimer = setInterval(function(){
                $('.flip').css({"transform":"rotateY("+logo*180+"deg)","transition":"transform 4s"})
                if(logo == 1){
                    listSlide(".yyBottomArea",12,1);
                    logo = 0;
                }else if(logo == 0) {
                    listSlide(".yyBottomArea",12,2);
                    logo = 1;
                }
            },8000);
          }
          else if(identify==0){
              /* 如果为0的时候隐藏列表，或者将列表删除 */
              $('.yyBottomArea').children().remove();
              $('.flip').css({"transform":"rotateY(0deg)"});
          }
        }
        });
}

 /* 清空全国和省ajax */
 function clearAjax(){
        $('.yxNumber1').text('00000');
        $('.yxNumber2').text('00000');
        clearTimer(0);
        clearTimer(1);
}
// 清除定时器 
// index 1表示清除setInterval   0表示清除setTimeout
function clearTimer(index){
    if(index==1){
        var end = setInterval(function(){},1);
        var start = (end -1000000)>0?end-1000000:0;
        for(var i=start;i<=end;i++){
        clearInterval(i);
        }
    }
    else if(index==0){
        var end =  setTimeout(function(){},1);
        var start = (end -1000000)>0?end-1000000:0;
        for(var i=start;i<=end;i++){
        clearTimeout(i);
        }
    }
}
/* 全国ajax */
getAjax('getChinaMsg',1,1);

/* 效益指标金额数处理 */
/* 全国地图点击 */
chinaClick('.hebei','getProvinceMsg?province=河北','getExistCity?province=河北');
chinaClick('.shandong','getProvinceMsg?province=山东','getExistCity?province=山东');
chinaClick('.henan','getProvinceMsg?province=河南','getExistCity?province=河南');
chinaClick('.jiangsu','getProvinceMsg?province=江苏','getExistCity?province=江苏');
chinaClick('.anhui','getProvinceMsg?province=安徽','getExistCity?province=安徽');
chinaClick('.hubei','getProvinceMsg?province=湖北','getExistCity?province=湖北');
chinaClick('.zhejiang','getProvinceMsg?province=浙江','getExistCity?province=浙江');
chinaClick('.fujian','getProvinceMsg?province=福建','getExistCity?province=福建');
chinaClick('.guangxi','getProvinceMsg?province=广西','getExistCity?province=广西');
chinaClick('.guangdong','getProvinceMsg?province=广东','getExistCity?province=广东');
chinaClick('.sichuan','getProvinceMsg?province=四川','getExistCity?province=四川');
chinaClick('.shanxi1','getProvinceMsg?province=陕西','getExistCity?province=陕西');

/* 全国地图点击 */
// str
function chinaClick(str,Str,str2){
    $(str).click(function(){
        // console.log(str);
        $(str).parent().hide();
        clearAjax();
        getAjax(Str,0,1);
        $(str+'Container').show();
        var mapArray = $(str+'Container').children().children();
        // 给字体标颜色
        $.ajax({
            url: '/cenp/'+str2,
            type: "GEt",
            data: {},
            dataType: "json",
            success: function(ret){
                for(var i=0;i<mapArray.length;i++){
                    for(j=0;j<ret.length;j++){
                        if(ret[j]==mapArray[i].innerHTML){
                            mapArray[i].style.color = '#ffcc00';
                        }
                    }
                }
            }
        });
        // $('.back-China').click(function(){
        //     clearAjax();
        //     $(str+'Container').hide();
        //     $('.yyBottomArea').children().remove();
        //     getAjax('getChinaMsg',1,1);
        //     $(str).parent().show();
        // })
    });
}

// 省返回
$('.province>div:nth-child(2)').click(function(){
    //获取兄弟元素
     mapStr= '.'+$(this).prev().attr('class');
     var mapArr = mapStr.split("M");   
     var str = mapArr[0];
    if(str == '.beijing'|| str == '.shanghai' ||str == '.tianjing'||str == '.chongqing'){
        // 页面隐藏部分
        $(str+'Container').hide();
        $('.investFrame').hide();
        $('.incomeFrame').hide();
        clearAjax();
        $('.zoneName').children().remove();
        $('.zoneName-2').children().remove();
        $('.yyBottomArea').children().remove();
        getAjax('getChinaMsg',1,1);
      
        // 删除列表标签
        // 页面显示部分
        $(str).parent().show();
        $('.tzFrame').show();
        $('.xyFrame').show();
    }else{
        clearAjax();
        $(str+'Container').hide();
        $('.yyBottomArea').children().remove();
        getAjax('getChinaMsg',1,1);
        $(str).parent().show();
    }
    
});
/* 省级地图点击 */
// 四个直辖市
provinceClick('.beijing',1,'getExistDistrict?city=北京','getCityMsg?city=北京');
provinceClick('.tianjin',1,'getExistDistrict?city=天津','getCityMsg?city=天津');
provinceClick('.shanghai',1,'getExistDistrict?city=上海','getCityMsg?city=上海');
provinceClick('.chongqing',1,'getExistDistrict?city=重庆','getCityMsg?city=重庆');
// 市
provinceClick('.zhengzhou',0,'getExistDistrict?city=郑州','getCityMsg?city=郑州');
provinceClick('.luoyang',0,'getExistDistrict?city=洛阳','getCityMsg?city=洛阳');
provinceClick('.wuhan',0,'getExistDistrict?city=武汉','getCityMsg?city=武汉');
provinceClick('.guangzhou',0,'getExistDistrict?city=广州','getCityMsg?city=广州');
provinceClick('.zhongshan',0,'getExistDistrict?city=中山','getCityMsg?city=中山');
provinceClick('.shenzheng',0,'getExistDistrict?city=深圳','getCityMsg?city=深圳');
provinceClick('.shaoguan',0,'getExistDistrict?city=韶关','getCityMsg?city=韶关');
provinceClick('.nanning',0,'getExistDistrict?city=南宁','getCityMsg?city=南宁');
provinceClick('.hefei',0,'getExistDistrict?city=合肥','getCityMsg?city=合肥');
provinceClick('.huangshan',0,'getExistDistrict?city=黄山','getCityMsg?city=黄山');
provinceClick('.nanjing',0,'getExistDistrict?city=南京','getCityMsg?city=南京');
provinceClick('.wuxi',0,'getExistDistrict?city=无锡','getCityMsg?city=无锡');
provinceClick('.taizhou-js',0,'getExistDistrict?city=泰州','getCityMsg?city=泰州');
provinceClick('.jinan',0,'getExistDistrict?city=济南','getCityMsg?city=济南');
provinceClick('.xiamen',0,'getExistDistrict?city=厦门','getCityMsg?city=厦门');
provinceClick('.fuzhou',0,'getExistDistrict?city=福州','getCityMsg?city=福州');
provinceClick('.quanzhou',0,'getExistDistrict?city=泉州','getCityMsg?city=泉州');
provinceClick('.tangshan-hb',0,'getExistDistrict?city=唐山','getCityMsg?city=唐山');
provinceClick('.shijiazhuang',0,'getExistDistrict?city=石家庄','getCityMsg?city=石家庄');
provinceClick('.cangzhou-hb',0,'getExistDistrict?city=沧州','getCityMsg?city=沧州');
provinceClick('.baoding',0,'getExistDistrict?city=保定','getCityMsg?city=保定');
provinceClick('.langfang',0,'getExistDistrict?city=廊坊','getCityMsg?city=廊坊');
provinceClick('.zhangjiakou',0,'getExistDistrict?city=张家口','getCityMsg?city=张家口');
provinceClick('.hangzhou',0,'getExistDistrict?city=杭州','getCityMsg?city=杭州');
provinceClick('.chengdu',0,'getExistDistrict?city=成都','getCityMsg?city=成都');
provinceClick('.xian',0,'getExistDistrict?city=西安','getCityMsg?city=西安');

/* 省级地图点击 */
// str:所点击的部分
// Str：返回部分
//index: 标识符，如果是1表示直辖市保留全国按钮，反之亦然
// str2: 渲染市地图中可点击的点
// flag作为标识
var flag = 1;
function provinceClick(str,index,str2,Str2){
    $(str).click(function(){
        // 页面隐藏部分
        $(str).parent().hide();
        if(index == 1){
        }
        else if(index == 0){
            $('.back-China').hide();
        }
        $('.tzFrame').hide();
        $('.xyFrame').hide();
        clearAjax();
        $('.baidu-back').attr('city',Str2);
        $('.baidu-back').attr('area',str);
        // 页面显示部分
        $(str+'Container').show();
        getAjax(Str2,0,2);
        $('.investFrame').show();
        $('.incomeFrame').show();
        listSlide(".zoneName",14,1);
        listSlide(".zoneName-2",14,1);
        var areaArray = $(str+'Container').children().children();
        $.ajax({
            url: '/cenp/'+str2,
            type: "GEt",
            data: {},
            dataType: "json",
            success: function(ret){
                for(var i=0;i<areaArray.length;i++){
                    for(j=0;j<ret.length;j++){
                        if(ret[j]==areaArray[i].innerHTML){
                            areaArray[i].style.color = '#ffcc00';
                            /* 市级点击地图 */
                            areaArray[i].onclick = function(){
                                $(str+'Container').hide();
                                /* 百度地图 */
                                var cityStr = Str2;
                                var cityArr = cityStr.split("=");  
                                parameterCity =cityArr[1];
                                var parameterDistrcit = this.innerHTML;
                                $(".baidu-back").attr("parameterCity",parameterCity);
                                $(".baidu-back").attr("parameterDistrcit",parameterDistrcit);
                                var lng ;
                                var lat ;
                                // 获取区的数据
                                clearAjax();
                                $('.zoneName').children().remove();
                                $('.zoneName-2').children().remove();
                                getAjax('/getDistrictMsg?city='+parameterCity+"&"+"district="+parameterDistrcit,0,2);
                                var map = new BMap.Map("baiduContainer");          // 创建地图实例
                                $.ajax({
                                    url:'../getLocation?city='+parameterCity+"&"+"district="+parameterDistrcit,
                                    type:"GET",
                                    dataType:"json",
                                    success:function (res) {
                                        lng = res.lng;
                                        lat = res.lat;
                                        var point = new BMap.Point(lng, lat);  // 创建点坐标
                                        map.centerAndZoom(point, 14);                 // 初始化地图，设置中心点坐标和地图级别
                                        map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
                                        show_view_project(false);
                                        map.panTo(point); //移动地图
                                        map.setMinZoom(11);  /* 设置地图最小级别 */
                                        map.setMaxZoom(19);/* 设置地图最大级别 */
                                    }
                                });
                            
                                //地图发生移动控制
                                map.addEventListener("moveend", function (){
                                    show_view_project(false);
                                });
                                map.addEventListener("zoomend", function (){
                                    show_view_project(false);
                                });
                                //展示视野内项目
                                function show_view_project(){
                                    var cp = map.getBounds(); // 返回map可视区域，以地理坐标表示
                                    var sw = cp.getSouthWest(); // 返回矩形区域的西南角
                                    var ne = cp.getNorthEast(); // 返回矩形区域的东北角
                                    $.ajax({
                                        url:'../bmap/getViewProject?swlng='+sw.lng+'&swlat='+sw.lat+
                                            '&nelng='+ne.lng+'&nelat='+ne.lat,
                                        type:"GET",
                                        data:{},
                                        dataType:"json",
                                        success:function(ret){
                                                for (var i=0;i<ret.length;i++) {
                                                    var points = new BMap.Point(ret[i].longitude,ret[i].latitude);//创建坐标点
                                                    var projectName = ret[i].projectName;
                                                    var projectId = ret[i].projectId;
                                                    var label = new BMap.Label(projectName,{
                                                        position:points,offset: new BMap.Size(-60, -25)
                                                    });
                                                    mark_project(points,label,projectName,projectId);
                                                    
                                                }
                                        }
                                    });
                                }
                                //视野项目label的样式
                                function  mark_project(points,label,projectName,projectId) {
                                    map.addOverlay(label);
                                    label.setStyle({
                                        width: '150px',
                                        color: '#fff',
                                        borderRadius: '5px',
                                        textAlign: 'center',
                                        background: '#0065b3',
                                        border: '1px solid 	#0065b3',
                                        height: '26px',
                                        lineHeight: '26px'
                                    });
                                    if(projectName.length>11){//项目名字过长就加长label宽度
                                        pxnum = 150+(projectName.length-11)*10;
                                        pxnum = pxnum+"px";
                                        label.setStyle({
                                            width: pxnum,
                                        });
                                    }
                                    // 添加文本标注点击事件
                                    /* 区项目点击 */
                                    label.addEventListener("click", function (){
                                        $.ajax({
                                            url:'../getProjectMsg?projectName='+projectName,
                                            type:"GET",
                                            dataType:"json",
                                            success:function (res) {
                                                $('.yxFrame').hide();
                                                $('.incomeFrame').hide();
                                                $('.yyFrame').hide();
                                                console.log(res);
                                                // 渲染页面
                                                $('.projectName').text(res.projectName);
                                                $('.houseResourceNum1').text(numHandle(res.receiveHouse,5));
                                                $('.houseResourceNum2').text(numHandle(res.canOperationHouse,5));
                                                $('.houseResourceNum3').text(numHandle(res.rentedHouse,5));
                                                $('.houseResourceNum4').text(numHandle(res.storeHouse,5));
                                                $('.investNum5').text(numHandle(res.preInvest,6));
                                                $('.investNum1').text(numHandle(res.invested,6));
                                                $('.investNum2').text(numHandle(res.creditPay,6));
                                                $('.investNum3').text(numHandle(res.decorateBudget,6));
                                                $('.investNum4').text(numHandle(res.creditBalance,6));
                                                // 码表
                                                $('.rentRatePercent1').text(res.staticRentPercent*100+'%');
                                                $('.rentRatePercent2').text(res.onlineStaticRentPercent*100+'%');
                                                codeRotationBig('.rentRatePercent1','.rentRateHand1');
                                                codeRotationBig('.rentRatePercent2','.rentRateHand2');

                                                // 项目概况
                                                $('.projectAddress').text(res.address);
                                                $('.projectArea').text(res.area+'平方米');
                                                $('.projectHomeQuality').text(res.houseType);
                                                $('.projectLandQuality').text(res.landType);
                                                $('.projectUse').text(res.landUse);
                                                $('.projectOperation').text(res.operation);
                                                /* 图片 */
                                                // var host = window.location.host;
                                                var host = '192.168.10.181:8888';
                                                var url1 = 'http://'+host+res.picList[0]
                                                var url2 = 'http://'+host+res.picList[1]
                                                var url3 = 'http://'+host+res.picList[2]
                                                var url4 = 'http://'+host+res.picList[3]
                                                $('.projectOne').css("background-image","url("+url1+")");
                                                $('.projectSecond').css("background-image","url("+url2+")");
                                                $('.projectThird').css("background-image","url("+url3+")");
                                                $('.projectFourth').css("background-image","url("+url4+")");
                                                // 渲染页面结束
                                                $('.houseResource').show();
                                                $('.rentRate').show();
                                                $('.programIntroduction').show();
                                                flag = 0;
                                            }
                                        });
                                    });
                                }
                                /* 百度地图结束 */
                                // 地图显示  
                                $('#baidu').show();       
                            }
                        }
                    }
                }
            }
        });
    });
};
// 市返回
$('.city>div:nth-child(2)').click(function(){
        //获取父亲元素
        var parentStr= '.'+$(this).parent().attr('class');
        var mapArr = parentStr.split("C");   
        var str = mapArr[0];
        // console.log(str);
        // 页面隐藏部分
        $(str+'Container').hide();
        $('.investFrame').hide();
        $('.incomeFrame').hide();
        clearAjax();
          // 删除列表标签
        $('.zoneName').children().remove();
        $('.zoneName-2').children().remove();
        $('.yyBottomArea').children().remove();
        // 根据市返回省数据
        if(str == '.hefei' || str == '.huangshan'){
            getAjax('getProvinceMsg?province=安徽',0,1);
        }
        if(str == '.luoyang' || str == '.zhengzhou'){
            getAjax('getProvinceMsg?province=河南',0,1);
        }
        if(str == '.wuhan'){
            getAjax('getProvinceMsg?province=湖北',0,1);
        }
        if(str == '.shaoguan' || str == '.guangzhou' ||  str == '.zhongshan' || str == '.shenzheng'){
            getAjax('getProvinceMsg?province=广东',0,1);
        }
        if(str == '.nanning'){
            getAjax('getProvinceMsg?province=广西',0,1);
        }
        if(str == '.taizhou-js' || str == '.nanjing' || str == '.wuxi'){
            getAjax('getProvinceMsg?province=江苏',0,1);
        }
        if(str == '.jinan'){
            getAjax('getProvinceMsg?province=山东',0,1);
        }
        if(str == '.fuzhou' || str == '.quanzhou' || str == '.xiamen'){
            getAjax('getProvinceMsg?province=福建',0,1);
        }
        if(str == '.zhangjiakou' || str == '.tangshan-hb' || str == '.langfang' || str == '.baoding' || str == '.cangzhou-hb' || str == '.shijiazhuang'){
            getAjax('getProvinceMsg?province=河北',0,1);
        }
        if(str == '.hangzhou'){
            getAjax('getProvinceMsg?province=浙江',0,1);
        }
        if(str == '.chengdu'){
            getAjax('getProvinceMsg?province=四川',0,1);
        }
        if(str == '.xian'){
            getAjax('getProvinceMsg?province=陕西',0,1);
        }
        // 页面显示部分
        $(str).parent().show();
        $('.back-China').show();
        $('.tzFrame').show();
        $('.xyFrame').show();
});
// 百度地图返回
 $('.baidu-back').click(function(){
     if(flag == 1){
         $('#baidu').hide();
         clearAjax();
         $('.zoneName').children().remove();
         $('.zoneName-2').children().remove();
         getAjax($(".baidu-back").attr("city"),0,2);
         $($(".baidu-back").attr("area")+'Container').show();
     }
     else if (flag == 0){
         $('.houseResource').hide();
         $('.rentRate').hide();
         $('.programIntroduction').hide();
         // 获取区的数据
         clearAjax();
         $('.zoneName').children().remove();
         $('.zoneName-2').children().remove();
         parameterCity = $(".baidu-back").attr("parameterCity");
         parameterDistrcit = $(".baidu-back").attr("parameterDistrcit");
        //  console.log(parameterCity);
         getAjax('/getDistrictMsg?city='+parameterCity+"&"+"district="+parameterDistrcit,0,2);
         $('.yxFrame').show();
         $('.incomeFrame').show();
         $('.yyFrame').show();
         flag = 1 ;
     }
 });  

});

// 渲染页面
/* 数字翻牌器 */
/* 参数
     str：选择器   height：字体高度  arr:  后续在changes里面要加字符串数组(后端回数据)
     num ： 单个数字的样式   li : li标签样式  
*/
/* 初始化数字 */
function init(str,height,num,li) {
    var numStr = $(str).text();  //获取表单内容，内容以字符串保存
    // console.log(numStr);
        var numDiv = "<div class='num"+num+"'>0</div>" +
        "<div class='num"+num+"'>1</div>" +
        "<div class='num"+num+"'>2</div>" +
        "<div class='num"+num+"'>3</div>" +
        "<div class='num"+num+"'>4</div>" +
        "<div class='num"+num+"'>5</div>" +
        "<div class='num"+num+"'>6</div>" +
        "<div class='num"+num+"'>7</div>" +
        "<div class='num"+num+"'>8</div>" +
        "<div class='num"+num+"'>9</div>" ;
    var html = "";
    for (var i = 0; i < numStr.length; i++) {
        var margin = height * parseInt(numStr[i]);
        /* 如果传不了参数过来，就判断高度，给相应的li */
        html += "<div class='li"+li+"' style=\"margin-top:-" + margin + "px\">" + numDiv + "</div>";
      }
    $(str).html(html);
}
/* Data:后端字段名  str：选择器   */
function fiveNum(Data,str){
    // console.log("work")
    init(str,50,1,1);
    setTimeout(function(){
        change(str,50,1,Data,5); 
    },500)
}
/* 后续的ajax获取的数据的处理方式 */
// var arr = ['24344','03443','23421','32421','00834','32774'];
// 数字翻牌
// str 表示选中的项  height  表示滚动的高度  li：表示样式  Num：数值  length：传来数值的长度
/* 用于setTimeOut数字效果 */
function change(str,height,li,Num,Length) {
    var numStr = Num+'';
    for(var i=numStr.length;i<Length;i++){
        numStr = '0'+numStr;
    }
    for (var j = 0; j < numStr.length; j++) {
        var margin = height * parseInt(numStr[j]);
        $(str).children('.li'+li).eq(j).css({"margin-top": 0 - margin + "px", "transition": "margin-top 1s"});
    }
}
/* 用于setInterval数字效果 */
function Change(str,height,li,Length,Arr) {
    arr = Arr;
    numStr = arr[0]+'';
    // console.log(numStr);
    for(i=numStr.length;i<Length;i++){
        numStr = '0'+numStr;
    }
        for (var i = 0; i < numStr.length; i++) {
            var margin = height * parseInt(numStr[i]);
            $(str).find('.li'+li).eq(i).css({"margin-top": 0 - margin + "px", "transition": "margin-top 1s"});
        }
    arr.shift();
    arr.push(numStr);
}

/*数字处理 */
function numHandle(num,Length){
    var numStr = num+'';
    for(i=numStr.length;i<Length;i++){
        numStr = '0'+numStr;
    }
    return numStr;
}

/* 项目数房源数 */
/* arr：数组名  str:类选择器 index: 标识*/
    function houseProject(arr,str,index){
        if(index==1){
            arr[arr.length-1] = numHandle(arr[arr.length-1],6);
            $(str).text(arr[arr.length-1]);
            init(str,50,3,3);
            setInterval(function(){
                // console.log(arr);
                Change(str,50,3,6,arr);
            },4000);
        }
        else if(index==2){
            arr[arr.length-1] = numHandle(arr[arr.length-1],5);
            $(str).text(arr[arr.length-1]);
            init(str,24,2,2);
            setInterval(function(){
                Change(str,24,2,5,arr);
                // console.log('work');
            },4000);
        }
    }
/* 数字翻牌器结束 */

/* echarts中data中数据的改变 */
function changeData(obj){
    for(i=0;i<obj.series[0].data.length;i++){
        var tempArr = obj.series[0].data[i].name;
        var tempArr = tempArr.split(':');
        // console.log(tempArr[0]);
        obj.series[0].data[i].name = tempArr[0]+": "+obj.series[0].data[i].value;
        // console.log( obj.series[0].data[i].name);
    }
}

// 效益指标区域资金
function areaCapital(num,str){
    num = numHandle(num,6);
    for(i=0;i<6;i++){
        // 这里的6其实就是li的个数
        var a = $(str).children();
        a[i].innerHTML = num[i];
    }
}

/* 码表转动 */
function codeRotation(obj1,obj2){
    var percent = $(obj1).html();
    percent = parseInt(percent); 
    $(obj2).css({"transform":"rotate("+percent*3.04+"deg)","transform-origin": '23px 10px',"transition": "transform 1s linear"});
}

function codeRotationBig(obj1,obj2){
    var percent = $(obj1).html();
    percent = parseInt(percent); 
    $(obj2).css({"transform":"rotate("+percent*3.04+"deg)","transform-origin": '35px 18px',"transition": "transform 1s linear"});
}

/* 进度条移动 */
function progressMove(str1,str2,big){
    var sum = $(str1).html();
    sum = parseInt(sum);
    $(str2).css({"width":""+(sum/big)*329+"px","transition": "width 1s ease"});
}

/* 列表展示数据滚动 */
// index: 作为表示
function listSlide(str,H,index){
    var h1 = parseInt($(str).css("height"));
    var h2 = $(str+' '+'ul').outerHeight();
    var differenceH = h2-h1;
    if(differenceH<0){
        differenceH = 0;
        H = 0;
    }
    if(index==1){
        $(str+' '+'ul').css({"margin-top": 0-(differenceH+H)+'px', "transition": "margin-top 6s linear"});
    }
    else if(index==2){
        $(str+' '+'ul').css('margin-top','0px');
    }
}
