// ===== HOTSPRING PORTABLE SPAS - MAIN JS =====

// Simple cart state
let cart = [];
let currentSlide = 0;

// ===== SLIDER =====
function initSlider() {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.slider-dots span');
  if (!slides.length) return;

  function showSlide(n) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    if (dots[currentSlide]) dots[currentSlide].classList.add('active');
  }

  dots.forEach((d, i) => d.addEventListener('click', () => showSlide(i)));
  setInterval(() => showSlide(currentSlide + 1), 4000);
  showSlide(0);
}

// ===== FORM VALIDATION =====
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
  // Password match
  const np = form.querySelector('[name="new_password"]');
  const cp = form.querySelector('[name="confirm_password"]');
  const rp = form.querySelector('[name="re_password"]');
  if (np && cp && np.value !== cp.value) { cp.style.border = '2px solid #cc0000'; valid = false; }
  if (rp && np && np.value !== rp.value) { rp.style.border = '2px solid #cc0000'; valid = false; }
  if (!valid) alert('Please fill in all required fields correctly.');
  return valid;
}

// ===== ADD TO CART =====
function addToCart(name, price) {
  cart.push({ name, price });
  updateCartCount();
  showNotification(`"${name}" was just added to cart.`);
}

function updateCartCount() {
  document.querySelectorAll('.cart-count').forEach(el => el.textContent = `My Cart: ${cart.length} Item(s)`);
}

function showNotification(msg) {
  const n = document.createElement('div');
  n.style.cssText = 'position:fixed;top:70px;right:20px;background:#cc0000;color:#fff;padding:10px 18px;font-size:12px;z-index:9999;border-radius:2px;font-weight:bold;';
  n.textContent = msg;
  document.body.appendChild(n);
  setTimeout(() => n.remove(), 3000);
}

// ===== NAVIGATION =====
function navigate(page) {
  window.location.href = page;
}

// ===== TABS =====
function initTabs() {
  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.tab-pane');
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.add('hidden'));
      tab.classList.add('active');
      if (contents[i]) contents[i].classList.remove('hidden');
    });
  });
}

// ===== IMAGE ZOOM =====
function initThumbGallery() {
  const thumbs = document.querySelectorAll('.thumbs img');
  const mainImg = document.querySelector('.product-main-img');
  if (!mainImg) return;
  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      mainImg.src = thumb.src;
      thumbs.forEach(t => t.style.border = '1px solid #ddd');
      thumb.style.border = '2px solid #cc0000';
    });
  });
}

// ===== QUANTITY UPDATE =====
function updateQty(input) {
  const row = input.closest('tr');
  const price = parseFloat(row.dataset.price || 9);
  const qty = parseInt(input.value);
  const totalCell = row.querySelector('.item-total');
  if (totalCell) totalCell.textContent = '$' + (price * qty).toFixed(2);
  recalcCart();
}

function recalcCart() {
  let total = 0;
  document.querySelectorAll('.cart-table tr[data-price]').forEach(row => {
    const qty = parseInt(row.querySelector('select')?.value || 1);
    const price = parseFloat(row.dataset.price || 0);
    total += qty * price;
  });
  const totalEl = document.querySelector('.cart-total-val');
  if (totalEl) totalEl.textContent = '$' + total.toFixed(2);
}

// ===== PRICE CALCULATOR =====
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

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  initSlider();
  initTabs();
  initThumbGallery();
  document.querySelectorAll('.calc-select').forEach(s => s.addEventListener('change', calcTotalPrice));
});
