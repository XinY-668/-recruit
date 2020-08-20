var myChart = echarts.init(document.getElementById('mapChartBox3D'));
var witchRegion = "";
var isClicked = false;
var thisView = "3D";
var isFirstQiehuan = 0;
var thisRegion3D = '全国';
var thisRegion2D = '全国';
var province1 = '全国';
var province2 = '全国';

var mapNowNames3Dchina = [];
var mapNowNamesValue3Dchina = [];
var mapNowNames3Dpro = [];
var mapNowNamesValue3Dpro = [];
var mapGDPnamesChina = [];
var mapGDPnamesPro = [];

var mapNowNames2Dpro = [];
var mapNowNamesValue2Dpro = [];

option1 = {
	geo3D: {
		map: 'china',
		shading: 'lambert',
		itemStyle: {
			borderColor: '#222',
			borderWidth: 1,
		},
		viewControl: {
			panSensitivity: 0.48,
			projection: "orthographic",
			panMouseButton: 'left',
			rotateMouseButton: 'right'
		},
		//                  environment: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{      // 配置为垂直渐变的背景
		//				    	offset: 0, color: 'white' // 天空颜色           
		//				    }, {
		//				    	offset: 0.55, color: 'yellow' // 地面颜色
		//				    }, {
		//				    	offset: 1, color: 'red' // 地面颜色
		//				    }], false),
		label: { // 标签的相关设置
			show: true, // (地图上的城市名称)是否显示标签 [ default: false ]
			distance: 0, // 标签距离图形的距离，在三维的散点图中这个距离是屏幕空间的像素值，其它图中这个距离是相对的三维距离
			textStyle: { // 标签的字体样式
				color: 'black', // 地图初始化区域字体颜色
				fontSize: 14, // 字体大小
				fontWeight: 'bolder',
				opacity: 1, // 字体透明度
				backgroundColor: 'rgba(0,23,11,0)' // 字体背景色
			},
		},
		emphasis: {
			label: {
				textStyle: { // 标签的字体样式
					color: 'white', // 地图初始化区域字体颜色
					fontSize: 14, // 字体大小
					fontWeight: 'bolder',
					borderColor: 'darkred',
					borderWidth: 4,
					opacity: 1, // 字体透明度
					backgroundColor: 'rgba(0,23,11,0)' // 字体背景色
				},
				//				            formatter: (params) => {
				//				            	console.log(params.name);
				//							    return params.name;
				//							},
				formatter: function(params) {
					witchRegion = params.name;
					for(var i = 0; i < mapNowNames3Dchina.length; i++) {
						if(mapNowNames3Dchina[i] == witchRegion) {
							return params.name + "招聘岗位数：\n" + mapNowNamesValue3Dchina[i];
							break;
						}
					}

				}
			}
		},
		//				    top: '10%',
		regions: [],

	},
	visualMap: {
		min: 1026.39,
		max: 72812.55,
		calculable: true,
		text: ['GDP数值'],
		//                  inRange: {
		//                      color: ['oranged','red']
		//                  }
	},
	series: [{
		type: 'bar3D',
		data: [],
		coordinateSystem: 'geo3D',
		shading: 'lambert',
		barSize: 1,
		minHeight: 0.3,
		silent: true,
		label: {
			show: true,
			textStyle: {
				fontSize: 14,
				//					            borderWidth: 1
			},
			formatter: function(params) {
				console.log(params);
				return mapGDPnamesChina[params.dataIndex] + "GDP:" + params.data[2] + "万亿"
			}
		},
	}]
};

option2 = {
	geo3D: {
		map: 'china',
		shading: 'lambert',
		itemStyle: {
			borderColor: '#222',
			borderWidth: 1,
		},
		viewControl: {
			panSensitivity: 0.48,
			projection: "orthographic",
			panMouseButton: 'left',
			rotateMouseButton: 'right'
		},
		//                  environment: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{      // 配置为垂直渐变的背景
		//				    	offset: 0, color: 'white' // 天空颜色           
		//				    }, {
		//				    	offset: 0.55, color: 'lightskyblue' // 地面颜色
		//				    }, {
		//				    	offset: 1, color: 'black' // 地面颜色
		//				    }], false),
		label: { // 标签的相关设置
			show: true, // (地图上的城市名称)是否显示标签 [ default: false ]
			distance: 0, // 标签距离图形的距离，在三维的散点图中这个距离是屏幕空间的像素值，其它图中这个距离是相对的三维距离
			textStyle: { // 标签的字体样式
				color: 'black', // 地图初始化区域字体颜色
				fontSize: 14, // 字体大小
				fontWeight: 'bolder',
				opacity: 1, // 字体透明度
				backgroundColor: 'rgba(0,23,11,0)' // 字体背景色
			},
		},
		emphasis: {
			label: {
				textStyle: { // 标签的字体样式
					color: 'white', // 地图初始化区域字体颜色
					fontSize: 14, // 字体大小
					fontWeight: 'bolder',
					borderColor: 'darkred',
					borderWidth: 4,
					opacity: 1, // 字体透明度
					backgroundColor: 'rgba(0,23,11,0)' // 字体背景色
				},
				formatter: function(params) {
					witchRegion = params.name;
					for(var i = 0; i < mapNowNames3Dpro.length; i++) {
						if(mapNowNames3Dpro[i] == witchRegion) {
							return params.name + "招聘岗位数：\n" + mapNowNamesValue3Dpro[i];
							break;
						}
					}

				}

			}
		},
		regions: [],

	},
	visualMap: {
		min: 1026.39,
		max: 72812.55,
		calculable: true,
		text: ['GDP数值'],
		//                  inRange: {
		//                      color: ['oranged','red']
		//                  }
	},
	series: [{
		type: 'bar3D',
		data: [],
		coordinateSystem: 'geo3D',
		shading: 'lambert',
		barSize: 1,
		minHeight: 0.3,
		silent: true,
		label: {
			show: true,
			textStyle: {
				fontSize: 14,
				//					            borderWidth: 1
			},
			formatter: function(params) {
				return mapGDPnamesPro[params.dataIndex] + "GDP:" + params.data[2] + "万亿"
			}
		},
	}]
};

///////////////////////////柱状显示///////////////////////////柱状显示///////////////////////////柱状显示
$.ajax({
	type: "GET",
	async: false,
	url: "data/省级GDP数据(orient='records').json", // 数据处理：001
	dataType: "json",
	success: function(data) {
		//					console.log(data[1].直辖市或省份);
		for(i = 0; i < data.length; i++) {
			//						console.log([data[i].主要城市经度, data[i].主要城市纬度, data[i]["2015年GDP"]]);
			option1.series[0].data.push([data[i].主要城市经度, data[i].主要城市纬度, data[i]["2015年GDP"]]);

			mapGDPnamesChina.push(data[i].直辖市或省份);
		}
	},
	error: function(errorMsg) {
		alert("图表请求数据失败啦!");
	}
});
///////////////////////////地图着色显示///////////////////////////地图着色显示///////////////////////////地图着色显示
var proviences = ["北京", "天津", "上海", "重庆", "河北", "山西",
	"辽宁", "吉林", "黑龙江", "江苏", "浙江", "安徽",
	"福建", "江西", "山东", "河南", "湖北", "湖南",
	"广东", "海南", "四川", "贵州", "云南", "陕西",
	"甘肃", "青海", "内蒙古", "广西", "西藏", "宁夏",
	"新疆", "香港", "澳门", "台湾"
];
proNames = [];
proValues = [];
for(i = 0; i < proviences.length; i++) {
	path = "data/各行政区划数据/" + proviences[i] + "数据/" + proviences[i] + "区域岗位数量统计数据.json"; // 数据处理：8-2.0
	$.ajax({
		type: "GET",
		async: false,
		url: path,
		dataType: "json",
		success: function(data) {
			proNames.push(data[0].Provience);
			proValues.push(data[0]['该区域招聘岗位数量log处理']);

			mapNowNames3Dchina.push(data[0].Provience);
			mapNowNamesValue3Dchina.push(data[0]['该区域招聘岗位数量']);

		},
		error: function(errorMsg) {
			alert("图表请求数据失败啦!");
		}
	});
};
var max = Math.max.apply(null, proValues);
var min = Math.min.apply(null, proValues);

for(i = 0; i < proNames.length; i++) {
	//////////////////   proValues[i]（即data[0].IT技术_占比） 0~1标准化
	var normalizeDegree = (proValues[i] - min) / (max - min);

	//				console.log(max);
	//				console.log(min);
	//				console.log(proValues[i]);
	//				console.log(proNames[i]);
	//				console.log(normalizeDegree);
	//				console.log('\n');

	//				var colorStr = 'rgb('+(140-normalizeDegree*70)+','+(140-normalizeDegree*70)+','+(140-normalizeDegree*70)+')';
	//				var colorStr = hslToRgb(135,208,180-normalizeDegree*100);
	var colorStr = 'rgb(' + (255 - normalizeDegree * 255) + ',' + (255 - normalizeDegree * 255) + ',' + '255)';
	//				console.log(colorStr);
	option1.geo3D.regions.push({
		name: proNames[i],
		itemStyle: {
			color: colorStr
		}
	});
};
///////////////////////////二级地图切换///////////////////////////二级地图切换///////////////////////////二级地图切换
///////////////////////////二级地图切换///////////////////////////二级地图切换///////////////////////////二级地图切换
myChart.getZr().on('click', function(params) { ///////////////////////////鼠标点击事件

	if(convertToPinyin(witchRegion) && witchRegion != "北京" && witchRegion != "天津" && witchRegion != "上海" && witchRegion != "重庆" && witchRegion != "香港" && witchRegion != "澳门" && witchRegion != "台湾") {

		province1 = province2;
		province2 = witchRegion;
		load_pie(witchRegion);
		load_pie_left(province1);
		load_pie_right(province2);
		if(getComputedStyle(document.getElementById("pieBoxBody")).visibility == "visible") {
			document.getElementById('pieTitle').innerHTML = witchRegion + '省招聘薪资水平关联性分析';
		} else {
			document.getElementById('pieTitle').innerHTML = province1 + '与' + province2 + '招聘薪资水平关联性分析对比';
		}

		thisRegion3D = witchRegion;
		option2.geo3D.map = witchRegion;
		///////////////////////////柱状显示///////////////////////////柱状显示///////////////////////////
		fileOpenPathBar = "data/各行政区划数据/" + witchRegion + "数据/" + witchRegion + "的市级GDP数据（orient='records'）.json"; // 数据处理：9
		option2.series[0].data = [];
		thisProGdp = [];
		mapGDPnamesPro = [];
		$.ajax({
			type: "GET",
			async: false,
			url: fileOpenPathBar,
			dataType: "json",
			success: function(data) {
				//					console.log(data[1].直辖市或省份);
				for(i = 0; i < data.length; i++) {
					//						console.log([data[i].主要城市经度, data[i].主要城市纬度, data[i]["2015年GDP"]]);
					option2.series[0].data.push([data[i].经度, data[i].纬度, data[i]["2015年GDP"]]);
					thisProGdp.push(data[i]["2015年GDP"]);
					mapGDPnamesPro.push(data[i].City);
				};
				option2.visualMap.max = Math.max.apply(null, thisProGdp);
				option2.visualMap.min = Math.min.apply(null, thisProGdp);
			},
			error: function(errorMsg) {
				alert("图表请求数据失败啦!");
			}
		});
		///////////////////////////地图着色显示///////////////////////////地图着色显示///////////////////////////地图着色显示
		option2.geo3D.regions = [];
		fileOpenPathColor = "data/各行政区划数据/" + witchRegion + "数据/" + witchRegion + "区域岗位数量统计数据.json";
		var theseCityValue = [];
		var theseCityName = [];
		mapNowNames = [];
		mapNowNamesValue = [];
		$.ajax({
			type: "GET",
			async: false,
			url: fileOpenPathColor,
			dataType: "json",
			success: function(data) {
				for(i = 1; i < data.length; i++) { // 数组第一个是该省总统计数据
					theseCityName.push(data[i]['City']);
					theseCityValue.push(data[i]['该区域招聘岗位数量log处理']);

					mapNowNames3Dpro.push(data[i]['City']);
					mapNowNamesValue3Dpro.push(data[i]['该区域招聘岗位数量']);
				};
			},
			error: function(errorMsg) {
				alert("图表请求数据失败");
			}
		});
		var thisProPerCityValueMax = Math.max.apply(null, theseCityValue);
		var thisProPerCityValueMin = Math.min.apply(null, theseCityValue);
		for(i = 0; i < theseCityName.length; i++) {
			//////////////////   proValues[i]（即data[0].IT技术_占比） 0~1标准化
			var normalizeDegree = (theseCityValue[i] - thisProPerCityValueMin) / (thisProPerCityValueMax - thisProPerCityValueMin);
			//						var colorStr = 'rgb('+(150-normalizeDegree*150)+','+(150-normalizeDegree*150)+','+'255)';
			//						var colorStr = hslToRgb(135,208,180-normalizeDegree*100);
			var colorStr = 'rgb(' + (150 - normalizeDegree * 150) + ',' + (150 - normalizeDegree * 150) + ',' + '255)';
			option2.geo3D.regions.push({
				name: theseCityName[i],
				itemStyle: {
					color: colorStr
				}
			});
		};
		//					for(i=0;i<theseCityName.length;i++){
		//						console.log(theseCityName[i]);
		//						console.log(theseCityValue[i]);
		//					};

		myChart.clear();
		myChart.setOption(option2);
		window.addEventListener("resize", function() {
			myChart.resize();
		});

		document.getElementById("mapTitle").innerHTML = witchRegion + '省就业形势与GDP的关联性分析 ';

	} else if(witchRegion == "北京" || witchRegion == "天津" || witchRegion == "上海" || witchRegion == "重庆" || witchRegion == "香港" || witchRegion == "澳门" || witchRegion == "台湾") {
		province1 = province2;
		province2 = witchRegion;
		load_pie(witchRegion);
		load_pie_left(province1);
		load_pie_right(province2);
		if(getComputedStyle(document.getElementById("pieBoxBody")).visibility == "visible") {
			document.getElementById('pieTitle').innerHTML = witchRegion + '招聘薪资水平关联性分析';
		} else {
			document.getElementById('pieTitle').innerHTML = province1 + '与' + province2 + '招聘薪资水平关联性分析对比';
		}
	}
	witchRegion = ""; //重置获取省份的变量
});
///////////////////////////返回上级地图///////////////////////////返回上级地图///////////////////////////返回上级地图
document.getElementById("fanhuiBTN").onclick = function() {
	//	load_pie('全国');
	//	document.getElementById('pieTitle').innerHTML = '全国招聘薪资水平关联性分析';
	if(thisView == '3D') {
		thisRegion3D = '全国';
		if(myChart.getOption().geo3D.map != 'china') {
			myChart.clear();
			myChart.setOption(option1);
			window.addEventListener("resize", function() {
				myChart.resize();
			});

			document.getElementById("mapTitle").innerHTML = '全国就业形势与GDP的关联性分析 ';
		}
	} else if(thisView == '2D') {
		thisRegion2D = '全国';
		if(optionMap.geo.map != "china") {
			document.getElementById("mapTitle").innerHTML = '全国各行业倾向分析 ';
			document.getElementById("wordCloudTitle").innerHTML = '全国招聘数据特征词 ';

			clickedProvience = "";

			mapChart.clear();
			optionMap.geo.map = 'china';
			optionMap.geo.regions = [];
			optionMap.series = [];

			perRegionName = [];
			perRegionGeo = [];
			perReigionPieData = [];
			perRegionDataSize = [];
			//////////////////////////////////获取每个省份的名字和经纬度数据
			$.ajax({
				type: "GET",
				async: false,
				url: "data/省级GDP数据(orient='records').json", // 数据处理：001
				dataType: "json",
				success: function(data) {
					for(i = 0; i < data.length; i++) {
						perRegionName.push(data[i].直辖市或省份);
						perRegionGeo.push(
							[
								data[i].主要城市经度,
								data[i].主要城市纬度
							]
						);
					}
				}
			});
			//////////////////////////////////获取每个省份的行业类别占比数据
			for(i = 0; i < perRegionName.length; i++) {
				Path = "data/各行政区划数据/" + perRegionName[i] + "数据/" + perRegionName[i] + "行业占比统计数据.json"; // 数据处理：8-1.0
				$.ajax({
					type: "GET",
					async: false,
					url: Path,
					dataType: "json",
					success: function(data) {
						perReigionPieData.push(
							[{
									name: "IT技术",
									value: data[0].IT技术_占比
								},
								{
									name: "金融财经",
									value: data[0].金融财经_占比
								},
								{
									name: "电子制造",
									value: data[0].电子制造_占比
								},
								{
									name: "生活服务",
									value: data[0].生活服务_占比
								},
								{
									name: "其他行业",
									value: data[0].其他行业_占比
								}
							]
						);
						perRegionDataSize.push(Math.log10(data[0].IT技术 + data[0].金融财经 + data[0].电子制造 + data[0].生活服务 + data[0].其他行业));
					}
				});
			}
			//////////////////////////////////删除每个饼图中数据是0行业类别
			for(i = 0; i < perReigionPieData.length; i++) {
				for(j = 0; j < perReigionPieData[i].length; j++) {
					if(perReigionPieData[i][j].value == 0) {
						delete perReigionPieData[i][j];
					}
				}
			}
			//////////////////////////////////计算饼图大小标准化的数值
			minData = Math.min.apply(null, perRegionDataSize);
			maxData = Math.max.apply(null, perRegionDataSize);
			//////////////////////////////////首先画出全国范围内每个省份的饼图
			for(i = 0; i < perRegionName.length; i++) {
				addPieType(optionMap, optionMap.geo, optionMap.series, perRegionName[i], perReigionPieData[i], perRegionDataSize[i], minData, maxData);
			}
			mapChart.setOption(optionMap);
			window.addEventListener("resize", function() {
				mapChart.resize();
			});
			for(i = 0; i < perRegionName.length; i++) {
				optionMap.series[i].center = mapChart.convertToPixel({
					seriesIndex: 0
				}, perRegionGeo[i]);
			}
			mapChart.setOption(optionMap);
			window.addEventListener("resize", function() {
				mapChart.resize();
			});
		}
		optionWordCloud.series[0].data = [];
		$.ajax({
			type: "GET",
			async: false,
			//同步执行
			url: "data/词云数据.json",
			dataType: "json",
			//返回数据形式为json
			success: function(result) {
				if(result) {
					for(x in result) {
						var obj = {
							name: '',
							value: 0
						};
						for(y in result[x]) {
							if(y == "value") { //传入数据
								obj.value = result[x][y];
							} else if(y == "word") {
								obj.name = result[x][y];
							}
						}
						optionWordCloud.series[0].data.push(obj);
					}
				}
			},
			error: function(errorMsg) {
				alert("请求数据失败");
			}
		});
		wordCloudChart.setOption(optionWordCloud);
		window.addEventListener("resize", function() {
			wordCloudChart.resize();
		});
	}

};

myChart.setOption(option1);
window.addEventListener("resize", function() {
	myChart.resize();
});

var wordCloudColors = [
	'#FFE4C4', '#FF6EB4', '#EEAD0E', '#D1EEEE', '#BBFFFF', '#98FB98', '#87CEFA',
	'#18bdbf', '#b4b3f5', '#c8bade', '#ec95ee', '#f2a6c5', '#f77750', '#f5be6b',
	'#f3ea4f', '#b7ea1a', '#b6f476', '#1fcf17', '#60f090', '#47e6a6', '#97f7ec'
]
var wordCloudChart = echarts.init(document.getElementById('wordCloudBoxBody'));
var clickedProvience = "";
var wordCloudPath = "";
optionWordCloud = {
	tooltip: {
		show: true,
		formatter: function(params) {
			return params.name + "<br>" + "出现次数：" + params.value;
		}
	},
	series: [{
		type: 'wordCloud',
		shape: 'pentagon',
		rotationRange: [0, 0],
		//                  	rotationStep: 45,
		//						drawOutOfBound: true,
		textStyle: {
			normal: {
				fontFamily: 'sans-serif',
				fontWeight: 'bold',
				color: function() {
					return wordCloudColors[parseInt(Math.random() * 20)];
				}
			},
			emphasis: {
				shadowBlur: 10,
				shadowColor: '#333'
			}
		},
		data: []
	}]
};

$.ajax({
	type: "GET",
	async: false,
	//同步执行
	url: "data/词云数据.json",
	dataType: "json",
	//返回数据形式为json
	success: function(result) {
		if(result) {
			for(x in result) {
				var obj = {
					name: '',
					value: 0
				};
				for(y in result[x]) {
					if(y == "value") { //传入数据
						obj.value = result[x][y];
					} else if(y == "word") {
						obj.name = result[x][y];
					}
				}
				optionWordCloud.series[0].data.push(obj);
			}
		}
	},
	error: function(errorMsg) {
		alert("请求数据失败");
	}
});

wordCloudChart.setOption(optionWordCloud);
window.addEventListener("resize", function() {
	wordCloudChart.resize();
});

document.getElementById("qiehuanBTN").onclick = function() {
	if(thisView == '3D') {
		thisView = '2D';

		document.getElementById("qiehuanBTN").innerHTML = "就业形势";
		document.getElementById("mapTitle").innerHTML = thisRegion2D + "行业倾向分析";
		document.getElementById("wordCloudTitle").innerHTML = thisRegion2D + "招聘数据特征词";

		if(isFirstQiehuan == 0) {
			optionWordCloud.series[0].data = [];
			$.ajax({
				type: "GET",
				async: false,
				//同步执行
				url: "data/词云数据.json",
				dataType: "json",
				//返回数据形式为json
				success: function(result) {
					if(result) {
						for(x in result) {
							var obj = {
								name: '',
								value: 0
							};
							for(y in result[x]) {
								if(y == "value") { //传入数据
									obj.value = result[x][y];
								} else if(y == "word") {
									obj.name = result[x][y];
								}
							}
							optionWordCloud.series[0].data.push(obj);
						}
					}
				},
				error: function(errorMsg) {
					alert("请求数据失败");
				}
			});
			if(thisView == '2D') {
				wordCloudChart.setOption(optionWordCloud);
				window.addEventListener("resize", function() {
					wordCloudChart.resize();
				});
			}
		}

		document.getElementById("mapChartBox3D").style.visibility = 'hidden';
		document.getElementById("mapChartBox2D").style.visibility = 'visible';
		//					document.getElementById("wordCloudBoxBody").style.visibility = 'visible';

	} else if(thisView == '2D') {
		thisView = '3D';
		document.getElementById("qiehuanBTN").innerHTML = "行业倾向";
		document.getElementById("mapTitle").innerHTML = thisRegion3D + "就业形势与GDP的关联性分析";
		document.getElementById("wordCloudTitle").innerHTML = "全国招聘数据特征词";
		document.getElementById("mapChartBox2D").style.visibility = 'hidden';
		//					document.getElementById("wordCloudBoxBody").style.visibility = 'hidden';
		document.getElementById("mapChartBox3D").style.visibility = 'visible';

		optionWordCloud.series[0].data = [];
		$.ajax({
			type: "GET",
			async: false,
			//同步执行
			url: "data/词云数据.json",
			dataType: "json",
			//返回数据形式为json
			success: function(result) {
				if(result) {
					for(x in result) {
						var obj = {
							name: '',
							value: 0
						};
						for(y in result[x]) {
							if(y == "value") { //传入数据
								obj.value = result[x][y];
							} else if(y == "word") {
								obj.name = result[x][y];
							}
						}
						optionWordCloud.series[0].data.push(obj);
					}
				}
			},
			error: function(errorMsg) {
				alert("请求数据失败");
			}
		});

		wordCloudChart.setOption(optionWordCloud);
		window.addEventListener("resize", function() {
			wordCloudChart.resize();
		});

	}
}
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var mapChart = echarts.init(document.getElementById('mapChartBox2D'));
optionMap = {
	geo: {
		map: 'china',
		label: {
			emphasis: {
				show: true,
			},
		},
		roam: true,
		regions: [],
	},
	series: [],
	tooltip: {
		formatter: function(params) {
			//						console.log(params);
			if(convertToPinyin(params.seriesName) != false) {
				for(var i = 0; i < mapNowNames3Dchina.length; i++) {
					if(mapNowNames3Dchina[i] == params.seriesName) {
						return params.seriesName + "招聘岗位：" + mapNowNamesValue3Dchina[i] + '个，' + params.name + '招聘岗位数占' + params.percent + '%';
						break;

					}
				}
			} else {
				for(var i = 0; i < mapNowNames2Dpro.length; i++) {
					if(mapNowNames2Dpro[i] == params.seriesName) {
						return params.seriesName + "招聘岗位：" + mapNowNamesValue2Dpro[i] + '个，' + params.name + '招聘岗位数占' + params.percent + '%';
						break;

					}
				}
			}
			//						return params.seriesName+params.name+'招聘岗位数占'+params.percent+'%';
			//						return params.seriesName+params.name+'招聘岗位数占'+params.value*100+'%';
		}
	},
};
//////////////////生成pie的函数//////////////////生成pie的函数//////////////////生成pie的函数//////////////////生成pie的函数
function addPieType(optionName, geo, series, thisRegionName, thisReigionPieData, dataSize, minData, maxData) {
	//  max 25px min 10px
	if(minData != maxData)
		dataSizeDegree = (dataSize - minData) / (maxData - minData);
	else //  青海省只有西宁市一个数据，min、max相等。
		dataSizeDegree = 1;
	thisPieSize = (dataSizeDegree * 15 + 10).toString() + 'px';

	thisPieSize = '12px';

	var colorStr2D = 'rgb(' + (255 - dataSizeDegree * 255) + ',' + (255 - dataSizeDegree * 255) + ',' + '255)';
	//				var colorStr2D = hslToRgb(135,208,180-dataSizeDegree*100);
	optionName.geo.regions.push({
		name: thisRegionName,
		itemStyle: {
			color: colorStr2D
		}
	});

	optionName.series.push({
		type: 'pie',
		name: thisRegionName,
		radius: [0, thisPieSize],
		labelLine: {
			normal: {
				show: false
			}
		},
		emphasis: {
			//							labelLine: true
		},
		data: thisReigionPieData
	});
}

function addPieTypePerCity(optionName, geo, series, thisRegionName, thisReigionPieData, dataSize, minData, maxData) {
	//  max 25px min 10px
	if(minData != maxData)
		dataSizeDegree = (dataSize - minData) / (maxData - minData);
	else //  青海省只有西宁市一个数据，min、max相等。
		dataSizeDegree = 1;
	thisPieSize = (dataSizeDegree * 15 + 10).toString() + 'px';

	thisPieSize = '12px';

	var colorStr2D = 'rgb(' + (150 - dataSizeDegree * 255) + ',' + (150 - dataSizeDegree * 255) + ',' + '255)';
	//				var colorStr2D = hslToRgb(135,208,180-dataSizeDegree*100);
	optionName.geo.regions.push({
		name: thisRegionName,
		itemStyle: {
			color: colorStr2D
		}
	});

	optionName.series.push({
		type: 'pie',
		name: thisRegionName,
		radius: [0, thisPieSize],
		labelLine: {
			normal: {
				show: false
			}
		},
		emphasis: {
			//							labelLine: true
		},
		data: thisReigionPieData
	});
}
//////////////////生成pie的函数//////////////////生成pie的函数//////////////////生成pie的函数//////////////////生成pie的函数

//////////////////全国范围内每个省份//////////////////全国范围内每个省份//////////////////全国范围内每个省份//////////////////全国范围内每个省份
perRegionName = [];
perRegionGeo = [];
perReigionPieData = [];
perRegionDataSize = [];
//////////////////////////////////获取每个省份的名字和经纬度数据
$.ajax({
	type: "GET",
	async: false,
	url: "data/省级GDP数据(orient='records').json", // 数据处理：001
	dataType: "json",
	success: function(data) {
		for(i = 0; i < data.length; i++) {
			perRegionName.push(data[i].直辖市或省份);
			perRegionGeo.push(
				[
					data[i].主要城市经度,
					data[i].主要城市纬度
				]
			);
		}
	}
});
//////////////////////////////////获取每个省份的行业类别占比数据
for(i = 0; i < perRegionName.length; i++) {
	Path = "data/各行政区划数据/" + perRegionName[i] + "数据/" + perRegionName[i] + "行业占比统计数据.json"; // 数据处理：8-1.0
	$.ajax({
		type: "GET",
		async: false,
		url: Path,
		dataType: "json",
		success: function(data) {
			perReigionPieData.push(
				[{
						name: "IT技术",
						value: data[0].IT技术_占比
					},
					{
						name: "金融财经",
						value: data[0].金融财经_占比
					},
					{
						name: "电子制造",
						value: data[0].电子制造_占比
					},
					{
						name: "生活服务",
						value: data[0].生活服务_占比
					},
					{
						name: "其他行业",
						value: data[0].其他行业_占比
					}
				]
			);
			perRegionDataSize.push(Math.log10(data[0].IT技术 + data[0].金融财经 + data[0].电子制造 + data[0].生活服务 + data[0].其他行业));

		}
	});
}
//////////////////////////////////删除每个饼图中数据是0行业类别
for(i = 0; i < perReigionPieData.length; i++) {
	for(j = 0; j < perReigionPieData[i].length; j++) {
		if(perReigionPieData[i][j].value == 0) {
			delete perReigionPieData[i][j];
		}
	}
}
//////////////////////////////////计算饼图大小标准化的数值
minData = Math.min.apply(null, perRegionDataSize);
maxData = Math.max.apply(null, perRegionDataSize);
//////////////////////////////////首先画出全国范围内每个省份的饼图
for(i = 0; i < perRegionName.length; i++) {
	addPieType(optionMap, optionMap.geo, optionMap.series, perRegionName[i], perReigionPieData[i], perRegionDataSize[i], minData, maxData);
}
mapChart.setOption(optionMap);
window.addEventListener("resize", function() {
	mapChart.resize();
});
for(i = 0; i < perRegionName.length; i++) {
	optionMap.series[i].center = mapChart.convertToPixel({
		seriesIndex: 0
	}, perRegionGeo[i]);
}
mapChart.setOption(optionMap);
window.addEventListener("resize", function() {
	mapChart.resize();
});
//////////////////全国范围内每个省份//////////////////全国范围内每个省份//////////////////全国范围内每个省份//////////////////全国范围内每个省份

//////////////////点击事件二级地图//////////////////点击事件二级地图//////////////////点击事件二级地图//////////////////点击事件二级地图
var allowedClickedRegions = ["河北", "山西", "新疆", "辽宁", "吉林",
	"黑龙江", "江苏", "浙江", "安徽", "福建",
	"江西", "山东", "河南", "湖北", "湖南",
	"广东", "海南", "四川", "贵州", "云南",
	"陕西", "甘肃", "青海", "内蒙古", "广西",
	"西藏", "宁夏"
];

function isItAllCli(regionName) { // 仅允许省份区域有点击事件
	var flag = false;
	for(i = 0; i < allowedClickedRegions.length; i++) {
		if(regionName == allowedClickedRegions[i]) {
			flag = true;
			break;
		}
	}
	return flag;
}
mapChart.on('click', function(params) { ///////////////////////////鼠标点击事件
	if(params.componentType == 'geo' && isItAllCli(params.name)) { // 地图

		//					alert(params.name);
		load_pie(params.name);
		province1 = province2;
		province2 = params.name;
		load_pie_left(province1);
		load_pie_right(province2);
		if(getComputedStyle(document.getElementById("pieBoxBody")).visibility == "visible") {
			document.getElementById('pieTitle').innerHTML = params.name + '省招聘薪资水平关联性分析';
		} else {
			document.getElementById('pieTitle').innerHTML = province1 + '与' + province2 + '招聘薪资水平关联性分析对比';
		};

		thisRegion2D = params.name;
		document.getElementById("mapTitle").innerHTML = params.name + '省行业倾向分析 ';
		document.getElementById("wordCloudTitle").innerHTML = params.name + '省招聘数据特征词 ';
		//					console.log(params.name);

		clickedProvience = params.name;

		perRegionName = [];
		perRegionGeo = [];
		perReigionPieData = [];
		perRegionDataSize = [];
		path1 = "data/各行政区划数据/" + params.name + "数据/" + params.name + "的市级GDP数据（orient='records'）.json"; // 数据处理：9
		path2 = "data/各行政区划数据/" + params.name + "数据/" + params.name + "行业占比统计数据.json"; // 数据处理：8-1.0
		path3 = "data/各行政区划数据/" + params.name + "数据/" + params.name + "区域岗位数量统计数据2D.json"; // 数据处理：8-2.0
		//////////////////////////////////获取每个城市的名字和经纬度数据
		$.ajax({
			type: "GET",
			async: false,
			url: path1,
			dataType: "json",
			success: function(data) {
				for(i = 0; i < data.length; i++) {
					perRegionName.push(data[i].City);
					perRegionGeo.push(
						[
							data[i].经度,
							data[i].纬度
						]
					);
				}
			}
		});
		//////////////////////////////////获取每个城市的行业类别占比数据
		$.ajax({
			type: "GET",
			async: false,
			url: path2,
			dataType: "json",
			success: function(data) {
				for(i = 1; i < data.length; i++) {
					perReigionPieData.push(
						[{
								name: "IT技术",
								value: data[i].IT技术_占比
							},
							{
								name: "金融财经",
								value: data[i].金融财经_占比
							},
							{
								name: "电子制造",
								value: data[i].电子制造_占比
							},
							{
								name: "生活服务",
								value: data[i].生活服务_占比
							},
							{
								name: "其他行业",
								value: data[i].其他行业_占比
							}
						]
					);
					mapNowNames2Dpro.push(data[i].City);
					mapNowNamesValue2Dpro.push(data[i].IT技术 + data[i].金融财经 + data[i].电子制造 + data[i].生活服务 + data[i].其他行业);
				}
			}
		});
		$.ajax({
			type: "GET",
			async: false,
			url: path3,
			dataType: "json",
			success: function(data) {
				for(i = 1; i < data.length; i++) {
					perRegionDataSize.push(data[i]['该区域招聘岗位数量log处理']);
				}
			}
		});
		//////////////////////////////////删除每个饼图中数据是0行业类别
		for(i = 0; i < perReigionPieData.length; i++) {
			for(j = 0; j < perReigionPieData[i].length; j++) {
				if(perReigionPieData[i][j].value == 0) {
					delete perReigionPieData[i][j];
				}
			}
		}
		//////////////////////////////////计算饼图大小标准化的数值
		minData = Math.min.apply(null, perRegionDataSize);
		maxData = Math.max.apply(null, perRegionDataSize);
		//////////////////////////////////画出这个省份内每个城市的饼图
		mapChart.clear();
		optionMap.geo.map = params.name;
		optionMap.geo.regions = [];
		optionMap.series = [];

		for(i = 0; i < perRegionName.length; i++) {
			addPieTypePerCity(optionMap, optionMap.geo, optionMap.series, perRegionName[i], perReigionPieData[i], perRegionDataSize[i], minData, maxData);
		}
		mapChart.setOption(optionMap);
		window.addEventListener("resize", function() {
			mapChart.resize();
		});
		for(i = 0; i < perRegionName.length; i++) {
			optionMap.series[i].center = mapChart.convertToPixel({
				seriesIndex: 0
			}, perRegionGeo[i]);
		}
		mapChart.setOption(optionMap);
		window.addEventListener("resize", function() {
			mapChart.resize();
		});
		///////////////////////// 省份词云
		wordCloudPath = "data/各行政区划数据/" + params.name + "数据/" + params.name + "词云数据.json";
		optionWordCloud.series[0].data = [];
		$.ajax({
			type: "GET",
			async: false,
			//同步执行
			url: wordCloudPath,
			dataType: "json",
			//返回数据形式为json
			success: function(result) {
				if(result) {
					for(x in result) {
						var obj = {
							name: '',
							value: 0
						};
						for(y in result[x]) {
							if(y == "value") { //传入数据
								obj.value = result[x][y];
							} else if(y == "word") {
								obj.name = result[x][y];
							}
						}
						optionWordCloud.series[0].data.push(obj);
					}
				}
			},
			error: function(errorMsg) {
				alert("请求词云数据失败");
			}
		});
		wordCloudChart.setOption(optionWordCloud);
		window.addEventListener("resize", function() {
			wordCloudChart.resize();
		});
	} else if(params.componentType == 'geo' && (params.name == '北京' || params.name == '天津' || params.name == '上海' || params.name == '重庆' || params.name == '香港' || params.name == '澳门' || params.name == '台湾')) {

		//					alert(params.name);
		load_pie(params.name);
		//		document.getElementById('pieTitle').innerHTML = params.name + '招聘薪资水平关联性分析';
		province1 = province2;
		province2 = params.name;
		load_pie_left(province1);
		load_pie_right(province2);
		if(getComputedStyle(document.getElementById("pieBoxBody")).visibility == "visible") {
			document.getElementById('pieTitle').innerHTML = params.name + '招聘薪资水平关联性分析';
		} else {
			document.getElementById('pieTitle').innerHTML = province1 + '与' + province2 + '招聘薪资水平关联性分析对比';
		};
		/////直辖市词云
		thisRegion2D = params.name;
		document.getElementById("wordCloudTitle").innerHTML = thisRegion2D + '招聘数据特征词 ';
		wordCloudPath = "data/各行政区划数据/" + params.name + "数据/" + params.name + "数据/" + "词云数据.json";
		optionWordCloud.series[0].data = [];
		$.ajax({
			type: "GET",
			async: false,
			//同步执行
			url: wordCloudPath,
			dataType: "json",
			//返回数据形式为json
			success: function(result) {
				if(result) {
					for(x in result) {
						var obj = {
							name: '',
							value: 0
						};
						for(y in result[x]) {
							if(y == "value") { //传入数据
								obj.value = result[x][y];
							} else if(y == "word") {
								obj.name = result[x][y];
							}
						}
						optionWordCloud.series[0].data.push(obj);
					}
				}
			},
			error: function(errorMsg) {
				alert("请求词云数据失败");
			}
		});
		wordCloudChart.setOption(optionWordCloud);
		window.addEventListener("resize", function() {
			wordCloudChart.resize();
		});
	} else if((params.componentType == 'geo') && (thisCityInOriginData(params.name) == true)) {
		//					console.log(params.name);
		/////城市词云
		document.getElementById("wordCloudTitle").innerHTML = clickedProvience + params.name + '招聘数据特征词 ';
		wordCloudPath = "data/各行政区划数据/" + clickedProvience + "数据/" + params.name + "数据/" + "词云数据.json";
		optionWordCloud.series[0].data = [];
		$.ajax({
			type: "GET",
			async: false,
			//同步执行
			url: wordCloudPath,
			dataType: "json",
			//返回数据形式为json
			success: function(result) {
				if(result) {
					for(x in result) {
						var obj = {
							name: '',
							value: 0
						};
						for(y in result[x]) {
							if(y == "value") { //传入数据
								obj.value = result[x][y];
							} else if(y == "word") {
								obj.name = result[x][y];
							}
						}
						optionWordCloud.series[0].data.push(obj);
					}
				}
			},
			error: function(errorMsg) {
				alert("请求词云数据失败");
			}
		});
		wordCloudChart.setOption(optionWordCloud);
		window.addEventListener("resize", function() {
			wordCloudChart.resize();
		});
	} else if(params.componentType == 'series') { // 饼图
		//					console.log(clickedProvience);//地方
		//					console.log(params.seriesName);//地方
		//					console.log(params.name);//行业
		document.getElementById("wordCloudTitle").innerHTML = clickedProvience + params.seriesName + params.name + '业招聘数据特征词 ';
		wordCloudPath = "";
		if(regionDegree(params.seriesName) == 'provience') {
			clickedProvience = params.seriesName;
			wordCloudPath = "data/各行政区划数据/" + params.seriesName + "数据/" + params.seriesName + params.name + "词云数据.json";
			//						console.log("111");//行业
		} else if(params.seriesName == '北京' || params.seriesName == '天津' || params.seriesName == '上海' || params.seriesName == '重庆' || params.seriesName == '香港' || params.seriesName == '澳门' || params.seriesName == '台湾') {
			wordCloudPath = "data/各行政区划数据/" + params.seriesName + "数据/" + params.seriesName + "数据/" + params.name + "词云数据.json";
			//						console.log("222");//行业
		} else if(thisCityInOriginData(params.seriesName) == true) {
			wordCloudPath = "data/各行政区划数据/" + clickedProvience + "数据/" + params.seriesName + "数据/" + params.name + "词云数据.json";
			//						console.log("333");//行业
		}
		optionWordCloud.series[0].data = [];
		$.ajax({
			type: "GET",
			async: false,
			//同步执行
			url: wordCloudPath,
			dataType: "json",
			//返回数据形式为json
			success: function(result) {
				if(result) {
					for(x in result) {
						var obj = {
							name: '',
							value: 0
						};
						for(y in result[x]) {
							if(y == "value") { //传入数据
								obj.value = result[x][y];
							} else if(y == "word") {
								obj.name = result[x][y];
							}
						}
						optionWordCloud.series[0].data.push(obj);
					}
				}
			},
			error: function(errorMsg) {
				alert("请求词云数据失败");
			}
		});
		wordCloudChart.setOption(optionWordCloud);
		window.addEventListener("resize", function() {
			wordCloudChart.resize();
		});
	}
});
mapChart.on('georoam', function(params) {
	optionMap.geo.regions = [];
	optionMap.series = [];

	if(thisRegion2D == '全国') {
		for(i = 0; i < perRegionName.length; i++) {
			addPieType(optionMap, optionMap.geo, optionMap.series, perRegionName[i], perReigionPieData[i], perRegionDataSize[i], minData, maxData);
		}
		mapChart.setOption(optionMap);
		window.addEventListener("resize", function() {
			mapChart.resize();
		});
		for(i = 0; i < perRegionName.length; i++) {
			optionMap.series[i].center = mapChart.convertToPixel({
				seriesIndex: 0
			}, perRegionGeo[i]);
		}
		mapChart.setOption(optionMap);
		window.addEventListener("resize", function() {
			mapChart.resize();
		});
	} else {
		for(i = 0; i < perRegionName.length; i++) {
			addPieTypePerCity(optionMap, optionMap.geo, optionMap.series, perRegionName[i], perReigionPieData[i], perRegionDataSize[i], minData, maxData);
		}
		mapChart.setOption(optionMap);
		window.addEventListener("resize", function() {
			mapChart.resize();
		});
		for(i = 0; i < perRegionName.length; i++) {
			optionMap.series[i].center = mapChart.convertToPixel({
				seriesIndex: 0
			}, perRegionGeo[i]);
		}
		mapChart.setOption(optionMap);
		window.addEventListener("resize", function() {
			mapChart.resize();
		});
	}
});

var oBtn1 = document.getElementById('ChangeBTN');
var oBtn2 = document.getElementById('ReturnBTN');
var oDiv1 = document.getElementById('pieBoxBody');
var oDiv2 = document.getElementById('pieBoxBodyLeft');
var oDiv3 = document.getElementById('pieBoxBodyRight');
oBtn1.onclick = function() {
	document.getElementById('pieTitle').innerHTML = province1 + '与' + province2 + '招聘薪资水平关联性分析对比';
	oDiv1.style.visibility = 'hidden';
	oDiv2.style.visibility = 'visible';
	oDiv3.style.visibility = 'visible';
};
oBtn2.onclick = function() {
	document.getElementById('pieTitle').innerHTML = '全国招聘薪资水平关联性分析';
	load_pie('全国')
	oDiv1.style.visibility = 'visible';
	oDiv2.style.visibility = 'hidden';
	oDiv3.style.visibility = 'hidden';
};