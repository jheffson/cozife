let navMenu = document.querySelector('.nav-menu');

document.querySelectorAll('.bx').forEach((i) => {
    i.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('id');

        if (id === 'show-menu') {
            navMenu.classList.add('show');
            document.body.classList.add('no-scroll');
        } 
        
        if (id === 'hide-menu') {
            navMenu.classList.remove('show');
            document.body.classList.remove('no-scroll');
        } 
    })
})

// Disable transition if window width exceeds 1016px during resize or reload
function handleTransition() {
    if (window.innerWidth > 1016) {
        navMenu.style.transition = 'none';
        navMenu.classList.remove('show');
    } else {
        navMenu.style.transition = '';
    }
}

window.addEventListener('DOMContentLoaded', handleTransition);
window.addEventListener('resize', handleTransition);