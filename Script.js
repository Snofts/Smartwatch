'use strict';

const header = document.querySelector('.header');
const headerBtn = document.querySelector('.header__btn');
const bannerBtn = document.querySelector('.banner__btn');
const circle1 = document.querySelector('.circle-1');
const circle2 = document.querySelector('.circle-2');
const circle3 = document.querySelector('.circle-3');
const circle4 = document.querySelector('.circle-4');
const collectionBtn = document.querySelector('.collection__display--btn');
const memberIcon1 = document.querySelector('.member__icon--1');
const memberIcon2 = document.querySelector('.member__icon--2');
const memberIcon3 = document.querySelector('.member__icon--3');
const memberIcon4 = document.querySelector('.member__icon--4');
const memberIconCross1 = document.querySelector('.member__icon--cross1');
const memberIconCross2 = document.querySelector('.member__icon--cross2');
const memberIconCross3 = document.querySelector('.member__icon--cross3');
const memberIconCross4 = document.querySelector('.member__icon--cross4');
const mapContactBtn1 = document.querySelector('.map__contact--side1--button');
const mapContactBtn2 = document.querySelector('.map__contact--side2--button');
const mapCross = document.querySelector('.map__contact--cross');
const video = document.querySelector('.video');
const videoCross = document.querySelector('.video__cross');
const popup = document.querySelector('.popup');
const popupCross = document.querySelector('.popup__cross');
const popupOverlay = document.querySelector('.popup__overlay');

console.log(popupOverlay);


////////////////////////////////////////////////////////////////////////////

// Sticky Nav


// Open watch popup

headerBtn.addEventListener('click', function(e){
    e.preventDefault();
    popup.classList.remove('hidden');
    console.log(`It works`)
});

// Close watch popup
popupCross.addEventListener('click', function(e){
    e.preventDefault();
    popup.classList.add('hidden');
});

popupOverlay.addEventListener('click', function(e){
    e.preventDefault();
    popup.classList.add('hidden');
    console.log('Close popup')
});

popupOverlay.addEventListener('click', () => {
    alert('Overlay clicked');
});


// Open Video popup
bannerBtn.addEventListener('click', function(e){
    e.preventDefault();
    video.classList.remove('hidden');
    console.log("Here is the video")
})

// Close Video popup
videoCross.addEventListener('click', function(e){
    e.preventDefault();
    const openPopup = function(){
        video.classList.add('hidden');
    }
    openPopup()
})

// Member 1 circle Open
circle1.addEventListener('click', function(e){
    e.preventDefault();
    const openSocials = function(){
        circle1.classList.add('hidden');
        memberIcon1.classList.remove('hidden');
        //add animation
    }
})

// Member 1 circle close 
// ****Chekc to see if it is ok not to put the codes inside the event handler into another function again then call it
memberIconCross1.addEventListener('click', function(e){
    e.preventDefault();
    //reverse animation
    memberIcon1.classList.add('hidden');
    circle1.classList.remove('hidden');
})


// Member 2 circle Open
circle2.addEventListener('click', function(e){
    e.preventDefault();
    const openSocials = function(){
        circle2.classList.add('hidden');
        memberIcon2.classList.remove('hidden');
        //add animation
    }
})

// Member 2 circle close 
memberIconCross2.addEventListener('click', function(e){
    e.preventDefault();
    //reverse animation
    memberIcon2.classList.add('hidden');
    circle2.classList.remove('hidden');
})

// Member 3 circle Open
circle3.addEventListener('click', function(e){
    e.preventDefault();
    const openSocials = function(){
        circle3.classList.add('hidden');
        memberIcon3.classList.remove('hidden');
        //add animation
    }
})

// Member 3 circle close 
memberIconCross3.addEventListener('click', function(e){
    e.preventDefault();
    //reverse animation
    memberIcon3.classList.add('hidden');
    circle3.classList.remove('hidden');
})

// Member 4 circle Open
circle4.addEventListener('click', function(e){
    e.preventDefault();
    const openSocials = function(){
        circle4.classList.add('hidden');
        memberIcon4.classList.remove('hidden');
        //add animation
    }
})

// Member 4 circle close 
memberIconCross4.addEventListener('click', function(e){
    e.preventDefault();
    //reverse animation
    memberIcon4.classList.add('hidden');
    circle3.classList.remove('hidden');
})

// Map Animation
mapContactBtn1.addEventListener('click', function(e){

})

mapContactBtn2.addEventListener('click', function(e){
    // reverse animation
    // collect form input
})

mapCross.addEventListener('click', function(e){
    // reverse animation
})

