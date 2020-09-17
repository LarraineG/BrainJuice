
var $homeBanner = $(".home-banner");
var $ml15 = $(".ml15"); //home-banner h1

$(document).ready(function() {

  anime.timeline({loop: false})
    .add({
      targets: '.ml15 .word',
      scale: [14,1.25],
      opacity: [0,1],
      easing: "easeOutCirc",
      duration: 800,
      delay: (el, i) => 800 * i
    });

setTimeout(laugh, 2500);

function laugh(){
  setTimeout(
    function(){
      $(".ml15").addClass("heroSwitch");
      $(".home-banner").addClass("bannerSwitch");
      $(".ml15").text("LAUGH");
      setTimeout(listen, 500);
    }, 0);
};

function listen(){
  setTimeout(
    function(){
      $(".ml15").text("LISTEN");
      setTimeout(relax, 500);
    }, 0);
};

function relax(){
  setTimeout(
    function(){
      $(".ml15").text("RELAX");
      setTimeout(your, 400);
    }, 0);
};

function your(){
  setTimeout(
    function(){
      $(".ml15").text("YOUR");
      setTimeout(mind, 400);
    }, 0);
};

function mind(){
  setTimeout(
    function(){
      $(".ml15").text("MIND");
      $(".home-banner.bannerSwitch.bannerSwitch2").css({"background-color", "#000000"});
      setTimeout(end, 400);
    }, 0);
};



function end(){

};





// function fade() {
//
// }

});
