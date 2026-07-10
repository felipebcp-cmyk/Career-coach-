# Nada Flights — Search flights. Book nothing. Go nowhere. ✈️

A **Google-Flights-style "dopamine site"**: the entire flight-booking ritual — searching
routes, comparing fares, picking seats, checking out, boarding-pass in hand, live flight
tracking — for trips that never happen. Inspired by South Korea's viral fake-shopping
"dopamine sites" (*FoodNeverComes* etc.): dopamine is released in *anticipation* of a
reward, so the booking feels nearly as good as the trip, at 100% off.

**Nothing is real here.** No airline, no inventory, no payments, no travel. The only
thing that persists is your scoreboard — money saved, trips not taken, miles not flown —
in your browser's `localStorage`.

## The full ritual, faithfully faked

- **Search** like Google Flights: round trip / one way, passengers, cabin class,
  origin/destination with airport autocomplete (20 real airports, GRU to ICN by
  default), date pickers and a swap button.
- **Results list** with airline "logos", departure/arrival times, durations computed
  from real great-circle distances, nonstop/stops, and a CO₂ column that always reads
  **0 kg — you're not flying** (average shown for guilt calibration).
- **Price insights**: "Prices are currently low ▼" with a price-history chart where
  your bar — $0 — is the lowest ever recorded.
- **Sort chips**: Best / Cheapest / Fastest. Every option arrives at the same place:
  where you already are.
- **Round trips**: pick the departing flight, then the flight home from the place
  you'll never be.
- **Checkout** with passenger name, seat preference (window / aisle / middle — you
  monster) and a fare summary where the dopamine discount lands the total on **$0.00**.
- **Booking theatre**: *"Reserving a seat nobody will sit in… printing a boarding pass
  for no one…"* Then confetti.
- **Boarding passes** — one per leg — with gates, seats, boarding times, barcodes and
  status **NEVER BOARDING**.
- **Live flight tracking**: a plane crosses a dashed great-circle arc while the
  timeline advances — checked in → security cleared instantly → departed* → cruising
  at 0 ft above your own sofa → arrived exactly where you were. Skippable.
- **Scoreboard**: every trip adds to lifetime *money saved*, *trips not taken* and
  *miles not flown*.

## Run it

```bash
# Option 1: just open the file
open index.html

# Option 2: serve it locally
python3 -m http.server 8080
# then visit http://localhost:8080
```

## Tech

Vanilla HTML/CSS/JS. No build step, no dependencies, no server. State lives under one
`localStorage` key (`nadaflights.v1`). Flight times, durations and "usual" prices are
generated from haversine distances between real airport coordinates, so the fakery is
at least geographically honest. The look borrows Google Flights' design language —
white surfaces, `#1a73e8` blue, hairline borders, pill chips, green fares. Honest by
design: a permanent banner and footer state that no plane will ever board and every
fare ends at $0.00. `prefers-reduced-motion` is respected.

---

*Sibling project: **NadaMart** (fake e-commerce, same idea) lives on the
`claude/dopamine-websites-6leago` branch.*
