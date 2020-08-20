document.getElementById("submit").onclick = function() {
	var thisProvience = "";
	var thisCity = "";
	var thisIndustry = "";
	thisProvience = document.getElementById("provience").value;
	thisCity = document.getElementById("city").value;
	thisIndustry = document.getElementById("industry").value;

	if(thisProvience == "" && thisIndustry != "" && (thisCity == "北京" || thisCity == "北京市" || thisCity == "天津" || thisCity == "天津市" || thisCity == "上海" || thisCity == "上海市" || thisCity == "重庆" || thisCity == "重庆市" || thisCity == "香港" || thisCity == "澳门" || thisCity == "台湾")) {

		var realcity = '';
		if(thisCity.length == 3) {
			for(var i = 0; i < 2; i++) {
				realcity = realcity + thisCity[i]
			}

			$("#jobTable").html('');
			var s = "<thead><tr><th>" + '序号' + "</th><th>" + '公司名称' + "</th><th>" + '主营范围' + "</th></tr></thead>";
			$("#jobTable").append(s);
			path = "data/各行政区划数据/" + realcity + "数据/" + realcity + "数据/" + thisIndustry + ".json";
			$.ajax({
				type: "GET",
				async: false,
				url: path,
				dataType: "json",
				success: function(data) {
					var s = '<tbody>';
					for(i = 0; i < data.length; i++) {
						s = s + "<tr><td>" + "<font>" + i + "</font>" + "</td><td>" + "<font>" + data[i].CompanyShortName + "</font>" + "</td><td>" + "<font>" + data[i]['IndustryField'] + "</font>" + "</td></tr>";
					}
					s = s + '</tbody>';
					$("#jobTable").append(s);
				},
				error: function(errorMsg) {
					alert("图表请求数据失败");
				}
			});
			document.getElementById("jobTitle").innerHTML = thisCity + thisIndustry + '业公司列表';
		} else if(thisCity.length == 2) {
			$("#jobTable").html('');
			var s = "<thead><tr><th>" + '序号' + "</th><th>" + '公司名称' + "</th><th>" + '主营范围' + "</th></tr></thead>";
			$("#jobTable").append(s);
			path = "data/各行政区划数据/" + thisCity + "数据/" + thisCity + "数据/" + thisIndustry + ".json";
			$.ajax({
				type: "GET",
				async: false,
				url: path,
				dataType: "json",
				success: function(data) {
					var s = '<tbody>';
					for(i = 0; i < data.length; i++) {
						s = s + "<tr><td>" + "<font>" + i + "</font>" + "</td><td>" + "<font>" + data[i].CompanyShortName + "</font>" + "</td><td>" + "<font>" + data[i]['IndustryField'] + "</font>" + "</td></tr>";
					}
					s = s + '</tbody>';
					$("#jobTable").append(s);
				},
				error: function(errorMsg) {
					alert("图表请求数据失败");
				}
			});
			document.getElementById("jobTitle").innerHTML = thisCity + '市' + thisIndustry + '业公司列表';
		}
	} else if(thisProvience == "" || thisCity == "" || thisIndustry == "") {
		$("#jobTable").html('');
		alert("请在搜索框内输入完整信息！");
	} else {
		$("#jobTable").html('');
		var s = "<thead><tr><th>" + '序号' + "</th><th>" + '公司名称' + "</th><th>" + '主营范围' + "</th></tr></thead>";
		$("#jobTable").append(s);
		path = "data/各行政区划数据/" + thisProvience + "数据/" + thisCity + "数据/" + thisIndustry + ".json";
		$.ajax({
			type: "GET",
			async: false,
			url: path,
			dataType: "json",
			success: function(data) {
				var s = '<tbody>';
				for(i = 0; i < data.length; i++) {
					s = s + "<tr><td>" + "<font>" + i + "</font>" + "</td><td>" + "<font>" + data[i].CompanyShortName + "</font>" + "</td><td>" + "<font>" + data[i]['IndustryField'] + "</font>" + "</td></tr>";
				}
				s = s + '</tbody>';
				$("#jobTable").append(s);
			},
			error: function(errorMsg) {
				alert("图表请求数据失败");
			}
		});
		document.getElementById("jobTitle").innerHTML = thisProvience + thisCity + thisIndustry + '业公司列表';
	}

};