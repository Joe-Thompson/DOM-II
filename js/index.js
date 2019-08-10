// Your code goes here

//mouseover and out on nav logo
let logoHead = document.querySelector('.logo-heading');

logoHead.addEventListener('mouseover', () => {
    logoHead.style.color = "#17A2B8";
    logoHead.style.fontSize = "5rem";
});

logoHead.addEventListener('mouseout', () => {
    logoHead.style.color = "black";
    logoHead.style.fontSize = "4rem";
}); 

//keydown on document
let font = document.querySelectorAll('h2');
let fontArr = Array.from(font);

function changeh2color() {
    fontArr.forEach((i) => {
        i.style.color = "#17A2B8";
    });
};

document.addEventListener('keydown', changeh2color);

//wheel evnet on fun bus img
let funBusImg = document.querySelector("img");

function wheelImg(e) {
    e.preventDefault();

    scale += e.deltaY * -0.01;

    scale = Math.min(Math.max(0.125, scale), 4);

    funBusImg.style.transform = `scale(${scale})`;
  };

let scale = 1;
funBusImg.onwheel = wheelImg;

//drag / drop event 
let pickPackage = document.querySelectorAll('.btn');
let vacationPackage = Array.from(pickPackage);

//removed text "sign up" from buttons
vacationPackage.forEach((i) => {
    i.textContent = "";
    i.classList.add("dropzone");
});

let test = document.querySelector(".img-content img");
console.log(test);

// let draggableSelector = document.createElement("div");
// let draggableText = document.createTextNode("Choose your vaction destination");
// draggableSelector.appendChild(draggableText);
// draggableSelector.classList.add("dropzone");
// draggableSelector.style.display = "flex";
// draggableSelector.style.justifyContent = "center";
// draggableSelector.style.marginRight = "35px";
// draggableSelector.draggable = true;
// draggableText.draggable = true;
// draggableSelector.ondragstart = "event.dataTransfer.setData('text/plain',null)"; 


// let vactionDestinations = document.querySelector('.content-pick');
// vactionDestinations.insertAdjacentElement("afterend",draggableSelector); 


// /* events fired on the draggable target */
// document.addEventListener("drag", function(event) {

// }, false);

// document.addEventListener("dragstart", function(event) {
//   // store a ref. on the dragged elem
//   draggableText = event.target;
//   // make it half transparent
//   event.target.style.opacity = .5;
// }, false);

// document.addEventListener("dragend", function(event) {
//   // reset the transparency
//   event.target.style.opacity = "";
// }, false);

// /* events fired on the drop targets */
// document.addEventListener("dragover", function(event) {
//   // prevent default to allow drop
//   event.preventDefault();
// }, false);

// document.addEventListener("dragenter", function(event) {
//   // highlight potential drop target when the draggable element enters it
//   if (event.target.className == "dropzone") {
//     event.target.style.background = "purple";
//   }

// }, false);

// document.addEventListener("dragleave", function(event) {
//   // reset background of potential drop target when the draggable element leaves it
//   if (event.target.className == "dropzone") {
//     event.target.style.background = "";
//   }

// }, false);

// document.addEventListener("drop", function(event) {
//   // prevent default action (open as link for some elements)
//   event.preventDefault();
//   // move dragged elem to the selected drop target
//   if (event.target.className == "dropzone") {
//     event.target.style.background = "";
//     draggableText.parentNode.removeChild( draggableText );
//     event.target.appendChild( draggableText );
//   }
// }, false);