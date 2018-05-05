const totalPhotos = 36;
let gallery = document.querySelector('#photoGallery');
const exitWidth = 280;
const exitHeight = 250;

//Generate pictures from LoremPixel
for(let i = 0; i<totalPhotos; i++) {
    let itemMasonry = document.createElement('div');
    itemMasonry.className = 'itemMasonry';
    let containerMasonry = document.createElement('div');
    containerMasonry.className = 'containerMasonry';
    let pictureMasonry = document.createElement('img');
    let widthPic = parseInt(200 * Math.random() + exitWidth);
    let heightPic = parseInt(200 * Math.random() + exitHeight);
    pictureMasonry.src = 'http://loremflickr.com/' + widthPic + '/' + heightPic + '/mountains/all';
    pictureMasonry.alt = 'Picture from LoremFlickr';
    pictureMasonry.className = 'pictureMasonry';


    //Add details
    let detailsMasonry = document.createElement('section');
    detailsMasonry.className = 'detailsMasonry';
    detailsMasonry.innerHTML = '<h3>Foto ' + (i+1) + '</h3><p>' + widthPic + 'px breed & ' + heightPic + 'px hoog</p>';
    containerMasonry.appendChild(pictureMasonry);
    containerMasonry.appendChild(detailsMasonry);
    itemMasonry.appendChild(containerMasonry);
    gallery.appendChild(itemMasonry);
}

const spanRows = (itemMasonry) => {
    let rowHeight = parseInt(window.getComputedStyle(gallery).getPropertyValue('grid-auto-rows'));
    let whiteSpace = parseInt(window.getComputedStyle(gallery).getPropertyValue('grid-row-gap'));
    let rowSpan = Math.ceil((itemMasonry.querySelector('.containerMasonry').getBoundingClientRect().height + whiteSpace) / (rowHeight + whiteSpace));
    itemMasonry.style.gridRow = 'span ' + rowSpan;
}
//

const scaleAllGridElements = () => {
    let allElements = document.querySelectorAll('.itemMasonry');
    for (let i = 0; i < allElements.length; i++) {
        spanRows(allElements[i]);
    }
}

window.addEventListener('load', scaleAllGridElements);
window.addEventListener('resize', scaleAllGridElements);

let allElements = document.querySelectorAll('.itemMasonry');
for (let i = 0; i < allElements.length; i++) {
    imagesLoaded(allElements[i], () => {
        spanRows(allElements[i]);
    });
}