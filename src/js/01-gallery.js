import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector(".gallery");

galleryEl.insertAdjacentHTML("beforeend", galleryMarkup(galleryItems));

function galleryMarkup(galleryItems) {
    return galleryItems.map((galleryItem) => {
        return `
        <li class="gallery__item">
            <a href="#">
                <img data-lightbox="gallery1" class ="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}"/>
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
    
    let imagePreviewSrc = event.target.src;
    let originalPhotoSrc = getOriginalPhotoSrc(galleryItems, imagePreviewSrc);

    const instance = basicLightbox.create(`<img />`,
        {
            onShow: instance => {
                ('onShow', instance);
                window.addEventListener("keydown", ((event) => { if (event.code === "Escape") { instance.close()} }))
        },
        
        onClose: instance => {('onClose', instance)}, 
    });

    instance.element().querySelector('img').src = originalPhotoSrc;
    instance.show();
    
}

function getOriginalPhotoSrc(galleryItems, imagePreviewSrc) {
    return galleryItems.find((galleryItem) => { return galleryItem.preview === imagePreviewSrc; }).original;
};

console.log(galleryItems);

