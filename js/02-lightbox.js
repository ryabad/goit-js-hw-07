import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector("ul.gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" /></a></li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "Alt",
  captionPosition: "bottom",
  captionDelay: 250,
});

console.log(galleryItems);