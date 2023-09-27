const next = document.getElementById('next').onclick = function () {
        let slide = document.querySelector('.slide');
        let firstItem = slide.querySelector('.item');
        slide.appendChild(firstItem.cloneNode(true));
        slide.removeChild(firstItem);
}

document.getElementById('prev').onclick = function () {
    let slide = document.querySelector('.slide');
    let firstItem = slide.querySelector('.item');
    slide.appendChild(firstItem.cloneNode(true));
    slide.removeChild(firstItem);
}

setInterval(() => {
    next()
}, 5000);
