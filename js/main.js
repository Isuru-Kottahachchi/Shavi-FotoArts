/* ===================================================
   Shavi FotoArts – Main JavaScript
   =================================================== */

(function () {
  'use strict';

  /* -----------------------------------------------
     Utility helpers
  ----------------------------------------------- */
  function qs(selector, parent) {
    return (parent || document).querySelector(selector);
  }

  function qsa(selector, parent) {
    return Array.from((parent || document).querySelectorAll(selector));
  }

  /* -----------------------------------------------
     Sticky Header
  ----------------------------------------------- */
  var header = qs('#header');

  function updateHeader() {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  /* -----------------------------------------------
     Mobile Navigation Toggle
  ----------------------------------------------- */
  var navToggle = qs('#navToggle');
  var navMenu   = qs('#navMenu');

  navToggle.addEventListener('click', function () {
    var isOpen = navMenu.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu when a nav link is clicked
  qsa('.nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      navMenu.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Close menu on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.focus();
    }
  });

  /* -----------------------------------------------
     Active Nav Link on Scroll
  ----------------------------------------------- */
  var sections  = qsa('section[id]');
  var navLinks  = qsa('.nav-link');

  function setActiveLink() {
    var scrollY = window.scrollY + getNavHeight() + 20;

    sections.forEach(function (section) {
      var top    = section.offsetTop;
      var height = section.offsetHeight;
      var id     = section.getAttribute('id');

      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(function (link) {
          link.classList.toggle('active', link.getAttribute('href') === '#' + id);
        });
      }
    });
  }

  function getNavHeight() {
    return header ? header.offsetHeight : 72;
  }

  window.addEventListener('scroll', setActiveLink, { passive: true });

  /* -----------------------------------------------
     Gallery Filter
  ----------------------------------------------- */
  var filterBtns  = qsa('.filter-btn');
  var galleryItems = qsa('.gallery-item');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var filter = btn.getAttribute('data-filter');

      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

      galleryItems.forEach(function (item) {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });

  /* -----------------------------------------------
     Lightbox
  ----------------------------------------------- */
  var lightbox     = qs('#lightbox');
  var lightboxImg  = qs('#lightboxImg');
  var lightboxClose = qs('#lightboxClose');
  var lightboxPrev = qs('#lightboxPrev');
  var lightboxNext = qs('#lightboxNext');
  var visibleItems = [];
  var currentIndex = 0;

  function openLightbox(clickedItem) {
    visibleItems = galleryItems.filter(function (item) {
      return !item.classList.contains('hidden');
    });
    currentIndex = visibleItems.indexOf(clickedItem);
    if (currentIndex === -1) currentIndex = 0;
    updateLightboxImage();
    lightbox.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    lightboxClose.focus();
  }

  function closeLightbox() {
    lightbox.setAttribute('hidden', '');
    document.body.style.overflow = '';
  }

  function updateLightboxImage() {
    var item = visibleItems[currentIndex];
    if (!item) return;
    var img = qs('img', item);
    lightboxImg.setAttribute('src', img.getAttribute('src'));
    lightboxImg.setAttribute('alt', img.getAttribute('alt'));
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length;
    updateLightboxImage();
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % visibleItems.length;
    updateLightboxImage();
  }

  galleryItems.forEach(function (item) {
    item.addEventListener('click', function () {
      openLightbox(item);
    });
    item.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(item);
      }
    });
    item.setAttribute('tabindex', '0');
    item.setAttribute('role', 'button');
  });

  lightboxClose.addEventListener('click', closeLightbox);
  lightboxPrev.addEventListener('click', showPrev);
  lightboxNext.addEventListener('click', showNext);

  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', function (e) {
    if (lightbox.hasAttribute('hidden')) return;
    if (e.key === 'Escape')      closeLightbox();
    if (e.key === 'ArrowLeft')   showPrev();
    if (e.key === 'ArrowRight')  showNext();
  });

  /* -----------------------------------------------
     Testimonials Slider
  ----------------------------------------------- */
  var track    = qs('#testimonialTrack');
  var cards    = qsa('.testimonial-card', track);
  var dotsWrap = qs('#testimonialDots');
  var prevBtn  = qs('#prevTestimonial');
  var nextBtn  = qs('#nextTestimonial');
  var currentSlide = 0;
  var autoplay;

  // Build dots
  cards.forEach(function (_, i) {
    var dot = document.createElement('button');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', 'Go to testimonial ' + (i + 1));
    dot.addEventListener('click', function () { goToSlide(i); });
    dotsWrap.appendChild(dot);
  });

  function goToSlide(index) {
    currentSlide = (index + cards.length) % cards.length;
    track.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';
    qsa('.dot', dotsWrap).forEach(function (d, i) {
      d.classList.toggle('active', i === currentSlide);
    });
  }

  prevBtn.addEventListener('click', function () { goToSlide(currentSlide - 1); resetAutoplay(); });
  nextBtn.addEventListener('click', function () { goToSlide(currentSlide + 1); resetAutoplay(); });

  function startAutoplay() {
    autoplay = setInterval(function () { goToSlide(currentSlide + 1); }, 5000);
  }

  function resetAutoplay() {
    clearInterval(autoplay);
    startAutoplay();
  }

  startAutoplay();

  // Pause autoplay on hover/focus
  var sliderSection = qs('#testimonials');
  sliderSection.addEventListener('mouseenter', function () { clearInterval(autoplay); });
  sliderSection.addEventListener('mouseleave', startAutoplay);
  sliderSection.addEventListener('focusin',    function () { clearInterval(autoplay); });
  sliderSection.addEventListener('focusout',   startAutoplay);

  /* -----------------------------------------------
     Stats Counter Animation
  ----------------------------------------------- */
  var statNums = qsa('.stat-num');
  var statsAnimated = false;

  function animateStats() {
    if (statsAnimated) return;
    var statsSection = qs('.stats');
    if (!statsSection) return;

    var rect = statsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      statsAnimated = true;
      statNums.forEach(function (el) {
        var target = parseInt(el.getAttribute('data-target'), 10);
        var start  = 0;
        var duration = 1800;
        var startTime = null;

        function step(timestamp) {
          if (!startTime) startTime = timestamp;
          var progress = Math.min((timestamp - startTime) / duration, 1);
          // Ease-out
          var eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.round(eased * target);
          if (progress < 1) requestAnimationFrame(step);
        }

        requestAnimationFrame(step);
      });
    }
  }

  window.addEventListener('scroll', animateStats, { passive: true });
  animateStats(); // Run on load in case already in view

  /* -----------------------------------------------
     Scroll-reveal animation
  ----------------------------------------------- */
  var revealEls = qsa(
    '.service-card, .gallery-item, .about-content, .about-image, .stat-item, .testimonial-card'
  );

  revealEls.forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });

  function revealOnScroll() {
    revealEls.forEach(function (el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.88) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll, { passive: true });
  revealOnScroll(); // Run once on load

  /* -----------------------------------------------
     Contact Form Validation & Submission
  ----------------------------------------------- */
  var form        = qs('#contactForm');
  var submitBtn   = qs('#submitBtn');
  var formSuccess = qs('#formSuccess');

  function validateField(id, errorId, message) {
    var field = qs('#' + id);
    var error = qs('#' + errorId);
    if (!field || !error) return true;

    var value = field.value.trim();
    if (!value) {
      field.classList.add('error');
      error.textContent = message || 'This field is required.';
      return false;
    }
    field.classList.remove('error');
    error.textContent = '';
    return true;
  }

  function validateEmail(id, errorId) {
    var field = qs('#' + id);
    var error = qs('#' + errorId);
    if (!field || !error) return true;

    var value = field.value.trim();
    var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!value) {
      field.classList.add('error');
      error.textContent = 'Email address is required.';
      return false;
    }
    if (!emailRe.test(value)) {
      field.classList.add('error');
      error.textContent = 'Please enter a valid email address.';
      return false;
    }
    field.classList.remove('error');
    error.textContent = '';
    return true;
  }

  // Live validation on blur
  ['name', 'email', 'service', 'message'].forEach(function (id) {
    var field = qs('#' + id);
    if (!field) return;
    field.addEventListener('blur', function () {
      if (id === 'email') {
        validateEmail('email', 'emailError');
      } else {
        validateField(id, id + 'Error', null);
      }
    });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var valid = [
      validateField('name',    'nameError',    'Please enter your full name.'),
      validateEmail('email',   'emailError'),
      validateField('service', 'serviceError', 'Please select a service.'),
      validateField('message', 'messageError', 'Please tell us about your event.'),
    ].every(Boolean);

    if (!valid) return;

    // Simulate async submission
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';

    setTimeout(function () {
      form.reset();
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
      formSuccess.removeAttribute('hidden');
      setTimeout(function () {
        formSuccess.setAttribute('hidden', '');
      }, 6000);
    }, 1200);
  });

  /* -----------------------------------------------
     Footer year
  ----------------------------------------------- */
  var yearEl = qs('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

}());
