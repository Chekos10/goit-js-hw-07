import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector(".gallery")
const imagesCreatedMarkup = createImagesMarkup(galleryItems)
galleryList.insertAdjacentHTML('beforeend',imagesCreatedMarkup)
function createImagesMarkup(galleryItems){
return galleryItems.map(({preview, original, description})=>{
        return `
        <li class="gallery__item">
        <a class="gallery__link" href=${original}>
            <img
                class="gallery__image"
                src=${preview}
                data-source=${original}
                alt=${description}
            />
        </a>
        </li>
        `
        })
        .join("");
}

galleryList.addEventListener("click", onImageClick ) 

function onImageClick(event){
    event.preventDefault()
    if(event.target.nodeName !== 'IMG'){
        return
    }
    const instance = basicLightbox.create(`
    <img src=${event.target.dataset.source} width="800" height="600">
    `,{
        onShow: (instance) => window.addEventListener('keydown', onButtonClick),
        onClose: (instance) => window.removeEventListener('keydown', onButtonClick)
    })
    instance.show();
    function onButtonClick(event){
    if(event.code === 'Escape'){
        instance.close()
    }
    }
}






