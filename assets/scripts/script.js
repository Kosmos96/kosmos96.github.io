document.addEventListener('DOMContentLoaded', function() {
    initAllGalleries();
    
    if (typeof fsLightbox === 'function') {
        fsLightbox();
    }
});

function initAllGalleries() {
    const galleryContainers = document.querySelectorAll('.gallery-container');
    
    galleryContainers.forEach((container, index) => {
        initGallery(container, index + 1);
    });
}

function initGallery(container, galleryIndex) {
    const mainSwiperEl = container.querySelector('.main-swiper');
    const thumbSwiperEl = container.querySelector('.thumbnail-swiper');
    
    if (!mainSwiperEl || !thumbSwiperEl) return;
    
    const galleryThumbs = new Swiper(thumbSwiperEl, {
        spaceBetween: 8,
        slidesPerView: 4,
        allowTouchMove: false,
        simulateTouch: false,
        freeMode: true,
    });
    
    const galleryTop = new Swiper(mainSwiperEl, {
        spaceBetween: 0,
        loop: false,
        effect: 'fade',
        fadeEffect: { 
            crossFade: false 
        },
        thumbs: {
            swiper: galleryThumbs
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    
    galleryThumbs.slides.forEach((slide, index) => {
        slide.addEventListener('click', function() {
            galleryTop.slideTo(index);
        });
    });
}