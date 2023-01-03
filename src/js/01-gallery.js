import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector('.gallery');

const galleryItemsMarcup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `
  
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
 
    `
  )
  .join('');

galleryEl.insertAdjacentHTML('beforeend', galleryItemsMarcup);

let gallery = new SimpleLightbox('.gallery a', {
  close: false,
  captions: true,
  // captionType: "attr",
  // captionSelector: "alt",
  captionsData: 'alt',
  captionDelay: 250,
  enableKeyboard: true,
  showCounter: false,
});
