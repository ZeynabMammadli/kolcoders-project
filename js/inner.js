// $('.block-owl').owlCarousel({
//     center: true,
//     items:2,
//     loop:true,
//     margin:90,
//     responsive:{
//         600:{
//             items:3
//         }
//     }
// });


$('.block-owl').owlCarousel({
    stagePadding: 250,
    loop:true,
    margin:45,
    nav:true,
    navText: ["<img src='image/prev.svg'>","<img src='image/next.svg'>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:1
        }
    }
});


function openCity(cityName) {
    var i;
    var x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(cityName).style.display = "block";  
  }