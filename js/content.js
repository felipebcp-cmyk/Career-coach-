/* Rekindle — coaching content. All copy lives here so the coaching voice
   can evolve without touching app logic. */

const COUNCIL = [
  {
    id: "maya", name: "Dr. Maya Chen", avatar: "🧠",
    role: "Burnout & recovery psychologist",
    philosophy: "Burnout is an injury, not a weakness. You don't sprint on a broken leg — you heal it, then you retrain it.",
    tips: [
      "Rest is not a reward you earn after productivity. Right now, rest IS the productivity.",
      "Notice guilt when you relax? That guilt is a burnout symptom, not a signal you should work.",
      "Sleep, daylight, movement, people. Those four rebuild your nervous system faster than any course.",
      "You are allowed to be a person who is 'between things'. That is a real, legitimate place to be.",
      "If the thought of your old job makes your chest tighten, that's information — write it down, don't argue with it."
    ]
  },
  {
    id: "marcus", name: "Marcus Reid", avatar: "🧭",
    role: "Executive career coach, ex-investment banker",
    philosophy: "Most people chose their first career at 21 with someone else's criteria. The second one you get to choose yourself.",
    tips: [
      "Before you look for the next job, interrogate why you took the last one. Repeat causes repeat outcomes.",
      "Ask: did finance drain you, or did THAT desk, THAT boss, THAT culture drain you? The answers lead to very different moves.",
      "Your network isn't for asking for jobs — it's for asking questions. Curiosity opens more doors than need.",
      "Score your options on paper. The gut lies when it's tired; a weighted scorecard doesn't.",
      "A career gap explained with a plan reads as strength: 'I took a deliberate break, rebuilt, and retrained in X.'"
    ]
  },
  {
    id: "priya", name: "Dr. Priya Nair", avatar: "🔬",
    role: "Behavioral scientist — habits & discipline",
    philosophy: "Discipline isn't a personality trait. It's an environment plus tiny repeated wins, compounding.",
    tips: [
      "Make the habit so small it's embarrassing to skip. Two minutes counts. Streaks build identity.",
      "Don't break the chain — but if you do, the rule is: never miss twice.",
      "Attach new habits to existing anchors: after coffee → 10 minutes of journaling.",
      "Log three wins every night. Your brain has a negativity bias; the log is the correction.",
      "Motivation follows action, not the other way around. Start badly, start tiny, but start."
    ]
  },
  {
    id: "sam", name: "Sam Okafor", avatar: "🛠️",
    role: "Product strategist",
    philosophy: "Your recovery is a product with one user: you. Ship small, iterate weekly, measure energy — not output.",
    tips: [
      "Run your week in sprints: one focus, three priorities, Friday retro. Everything else is backlog.",
      "Energy is your north-star metric right now. Track it daily; decide with the trend, not with one bad day.",
      "Time-box the job hunt when it starts: two focused hours beat eight anxious ones.",
      "Treat rejections as data points, not verdicts. Iterate the pitch, not your self-worth.",
      "Review your weekly plan every Sunday for 15 minutes. Consistency of review beats intensity of planning."
    ]
  },
  {
    id: "elena", name: "Elena Vasquez", avatar: "🌱",
    role: "Left finance after burnout — been exactly where you are",
    philosophy: "I thought quitting made me a failure. It turned out to be the first decision I ever made entirely for myself.",
    tips: [
      "Your job title was never your identity. It was a costume. You're still fully you without it.",
      "The prestige trap is real: notice when 'what will people think' is doing the deciding.",
      "Keep an evidence bank of everything you've achieved. Read it before every interview and every doubt spiral.",
      "The skills that made you good in finance — rigor, pressure, numbers, judgment — travel anywhere you go.",
      "One day you'll describe this period as the best thing that happened to your career. I do."
    ]
  }
];

/* ---------- 12-week program ---------- */
const PHASES = [
  { id: "recover",  name: "Recover",  weeks: [1, 2, 3],    color: "recover",
    tagline: "Rest and repair. No job hunting. Your only job is to refill the tank." },
  { id: "reflect",  name: "Reflect",  weeks: [4, 5, 6],    color: "reflect",
    tagline: "Understand what happened and what you actually want next." },
  { id: "rebuild",  name: "Rebuild",  weeks: [7, 8, 9],    color: "rebuild",
    tagline: "Grow skills, reconnect with people, explore options with curiosity." },
  { id: "relaunch", name: "Relaunch", weeks: [10, 11, 12], color: "relaunch",
    tagline: "Targeted search, sharp story, sustainable pace. Land the right role, not just a role." }
];

const PROGRAM = [
  { week: 1, phase: "recover", focus: "Full stop",
    tasks: ["Sleep without an alarm at least 3 days", "Tell 2–3 close people you're taking a deliberate break", "Remove work email/Slack from your phone", "Do the daily check-in each evening"] },
  { week: 2, phase: "recover", focus: "Body first",
    tasks: ["Walk outside 20+ minutes daily", "Rediscover one activity you loved before the job ate your life", "Book any doctor/dentist visits you postponed", "Keep the check-in streak going"] },
  { week: 3, phase: "recover", focus: "Quiet mind",
    tasks: ["One full day with no screens before noon", "Notice energy: what refills you, what drains you — jot it down", "Have one unhurried meal with someone you like", "Log 3 wins every evening (they can be tiny)"] },
  { week: 4, phase: "reflect", focus: "The autopsy",
    tasks: ["Complete the 'Burnout Autopsy' journey in Reflect", "List the last 3 months' biggest stressors — circle which were the job vs. the industry vs. you", "Start the evidence bank with 5 career accomplishments"] },
  { week: 5, phase: "reflect", focus: "Why finance, really?",
    tasks: ["Complete the 'Why Finance in the First Place?' journey", "Call one person who knew you before finance — ask what they saw in you then", "Write the 'keep / discard' list: what finance gave you worth keeping, what it cost you"] },
  { week: 6, phase: "reflect", focus: "What you want now",
    tasks: ["Complete the 'Values Discovery' journey", "Draft your definition of success in one paragraph — money, time, meaning, people", "Write your identity statement in Confidence"] },
  { week: 7, phase: "rebuild", focus: "Choose your skill bets",
    tasks: ["Pick 1–2 skill tracks in Skills and set weekly hour targets", "Set up your learning routine: same time, same place, small sessions", "Read the four career paths in Compass — note which two pull at you"] },
  { week: 8, phase: "rebuild", focus: "People, gently",
    tasks: ["Two curiosity coffees — people in roles you're curious about (ask questions, don't ask for jobs)", "Join one community/meetup in a field you're exploring", "Log skill sessions — protect the streak"] },
  { week: 9, phase: "rebuild", focus: "Shape the options",
    tasks: ["Add 3–5 concrete options to the Compass scorecard and score them honestly", "Update resume/LinkedIn with a one-line framing of the break", "Draft your break story out loud: deliberate pause → rebuilt → retrained → ready"] },
  { week: 10, phase: "relaunch", focus: "Aim",
    tasks: ["Commit to your top-scored direction (review with the scorecard)", "Build a target list of 15–20 companies/teams that fit your values list", "Rewrite resume for the chosen direction, lead with transferable proof"] },
  { week: 11, phase: "relaunch", focus: "Fire",
    tasks: ["Send 5 quality applications or warm intros (quality > volume)", "Practice interview stories: 5 STAR stories from your evidence bank", "Time-box the search: 2 focused hours a day, then close the laptop"] },
  { week: 12, phase: "relaunch", focus: "Sustain",
    tasks: ["Weekly retro: what's working in the search, iterate the pitch", "Rehearse salary/role boundaries: what you will and won't accept this time", "Write your burnout early-warning list — the signals you'll never ignore again"] }
];

/* ---------- guided reflection journeys ---------- */
const JOURNEYS = [
  {
    id: "whyFinance",
    title: "Why Finance in the First Place?",
    icon: "💭",
    blurb: "Before choosing what's next, understand what chose finance for you. Most first careers are picked with borrowed criteria — this journey finds out whose criteria you used.",
    insight: "Look at your answers to 1, 2 and 5 together. If the pull was mostly prestige, money-as-safety, or someone else's voice — the burnout may have been a values conflict from day one, and the fix is a direction change, not just a rest. If parts of the craft genuinely absorbed you (Q3), the fix may be the same craft in a saner environment.",
    questions: [
      { q: "Go back to the moment you chose finance. What was the strongest pull?", hint: "Prestige? Money? Family expectation? A mentor? Genuine fascination? 'The smart, safe choice'? Be brutally honest — nobody sees this but you." },
      { q: "Whose voice was loudest in that decision — yours, or someone else's?", hint: "Parents, professors, peers, an imagined future self? What would 21-year-old you say if asked 'who are you trying to impress?'" },
      { q: "Which parts of the work genuinely absorbed you — where time flew?", hint: "Modeling? Markets? Deals? Clients? Solving the puzzle? These are clues to what you keep." },
      { q: "Which parts did you dread, even before the burnout?", hint: "The hours? The politics? The pointlessness of some deliverables? The culture? Dread that predates burnout is structural, not circumstantial." },
      { q: "If finance carried zero status and paid an average salary, would you still choose it?", hint: "This question separates love of the craft from love of what the craft signals." },
      { q: "What did finance actually give you that you want to keep?", hint: "Analytical rigor, comfort with pressure, financial literacy, a network, capital, credibility — name your assets. You take these with you anywhere." },
      { q: "What did it cost you that you're no longer willing to pay?", hint: "Health, relationships, sleep, evenings, sense of self? Name the price so you can refuse it next time." },
      { q: "Complete this sentence: 'I originally chose finance because ____. What I actually want now is ____.'", hint: "Don't overthink it. Your first draft is usually the truest one." }
    ]
  },
  {
    id: "burnoutAutopsy",
    title: "Burnout Autopsy",
    icon: "🔍",
    blurb: "Research says burnout comes from six mismatches between a person and a job: workload, control, reward, community, fairness, values. Find YOUR mismatch so the next role doesn't repeat it.",
    insight: "Whichever questions were easiest to answer at length — that's your primary mismatch. If it was workload/control, a similar role with saner structure could work. If it was values or fairness, changing firms won't fix it; changing direction might.",
    questions: [
      { q: "Workload: what did a typical week actually look like, in hours and intensity? Was recovery ever possible?", hint: "Burnout isn't caused by hard work alone — it's hard work without recovery." },
      { q: "Control: how much say did you have over what you worked on, when, and how?", hint: "Micromanagement, shifting priorities, no autonomy — lack of control burns people faster than long hours." },
      { q: "Reward: were you recognized — in money, credit, or growth — proportionally to what you gave?", hint: "Effort without recognition breeds cynicism, the core of burnout." },
      { q: "Community: did you have real allies at work, or were you performing alongside competitors?", hint: "Isolation and toxic teams are accelerants." },
      { q: "Fairness: were promotions, credit and treatment fair? Did you trust leadership?", hint: "Perceived unfairness is one of the strongest burnout predictors." },
      { q: "Values: did the work itself feel meaningful — or did you have to keep convincing yourself it mattered?", hint: "A values gap can make even a comfortable job unbearable." },
      { q: "Verdict: which ONE mismatch was biggest? Would a different firm fix it — or only a different path?", hint: "This single answer shapes your entire Compass." }
    ]
  },
  {
    id: "values",
    title: "Values Discovery",
    icon: "⭐",
    blurb: "You can't aim at what you haven't defined. This journey drafts YOUR definition of success — not your industry's, not your family's.",
    insight: "Read your answers to 1 and 6 side by side. The next role should score high on what showed up in your peak moments — those are your real values, revealed by experience rather than declared.",
    questions: [
      { q: "Describe 2–3 peak moments of your life or career — times you felt fully alive, proud, absorbed.", hint: "Any domain counts: work, sport, travel, helping someone. What were you doing? Who was there?" },
      { q: "What do those moments have in common?", hint: "Building something? Winning? Helping? Learning? Being trusted? Autonomy? Look for the repeated ingredient." },
      { q: "What does 'enough' look like — money, house, lifestyle? A number, not a feeling.", hint: "Ambition without a definition of 'enough' is a treadmill. Finance especially never defines it for you." },
      { q: "Imagine an ordinary Tuesday five years from now that you'd call a good life. Walk through it, morning to night.", hint: "Where do you wake up? What's the work? Who do you see? When does the laptop close?" },
      { q: "What would you keep doing even if you could never tell anyone about it?", hint: "This filters out prestige-driven wants from real ones." },
      { q: "Pick your top 5 values from moments above (e.g., autonomy, mastery, security, impact, creativity, family, health, adventure, status, wealth).", hint: "Rank them. The rank matters more than the list — everyone wants all ten." }
    ]
  }
];

/* ---------- career paths (Compass) ---------- */
const PATHS = [
  {
    id: "betterTable", icon: "♟️", title: "Same game, better table",
    fits: "Fits if: the Burnout Autopsy pointed at workload, a boss, or one firm's culture — and parts of the craft still absorb you.",
    upside: "Fastest path back to income and seniority. Your track record fully transfers. Many find the same work humane at a boutique, in asset management vs. banking, or buy-side vs. sell-side.",
    watchOut: "If your mismatch was values or fairness, a nicer desk in the same game re-runs the experiment with the same result. Interrogate the culture ruthlessly before signing.",
    firstSteps: ["List 3 firms known for saner culture in your niche", "Ask 2 ex-colleagues who moved: 'what's actually different there?'", "Define your non-negotiables (hours, autonomy, team) before any interview"]
  },
  {
    id: "adjacent", icon: "🌉", title: "The adjacent move",
    fits: "Fits if: you like the domain but not the front-office pressure. Fintech, corporate finance/strategy, treasury, investor relations, family offices, financial data companies.",
    upside: "Keeps 80% of your expertise valuable while typically trading some comp for dramatically better hours and culture. Very explainable career story.",
    watchOut: "Comp reset can sting at first — do the math on what 'enough' means (Values journey, Q3). Some corp-finance roles can be slow; ask about scope in interviews.",
    firstSteps: ["Map 10 adjacent roles your skills already qualify for", "Coffee with 2 people who made this exact jump", "Learn the one tool gap the new context expects (e.g., FP&A stack, SQL)"]
  },
  {
    id: "leverage", icon: "🚀", title: "The leverage pivot",
    fits: "Fits if: you love the analytical craft more than the finance content. Data analytics, strategy consulting, business operations, product roles in fintech — your rigor is the product.",
    upside: "Analytical, pressure-tested, numbers-fluent people are wanted everywhere. A 3–6 month skill sprint (SQL, Python, BI tools) makes the bridge credible.",
    watchOut: "You'll interview against specialists — your edge is business judgment plus numbers, so lead with that story. Expect to prove yourself with projects, not pedigree.",
    firstSteps: ["Pick the bridge skill and set a weekly hour target in Skills", "Build one small public project using real data you understand (markets!)", "Rewrite your resume translating finance wins into the new field's language"]
  },
  {
    id: "reinvention", icon: "🦋", title: "The reinvention",
    fits: "Fits if: the Values journey showed a deep mismatch — the whole game, not the table, was wrong. Teaching, starting a business, a craft, a mission-driven sector.",
    upside: "The only path that fully resolves a values conflict. People who make it describe it as getting their life back. Your finance savings and financial literacy are the runway most career-changers wish they had.",
    watchOut: "Longest runway, biggest identity shift. Plan finances for 12–18 months honestly. Test with small experiments (volunteer, freelance, night course) before burning ships.",
    firstSteps: ["Calculate your real runway: savings ÷ monthly burn", "Design one cheap 2-week experiment in the target field", "Talk to 3 people living that life — ask about the worst parts, not the best"]
  }
];

/* ---------- scorecard criteria ---------- */
const CRITERIA = [
  { id: "energy", label: "Energy fit", weight: 30, hint: "Would the day-to-day work refill or drain you?" },
  { id: "values", label: "Values fit", weight: 25, hint: "Does it match your top-5 values from the Values journey?" },
  { id: "skills", label: "Skills transfer", weight: 20, hint: "How much of your existing ability carries over?" },
  { id: "market", label: "Market demand", weight: 15, hint: "Are people actually hiring for this, at your level?" },
  { id: "money", label: "Financial fit", weight: 10, hint: "Does it clear your 'enough' number (not your old number)?" }
];

/* ---------- skill tracks ---------- */
const SKILL_TRACKS = [
  { name: "Data & analytics", detail: "SQL → Python (pandas) → a BI tool. The highest-leverage bridge out of finance; your Excel brain is 60% of the way there." },
  { name: "Storytelling & communication", detail: "Writing, presenting, executive summaries. The skill that multiplies every other one — and interviews are storytelling." },
  { name: "Modern finance toolkit", detail: "Sharpen valuation, FP&A stack, financial modeling — if you're staying in the game, be current and fast." },
  { name: "Product & strategy", detail: "Product thinking, market sizing, user research basics. Opens fintech and startup doors." },
  { name: "AI literacy", detail: "Working fluently with AI tools for analysis, writing, and coding. Table stakes in every 2026 role — and a differentiator when paired with finance judgment." },
  { name: "Leadership & management", detail: "Delegation, feedback, coaching. If your next chapter is leading teams rather than grinding models." }
];

/* ---------- habit templates per phase ---------- */
const HABIT_TEMPLATES = {
  recover: [
    "In bed by 11pm", "20-minute walk outside", "No job boards or LinkedIn today",
    "One thing purely for joy", "Screens off 1h before bed", "Evening check-in + 3 wins"
  ],
  reflect: [
    "10 minutes of journaling", "3 wins logged tonight", "30 minutes of movement",
    "One reflection question answered", "Reach out to one friend", "Evening check-in"
  ],
  rebuild: [
    "45-minute skill session", "One outreach or coffee-chat message", "Read one industry article",
    "Improve one resume bullet", "30 minutes of movement", "Evening check-in + 3 wins"
  ],
  relaunch: [
    "2 focused job-hunt hours (then stop)", "One quality application or warm intro",
    "20 minutes interview practice", "Follow-ups sent", "30 minutes of movement", "Evening check-in + 3 wins"
  ]
};

/* ---------- cognitive distortions for the reframe tool ---------- */
const DISTORTIONS = [
  { name: "All-or-nothing", example: "\"If I'm not in finance, I'm nothing.\"" },
  { name: "Catastrophizing", example: "\"I'll never find a good job again.\"" },
  { name: "Discounting positives", example: "\"Anyone could have done what I did there.\"" },
  { name: "Mind reading", example: "\"Everyone thinks I couldn't hack it.\"" },
  { name: "Labeling", example: "\"I'm a quitter.\"" },
  { name: "Should statements", example: "\"I should be over this by now.\"" }
];

/* ---------- launch toolkit ---------- */
const APP_STATUSES = ["Saved", "Applied", "Interviewing", "Offer", "Closed"];

const STAR_FIELDS = [
  { id: "situation", label: "Situation", hint: "Set the scene in one or two sentences. Where, when, what was at stake?" },
  { id: "task", label: "Task", hint: "What were YOU responsible for? Not the team — you." },
  { id: "action", label: "Action", hint: "The 2–3 concrete things you did. Verbs, decisions, trade-offs." },
  { id: "result", label: "Result", hint: "The outcome, with a number if you have one. Then one sentence on what it says about you." }
];

const STORY_PROMPTS = [
  "A time you performed under real pressure",
  "A time you caught an error nobody else saw",
  "A time you influenced someone senior to change course",
  "A time you delivered with incomplete information",
  "A time you failed, and what you changed after",
  "A time you led without authority"
];

const BREAK_STORY_GUIDE = "Say it in three beats, with a straight back: (1) “I took a deliberate break after an intense run in finance.” (2) “I used it to rebuild and retrain — [your skill bets].” (3) “I'm now targeting [direction] because [one values-based reason].” No apology, no over-explaining. Rehearse it out loud until it's boring to you.";

/* ---------- daily coach notes, keyed by phase ---------- */
const PHASE_NOTES = {
  recover: [
    ["maya", "This week your only KPI is rest. If you did nothing 'productive' today and your energy ticked up — that was a productive day."],
    ["elena", "The urge to immediately fix your career is the burnout talking. The career conversation goes better in a few weeks, I promise."],
    ["maya", "Guilt about resting is a symptom, not a signal. Log it as a win every time you rest anyway."],
    ["priya", "Just do the tiny check-in tonight. Two minutes. The streak you're building is the foundation for everything later."]
  ],
  reflect: [
    ["marcus", "This phase decides everything. Answer the 'Why Finance?' questions honestly — the next move hides in those answers."],
    ["elena", "When I did this reflection, I discovered I'd chosen finance for my father. Whose choice was yours? No judgment — just truth."],
    ["maya", "Reflection can stir up hard feelings. That's the wound draining, not reopening. Keep the walks and the sleep going."],
    ["priya", "Anchor the journaling to something you already do daily. After morning coffee is the classic for a reason."]
  ],
  rebuild: [
    ["priya", "Small skill sessions, done daily, beat weekend marathons. Protect the streak — it's building your professional identity back."],
    ["marcus", "Curiosity coffees, not job begging. Ask people what they love and hate about their work. Doors open on their own."],
    ["sam", "Pick ONE skill bet and go deep. Three shallow bets signal panic; one deep bet signals direction."],
    ["elena", "Notice how it feels to learn again without a performance review hanging over you? Hold onto that feeling — it's a compass."]
  ],
  relaunch: [
    ["sam", "Two focused hours on the hunt, then close the laptop and live. Sustainable pace is the whole point of this restart."],
    ["marcus", "Your break story, said with a straight back: 'I took a deliberate pause, rebuilt, retrained. Here's what I bring.' Rehearse it."],
    ["elena", "Read your evidence bank before every interview. You're not asking for charity — you're offering proven ability."],
    ["maya", "Watch your early-warning signs during the search. If the old chest-tightening comes back with a company, that's your answer about them."]
  ]
};
