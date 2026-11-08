const thumbnails = document.querySelectorAll('.thumbs');

function thumbnailAlert(e){
    const productId = e.target.id;
    alert(`Product ID: ${productId}`);
}

for (let b of thumbnails){
    b.addEventListener("click", thumbnailAlert);
}

const btns = document.querySelectorAll('td button');

function buttonAlert(e){
    const productId = e.target.id;
    const productTitle = e.target.title;
    alert(`Product ID: ${productId} Title: ${productTitle}`)
}

for (let b of btns){
    b.addEventListener("click", buttonAlert);
}

