// const hours = document.querySelector(".hours");
// const days = document.querySelector(".days");
// const minutes = document.querySelector(".minutes");
// const seconds = document.querySelector(".seconds");
const hamburgerMenu = document.querySelectorAll(".hamburger__menu");
const hiddenNav = document.querySelector(".hiddennavs");
const navMenuhidden = document.querySelector(".nav__menu--hidden");
const dropdownarrow = document.querySelectorAll(".hamspan");
const dropdown = document.querySelectorAll(".ham-drop");
const dropclose = document.querySelectorAll(".hamspanclose");
console.log(dropdownarrow);
hamburgerMenu.forEach((val) => {
  val.addEventListener("click", function () {
    // hiddenNav.classList.toggle("hidden");
    navMenuhidden.classList.toggle("x")
    hiddenNav.classList.toggle("navsexpand");
  });
});

dropdownarrow.forEach((value, ind) => {
    value.addEventListener("click", function () {
      dropclose[ind].classList.add("hamspancloseshow");
      dropdownarrow[ind].classList.add("hamspanhide");
      dropdown.forEach((val) => val.classList.remove("ham-drop-display"));
      dropdown[ind].classList.toggle("ham-drop-display");
      
    });
  
})

dropclose.forEach((val, ind) => {
  val.addEventListener("click", function () {
    dropclose.forEach((span) => span.classList.remove("hamspancloseshow"));
    dropdownarrow.forEach((span) => span.classList.add("hamspanhide"));

    dropdownarrow[ind].classList.remove("hamspanhide");
    console.log(2)
    dropdown[ind].classList.remove("ham-drop-display");
  });
}) 
//  dropclose.forEach((span) => span.classList.remove("hamspancloseshow"));
//  dropdownarrow.forEach((span) => span.classList.add("hamspanhide"));

// .addEventListener("click", function () {
//   dropdown.classList.toggle("ham-drop-display");
// })

//slidr event
// sliderBtn.addEventListener("click",function(){
//     console.log(cardHolder);
// })$(function() {}
	



