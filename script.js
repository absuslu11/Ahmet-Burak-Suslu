function togglemenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

}



var currentPictureIndex = 1;

function goToPrevImage() {
    currentPictureIndex = (currentPictureIndex - 1 + 6) % 6;
    updatePictureSources();
}

function goToNextImage() {
    currentPictureIndex = (currentPictureIndex + 1) % 6;
    updatePictureSources();
}

function updatePictureSources() {
    var curIndex = currentPictureIndex + 1;

    var prevIndex = curIndex - 1;
    if(prevIndex == 0) prevIndex = 6;
    
    var nextIndex = curIndex + 1;
    if(nextIndex == 7) nextIndex = 1;

    var pic = document.getElementById('pic-1');
    pic.src = './Assets/Project 1/ss' + prevIndex + '.png';

    pic = document.getElementById('pic-2');
    pic.src = './Assets/Project 1/ss' + curIndex + '.png';

    pic = document.getElementById('image-viewer-pic');
    pic.src = './Assets/Project 1/ss' + curIndex + '.png';

    pic = document.getElementById('pic-3');
    pic.src = './Assets/Project 1/ss' + nextIndex + '.png';
}

function showImage() {
    pic = document.getElementById('image-viewer');
    pic.style.display = 'flex';
}

function closeImage() {
    pic = document.getElementById('image-viewer');
    pic.style.display = 'none';
}