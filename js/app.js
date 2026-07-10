/* Nada Flights — a Google-Flights-style "dopamine site": search, book and track
   flights that never exist. Vanilla JS; lifetime savings persist in localStorage. */

const STORE_KEY = "nadaflights.v1";

/* ---------------- data ---------------- */

const AIRPORTS = [
  { code: "GRU", city: "São Paulo", country: "🇧🇷", lat: -23.43, lon: -46.47 },
  { code: "GIG", city: "Rio de Janeiro", country: "🇧🇷", lat: -22.81, lon: -43.25 },
  { code: "ICN", city: "Seoul", country: "🇰🇷", lat: 37.46, lon: 126.44 },
  { code: "NRT", city: "Tokyo", country: "🇯🇵", lat: 35.77, lon: 140.39 },
  { code: "JFK", city: "New York", country: "🇺🇸", lat: 40.64, lon: -73.78 },
  { code: "LAX", city: "Los Angeles", country: "🇺🇸", lat: 33.94, lon: -118.41 },
  { code: "SFO", city: "San Francisco", country: "🇺🇸", lat: 37.62, lon: -122.38 },
  { code: "MIA", city: "Miami", country: "🇺🇸", lat: 25.79, lon: -80.29 },
  { code: "LHR", city: "London", country: "🇬🇧", lat: 51.47, lon: -0.45 },
  { code: "CDG", city: "Paris", country: "🇫🇷", lat: 49.01, lon: 2.55 },
  { code: "LIS", city: "Lisbon", country: "🇵🇹", lat: 38.77, lon: -9.13 },
  { code: "BCN", city: "Barcelona", country: "🇪🇸", lat: 41.30, lon: 2.08 },
  { code: "FCO", city: "Rome", country: "🇮🇹", lat: 41.80, lon: 12.24 },
  { code: "AMS", city: "Amsterdam", country: "🇳🇱", lat: 52.31, lon: 4.76 },
  { code: "DXB", city: "Dubai", country: "🇦🇪", lat: 25.25, lon: 55.36 },
  { code: "SIN", city: "Singapore", country: "🇸🇬", lat: 1.36, lon: 103.99 },
  { code: "BKK", city: "Bangkok", country: "🇹🇭", lat: 13.69, lon: 100.75 },
  { code: "SYD", city: "Sydney", country: "🇦🇺", lat: -33.95, lon: 151.18 },
  { code: "MEX", city: "Mexico City", country: "🇲🇽", lat: 19.44, lon: -99.07 },
  { code: "YYZ", city: "Toronto", country: "🇨🇦", lat: 43.68, lon: -79.63 },
];

const AIRLINES = [
  ["Imaginair", "🪽", "IM"],
  ["Vaporjet", "💨", "VJ"],
  ["Daydream Airways", "🌙", "DD"],
  ["Placebo Air", "💊", "PL"],
  ["Ghost Air", "👻", "GH"],
  ["Null Airlines", "⭕", "NL"],
  ["Mirage Pacific", "🏝️", "MP"],
  ["Nada Air", "✨", "NA"],
];

const CABINS = { eco: ["Economy", 1], prem: ["Premium economy", 1.7], biz: ["Business", 3], first: ["First", 4.6] };

/* ---------------- persistent stats ---------------- */

function loadStats() {
  try {
    const s = JSON.parse(localStorage.getItem(STORE_KEY));
    if (s && typeof s.saved === "number") return s;
  } catch (e) { /* corrupted → start fresh */ }
  return { saved: 0, trips: 0, miles: 0 };
}
const stats = loadStats();
function saveStats() { localStorage.setItem(STORE_KEY, JSON.stringify(stats)); }

/* ---------------- state ---------------- */

const trip = {
  type: "round", pax: 1, cabin: "eco",
  from: null, to: null, depDate: null, retDate: null,
  phase: "out",            // which leg is being chosen
  outbound: null, inbound: null,
  flights: [], sort: "best",
};
let trackTimers = [];
let booking = null;

/* ---------------- helpers ---------------- */

const $ = id => document.getElementById(id);
const money = n => "$" + Math.round(n).toLocaleString("en-US");
const money2 = n => "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const esc = s => s.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const rnd = (a, b) => a + Math.random() * (b - a);
const pick = arr => arr[Math.floor(Math.random() * arr.length)];

function km(a, b) {
  const R = 6371, d = Math.PI / 180;
  const dLat = (b.lat - a.lat) * d, dLon = (b.lon - a.lon) * d;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * d) * Math.cos(b.lat * d) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

function fmtDur(mins) {
  return `${Math.floor(mins / 60)} h ${String(Math.round(mins % 60)).padStart(2, "0")} m`;
}
function fmtTime(mins) {
  const h24 = Math.floor(mins / 60) % 24, m = Math.round(mins % 60);
  const ap = h24 >= 12 ? "PM" : "AM";
  const h = h24 % 12 || 12;
  return `${h}:${String(m).padStart(2, "0")} ${ap}`;
}
function fmtDate(iso) {
  return new Date(iso + "T12:00:00").toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
}

let toastTimer;
function toast(msg) {
  const t = $("toast");
  t.textContent = msg;
  t.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { t.hidden = true; }, 2600);
}

function confetti() {
  const layer = $("confettiLayer");
  const colors = ["#4285f4", "#ea4335", "#fbbc04", "#34a853", "#1a73e8", "#188038"];
  for (let i = 0; i < 90; i++) {
    const c = document.createElement("div");
    c.className = "confetti";
    c.style.left = Math.random() * 100 + "vw";
    c.style.background = colors[i % colors.length];
    c.style.animationDuration = 1.6 + Math.random() * 1.8 + "s";
    c.style.animationDelay = Math.random() * .4 + "s";
    layer.appendChild(c);
    setTimeout(() => c.remove(), 4200);
  }
}

function parseAirport(v) {
  v = v.trim().toLowerCase();
  if (!v) return null;
  return AIRPORTS.find(a =>
    v.includes(a.code.toLowerCase()) || a.city.toLowerCase().includes(v) || v.includes(a.city.toLowerCase())
  ) || null;
}

/* ---------------- flight generation ---------------- */

function makeFlights(fromA, toA) {
  const dist = km(fromA, toA);
  const flights = [];
  for (let i = 0; i < 9; i++) {
    const [airline, logo, iata] = pick(AIRLINES);
    const stops = dist < 2500 ? (Math.random() < .7 ? 0 : 1) : Math.random() < .4 ? 0 : Math.random() < .8 ? 1 : 2;
    const flightMins = dist / 840 * 60 + 40 + stops * rnd(70, 160);
    const dep = Math.round(rnd(5 * 60, 22.5 * 60) / 5) * 5;
    const price = (dist * rnd(.07, .12) + 60 + stops * -25 + rnd(0, 90)) * CABINS[trip.cabin][1];
    flights.push({
      id: i,
      airline, logo,
      no: iata + Math.floor(rnd(100, 999)),
      dep, arr: dep + flightMins, dur: flightMins,
      stops, price: Math.max(49, Math.round(price)),
      co2avg: Math.round(dist * .09 * CABINS[trip.cabin][1]),
      from: fromA, to: toA, dist,
    });
  }
  return flights;
}

function sortFlights(list) {
  const s = trip.sort;
  return [...list].sort((a, b) =>
    s === "cheap" ? a.price - b.price :
    s === "fast" ? a.dur - b.dur :
    (a.price + a.dur * 1.4 + a.stops * 150) - (b.price + b.dur * 1.4 + b.stops * 150));
}

/* ---------------- rendering ---------------- */

function renderStats() {
  $("savingsTotal").textContent = money(stats.saved);
  $("statTrips").textContent = stats.trips;
  $("statMiles").textContent = stats.miles.toLocaleString("en-US");
  $("statSaved").textContent = money(stats.saved);
}

function renderInsight() {
  const list = trip.flights;
  const lo = Math.min(...list.map(f => f.price)), hi = Math.max(...list.map(f => f.price));
  $("insightSub").textContent =
    `Similar trips usually cost ${money(lo)}–${money(hi)}. You, of course, will pay $0.`;
  $("insightChart").innerHTML =
    Array.from({ length: 11 }, () => `<div class="ibar" style="height:${Math.round(rnd(30, 100))}%"></div>`).join("") +
    `<div class="ibar you" style="height:4%" title="your price"></div>`;
}

function renderFlights() {
  const isOut = trip.phase === "out";
  $("resultsTitle").textContent = isOut ? "Best departing flights" : "Now pick your returning flight";
  $("flightList").innerHTML = sortFlights(trip.flights).map(f => {
    const plus1 = f.arr >= 24 * 60 ? " +1" : "";
    return `<div class="flight-row">
      <div class="fl-main">
        <span class="fl-logo">${f.logo}</span>
        <div>
          <div class="fl-times">${fmtTime(f.dep)} – ${fmtTime(f.arr)}${plus1}</div>
          <div class="fl-airline">${f.airline} · ${f.no}</div>
        </div>
      </div>
      <div class="fl-dur-wrap">
        <div class="fl-dur">${fmtDur(f.dur)}</div>
        <div class="fl-codes">${f.from.code}–${f.to.code}</div>
      </div>
      <div class="fl-stops">${f.stops === 0 ? "Nonstop" : f.stops + " stop" + (f.stops > 1 ? "s" : "")}
        <small>${f.stops ? "somewhere imaginary" : "to nowhere, directly"}</small></div>
      <div class="fl-co2">0 kg CO₂<small>avg ${f.co2avg} kg — you're not flying</small></div>
      <div class="fl-price">
        <div class="p"><span class="strike">${money(f.price)}</span>$0</div>
        <small>${isOut && trip.type === "round" ? "per leg, per person" : "per person"}</small>
        <button class="select-btn" data-select="${f.id}">Select</button>
      </div>
    </div>`;
  }).join("");
}

function search() {
  const from = parseAirport($("fromInput").value);
  const to = parseAirport($("toInput").value);
  if (!from || !to) return toast("Pick airports from the list — they're the only real thing here ✈️");
  if (from.code === to.code) return toast("Origin and destination match. Technically the trip is already complete.");
  const dep = $("depDate").value, ret = $("retDate").value;
  if (!dep) return toast("Pick a departure date you'll feel nothing on.");
  if (trip.type === "round" && (!ret || ret < dep)) return toast("Return date must be after departure. Even fake time is linear.");

  Object.assign(trip, { from, to, depDate: dep, retDate: ret, phase: "out", outbound: null, inbound: null });
  trip.flights = makeFlights(from, to);
  renderInsight();
  renderFlights();
  $("resultsArea").hidden = false;
  $("resultsArea").scrollIntoView({ behavior: "smooth", block: "start" });
}

function selectFlight(id) {
  const f = trip.flights.find(x => x.id === Number(id));
  if (trip.phase === "out") {
    trip.outbound = f;
    if (trip.type === "round") {
      trip.phase = "ret";
      trip.flights = makeFlights(trip.to, trip.from);
      renderFlights();
      toast("Departure locked in. Now the flight home — from the place you'll never be.");
      $("resultsArea").scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
  } else {
    trip.inbound = f;
  }
  openBooking();
}

/* ---------------- booking ---------------- */

function legCard(kind, f, date) {
  return `<div class="leg-card">
    <span class="fl-logo">${f.logo}</span>
    <div>
      <div class="leg-kind">${kind} · ${fmtDate(date)}</div>
      <div class="leg-route">${f.from.city} (${f.from.code}) → ${f.to.city} (${f.to.code})</div>
      <div class="leg-meta">${f.airline} ${f.no} · ${fmtTime(f.dep)}–${fmtTime(f.arr)} · ${fmtDur(f.dur)} · ${f.stops ? f.stops + " stop(s)" : "Nonstop"}</div>
    </div>
    <div class="fl-price"><div class="p"><span class="strike">${money(f.price)}</span>$0</div></div>
  </div>`;
}

function openBooking() {
  $("searchView").hidden = true;
  $("bookView").hidden = false;
  window.scrollTo({ top: 0 });

  $("itinerary").innerHTML =
    legCard("Departing flight", trip.outbound, trip.depDate) +
    (trip.inbound ? legCard("Returning flight", trip.inbound, trip.retDate) : "");

  const pax = trip.pax;
  const base = (trip.outbound.price + (trip.inbound ? trip.inbound.price : 0)) * pax;
  const taxes = base * .13;
  const seat = 14.99 * pax * (trip.inbound ? 2 : 1);
  const total = base + taxes + seat;
  booking = { total, miles: Math.round((trip.outbound.dist + (trip.inbound ? trip.inbound.dist : 0)) * .621371), durMins: trip.outbound.dur + (trip.inbound ? trip.inbound.dur : 0) };

  $("fareBox").innerHTML = `
    <div class="fare-row"><span>Flights × ${pax} passenger${pax > 1 ? "s" : ""} (${CABINS[trip.cabin][0]})</span><span>${money2(base)}</span></div>
    <div class="fare-row"><span>Taxes, fees & airport charges</span><span>${money2(taxes)}</span></div>
    <div class="fare-row"><span>Seat selection</span><span>${money2(seat)}</span></div>
    <div class="fare-row discount"><span>Dopamine discount (you're not going)</span><span>−${money2(total)}</span></div>
    <div class="fare-row total"><span>Total</span><span class="zero">$0.00</span></div>`;
}

const PROCESSING_MSGS = [
  "Contacting the airline… it doesn't exist…",
  "Charging your card $0.00…",
  "Reserving a seat nobody will sit in…",
  "Printing a boarding pass for no one…",
  "Notifying the pilot… she's on vacation, permanently…",
];

function book() {
  $("bookBtn").disabled = true;
  $("processingBox").hidden = false;
  let mi = 0;
  $("processingMsg").textContent = PROCESSING_MSGS[0];
  const msgTimer = setInterval(() => {
    mi = (mi + 1) % PROCESSING_MSGS.length;
    $("processingMsg").textContent = PROCESSING_MSGS[mi];
  }, 900);

  setTimeout(() => {
    clearInterval(msgTimer);
    $("processingBox").hidden = true;
    $("bookBtn").disabled = false;
    confetti();
    openPassView();
  }, 3400);
}

/* ---------------- boarding pass & tracking ---------------- */

function seatFor() {
  const pref = $("paxSeat").value;
  const letters = pref.startsWith("Window") ? "AF" : pref.startsWith("Aisle") ? "CD" : "BE";
  return Math.floor(rnd(7, 42)) + letters[Math.floor(Math.random() * 2)];
}

function barcode() {
  return `<div class="barcode" aria-hidden="true">${Array.from({ length: 46 },
    () => `<div class="bar" style="width:${Math.random() < .5 ? 1 : Math.random() < .5 ? 2 : 4}px"></div>`).join("")}</div>`;
}

function bpass(f, date, name, seat) {
  return `<div class="bpass">
    <div class="bpass-top"><span>BOARDING PASS · ${esc(name).toUpperCase()}</span><span>${f.airline} ${f.no}</span></div>
    <div class="bpass-body">
      <div><div class="bpass-code">${f.from.code}</div><div class="bpass-city">${f.from.country} ${f.from.city}</div></div>
      <div class="bpass-mid"><span class="bpass-plane">✈️</span>${fmtDur(f.dur)}<br>${fmtDate(date)}</div>
      <div class="bpass-dest"><div class="bpass-code">${f.to.code}</div><div class="bpass-city">${f.to.country} ${f.to.city}</div></div>
    </div>
    <div class="bpass-details">
      <div class="bpd"><span>Boards</span><b>${fmtTime(f.dep - 40)}</b></div>
      <div class="bpd"><span>Gate</span><b>${pick("ABCD")}${Math.floor(rnd(1, 28))}</b></div>
      <div class="bpd"><span>Seat</span><b>${seat}</b></div>
      <div class="bpd"><span>Class</span><b>${CABINS[trip.cabin][0]}</b></div>
      <div class="bpd"><span>Status</span><b>Never boarding</b></div>
    </div>
    ${barcode()}
  </div>`;
}

const TRACK_STEPS = [
  { at: 0,  icon: "🎫", title: "Checked in", sub: "Boarding group A. You've earned it by doing nothing." },
  { at: 6,  icon: "🛂", title: "Security cleared instantly", sub: "You have no bags, no liquids and no body at the airport." },
  { at: 13, icon: "🛫", title: "Departed*", sub: "*The aircraft is a concept. The pushback was emotional." },
  { at: 22, icon: "🌍", title: "Cruising at 0 ft", sub: "Directly above your own sofa. Complimentary snack: whatever's in your kitchen." },
  { at: 32, icon: "🛬", title: "Arrived", sub: "Exactly where you were. Local time: now. Welcome!" },
];
const TRACK_TOTAL = 32;

function routeMapSVG(f) {
  return `<svg viewBox="0 0 640 190">
    <path class="rm-path" d="M 60 150 Q 320 20 580 150"/>
    <circle class="rm-dot" cx="60" cy="150" r="5"/>
    <circle class="rm-dot" cx="580" cy="150" r="5"/>
    <text class="rm-label" x="60" y="175" text-anchor="middle">${f.from.code}</text>
    <text class="rm-sub" x="60" y="187" text-anchor="middle">${f.from.city}</text>
    <text class="rm-label" x="580" y="175" text-anchor="middle">${f.to.code}</text>
    <text class="rm-sub" x="580" y="187" text-anchor="middle">${f.to.city}</text>
    <text class="rm-plane">✈️
      <animateMotion dur="${TRACK_TOTAL}s" fill="freeze" path="M 60 150 Q 320 20 580 150" rotate="auto"/>
    </text>
  </svg>`;
}

function openPassView() {
  const name = $("paxName").value.trim() || "Mystery Traveler";
  $("bookView").hidden = true;
  $("passView").hidden = false;
  $("arrivedBox").hidden = true;
  $("skipBtn").hidden = false;
  window.scrollTo({ top: 0 });

  $("passWrap").innerHTML =
    bpass(trip.outbound, trip.depDate, name, seatFor()) +
    (trip.inbound ? bpass(trip.inbound, trip.retDate, name, seatFor()) : "");

  $("trackTitle").textContent = `${trip.from.city} → ${trip.to.city}, without leaving the couch`;
  $("routeMap").innerHTML = routeMapSVG(trip.outbound);

  $("timeline").innerHTML = TRACK_STEPS.map((s, i) =>
    `<li class="tl-step" id="step${i}">
      <span class="tl-dot">${s.icon}</span>
      <span><span class="tl-title">${s.title}</span><br><span class="tl-sub">${s.sub}</span></span>
    </li>`).join("");

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
      if (i === TRACK_STEPS.length - 1) finishTrip();
    }, s.at * 1000));
  });
}

function finishTrip() {
  trackTimers.forEach(t => { clearTimeout(t); clearInterval(t); });
  trackTimers = [];
  $("etaTime").textContent = "00:00";
  document.querySelectorAll(".tl-step").forEach(el => { el.classList.add("done"); el.classList.remove("now"); });

  stats.saved += Math.round(booking.total);
  stats.trips += 1;
  stats.miles += booking.miles;
  saveStats();
  renderStats();
  $("savingsPill").classList.remove("bump");
  void $("savingsPill").offsetWidth;
  $("savingsPill").classList.add("bump");

  $("skipBtn").hidden = true;
  $("arrivedAmount").textContent = money(booking.total);
  $("arrivedFine").textContent =
    `You skipped ${fmtDur(booking.durMins)} of economy legroom, ${booking.miles.toLocaleString("en-US")} miles and 0 kg of CO₂.`;
  $("arrivedLifetime").textContent =
    `Lifetime: ${money(stats.saved)} saved · ${stats.trips} trip${stats.trips > 1 ? "s" : ""} not taken · ${stats.miles.toLocaleString("en-US")} miles not flown`;
  $("arrivedBox").hidden = false;
  confetti();
}

function backToSearch() {
  trackTimers.forEach(t => { clearTimeout(t); clearInterval(t); });
  trackTimers = [];
  $("passView").hidden = true;
  $("bookView").hidden = true;
  $("searchView").hidden = false;
  window.scrollTo({ top: 0 });
}

/* ---------------- events & init ---------------- */

document.addEventListener("click", e => {
  const t = e.target.closest("[data-select],[data-sort]");
  if (!t) return;
  if (t.dataset.select !== undefined) selectFlight(t.dataset.select);
  else if (t.dataset.sort) {
    trip.sort = t.dataset.sort;
    document.querySelectorAll("[data-sort]").forEach(c => c.classList.toggle("active", c === t));
    renderFlights();
  }
});

$("searchBtn").addEventListener("click", () => {
  trip.type = $("selTrip").value;
  trip.pax = Number($("selPax").value);
  trip.cabin = $("selCabin").value;
  search();
});
$("selTrip").addEventListener("change", () => { $("retBox").style.visibility = $("selTrip").value === "round" ? "visible" : "hidden"; });
$("swapBtn").addEventListener("click", () => {
  const a = $("fromInput").value;
  $("fromInput").value = $("toInput").value;
  $("toInput").value = a;
});
$("backToResults").addEventListener("click", () => {
  $("bookView").hidden = true;
  $("searchView").hidden = false;
  $("resultsArea").scrollIntoView();
});
$("bookBtn").addEventListener("click", book);
$("skipBtn").addEventListener("click", finishTrip);
$("flyAgainBtn").addEventListener("click", backToSearch);
$("logoLink").addEventListener("click", e => { e.preventDefault(); backToSearch(); });

function init() {
  $("airportList").innerHTML = AIRPORTS.map(a => `<option value="${a.city} (${a.code})">${a.country} ${a.code}</option>`).join("");
  const d = new Date(); d.setDate(d.getDate() + 30);
  const r = new Date(); r.setDate(r.getDate() + 37);
  const iso = x => x.toISOString().slice(0, 10);
  $("depDate").value = iso(d);
  $("retDate").value = iso(r);
  $("fromInput").value = "São Paulo (GRU)";
  $("toInput").value = "Seoul (ICN)";
  renderStats();
}
init();
