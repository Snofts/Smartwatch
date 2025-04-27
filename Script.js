"use strict";

const header = document.querySelector(".header");
const trigger = document.querySelector(".trigger");
const headerBtn = document.querySelector(".header__btn");
const banner = document.querySelector(".banner");
const bannerBtn = document.querySelector(".banner__btn");
const circle1 = document.querySelector(".circle-1");
const circle2 = document.querySelector(".circle-2");
const circle3 = document.querySelector(".circle-3");
const circle4 = document.querySelector(".circle-4");
const collectionBtn = document.querySelector(".collection__display--btn");
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

const videoClose = document.querySelectorAll(
  ".video > *:not(.video__content > *), .video__cross"
);

const teamIconOpen = document.querySelectorAll(".team__member--icon");
const teamIconClose = document.querySelectorAll(".team__member--icon-close");

const popup = document.querySelector(".popup");
const popupCross = document.querySelector(".popup__cross");
const popupOverlay = document.querySelector(".popup__overlay");
const popupBtn = document.querySelector(".checkout__btn");

// Functions

// Popup Open and close function
const openPopup = function (section) {
  section.classList.remove("hidden");
  section.classList.remove("animate__zoomout");
  section.classList.add("animate__zoomin");
};

const closePopup = function (section) {
  section.classList.remove("animate__zoomin");
  section.classList.add("animate__zoomout");
  setTimeout(function () {
    section.classList.add("hidden");
  }, 300);
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
  console.log(entry);
  //  entries.forEach(entry => {

  //  })
  if (!entry.isIntersecting) header.classList.add("sticky");
  else header.classList.remove("sticky");
};

const bannerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${headerHeight}px`,
});

bannerObserver.observe(banner);

// Open watch popup

headerBtn.addEventListener("click", function (e) {
  e.preventDefault();
  openPopup(popup);
});

// Close watch popup
// popupCross.addEventListener('click', function(e){
//     e.preventDefault();
//     popup.classList.add('hidden');
// });

popupOverlay.addEventListener("click", function (e) {
  closePopup(popup);
});

// Open Video popup
bannerBtn.addEventListener("click", function (e) {
  openPopup(video);
});

// Close Video popup
videoClose.forEach((element) => {
  element.addEventListener("click", function () {
    closePopup(video);
    console.log("Element clicked!");
  });
});

// videoCross.addEventListener('click', function(e){
//     e.preventDefault();
//     // const openPopup = function(){
//     //     video.classList.add('hidden');
//     // }
//     // openPopup()
//     closePopup(video);
// })

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
  // console.log(`${e.target}`);
  // console.log(e.target)
});

// Team member2 circle close
memberIconCross2.addEventListener("click", function (e) {
  memberIconClose(memberIcon2, memberIconShow2);
  console.log("Close function triggered");
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
