// script.js
document.addEventListener("DOMContentLoaded", function() {
  const headerTitle = document.querySelector('.header-title');

  // Обработчик события для клика по элементам с классом "color"
  document.querySelectorAll('.color').forEach(color => {
    color.addEventListener('click', function() {
      // Получаем класс цвета
      const colorClass = this.classList[1];
      // Устанавливаем цвет текста и фона заголовка
      headerTitle.style.color = colorClass;
      headerTitle.style.backgroundColor = getComputedStyle(this).backgroundColor;
    });
  });
});

// Функция, которая проверяет, если элемент находится в видимой области окна
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
// Найти все элементы <p> внутри .header-branches
const branchItems = document.querySelectorAll('.header-branches .branch-item');

// Добавить обработчики событий для каждого элемента <p>
branchItems.forEach(branchItem => {
  // Событие наведения мыши
  branchItem.addEventListener('mouseenter', () => {
    // Добавить класс для анимации при наведении
    branchItem.classList.add('animated-hover');
  });

  // Событие ухода мыши
  branchItem.addEventListener('mouseleave', () => {
    // Удалить класс после завершения анимации
    branchItem.classList.remove('animated-hover');
  });
});
// Функция для анимации появления элементов при прокрутке
function animateElementsOnScroll() {
  var elements = document.querySelectorAll('.about-rect');
  elements.forEach(function(element) {
    if (isElementInViewport(element)) {
      element.classList.add('show');
    } else {
      element.classList.remove('show');
    }
  });
}

// Слушатель события прокрутки для вызова анимации появления элементов
window.addEventListener('scroll', animateElementsOnScroll);

// Вызов функции при загрузке страницы для показа элементов, которые уже находятся в видимой области
window.addEventListener('load', animateElementsOnScroll);