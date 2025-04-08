document.addEventListener('DOMContentLoaded', () => {
    const circles = document.querySelectorAll('.circle-diagram .fill-ring');
    circles.forEach(circle => {
        const percent = circle.getAttribute('data-percent');
        const circumference = 2 * Math.PI * 60; // r=60
        const offset = circumference - (percent / 100) * circumference;
        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = offset;
    });
});



document.addEventListener('DOMContentLoaded', () => {
const observerOptions = {
    root: null, // Отслеживаем относительно viewport
    rootMargin: '0px', // Отступ от края viewport
    threshold: 0.1 // Срабатывает, когда 10% элемента видно
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Опционально: прекращаем наблюдение после появления
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Выбираем все элементы с классом fade-in
const elements = document.querySelectorAll('.fade-in');
elements.forEach(element => {
    observer.observe(element);
});
});