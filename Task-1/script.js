document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    let scrolled = false;

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            if (!scrolled) {
                navbar.style.backgroundColor = '#fff';
                navbar.style.color = '#333';
                scrolled = true;
            }
        } else {
            if (scrolled) {
                navbar.style.backgroundColor = '#333';
                navbar.style.color = '#fff';
                scrolled = false;
            }
        }
    });
});
