function regionDegree(regionName){
	var proviences = ['云南', '内蒙古', '吉林', '四川', '宁夏', '安徽', 
				  '山东', '山西','广东', '广西', '新疆', '江苏', 
				  '江西', '河北', '河南', '浙江', '海南', '湖北', 
				  '湖南', '甘肃', '福建', '西藏', '贵州', '辽宁', 
				  '陕西', '青海', '黑龙江']
	for(i=0;i<proviences.length;i++){
    	if(regionName == proviences[i]) {
    		return 'provience';
    		break;
    	}
	}
}
function thisCityInOriginData(regionName){
	var cities = ['临沧市','丽江市','保山市','大理白族自治州','德宏傣族景颇族自治州','普洱市',
				  '昆明市','昭通市','曲靖市','玉溪市','红河哈尼族彝族自治州','西双版纳傣族自治州',
				  '乌兰察布市','包头市','呼伦贝尔市','呼和浩特市','赤峰市','吉林市','四平市',
				  '延边朝鲜族自治州','松原市','白城市','白山市','辽源市','通化市','长春市','乐山市',
				  '内江市','凉山彝族自治州','南充市','宜宾市','巴中市','广元市','广安市','德阳市',
				  '成都市','攀枝花市','泸州市','眉山市','绵阳市','自贡市','资阳市','达州市','遂宁市',
				  '雅安市','吴忠市','石嘴山市','银川市','亳州市','六安市','合肥市','安庆市','宣城市',
				  '宿州市','池州市','淮北市','淮南市','滁州市','芜湖市','蚌埠市','铜陵市','阜阳市',
				  '马鞍山市','黄山市','东营市','临沂市','威海市','德州市','日照市','枣庄市','泰安市',
				  '济南市','济宁市','淄博市','滨州市','潍坊市','烟台市','聊城市','莱芜市','菏泽市',
				  '青岛市','临汾市','大同市','太原市','忻州市','晋中市','晋城市','运城市','长治市',
				  '阳泉市','东莞市','中山市','云浮市','佛山市','广州市','惠州市','揭阳市','梅州市',
				  '汕头市','汕尾市','江门市','河源市','深圳市','清远市','湛江市','潮州市','珠海市',
				  '肇庆市','茂名市','阳江市','韶关市','北海市','南宁市','崇左市','来宾市','柳州市',
				  '桂林市','梧州市','河池市','玉林市','百色市','贵港市','贺州市','钦州市','防城港市',
				  '乌鲁木齐市','克拉玛依市','昌吉回族自治州','石河子市','南京市','南通市','苏州市',
				  '宿迁市','常州市','徐州市','扬州市','无锡市','泰州市','淮安市','盐城市','连云港市',
				  '镇江市','上饶市','九江市','南昌市','吉安市','宜春市','抚州市','新余市','景德镇市',
				  '赣州市','鹰潭市','保定市','唐山市','廊坊市','张家口市','承德市','沧州市','石家庄市',
				  '秦皇岛市','衡水市','邢台市','邯郸市','三门峡市','信阳市','南阳市','周口市','商丘市',
				  '安阳市','平顶山市','开封市','新乡市','洛阳市','漯河市','濮阳市','焦作市','许昌市',
				  '郑州市','驻马店市','鹤壁市','丽水市','台州市','嘉兴市','宁波市','杭州市','温州市',
				  '湖州市','绍兴市','舟山市','衢州市','金华市','三亚市','海口市','十堰市','咸宁市',
				  '孝感市','宜昌市','武汉市','荆州市','荆门市','襄阳市','鄂州市','随州市','黄冈市',
				  '黄石市','娄底市','岳阳市','常德市','张家界市','怀化市','株洲市','永州市','湘潭市',
				  '湘西土家族苗族自治州','益阳市','衡阳市','邵阳市','郴州市','长沙市','兰州市','嘉峪关市',
				  '天水市','定西市','平凉市','庆阳市','张掖市','武威市','白银市','酒泉市','金昌市',
				  '陇南市','三明市','南平市','厦门市','宁德市','泉州市','漳州市','福州市','莆田市',
				  '龙岩市','拉萨市','日喀则市','六盘水市','安顺市','毕节市','贵阳市','遵义市',
				  '黔东南苗族侗族自治州','黔南布依族苗族自治州','丹东市','大连市','抚顺市','朝阳市',
				  '沈阳市','盘锦市','营口市','葫芦岛市','辽阳市','铁岭市','锦州市','鞍山市','咸阳市',
				  '商洛市','安康市','宝鸡市','延安市','榆林市','汉中市','渭南市','西安市','铜川市',
				  '西宁市','七台河市','伊春市','佳木斯市','双鸭山市','哈尔滨市','大庆市','牡丹江市',
				  '绥化市','鸡西市','鹤岗市','黑河市','齐齐哈尔市']
	var flag = false;
	for(var i=0;i<cities.length;i++){
    	if(cities[i] == regionName) {
    		flag = true;
    		break;
    	}
	}
	return flag;
}