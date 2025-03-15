const navToggle = document.querySelector('.nav-toggle');
const navMobile = document.querySelector('.nav-mobile');

navToggle.addEventListener('click', () => {
    navMobile.classList.toggle('open');
    if (navMobile.classList.contains('open')) {
        navMobile.style.right = '0'; // Slide into view
    } else {
        navMobile.style.right = '-250px'; // Slide out of view
    }
});

document.addEventListener('click', (event) => {
    if (navMobile.classList.contains('open') && !navMobile.contains(event.target) && event.target !== navToggle) {
        navMobile.classList.remove('open');
        navMobile.style.right = '-250px';
    }
});


const scrollLink = document.getElementById('scrollLink');
const targetArea = document.getElementById('first');

scrollLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    targetArea.scrollIntoView({
        behavior: 'smooth'
    });
});

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