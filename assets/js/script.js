const navToggle = document.querySelector('.nav-toggle');
const navMobile = document.querySelector('.nav-mobile');

//Open mobile nav when toggle is clicked
navToggle.addEventListener('click', () => {
    navMobile.classList.toggle('open');
    if (navMobile.classList.contains('open')) {
        navMobile.style.right = '0'; // Slide into view
    } else {
        navMobile.style.right = '-250px'; // Slide out of view
    }
});

//Close mobile nav when clicked elsewhere
document.addEventListener('click', (event) => {
    if (navMobile.classList.contains('open') && !navMobile.contains(event.target) && event.target !== navToggle) {
        navMobile.classList.remove('open');
        navMobile.style.right = '-250px'; // Slide out of view
    }
});

//Animation for slow scroll after scrollLink is clicked
const scrollLink = document.getElementById('scrollLink');
const targetArea = document.getElementById('first');

scrollLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    targetArea.scrollIntoView({
        behavior: 'smooth'
    });
});

//Fun fact popup animations
const modal = document.getElementById('funFactModal');
const btn = document.getElementById('funFactButton');
const span = document.getElementsByClassName('close')[0];

btn.onclick = function() {
    modal.style.display = 'block';
}

span.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}