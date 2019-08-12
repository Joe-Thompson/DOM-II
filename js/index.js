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


//Created new HTML element to drag
let draggableSelector = document.createElement("p");
let draggableText = document.createTextNode("I am going here!");
draggableSelector.appendChild(draggableText);
draggableSelector.classList.add("dropzone");
draggableSelector.style.display = "flex";
draggableSelector.style.justifyContent = "center";
draggableSelector.style.marginRight = "35px";
draggableSelector.draggable = true;
draggableText.draggable = true;
draggableSelector.ondragstart = "event.dataTransfer.setData('text/plain',null)"; 


let vactionDestinations = document.querySelector('.content-pick');
vactionDestinations.insertAdjacentElement("afterend",draggableSelector); 


document.addEventListener("drag", function(event) {

}, false);

document.addEventListener("dragstart", function(event) {
  draggableText = event.target;
  event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function(event) {
  event.target.style.opacity = "";
}, false);


document.addEventListener("dragover", function(event) {
  event.preventDefault();
}, false);

document.addEventListener("dragenter", function(event) {
  if (event.target.className == "btn dropzone") {
    event.target.style.background = "#17A2B8";
  }

}, false);

document.addEventListener("dragleave", function(event) {
  if (event.target.className == "dropzone") {
    event.target.style.background = "#17A2B8";
    event.target.style.color = "white";
  }

}, false);

document.addEventListener("drop", function(event) {
  event.preventDefault();

  if (event.target.className == "btn dropzone") {
    event.target.style.background = "#17A2B8";
    draggableText.parentNode.removeChild( draggableText );
    event.target.appendChild( draggableText );
  }
}, false);

//On body load function
let body = document.querySelector("body");
body.onload = changeColor();

let nav = document.querySelectorAll(".nav-link");
let navBar = Array.from(nav);
navBar[1].style.color = "#17A2B8";
navBar[3].style.color = "#17A2B8";

var nIntervId;
 
function changeColor() {
  nIntervId = setInterval(flashText, 500);
};
// function flashText() {
//     for (i = 0; i < navBar.length; i++) {
//     navBar[i].style.color = navBar[i].style.color == 'black' ? '#17A2B8' : 'black';
//     };
// };

function flashText() {
    for (i = 0; i < navBar.length; i++) {
        if (i === 0 || i === 2) {
            navBar[i].style.color = navBar[i].style.color == 'black' ? '#17A2B8' : 'black';
        }
        if (i === 1 || i === 3)
    navBar[i].style.color = navBar[i].style.color == '#17A2B8' ? 'black' : '#17A2B8';
    };
};

//Double click imgs in content-section 
let imgCD = document.querySelectorAll('.content-section img');
let imgArr = Array.from("imgCD");


for (let i = 0; i < imgArr.length; i++) {
    imgCD[i].addEventListener("dblclick", () => {
        imgCD[i].style.transform = "scale(1.5)";

        imgCD[i].addEventListener("click", () => {
            imgCD[i].style.transform = "scale(1)";
        });
    });
}