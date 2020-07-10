var total = {};
var cityinfo = {};
var total_check=0;
var cityinfo_check=0;
function Corona_information() {
}
Corona_information.prototype.ver = 1;
Corona_information.prototype.proxyurl = "http://www.whateverorigin.org/get?url=";

Corona_information.prototype.Get_total = function () {
    console.log("Get_total")
    const url = "http://api.corona-19.kr/korea/?serviceKey=bcf119365dc84768ea4d055fd74c765ab";
    $.getJSON(this.proxyurl + encodeURIComponent(url) + '&callback=?', function (data) {
        total = JSON.parse(data.contents);
        total_check = 1;
    });
}
Corona_information.prototype.Get_cityinfo = function () {
    console.log("Get_cityinfo")
    const url = "http://api.corona-19.kr/korea/country/new/?serviceKey=bcf119365dc84768ea4d055fd74c765ab";
    $.getJSON(this.proxyurl + encodeURIComponent(url) + '&callback=?', function (data) {
        cityinfo = JSON.parse(data.contents);
        cityinfo_check = 1;
    });
}
Corona_information.prototype.GetUpdate_all = function () {
    this.Get_total();
    this.Get_cityinfo();
    this.Update_button();
    this.UpdateChecker();
    document.getElementById("loading").style.display="block";
}
Corona_information.prototype.Update_button = function(){
    let today = new Date();
    console.log(today.toLocaleTimeString());
    document.getElementById("last_update_time").innerText = today.toLocaleTimeString();
}
Corona_information.prototype.UpdateChecker = function(){
    if(cityinfo_check==1&&total_check==1){
        this.create_table();
    } else {
        setTimeout(this.UpdateChecker.bind(this), 2000);
    }
}
Corona_information.prototype.create_table = function(){
    document.getElementById("TotalCase").innerHTML = total.TotalCase;
    document.getElementById("TotalRecovered").innerHTML = total.TotalRecovered;
    document.getElementById("TotalDeath").innerHTML = total.TotalDeath;
    document.getElementById("NowCase").innerHTML = total.NowCase;
    document.getElementById("TodayRecovered").innerHTML = total.TodayRecovered;
    document.getElementById("TodayDeath").innerHTML = total.TodayDeath;
    document.getElementById("recoveredPercentage").innerHTML = total.recoveredPercentage;
    document.getElementById("updateTime").innerHTML = total.updateTime;
    total_check=0;
    cityinfo_check=0;
    document.getElementById("loading").style.display="none";
    $('.alert').alert('close');
    total_case.서울 = cityinfo.seoul.totalCase;
    total_case.부산 = cityinfo.busan.totalCase;
    total_case.대구 = cityinfo.daegu.totalCase;
    total_case.인천 = cityinfo.incheon.totalCase;
    total_case.광주 = cityinfo.gwangju.totalCase;
    total_case.대전 = cityinfo.daejeon.totalCase;
    total_case.울산 = cityinfo.ulsan.totalCase;
    total_case.세종 = cityinfo.sejong.totalCase;
    total_case.경기 = cityinfo.gyeonggi.totalCase;
    total_case.강원 = cityinfo.gangwon.totalCase;
    total_case.충청북도 = cityinfo.chungbuk.totalCase;
    total_case.충청남도 = cityinfo.chungnam.totalCase;
    total_case.전라북도 = cityinfo.jeonbuk.totalCase;
    total_case.전라남도 = cityinfo.jeonnam.totalCase;
    total_case.경상북도 = cityinfo.gyeongbuk.totalCase;
    total_case.경상남도 = cityinfo.gyeongnam.totalCase;
    total_case.제주도 = cityinfo.jeju.totalCase;

    new_case.서울 = cityinfo.seoul.newCase;
    new_case.부산 = cityinfo.busan.newCase;
    new_case.대구 = cityinfo.daegu.newCase;
    new_case.인천 = cityinfo.incheon.newCase;
    new_case.광주 = cityinfo.gwangju.newCase;
    new_case.대전 = cityinfo.daejeon.newCase;
    new_case.울산 = cityinfo.ulsan.newCase;
    new_case.세종 = cityinfo.sejong.newCase;
    new_case.경기 = cityinfo.gyeonggi.newCase;
    new_case.강원 = cityinfo.gangwon.newCase;
    new_case.충청북도 = cityinfo.chungbuk.newCase;
    new_case.충청남도 = cityinfo.chungnam.newCase;
    new_case.전라북도 = cityinfo.jeonbuk.newCase;
    new_case.전라남도 = cityinfo.jeonnam.newCase;
    new_case.경상북도 = cityinfo.gyeongbuk.newCase;
    new_case.경상남도 = cityinfo.gyeongnam.newCase;
    new_case.제주도 = cityinfo.jeju.newCase;

    city_death.서울 = cityinfo.seoul.death;
    city_death.부산 = cityinfo.busan.death;
    city_death.대구 = cityinfo.daegu.death;
    city_death.인천 = cityinfo.incheon.death;
    city_death.광주 = cityinfo.gwangju.death;
    city_death.대전 = cityinfo.daejeon.death;
    city_death.울산 = cityinfo.ulsan.death;
    city_death.세종 = cityinfo.sejong.death;
    city_death.경기 = cityinfo.gyeonggi.death;
    city_death.강원 = cityinfo.gangwon.death;
    city_death.충청북도 = cityinfo.chungbuk.death;
    city_death.충청남도 = cityinfo.chungnam.death;
    city_death.전라북도 = cityinfo.jeonbuk.death;
    city_death.전라남도 = cityinfo.jeonnam.death;
    city_death.경상북도 = cityinfo.gyeongbuk.death;
    city_death.경상남도 = cityinfo.gyeongnam.death;
    city_death.제주도 = cityinfo.jeju.death;
}
console.log("coronaAPI is loading..");
var test = new Corona_information();