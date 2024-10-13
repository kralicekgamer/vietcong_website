function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}

const imageCount = 3; 
const imageFolder = 'img/'; 
const imageExtension = '.webp'; 


const randomIndex = Math.floor(Math.random() * imageCount) + 1;

const randomImage = `${imageFolder}image${randomIndex}${imageExtension}`;

document.body.style.backgroundImage = `url('${randomImage}')`;