var swiper = new Swiper('.swiper-container', {
    loop: true, // Para criar um loop contínuo
    autoplay: {
        delay: 5000, // Tempo de espera entre cada slide (em milissegundos)
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});