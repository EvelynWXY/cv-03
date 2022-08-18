// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById("skills"));

// 指定图表的配置项和数据
var option = {
  legend: {
    left: "center",
    top: "bottom",
    data: ["静态页面", "编程基础", "Vue", "React", "项目开发", "沟通能力"],
  },

  series: [
    {
      name: "半径模式",
      type: "pie",
      radius: [20, 100],
      center: ["50%", "40%"],
      roseType: "radius",
      label: {
        show: false,
      },
      emphasis: {
        label: {
          show: true,
          alignTo: "none",
          length: 20,
          length2: 10,
        },
      },
      data: [
        { value: 100, name: "静态页面" },
        { value: 70, name: "编程基础" },
        { value: 90, name: "Vue" },
        { value: 80, name: "React" },
        { value: 85, name: "项目开发" },
        { value: 75, name: "沟通能力" },
      ],
    },
  ],
  // radar: {
  //   // shape: 'circle',
  //   name: {
  //     textStyle: {
  //       color: "#fff",
  //       backgroundColor: "#999",
  //       borderRadius: 3,
  //       padding: [3, 5],
  //     },
  //   },
  //   indicator: [
  //     { name: "静态页面", max: 100 },
  //     { name: "编程基础", max: 100 },
  //     { name: "Vue", max: 100 },
  //     { name: "React", max: 100 },
  //     { name: "项目开发", max: 100 },
  //     { name: "沟通能力", max: 100 },
  //   ],
  // },
  // series: [
  //   {
  //     name: "Budget vs spending",
  //     type: "radar",
  //     data: [
  //       {
  //         value: [100, 70, 90, 80, 85, 75],
  //         name: "能力雷达",
  //       },
  //     ],
  //   },
  // ],
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
