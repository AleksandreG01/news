$('.carousel_1').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        },
         1200:{
            items:4
        }
    }
});






$('.carousel_2').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:8000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        },
         1200:{
            items:1
        }
    }
});



$('.carousel_3').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplayTimeout: 4000,
    autoplaySpeed: 4000,
    slideTransition: 'linear',
    rewindNav: true,
    autoplay:true,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        },
         1200:{
            items:5
        }
    }
});



$('.carousel_4').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplayTimeout: 4000,
    autoplaySpeed: 4000,
    slideTransition: 'linear',
    rewindNav: true,
    autoplay:true,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        },
         1200:{
            items:5
        }
    }
});








const counters = document.querySelectorAll(".count");
const speed = 900;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = parseInt(+counter.getAttribute("data-target"));
    const count = parseInt(+counter.innerText);
    const increment = Math.trunc(target / speed);
    console.log(increment);

    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(updateCount, 1);
    } else {
      count.innerText = target;
    }
  };
  updateCount();
});








document.getElementById("main").onclick = function () {
    location.href = "index.html";
};











