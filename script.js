window.addEventListener('scroll', function () {
    const parallaxBg = document.querySelector('.parallax-bg');
    const scrolledValue = window.scrollY;

    // Ajuste a velocidade de parallax modificando o valor abaixo
    const parallaxSpeed = 0.5;

    // Calcula a nova posição do plano de fundo
    const newPosition = -scrolledValue * parallaxSpeed;

    // Define a posição do plano de fundo
    parallaxBg.style.transform = `translateY(${newPosition}px)`;
});
