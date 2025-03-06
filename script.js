// 主题切换功能
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');
const root = document.documentElement;
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// 检查本地存储中是否有保存的主题设置
const savedTheme = localStorage.getItem('theme');

// 如果有保存的主题设置，应用它
if (savedTheme) {
    root.classList.toggle('light-theme', savedTheme === 'light');
    updateThemeIcon(savedTheme === 'light');
} else {
    // 如果没有保存的主题设置，根据系统偏好设置
    const isDark = prefersDarkScheme.matches;
    root.classList.toggle('light-theme', !isDark);
    updateThemeIcon(!isDark);
}

// 主题切换按钮点击事件
themeToggle.addEventListener('click', () => {
    // 检查当前主题
    const isLightTheme = root.classList.contains('light-theme');
    
    // 切换主题
    root.classList.toggle('light-theme');
    
    // 保存主题设置到本地存储
    localStorage.setItem('theme', isLightTheme ? 'dark' : 'light');
    
    // 更新图标
    updateThemeIcon(!isLightTheme);
});

// 更新主题图标
function updateThemeIcon(isLight) {
    // 浅色模式显示月亮图标，表示点击后会切换到暗色模式
    // 暗色模式显示太阳图标，表示点击后会切换到浅色模式
    if (isLight) {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    } else {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
}

// 移动端菜单切换
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// 点击外部关闭菜单
document.addEventListener('click', (e) => {
    if (!mobileMenuToggle.contains(e.target) && !navLinks.contains(e.target)) {
        mobileMenuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    }
});

// 点击链接关闭菜单
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// 平滑滚动功能
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

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

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    // 不再需要更新文章日期
    // updateArticleDate();
}); 