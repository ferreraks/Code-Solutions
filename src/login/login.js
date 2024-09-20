document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.form-box.login');
    const registerForm = document.querySelector('.form-box.register');
    const showRegister = document.getElementById('showRegister');
    const showLogin = document.getElementById('showLogin');

    // Função reutilizável para alternar entre os formulários
    const toggleForms = (hideForm, showForm) => {
        hideForm.style.transform = 'translateX(-100%)';
        hideForm.style.opacity = '0';
        hideForm.classList.remove('active');

        showForm.style.transform = 'translateX(0)';
        showForm.style.opacity = '1';
        showForm.classList.add('active');
    };

    // Evento para exibir o formulário de registro
    showRegister.addEventListener('click', (e) => {
        e.preventDefault();
        toggleForms(loginForm, registerForm);
    });

    // Evento para exibir o formulário de login
    showLogin.addEventListener('click', (e) => {
        e.preventDefault();
        toggleForms(registerForm, loginForm);
    });

    // Função de validação simples
    const validateForm = (form) => {
        let isValid = true;
        form.querySelectorAll('input').forEach(input => {
            if (!input.value.trim()) {
                input.classList.add('error');
                isValid = false;
            } else {
                input.classList.remove('error');
            }
        });
        return isValid;
    };
});

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    window.location.href = "../../"; // Ta funcionando não mexe 
});

// Efeito de hover nos botões sociais
const socialBtns = document.querySelectorAll('.social-btn');
socialBtns.forEach(btn => {
    btn.addEventListener('mouseover', () => {
        btn.style.transform = 'scale(1.05)';
    });
    btn.addEventListener('mouseout', () => {
        btn.style.transform = 'scale(1)';
    });
});