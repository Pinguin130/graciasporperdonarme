window.onload = function() {
    let progress = 0;
    const loadingText = document.getElementById('loadingText');
    const loadingProgress = document.querySelector('.loading-progress');
    const loadingScreen = document.querySelector('.loading-screen');
    const message = document.querySelector('.message');

    const interval = setInterval(() => {
        progress += 1;
        loadingText.textContent = progress + '%';
        loadingProgress.style.transform = `translateY(${100 - progress}%)`;

        if (progress >= 100) {
            clearInterval(interval);
            loadingScreen.classList.add('hidden');
            message.classList.remove('hidden');
        }
    }, 50); // Ajusta la velocidad cambiando la duración del intervalo
};
