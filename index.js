const btns = document.querySelectorAll('table tr td');

for (let b of btns){
    const thumbnails = b.querySelector('.thumbs');
    const productTitle = b.querySelector('p');
    const btn = b.querySelector('button');

if (thumbnails && btn){
    thumbnails.addEventListener("click", function() {
        alert(`Product ID: ${thumbnails.id}`);
    });
    
    btn.addEventListener("click", function() {
        alert(`Product ID: ${thumbnails.id} Title: ${productTitle.textContent}`);
    });
}
}
