function load_pie(province) {
	var pieChart = echarts.init(document.getElementById('pieBoxBody'));
	var option;
	var slist = ['0K-3K', '3K-5K', '5K-7K', '7K-10K', '10K-15K', '15K-25K', '25K-50K', '50K以上'];
	var E_data = [],
		CS_data = [],
		IF_data = [],
		WY_data = [];
	var path1 = 'data/pie_data/' + province + '/CompanySize_data.json';
	var path2 = 'data/pie_data/' + province + '/Education_data.json';
	var path3 = 'data/pie_data/' + province + '/IndustryField_data.json';
	var path4 = 'data/pie_data/' + province + '/workyear_data.json';

	E_data = [];
	CS_data = [];
	IF_data = [];
	WY_data = [];
	$.ajax({
		type: "GET",
		async: false,
		url: path1,
		dataType: "json",
		success: function(data) {
			for(var i = 0; i < slist.length; i++) {
				CS_data[i] = [];
				for(var j = 0; j < data.length; j++) {
					if(data[j].newSalary == slist[i]) {
						CS_data[i].push(data[j])
					}
				}
			};
		},
		error: function(errorMsg) {
			alert("请求数据失败!");
		}
	});
	$.ajax({
		type: "GET",
		async: false,
		url: path2,
		dataType: "json",
		success: function(data) {
			for(var i = 0; i < slist.length; i++) {
				E_data[i] = [];
				for(var j = 0; j < data.length; j++) {
					if(data[j].newSalary == slist[i]) {
						E_data[i].push(data[j])
					}

				}
			};
		},
		error: function(errorMsg) {
			alert("请求数据失败!");
		}
	});
	$.ajax({
		type: "GET",
		async: false,
		url: path3,
		dataType: "json",
		success: function(data) {
			for(var i = 0; i < slist.length; i++) {
				IF_data[i] = [];
				for(var j = 0; j < data.length; j++) {
					if(data[j].newSalary == slist[i]) {
						IF_data[i].push(data[j])
					}

				}
			};
		},
		error: function(errorMsg) {
			alert("请求数据失败!");
		}
	});
	$.ajax({
		type: "GET",
		async: false,
		url: path4,
		dataType: "json",
		success: function(data) {
			for(var i = 0; i < slist.length; i++) {
				WY_data[i] = [];
				for(var j = 0; j < data.length; j++) {
					if(data[j].newSalary == slist[i]) {
						WY_data[i].push(data[j])
					}

				}
			};
		},
		error: function(errorMsg) {
			alert("请求数据失败!");
		}
	});
	option = {
		baseOption: {
			timeline: {
				axisType: 'category',
				data: ['0K-3K', '3K-5K', '5K-7K', '7K-10K', '10K-15K', '15K-25K', '25K-50K', '50K以上'],
				autoPlay: false,
				playInterval: 2000,
				left: '10%',
				itemStyle: {
					normal: {
						color: "darkred"
					}
				},
				label: {
					show: true,
					textStyle: {
						color: 'white'
					}
				}
			},
			//			title: {
			//				subtext: province + '招聘信息统计'
			//			},
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b}: {c} ({d}%)"

			},
			//								color:['#d50000','#ff1744','#ff5252','#ff8a80','#b71c1c','#c62828','#f44336','#e57373',
			//								'#aa00ff','#d500f9','#e040fb','#ea80fc','#6a1b9a','#ab47bc',
			//								'#304ffe','#3d5afe','#536dfe','#8c9eff','#1a237e','#283593','#5c6bc0','#9fa8da',
			//								'#00bfa5','#004d40','#00695c','#00796b','#00897b','#26a69a','#4db6ac','#1b5e20','#2e7d32','#33691e','#558b2f','#7cb342'],
			legend: {
				type: 'scroll',
				orient: 'vertical',
				right: 0,
				top: 20,
				bottom: 20,
				data: ['1-3年', '10年以上', '1年以下', '3-5年', '5-10年', '不限', '应届毕业生', '无经验',
					'15-50人', '150-500人', '2000人以上', '50-150人', '500-2000人', '少于15人',
					'博士', '大专', '学历不限', '本科', '硕士', '中专', '初中', '高中',
					'移动互联网', '电子商务', '金融', 'O2O', '企业服务', '数据服务', '教育', '文化娱乐', '招聘', '其他', '硬件', '游戏'
				],
				show: true,
				textStyle: { //图例文字的样式
					color: '#ccc',
					fontSize: 16
				}
			},
			series: [{
					name: '公司规模',
					type: 'pie',
					center: ['11%', '45%'],
					radius: ['50%', '70%'],
					avoidLabelOverlap: false,
					label: {
						normal: {
							show: true,
							position: 'center',
							formatter: function() {
								return '公司规模'
							},
							textStyle: {
								fontSize: 30,
								fontWeight: 'bold',
							}
						},
						emphasis: {
							show: true,
							formatter: "\n\n\n{b}: {d}%",
							textStyle: {
								fontSize: 15,
								fontWeight: 'bold',
							}
						},
					},

					labelLine: {
						normal: {
							show: false
						}

					},
				},
				{
					name: '教育程度',
					type: 'pie',
					center: ['33%', '45%'],
					radius: ['50%', '70%'],
					avoidLabelOverlap: false,
					label: {
						normal: {
							show: true,
							position: 'center',
							formatter: function() {
								return '教育程度'
							},
							textStyle: {
								fontSize: 30,
								fontWeight: 'bold',
							}
						},
						emphasis: {
							show: true,
							formatter: "\n\n\n{b}: {d}%",
							textStyle: {
								fontSize: 15,
								fontWeight: 'bold',
							}
						},
					},

					labelLine: {
						normal: {
							show: false
						}
					},
				},
				{
					name: '行业种类',
					type: 'pie',
					center: ['55%', '45%'],
					radius: ['50%', '70%'],
					avoidLabelOverlap: false,
					label: {
						normal: {
							show: true,
							position: 'center',
							formatter: function() {
								return '行业种类'
							},
							textStyle: {
								fontSize: 30,
								fontWeight: 'bold',
							}
						},
						emphasis: {
							show: true,
							formatter: "\n\n\n{b}: {d}%",
							textStyle: {
								fontSize: 15,
								fontWeight: 'bold',
							}
						}
					},
					labelLine: {
						normal: {
							show: false
						}
					},
				},
				{
					name: '学历',
					type: 'pie',
					center: ['77%', '45%'],
					radius: ['50%', '70%'],
					avoidLabelOverlap: false,
					label: {
						normal: {
							show: true,
							position: 'center',
							formatter: function() {
								return '工作经验'
							},
							textStyle: {
								fontSize: 30,
								fontWeight: 'bold',

							}
						},
						emphasis: {
							show: true,
							formatter: "\n\n\n{b}: {d}%",
							textStyle: {
								fontSize: 15,
								fontWeight: 'bold',
							}
						}
					},
					labelLine: {
						normal: {
							show: false
						}
					},
				}
			],
		},
		options: [{
				title: {
					text: '薪资：0K-3K',
					textStyle: {
						color: "white",
						fontSize: 24
					}
				},
				series: [{
					data: CS_data[0]
				}, {
					data: E_data[0]
				}, {
					data: IF_data[0]
				}, {
					data: WY_data[0]
				}]
			}, {
				title: {
					text: '薪资：3K-5K'
				},
				series: [{
					data: CS_data[1]
				}, {
					data: E_data[1]
				}, {
					data: IF_data[1]
				}, {
					data: WY_data[1]
				}]
			}, {
				title: {
					text: '薪资：5K-7K'
				},
				series: [{
					data: CS_data[2]
				}, {
					data: E_data[2]
				}, {
					data: IF_data[2]
				}, {
					data: WY_data[2]
				}]
			}, {
				title: {
					text: '薪资：7K-10K'
				},
				series: [{
					data: CS_data[3]
				}, {
					data: E_data[3]
				}, {
					data: IF_data[3]
				}, {
					data: WY_data[3]
				}]
			}, {
				title: {
					text: '薪资：10K-15K'
				},
				series: [{
					data: CS_data[4]
				}, {
					data: E_data[4]
				}, {
					data: IF_data[4]
				}, {
					data: WY_data[4]
				}]
			}, {
				title: {
					text: '薪资：15K-25K'
				},
				series: [{
					data: CS_data[5]
				}, {
					data: E_data[5]
				}, {
					data: IF_data[5]
				}, {
					data: WY_data[5]
				}]
			}, {
				title: {
					text: '薪资：25K-50K'
				},
				series: [{
					data: CS_data[6]
				}, {
					data: E_data[6]
				}, {
					data: IF_data[6]
				}, {
					data: WY_data[6]
				}]
			}, {
				title: {
					text: '薪资：50k以上'
				},
				series: [{
					data: CS_data[7]
				}, {
					data: E_data[7]
				}, {
					data: IF_data[7]
				}, {
					data: WY_data[7]
				}]
			}

		],
	};
	pieChart.setOption(option);
}
load_pie('全国');

function load_pie_left(province) {
	p1=province;
	var pieChart = echarts.init(document.getElementById('pieBoxBodyLeft'));
	var option;
	var slist = ['0K-3K', '3K-5K', '5K-7K', '7K-10K', '10K-15K', '15K-25K', '25K-50K', '50K以上'];
	var E_data = [],
		CS_data = [],
		IF_data = [],
		WY_data = [];
	var path1 = 'data/pie_data/' + province + '/CompanySize_data.json';
	var path2 = 'data/pie_data/' + province + '/Education_data.json';
	var path3 = 'data/pie_data/' + province + '/IndustryField_data.json';
	var path4 = 'data/pie_data/' + province + '/workyear_data.json';

	E_data = [];
	CS_data = [];
	IF_data = [];
	WY_data = [];
	$.ajax({
		type: "GET",
		async: false,
		url: path1,
		dataType: "json",
		success: function(data) {
			for(var i = 0; i < slist.length; i++) {
				CS_data[i] = [];
				for(var j = 0; j < data.length; j++) {
					if(data[j].newSalary == slist[i]) {
						CS_data[i].push(data[j])
					}
				}
			};
		},
		error: function(errorMsg) {
			alert("请求数据失败!");
		}
	});
	$.ajax({
		type: "GET",
		async: false,
		url: path2,
		dataType: "json",
		success: function(data) {
			for(var i = 0; i < slist.length; i++) {
				E_data[i] = [];
				for(var j = 0; j < data.length; j++) {
					if(data[j].newSalary == slist[i]) {
						E_data[i].push(data[j])
					}

				}
			};
		},
		error: function(errorMsg) {
			alert("请求数据失败!");
		}
	});
	$.ajax({
		type: "GET",
		async: false,
		url: path3,
		dataType: "json",
		success: function(data) {
			for(var i = 0; i < slist.length; i++) {
				IF_data[i] = [];
				for(var j = 0; j < data.length; j++) {
					if(data[j].newSalary == slist[i]) {
						IF_data[i].push(data[j])
					}

				}
			};
		},
		error: function(errorMsg) {
			alert("请求数据失败!");
		}
	});
	$.ajax({
		type: "GET",
		async: false,
		url: path4,
		dataType: "json",
		success: function(data) {
			for(var i = 0; i < slist.length; i++) {
				WY_data[i] = [];
				for(var j = 0; j < data.length; j++) {
					if(data[j].newSalary == slist[i]) {
						WY_data[i].push(data[j])
					}

				}
			};
		},
		error: function(errorMsg) {
			alert("请求数据失败!");
		}
	});
	option = {
		baseOption: {
			timeline: {
				axisType: 'category',
				data: ['0K-3K', '3K-5K', '5K-7K', '7K-10K', '10K-15K', '15K-25K', '25K-50K', '50K以上'],
				autoPlay: false,
				playInterval: 2000,
				left: '10%',
				itemStyle: {
					normal: {
						color: "darkred"
					}
				},
				label: {
					show: true,
					textStyle: {
						color: 'white'
					}
				}
			},
			//			title: {
			//				subtext: province + '招聘信息统计'
			//			},
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b}: {c} ({d}%)"

			},
			//								color:['#d50000','#ff1744','#ff5252','#ff8a80','#b71c1c','#c62828','#f44336','#e57373',
			//								'#aa00ff','#d500f9','#e040fb','#ea80fc','#6a1b9a','#ab47bc',
			//								'#304ffe','#3d5afe','#536dfe','#8c9eff','#1a237e','#283593','#5c6bc0','#9fa8da',
			//								'#00bfa5','#004d40','#00695c','#00796b','#00897b','#26a69a','#4db6ac','#1b5e20','#2e7d32','#33691e','#558b2f','#7cb342'],
			legend: {
				type: 'scroll',
				orient: 'vertical',
				right: 0,
				top: 20,
				bottom: 20,
				data: ['1-3年', '10年以上', '1年以下', '3-5年', '5-10年', '不限', '应届毕业生', '无经验',
					'15-50人', '150-500人', '2000人以上', '50-150人', '500-2000人', '少于15人',
					'博士', '大专', '学历不限', '本科', '硕士', '中专', '初中', '高中',
					'移动互联网', '电子商务', '金融', 'O2O', '企业服务', '数据服务', '教育', '文化娱乐', '招聘', '其他', '硬件', '游戏'
				],
				show: false,
				textStyle: { //图例文字的样式
					color: '#ccc',
					fontSize: 16
				}
			},
			series: [{
					name: '公司规模',
					type: 'pie',
					center: ['14%', '45%'],
					radius: ['30%', '45%'],
					avoidLabelOverlap: false,
					label: {
						normal: {
							show: true,
							position: 'center',
							formatter: function() {
								return '公司规模'
							},
							textStyle: {
								fontSize: 20,
								fontWeight: 'bold',
							}
						},
						emphasis: {
							show: true,
							formatter: "\n\n\n{b}: {d}%",
							textStyle: {
								fontSize: 12,
								fontWeight: 'bold',
							}
						},
					},

					labelLine: {
						normal: {
							show: false
						}

					},
				},
				{
					name: '教育程度',
					type: 'pie',
					center: ['38%', '45%'],
					radius: ['30%', '45%'],
					avoidLabelOverlap: false,
					label: {
						normal: {
							show: true,
							position: 'center',
							formatter: function() {
								return '教育程度'
							},
							textStyle: {
								fontSize: 20,
								fontWeight: 'bold',
							}
						},
						emphasis: {
							show: true,
							formatter: "\n\n\n{b}: {d}%",
							textStyle: {
								fontSize: 12,
								fontWeight: 'bold',
							}
						},
					},

					labelLine: {
						normal: {
							show: false
						}
					},
				},
				{
					name: '行业种类',
					type: 'pie',
					center: ['62%', '45%'],
					radius: ['30%', '45%'],
					avoidLabelOverlap: false,
					label: {
						normal: {
							show: true,
							position: 'center',
							formatter: function() {
								return '行业种类'
							},
							textStyle: {
								fontSize: 20,
								fontWeight: 'bold',
							}
						},
						emphasis: {
							show: true,
							formatter: "\n\n\n{b}: {d}%",
							textStyle: {
								fontSize: 12,
								fontWeight: 'bold',
							}
						}
					},
					labelLine: {
						normal: {
							show: false
						}
					},
				},
				{
					name: '学历',
					type: 'pie',
					center: ['86%', '45%'],
					radius: ['30%', '45%'],
					avoidLabelOverlap: false,
					label: {
						normal: {
							show: true,
							position: 'center',
							formatter: function() {
								return '工作经验'
							},
							textStyle: {
								fontSize: 20,
								fontWeight: 'bold',

							}
						},
						emphasis: {
							show: true,
							formatter: "\n\n\n{b}: {d}%",
							textStyle: {
								fontSize: 12,
								fontWeight: 'bold',
							}
						}
					},
					labelLine: {
						normal: {
							show: false
						}
					},
				}
			],
		},
		options: [{
				title: {
					text: province+'(薪资：0K-3K)',
					textStyle: {
						color: "white",
						fontSize: 24
					}
				},
				series: [{
					data: CS_data[0]
				}, {
					data: E_data[0]
				}, {
					data: IF_data[0]
				}, {
					data: WY_data[0]
				}]
			}, {
				title: {
					text: province+'(薪资：3K-5K)'
				},
				series: [{
					data: CS_data[1]
				}, {
					data: E_data[1]
				}, {
					data: IF_data[1]
				}, {
					data: WY_data[1]
				}]
			}, {
				title: {
					text: province+'(薪资：5K-7K)'
				},
				series: [{
					data: CS_data[2]
				}, {
					data: E_data[2]
				}, {
					data: IF_data[2]
				}, {
					data: WY_data[2]
				}]
			}, {
				title: {
					text: province+'(薪资：7K-10K)'
				},
				series: [{
					data: CS_data[3]
				}, {
					data: E_data[3]
				}, {
					data: IF_data[3]
				}, {
					data: WY_data[3]
				}]
			}, {
				title: {
					text: province+'(薪资：10K-15K)'
				},
				series: [{
					data: CS_data[4]
				}, {
					data: E_data[4]
				}, {
					data: IF_data[4]
				}, {
					data: WY_data[4]
				}]
			}, {
				title: {
					text: province+'(薪资：15K-25K)'
				},
				series: [{
					data: CS_data[5]
				}, {
					data: E_data[5]
				}, {
					data: IF_data[5]
				}, {
					data: WY_data[5]
				}]
			}, {
				title: {
					text: province+'(薪资：25K-50K)'
				},
				series: [{
					data: CS_data[6]
				}, {
					data: E_data[6]
				}, {
					data: IF_data[6]
				}, {
					data: WY_data[6]
				}]
			}, {
				title: {
					text: province+'(薪资：50k以上)'
				},
				series: [{
					data: CS_data[7]
				}, {
					data: E_data[7]
				}, {
					data: IF_data[7]
				}, {
					data: WY_data[7]
				}]
			}

		],
	};
	pieChart.setOption(option);
}

function load_pie_right(province) {
	p2=province;
	var pieChart = echarts.init(document.getElementById('pieBoxBodyRight'));
	var option;
	var slist = ['0K-3K', '3K-5K', '5K-7K', '7K-10K', '10K-15K', '15K-25K', '25K-50K', '50K以上'];
	var E_data = [],
		CS_data = [],
		IF_data = [],
		WY_data = [];
	var path1 = 'data/pie_data/' + province + '/CompanySize_data.json';
	var path2 = 'data/pie_data/' + province + '/Education_data.json';
	var path3 = 'data/pie_data/' + province + '/IndustryField_data.json';
	var path4 = 'data/pie_data/' + province + '/workyear_data.json';

	E_data = [];
	CS_data = [];
	IF_data = [];
	WY_data = [];
	$.ajax({
		type: "GET",
		async: false,
		url: path1,
		dataType: "json",
		success: function(data) {
			for(var i = 0; i < slist.length; i++) {
				CS_data[i] = [];
				for(var j = 0; j < data.length; j++) {
					if(data[j].newSalary == slist[i]) {
						CS_data[i].push(data[j])
					}
				}
			};
		},
		error: function(errorMsg) {
			alert("请求数据失败!");
		}
	});
	$.ajax({
		type: "GET",
		async: false,
		url: path2,
		dataType: "json",
		success: function(data) {
			for(var i = 0; i < slist.length; i++) {
				E_data[i] = [];
				for(var j = 0; j < data.length; j++) {
					if(data[j].newSalary == slist[i]) {
						E_data[i].push(data[j])
					}

				}
			};
		},
		error: function(errorMsg) {
			alert("请求数据失败!");
		}
	});
	$.ajax({
		type: "GET",
		async: false,
		url: path3,
		dataType: "json",
		success: function(data) {
			for(var i = 0; i < slist.length; i++) {
				IF_data[i] = [];
				for(var j = 0; j < data.length; j++) {
					if(data[j].newSalary == slist[i]) {
						IF_data[i].push(data[j])
					}

				}
			};
		},
		error: function(errorMsg) {
			alert("请求数据失败!");
		}
	});
	$.ajax({
		type: "GET",
		async: false,
		url: path4,
		dataType: "json",
		success: function(data) {
			for(var i = 0; i < slist.length; i++) {
				WY_data[i] = [];
				for(var j = 0; j < data.length; j++) {
					if(data[j].newSalary == slist[i]) {
						WY_data[i].push(data[j])
					}

				}
			};
		},
		error: function(errorMsg) {
			alert("请求数据失败!");
		}
	});
	option = {
		baseOption: {
			timeline: {
				axisType: 'category',
				data: ['0K-3K', '3K-5K', '5K-7K', '7K-10K', '10K-15K', '15K-25K', '25K-50K', '50K以上'],
				autoPlay: false,
				playInterval: 2000,
				left: '10%',
				itemStyle: {
					normal: {
						color: "darkred"
					}
				},
				label: {
					show: true,
					textStyle: {
						color: 'white'
					}
				}
			},
			//			title: {
			//				subtext: province + '招聘信息统计'
			//			},
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b}: {c} ({d}%)"

			},
			//								color:['#d50000','#ff1744','#ff5252','#ff8a80','#b71c1c','#c62828','#f44336','#e57373',
			//								'#aa00ff','#d500f9','#e040fb','#ea80fc','#6a1b9a','#ab47bc',
			//								'#304ffe','#3d5afe','#536dfe','#8c9eff','#1a237e','#283593','#5c6bc0','#9fa8da',
			//								'#00bfa5','#004d40','#00695c','#00796b','#00897b','#26a69a','#4db6ac','#1b5e20','#2e7d32','#33691e','#558b2f','#7cb342'],
			legend: {
				type: 'scroll',
				orient: 'vertical',
				right: 0,
				top: 20,
				bottom: 20,
				data: ['1-3年', '10年以上', '1年以下', '3-5年', '5-10年', '不限', '应届毕业生', '无经验',
					'15-50人', '150-500人', '2000人以上', '50-150人', '500-2000人', '少于15人',
					'博士', '大专', '学历不限', '本科', '硕士', '中专', '初中', '高中',
					'移动互联网', '电子商务', '金融', 'O2O', '企业服务', '数据服务', '教育', '文化娱乐', '招聘', '其他', '硬件', '游戏'
				],
				show: false,
				textStyle: { //图例文字的样式
					color: '#ccc',
					fontSize: 16
				}
			},
			series: [{
					name: '公司规模',
					type: 'pie',
					center: ['14%', '45%'],
					radius: ['30%', '45%'],
					avoidLabelOverlap: false,
					label: {
						normal: {
							show: true,
							position: 'center',
							formatter: function() {
								return '公司规模'
							},
							textStyle: {
								fontSize: 20,
								fontWeight: 'bold',
							}
						},
						emphasis: {
							show: true,
							formatter: "\n\n\n{b}: {d}%",
							textStyle: {
								fontSize: 12,
								fontWeight: 'bold',
							}
						},
					},

					labelLine: {
						normal: {
							show: false
						}

					},
				},
				{
					name: '教育程度',
					type: 'pie',
					center: ['38%', '45%'],
					radius: ['30%', '45%'],
					avoidLabelOverlap: false,
					label: {
						normal: {
							show: true,
							position: 'center',
							formatter: function() {
								return '教育程度'
							},
							textStyle: {
								fontSize: 20,
								fontWeight: 'bold',
							}
						},
						emphasis: {
							show: true,
							formatter: "\n\n\n{b}: {d}%",
							textStyle: {
								fontSize: 12,
								fontWeight: 'bold',
							}
						},
					},

					labelLine: {
						normal: {
							show: false
						}
					},
				},
				{
					name: '行业种类',
					type: 'pie',
					center: ['62%', '45%'],
					radius: ['30%', '45%'],
					avoidLabelOverlap: false,
					label: {
						normal: {
							show: true,
							position: 'center',
							formatter: function() {
								return '行业种类'
							},
							textStyle: {
								fontSize: 20,
								fontWeight: 'bold',
							}
						},
						emphasis: {
							show: true,
							formatter: "\n\n\n{b}: {d}%",
							textStyle: {
								fontSize: 12,
								fontWeight: 'bold',
							}
						}
					},
					labelLine: {
						normal: {
							show: false
						}
					},
				},
				{
					name: '学历',
					type: 'pie',
					center: ['86%', '45%'],
					radius: ['30%', '45%'],
					avoidLabelOverlap: false,
					label: {
						normal: {
							show: true,
							position: 'center',
							formatter: function() {
								return '工作经验'
							},
							textStyle: {
								fontSize: 20,
								fontWeight: 'bold',

							}
						},
						emphasis: {
							show: true,
							formatter: "\n\n\n{b}: {d}%",
							textStyle: {
								fontSize: 12,
								fontWeight: 'bold',
							}
						}
					},
					labelLine: {
						normal: {
							show: false
						}
					},
				}
			],
		},
		options: [{
				title: {
					text: province+'(薪资：0K-3K)',
					textStyle: {
						color: "white",
						fontSize: 24
					}
				},
				series: [{
					data: CS_data[0]
				}, {
					data: E_data[0]
				}, {
					data: IF_data[0]
				}, {
					data: WY_data[0]
				}]
			}, {
				title: {
					text: province+'(薪资：3K-5K)'
				},
				series: [{
					data: CS_data[1]
				}, {
					data: E_data[1]
				}, {
					data: IF_data[1]
				}, {
					data: WY_data[1]
				}]
			}, {
				title: {
					text: province+'(薪资：5K-7K)'
				},
				series: [{
					data: CS_data[2]
				}, {
					data: E_data[2]
				}, {
					data: IF_data[2]
				}, {
					data: WY_data[2]
				}]
			}, {
				title: {
					text: province+'(薪资：7K-10K)'
				},
				series: [{
					data: CS_data[3]
				}, {
					data: E_data[3]
				}, {
					data: IF_data[3]
				}, {
					data: WY_data[3]
				}]
			}, {
				title: {
					text: province+'(薪资：10K-15K)'
				},
				series: [{
					data: CS_data[4]
				}, {
					data: E_data[4]
				}, {
					data: IF_data[4]
				}, {
					data: WY_data[4]
				}]
			}, {
				title: {
					text: province+'(薪资：15K-25K)'
				},
				series: [{
					data: CS_data[5]
				}, {
					data: E_data[5]
				}, {
					data: IF_data[5]
				}, {
					data: WY_data[5]
				}]
			}, {
				title: {
					text: province+'(薪资：25K-50K)'
				},
				series: [{
					data: CS_data[6]
				}, {
					data: E_data[6]
				}, {
					data: IF_data[6]
				}, {
					data: WY_data[6]
				}]
			}, {
				title: {
					text: province+'(薪资：50k以上)'
				},
				series: [{
					data: CS_data[7]
				}, {
					data: E_data[7]
				}, {
					data: IF_data[7]
				}, {
					data: WY_data[7]
				}]
			}

		],
	};
	pieChart.setOption(option);
}
load_pie_left("全国")
load_pie_right("全国")
