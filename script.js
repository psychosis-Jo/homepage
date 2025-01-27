// 返回顶部按钮
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 简单的图片轮播
const carousel = document.querySelector('.carousel-items');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = Math.max(currentIndex - 1, 0);
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    const maxIndex = carousel.children.length - 1;
    currentIndex = Math.min(currentIndex + 1, maxIndex);
    updateCarousel();
});

// 移动端菜单切换
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenuToggle.contains(e.target) && !navLinks.contains(e.target)) {
        mobileMenuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    }
});

// Close mobile menu when clicking a nav link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
}); 