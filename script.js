// NAVBAR
let lastScrollTop = 0;
navbar = document.getElementById('navbar');

window.addEventListener('scroll', function(){
  const scrollTop = window.pageTOffset || this.document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top="-50px";
  } else {
    navbar.style.top="0";
  }
  lastScrollTop = scrollTop;

});

// TIPEO
var typed = new Typed('.typed', {
  strings: ["Soy Newen Reynoso, Artista sonoro, Diseñador de sonido, Músico profesional y Actor de voz. He realizado instalaciones multimedia con softwares como reacTIVision, Processing, Arduino y Pure Data y capacitaciones en el espacio H@bitat donde potenciamos la creatividad en docentes, niños y público en general que cuente con la chispa de la experimentación en las Artes, Ciencia, Tecnología y Gamificación"],
  typeSpeed: 20,
});
  
// CONTADOR LIVE
let counter = 0;

$(window).scroll(function() {

  const top = $('.counter').offset().top - window.innerHeight;

  if (counter == 0 && $(window).scrollTop() > top) {
    $('.counter-value').each(function() {
      let $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
        countNum : countTo
      },
      {
        duration: 10000,
        easing: 'swing',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
        }
      });
    });
    counter = 1;
  }
});

//AOS
AOS.init();