/**
 * Main JavaScript functionality for the cat blog
 */
import {
  throttle,
  storage,
  formUtils,
  isTouchDevice,
  prefersReducedMotion,
  smoothScrollTo
} from './utils.js';

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
  initTheme();
  initNavigation();
  initNewsletter();
  initScrollAnimations();
});

/**
 * Theme initialization and toggle
 */
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;

  if (!themeToggle) return;

  const savedTheme = storage.get('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    html.classList.add('dark');
  }

  themeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    storage.set('theme', html.classList.contains('dark') ? 'dark' : 'light');
  });
}

/**
 * Navigation functionality
 */
function initNavigation() {
  const navToggle = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuClose = document.getElementById('mobile-menu-close');

  if (!navToggle || !mobileMenu) return;

  navToggle.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
    navToggle.setAttribute('aria-expanded', 'true');
  });

  if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  }

  // Close on escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

/**
 * Newsletter form functionality
 */
function initNewsletter() {
  const forms = document.querySelectorAll('form');

  forms.forEach(form => {
    const emailInput = form.querySelector('input[type="email"]');
    if (!emailInput) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = emailInput.value.trim();

      formUtils.clearError(emailInput);

      if (!email) {
        formUtils.showError(emailInput, 'Por favor, ingresa tu correo');
        return;
      }

      if (!formUtils.isValidEmail(email)) {
        formUtils.showError(emailInput, 'Correo no válido');
        return;
      }

      // Success state
      const btn = form.querySelector('button');
      const originalText = btn.textContent;
      btn.textContent = '¡Gracias!';
      btn.disabled = true;

      setTimeout(() => {
        form.reset();
        btn.textContent = originalText;
        btn.disabled = false;
      }, 3000);
    });
  });
}

/**
 * Scroll animations
 */
function initScrollAnimations() {
  if (prefersReducedMotion()) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.card, .hero-section').forEach(el => {
    observer.observe(el);
  });
}