'use strict';

const documentReady = () => {
  const heroButtonSi = document.getElementById('heroButtonSi');
  const heroButtonNo = document.querySelector('#heroButtonNo');

  const simeprdona = () => {
    alert('Ay en serio?');
    alert('Pensé que no llegaria tan lejos xd');
    alert('Bueno te dejo una rolita chida :3');
    location.href = 'https://www.youtube.com/watch?v=sw4r0k8WWqU';
  };

  const moverbotonxd = () => {
    heroButtonNo.style.position = 'absolute';
    heroButtonNo.style.top = (Math.random() * window.innerHeight) + 'px';
    heroButtonNo.style.left = (Math.random() * window.innerWidth) + 'px';
  };

  heroButtonSi.addEventListener('click', simeprdona);
  heroButtonNo.addEventListener('mouseover', moverbotonxd);
};

document.addEventListener('DOMContentLoaded', documentReady);