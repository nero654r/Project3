// main.js

// تغيير شريط التنقل عند التمرير
window.addEventListener('scroll', function () {
    const nav = document.getElementById('naav');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
        nav.style.boxShadow = '0px 2px 10px rgba(0,0,0,0.1)';
    } else {
        nav.style.backgroundColor = 'transparent';
        nav.style.boxShadow = 'none';
    }
});

// تشغيل القائمة في الشاشات الصغيرة (إذا كنت ستضيفها في المستقبل)
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-2');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

const toggleButton = document.getElementById('dark-mode-toggle');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleButton.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Toggle بين الوضع الليلي والنهاري
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// إظهار وإخفاء قائمة التنقل عند الشاشات الصغيرة
function toggleNav() {
    document.querySelector('.nav-links').classList.toggle('active');
}

/**********************************************************************/

