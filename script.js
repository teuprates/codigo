// ===== MENU HAMBURGER =====
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger) {
    hamburger.addEventListener('click', function () {
      this.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }

  // Fechar menu ao clicar em um link
  const navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  // ===== FORMULÁRIO DE CONTATO =====
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const nome = document.getElementById('nome').value.trim();
      const email = document.getElementById('email').value.trim();
      const mensagem = document.getElementById('mensagem').value.trim();

      // Validação simples
      if (!nome || !email || !mensagem) {
        feedback.textContent = 'Por favor, preencha todos os campos.';
        feedback.className = 'form-feedback error';
        return;
      }

      if (!email.includes('@') || !email.includes('.')) {
        feedback.textContent = 'Por favor, insira um e-mail válido.';
        feedback.className = 'form-feedback error';
        return;
      }

      // Simulação de envio
      feedback.textContent = 'Mensagem enviada com sucesso! Entrarei em contato em breve.';
      feedback.className = 'form-feedback success';

      // Limpar campos (opcional)
      form.reset();

      // Limpar feedback após 5 segundos
      setTimeout(() => {
        feedback.textContent = '';
        feedback.className = 'form-feedback';
      }, 6000);
    });
  }

  // ===== SCROLL SUAVE (opcional, já feito com CSS scroll-behavior) =====
  // ===== DESTAQUE DO LINK ATIVO (opcional) =====
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-menu a');

  function highlightNav() {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navAnchors.forEach(link => {
      link.style.color = '#1e293b';
      link.style.fontWeight = '500';
      if (link.getAttribute('href') === `#${current}`) {
        link.style.color = '#2563eb';
        link.style.fontWeight = '600';
      }
    });
  }

  window.addEventListener('scroll', highlightNav);
  window.addEventListener('load', highlightNav);
});