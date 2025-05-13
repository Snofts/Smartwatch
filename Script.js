"use strict";

const body = document.querySelector("body");
const allSection = document.querySelectorAll(".section");
const header = document.querySelector(".header");
const navList = document.querySelector(".nav__list");
const navResList = document.querySelector(".nav__responsive--list");
const headerBtn = document.querySelector(".header__btn");
const menuIcon = document.querySelector(".nav__responsive--menu");
const menuList = document.querySelector(".nav__responsive");
const menuClose = document.querySelector(".nav__responsive--close");
const banner = document.querySelector(".banner");
const bannerBtn = document.querySelector(".banner__btn");
const bannerOrder = document.querySelector(".banner__btn--order");
const productCircles = document.querySelectorAll(".product__circle");
const productTexts = document.querySelectorAll(".product__description--text");
const circle1 = document.querySelector(".circle-1");
const circle2 = document.querySelector(".circle-2");
const circle3 = document.querySelector(".circle-3");
const circle4 = document.querySelector(".circle-4");
const circle1Text = document.querySelector(".circle-1-text");
const circle2Text = document.querySelector(".circle-2-text");
const circle3Text = document.querySelector(".circle-3-text");
const circle4Text = document.querySelector(".circle-4-text");
const collectionBtn = document.querySelectorAll(".collection__display--btn");
const memberIcon1 = document.querySelector(".icon__1--open");
const memberIcon2 = document.querySelector(".icon__2--open");
const memberIcon3 = document.querySelector(".icon__3--open");
const memberIcon4 = document.querySelector(".icon__4--open");
const memberIconShow1 = document.querySelector(".icon__1--close");
const memberIconShow2 = document.querySelector(".icon__2--close");
const memberIconShow3 = document.querySelector(".icon__3--close");
const memberIconShow4 = document.querySelector(".icon__4--close");
const memberIconCross1 = document.querySelector(".member__icon-cross1");
const memberIconCross2 = document.querySelector(".member__icon-cross2");
const memberIconCross3 = document.querySelector(".member__icon-cross3");
const memberIconCross4 = document.querySelector(".member__icon-cross4");
const mapContactSide1 = document.querySelector(".map__contact--side1");
const mapContactSide2 = document.querySelector(".map__contact--side2");
const mapContactBtn1 = document.querySelector(".map__contact--side1--button");
const mapContactBtn2 = document.querySelector(".map__contact--side2--button");
const mapCross = document.querySelector(".map__contact--crosssvg");
const video = document.querySelector(".video");
const videoCross = document.querySelector(".video__cross");
const iframe = document.querySelector('.iframe');

const videoClose = document.querySelectorAll(
  ".video > *:not(.video__content > *), .video__cross"
);

const teamIconOpen = document.querySelectorAll(".team__member--icon");
const teamIconClose = document.querySelectorAll(".team__member--icon-close");

const popup = document.querySelector(".popup");
const popupCross = document.querySelector(".popup__cross");
const popupOverlay = document.querySelector(".popup__overlay");
const popupContent = document.querySelector(".popup__content");
const popupBtn = document.querySelector(".checkout__btn");

//////////////////////////////////////////////////////////////////////////
// Functions

// Popup Open and close function
const openPopup = function (section) {
  section.classList.remove("hidden");
  section.classList.remove("animate__zoomout");
  section.classList.add("animate__zoomin");
  
  setTimeout(() => {
    popup.scrollTop = 0;
  }, 0);
};

const closePopup = function (section) {
  section.classList.remove("animate__zoomin");
  section.classList.add("animate__zoomout");
  setTimeout(function () {
    section.classList.add("hidden");
  }, 300);
};

// Function that stops the video from playin when it is closed
const stopVideo = function(){
  const src = iframe.src
  console.log(src)
  iframe.src = ' ';
  iframe.src = src;

}



// Menu display function
const menuReveal = function(){
  menuIcon.classList.add('hidden');
  menuList.style.display = "flex";
  menuList.classList.remove('slide-in-left');
  menuList.classList.add('slide-in-right');
  body.style.overflow = 'hidden';
}

// Menu display off function
const menuConceal = function(){
  menuList.classList.remove('slide-in-right');
  menuList.classList.add('slide-in-left');
  body.style.overflow = 'visible';
  setTimeout(
    function(){
      menuIcon.classList.remove('hidden');
      menuList.style.display = "none";
    }
  , 500)
}


//////////////// Product circle function
const productCircleFunction = function (text) {
  const isAlreadyVisible = !text.classList.contains('hidden');

  productTexts.forEach(el => {
    el.classList.add('hidden');
  });

  // Only show if it wasn't already visible
  if (!isAlreadyVisible) {
    text.classList.remove('hidden');
  }
};


// Team member Icon Open and Close Function
// open
const memberIconOpen = function (class1, class2) {
  teamIconOpen.forEach((el) => {
    if (el.classList.contains("hidden")) {
      el.classList.remove("hidden");
    } else return;
  });

  teamIconClose.forEach((el) => {
    if (!el.classList.contains("hidden")) {
      setTimeout(function () {
        el.classList.add("hidden");
      }, 700);
      el.classList.remove("hidden");
      el.classList.remove("animate__reveal");
      el.classList.add("animate__conceal");
      // el.classList.add("hidden");
    } else return;
  });

  class1.classList.add("hidden");
  class2.classList.remove("hidden");
  class2.classList.remove("animate__conceal");
  class2.classList.add("animate__reveal");
};

// Close
const memberIconClose = function (class1, class2) {
  setTimeout(function () {
    class2.classList.add("hidden");
  }, 700);
  class1.classList.remove("hidden");
  class2.classList.remove("animate__reveal");
  class2.classList.add("animate__conceal");
};

//   Card flip animation
// Flip
const cardFlip = function (side1, side2) {
  side1.style.transform = "rotateY(180deg)";
  side2.style.transform = "rotateY(0deg)";
};

// Reverse flip
const cardReverseFlip = function (side1, side2) {
  side1.style.transform = "rotateY(0deg)";
  side2.style.transform = "rotateY(-180deg)";
};


////////////////////////////////////////////////////////////////////////////
////////////////////////////

// Sticky Nav
const headerHeight = header.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) header.classList.add("sticky");
  else header.classList.remove("sticky");
};

const bannerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${headerHeight}px`,
});

bannerObserver.observe(banner);



// Menu display
menuIcon.addEventListener('click', function(){
  menuReveal();
})

// Menu Display Off
menuClose.addEventListener('click', function(){
  menuConceal();
})




////Navigation scroll
navList.addEventListener('click', function(e){
  e.preventDefault();
  if(e.target.classList.contains('nav__link')){
    const id = e.target.getAttribute('href');
    console.log(id);
    if(id === '#header') header.classList.remove("sticky");
    document.querySelector(id).scrollIntoView({behavior: 'smooth'})
  }
})

navResList.addEventListener('click', function(e){
  e.preventDefault();
  menuConceal()

  // Navigation scrolls to section on tablet screen and below
  setTimeout(
    function(){
      if(e.target.classList.contains('nav__responsive--link')){
        const id = e.target.getAttribute('href');
        console.log(id);
        if(id === '#header') header.classList.remove("sticky");
        document.querySelector(id).scrollIntoView({behavior: 'smooth', block: 'start'})
      }
    }, 800)
})



// Reveal Each Section
const revealSection = function(entries, observer){
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  // Add doublepulse animation when the product section comes into view
  if(entry.target.classList.contains('product')) {
    productCircles.forEach((el) => {
      el.classList.add('animate__fadeiright');
      console.log('fade in right')
    })
  } else {
    productCircles.forEach((el) => {
      el.classList.add('animate__fadeinright');
      console.log('fade in right')
    })
    console.log('fade in removed')
  }
    
  entry.target.classList.remove('section__hidden');
  observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.20
});

allSection.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add("section__hidden")
});



/////// Product circle
// Circle 1
circle1.addEventListener('click', function(){
  productCircleFunction(circle1Text)
})

// Circle 2
circle2.addEventListener('click', function(){
  productCircleFunction(circle2Text)
})

// Circle 3
circle3.addEventListener('click', function(){
  productCircleFunction(circle3Text)
})

// Circle 4
circle4.addEventListener('click', function(){
  productCircleFunction(circle4Text)
})



// Open watch popup
headerBtn.addEventListener("click", function () {
  openPopup(popup);
});

bannerOrder.addEventListener("click", function () {
  openPopup(popup);
});

// Close watch popup
popupCross.addEventListener('click', function(){
  closePopup(popup);
});

popupOverlay.addEventListener("click", function () {
  closePopup(popup);
});




// Open Video popup
bannerBtn.addEventListener("click", function () {
  openPopup(video);
});

// Close Video popup
videoClose.forEach((element) => {
  element.addEventListener("click", function () {
    closePopup(video);
    stopVideo()
  });
});



//// Collection Popup
collectionBtn.forEach(btn => {
  btn.addEventListener("click", function () {
    openPopup(popup);
  });
})



// Team member1 circle Open
memberIcon1.addEventListener("click", function (e) {
  memberIconOpen(memberIcon1, memberIconShow1);
});

// Team member1 circle close
memberIconCross1.addEventListener("click", function (e) {
  memberIconClose(memberIcon1, memberIconShow1);
});

// Team member2 circle Open
memberIcon2.addEventListener("click", function (e) {
  memberIconOpen(memberIcon2, memberIconShow2);
});

// Team member2 circle close
memberIconCross2.addEventListener("click", function (e) {
  memberIconClose(memberIcon2, memberIconShow2);
});

// Team member3 circle Open
memberIcon3.addEventListener("click", function (e) {
  memberIconOpen(memberIcon3, memberIconShow3);
});

// Team member3 circle close
memberIconCross3.addEventListener("click", function (e) {
  memberIconClose(memberIcon3, memberIconShow3);
});

// Team member4 circle Open
memberIcon4.addEventListener("click", function (e) {
  memberIconOpen(memberIcon4, memberIconShow4);
});

// Team member4 circle close
memberIconCross4.addEventListener("click", function (e) {
  memberIconClose(memberIcon4, memberIconShow4);
});




// Map Animation
mapContactBtn1.addEventListener("click", function (e) {
  cardFlip(mapContactSide1, mapContactSide2);
});

mapContactBtn2.addEventListener("click", function (e) {
  cardReverseFlip(mapContactSide1, mapContactSide2);
});

mapCross.addEventListener("click", function (e) {
  cardReverseFlip(mapContactSide1, mapContactSide2);
});
