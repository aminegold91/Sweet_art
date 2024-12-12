let btn = document.querySelector('.btn');
let tp = document.querySelector('.top');
let btm = document.querySelector('.bottom');
let ctr = document.querySelector('.center');
let menu = document.querySelector('.menu');

btn.addEventListener('click', () => {
  tp.classList.toggle('active');
  btm.classList.toggle('active');
  ctr.classList.toggle('active');
  menu.classList.toggle('active');
})
