"use strict";

const images = [
  { id: "1", url: "./img/chrono.jpg" },
  { id: "2", url: "./img/inuyasha.jpg" },
  { id: "3", url: "./img/ippo.png" },
  { id: "4", url: "./img/tenchi.jpg" },
  { id: "5", url: "./img/tenjhotenge.jpg" },
  { id: "6", url: "./img/yuyuhakusho.jpg" },
];

const conteinerItens = document.querySelector(".conteiner-itens");

const loadImages = (images, conteiner) => {
  images.forEach((image) => {
    conteiner.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>       
        `;
  });
};

loadImages(images, conteinerItens);

let itens = document.querySelectorAll(".item");

const previous = () => {
  conteinerItens.appendChild(itens[0]);
  itens = document.querySelectorAll(".item");
};
const next = () => {
  conteinerItens.insertBefore(itens[itens.length - 1], itens[0]);
  itens = document.querySelectorAll(".item");
};

document.querySelector("#previous").addEventListener("click", next);
document.querySelector("#next").addEventListener("click", previous);
