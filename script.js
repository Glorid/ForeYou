const gallery = document.getElementById('gallery');
const message = document.getElementById('message');
const imageCount = 17; // Замени на реальное количество фотографий

// Функция для вычисления позиций в форме сердца
function getHeartPosition(index, total) {
    const angle = (2 * Math.PI * index) / total; // Угол для каждой фотографии
    const x = 160 * Math.pow(Math.sin(angle), 3); // Формула сердца по X
    const y = -130 * Math.cos(angle) + 100 * Math.cos(2 * angle) + 40 * Math.cos(3 * angle) + 20 * Math.cos(4 * angle); // Формула сердца по Y
    return { x, y };
}

// Функция для загрузки изображений
function loadImages() {
    for (let i = 0; i < imageCount; i++) {
        const img = document.createElement('img');
        img.src = `images/photo${i + 1}.jpg`; // Убедись, что путь и расширение правильные
        const { x, y } = getHeartPosition(i, imageCount);
        img.style.setProperty('--x', `${x}px`); // Устанавливаем позицию X
        img.style.setProperty('--y', `${y}px`); // Устанавливаем позицию Y
        img.style.animationDelay = `${i * 0.2}s`; // Задержка анимации для каждой фотографии
        gallery.appendChild(img);
    }
}

// Функция для показа сообщения
function showMessage() {
    message.style.display = 'block';
}

// Загружаем изображения и показываем сообщение через 5 секунд
loadImages();
setTimeout(showMessage, 5000); // Сообщение появится через 5 секунд