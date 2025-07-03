document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.btn-primary');
    const body = document.querySelector('body');

    menuButton.addEventListener('click', (e) => {
        e.preventDefault();
        fetch('menu.html')
            .then(response => response.text())
            .then(data => {
                body.insertAdjacentHTML('beforeend', data);
                initializeModal();
            });
    });

    function initializeModal() {
        const modalOverlay = document.querySelector('.modal-overlay');
        const closeModalButton = document.querySelector('.close-modal');

        modalOverlay.style.display = 'flex';

        const swiper = new Swiper('.swiper-container', {
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            grabCursor: true,
        });

        closeModalButton.addEventListener('click', () => {
            modalOverlay.remove();
        });

        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                modalOverlay.remove();
            }
        });
    }
});
