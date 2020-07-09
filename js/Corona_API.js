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
    document.getElementById("TotalCase").innerHTML = total.TotalCase+"명";
    document.getElementById("TotalRecovered").innerHTML = total.TotalRecovered+"명";
    document.getElementById("TotalDeath").innerHTML = total.TotalDeath+"명";
    document.getElementById("NowCase").innerHTML = total.NowCase+"명";
    document.getElementById("TodayRecovered").innerHTML = total.TodayRecovered+"명";
    document.getElementById("TodayDeath").innerHTML = total.TodayDeath+"명";
    document.getElementById("recoveredPercentage").innerHTML = total.recoveredPercentage+"%";
    document.getElementById("updateTime").innerHTML = total.updateTime;
    total_check=0;
    cityinfo_check=0;
    document.getElementById("loading").style.display="none";
}
console.log("coronaAPI done");
var test = new Corona_information();