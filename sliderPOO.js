/*
var $body =  $("body");
var $id = $("#slider");
var $prevBtn = $(".prevBtn");
var $nextBtn = $(".nextBtn");
var $pauseBtn = $(".pauseBtn");
var $slide = $(".slide"); */  
/*var imgs = ["img/bike-rental-1.jpg",
"img/bike-rental-2.jpeg",
"img/bike-rental-3.jpg",
"img/bike-rental-4.jpg",
"img/bike-rental-5.jpg",
"img/bike-rental-6.jpg",
"img/bike-rental-7.jpg"];*/

// Objet Slider
var modularSlider =  {

//dom
    body : "body",
    id : "#slider",
    slide : "#slide",
    prevBtn : "#prevBtn",
    nextBtn : "#nextBtn",
    pauseBtn : "#pauseBtn",

//data
    slideIndex : 1,
    timer : null,
    imgNumber : 0,
    imgs : ["img/bike-rental-1.jpg",
    "img/bike-rental-2.jpeg",
    "img/bike-rental-3.jpg",
    "img/bike-rental-4.jpg",
    "img/bike-rental-5.jpg",
    "img/bike-rental-6.jpg",
    "img/bike-rental-7.jpg"],
    timer : null,
    time : 5000,

//Methods
    init: function () {
        setInterval(this.slideTo, this.time); 
        console.log("time = " + this.time);
        this.playPause();
        this.prev();
        this.next();
        this.onKeydown();  
    },

    slideTo: setInterval(function(){
        //méthode de défilement
        this.imgNumber = (this.imgNumber + 1) % this.imgs.length;
        console.log(this.imgNumber);
        document.getElementById(this.slide).src = this.imgs[this.imgNumber];
        console.log(this.slide.src);
    }, 
    this.time),

    playPause : function(){ //Méthode de play/pause du Slide auto
        if(this.timer){
            clearInterval(this.slideTo);
            timer = null;
            document.getElementById(this.pauseBtn).className = "playBtn";
        }else{
            this.timer = setInterval(this.slideTo, this.time);
            timer = true;
            document.getElementById(this.pauseBtn).className = "pauseBtn";
        }
        return false
    },

    prev : function () { //Méthode de passage à l'image précédente
        --this.imgNumber;
        if(this.imgNumber < 0) {
            this.imgNumber = this.imgNumber - 1;
        }
        document.getElementById(this.slide).src = this.imgs[this.imgNumber];
        return false;
    },
        
    next : function () { //Méthode de passage à l'image suivante
        ++this.imgNumber;
        if(this.imgNumber < (this.imgs.length - 1)) {
            this.imgNumber = 0;
        }
        if(this.imgNumber < 0){
            this.imgNumber = this.imgs.length + 1;
        }
        document.getElementById(this.slide).src = this.imgs[this.imgNumber];
        return false;
    },

    // Méthode touches clavier
    onKeydown : function(){
        document.addEventListener('keydown', function(e){
            switch(e.keycode){
                case 37 : //prev
                    this.prev();
                    break;
                
                case 39 : //next
                    this.next();
                    break;

                case 32 : //space
                    this.playPause();
                    break;
            };
        });
    }



};

