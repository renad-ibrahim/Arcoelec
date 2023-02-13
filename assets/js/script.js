//  * * **  ** * *nav menu * **** ** **  ** 
$(function(){
  $(".toggle").on("click" , function(){
      if($(".menu").hasClass("active")){
          $(".menu").removeClass("active");
          $(this).find("a").html(" <i class='fa-solid fa-bars'></i>");
      }
      else{
          $(".menu").addClass("active");
          $(this).find("a").html(" <i class='fa-solid fa-xmark close'></i>");
      }
  })
});
// * * * **  ** * ** *Scroll Up button * * * * * ** * 
let btn = $('#button');
$(window).scroll(function() {
if ($(window).scrollTop() > 300) {
  btn.addClass('show');
} else {
  btn.removeClass('show');
}
});
btn.on('click', function(e) {
e.preventDefault();
$('html, body').animate({scrollTop:0}, '300');
});
// * *** * * * ** ** * Change Lang * * ** * ** * ** * 
  $('.lang').on('click',function(){
    event.preventDefault();
    let lang = $(this).html(); 
    
    let current_page = window.location.href.split('/')[window.location.href.split('/').length-1];
    console.log(current_page);
    console.log(lang);
    
    if(lang.toLowerCase() == 'en'){
        if(current_page.indexOf('en') == -1){
            current_page = [current_page.slice(0,5)+"EN"+current_page.slice(5)];
        }
    }else{
             current_page = current_page.replace("EN" , "");
         
    }
   window.location = current_page;
});
// Counter Reasones why section*****************************************************
let nums = document.querySelectorAll(".num");

let section =document.querySelector('.why');

let started = false;

window.onscroll = function (){
  if(window.scrollY >= section.offsetTop-350){
      if(!started){
          nums.forEach((num) => startCount(num)) 
      }
      started = true;
  }
}

function startCount(el){
  let goal = el.dataset.goal;
  let count = setInterval(() =>{
      el.textContent++;
      if(el.textContent == goal){
          clearInterval(count);
      }
  } , 2000 /goal);
}
// Validation Form ****************************************************************
let teaxtarea = document.getElementById("textarea").value;

$("input").click(function (e) { 
  $(e.target).css({"text-align": "start" , "background-color" : "transparent" , "color" : "white"});
});

$("#userEmail").on('input' , function(){
  let regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  if(regex.test(userEmail.value) == true){
      if(userEmail.classList.contains("is-invalid") == true){
          userEmail.classList.replace("is-invalid" , "is-valid");
          document.getElementById("emailMsg").innerHTML = "";
      }
      return true;
  }
  else{
      userEmail.classList.add('is-invalid');
      document.getElementById("emailMsg").innerHTML = "Enter valid email";
      document.getElementById("emailMsg").style.color = "rgb(243, 54, 54)";
      return false;
  }
});

$("#userNumber").on('input' , function(){
  let regex = /^01[0125][0-9]{8}$/;

  if(regex.test(userNumber.value) == true){
      if(userNumber.classList.contains("is-invalid") == true){
          userNumber.classList.replace("is-invalid" , "is-valid");
          document.getElementById("phoneMsg").innerHTML = "";
      }
      return true;
  }
  else{
      userNumber.classList.add('is-invalid');
      document.getElementById("phoneMsg").innerHTML = "Enter valid Phone Number";
          document.getElementById("phoneMsg").style.color = "rgb(243, 54, 54)";
      return false;
  }
});

$("#btn").on('click' , function(){
   if(userEmail.value == ""){
      document.getElementById("emailMsg").innerHTML = "Please fill this input";
      document.getElementById("emailMsg").style.color = "rgb(243, 54, 54)";
  }
  else if(userNumber.value == ""){
      document.getElementById("phoneMsg").innerHTML = "Please fill this input";
      document.getElementById("phoneMsg").style.color = "rgb(243, 54, 54)";
  }
  else if(teaxtarea == ""){
      document.getElementById("clientMsg").innerHTML = "Leave your Meassage Please";
      document.getElementById("clientMsg").style.color = "rgb(243, 54, 54)";
  }
  else{
      let form = document.getElementById('form');
      form.submit();
  }
});

