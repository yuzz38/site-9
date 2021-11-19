$(document).ready(function(){
  $(".header-burger").click(function(){
     $( ".nav-wrapper" ).slideToggle();
     $(".header-burger").toggleClass("header-burger--active");
     $("#body").toggleClass("body-hidden");
});
})
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
      panel.style.borderBottom = '0px';
     
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.style.borderBottom = '2px solid #7FBEE1';
    } 
  });
}
const swiper = new Swiper('.swiper', {
  cssMode: true,
  // Optional parameters
  direction: 'horizontal',
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
});
$("a.scrollto").click(function() {
  var elementClick = $(this).attr("href")
  var destination = $(elementClick).offset().top;
  jQuery("html:not(:animated),body:not(:animated)").animate({
    scrollTop: destination
  }, 800);
  return false;
});