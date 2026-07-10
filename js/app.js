/* NadaMart — a Korean-style "dopamine site": the full shopping ritual, zero purchases.
   Vanilla JS. Lifetime "savings" persist in localStorage; carts are per-visit. */

const STORE_KEY = "nadamart.v1";

/* ---------------- catalog ---------------- */

const PRODUCTS = [
  { id: "buds", name: "CloudPods Pro wireless earbuds", emoji: "🎧", cat: "Tech", price: 129, was: 219, rating: 4.8, reviews: 2841,
    blurb: "Noise cancelling so good you can't even hear your card not being charged.",
    quotes: [["mina_k", "Ordered at 2am instead of doom-scrolling shopping apps. Woke up richer."], ["dopamine_dan", "The bass I imagined was incredible."]] },
  { id: "sneak", name: "Retro Runner '86 sneakers", emoji: "👟", cat: "Fashion", price: 189, was: 260, rating: 4.7, reviews: 1932,
    blurb: "Limited drop. Extremely hyped. Ships to absolutely no one.",
    quotes: [["sole.less", "True to size (I assume)."], ["jae", "Flexed the order confirmation in the group chat. Nobody checked."]] },
  { id: "keeb", name: "Thocky mechanical keyboard", emoji: "⌨️", cat: "Tech", price: 149, was: 199, rating: 4.9, reviews: 3310,
    blurb: "Lubed switches, gasket mount, zero desk space consumed.",
    quotes: [["clacker", "The thock is theoretical but I feel it."], ["wpm_god", "My 6th keyboard this month and my wallet is fine."]] },
  { id: "robovac", name: "RoboVac S9 self-empty base", emoji: "🤖", cat: "Home", price: 399, was: 649, rating: 4.6, reviews: 5104,
    blurb: "Maps your home, empties itself, and never actually shows up to judge your floors.",
    quotes: [["cleanfreak", "My imaginary floors are spotless."], ["catmom", "The cat would have hated it. Crisis averted."]] },
  { id: "fryer", name: "CrispAir XL air fryer", emoji: "🍟", cat: "Home", price: 89, was: 139, rating: 4.5, reviews: 8722,
    blurb: "The appliance everyone owns and you almost did. So close.",
    quotes: [["snacc", "0 calories consumed. Best purchase ever."], ["chef_no", "Doesn't take up counter space. Genius design."]] },
  { id: "serum", name: "Glass Skin 10-step serum set", emoji: "🧴", cat: "Beauty", price: 75, was: 120, rating: 4.7, reviews: 4419,
    blurb: "K-beauty routine, snail mucin included. Your skin barrier remains undisturbed.",
    quotes: [["glow_up", "My skin is glowing from the savings."], ["seoul_sis", "Step 11 is closing the app. Nailed it."]] },
  { id: "cam", name: "InstaSnap retro camera", emoji: "📸", cat: "Tech", price: 119, was: 159, rating: 4.4, reviews: 1276,
    blurb: "Capture memories of all the money you didn't spend.",
    quotes: [["film_grl", "The photos I didn't take are stunning."], ["retro_rob", "Aesthetic AF in my imagination."]] },
  { id: "desk", name: "AltiRise standing desk", emoji: "🪑", cat: "Home", price: 499, was: 799, rating: 4.6, reviews: 2011,
    blurb: "Dual motor, memory presets, and a 100% chance you'd still sit anyway.",
    quotes: [["backpain", "I stood up while ordering. That counts."], ["wfh_wes", "Assembly took 0 minutes. Incredible."]] },
  { id: "espresso", name: "Barista9 espresso machine", emoji: "☕", cat: "Home", price: 349, was: 499, rating: 4.8, reviews: 3689,
    blurb: "Café-grade crema. Your counter, your bank account: untouched.",
    quotes: [["bean_there", "Saved $349 AND skipped the caffeine jitters."], ["latte.art", "The latte art I visualized was a swan."]] },
  { id: "tote", name: "Le Bourgeois designer tote", emoji: "👜", cat: "Fashion", price: 259, was: 340, rating: 4.5, reviews: 987,
    blurb: "Quiet luxury. So quiet it never arrives.",
    quotes: [["it_girl", "Goes with everything I also didn't buy."], ["minimal_min", "Owning zero of these is very minimalist of me."]] },
  { id: "watch", name: "Pulse X smartwatch", emoji: "⌚", cat: "Tech", price: 299, was: 399, rating: 4.6, reviews: 6230,
    blurb: "Tracks your heart rate spiking at checkout. Then nothing else, ever.",
    quotes: [["stepcount", "It would have judged my step count anyway."], ["gadget_guy", "Battery life: infinite (still in the imaginary box)."]] },
  { id: "led", name: "GlowStrip LED room lights", emoji: "💡", cat: "Home", price: 29, was: 49, rating: 4.3, reviews: 11245,
    blurb: "16 million colors for the room makeover you're not doing.",
    quotes: [["vibes_only", "My room is the same but my soul is RGB."], ["teen_dream", "TikTok made me not buy it."]] },
  { id: "chicken", name: "Double-crunch fried chicken set", emoji: "🍗", cat: "Food", price: 24, was: 32, rating: 4.9, reviews: 15872,
    blurb: "Korean fried chicken + fries + cola. The original dopamine order that never comes.",
    quotes: [["chimaek", "Ordered at midnight. Slept like a baby. No grease."], ["yum_yum", "The crunch was spiritual."]] },
  { id: "boba", name: "Brown sugar boba, 4-pack", emoji: "🧋", cat: "Food", price: 18, was: 24, rating: 4.7, reviews: 9034,
    blurb: "Chewy pearls, zero sugar crash. The straw stays sealed forever.",
    quotes: [["pearl_lvr", "50% sweetness, 100% savings."], ["tea_rex", "My dentist is so proud of me."]] },
  { id: "console", name: "MegaBox 5 game console", emoji: "🎮", cat: "Tech", price: 499, was: 549, rating: 4.8, reviews: 7741,
    blurb: "4K, 120fps, and infinite free time preserved.",
    quotes: [["no_scope", "Backlog remains at 0 games. Flawless."], ["p1ayer_one", "Touched grass instead. 10/10."]] },
  { id: "plush", name: "Cloud sofa cushion set", emoji: "🛋️", cat: "Home", price: 65, was: 95, rating: 4.4, reviews: 2458,
    blurb: "Marshmallow-soft cushions for the couch rot session you deserve.",
    quotes: [["cozy_core", "My couch is unchanged and so is my rent money."], ["nap_queen", "Dreamed about them. Very soft."]] },
];

const CATS = ["All", ...new Set(PRODUCTS.map(p => p.cat))];
const FREE_SHIP_AT = 50; // "free non-delivery" threshold, purely for the progress-bar dopamine

/* ---------------- persistent stats ---------------- */

function loadStats() {
  try {
    const s = JSON.parse(localStorage.getItem(STORE_KEY));
    if (s && typeof s.saved === "number") return s;
  } catch (e) { /* corrupted → start fresh */ }
  return { saved: 0, orders: 0, items: 0 };
}
const stats = loadStats();
function saveStats() { localStorage.setItem(STORE_KEY, JSON.stringify(stats)); }

/* ---------------- state ---------------- */

const cart = new Map(); // id → qty
let activeCat = "All";
let trackTimers = [];
let lastOrder = null;

/* ---------------- helpers ---------------- */

const $ = id => document.getElementById(id);
const money = n => "$" + n.toLocaleString("en-US", { minimumFractionDigits: n % 1 ? 2 : 0 });
const esc = s => s.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const TILE_HUES = ["#ffe3f1", "#e8ddff", "#ffedd6", "#fff6c9", "#dcfce7", "#d5f6f2"];
const tileBg = i => TILE_HUES[i % TILE_HUES.length];

function stars(r) {
  return "★".repeat(Math.round(r)) + "☆".repeat(5 - Math.round(r));
}

let toastTimer;
function toast(msg) {
  const t = $("toast");
  t.textContent = msg;
  t.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { t.hidden = true; }, 2200);
}

function confetti() {
  const layer = $("confettiLayer");
  const colors = ["#ff4fa3", "#7b2ff7", "#ff8a3d", "#ffd23f", "#22c55e", "#2dd4bf"];
  for (let i = 0; i < 90; i++) {
    const c = document.createElement("div");
    c.className = "confetti";
    c.style.left = Math.random() * 100 + "vw";
    c.style.background = colors[i % colors.length];
    c.style.animationDuration = 1.6 + Math.random() * 1.8 + "s";
    c.style.animationDelay = Math.random() * .4 + "s";
    c.style.transform = `rotate(${Math.random() * 360}deg)`;
    layer.appendChild(c);
    setTimeout(() => c.remove(), 4200);
  }
}

/* ---------------- rendering ---------------- */

function renderStats() {
  $("savingsTotal").textContent = money(stats.saved);
  $("statOrders").textContent = stats.orders;
  $("statItems").textContent = stats.items;
  $("statSaved").textContent = money(stats.saved);
}

function renderFilters() {
  $("filters").innerHTML = CATS.map(c =>
    `<button class="filter-chip ${c === activeCat ? "active" : ""}" data-cat="${c}" role="tab" aria-selected="${c === activeCat}">${c}</button>`
  ).join("");
}

function renderGrid() {
  const list = PRODUCTS.filter(p => activeCat === "All" || p.cat === activeCat);
  $("productGrid").innerHTML = list.map(p => {
    const i = PRODUCTS.indexOf(p);
    const off = Math.round((1 - p.price / p.was) * 100);
    return `<article class="card">
      <div class="card-art" style="background:${tileBg(i)}" data-quick="${p.id}" title="Quick view">
        <span class="discount">-${off}%</span>${p.emoji}
      </div>
      <div class="card-body">
        <div class="card-name">${p.name}</div>
        <div class="card-rating">${stars(p.rating)} ${p.rating} · ${p.reviews.toLocaleString()} reviews</div>
        <div class="card-price-row">
          <span class="price">${money(p.price)}</span>
          <span class="price-was">${money(p.was)}</span>
        </div>
        <button class="add-btn" data-add="${p.id}">Add to cart ✨</button>
      </div>
    </article>`;
  }).join("");
}

function renderCart() {
  const items = [...cart.entries()].map(([id, qty]) => ({ p: PRODUCTS.find(p => p.id === id), qty }));
  const count = items.reduce((s, it) => s + it.qty, 0);
  const total = items.reduce((s, it) => s + it.p.price * it.qty, 0);

  $("cartCount").hidden = count === 0;
  $("cartCount").textContent = count;

  if (!items.length) {
    $("cartItems").innerHTML = `<div class="cart-empty"><span class="big-emoji">🛒</span>
      Your cart is empty.<br>Fill it with things you'll never receive.</div>`;
  } else {
    $("cartItems").innerHTML = items.map(({ p, qty }) => {
      const i = PRODUCTS.indexOf(p);
      return `<div class="cart-item">
        <div class="cart-item-art" style="background:${tileBg(i)}">${p.emoji}</div>
        <div>
          <div class="cart-item-name">${p.name}</div>
          <div class="cart-item-price">${money(p.price)} each</div>
        </div>
        <div class="qty-row">
          <button class="qty-btn" data-dec="${p.id}" aria-label="Remove one">−</button>
          <span class="qty-num">${qty}</span>
          <button class="qty-btn" data-inc="${p.id}" aria-label="Add one">+</button>
        </div>
      </div>`;
    }).join("");
  }

  const pct = Math.min(100, Math.round(total / FREE_SHIP_AT * 100));
  $("shipFill").style.width = pct + "%";
  $("shipNote").textContent = total >= FREE_SHIP_AT
    ? "🎉 You unlocked FREE non-delivery!"
    : `Add ${money(FREE_SHIP_AT - total)} more for FREE non-delivery`;
  $("cartTotal").textContent = money(total);
  $("checkoutBtn").disabled = !items.length;
  $("checkoutBtn").style.opacity = items.length ? 1 : .5;
}

function renderCheckoutSummary() {
  const items = [...cart.entries()].map(([id, qty]) => ({ p: PRODUCTS.find(p => p.id === id), qty }));
  const total = items.reduce((s, it) => s + it.p.price * it.qty, 0);
  $("checkoutSummary").innerHTML =
    items.map(({ p, qty }) => `<div class="sum-row"><span>${p.emoji} ${p.name} × ${qty}</span><span>${money(p.price * qty)}</span></div>`).join("") +
    `<div class="sum-row"><span>Subtotal</span><span class="strike">${money(total)}</span></div>
     <div class="sum-row"><span>Dopamine discount (−100%)</span><span>−${money(total)}</span></div>
     <div class="sum-row"><span>Non-delivery fee</span><span class="free">FREE</span></div>
     <div class="sum-row total"><span>You pay</span><span class="free">$0.00</span></div>`;
}

/* ---------------- quick view ---------------- */

function openQuick(id) {
  const p = PRODUCTS.find(x => x.id === id);
  const i = PRODUCTS.indexOf(p);
  $("quickBody").innerHTML = `
    <div class="quick-art" style="background:${tileBg(i)}">${p.emoji}</div>
    <h3 id="quickName">${p.name}</h3>
    <div class="card-rating">${stars(p.rating)} ${p.rating} · ${p.reviews.toLocaleString()} verified non-buyers</div>
    <p class="quick-blurb">${p.blurb}</p>
    <div class="quick-reviews">
      ${p.quotes.map(([who, text]) => `<div class="review"><b>@${esc(who)} ★★★★★</b>${esc(text)}</div>`).join("")}
    </div>
    <div class="quick-buy-row">
      <span class="price">${money(p.price)}</span>
      <button class="add-btn" data-add="${p.id}">Add to cart ✨</button>
    </div>`;
  $("quickOverlay").hidden = false;
}

/* ---------------- cart ops ---------------- */

const ADD_TOASTS = [
  "Added! ✨ (still nothing)",
  "In the cart. Feels good, right?",
  "Great taste. Zero cost.",
  "Cart +1 · bank account ±0",
  "Ooh, that would've been expensive.",
];

function addToCart(id) {
  cart.set(id, (cart.get(id) || 0) + 1);
  renderCart();
  toast(ADD_TOASTS[Math.floor(Math.random() * ADD_TOASTS.length)]);
  $("savingsPill").classList.remove("bump");
  void $("savingsPill").offsetWidth;
  $("savingsPill").classList.add("bump");
}

function changeQty(id, delta) {
  const q = (cart.get(id) || 0) + delta;
  if (q <= 0) cart.delete(id); else cart.set(id, q);
  renderCart();
}

/* ---------------- checkout & order ---------------- */

const PROCESSING_MSGS = [
  "Charging your card $0.00…",
  "Contacting the warehouse… it's empty, as designed…",
  "Reserving nothing just for you…",
  "Applying dopamine discount (−100%)…",
  "Waking up courier Kim… he's thrilled…",
];

function placeOrder() {
  const items = [...cart.entries()].map(([id, qty]) => ({ p: PRODUCTS.find(p => p.id === id), qty }));
  if (!items.length) return;
  const total = items.reduce((s, it) => s + it.p.price * it.qty, 0);
  const count = items.reduce((s, it) => s + it.qty, 0);
  const name = $("fieldName").value.trim() || "mystery shopper";

  $("checkoutForm").hidden = true;
  $("processingBox").hidden = false;

  let mi = 0;
  $("processingMsg").textContent = PROCESSING_MSGS[0];
  const msgTimer = setInterval(() => {
    mi = (mi + 1) % PROCESSING_MSGS.length;
    $("processingMsg").textContent = PROCESSING_MSGS[mi];
  }, 900);

  setTimeout(() => {
    clearInterval(msgTimer);
    lastOrder = {
      no: "NM-" + Date.now().toString(36).toUpperCase().slice(-6),
      total, count, name,
    };
    cart.clear();
    renderCart();
    closeOverlay("checkoutOverlay");
    $("checkoutForm").hidden = false;
    $("processingBox").hidden = true;
    confetti();
    startTracking();
  }, 3400);
}

/* ---------------- delivery tracking ---------------- */

const TRACK_STEPS = [
  { at: 0,  icon: "🧾", title: "Order confirmed", sub: "NadaMart accepted your order of nothing." },
  { at: 6,  icon: "📦", title: "Packing", sub: "Carefully wrapping 0 items in 0 bubble wrap." },
  { at: 13, icon: "🛵", title: "Courier on the way", sub: "Kim grabbed the empty bag and is flying." },
  { at: 26, icon: "📍", title: "Almost there", sub: "2 minutes away (spiritually)." },
  { at: 38, icon: "📭", title: "Delivered", sub: "Ding dong. It's nothing. Enjoy." },
];
const TRACK_TOTAL = 38;

function startTracking() {
  $("shopView").hidden = true;
  $("trackView").hidden = false;
  $("deliveredBox").hidden = true;
  $("skipBtn").hidden = false;
  $("trackTitle").textContent = `${lastOrder.name}, your nothing is on the way`;
  $("trackOrderNo").textContent = `Order ${lastOrder.no} · ${lastOrder.count} item${lastOrder.count > 1 ? "s" : ""} · ${money(lastOrder.total)} not charged`;
  window.scrollTo({ top: 0 });

  $("timeline").innerHTML = TRACK_STEPS.map((s, i) =>
    `<li class="tl-step" id="step${i}">
      <span class="tl-dot">${s.icon}</span>
      <span><span class="tl-title">${s.title}</span><br><span class="tl-sub">${s.sub}</span></span>
    </li>`).join("");

  const courier = $("courier");
  courier.style.transition = "none";
  courier.style.left = "0%";
  courier.classList.add("zoom");
  void courier.offsetWidth;
  courier.style.transition = `left ${TRACK_TOTAL}s linear`;
  courier.style.left = "94%";

  trackTimers.forEach(t => { clearTimeout(t); clearInterval(t); });
  trackTimers = [];

  const start = Date.now();
  const eta = setInterval(() => {
    const left = Math.max(0, TRACK_TOTAL - Math.floor((Date.now() - start) / 1000));
    $("etaTime").textContent = "00:" + String(left).padStart(2, "0");
    if (!left) clearInterval(eta);
  }, 250);
  trackTimers.push(eta);

  TRACK_STEPS.forEach((s, i) => {
    trackTimers.push(setTimeout(() => {
      document.querySelectorAll(".tl-step").forEach((el, j) => {
        el.classList.toggle("done", j <= i);
        el.classList.toggle("now", j === i && i < TRACK_STEPS.length - 1);
      });
      if (i === TRACK_STEPS.length - 1) finishDelivery();
    }, s.at * 1000));
  });
}

function finishDelivery() {
  trackTimers.forEach(t => { clearTimeout(t); clearInterval(t); });
  trackTimers = [];
  $("courier").classList.remove("zoom");
  $("etaTime").textContent = "00:00";
  document.querySelectorAll(".tl-step").forEach(el => { el.classList.add("done"); el.classList.remove("now"); });

  stats.saved += lastOrder.total;
  stats.orders += 1;
  stats.items += lastOrder.count;
  saveStats();
  renderStats();

  $("skipBtn").hidden = true;
  $("deliveredAmount").textContent = money(lastOrder.total);
  $("deliveredLifetime").textContent = money(stats.saved);
  $("deliveredBox").hidden = false;
  confetti();
}

function backToShop() {
  trackTimers.forEach(t => { clearTimeout(t); clearInterval(t); });
  trackTimers = [];
  $("trackView").hidden = true;
  $("shopView").hidden = false;
  window.scrollTo({ top: 0 });
}

/* ---------------- overlays ---------------- */

function closeOverlay(id) { $(id).hidden = true; }

/* ---------------- events ---------------- */

document.addEventListener("click", e => {
  const t = e.target.closest("[data-add],[data-quick],[data-inc],[data-dec],[data-close],[data-cat]");
  if (!t) return;
  if (t.dataset.add) { addToCart(t.dataset.add); closeOverlay("quickOverlay"); }
  else if (t.dataset.quick) openQuick(t.dataset.quick);
  else if (t.dataset.inc) changeQty(t.dataset.inc, 1);
  else if (t.dataset.dec) changeQty(t.dataset.dec, -1);
  else if (t.dataset.close) closeOverlay(t.dataset.close);
  else if (t.dataset.cat) { activeCat = t.dataset.cat; renderFilters(); renderGrid(); }
});

document.querySelectorAll(".overlay").forEach(ov =>
  ov.addEventListener("click", e => { if (e.target === ov) ov.hidden = true; }));

document.addEventListener("keydown", e => {
  if (e.key === "Escape") document.querySelectorAll(".overlay").forEach(ov => { ov.hidden = true; });
});

$("cartBtn").addEventListener("click", () => { renderCart(); $("cartOverlay").hidden = false; });
$("checkoutBtn").addEventListener("click", () => {
  if (!cart.size) return;
  closeOverlay("cartOverlay");
  renderCheckoutSummary();
  $("checkoutOverlay").hidden = false;
});
$("placeOrderBtn").addEventListener("click", placeOrder);
$("skipBtn").addEventListener("click", finishDelivery);
$("shopAgainBtn").addEventListener("click", backToShop);
$("logoLink").addEventListener("click", e => { e.preventDefault(); backToShop(); });

/* ---------------- init ---------------- */

renderStats();
renderFilters();
renderGrid();
renderCart();
