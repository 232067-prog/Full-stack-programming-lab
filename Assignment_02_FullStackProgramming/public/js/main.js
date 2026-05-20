// ===== HOTSPRING PORTABLE SPAS - MAIN JS =====
(function () {
  let cart = window.hotspringCart || [];
  window.hotspringCart = cart;

  let currentSlide = 0;
  let slides = [];
  let dots = [];
  let sliderTimer = null;

  function updateCartCount() {
    document.querySelectorAll('.cart-count').forEach(el => {
      el.textContent = 'My Cart: ' + cart.length + ' Item(s)';
    });
  }

  function showNotification(msg) {
    const n = document.createElement('div');
    n.style.cssText = 'position:fixed;top:70px;right:20px;background:#cc0000;color:#fff;padding:10px 18px;font-size:12px;z-index:9999;border-radius:2px;font-weight:bold;';
    n.textContent = msg;
    document.body.appendChild(n);
    setTimeout(() => n.remove(), 3000);
  }

  function addToCart(name, price) {
    cart.push({ name, price });
    updateCartCount();
    showNotification('"' + name + '" was just added to cart.');
  }

  function showSlide(n) {
    if (!slides.length) return;
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    if (dots[currentSlide]) dots[currentSlide].classList.add('active');
  }

  function initSlider() {
    slides = Array.from(document.querySelectorAll('.slide'));
    dots = Array.from(document.querySelectorAll('.slider-dots span'));
    if (!slides.length) return;
    currentSlide = 0;
    if (sliderTimer) {
      window.clearInterval(sliderTimer);
      sliderTimer = null;
    }
    dots.forEach((d, i) => {
      if (d.getAttribute('onclick')) return;
      if (d.dataset.bound) return;
      d.addEventListener('click', () => showSlide(i));
      d.dataset.bound = 'true';
    });
    showSlide(0);
    sliderTimer = window.setInterval(() => showSlide(currentSlide + 1), 4000);
  }

  function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return true;
    let valid = true;
    form.querySelectorAll('[required]').forEach(input => {
      input.style.border = '1px solid #ccc';
      if (!input.value.trim()) {
        input.style.border = '2px solid #cc0000';
        valid = false;
      }
      if (input.type === 'email' && input.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
        input.style.border = '2px solid #cc0000';
        valid = false;
      }
    });
    const np = form.querySelector('[name="new_password"]');
    const cp = form.querySelector('[name="confirm_password"]');
    const rp = form.querySelector('[name="re_password"]');
    if (np && cp && np.value !== cp.value) { cp.style.border = '2px solid #cc0000'; valid = false; }
    if (rp && np && np.value !== rp.value) { rp.style.border = '2px solid #cc0000'; valid = false; }
    if (!valid) alert('Please fill in all required fields correctly.');
    return valid;
  }

  function navigate(page) {
    window.location.href = page;
  }

  function switchTab(el, idx) {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content, .tab-pane');
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.add('hidden'));
    if (el) el.classList.add('active');
    if (contents[idx]) contents[idx].classList.remove('hidden');
  }

  function initTabs() {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content, .tab-pane');
    if (!tabs.length || !contents.length) return;
    tabs.forEach((tab, i) => {
      if (tab.getAttribute('onclick') || tab.dataset.bound) return;
      tab.addEventListener('click', () => switchTab(tab, i));
      tab.dataset.bound = 'true';
    });
  }

  function initThumbGallery() {
    const thumbs = document.querySelectorAll('.thumbs img');
    const mainImg = document.querySelector('.product-main-img');
    if (!mainImg) return;
    thumbs.forEach(thumb => {
      if (thumb.dataset.bound) return;
      thumb.addEventListener('click', () => {
        mainImg.src = thumb.src;
        thumbs.forEach(t => { t.style.border = '1px solid #ddd'; });
        thumb.style.border = '2px solid #cc0000';
      });
      thumb.dataset.bound = 'true';
    });
  }

  function updateQty(input) {
    if (!input) return;
    const row = input.closest('tr');
    if (!row) return;
    const price = parseFloat(row.dataset.price || 9);
    const qty = parseInt(input.value, 10) || 1;
    const totalCell = row.querySelector('.item-total');
    if (totalCell) totalCell.textContent = '$' + (price * qty).toFixed(2);
    recalcCart();
  }

  function recalcCart() {
    let total = 0;
    document.querySelectorAll('.cart-table tr[data-price]').forEach(row => {
      const qty = parseInt(row.querySelector('select')?.value || 1, 10) || 1;
      const price = parseFloat(row.dataset.price || 0);
      total += qty * price;
    });
    const totalEl = document.querySelector('.cart-total-val');
    if (totalEl) totalEl.textContent = '$' + total.toFixed(2);
  }

  function calcTotalPrice() {
    const basePrice = 650;
    let extras = 0;
    document.querySelectorAll('.calc-select').forEach(sel => {
      if (sel.value) extras += 50;
    });
    const total = basePrice + extras;
    const display = document.querySelector('.calc-total-val');
    if (display) display.textContent = '$' + total.toFixed(2);
  }

  function initCalcSelects() {
    const selects = document.querySelectorAll('.calc-select');
    if (!selects.length) return;
    selects.forEach(s => {
      if (s.dataset.bound) return;
      s.addEventListener('change', calcTotalPrice);
      s.dataset.bound = 'true';
    });
    calcTotalPrice();
  }

  function initHotspring() {
    updateCartCount();
    initSlider();
    initTabs();
    initThumbGallery();
    initCalcSelects();
    recalcCart();
  }

  window.addToCart = addToCart;
  window.updateQty = updateQty;
  window.validateForm = validateForm;
  window.navigate = navigate;
  window.showSlide = showSlide;
  window.switchTab = switchTab;
  window.calcTotalPrice = calcTotalPrice;
  window.__hotspringInit = initHotspring;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHotspring);
  } else {
    initHotspring();
  }
})();
