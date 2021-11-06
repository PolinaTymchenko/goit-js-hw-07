import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector(".gallery");

galleryEl.insertAdjacentHTML("beforeend", galleryMarkup(galleryItems));

function galleryMarkup(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `<li class="gallery__item">
                    <a class="gallery__link" href="${original}">
                        <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
                    </a>
                </li>`;
    })
    .join("")
};
    
galleryEl.addEventListener("click", onPhotoClick);


function onPhotoClick(event) {

    event.preventDefault();
    
    const isGalleryImageEl = event.target.classList.contains("gallery__image");
    
    if (!isGalleryImageEl) {
        return;
    }

    let gallery = new SimpleLightbox('.gallery a');

    gallery.on('show.simplelightbox', function () {

    })
}

console.log(galleryItems);

