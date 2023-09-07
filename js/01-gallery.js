import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector("ul.gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" /></a></li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);

gallery.addEventListener("click", clickHandle);

function clickHandle(event) {
  event.preventDefault();

  if (event.target === event.currentTarget) {
    return;
  }

  const imageLink = event.target.dataset.source;

  const instance = basicLightbox.create(`
      <img src="${imageLink}"/>
    `);

  instance.show();

  document.addEventListener("keydown", buttonClose);

  function buttonClose(event) {
    if (!event.target.classList.value === "gallery__link") {
      return;
    }
    if (event.key === "Escape") {
      instance.close();
      document.removeEventListener("keydown", buttonClose);
    }
  }
}

console.log(galleryItems);
