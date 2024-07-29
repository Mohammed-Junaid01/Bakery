var menuBar = document.querySelector("#bars");
var closeBtn = document.querySelector("#closeBtn");

window.addEventListener(
    "scroll",
    function(e){
        if(window.scrollY >= 57){
            document.body.classList.add("sticky-nav");
        }else{
            document.body.classList.remove("sticky-nav");
        }
    }
)

menuBar.addEventListener(
    "click",
    function(){
        document.body.classList.add("open-menu");
        menuBar.style.display = "none";
        closeBtn.style.display = "block";
    }
)

closeBtn.addEventListener(
    "click",
    function(){
        document.body.classList.remove("open-menu");
        menuBar.style.display = "";
        closeBtn.style.display = "";
    }
)

var slider = $('.review-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  });
