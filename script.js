// ============================================
// Nav: scroll shadow + mobile toggle
// ============================================
(function () {
  const nav = document.getElementById('nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
    links.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', () => {
        links.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      })
    );
  }
})();

// ============================================
// Registration form validation
// ============================================
(function () {
  const form = document.getElementById('registerForm');
  if (!form) return;

  const confirmPanel = document.getElementById('confirmPanel');
  const confirmName = document.getElementById('confirmName');

  const validators = {
    firstName: (v) => v.trim().length > 0,
    lastName: (v) => v.trim().length > 0,
    email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
    phone: (v) => /^\d{10}$/.test(v.replace(/\D/g, '')),
    plan: (v) => v !== '',
    password: (v) => v.length >= 8,
  };

  function showError(field, show) {
    const input = document.getElementById(field);
    const error = document.getElementById('err-' + field);
    if (input) input.classList.toggle('is-invalid', show);
    if (error) error.classList.toggle('is-visible', show);
  }

  function validateField(field) {
    const input = document.getElementById(field);
    if (!input) return true;
    const valid = validators[field](input.value);
    showError(field, !valid);
    return valid;
  }

  Object.keys(validators).forEach((field) => {
    const input = document.getElementById(field);
    if (input) {
      input.addEventListener('blur', () => validateField(field));
      input.addEventListener('input', () => {
        if (input.classList.contains('is-invalid')) validateField(field);
      });
    }
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    let allValid = true;
    Object.keys(validators).forEach((field) => {
      if (!validateField(field)) allValid = false;
    });

    const terms = document.getElementById('terms');
    if (terms && !terms.checked) {
      allValid = false;
      terms.focus();
    }

    if (!allValid) {
      const firstInvalid = form.querySelector('.is-invalid');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    // No backend wired up yet — simulate a successful registration.
    const first = document.getElementById('firstName').value.trim();
    confirmName.textContent = first;
    form.style.display = 'none';
    confirmPanel.classList.add('is-visible');
    confirmPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
})();
