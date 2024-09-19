function showMessage() {
    alert("Obrigado pelo seu interesse na CodeCraft Solutions! Entraremos em contato em breve para agendar sua consulta gratuita e discutir como podemos impulsionar o sucesso do seu projeto.");
}

// Animação de entrada para os elementos
document.addEventListener('DOMContentLoaded', (event) => {
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.animationDelay = `${index * 0.2}s`;
    });
});

// Efeito parallax no header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const scrollPosition = window.pageYOffset;
    header.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
});

// Botão de voltar ao topo
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Alternância do modo escuro
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = '☀️';
    } else {
        darkModeToggle.textContent = '🌓';
    }
});

// Animação de rolagem suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animação de entrada para elementos quando entram na viewport
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.member, .service-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});