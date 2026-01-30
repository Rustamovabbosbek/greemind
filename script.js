// Активация мобильного меню
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
    });
    
    // Закрытие меню при клике на ссылку
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.style.display = 'none';
        });
    });
    
    // Анимация линий при загрузке страницы
    const lines = document.querySelectorAll('.line');
    lines.forEach((line, index) => {
        setTimeout(() => {
            line.style.opacity = '1';
            line.style.transform += ' scaleY(1.2)';
        }, index * 300);
        
        setTimeout(() => {
            line.style.transform = line.style.transform.replace('scaleY(1.2)', 'scaleY(1)');
        }, index * 300 + 300);
    });
});