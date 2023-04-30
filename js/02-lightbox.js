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
        <img class="gallery__image" src=${preview} alt=${description} />
    </a>
</li>
`
})
.join("");
}
galleryList.addEventListener("click", onImageClick)
function onImageClick(event){
    event.preventDefault()
    if(event.target.nodeName !== 'IMG'){
        return;
    }
    const lightbox = new SimpleLightbox('.gallery a', { 
        captionsData : "alt",
        captionDelay : 250,
    });
}
