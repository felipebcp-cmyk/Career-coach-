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
  { id: "recover",  name: "Recover",  weeks: [1, 2, 3],
    tagline: "Rest and repair. No job hunting. Your only job is to refill the tank." },
  { id: "reflect",  name: "Reflect",  weeks: [4, 5, 6],
    tagline: "Understand what happened and what you actually want next." },
  { id: "rebuild",  name: "Rebuild",  weeks: [7, 8, 9],
    tagline: "Grow skills, reconnect with people, explore options with curiosity." },
  { id: "relaunch", name: "Relaunch", weeks: [10, 11, 12],
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

/* ---------- courses ---------- */
const COURSES = [
  {
    id: "humans", icon: "🧭", title: "Humans",
    tagline: "How people actually work — reading them, moving them, working with them.",
    intro: "Finance trained you to read spreadsheets. Every next chapter — business partnering, product, leadership, or a saner seat in finance — is decided by how well you read people. Fifteen short lessons, each with one idea and one same-day practice. Do them in order; each module builds on the last.",
    coach: "elena",
    coachNote: "The skills in this course were the actual job all along — the models were just the entry ticket. I learned that too late; you get to learn it on purpose.",
    modules: [
      { title: "Start with the human you live in", taughtBy: "maya",
        lessons: [
          { id: "h-manual", title: "Your operating manual",
            idea: "You can't read other people while you're illiterate about yourself. You have predictable patterns: hours when your judgment is sharp, situations that flood you, conditions that refill you. Burnout happened partly because nobody — including you — was reading your manual.",
            practice: "Write your one-page user manual: when I'm at my best · what drains me fast · what refills me · how I behave when I'm overloaded · how to tell me hard things. Show it to one person who knows you and ask what you got wrong." },
          { id: "h-feelings", title: "Feelings are data, not noise",
            idea: "Finance culture treats emotion as unprofessional, so you learned to override the signal. But naming a feeling precisely — 'that's dread, not tiredness' — measurably reduces its grip and tells you what it's about. Emotions are fast pattern-recognition; ignoring them is throwing away data.",
            practice: "Three times today, stop and name what you're feeling in one word — then add what it might be telling you. That's the whole exercise. Precision grows with reps." },
          { id: "h-story", title: "The story you add",
            idea: "Between what happened and what you felt sits a story you wrote without noticing. 'He didn't reply' is a fact; 'he thinks I'm irrelevant now' is authorship. Most interpersonal pain lives in the added story, and burnout brains write especially dark ones.",
            practice: "Catch one story today. Write two columns: what a camera would have recorded, and what you added. Then write one alternative story that fits the same facts." }
        ] },
      { title: "Listening — the rarest skill", taughtBy: "priya",
        lessons: [
          { id: "h-listen", title: "Listen to understand, not to reply",
            idea: "Most listening is waiting to talk while rehearsing your answer. Real listening means the other person's meaning — not your response — has your attention. People can feel the difference instantly, and they only tell the truth to the second kind of listener.",
            practice: "In one conversation today, don't compose your reply while they speak. When they finish, summarize their point until they say 'yes, exactly' — only then respond." },
          { id: "h-questions", title: "Questions that open people",
            idea: "Closed questions collect confirmations; open questions collect information. 'What' and 'how' open people up; 'why' often puts them on trial ('why did you do that?') and triggers defense. The quality of what you learn is set by the shape of what you ask.",
            practice: "Pick one conversation and ask only open questions for ten minutes — 'what was that like?', 'how did you decide?'. Notice how much arrives that you'd never have thought to ask for." },
          { id: "h-pause", title: "The pause",
            idea: "The most important thing in a conversation often shows up after the silence you didn't fill. People give the rehearsed answer first; the real one needs three seconds of room. Comfort with silence reads as confidence — discomfort with it reads as need.",
            practice: "Today, after someone answers a question, count three silent seconds before responding. Write down what arrived in the space that wouldn't have otherwise." }
        ] },
      { title: "Reading people", taughtBy: "marcus",
        lessons: [
          { id: "h-interests", title: "Positions vs. interests",
            idea: "What someone asks for is a position; why they want it is an interest — and one interest can be served by many positions. 'I need this by Friday' might mean 'I can't look unprepared in Monday's meeting.' Argue with positions and you get deadlock; work with interests and you get options.",
            practice: "Take one request someone made of you recently. List three different interests that could sit underneath it. Which is most likely — and what else would satisfy it?" },
          { id: "h-scarf", title: "The five social triggers",
            idea: "Most 'irrational' behavior at work is a threat response to one of five things: status, certainty, autonomy, relatedness, or fairness. The colleague who exploded over a small process change wasn't crazy — a trigger got hit. Learn the five and office behavior becomes legible.",
            practice: "Replay a meeting that turned tense in your old job. Which of the five was threatened, for whom? Now replay how it could've been said with the trigger protected." },
          { id: "h-room", title: "Read the room",
            idea: "Every meeting has two conversations: the agenda, and the current underneath — who defers to whom, who's checked out, what topic everyone is steering around. The people who seem politically gifted are mostly just watching the second conversation.",
            practice: "In your next group setting, say less on purpose for five minutes and only observe: who talks most, whose comments change the direction, who gets interrupted, what is conspicuously not being said." }
        ] },
      { title: "Influence without authority", taughtBy: "marcus",
        lessons: [
          { id: "h-trust", title: "The trust equation",
            idea: "Trust = (credibility + reliability + closeness) ÷ self-orientation. High-performers usually max the numerator and still aren't trusted, because the denominator — how much you seem to be in it for yourself — divides everything. Visible self-interest is the tax on every message you send.",
            practice: "Pick one working relationship you want stronger. Score yourself 1–10 on all four terms, honestly. Choose the weakest and do one concrete thing this week to move it." },
          { id: "h-currency", title: "Frame it in their currency",
            idea: "People don't act on your reasons; they act on theirs. Influence starts with translating your ask into what the other person already wants — their goals, their pressures, their scoreboard. This isn't manipulation; it's the courtesy of doing the translation work yourself.",
            practice: "Take an ask you need to make — an intro, feedback on your plan, a referral. Draft it twice: once in your interest language, once in theirs. Send the second." },
          { id: "h-stories", title: "Stories move, data justifies",
            idea: "Decisions are made emotionally and justified analytically — in that order. One concrete story about one specific customer outruns ten summary statistics, because a story is simulated experience and a statistic is homework. Your finance brain wants to lead with the number; lead with the story and let the number confirm it.",
            practice: "Take one point you'd normally argue with data. Build a 60-second story that carries it — a person, a moment, a consequence. Tell it out loud once." }
        ] },
      { title: "The hard conversations", taughtBy: "elena",
        lessons: [
          { id: "h-no", title: "No, said kindly, early",
            idea: "Every yes spends hours you don't get back, and your burnout was partly a boundary that failed a hundred small times. A clean no — warm, prompt, without a court filing of justifications — protects the relationship better than a resentful yes ever did. Over-explaining invites negotiation.",
            practice: "Decline one thing this week with two sentences: 'I can't take that on right now. Thanks for thinking of me.' Sit with the discomfort; notice the world not ending." },
          { id: "h-feedback", title: "Feedback that lands",
            idea: "Feedback fails when it's a character verdict ('you're careless'). It lands as situation, behavior, impact: when X happened, you did Y, and the effect was Z. Verdicts get defended against; observations get considered — because only one of them is arguable.",
            practice: "Write the SBI version of a piece of feedback you never gave at your old job. You don't have to send it — the rep is learning what it feels like to say it cleanly." },
          { id: "h-disagree", title: "Disagree without the duel",
            idea: "Disagreement goes wrong when it becomes about winning. It goes right when you name the shared goal first ('we both want this launch to work'), aim at the idea rather than the person, and get curious before you get loud — 'help me understand how this handles X' beats 'that won't work.'",
            practice: "Rehearse out loud, once: disagreeing with someone senior using the sequence shared goal → genuine question → your concern. You'll need this exact muscle in every job you'll ever love." }
        ] }
    ] },
  {
    id: "fbp", icon: "🤝", title: "Finance Business Partnering",
    tagline: "From producer of numbers to shaper of decisions.",
    intro: "The most natural adjacent move for your background — finance work where the deliverable is a better decision, not a bigger deck. Fifteen lessons on the role, the business fluency, the insight craft, the relationships, and how to land the seat. Pairs with the Compass 'adjacent move' path and the Skills tab.",
    coach: "marcus",
    coachNote: "Business partnering is what banking looks like when the client is down the hall and the relationship lasts years, not deals. Your rigor is the entry ticket — this course is about the other half of the job.",
    modules: [
      { title: "The role, demystified", taughtBy: "marcus",
        lessons: [
          { id: "f-role", title: "What a business partner actually does",
            idea: "Reporting explains what happened; partnering changes what happens next. A finance business partner sits inside a business unit as translator between the numbers and the decisions — challenging plans, shaping trade-offs, being the commercial conscience in the room. The test of the job: are you invited when the decision is being made, or only asked to explain it afterwards?",
            practice: "Write one sentence for each: what a financial accountant, an FP&A analyst, and a business partner would each do with the same monthly result. If the three sentences sound the same, reread this lesson." },
          { id: "f-edge", title: "Your banking edge — and what to unlearn",
            idea: "You arrive with rare assets: modeling speed, comfort under pressure, and you've watched how capital judges companies from outside. What must be unlearned: the deck is not the deliverable (the relationship is), intensity is not the operating mode (this is a marathon), and being right is worth nothing if nobody in the room feels heard.",
            practice: "Two columns: 'transfers' and 'unlearn'. Fill each with at least four items from your own last role — specific behaviors, not qualities. Keep it; it becomes interview material later." },
          { id: "f-rhythm", title: "The rhythm of the job",
            idea: "The role runs on a calendar: month-end close, rolling forecast, budget season, monthly business reviews. But the real work happens between the ceremonies — the corridor question that reshapes a plan before it's submitted, the early warning passed on before it's a surprise. The calendar is the skeleton; the relationships are the muscle.",
            practice: "Sketch the annual rhythm of an FP&A/partnering team from memory, then check it against a real job posting for a finance business partner. Note what surprised you." }
        ] },
      { title: "Know the business cold", taughtBy: "sam",
        lessons: [
          { id: "f-model", title: "The business model on one page",
            idea: "Partners earn their seat by understanding how the business actually makes money — who pays, for what, at what price, with what cost structure, and where the margin concentrates. Most people inside a company can't draw this. The one who can becomes the person others check their thinking with.",
            practice: "Pick a company you know well and draw its money map on one page: customer segments, what they buy, pricing logic, biggest cost blocks, where profit concentrates. Ten boxes maximum." },
          { id: "f-floor", title: "Walk the floor",
            idea: "Credibility with operators is earned in their territory, not yours. Sit with sales calls, watch the warehouse, shadow support. Ask 'what makes your job hard?' and the floor will hand you insight no ledger contains — and, more valuable still, it will remember that you asked.",
            practice: "Interview one person who works in a function you've never worked in — any company, any friend. One question: 'what makes your job harder than it should be?' Just listen and take notes." },
          { id: "f-drivers", title: "KPI trees — link the P&L to levers",
            idea: "A P&L line is an outcome; nobody can manage an outcome. A driver tree decomposes it into levers people actually pull: revenue = leads × conversion × average deal × retention. Speak in drivers and operators recognize their own steering wheel in your numbers — that's the moment finance stops being 'them'.",
            practice: "Take one revenue line of any business you understand and decompose it into 4–6 operational drivers. For each driver: who in the org actually owns it?" }
        ] },
      { title: "From numbers to decisions", taughtBy: "sam",
        lessons: [
          { id: "f-sowhat", title: "So what, now what",
            idea: "Every analysis must end with two sentences: what this means ('so what') and what we should do ('now what'). If either is missing, you've produced reporting and outsourced the thinking to your reader. The discipline feels presumptuous at first — recommending is exposure — but recommendation is precisely what the role is paid for.",
            practice: "Find any chart — news article, old deck, anything. Write the three-sentence version: finding, so what, now what. Repeat daily until it's a reflex." },
          { id: "f-datastory", title: "Storytelling with data",
            idea: "Lead with the headline, not the buildup: the title of every exhibit should be the message ('EU margin is funding US growth'), not the topic ('EU margin analysis'). One message per chart. The 40-tab appendix instinct from banking is a comfort blanket — a partner's power move is the single page that ends the debate.",
            practice: "Take any 10-slide argument (yours or found) and compress it to 3 slides with message titles. Notice what you cut — and that nobody would miss it." },
          { id: "f-forecast", title: "Forecasts people trust",
            idea: "A trusted forecast is drivers-based, states its assumptions out loud, and gives a range with honest confidence — not a single point defended to the death. Sandbagging buys one comfortable quarter and costs your credibility compounding forever after. You are the one person in the room paid to be unpopularly realistic.",
            practice: "Forecast something small in your own life for next week — spending, applications sent, skill hours. Write the assumptions. Next Sunday, compare and write one line on why you missed." }
        ] },
      { title: "The partnering craft", taughtBy: "elena",
        lessons: [
          { id: "f-stakeholders", title: "Map your stakeholders",
            idea: "Every business unit has a real org chart that isn't the drawn one: who decides, who influences the decider, who can quietly block. Partners map this deliberately and invest ahead of need — the relationship you'll depend on in budget season is built in the quiet months before it.",
            practice: "Draw a 2×2 — influence vs. current attitude toward you — for any group you've worked with. Who's high-influence and lukewarm? That quadrant is always where the work is." },
          { id: "f-friend", title: "Critical friend, not police",
            idea: "The job holds a tension: challenge the business AND stay on its side. Tip into cop and you'll get compliance, polished surfaces, and the truth hidden from you until it explodes. The critical friend hears bad news early because saying 'this worries me — let's fix it before it goes up the chain' proved safe last time.",
            practice: "Script four sentences challenging a weak business case without damaging the relationship: name the shared goal, name the concern with numbers, ask a genuine question, offer to work it together." },
          { id: "f-badnews", title: "Bad news, early and straight",
            idea: "Anyone can present a beat; reputations are made in the miss quarters. The formula is fact, driver, plan — 'we'll miss Q3 by 8%; two enterprise deals slipped; here are three actions and what I need from you' — delivered early, without spin. Surprise, not bad news, is what destroys trust.",
            practice: "Rehearse a miss out loud in three sentences: fact, driver, plan. Time it — under 30 seconds. This rehearsal is the difference between composure and flailing when it's real." }
        ] },
      { title: "Getting the seat", taughtBy: "marcus",
        lessons: [
          { id: "f-position", title: "Position the story",
            idea: "Banking-to-partnering is a strength narrative when you frame it as choice: 'I've spent years judging companies from the outside; I want to build value inside one, closer to the decisions.' Paired with your rehearsed break story, it reads as direction, not retreat. Never apologize for the pivot — you're bringing the outside view in.",
            practice: "Write your two-sentence positioning and say it with your break story, out loud, until the seam between them disappears. Save both in Launch." },
          { id: "f-tools", title: "Close the tool gap",
            idea: "Your Excel is elite; the gaps are usually SQL (pull your own data), one BI tool (Power BI or Tableau), and familiarity with a planning platform (Anaplan, Adaptive, Pigment). Six focused weeks closes enough of the gap to be credible — the judgment they can't teach, you already have.",
            practice: "Add 'Data & analytics' as a bet in the Skills tab with a weekly hour target. First milestone: one small analysis on real data, done end-to-end in SQL + a BI tool." },
          { id: "f-interview", title: "The interview reps",
            idea: "Expect a case: 'margin dropped 300bps — walk me through how you'd investigate.' The winning shape is a driver tree out loud, questions before answers, then one clear recommendation with a stated assumption. They're not testing the math — they're testing whether you think in levers and commit to a view.",
            practice: "Build two STAR stories in Launch where your analysis changed a decision — the exact evidence this role interviews for. Then practice the margin case above, out loud, in under four minutes." }
        ] }
    ] }
];
