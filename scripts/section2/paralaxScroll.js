

const patalaxScroll = (value) => {
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const image = document.querySelector('.scroll-img');
        image.style.transform = `translateY(-${scrollY * value}px)`;
    });

}

if (document.documentElement.clientWidth < 1100 ) {
    patalaxScroll(0.9)
} else {
    patalaxScroll(1)
}