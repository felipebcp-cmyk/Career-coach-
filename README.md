# NadaMart — Buy Nothing. Feel Everything. 🛍️

A parody of South Korea's viral **"dopamine sites"** — fake online stores (like
*FoodNeverComes*) that replicate the entire shopping ritual so you get the dopamine hit
of ordering **without spending a single won**. Dopamine is released in *anticipation* of
a reward, not on receiving it — so browsing, carting and checking out feels almost as
good as buying, at 100% off.

**Nothing is real here.** No inventory, no payment processing, no delivery. The only
thing that persists is your lifetime "money saved" counter, kept in your browser's
`localStorage`.

## The full ritual, faithfully faked

- **Browse** 16 extremely tempting products (Korean fried chicken, thocky keyboards,
  robot vacuums…) with discount badges, star ratings and thousands of reviews from
  *verified non-buyers*.
- **Quick view** any product for its blurb and five-star reviews of things that never
  shipped.
- **Cart** with quantity steppers, a running total, and a "free non-delivery" progress
  bar to chase.
- **Checkout** with a delivery address (it genuinely doesn't matter), payment methods
  (💳 NadaCard, 🪙 VibeCoin, 💸 cash on non-delivery) and an order summary where the
  dopamine discount takes the total to **$0.00 — always**.
- **Payment processing** theatre: *"Charging your card $0.00… Reserving nothing just
  for you…"*
- **Live courier tracking**: courier Kim rides a scooter across town in real time with
  an ETA countdown and a status timeline — order confirmed → packing → on the way →
  almost there → **delivered (nothing)**. Skippable, for the impatient.
- **Savings scoreboard**: every completed order adds to your lifetime *money saved*,
  *orders of nothing* and *items not received*.

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
`localStorage` key (`nadamart.v1`). Design leans into the 2026 "dopamine design"
aesthetic: saturated pinks/purples/yellows, chunky borders, hard shadows, confetti.
Honest by design — a permanent banner and footer state that nothing will ever arrive
and $0.00 will ever be charged. `prefers-reduced-motion` is respected.
