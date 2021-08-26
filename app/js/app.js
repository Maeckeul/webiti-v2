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

$(app.init);

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

$('.web').parallax({
  imageSrc: './images/web.jpeg',
  zIndex: 0
});

$('.home').parallax({imageSrc: './images/home-v2.jfif'});


