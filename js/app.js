// ============================================================
//  ZAM ZAM PIZZA — APP LOGIC
// ============================================================

let cart = [];

// ── RENDER MENU ────────────────────────────────────────────
function renderMenu(filter = 'all') {
  const grid = document.getElementById('menuGrid');
  const items = filter === 'all' ? MENU_ITEMS : MENU_ITEMS.filter(i => i.cat === filter);
  grid.innerHTML = '';

  items.forEach((item, idx) => {
    const defaultSize = item.sizes[0];
    const card = document.createElement('div');
    card.className = 'menu-card';
    card.style.animationDelay = `${idx * 0.06}s`;

    const sizeOptions = item.sizes.length > 1
      ? `<div class="size-picker" id="sp-${item.id}">
          ${item.sizes.map((s, si) => `
            <button class="size-btn ${si === 0 ? 'active' : ''}"
              data-price="${s.price}" data-label="${s.label}"
              onclick="selectSize(${item.id}, this)">
              ${s.label}<br/><small>Rs. ${s.price}</small>
            </button>`).join('')}
         </div>`
      : `<div class="single-price">Rs. ${defaultSize.price}</div>`;

    card.innerHTML = `
      <div class="card-img-wrap">
        ${item.badge ? `<div class="card-badge">${item.badge}</div>` : ''}
        <img src="${item.img}" alt="${item.name}" loading="lazy" class="card-img"/>
        <div class="card-img-overlay"></div>
      </div>
      <div class="card-body">
        <h3 class="card-name">${item.name}</h3>
        <p class="card-desc">${item.desc}</p>
        ${sizeOptions}
        <button class="add-btn" onclick="addToCart(${item.id})">
          <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Add to Order
        </button>
      </div>`;
    grid.appendChild(card);
  });
}

function selectSize(itemId, btn) {
  const picker = document.getElementById(`sp-${itemId}`);
  picker.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

// ── RENDER DEALS ───────────────────────────────────────────
function renderDeals() {
  const grid = document.getElementById('dealsGrid');
  DEALS.forEach((deal, idx) => {
    const card = document.createElement('div');
    card.className = 'deal-card';
    card.style.animationDelay = `${idx * 0.07}s`;
    card.innerHTML = `
      <div class="deal-img-wrap">
        ${deal.badge ? `<div class="deal-badge-tag">${deal.badge}</div>` : ''}
        <img src="${deal.img}" alt="${deal.name}" loading="lazy"/>
      </div>
      <div class="deal-body">
        <div class="deal-num">${deal.num}</div>
        <p class="deal-name">${deal.name}</p>
        <div class="deal-price">Rs. ${deal.price.toLocaleString()}</div>
        <button class="add-btn" onclick="addDealToCart('${deal.id}')">Add Deal</button>
      </div>`;
    grid.appendChild(card);
  });
}

// ── CART ───────────────────────────────────────────────────
function getSelectedSize(itemId) {
  const picker = document.getElementById(`sp-${itemId}`);
  if (!picker) {
    const item = MENU_ITEMS.find(i => i.id === itemId);
    return item.sizes[0];
  }
  const active = picker.querySelector('.size-btn.active');
  return {
    label: active.dataset.label,
    price: parseInt(active.dataset.price)
  };
}

function addToCart(itemId) {
  const item = MENU_ITEMS.find(i => i.id === itemId);
  const size = getSelectedSize(itemId);
  const key = `${itemId}-${size.label}`;
  const existing = cart.find(c => c.key === key);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ key, id: itemId, name: item.name, size: size.label, price: size.price, qty: 1 });
  }
  updateCartUI();
  showToast(`${item.name} (${size.label}) added! 🎉`);
  animateCartBtn();
}

function addDealToCart(dealId) {
  const deal = DEALS.find(d => d.id === dealId);
  const key = `deal-${dealId}`;
  const existing = cart.find(c => c.key === key);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ key, id: dealId, name: deal.name, size: deal.num, price: deal.price, qty: 1 });
  }
  updateCartUI();
  showToast(`${deal.num} added to order! 🎉`);
  animateCartBtn();
}

function removeFromCart(key) {
  cart = cart.filter(c => c.key !== key);
  updateCartUI();
}

function changeQty(key, delta) {
  const item = cart.find(c => c.key === key);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(key);
  else updateCartUI();
}

function updateCartUI() {
  const count = cart.reduce((s, c) => s + c.qty, 0);
  const total = cart.reduce((s, c) => s + c.price * c.qty, 0);
  document.getElementById('cartCount').textContent = count;

  const itemsEl = document.getElementById('cartItems');
  const totalEl = document.getElementById('cartTotal');
  const footerEl = document.getElementById('cartFooter');

  if (cart.length === 0) {
    itemsEl.innerHTML = `<div class="empty-cart"><div class="empty-icon">🍕</div><p>Your cart is empty</p><small>Add some delicious items!</small></div>`;
    totalEl.style.display = 'none';
    footerEl.style.display = 'none';
    return;
  }

  itemsEl.innerHTML = cart.map(c => `
    <div class="cart-item">
      <div class="ci-info">
        <div class="ci-name">${c.name}</div>
        <div class="ci-size">${c.size}</div>
      </div>
      <div class="ci-controls">
        <button onclick="changeQty('${c.key}',-1)" class="qty-btn">−</button>
        <span>${c.qty}</span>
        <button onclick="changeQty('${c.key}',1)" class="qty-btn">+</button>
      </div>
      <div class="ci-price">Rs. ${(c.price * c.qty).toLocaleString()}</div>
      <button onclick="removeFromCart('${c.key}')" class="ci-remove">✕</button>
    </div>`).join('');

  document.getElementById('subtotalAmt').textContent = `Rs. ${total.toLocaleString()}`;
  document.getElementById('totalAmt').textContent = `Rs. ${total.toLocaleString()}`;
  totalEl.style.display = 'block';
  footerEl.style.display = 'block';
}

// ── WHATSAPP ORDER ─────────────────────────────────────────
function openOrder() {
  if (cart.length === 0) { showToast('Please add items first!'); return; }
  document.getElementById('modalOverlay').classList.add('active');
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
}

function sendWhatsApp() {
  const name = document.getElementById('custName').value.trim();
  const phone = document.getElementById('custPhone').value.trim();
  const address = document.getElementById('custAddress').value.trim();
  const notes = document.getElementById('custNotes').value.trim();

  if (!name || !phone || !address) {
    showToast('Please fill in all required fields!');
    return;
  }

  const total = cart.reduce((s, c) => s + c.price * c.qty, 0);
  let msg = `🍕 *NEW ORDER — ZAM ZAM PIZZA*\n\n`;
  msg += `👤 *Customer:* ${name}\n`;
  msg += `📞 *Phone:* ${phone}\n`;
  msg += `📍 *Address:* ${address}\n`;
  if (notes) msg += `📝 *Notes:* ${notes}\n`;
  msg += `\n*ORDER ITEMS:*\n`;
  msg += `─────────────────\n`;
  cart.forEach(c => {
    msg += `• ${c.name} (${c.size}) × ${c.qty} = Rs. ${(c.price * c.qty).toLocaleString()}\n`;
  });
  msg += `─────────────────\n`;
  msg += `💰 *TOTAL: Rs. ${total.toLocaleString()}*\n\n`;
  msg += `_Please confirm this order. Thank you!_ 🙏`;

  const encoded = encodeURIComponent(msg);
  const waNumber = '923217131065';
  window.open(`https://wa.me/${waNumber}?text=${encoded}`, '_blank');
  closeModal();
  closeCart();
  cart = [];
  updateCartUI();
  showToast('Order sent! We will confirm shortly. 🎉');
}

// ── CART SIDEBAR ───────────────────────────────────────────
function openCart() {
  document.getElementById('cartSidebar').classList.add('open');
  document.getElementById('cartOverlay').classList.add('active');
}

function closeCart() {
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('active');
}

// ── TOAST ──────────────────────────────────────────────────
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ── NAVBAR SCROLL ──────────────────────────────────────────
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// ── HAMBURGER ──────────────────────────────────────────────
function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
  document.getElementById('hamburger').classList.toggle('active');
}

// ── CATEGORY TABS ─────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderMenu('all');
  renderDeals();

  document.getElementById('catTabs').addEventListener('click', e => {
    const btn = e.target.closest('.cat-btn');
    if (!btn) return;
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderMenu(btn.dataset.cat);
  });

  // Scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.section-header, .contact-card').forEach(el => observer.observe(el));
});

// ── CART BTN ANIMATION ─────────────────────────────────────
function animateCartBtn() {
  const btn = document.querySelector('.nav-cart-btn');
  btn.classList.add('bump');
  setTimeout(() => btn.classList.remove('bump'), 400);
}

// Close modal on overlay click
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('modalOverlay').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
  });
});
