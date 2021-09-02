require ('jquery');
require('jquery-parallax.js');
require('jquery.scrollex');

var app = {
  init: function() {
    app.enableScrollex();
  },

  enableScrollex: function() {
    $('.scrollex').scrollex({
      
      enter: app.removeHeaderFixed,
      leave: app.setHeaderFixed,
      bottom: '50px',
    });
  },

  removeHeaderFixed: function() {
    $('.header').removeClass('header--is-fixed');
  },

  setHeaderFixed: function() {
    $('.header').addClass('header--is-fixed');
  },
};

var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
  };

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);

    var elementsWeb = document.getElementsByClassName('web-typewrite');
    for (var i=0; i<elementsWeb.length; i++) {
        var toRotate = elementsWeb[i].getAttribute('data-type');
        var period = elementsWeb[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elementsWeb[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".web-typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);

    var elementsSkills = document.getElementsByClassName('skills-text-writer-content');
    for (var i=0; i<elementsSkills.length; i++) {
        var toRotate = elementsSkills[i].getAttribute('data-type');
        var period = elementsSkills[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elementsSkills[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".skills-text-writer-content > .wrap { border-right: 0.08em solid #747474}";
    document.body.appendChild(css);
};

$(app.init);

$('.home').parallax({imageSrc: './images/home-v2.jfif'});

$('.web').parallax({
  imageSrc: './images/web.jpeg',
  zIndex: 0,
});

$('.services').parallax({
  imageSrc: './images/star.png',
  zIndex: 0,
});

$('.fonctionnalities').parallax({
  imageSrc: './images/ideas.jpg',
  zIndex: 0,
});

$(document).ready(function(){
  $(window).scroll(function(){
      $("#home-content").css("opacity", 1 - $(window).scrollTop() / ($('#home-content').height() / 0.5));
  });
});

$(document).ready(function(){
  $(window).scroll(function(){
      $("#arrow").css("opacity", 1 - $(window).scrollTop() / ($('#arrow').height() / 0.2));
  });
});

$(document).ready(function(){
  $(window).scroll(function(){
      $("#banner").css("opacity", 10.5 - $(window).scrollTop() / ($('#banner').height() / 0.1));
  });
});

$(document).ready(function(){
  $(window).scroll(function(){
      $("#banner1").css("opacity", 10.5 - $(window).scrollTop() / ($('#banner1').height() / 0.1));
  });
});

$(document).ready(function(){
  $(window).scroll(function(){
      $("#banner2").css("opacity", 10.5 - $(window).scrollTop() / ($('#banner2').height() / 0.1));
  });
});

$(document).ready(function(){
  $(window).scroll(function(){
      $("#banner3").css("opacity", 10.5 - $(window).scrollTop() / ($('#banner3').height() / 0.1));
  });
});

$(document).ready(function(){
  $(window).scroll(function(){
      $("#web").css("opacity", 6 - $(window).scrollTop() / ($('#web').height() / 0.3));
  });
});

$(document).ready(function(){
  $(window).scroll(function(){
      $("#web1").css("opacity", 22 - $(window).scrollTop() / ($('#web1').height() / 0.3));
  });
});

$(document).ready(function(){
  $(window).scroll(function(){
      $("#fonctionnalities").css("opacity", 19 - $(window).scrollTop() / ($('#fonctionnalities').height() / 1));
  });
});

$(document).ready(function(){
  $(window).scroll(function(){
      $("#fonctionnalities1").css("opacity", 49 - $(window).scrollTop() / ($('#fonctionnalities1').height() / 0.3));
  });
});

$(".scroll").click(function(event){
  event.preventDefault();
  //calculate destination place
  var dest=0;
  if($(this.hash).offset().top > $(document).height()-$(window).height()){
       dest=$(document).height()-$(window).height();
  }else{
       dest=$(this.hash).offset().top;
  }
  //go to destination
  $('html,body').animate({scrollTop:dest}, 1000,'swing');
});

var menuButton = document.querySelector('#menu-button');
var menu = document.querySelector('#menu');

// show or hide
menuButton.addEventListener('click',function(){
  menu.classList.toggle('show-menu');
  menuButton.classList.toggle('close');
});

$(document).ready(function(){
  $("a").click(function(){
      $("#menu").hide();
  });  
});

$(document).ready(function(){
  $("#menu-button").click(function(){
    $("#menu").show();
  });
});

$( '#menu a' ).on("click", function(){
  $('.menu').removeClass('close');
});


