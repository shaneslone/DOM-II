const heading = document.querySelector('.logo-heading');
const navLinks = document.querySelectorAll('.nav a');
const funBus = document.querySelector('.intro img');
const map = document.querySelector('.img-content img');
const boatCanal = document.querySelector('.img-fluid');
const boatOcean = document.querySelector('.content-destination img');
const paragraphs = document.querySelectorAll('p');
const buttons = document.querySelectorAll('.btn');
const signMeUp1 = buttons[0];
const signMeUp2 = buttons[1];
const signMeUp3 = buttons[2];
const header = document.querySelector('header');
const allParagraphs = Array.from(paragraphs);

// 1 wheel
allParagraphs.forEach(element => {
  element.addEventListener('wheel', () => {
    element.style.backgroundColor = 'red';
    element.style.color = 'black';
  });
});
//2 mouseenter
allParagraphs.forEach(element => {
  element.addEventListener('mouseenter', () => {
    element.style.backgroundColor = 'black';
    element.style.color = 'white';
  });
});
//3 mouseleave
allParagraphs.forEach(element => {
  element.addEventListener('mouseleave', () => {
    element.style.backgroundColor = 'white';
    element.style.color = 'black';
  });
});
//4 click
funBus.addEventListener('click', () => {
  funBus.style.border = '5px dotted red';
});
//5 dblclick
funBus.addEventListener('dblclick', () => {
  funBus.style.border = '0';
});
//6 copy
heading.addEventListener('copy', () => {
  heading.style.color = 'red';
});
//7 load
map.addEventListener('load', () => {
  map.style.border = '5px solid red';
});
//8 keydown
document.addEventListener('keydown', event => {
  if (event.key === '-') {
    boatCanal.style.width = '50%';
  }
});
//9 keyup
document.addEventListener('keyup', event => {
  if (event.key === '-') {
    boatCanal.style.width = '100%';
  }
});
//10 resize
window.addEventListener('resize', () => {
  signMeUp1.style.backgroundColor = 'yellow';
  signMeUp2.style.backgroundColor = 'green';
  signMeUp3.style.backgroundColor = 'purple';
});

// two nested elements with .stopPropagation

header.addEventListener('click', () => {
  header.style.backgroundColor = 'orange';
});

navLinks.forEach(element => {
  element.addEventListener('click', event => {
    event.stopPropagation();
    element.style.backgroundColor = 'blue';
  });
});
