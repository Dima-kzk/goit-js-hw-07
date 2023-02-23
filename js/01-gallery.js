import { galleryItems } from './gallery-items.js';


const gallery = document.querySelector(".gallery");


function cretTegimg({preview, description, original}){
    return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>
    `;
}

function render(galleryItems){
    gallery.innerHTML = galleryItems.map(cretTegimg).join('');
}

render(galleryItems);

let instance;

gallery.addEventListener("click", event=>{
    event.preventDefault();

    if (event.target.nodeName !== "IMG") return;

    instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
    `);
    
    instance.show();

    document.addEventListener("keydown", onKeyDown);
});

function onKeyDown(event){
    if(event.code === "Escape") instance.close();
    document.removeEventListener("keydown", onKeyDown);
}


