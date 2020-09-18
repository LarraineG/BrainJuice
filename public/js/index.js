// Inspirational Quotes Package
function getQuotes(){
    $.get("/api/quotes")
    .then((data) => {
      console.log(data);

      var quoteBlock = `"${data.text}" - ${data.author}`

      $(".quote").text(quoteBlock)
    })
}
getQuotes()

// Index Text Animation Functions
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
      $(".ml15").text("Laugh");
      setTimeout(listen, 500);
    }, 0);
};

function listen(){
  setTimeout(
    function(){
      $(".ml15").text("Listen");
      setTimeout(relax, 500);
    }, 0);
};

function relax(){
  setTimeout(
    function(){
      $(".ml15").addClass("heroSwitch2");
      $(".home-banner").addClass("bannerSwitch2");
      $(".ml15").text("Relax");
      setTimeout(your, 400);
    }, 0);
};

function your(){
  setTimeout(
    function(){
      $(".ml15").text("Your");
      setTimeout(mind, 400);
    }, 0);
};

function mind(){
  setTimeout(
    function(){
      $(".ml15").text("Mind");
      setTimeout(fade, 600);
    }, 0);
};

function fade(){
  setTimeout(
    function(){
      $(".ml15").text("");
      $(".home-banner.bannerSwitch.bannerSwitch2").css({"background-color": "rgba(0, 82, 183, .5)", "transition": "background 1s linear"});
      setTimeout(showBrain, 300);
    }, 0);
};

function showBrain(){
  setTimeout(
    function(){
      var url = '../images/brain2.png';
      $(`<div class="brain-div">
      <div class="brain-text">Brain Juice</div>
      <img src='${url}' class='brain'></div>`).appendTo('.home-banner');
      setTimeout(scroll, 1000);
    }, 0);
};

function scroll(){
  setTimeout(
    function(){
      $('html, body').animate({
          scrollTop: ($('.quote-banner').offset().top)
      },500);
    }, 0);
};


});
