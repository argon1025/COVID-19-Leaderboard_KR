var confirmed = {'서울':0,'부산':0,'대구':0,'인천':0,'광주':0,'대전':0,'울산':0,'세종':0,'경기':0,'강원':0,'충청북도':0,'충청남도':0,'전라북도':0,'전라남도':0,'경상북도':0,'경상남도':0,'제주도':0};

[].forEach.call(document.querySelectorAll('path.land'), function(item) {
// item.addEventListener('click', function(){
//   var sel =this
//   });

item.addEventListener('mouseenter', function() {

      $('#info-box').css('display','block');
      document.getElementById('info-box').innerHTML=this.getAttribute("title") + "<br />" + "확진자: " + confirmed[(this.getAttribute("title")).toLowerCase()]
      +"<br />" + "사망자: 0명"

});
item.addEventListener('mouseleave', function(){
  $('#info-box').css('display','none');
});
})

$(document).mousemove(function(e) {
$('#info-box').css('top',e.pageY-$('#info-box').height()-100);
$('#info-box').css('left',e.pageX-($('#info-box').width())-200);
}).mouseover();