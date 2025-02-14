document.addEventListener("DOMContentLoaded", function (event) {
    const button = document.getElementById("randomButton");

    button.addEventListener("mouseenter", function () {
        const buttonRect = button.getBoundingClientRect();
        const maxX = window.innerWidth - buttonRect.width;
        const maxY = window.innerHeight - buttonRect.height;
        const minX = 0;
        const minY = 0;

        // Генерируем случайные координаты в пределах заданной области
        const randomX = Math.max(minX, Math.min(maxX, Math.random() * (maxX - minX)));
        const randomY = Math.max(minY, Math.min(maxY, Math.random() * (maxY - minY)));

        // Применяем новое положение кнопки с анимацией CSS
        button.style.transition = "top 0.5s ease, left 0.5s ease"; // Устанавливаем анимацию для top и left
        button.style.top = randomY + "px";
        button.style.left = randomX + "px";
    });
});