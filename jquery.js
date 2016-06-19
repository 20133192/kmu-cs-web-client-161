$('input').focus(function(){
  $(this).next('span').removeAttr('hidden');
});

$('input').blur(function(){
  $(this).next('span').attr('hidden','hidden');
});

////////////////////////////////
$('.main1').animate({fontSize:"3.0em"},2000);


setTimeout(function(){ $('#sentence1').removeAttr('hidden');},2500);
setTimeout(function(){ $('#sentence2').removeAttr('hidden');},3500);
setTimeout(function(){ $('#sentence3').removeAttr('hidden');},4500);
setTimeout(function(){ $('#sentence4').removeAttr('hidden');},5500);
///////////////////////////////


$('#btn-1').click(function(){
  var var_1 = $('#input-1').val();
  var var_2 = $('#input-2').val();
  var var_3 = $('#input-3').val();
  var var_4 = $('#input-4').val();

  if(var_1!="" && var_2!="" && var_3!="" && var_4!=""){
    var con_test = confirm(var_3 + "에 재학 중이신 "+var_1+"님!\n"+"입력하신 정보가 정확합니까?");
    if(con_test==true){
      alert($('#input-1').val() + " 님의 신청이 완료되었습니다.");
      document.getElementById("form_1").reset()
    }
    else {
      alert("다시 입력해주세요!!!!")

    }
  }
  else {
    alert("모든 항목을 입력해주셔야 신청이 가능합니다.");
  }
})

$("#april").click(function(){
  $('.img_april').fadeIn();
  $('.img_may').fadeOut();
  $('.img_june').fadeOut();
})

$("#may").click(function(){
  $('.img_may').fadeIn();
  $('.img_april').fadeOut();
  $('.img_june').fadeOut();
})

$("#june").click(function(){
  $('.img_june').fadeIn();
  $('.img_april').fadeOut();
  $('.img_may').fadeOut();
})
$("#all").click(function(){
  $('.img_april').fadeIn();
  $('.img_may').fadeIn();
  $('.img_june').fadeIn();
})

// for(var i=0;i<10;i++){
// $('.main3').animate({ opacity:"0.5"},2000);
// $('.main3').animate({ opacity:"1.0"},2000);
// }

//사이드 바
$("div.side_bar_div").click(function(){
  $(this).find('img').attr('src','left-arrow.png');
  $('div.side_bar_div').animate({left:"100px"},1000);
  $("ul.side_bar_ul").animate({left:"0px"},1000);



})



$(".side_bar_ul li").click(function(){
  $("div.side_bar_div").find('img').attr('src','right-arrow.png');
  $("ul.side_bar_ul").animate({left:"-100px"},1000);
  $("div.side_bar_div").animate({left:"0px"},1000);

})





//메뉴바
function test_one(n){
  $('html,body').stop().animate({
      scrollTop:$('#total div.main').eq(n).offset().top
  },1000);
}

function test_two(n){
  $('html,body').stop().animate({
    scrollTop:$('#total div.application1').eq(n).offset().top
  },1000);
}

function test_three(n){
  $('html, body').stop().animate({
    scrollTop:$('#total div.wantpeople1-1').eq(n).offset().top
  },1000);
}

function test_four(n){
  $('html, body').stop().animate({
    scrollTop:$('#total div.profile').eq(n).offset().top
  },1000);
}

function test_five(n){
  $('html, body').stop().animate({
    scrollTop:$('#total div.picture-title').eq(n).offset().top
  },1000);
}


/////////////표 한국어 영어
$('#korean').click(function(){
  $('#cap-1').text("기획자 기본 정보");
  $('#cap-2').text("1기 멤버 정보");
  $('#th-1-1').text("구분");
  $('#th-1-2').text("구민준");
  $('#th-1-3').text("엄형근");
  $('#th-1-4').text("생년월일");
  $('#th-1-5').text("1994년 7월 11일");
  $('#th-1-6').text("1993년 10월 21일");
  $('#th-1-7').text("거주지역");
  $('#th-1-8').text("서울특별시 성북구");
  $('#th-1-9').text("서울특별시 서초구");
  $('#th-1-10').text("연락처");
  $('#th-1-11').text("학력");
  $('#th-1-12').html('<a class="major" href="http://www.cs.kookmin.ac.kr">국민대학교 컴퓨터공학부</a>');
  $('#th-1-13').html('<a class="major" href="http://www.cs.kookmin.ac.kr">국민대학교 컴퓨터공학부</a>');
  $('#th-1-14').text("병력사항");
  $('#th-1-15').text("'15.12 병장 만기전역")
  $('#th-1-16').text("'15.12 병장 만기전역")


  $('#th-2-1').text("구분");
  $('#th-2-2').text("차민준");
  $('#th-2-3').text("오한샘");
  $('#th-2-4').text("생년월일");
  $('#th-2-5').text("1993년 11월 3일");
  $('#th-2-6').text("1993년 8월 14일");
  $('#th-2-7').text("거주지역");
  $('#th-2-8').text("서울특별시 마포구");
  $('#th-2-9').text("경기도 일산");
  $('#th-2-10').text("연락처");
  $('#th-2-11').text("학력");
  $('#th-2-12').html('<a class="major" href="http://www.cs.kookmin.ac.kr">국민대학교 컴퓨터공학부</a>');
  $('#th-2-13').html('<a class="major" href="http://www.cs.kookmin.ac.kr">국민대학교 컴퓨터공학부</a>');
  $('#th-2-14').text("병력사항");
  $('#th-2-15').text("'16.03 병장 만기전역")
  $('#th-2-16').text("'16.103 병장 만기전역")

})

$('#english').click(function(){
  $('#cap-1').text("Planner Information");
  $('#cap-2').text("1st Member Information");
  $('#th-1-1').text("Part");
  $('#th-1-2').text("Koo Min Jun");
  $('#th-1-3').text("Eum Hyung Geun");
  $('#th-1-4').text("Birth Date");
  $('#th-1-5').text("11st, July, 1994");
  $('#th-1-6').text("21st, Oct, 1993");
  $('#th-1-7').text("Occupied Area");
  $('#th-1-8').text("Seongbuk-gu, Seoul");
  $('#th-1-9').text("Seocho-gu, Seoul");
  $('#th-1-10').text("Phone Number");
  $('#th-1-11').text("Academic Ability");
  $('#th-1-12').html('<a class="major" href="http://www.cs.kookmin.ac.kr">Computer Science,\n Kookmin Univ.</a>');
  $('#th-1-13').html('<a class="major" href="http://www.cs.kookmin.ac.kr">Computer Sceince,\n Kookmin Univ.</a>');
  $('#th-1-14').text("Military Service");
  $('#th-1-15').text("Discharged from Army('15.12)")
  $('#th-1-16').text("Discharged from Army('15.12)")

  $('#th-2-1').text("Part");
  $('#th-2-2').text("Cha Min Jun");
  $('#th-2-3').text("Oh Han Sam");
  $('#th-2-4').text("Birth Date");
  $('#th-2-5').text("3rd, Nob, 1993");
  $('#th-2-6').text("14st, Aug, 1993");
  $('#th-2-7').text("Occupied Area");
  $('#th-2-8').text("Mapo-gu, Seoul");
  $('#th-2-9').text("Ilsan, Gyeong-gi");
  $('#th-2-10').text("Phone Number");
  $('#th-2-11').text("Academic Ability");
  $('#th-2-12').html('<a class="major" href="http://www.cs.kookmin.ac.kr">Computer Science,\n Kookmin Univ.</a>');
  $('#th-2-13').html('<a class="major" href="http://www.cs.kookmin.ac.kr">Computer Sceince,\n Kookmin Univ.</a>');
  $('#th-2-14').text("Military Service");
  $('#th-2-15').text("Discharged from Army ('16.03)")
  $('#th-2-16').text("Discharged from Army ('16.03)")
})
