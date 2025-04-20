window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const image = document.querySelector('.scroll-img');
    image.style.transform = `translateY(-${scrollY * 0.8}px)`;
});