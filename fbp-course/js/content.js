/* Course content — The Finance Business Partner's Playbook.
   An original seven-week executive course on finance business partnering:
   mindset, insight, communication, influence, strategy and advisership.

   Lesson anatomy: sections (core teaching) → example (worked mini-case) →
   mistakes (where this goes wrong) → exercise (apply it today) →
   takeaways → sources (where this comes from / further reading).
   Each module also ships downloadable tools (markdown templates). */

const COURSE = {
  title: "The Finance Business Partner's Playbook",
  passMark: 0.8,
  modules: [

    /* ================= MODULE 1 ================= */
    {
      id: "m1",
      title: "Foundations: Thinking Like a Partner",
      weeks: "Weeks 1–2",
      intro:
        "What a finance business partner actually does, the mindset shift from " +
        "scorekeeper to strategist, how to understand the business and its " +
        "stakeholders well enough to add value beyond the numbers — and how to " +
        "redesign your own working week so partnering actually fits in it.",
      lessons: [
        {
          id: "m1l1",
          title: "What is a finance business partner?",
          minutes: 15,
          sections: [
            {
              h: "From scorekeeper to strategist",
              p: `Traditional finance roles look backwards: close the books, report what happened, explain variances. A finance business partner looks forwards: they sit alongside operational leaders and use financial insight to shape decisions before they're made. Think of a continuum — scorekeeper → commentator → advisor → strategist. The scorekeeper produces accurate history. The commentator adds narrative to that history. The advisor is consulted before choices are made. The strategist helps decide which choices are on the table at all. Most finance teams live at the left end of this line not because they lack ability, but because nobody ever redefined the job. Business partnering is the deliberate, visible move to the right — and it changes what you produce, who you talk to, and what you get measured on.`
            },
            {
              h: "The value proposition of finance",
              p: `Finance sees the whole organisation in one language: money. No other function has that vantage point. Marketing sees campaigns, operations sees throughput, HR sees people — finance sees how all of it converts into value, and where value quietly leaks between the silos. A business partner's job is to bring that whole-of-business view into the room where decisions happen, and to say clearly what the numbers mean for the choice at hand. This is why the role exists at all: executives don't lack data — they drown in it. What they lack is someone who can compress the organisation's complexity into "here is the decision, here is what the numbers say about it, and here is what I would do." That compression is the product. Everything in this course is a technique for manufacturing it.`
            },
            {
              h: "What it looks like in practice",
              list: [
                "You're invited to the planning meeting, not just sent the minutes.",
                "Your monthly commentary answers 'so what should we do?' — not just 'what moved?'",
                "Operational leaders call you before a decision, not after something breaks.",
                "You challenge assumptions respectfully — and get thanked for it.",
                "Your forecasts shape resource allocation rather than merely recording it.",
                "When a big decision goes to the board, your one-pager is in the pack — and your name is on it."
              ]
            },
            {
              h: "What it is not",
              p: `Business partnering is not saying yes to everything the business wants, and it is not abandoning control and stewardship. The best partners hold the tension: commercially supportive and independently minded. If you lose your objectivity you're a cheerleader; if you only police the rules you're back to scorekeeping. Trusted advisor sits in between — close enough to be told the truth, independent enough to tell it back. Nor is partnering a personality transplant: introverts make superb partners, because the core skills are diagnosis, preparation and judgment, not charisma. Finally, it is not a bolt-on to an unchanged workload. Partnering consumes hours, and Lesson 1.5 deals with where those hours come from — because "do all the reporting AND be strategic" is how the transition fails.`
            }
          ],
          example: {
            title: "Two analysts, one seat at the table",
            body: [
              `Same company, same month, same numbers. Analyst A ships the pack on time: forty pages, every variance over $50k explained, two decimal places throughout. Her covering email says "Please find attached the September results." Analyst B sends the same pack — plus five lines at the top: "September headline: we beat budget by 3%, but all of it came from the price rise sticking better than planned; volumes are down 2% for the third straight month, concentrated in the two accounts our top competitor is targeting. If the volume trend holds, Q4 misses by ~$400k. I'd like 20 minutes at Monday's leadership meeting to walk through two options on pricing response. — B"`,
              `Six months later the divisional GM was asked which finance person should join the annual strategy offsite. There was no deliberation. Analyst B hadn't produced better numbers — the pack was identical. She had converted the same numbers into a decision that needed making, attached a point of view, and asked for the room. That is the entire difference between the left and right ends of the continuum, executed in five lines. Notice also what B risked: a forecast that could be wrong, an opinion that could be challenged. Partnering has a cost of admission — visible judgment — and the pack-shippers never pay it, which is why they stay pack-shippers.`
            ]
          },
          mistakes: [
            "Waiting to be invited. The invitation follows the behaviour; it never precedes it.",
            "Equating partnering with more detail. Executives want less volume and more judgment — the 40-page pack is the problem, not the credential.",
            "Announcing the change ('I'd like to be more strategic') instead of demonstrating it in the next thing you send.",
            "Abandoning stewardship to be liked. A partner who stops challenging becomes furniture within a quarter.",
            "Trying to partner with everyone at once. Pick the one or two decisions and decision-makers where finance can visibly matter this quarter."
          ],
          exercise: {
            minutes: 10,
            prompt: `Take the last report, pack or analysis you sent. Write the five lines Analyst B would have put on top of it: headline, the one trend that matters, the quantified 'if this holds', and a specific request for a conversation. You don't have to send it — yet. But notice how much you already know that the pack didn't say.`
          },
          takeaways: [
            "Business partnering means shaping decisions before they're made, not reporting on them after.",
            "Finance's unique asset is the whole-of-business view expressed in one common language — and the product is compression into a decision.",
            "Hold the tension between commercial support and independent challenge.",
            "The seat at the table is taken by demonstrated judgment, never granted by request."
          ],
          sources: [
            { name: "Maister, Green & Galford — The Trusted Advisor", note: "the definitive treatment of what separates advisors who are consulted from experts who are merely used; its trust framework anchors Lesson 1.4." },
            { name: "CGMA Competency Framework (AICPA & CIMA)", note: "the professional bodies' own map of business-partnering skills — useful for benchmarking where you sit on the scorekeeper→strategist continuum." }
          ]
        },
        {
          id: "m1l2",
          title: "The business partner mindset",
          minutes: 15,
          sections: [
            {
              h: "Curiosity before calculation",
              p: `The defining habit of a good business partner is curiosity about the business itself. Before you open the model, ask: how does this unit actually make money? What keeps its leader awake at night? What would "great" look like for them this quarter? Numbers only become insight when they're connected to something the business cares about. This sounds soft; it is ruthlessly practical. The analyst who knows that the ops director is being beaten up about late deliveries reads the same cost report differently — the overtime line stops being a variance to explain and becomes evidence in a story about a capacity decision. Curiosity is also the cheapest differentiator available to you, because almost nobody in finance spends even one hour a month inside the operations they report on.`
            },
            {
              h: "Own the outcome, not just the report",
              p: `Scorekeepers deliver reports; partners deliver outcomes. If your analysis was accurate but nobody acted on it, a partner treats that as a failure worth diagnosing: was the message unclear, too late, aimed at the wrong person, missing a recommendation? Taking ownership of whether insight lands is the mindset shift that changes everything else, because it converts every ignored report from an injustice into a lesson. The uncomfortable arithmetic: an analysis that would have created $2M of value and influenced nothing is worth $0. Precision is necessary; it is not the product. Decisions are the product.`
            },
            {
              h: "Commercial acumen is built, not born",
              p: `Commercial acumen is knowing which numbers matter and why. It's built deliberately: read your company's strategy documents and your competitors' investor materials, walk the floor or sit in on sales calls, learn the two or three operational drivers that move your P&L most. A partner who knows that a one-point change in customer churn is worth more than a five-point cut in travel spend gives very different advice to one who treats every line equally. Set yourself a syllabus: one earnings call of a competitor per quarter, one customer-facing session per month, one operational walk-through per month. Within two quarters you will hear yourself asking questions the operators consider intelligent — which is the moment doors start opening.`
            },
            {
              h: "Comfort with being roughly right",
              p: `Decisions rarely wait for perfect data. Partners give a view with ranges, assumptions and confidence levels instead of refusing to answer until the numbers are final. "Roughly right and on time" beats "precisely right and too late" in almost every business decision — a discipline the forecasting research community has formalised: good judgment under uncertainty means committing to calibrated estimates and updating visibly as evidence arrives, not withholding judgment until certainty (which never comes). Note what this is not: it is not lower standards for statutory reporting, where precision is the job. It is refusing to let audit-grade habits paralyse decision support, where speed and direction are the job. Learn to say: "Best estimate today is a $1.5–2M impact; I'll tighten that by Friday; the decision doesn't change anywhere in that range."`
            }
          ],
          example: {
            title: "The churn analysis nobody used — a post-mortem",
            body: [
              `A capable analyst spent three weeks building a churn model for a subscription business. It was good work: cohort-level, statistically careful, and it showed that customers onboarded through the discount channel churned at 2.3× the rate of full-price customers — enough to make the discount channel value-destructive. He put it on page 31 of the monthly pack. Nothing happened. Next quarter, the marketing team doubled the discount budget.`,
              `Run the partner's post-mortem on this. Was the message unclear? Yes — the finding was buried and never stated as "the discount channel destroys value." Was it aimed at the wrong person? Yes — the CMO, who owned the decision, doesn't read the finance pack. Was it too late? Yes — the marketing budget was locked two weeks before the pack landed. Was there a recommendation? No — the analysis ended at the finding. Four failures, none of them analytical. The rerun six months later took one afternoon: the same finding on one page, restated as "every $100k of discount-channel spend buys us customers worth $61k", walked into the CMO's office three weeks before budget-setting, with two options attached. The channel was restructured in a month. Same model. Different job.`
            ]
          },
          mistakes: [
            "Treating 'they ignored my analysis' as the end of the story instead of the start of a diagnosis.",
            "Building commercial acumen from the annual report alone — the floor, the sales call and the competitor's numbers teach faster.",
            "Hedging every estimate into uselessness ('it depends') to avoid ever being wrong.",
            "Applying audit-grade precision standards to decision support, and delivering the answer after the decision.",
            "Confusing curiosity with interrogation — operators open up to interest, not to auditors with clipboards."
          ],
          exercise: {
            minutes: 15,
            prompt: `Pick the most important analysis you produced in the last quarter that changed nothing. Run the four-question post-mortem: message clear? right person? in time? recommendation attached? Write one sentence on what you'd redo. Then book the single cheapest fix — usually a 15-minute conversation with the actual decision-maker.`
          },
          takeaways: [
            "Be curious about how the business makes money before you analyse it — and build acumen on a deliberate syllabus.",
            "Measure yourself on decisions influenced, not reports delivered; diagnose every ignored analysis.",
            "Give calibrated, roughly-right views on time; keep audit-grade precision for the accounts.",
            "An accurate analysis that changes nothing is worth nothing — harsh, and the most useful sentence in this module."
          ],
          sources: [
            { name: "Daniel Kahneman — Thinking, Fast and Slow", note: "the foundational account of judgment under uncertainty; the case for stated ranges and calibrated confidence over false precision." },
            { name: "Philip Tetlock & Dan Gardner — Superforecasting", note: "evidence that good forecasters commit early, quantify, and update visibly — the working definition of 'roughly right and on time'." }
          ]
        },
        {
          id: "m1l3",
          title: "Knowing the business: models, drivers and KPIs",
          minutes: 15,
          sections: [
            {
              h: "Map the business model on one page",
              p: `Every business answers three questions: who do we serve, what do we sell them, and how does the economics work? Sketch it: revenue streams, cost structure, where the margin is actually made, and where cash gets trapped. A one-page picture of the model is worth more to a partner than a hundred-tab workbook, because it tells you where to look. Do it with real proportions: if 70% of margin comes from 20% of customers, your one-pager should make that impossible to miss. Most organisations have never seen their own economics drawn simply — the first time you show a leadership team a one-page "how we actually make money", expect silence, then arguments, then requests for copies. All three are victories.`
            },
            {
              h: "Build the driver tree",
              p: `Value drivers are the small set of operational levers that disproportionately move financial results — price realisation, capacity utilisation, conversion rate, retention, mix. Build a driver tree: profit at the top, decomposed layer by layer until you reach metrics an operator can actually move this week. The discipline is quantification: each branch should carry a sensitivity ("1 point of churn ≈ $800k of annual margin") so the tree ranks the levers instead of merely listing them. When a leader asks "where should we focus?", the driver tree is your answer, and it's how you translate finance goals into words operations can act on. It is also your early-warning system: when a financial result surprises you, the tree tells you which operational branch to interrogate first.`
            },
            {
              h: "KPIs beyond the financials",
              p: `Financial results are lagging indicators — they tell you what already happened. Leading indicators (pipeline coverage, on-time delivery, staff turnover, complaint rates) tell you what's about to happen. A partner watches both and connects them: "complaints rose in March, so expect churn in Q3, which puts roughly $600k of revenue at risk." That sentence is business partnering in miniature: an operational signal, a causal link, a quantified consequence, delivered while there's still time to act. Build a one-page watchlist pairing each major financial line with its two best leading indicators, and review it monthly. Also learn the operational constraint: in any system there is one bottleneck that governs throughput, and money spent anywhere else buys less than it seems — knowing where the constraint sits transforms your capital-allocation advice.`
            },
            {
              h: "Learn by asking",
              list: [
                "Ask a sales leader: 'What deal did we lose recently, and why?'",
                "Ask an ops leader: 'What's the bottleneck you'd fix with free money?'",
                "Ask a product owner: 'Which customers would pay more, and for what?'",
                "Ask customer service: 'What do people complain about that we've stopped hearing?'",
                "Ask everyone: 'What does finance do that helps you least?' — and take notes, not offence."
              ]
            }
          ],
          example: {
            title: "The driver tree that re-ranked a cost programme",
            body: [
              `A subscription-software division was told to find $2M of annualised savings. Instinct said: freeze travel ($400k), cut training ($300k), delay hiring ($900k), squeeze marketing ($400k). The new finance partner built the driver tree first. Revenue ≈ customers × ARPU; customers next year ≈ current × (1 − churn) + new. Sensitivities: 1 point of monthly churn ≈ $1.9M of annual revenue; 1 point of trial-to-paid conversion ≈ $700k; 5% of travel ≈ $20k.`,
              `The tree reframed the entire exercise. Support response times had drifted from 4 hours to 19 as headcount lagged growth — and support experience was the best-known churn driver in the company's own exit surveys. The partner's recommendation inverted the instinct list: protect support hiring, fund a $150k support-tooling fix, take the $2M instead from a marketing channel whose customer acquisition cost exceeded lifetime value (visible on the same tree), and accept the travel freeze as cosmetic. Result at year end: churn back down 0.8 points — worth ~$1.5M — and the savings target met from the value-destroying channel. Nobody in the room had been against support before the meeting; they had simply never seen the branches priced side by side. That is what the tree is for: it doesn't make you smarter, it makes the trade-offs undeniable.`
            ]
          },
          mistakes: [
            "Building the tree once, beautifully, in a deck — and never wiring it to live numbers or decisions.",
            "Listing drivers without sensitivities, which produces a mind-map instead of a ranking.",
            "Tracking twenty KPIs equally instead of the two leading indicators per financial line that actually predict.",
            "Treating all revenue/cost lines as equal citizens — trees exist precisely because they are not.",
            "Asking operators for 'their KPIs' instead of watching what they check first each morning (rarely the same thing)."
          ],
          exercise: {
            minutes: 20,
            prompt: `Draw your unit's driver tree: profit at top, 4–6 operational drivers at the bottom, and a rough sensitivity on each branch (order of magnitude is fine — you can refine later). Circle the branch with the worst ratio of importance to management attention. That circle is your next month's agenda.`
          },
          takeaways: [
            "A one-page business model map with real proportions tells you — and the leadership team — where to look.",
            "Driver trees with sensitivities rank the levers; without sensitivities they're decoration.",
            "Pair every financial line with its two best leading indicators; know where the operational constraint sits.",
            "The floor, the lost deal and the complaint log teach the business faster than the ledger does."
          ],
          sources: [
            { name: "Eliyahu Goldratt — The Goal", note: "the theory of constraints as a novel; why the bottleneck governs the system and most local optimisations are illusions." },
            { name: "Lafley & Martin — Playing to Win", note: "where-to-play/how-to-win strategy cascades — the strategic frame your driver tree should ultimately serve." }
          ]
        },
        {
          id: "m1l4",
          title: "Stakeholders, trust and relationships",
          minutes: 15,
          sections: [
            {
              h: "Map your stakeholders deliberately",
              p: `List everyone your role touches, then place them on a two-by-two grid: influence over decisions (low→high) against how much your work affects them (low→high). High-influence, high-impact people are your key partners — invest in them deliberately, with a named plan per person rather than generic "engagement". The map also exposes gaps: the influential leader you've never had a real conversation with is your biggest opportunity, and the low-influence stakeholder consuming 30% of your time is your biggest hidden cost. Redo the map quarterly; org charts move, and last year's key partner may no longer own the decisions you need to be near.`
            },
            {
              h: "The trust equation",
              p: `The most useful model of professional trust comes from Maister, Green and Galford's The Trusted Advisor: trust = (credibility + reliability + intimacy) ÷ self-orientation. Credibility is knowing your stuff and being honest about what you don't know. Reliability is doing what you said, when you said — built only through repetitions, which is why it can't be rushed. Intimacy (we'll call it closeness) is being safe to think aloud with: the GM who rehearses a half-formed idea on you has granted you closeness. The divisor matters most: if stakeholders sense you're playing for finance's scoreboard, your own visibility, or the CFO's approval rather than the business outcome, everything above the line gets discounted. Self-orientation is why brilliant, dependable people are sometimes never trusted — everyone can smell whose game they're playing.`
            },
            {
              h: "Deposits before withdrawals",
              p: `Influence works like a bank account. Deposits are small, consistent acts of usefulness: answering quickly, sharing an insight they didn't ask for, making their monthly report to their boss easier, flagging a risk privately before it embarrasses them publicly. Withdrawals are the hard moments — challenging a pet project, saying no, delivering bad news. Partners who only show up for withdrawals get frozen out, however correct they are. Build the balance before you need it, and know roughly where it stands per stakeholder: with the ops director you've helped for a year you can challenge bluntly in a meeting; with the sales VP you met last month, the same challenge must be delivered privately, framed as a question, or banked for later. Reciprocity is among the most robust findings in the influence literature — usefulness given first is repaid, usually with interest.`
            },
            {
              h: "Contract the relationship",
              p: `With key stakeholders, agree explicitly how you'll work together: what they need from you, what you need from them, meeting cadence, and how you'll handle disagreement ("if I think a number in your plan is wrong, do you want that in the meeting or before it?" — ask this once and you'll never be seen as an ambusher). Ten minutes of contracting prevents months of mismatched expectations, and the question itself signals seriousness. Re-contract when either role changes. Most finance-business relationships have no contract at all, which is why they default to the historical norm: finance sends things, the business ignores them, and both sides resent it.`
            }
          ],
          example: {
            title: "Ninety days with a hostile stakeholder",
            body: [
              `A newly appointed finance partner inherited an ops director, Marta, whose stated view of finance was "the people who cut my budget and read out my variances." First meeting: 15 minutes, one question — "what does finance do that helps you least?" — and the discipline to write down the answers (the 40-tab cost workbook; variance emails that arrived after her boss had already seen the numbers) without defending any of them.`,
              `Days 1–30, deposits only: the workbook was replaced with a one-page cost view built around her three levers; the variance email was re-sequenced so she saw it before her boss did, every month, without fail. Days 31–60: a freebie — finance noticed her overtime spike correlated with a supplier's late deliveries and quantified the cost ($85k/quarter), giving her the ammunition to escalate a problem she'd been losing alone. Day 74 brought the first withdrawal: her capacity-expansion request was $2M against a driver tree that said demand, not capacity, was the constraint. The challenge went to her privately, before the investment committee, framed as "help me understand what I'm missing — because if I can't defend this, the committee will kill it." She killed the request herself, resubmitted a demand-generation plan, and told the committee finance had helped her build it. The balance was spent — and the account was instantly richer than before. Trust withdrawals, done right, are deposits.`
            ]
          },
          mistakes: [
            "Investing time by seniority instead of by influence-and-impact — the CEO's calendar is not your relationship strategy.",
            "Confusing frequent contact with trust: reliability is kept promises, not meeting count.",
            "Making the first-ever interaction a challenge (a withdrawal against an empty account).",
            "Letting self-orientation leak: quoting 'finance policy' when you mean 'I disagree', or visibly playing to the CFO in the GM's meeting.",
            "Never contracting, then being surprised that challenge lands as ambush."
          ],
          exercise: {
            minutes: 15,
            prompt: `Map your top eight stakeholders on the influence × impact grid and mark each relationship strong / working / absent. Pick the highest-influence 'absent' and book 30 minutes this week with one agenda item: "what does finance do that helps you least?" Deposit; don't defend.`
          },
          takeaways: [
            "Map stakeholders by influence and impact quarterly; run a named plan for the top right.",
            "Trust = (credibility + reliability + closeness) ÷ self-orientation — and the divisor dominates.",
            "Make deposits of usefulness long before you need to make a withdrawal; know your balance per person.",
            "Contract the relationship explicitly, including how challenge will be delivered."
          ],
          sources: [
            { name: "Maister, Green & Galford — The Trusted Advisor", note: "the trust equation, verbatim source; chapters 5–8 are the deepest treatment of self-orientation available." },
            { name: "Robert Cialdini — Influence", note: "reciprocity, commitment and the other levers underneath 'deposits before withdrawals' — with the evidence base." }
          ]
        },
        {
          id: "m1l5",
          title: "The operating model: buying back the hours",
          minutes: 15,
          sections: [
            {
              h: "Partnering dies without a calendar redesign",
              p: `The most common failure mode of finance business partnering has nothing to do with skill: the aspiring partner is told to "be more strategic" on top of an unchanged reporting load, tries to do both, and partnering loses to the month-end deadline every single time. Treat your working week as the first business you turn around. Audit a typical month in three buckets: production (closing, reconciling, populating packs), commentary (explaining what the numbers already say), and partnering (decision support, stakeholder time, forward analysis). Most self-described partners discover the split is roughly 70/20/10. No mindset survives that calendar. The target after two quarters is closer to 40/20/40 — and every hour has to be bought, not wished, into existence.`
            },
            {
              h: "Kill, shrink, automate — then rebook",
              p: `Buy hours in this order. Kill: list every recurring output and ask "who acts on this?" — anything with no named decision-consumer gets a stay of execution of one cycle, then dies (announce the death; genuine users will surface, most won't). Shrink: the 40-page pack becomes a 6-page decision pack plus an appendix nobody prints — page count is a choice, not a requirement. Automate: whatever survives should assemble itself; if a human pastes numbers between systems monthly, that human is a scheduled job that hasn't been written yet. Then — the step everyone skips — rebook the freed hours immediately and visibly: recurring stakeholder one-to-ones, a monthly operational walk-through, standing analysis time. Unbooked capacity is reabsorbed by production within a month, as surely as air fills a vacuum.`
            },
            {
              h: "Where partners sit: three operating models",
              p: `Organisations wire business partnering three ways, and each has a failure mode worth knowing. Embedded: the partner sits in the business unit, close to decisions — and risks going native, becoming the GM's advocate to finance rather than finance's advisor to the GM (antidote: a hard dotted line to the CFO and peer review of big recommendations). Central: partners sit in finance and serve units from there — objectivity is easy, but distance breeds the pack-thrower who's never seen the factory (antidote: contracted on-site time and named unit ownership). Hybrid/centre-of-excellence: production is centralised or offshored so partners can actually partner — the strongest model on paper, and it fails when the CoE's service quality drops and partners get dragged back into production firefighting (antidote: brutal service-level clarity between CoE and partners). You rarely choose the model, but you can always install the antidote for the one you're in.`
            },
            {
              h: "Measure the partnering function like a business",
              p: `What gets measured is what the role becomes. If your only metrics are close timeliness and report accuracy, you will be a scorekeeper forever, whatever your title says. A credible partner scorecard has three legs. Decision participation: how many material decisions this quarter had finance in the room before commitment — count them; the number is embarrassing at first and that's the point. Forecast reliability: not "was it right" but bias and range honesty — are you systematically optimistic, and do outcomes land inside your stated ranges about as often as you claimed? Stakeholder verdict: two questions asked twice a year — "does finance help you make better decisions?" and "what should finance stop doing?". Publish your own scorecard to your stakeholders. The transparency itself is a deposit, and the trend line is your business case at review time.`
            }
          ],
          example: {
            title: "Sixty days from pack factory to decision desk",
            body: [
              `A five-person divisional finance team ran the audit and found 68% of total hours in production, 22% in commentary, 10% in anything forward-looking. Their flagship product was a 44-page monthly pack; a one-month read-receipt experiment showed four of eleven recipients opened it, and two of those only checked their own unit's page.`,
              `Days 1–15: the kill list. Nine recurring reports died (after one cycle of "this stops next month unless you tell us you use it" — three people replied, six reports had literally no readers). Days 16–40: the pack was rebuilt as six pages — one headline page answering "what should leadership do differently this month?", three driver-tree pages, one forecast page with ranges, one risk page — with the old detail auto-generated into an appendix nobody printed. Two paste-heavy processes were automated by one analyst who was given the time to do it (bought from the dead reports). Days 41–60: the freed ~30 hours a month were rebooked in public: every partner took two standing stakeholder one-to-ones and one operational half-day. The team also started counting decision participation: three material decisions touched in the quarter before the change; eleven in the quarter after. Same headcount, same systems. The CFO's comment at the half-year review: "It's the first time I can say what this team changed, rather than what it produced."`
            ]
          },
          mistakes: [
            "Adding partnering on top of an untouched production load — the calendar always wins, so redesign the calendar first.",
            "Killing reports silently (breeds distrust) instead of announcing the death and letting real users object.",
            "Freeing hours without immediately rebooking them into standing stakeholder and analysis time.",
            "Going native in an embedded model — advocating the unit's case to finance instead of advising the unit.",
            "Measuring the function only on close speed and accuracy, then wondering why nothing changes."
          ],
          exercise: {
            minutes: 20,
            prompt: `Run the three-bucket audit on your last full month: production / commentary / partnering, in hours. Then write your kill list: every recurring output, each with a named decision-consumer or a death date. Pick the first report to kill and draft the two-line announcement.`
          },
          takeaways: [
            "Audit your month into production / commentary / partnering — no mindset survives a 70/20/10 calendar.",
            "Buy hours in order: kill, shrink, automate — then rebook them visibly before production reabsorbs them.",
            "Know your operating model's failure mode (going native / distance / CoE drag) and install its antidote.",
            "Score the function on decision participation, forecast reliability and stakeholder verdict — and publish it."
          ],
          sources: [
            { name: "Hope & Fraser — Beyond Budgeting", note: "the classic case against ritual reporting and annual-budget theatre — useful ammunition for your kill list." },
            { name: "AFP FP&A Guides (Association for Financial Professionals)", note: "practitioner surveys and playbooks on how FP&A teams split their time and structure business partnering." }
          ]
        }
      ],
      workshop: {
        title: "Workshop 1 — Your partnering baseline",
        brief:
          "Apply Module 1 to your own role. This is the work that turns theory into " +
          "practice — treat it like a live engagement, not homework. Use the three " +
          "Module 1 tools (stakeholder map, driver tree, partnering contract) as " +
          "your worksheets.",
        steps: [
          "Sketch your organisation's business model on one page: who it serves, what it sells, where the margin is made — with real proportions.",
          "Draw a driver tree from profit (or your unit's key result) down to 4–6 operational drivers, with a rough sensitivity per branch.",
          "Map your top 8 stakeholders on the influence × impact grid and mark the relationship strength of each (strong / working / absent).",
          "Run the three-bucket calendar audit on last month (production / commentary / partnering, in hours) and write your kill list.",
          "Pick the one high-influence stakeholder with the weakest relationship and book 30 minutes with them this week. Open with: 'What does finance do that helps you least?'",
          "Write a two-sentence 'finance value statement': what your partnership offers that stakeholder, in their language."
        ],
        deliverable:
          "Record your finance value statement, your calendar split (e.g. 70/20/10), " +
          "and the stakeholder you chose below. You'll build on all three in the capstone."
      },
      tools: [
        {
          id: "stakeholder-map",
          title: "Stakeholder map & trust ledger",
          desc: "The influence × impact grid plus a per-person trust ledger (deposits, withdrawals, contracting notes).",
          body: `# Stakeholder Map & Trust Ledger

## 1. The grid
Place every stakeholder by **influence over decisions** (low → high) and
**how much your work affects them** (low → high).

| | Low impact | High impact |
|---|---|---|
| **High influence** | Keep informed, cheaply | **KEY PARTNERS — named plan each** |
| **Low influence** | Minimal upkeep | Serve well, automate where possible |

## 2. Per-person ledger (copy one block per key partner)

**Name / role:**
**Decisions they own that finance should influence:**
**Relationship state:** absent / working / strong
**Their currency** (what they're measured on, what they fear, what they want):
**Trust equation read** — Credibility: /5 · Reliability: /5 · Closeness: /5 · Self-orientation risk (how might they think I'm playing my own game?):
**Recent deposits:**
**Withdrawals made or coming:**
**Contracting notes** (cadence, how they want challenge delivered, no-surprises rules):
**Next deposit, with date:**

## 3. Quarterly review questions
- Who moved on the grid? (reorgs, new owners of decisions)
- Which key partner had zero deposits this quarter?
- Where am I spending hours on low-influence stakeholders, and what do I automate?
`
        },
        {
          id: "driver-tree",
          title: "Driver tree worksheet",
          desc: "Profit-to-levers decomposition with sensitivities, leading indicators and constraint check.",
          body: `# Driver Tree Worksheet

## 1. The tree (fill top-down; every branch gets a sensitivity)

PROFIT
├── Revenue
│   ├── Volume driver 1: ______  (1 unit ≈ $______ /yr)
│   ├── Volume driver 2: ______  (1 unit ≈ $______ /yr)
│   ├── Price / mix: ______      (1% ≈ $______ /yr)
│   └── Retention / churn: ____  (1 pt ≈ $______ /yr)
└── Cost
    ├── Capacity / utilisation: ____ (1 pt ≈ $______ /yr)
    ├── Unit cost driver: ______     (1% ≈ $______ /yr)
    └── Overhead blocks: ______      ($______ each)

## 2. Rank the branches
List branches by sensitivity, largest first. Circle the one with the worst
ratio of importance to management attention — that's your agenda.

## 3. Leading indicators
For each of your top 3 branches, name 1–2 operational signals that move
BEFORE the money does, and where you'll get them monthly:

| Branch | Leading indicator | Source | Owner |
|---|---|---|---|

## 4. Constraint check
Where is the bottleneck that governs the whole system right now?
What spending elsewhere is buying less than it appears to because of it?
`
        },
        {
          id: "partnering-contract",
          title: "Partnering contract (first-meeting agenda)",
          desc: "A one-page agenda and agreement template for contracting a working relationship with a stakeholder.",
          body: `# Partnering Contract — first-meeting agenda (30 min)

## Before the meeting
- Read their last board/leadership submission. Know their targets.
- Prepare NOTHING to present. This meeting is for listening.

## Agenda
1. **Their world (10 min).** "What are the two decisions on your desk this
   quarter?" "What keeps being harder than it should be?"
2. **Finance's report card (10 min).** "What does finance do that helps you
   least?" — write answers down; do not defend anything.
3. **The contract (10 min).** Agree and write down:
   - What you'll deliver, and by when, each month (keep it small)
   - What you need from them (data, context, 30 min monthly)
   - Cadence: ______  ·  Channel for quick questions: ______
   - **Challenge protocol:** "If I think a number in your plan is wrong,
     do you want that raised in the meeting or before it?"
   - No-surprises rule: bad news travels to each other first.

## After
- Send a five-line summary of what was agreed. Deliver the first small
  thing within a week — the first deposit sets the account's tone.
- Log them in the trust ledger.
`
        }
      ],
      quiz: {
        title: "Module 1 knowledge check",
        questions: [
          {
            q: "What most distinguishes a finance business partner from a traditional finance role?",
            options: [
              "They produce more detailed reports than traditional finance",
              "They shape decisions before they're made rather than reporting after",
              "They always agree with the business unit's plans",
              "They focus exclusively on cost control"
            ],
            answer: 1,
            explain: "Partnering is forward-looking: influencing the decision, not just recording the result. More detail, automatic agreement, or pure cost focus are all missing the point."
          },
          {
            q: "A business partner's analysis was accurate but nobody acted on it. The partnering mindset says:",
            options: [
              "The job is done — acting on it is the business's responsibility",
              "Treat it as a failure worth diagnosing: message, timing, audience or missing recommendation",
              "Escalate to the CFO that the business ignored finance",
              "Send the same report again with more data attached"
            ],
            answer: 1,
            explain: "Partners own the outcome, not just the report. If insight didn't land, diagnose why — clarity, timing, audience, or the absence of a clear recommendation."
          },
          {
            q: "Which is the best example of a leading indicator?",
            options: [
              "Last quarter's net profit",
              "Prior-year revenue growth",
              "Sales pipeline coverage for next quarter",
              "Last month's actual costs versus budget"
            ],
            answer: 2,
            explain: "Pipeline tells you what's about to happen. Profit, prior-year growth and actuals are all lagging — they report what already occurred."
          },
          {
            q: "In the trust equation, which factor reduces trust as it increases?",
            options: [
              "Credibility",
              "Reliability",
              "Closeness",
              "Self-orientation"
            ],
            answer: 3,
            explain: "Trust = (credibility + reliability + closeness) ÷ self-orientation. The more stakeholders sense you're playing for your own scoreboard, the more everything else is discounted."
          },
          {
            q: "What is a driver tree for?",
            options: [
              "Documenting the month-end close process",
              "Linking financial outcomes to the operational levers that move them",
              "Tracking which stakeholders attend your meetings",
              "Allocating overheads across cost centres"
            ],
            answer: 1,
            explain: "A driver tree decomposes a financial result into operational drivers — with sensitivities, it ranks the levers the business can actually pull."
          },
          {
            q: "A stakeholder is high-influence but you've never properly engaged them. The stakeholder map says this is:",
            options: [
              "Fine — engage only when they contact finance",
              "Your biggest relationship-building opportunity, to be pursued deliberately",
              "A risk to be escalated to your manager",
              "Someone to copy on all reports from now on"
            ],
            answer: 1,
            explain: "High-influence stakeholders with weak relationships are exactly where deliberate investment pays off. Copying them on reports is noise, not relationship."
          },
          {
            q: "'Roughly right and on time beats precisely right and too late' is a principle about:",
            options: [
              "Lowering accounting standards for reported results",
              "Giving decision-useful views with stated assumptions when decisions can't wait",
              "Avoiding detailed analysis altogether",
              "Always using last year's numbers as a proxy"
            ],
            answer: 1,
            explain: "It applies to decision support, not statutory reporting: give a view with ranges and assumptions when the decision is now. Rigour still matters — precision theatre doesn't."
          },
          {
            q: "Why do 'deposits' matter in stakeholder relationships?",
            options: [
              "They guarantee stakeholders will always agree with finance",
              "Consistent small acts of usefulness build the balance you draw on when you must challenge or say no",
              "They replace the need for formal reporting",
              "They are required by professional standards"
            ],
            answer: 1,
            explain: "Influence works like a bank account: challenge and bad news are withdrawals, and they only land well if you've built a balance of usefulness first."
          },
          {
            q: "Your month is 70% production, 20% commentary, 10% partnering, and you've been told to 'be more strategic'. The operating-model lesson says the first move is:",
            options: [
              "Kill, shrink or automate the lowest-value recurring outputs — then immediately rebook the freed hours with stakeholders",
              "Work extra hours until partnering fits around the reporting load",
              "Wait for the next reorganisation to change the role formally",
              "Delegate all reporting to junior staff without changing the outputs"
            ],
            answer: 0,
            explain: "No mindset survives a 70/20/10 calendar. Buy hours by killing unread outputs, shrinking packs and automating assembly — and rebook the hours visibly before production reabsorbs them."
          },
          {
            q: "The most credible way to measure a business-partnering function is:",
            options: [
              "Close timeliness and report accuracy alone",
              "Number of reports issued per month",
              "Headcount cost of the finance team versus benchmark",
              "Decision participation, forecast reliability (bias and range honesty) and the stakeholders' own verdict"
            ],
            answer: 3,
            explain: "What gets measured is what the role becomes. Close speed and accuracy measure the scorekeeper; decisions touched, calibrated forecasts and stakeholder feedback measure the partner."
          }
        ]
      }
    },

    /* ================= MODULE 2 ================= */
    {
      id: "m2",
      title: "From Analysis to Influence",
      weeks: "Weeks 3–4",
      intro:
        "Turning analysis into narratives that drive action — and building the " +
        "influence to make them land: the insight ladder, storytelling structure, " +
        "adapting to different audiences and styles, making numbers visible, and " +
        "influencing without authority.",
      lessons: [
        {
          id: "m2l1",
          title: "The insight ladder: so what, now what",
          minutes: 15,
          sections: [
            {
              h: "Data → information → insight → action",
              p: `Data is raw numbers. Information is data organised ("travel spend is 12% over budget"). Insight adds meaning ("travel is over because we're flying engineers to fix a quality problem that's costing us twice the overspend in rework"). Action closes the loop ("fix the root cause at the plant; the travel line will fix itself"). Most finance output stops at information, and the tell is the verb: information reports what moved; insight explains what it means for a choice someone owns. Partners climb the whole ladder every time, and they climb it before publishing — the worst place to discover your analysis has no "so what" is out loud, in the meeting.`
            },
            {
              h: "The two questions, applied relentlessly",
              p: `Interrogate every finding with "so what?" until you reach something a decision-maker cares about, then ask "now what?" until you have a recommendation. If you can't answer "so what?", the finding probably doesn't belong in your report — appendix it or cut it. If you can't answer "now what?", you're not finished analysing, however polished the workbook looks. Run the test at the level of the whole document too: a pack whose headline can't complete the sentence "…and therefore we should…" is a status report wearing an insight costume. This edit is brutal the first month and automatic by the third.`
            },
            {
              h: "Insight needs a comparison",
              p: `A number on its own means nothing. Insight lives in comparison: versus plan, versus last year, versus the market, versus what the decision assumed. Choose the comparison that matters for the decision at hand — beating budget is cold comfort if competitors grew twice as fast, and a cost "saving" against an inflated budget is not a saving. The most underused comparison in corporate life is against the assumption that justified a past decision: "we approved this on 8% response rates; we're getting 3%" is the sentence that stops good money following bad, and almost nobody is assigned to say it. Assign yourself.`
            },
            {
              h: "Materiality is audience-relative",
              p: `What's material to a cost-centre manager is noise to the CEO. Before writing, ask: at this audience's altitude, what are the three things that could change what they do next? Lead with those; everything else is appendix. This also disciplines your "so what" chain — a variance can be genuinely insightful for the plant manager and correctly absent from the board pack. One analysis, several altitudes, always deliberately chosen. When in doubt, write the CEO version first: if it survives at that altitude, the detail below it will find its audience.`
            }
          ],
          example: {
            title: "Climbing one variance up the ladder",
            body: [
              `Data: the GL shows travel at $412k against a $368k budget for the quarter. Information: "Travel is $44k (12%) over budget, driven by the engineering cost centre." That's where the pack usually stops — accurate, comparative, and useless, because nobody owns a decision called "travel".`,
              `So what? Interviewing the engineering lead takes eleven minutes: the flights are emergency trips to a contract manufacturer whose defect rate doubled after a component change. So the real finding: "We're spending ~$15k/month flying engineers to contain a supplier quality problem; the same problem drove $96k of rework and warranty cost this quarter — the travel line is the smoke, not the fire." Now what? Three options, priced: qualify a second supplier ($60k, 4 months), fund an on-site quality engineer at the manufacturer ($35k/quarter, immediate), or accept and monitor (baseline: ~$130k/quarter run-rate). Recommendation: the on-site engineer now, second-supplier qualification in parallel. The travel variance never appears in the leadership pack at all — it's been promoted into a supplier-quality decision worth $500k a year, with a named owner and a date. One number, four rungs, eleven minutes of curiosity.`
            ]
          },
          mistakes: [
            "Publishing information dressed as insight — if the headline has no 'therefore', it's a status report.",
            "Choosing the flattering comparison (vs budget) when the decision-relevant one (vs market, vs the approval assumption) is uncomfortable.",
            "Answering 'so what' at your own altitude instead of the reader's.",
            "Stopping at diagnosis because prescription feels risky — options with a recommendation is the finished product.",
            "Burying the one decision-changing finding on page 31 out of symmetry with the pages around it."
          ],
          exercise: {
            minutes: 15,
            prompt: `Take one variance from your latest pack and climb it: write the information sentence, then ask 'so what?' until you hit something a named decision-maker cares about, then 'now what?' until you have options and a recommendation. If you can't complete the climb, list what you'd need to find out — that list is real analysis work, unlike the variance commentary.`
          },
          takeaways: [
            "Climb the full ladder: data → information → insight → action — before publishing, not during the meeting.",
            "Ask 'so what?' until it matters and 'now what?' until it's actionable; cut what survives neither.",
            "Pick the comparison the decision needs — including the forgotten one: versus the assumption that justified the original approval.",
            "Write for the reader's altitude; the CEO-version test disciplines everything below it."
          ],
          sources: [
            { name: "Barbara Minto — The Pyramid Principle", note: "the original discipline of governing thoughts and grouped support; the 'so what' test is its beating heart." },
            { name: "Chip & Dan Heath — Made to Stick", note: "why concrete, unexpected findings travel through organisations and abstract ones die in appendices." }
          ]
        },
        {
          id: "m2l2",
          title: "Storytelling with numbers",
          minutes: 15,
          sections: [
            {
              h: "Lead with the headline",
              p: `Structure findings top-down: state the answer first, then support it. "We should exit product line C; it destroys margin and the trend is worsening" — then the evidence. Busy executives decide in the first thirty seconds whether to keep listening, and they retain what they heard first. Building suspense toward a conclusion works in novels and fails in boardrooms, where the audience is reading ahead, checking phones, and deciding whether you know what you think. Answer-first has a second benefit nobody mentions: it forces you to have an answer. Many decks are chronological precisely because their author never committed to a conclusion.`
            },
            {
              h: "The pyramid: one message, about three supports",
              p: `Under one clear headline, group your evidence into roughly three supporting points, each backed by data. If you have ten points, you have none — group and prune until the structure is one message deep and three wide. Anything that doesn't support the headline goes to the appendix or the bin, however long it took to build (the hardest discipline in analytical life is deleting good work that answers a question nobody asked). The pyramid also gives you your verbal summary for free: headline plus three supports is exactly what you say in the lift, in the corridor, and in the first minute of the meeting.`
            },
            {
              h: "Situation, complication, resolution",
              p: `For narrative flow, open with the situation everyone agrees on ("Q2 revenue grew 6%"), introduce the complication ("but all growth came from one customer, who is tendering their contract"), then resolve ("here are three options to de-risk, and we recommend the second"). This shape — Minto's SCR — creates the tension that makes people care about the resolution. The situation must be genuinely agreed (open with something contested and the meeting dies there); the complication must be genuinely uncomfortable (no complication, no reason to listen); the resolution must be yours (ending on the complication is journalism, not advice).`
            },
            {
              h: "Concrete beats abstract",
              p: `"A 2% margin decline" is abstract. "That's the entire profit of the Brisbane operation, gone" is concrete. Translate percentages into things your audience can picture: headcount, stores, customers, days of cash, months of runway. Concrete framing is remembered and repeated — which is how your insight travels when you're not in the room, and travel is the point: the executive who can't repeat your message to their boss can't act on it either. One conversion per document is enough; a pack where every number wears a costume becomes noise again.`
            }
          ],
          example: {
            title: "The same commentary, before and after",
            body: [
              `Before (as actually shipped, lightly disguised): "Revenue for the month was $8.2M, 3.1% above budget and 5.4% above prior year. Gross margin was 41.2%, 80bps below budget, primarily driven by unfavourable mix and input cost inflation partially offset by pricing actions. Operating expenses were $2.9M, in line with budget. EBITDA was $1.1M, 4% below budget. Headcount ended at 214 against a plan of 220."`,
              `After: "Headline: we're winning revenue and losing margin — and the mix shift causing it is accelerating. Revenue beat budget by 3%, but the growth is coming from the low-margin distributor channel (now 38% of sales, was 31% in January), which is why EBITDA missed despite the beat. If mix keeps shifting at this rate, we hit our revenue target and miss the annual profit plan by ~$900k. Decision needed: either reprice the distributor tier (est. +120bps margin, some volume risk) or rebalance sales incentives toward direct (slower, safer). Recommendation and workings on page 2 — we'd reprice. — Finance." Same month, same numbers. The before version describes; the after version stakes a claim, quantifies the trajectory, and asks for a decision. Note it's also shorter.`
            ]
          },
          mistakes: [
            "Chronological decks that recap the analysis journey instead of leading with its destination.",
            "Ten supporting points — grouping is the work; a list is not a structure.",
            "Opening the 'situation' with something the room disputes, and losing the meeting in minute one.",
            "Ending on the complication ('margins are at risk') without a resolution — tension without release is journalism.",
            "Costume-dressing every number until the concrete trick stops working; convert the one that must be remembered."
          ],
          exercise: {
            minutes: 20,
            prompt: `Rewrite your last commentary using the after-version pattern: one claim headline, the mechanism in two sentences, the quantified trajectory ('if this holds…'), the decision needed, your recommendation. Under 120 words. Read both versions aloud and notice which one sounds like an advisor.`
          },
          takeaways: [
            "Answer first, evidence second — and notice that answer-first forces you to have an answer.",
            "One headline, about three supports; delete good work that supports nothing.",
            "Situation (agreed) → complication (uncomfortable) → resolution (yours).",
            "Translate the one number that must be remembered into something picturable; let it travel without you."
          ],
          sources: [
            { name: "Barbara Minto — The Pyramid Principle", note: "the source of both top-down structure and the SCQ/SCR opening; written for consultants, applies verbatim to finance." },
            { name: "Chip & Dan Heath — Made to Stick", note: "concreteness and unexpectedness as the properties that make messages survive retelling — the 'travels without you' test." }
          ]
        },
        {
          id: "m2l3",
          title: "Communicating with non-finance audiences",
          minutes: 15,
          sections: [
            {
              h: "Translate, don't simplify down",
              p: `Non-finance leaders aren't less intelligent — they're fluent in a different language. "EBITDA margin compression from adverse mix" becomes "we're selling more of the products we make less money on." Keep the substance, change the vocabulary. If you must use a finance term, define it in the same breath, once. The trap here has a name in the literature — the curse of knowledge: once you know something, you cannot imagine not knowing it, so you systematically overestimate how much your vocabulary communicates. The cure is mechanical, not moral: maintain a personal translation table for your ten most-used terms, and test drafts on someone outside finance before anything important ships.`
            },
            {
              h: "Adapt to the person, not just the topic",
              p: `People consume information differently. Some want the detail and the workings (analytical); some want the headline and the action (drivers); some want to know who's affected and who's on board (relational); some want the vision and the story (expressive). Watch how a stakeholder communicates — email length, questions asked, what makes them lean in — and mirror it: the driver gets one page with the recommendation on top; the analytical gets the model and the assumptions, and feels disrespected by a glossy summary; the relational hears "who else supports this" before "what's the NPV". This isn't manipulation; it's postage. The same letter needs a different envelope for a different address.`
            },
            {
              h: "Choose the channel deliberately",
              list: [
                "Bad news or challenge: face-to-face (or video) first, never email first — email is for confirming what was said, not for saying it.",
                "Complex analysis: pre-read plus a short walkthrough, not a live data dump; the meeting is for the decision, not the education.",
                "Quick decisions: one-pager with a clear recommendation and options.",
                "Routine updates: consistent dashboard, same shape every time so change stands out.",
                "Anything political: the sequence of who hears it first IS the message — plan it."
              ]
            },
            {
              h: "Check for landing",
              p: `Communication happened only if it was received. Close conversations by asking what the other person will take away or do next — "so what's your read?" does the job without condescending. If their summary doesn't match your message, that's your rework, not their failure. In writing, the equivalent is the forwarding test: is there one paragraph the reader could paste to their boss unchanged? If they'd have to compose their own summary of your work, most won't, and your insight stops travelling one level up from wherever you sent it.`
            }
          ],
          example: {
            title: "One message, three envelopes",
            body: [
              `The finding: the proposed warehouse automation project has a positive NPV of $1.8M, but only if volumes grow ≥5% annually; below that it destroys value, and the volume forecast is the sales director's, not finance's.`,
              `To the CFO (analytical): "NPV is +$1.8M at the 6% volume CAGR in the business case, breakeven at 5%, −$1.4M at 3%. The volume assumption is unvalidated — it's 2× the trailing 3-year growth. Sensitivity table attached; I recommend we make approval conditional on a demand review." To the ops director (driver): "Your automation case works if volumes grow 5%+ a year and loses money below that. Growth has been 3%. Get sales to stand behind the higher number in writing, or resize the project to phase one only — that version pays back at current volumes. I'd resize." To the sales director (relational): "Ops' automation case leans entirely on your growth number — 6% a year. Before this hits the investment committee, I wanted you to see that, because the committee will ask you to own it. If you're comfortable, say so in the paper; if 6% is stretch, better we phase the project than have it bounce. Happy to look at the pipeline together first." Same analysis. Three vocabularies, three sequences, three asks — and no version misleads any recipient about the substance.`
            ]
          },
          mistakes: [
            "Cursing the audience with your knowledge — jargon isn't rigour, it's a locked door.",
            "One deck for every reader; the analytical feels patronised or the driver feels drowned.",
            "Breaking bad news by email because the conversation felt uncomfortable (it becomes more uncomfortable, in writing, forwarded).",
            "Running the meeting as a live tour of the spreadsheet instead of a decision with a pre-read.",
            "Never checking what landed — and discovering the misunderstanding a month later, embedded in someone's plan."
          ],
          exercise: {
            minutes: 15,
            prompt: `Write your personal translation table: your ten most-used finance terms, each with the plain-language version ('working capital' → 'cash tied up in running the business'). Then take one current message and write it in two envelopes — one for a driver, one for an analytical. Notice what you cut and what you add.`
          },
          takeaways: [
            "Translate substance into business language; the curse of knowledge means you can't feel yourself failing to communicate.",
            "Match style to the person: detail for analyticals, headlines for drivers, coalition for relationals.",
            "Bad news travels in person first; complex analysis travels as pre-read plus walkthrough; sequence is political information.",
            "Confirm what landed, and write the paragraph they can forward unchanged."
          ],
          sources: [
            { name: "Chip & Dan Heath — Made to Stick", note: "the curse of knowledge, named and dissected — chapter one should be mandatory for anyone who writes commentary." },
            { name: "Maister, Green & Galford — The Trusted Advisor", note: "on earning the right to be heard: why the same message lands differently depending on the relationship carrying it." }
          ]
        },
        {
          id: "m2l4",
          title: "Making numbers visible",
          minutes: 15,
          sections: [
            {
              h: "One chart, one message",
              p: `Every chart should have a job: a single message a viewer gets in five seconds. Put that message in the title ("Churn is concentrated in customers onboarded in 2024", not "Churn by cohort"). If a chart needs a paragraph of explanation, it's the wrong chart or the wrong message. The message-title discipline has a diagnostic side-effect: if you can't write the sentence, you don't yet know what the chart is for — which means the chart is decoration, and decoration in a decision pack is cost without revenue. Charts exist to make an argument visible, not to prove data exists.`
            },
            {
              h: "Choose the form from the comparison",
              list: [
                "Change over time → line chart.",
                "Compare categories → horizontal bars, sorted by size (alphabetical order is a filing system, not an argument).",
                "Composition of a whole → stacked bar; avoid pies beyond two or three slices.",
                "Relationship between two measures → scatter.",
                "A single key number → state it big, with its comparison right next to it.",
                "A precise lookup (price list, board appendix) → a well-designed table beats any chart."
              ]
            },
            {
              h: "Declutter ruthlessly, then point",
              p: `Ink that isn't information is friction: heavy gridlines, borders, 3-D effects, legends when direct labels work, ten colours when one plus grey works. Highlight the one series that matters and mute the rest — colour is for pointing, not for decorating. Then annotate: the best charts carry their conclusion on their face ("price rise lands here →"), because packs get forwarded and you won't be there to narrate. The goal is never a pretty chart; it's a chart nobody has to study. Study time is decision time you're spending on formatting.`
            },
            {
              h: "Honesty is a design requirement",
              p: `Visualisation persuades, which means it can mislead — truncated axes that inflate a wiggle into a cliff, dual axes engineered to imply correlation, cumulative curves hiding a slowdown. Partners don't get to do this, and not only ethically: you will present to this audience for years, and the first time someone catches an axis trick, every future chart arrives pre-discounted. House rules worth adopting: bars start at zero; time axes are unbroken; any dual axis needs a stated reason; the underlying table is always available. Persuade with selection and emphasis — never with geometry.`
            }
          ],
          example: {
            title: "From a 48-row table to one decision",
            body: [
              `The monthly ops review contained a 48-row cost-centre table, eight columns: actual, budget, variance, percentage, YTD versions of each. Reading it was a treasure hunt, and the treasure was usually "nothing to see". The partner replaced it with one horizontal bar chart: the eight cost centres with material YTD variances, sorted by size, favourable in grey, adverse in one colour, titled "Two cost centres explain 85% of the overrun — both are contractor spend."`,
              `The first month it ran, the meeting's cost agenda item took six minutes instead of twenty-five, and produced its first actual decision in anyone's memory: a contractor-rate review, owned by procurement, dated. The 48-row table didn't die — it moved to the appendix, where the two analytical stakeholders who genuinely used it could still find it (they were asked; they were the only ones). Everything about the makeover generalises: sort by the argument, colour the exception, title the conclusion, keep the lookup table one click away. The chart didn't summarise the table; it replaced a search task with a stated finding.`
            ]
          },
          mistakes: [
            "Descriptive titles ('Revenue by region') that make the viewer do the analysis you were paid to do.",
            "Pie charts with six slices, unsorted bars, and rainbow palettes — filing systems posing as arguments.",
            "Decorating with colour instead of pointing with it.",
            "Truncated or dual axes that flatter the story — one detected trick discounts years of future charts.",
            "Shipping charts that need you standing next to them; packs travel without their author."
          ],
          exercise: {
            minutes: 15,
            prompt: `Take the most-discussed chart or table in your regular pack. Write its message as a sentence. If you can't, redesign it until you can; if you can, put that sentence in the title, sort/colour to support it, and move everything else to the appendix. Ship the redesign next cycle and count the minutes the agenda item now takes.`
          },
          takeaways: [
            "Put the message in the title; if you can't write the sentence, the chart has no job.",
            "Let the comparison choose the form; sort by the argument, not the alphabet.",
            "Declutter, then point: one highlighted series, annotations that let the chart travel alone.",
            "Never persuade with geometry — axis tricks cost more credibility than they buy emphasis."
          ],
          sources: [
            { name: "Cole Nussbaumer Knaflic — Storytelling with Data", note: "the practical bible of decluttering, emphasis and message-titling for business charts." },
            { name: "Edward Tufte — The Visual Display of Quantitative Information", note: "data-ink, chartjunk and graphical integrity — the foundations everything above rests on." }
          ]
        },
        {
          id: "m2l5",
          title: "Influencing without authority",
          minutes: 15,
          sections: [
            {
              h: "You can't mandate — so persuade",
              p: `Business partners rarely have line authority over the people whose decisions they need to shape. Influence substitutes for authority, and it rests on three pillars: credibility (your track record and command of the facts), reciprocity (the deposits from Module 1 — usefulness given first is repaid), and framing (presenting the choice in terms of what the stakeholder values). None of the three can be improvised on the day; all three are built in the weeks before you need them. This is why influence looks effortless in skilled hands — the visible ask is the last step of an invisible sequence, like the golf swing that took ten years to become natural.`
            },
            {
              h: "Frame in their currency",
              p: `The same recommendation lands differently depending on the frame. To a growth-minded MD, a cost programme is "funding for the expansion without going back to the board". To a risk-averse chair, the same programme is "resilience if the downturn comes". Neither frame is dishonest — you're connecting one truth to what each audience already cares about, and the discipline is that every frame you use must be true. Build the habit of writing a stakeholder's currency next to their name in your map: what are they measured on, what are they afraid of, what do they want to be known for? Recommendations phrased in that currency get engaged with; recommendations phrased in finance's currency get filed.`
            },
            {
              h: "Timing and sequencing: the pre-wire",
              p: `Big recommendations shouldn't premiere in big meetings. Socialise the thinking one-to-one first — the practice consultants call pre-wiring: you'll surface objections while they're cheap to address, recruit allies, let sceptics vent privately rather than perform scepticism publicly, and let stakeholders feel ownership ("as Maria pointed out when we discussed this…"). By the time the formal meeting happens, the decision should mostly be made; the meeting confirms it. Sequence matters within the pre-wire too: start with likely allies (momentum), then the genuinely undecided (persuadable), then opponents (who now face a coalition rather than a proposal). A recommendation that must win its argument live, in front of an audience, against a surprised opponent, was sequenced by an amateur.`
            },
            {
              h: "Challenge without combat",
              p: `Disagreeing with a stakeholder's plan is part of the job. Do it by being hard on the problem and soft on the person: lead with genuine curiosity ("help me understand the assumption behind the volume uplift"), present evidence as a puzzle to solve together, and give them a graceful path to change position — the choreography that lets someone adopt your view as their own refinement rather than their public defeat. Public wins are expensive; private ones are free. And when you win, disappear from the credit: "Marta refined the plan" costs you nothing and buys the next ten challenges. The scoreboard that matters is decisions improved, not arguments won, and the two are usually in tension.`
            }
          ],
          example: {
            title: "Pre-wiring a $3M decision in nine days",
            body: [
              `The recommendation: kill a struggling product line and redeploy its $3M budget into the two lines outgrowing capacity. Analytically obvious for a year; politically impossible, because the struggling line was the COO's original brainchild. The partner's sequence, reconstructed from her calendar: Day 1 — thirty minutes with the head of sales (known frustrated by the line): shown the numbers, asked to challenge them, converted into an ally who'd speak first in any meeting. Day 3 — the CFO: not for permission, for calibration ("what would the board need to see?"). Day 4 — the strategy director, genuinely undecided: given the driver tree and a week to poke holes; two of his objections were real and improved the paper.`,
              `Day 8 — the COO, privately, with the crucial framing: not "your line failed" but "the market moved; the capital could fund the expansion you've been asking for since March — and you're the only one who can credibly reallocate it." A day to think, no audience watching. Day 9: the COO asked for one change (a wind-down period protecting key staff — a genuine improvement) and agreed to co-present. The investment committee meeting lasted eighteen minutes and was unanimous; attendees later described the decision as "obvious". It was — after nine days of making it obvious one conversation at a time. Total analysis in the final paper: four pages. Total analysis that existed: forty. The ratio is the lesson.`
            ]
          },
          mistakes: [
            "Premiering big recommendations in big meetings and being surprised by performed scepticism.",
            "Framing every proposal in finance's currency (NPV, variance) instead of the listener's (growth, risk, reputation).",
            "Pre-wiring opponents first, giving them a week to organise resistance before you have allies.",
            "Winning the argument publicly and losing the relationship that all future arguments depend on.",
            "Claiming credit for changed minds — the fastest way to ensure no mind changes for you again."
          ],
          exercise: {
            minutes: 15,
            prompt: `Take a recommendation you'll make in the next month. Write the pre-wire plan: every stakeholder who matters, ally/undecided/opponent, their currency, the order you'll see them, and the one question you'll open each conversation with. The plan should fit on half a page — and change your calendar this week.`
          },
          takeaways: [
            "Influence = credibility + reciprocity + framing, all built before the day they're needed.",
            "Frame each recommendation in the listener's currency; every frame must be true.",
            "Pre-wire in sequence — allies, undecideds, opponents — so the meeting confirms rather than decides.",
            "Be hard on the problem, soft on the person; spend credit on the decision, not the scoreboard."
          ],
          sources: [
            { name: "Robert Cialdini — Influence", note: "reciprocity, commitment/consistency, social proof — the evidence base under the three pillars." },
            { name: "John Kotter & Lorne Whitehead — Buy-In", note: "a field guide to how good ideas get shot down in meetings, and the responses that save them." }
          ]
        }
      ],
      workshop: {
        title: "Workshop 2 — Rewrite the commentary",
        brief:
          "Take a real (or realistic) piece of monthly variance commentary from your " +
          "world and rebuild it as insight. Use the commentary template and chart " +
          "checklist from this module's toolkit.",
        steps: [
          "Pick one month's commentary or a recent analysis you produced (or write a typical 'revenue up X%, costs down Y%' example).",
          "For each point, ask 'so what?' until you reach something a decision-maker cares about, then 'now what?' until you have a recommendation. Cut anything that survives neither.",
          "Restructure top-down: one headline sentence, up to three supporting points, one recommendation — under 120 words.",
          "Rewrite it for a non-finance operations leader: no undefined jargon, one concrete translation of the biggest number.",
          "Redesign (or describe) the single chart that would carry the headline, with the message as its title.",
          "Write the half-page pre-wire plan for the recommendation it contains: who hears it, in what order, in what currency."
        ],
        deliverable:
          "Paste your rewritten headline and recommendation below — one sentence each — " +
          "plus the first name on your pre-wire sequence and why they're first."
      },
      tools: [
        {
          id: "commentary-template",
          title: "Decision commentary template",
          desc: "The answer-first monthly commentary structure, with the so-what checklist built in.",
          body: `# Decision Commentary — template (target: under 120 words)

**HEADLINE** (a claim with a 'therefore', not a description):
> e.g. "We're winning revenue and losing margin — the mix shift causing it is accelerating."

**MECHANISM** (2 sentences max — what is causing the headline):

**TRAJECTORY** (quantified 'if this holds…'):
> "If X continues at this rate, [result] by [date] (~$____)."

**DECISION NEEDED** (one sentence, with the owner named):

**RECOMMENDATION** (yours, committed):

**One concrete translation** (the number that must be remembered, converted):
> "That's the entire profit of ____," / "____ months of runway," / "____ headcount."

---
## Pre-flight checklist
- [ ] Headline completes "…and therefore we should…"
- [ ] Every paragraph survived 'so what?' — everything else is in the appendix
- [ ] Comparison chosen for the decision (incl. vs the original approval assumption?)
- [ ] Written at the reader's altitude; jargon translated
- [ ] There's a paragraph the reader can forward to their boss unchanged
- [ ] Bad news in here? Then it was delivered in person BEFORE this shipped.
`
        },
        {
          id: "chart-checklist",
          title: "Chart & pack design checklist",
          desc: "Form selection, declutter list, honesty rules — run every pack through it.",
          body: `# Chart & Pack Design Checklist

## Form: let the comparison choose
| You're showing | Use |
|---|---|
| Change over time | Line |
| Category comparison | Horizontal bars, sorted by size |
| Composition | Stacked bar (pie only if ≤3 slices) |
| Relationship | Scatter |
| One key number | Big number + its comparison beside it |
| Precise lookup | Table (right-aligned numbers, consistent decimals) |

## Per chart
- [ ] Message written as a sentence → it IS the title
- [ ] One series highlighted; everything else muted grey
- [ ] Direct labels instead of a legend where possible
- [ ] Annotation on the face ("price rise lands here →") so it travels alone
- [ ] Gets its point across in 5 seconds to someone who didn't build it

## Declutter pass (delete unless it carries information)
Gridlines · borders · 3-D · background fills · repeated axis labels ·
legend (if labels work) · every colour beyond highlight + grey

## Honesty rules (non-negotiable)
- Bars start at zero. Time axes unbroken.
- Dual axes only with a stated reason on the chart.
- The underlying table is always available on request.
- Emphasis persuades; geometry never does.
`
        },
        {
          id: "influence-plan",
          title: "Influence plan (pre-wire worksheet)",
          desc: "Half-page plan for socialising a recommendation: stakeholders, currencies, sequence, openers.",
          body: `# Influence Plan — pre-wire worksheet

**The recommendation (one sentence):**

**Decision forum & date:**

## Stakeholders
| Name | Stance (ally/undecided/opponent) | Their currency (measured on / fears / wants) | The recommendation in THEIR currency |
|---|---|---|---|

## Sequence (allies → undecided → opponents)
1. ____ — opener: "____________" — goal of the conversation: ____
2. ____ — opener: "____________" — goal: ____
3. ____ — opener: "____________" — goal: ____

## For each conversation
- Ask before telling: "help me understand…" / "what would make this wrong?"
- Objections heard (they're free intelligence — log them):
- What they'd need changed to support it:
- Ownership hook ("as ____ pointed out…"):

## The graceful path (for the opponent)
What version of 'yes' lets them win? What do they get to improve or co-present?

## Rule of thumb
If the recommendation must win its argument live, in front of an audience,
against a surprised opponent — the sequencing failed. Fix it before the meeting.
`
        }
      ],
      quiz: {
        title: "Module 2 knowledge check",
        questions: [
          {
            q: "'Travel spend is 12% over budget' is best described as:",
            options: [
              "An insight, because it compares against budget",
              "Information — organised data that hasn't yet answered 'so what?'",
              "An action, because someone will have to cut travel",
              "A recommendation"
            ],
            answer: 1,
            explain: "It's organised data with a comparison, but it hasn't reached meaning ('why, and what does it signify?') or action ('what should we do?'). That climb is the partner's job."
          },
          {
            q: "The best place for your conclusion when presenting to executives is:",
            options: [
              "At the end, after the evidence has built up to it",
              "In the appendix, to be raised if asked",
              "First, followed by the supporting evidence",
              "Left implicit so executives draw it themselves"
            ],
            answer: 2,
            explain: "Answer first. Executives decide within seconds whether to keep engaging; suspense is for novels, not boardrooms."
          },
          {
            q: "In situation–complication–resolution, the 'complication' is:",
            options: [
              "A detailed technical explanation of methodology",
              "The tension or problem that disturbs the agreed situation and makes people care",
              "A list of all variances over threshold",
              "The most complicated chart in the pack"
            ],
            answer: 1,
            explain: "The complication is what creates stakes — 'growth is fine, BUT it all depends on one customer now tendering'. Without it, there's no reason to care about the resolution."
          },
          {
            q: "'EBITDA margin compression from adverse mix' said to an ops leader should become:",
            options: [
              "'Please review the EBITDA bridge in appendix 4'",
              "'We're selling more of the products we make less money on'",
              "'Margins are down 240 basis points'",
              "'Mix variance is unfavourable'"
            ],
            answer: 1,
            explain: "Translate the substance into business language. Basis points and 'mix variance' are still finance dialect; appendix references dodge the job entirely."
          },
          {
            q: "A stakeholder always asks for the bottom line and gets impatient with detail. You should:",
            options: [
              "Send the full model so they learn to value rigour",
              "Give one page: recommendation up top, key numbers, options — detail available on request",
              "Stop communicating with them and go through their analyst instead",
              "Present exactly as you would to your finance team"
            ],
            answer: 1,
            explain: "Match the person's style. A 'driver' wants headline and action; keep the workings ready for when they ask."
          },
          {
            q: "Which pairing of comparison and chart is correct?",
            options: [
              "Change over time → pie chart",
              "Compare categories → line chart",
              "Change over time → line chart",
              "Single key number → 3-D column chart"
            ],
            answer: 2,
            explain: "Lines show change over time; sorted horizontal bars compare categories; a single key number is stated big with its comparison; pies and 3-D rarely earn their place."
          },
          {
            q: "The best title for a chart showing churn concentrated in the 2024 cohort is:",
            options: [
              "'Churn analysis'",
              "'Churn by cohort, FY2023–FY2026'",
              "'Churn is concentrated in customers onboarded in 2024'",
              "'Figure 3'"
            ],
            answer: 2,
            explain: "Put the message in the title. Descriptive titles make the viewer do the work; message titles do it for them."
          },
          {
            q: "How should significant bad news reach a stakeholder first?",
            options: [
              "In the monthly report, where all news belongs",
              "By email, so there's a record",
              "Face-to-face or by video, before anything written",
              "Via their assistant"
            ],
            answer: 2,
            explain: "Bad news lands in person first — it preserves trust, allows questions, and prevents the stakeholder being blindsided in writing or in public."
          },
          {
            q: "Influence without authority rests on:",
            options: [
              "Escalating to the CFO whenever the business disagrees",
              "Credibility, reciprocity, and framing choices in the stakeholder's currency",
              "Controlling the budget approval process",
              "Withholding analysis until stakeholders cooperate"
            ],
            answer: 1,
            explain: "Partners rarely have line authority. Influence comes from track record, the relationship balance you've built, and framing recommendations in terms of what the audience values."
          },
          {
            q: "Why socialise a big recommendation one-to-one before the formal meeting?",
            options: [
              "To ensure the meeting can be cancelled",
              "To surface objections cheaply, recruit allies, and build ownership before the decision point",
              "Because formal meetings are inappropriate for recommendations",
              "To find out who to exclude from the meeting"
            ],
            answer: 1,
            explain: "Big ideas shouldn't premiere in big meetings. Early one-to-ones make objections cheap to address and turn stakeholders into co-owners."
          }
        ]
      }
    },

    /* ================= MODULE 3 ================= */
    {
      id: "m3",
      title: "The Advisor's Seat: Strategy, Decisions and Hard Calls",
      weeks: "Weeks 5–6",
      intro:
        "Bringing the strategic lens to partnering: human-centred problem solving, " +
        "confident recommendations under uncertainty, forecasts and scenarios the " +
        "business actually uses, and the hard conversations that come with the " +
        "trusted-advisor seat.",
      lessons: [
        {
          id: "m3l1",
          title: "The strategic lens",
          minutes: 15,
          sections: [
            {
              h: "Strategy is resource allocation",
              p: `Whatever the strategy document says, the real strategy is where the money, people and time actually go — and finance is the custodian of that allocation. A budget rolled forward as "last year plus 3%" is a decision to keep yesterday's strategy, made silently, by default, every year. A strategic partner tests every allocation against the stated priorities and makes the mismatches visible: if digital is the priority, why did its funding shrink? Run the audit annually — map spend movement against strategic priority — and present the result as one chart. In most organisations this chart has never existed, and its first appearance changes the budget conversation permanently, because "we say X and fund Y" is unanswerable except by moving money.`
            },
            {
              h: "Know where the business wins",
              p: `Every business wins somewhere specific — certain customers, products, capabilities or cost positions competitors can't easily match; strategy scholars call it the answer to "where do we play, and how do we win?". Proposals that strengthen that advantage deserve different treatment from proposals that merely clear a hurdle rate. Two projects with the same NPV are not the same decision if one builds the moat and the other builds a side bet — the spreadsheet can't see the difference, which is precisely why the partner must. Add a strategic-fit line to every investment paper you touch: one sentence on how this strengthens (or dilutes) where the business wins. The discipline costs nothing and quietly upgrades the whole portfolio conversation.`
            },
            {
              h: "Guard the long term",
              p: `Most short-term profit levers — cutting maintenance, brand spend, training, R&D — quietly tax future performance. Because those costs hit the P&L now while the damage arrives later, someone has to make the trade-off explicit. That someone is you: "we can hit this year's number this way, and here is what it borrows from the next three years." Bad strategy, as Rumelt puts it, is often not evil — it's fluff and wishful thinking papering over a refusal to face the trade-off. Your job is to put the trade-off on the table in numbers, then let leadership choose with eyes open. Sometimes they'll still take the short-term lever; that's their call. What can't happen on a partner's watch is the borrowing occurring invisibly.`
            },
            {
              h: "Zoom out, zoom in",
              p: `Strategic partners switch altitude deliberately. Zoom out: what does this month's variance say about our position — is the price pressure cyclical or structural? Is this customer loss noise, or the first evidence that our where-to-play has moved? Zoom in: what specifically do we do about it this quarter? Analysis that stays zoomed in is bookkeeping; analysis that stays zoomed out is hand-waving. Insight lives in the movement between the two, and the movement can be scheduled: once a quarter, take your three biggest variances and write one paragraph each on what they might mean strategically. Most will mean nothing. The one that means something is worth the whole exercise.`
            }
          ],
          example: {
            title: "The reallocation chart that ended budget theatre",
            body: [
              `A services group's strategy deck had said "shift to recurring managed-services revenue" for three consecutive years. The new finance partner built one chart for the budget kickoff: five years of investment spend (capex, hiring, marketing) split between the legacy project business and the strategic managed-services business. The strategic priority had received between 9% and 12% of investment every year. The legacy business — explicitly designated "maintain and milk" in the same strategy deck — had received the rest.`,
              `The chart was on screen for four minutes and the room was quiet for one of them. The CEO's eventual comment: "So we've been paying for the old strategy and presenting the new one." That budget cycle, for the first time, started from allocation targets (40% of discretionary investment to managed services) instead of from last year's numbers, and three legacy-business projects that would have rolled forward by habit were killed to fund the shift. Nothing about the analysis was sophisticated — it was an allocation audit any analyst could build in two days. Its power was that it converted an abstract accusation ("we don't fund our strategy") into an undeniable picture, and that finance was the only function with the data and the independence to draw it.`
            ]
          },
          mistakes: [
            "Treating the budget as arithmetic (last year ± x%) instead of as the strategy's annual referendum.",
            "Evaluating investments on NPV alone when two identical NPVs can be one moat and one side bet.",
            "Letting short-term levers (maintenance, brand, R&D cuts) borrow from future years invisibly.",
            "Living at one altitude — permanent zoom-in is bookkeeping, permanent zoom-out is hand-waving.",
            "Announcing strategic mismatches in the big meeting before pre-wiring the leaders whose budgets the chart indicts."
          ],
          exercise: {
            minutes: 20,
            prompt: `Build the two-column list: your organisation's three stated strategic priorities on the left; on the right, your honest estimate of the share of discretionary spend and new hiring each received last year. If you can't fill the right column, that's this month's analysis. If you can, and the columns disagree — draft the chart.`
          },
          takeaways: [
            "The real strategy is where resources actually go — audit allocation against stated priorities annually.",
            "Add a strategic-fit sentence to every investment paper; identical NPVs can be entirely different decisions.",
            "Make short-term/long-term trade-offs explicit in numbers before they're taken silently.",
            "Schedule the altitude switch: quarterly, ask what your biggest variances mean for the strategy."
          ],
          sources: [
            { name: "Richard Rumelt — Good Strategy Bad Strategy", note: "the kernel of good strategy, and why most 'strategy' is goals plus fluff — sharpens every allocation conversation." },
            { name: "Lafley & Martin — Playing to Win", note: "where-to-play / how-to-win as the test your strategic-fit sentence applies to every proposal." }
          ]
        },
        {
          id: "m3l2",
          title: "Human-centred problem solving",
          minutes: 15,
          sections: [
            {
              h: "Solve the right problem",
              p: `Half of bad analysis is good analysis of the wrong question. Before modelling, write a one-sentence problem statement with the decision-maker and get it agreed: "We need to decide whether to renew the Auckland lease by 30 September, given hybrid working has halved occupancy." A good statement names the decision, the deadline and the context — and rules half the possible analysis out of scope, which is precisely its value. Problem definition is where senior people earn their money; the structured problem-solving literature is unanimous that the minutes spent here repay themselves tenfold downstream. If the decision-maker won't agree a sentence, that itself is the finding: there is no decision yet, and analysis is premature.`
            },
            {
              h: "Go to the root cause",
              p: `Ask "why" repeatedly until you pass symptoms and reach causes — the five-whys discipline Toyota built into its production system. Revenue is down → because volumes fell → because deliveries were late → because a supplier changed spec → because procurement switched to save 3%. The fix at the root (supplier qualification standards) is different — and cheaper — than the fix at the symptom (discounting to win volume back, which adds a margin problem to a volume problem). Two cautions from practice: stop when the "why" leaves your organisation's control ("because the economy" is not actionable), and beware single-cause stories — big effects usually have two or three roots, and the five-whys chain can be run down each branch.`
            },
            {
              h: "Start with the people inside the problem",
              p: `Human-centred means understanding the problem as the people inside it experience it. Before recommending a fix to a process, watch the process and talk to the people who run it. They usually know both the real cause and the workable fix; the analysis's job is often to quantify and legitimise what the floor already knows but has been unable to get heard. This is also insurance: recommendations built without the operators reliably die in implementation, because the people who could have told you why it wouldn't work were never asked — and they remember that when asked to make it work. An hour on the floor before a fortnight in the model is the best-returning hour in analytical life.`
            },
            {
              h: "Options, criteria, then choice",
              p: `Present real options — including "do nothing" as a priced baseline, because doing nothing is always available and never free — and evaluate them against criteria agreed before anyone anchors on an answer: financial impact, risk, speed, strategic fit, people impact. Agreeing the criteria first turns an argument about opinions into a conversation about evidence, and it protects you from the oldest trick in corporate decision-making: choosing the answer first and reverse-engineering the criteria that crown it. When stakeholders resist agreeing criteria upfront, that resistance is information — someone already has an answer they're protecting.`
            }
          ],
          example: {
            title: "The five whys that saved a discount",
            body: [
              `Symptom: a distribution business's revenue was down 7% in a key region, and the regional manager wanted an emergency 10% discount programme ($800k cost) to win volume back. The partner asked for two weeks before the discount went to committee — and spent the first three days not in the model but riding along with two delivery drivers and sitting with the customer-service team.`,
              `The chain: revenue down → because order volumes from the top 20 accounts fell → because delivery reliability had slipped from 96% to 81% → because the afternoon routes were consistently over capacity → because the new routing software had been configured with the depot's OLD loading times → because the vendor's implementation used default settings and nobody on the floor had been asked to validate them. The drivers knew. They'd been reporting it for six weeks into a ticket queue nobody triaged. The fix cost $12k of consultant reconfiguration and a fortnight; reliability recovered to 95% within a month, and volumes followed the next quarter. The $800k discount would have treated the symptom, taught key accounts to wait for discounts, and left the routing broken. The partner's actual contribution wasn't analytical brilliance — it was refusing to model a solution before walking the problem, and giving the floor's knowledge a quantified voice the committee could hear.`
            ]
          },
          mistakes: [
            "Modelling before agreeing the one-sentence problem statement — a fortnight of analysis on an unagreed question.",
            "Stopping the whys at the first plausible cause (usually a symptom wearing a cause's badge).",
            "Diagnosing processes from the data warehouse without talking to the people inside them.",
            "Omitting the priced 'do nothing' baseline, which flatters every other option.",
            "Letting criteria be written after the preferred answer is known — reverse-engineered objectivity."
          ],
          exercise: {
            minutes: 15,
            prompt: `Take a problem currently on your desk. Write the one-sentence problem statement (decision, deadline, context) and get the decision-maker to agree or amend it this week. Then run five whys on the symptom — and note where the chain would require you to actually go and look rather than query the warehouse.`
          },
          takeaways: [
            "Agree a one-sentence problem statement before any modelling; refusal to agree is itself a finding.",
            "Ask 'why' past symptoms to root causes; branch when there's more than one root, stop at the edge of control.",
            "Walk the problem before modelling it — the floor usually knows, and quantifying its knowledge is the job.",
            "Agree decision criteria before evaluating options, and always price 'do nothing'."
          ],
          sources: [
            { name: "Conn & McLean — Bulletproof Problem Solving", note: "the seven-step structured problem-solving method; chapters on problem definition and disaggregation map directly onto this lesson." },
            { name: "Taiichi Ohno — Toyota Production System", note: "the origin of the five whys, from the man who institutionalised asking them." }
          ]
        },
        {
          id: "m3l3",
          title: "Confident recommendations under uncertainty",
          minutes: 15,
          sections: [
            {
              h: "Have a view",
              p: `"Here are three options" is analysis. "Here are three options and we recommend the second, because…" is partnering. Stakeholders can disagree with your recommendation, but they should never have to guess it. A partner who won't commit to a view is renting out a calculator — and executives, who must commit publicly to decisions every week, notice exactly who shares that risk with them and who watches from the safety of the options slide. Committing also improves the analysis itself: the moment you must recommend, you discover which assumptions you actually believe, which sensitivities actually scare you, and which option you've been unconsciously protecting.`
            },
            {
              h: "Show your assumptions, not just your answer",
              p: `Confidence under uncertainty comes from transparency, not bravado. State the two or three assumptions the recommendation hinges on, show the range ("NPV is positive from 4% growth upward; we've assumed 6%"), and name what would change your mind — the single sentence that most reliably disarms hostile questioning, because it converts your recommendation from a position to be attacked into a hypothesis to be tested together. This lets stakeholders stress your logic instead of your credibility. It also sets up honest updating later: when the world moves, you revise the stated assumption rather than quietly re-deriving a new story, and your forecast record stays auditable — which, over years, is what a reputation for judgment is made of.`
            },
            {
              h: "Scenarios and pre-mortems",
              p: `For material decisions, model best / base / worst rather than one number — three coherent stories, not one number ± 10% (a worst case that's just "base minus a bit" has failed to imagine anything actually going wrong). Then run a pre-mortem, Gary Klein's technique: "It's two years on and this decision failed — what killed it?" The framing matters psychologically: asked for objections, people self-censor to protect the room's mood and their own standing; asked to explain a stipulated failure, the same people generate risks fluently, because imagination has been given permission that criticism is denied. The two or three most credible killers get mitigations, and the mitigations go into the recommendation. A pre-mortem takes fifteen minutes and has the best insight-per-minute ratio of any technique in this course.`
            },
            {
              h: "The one-page recommendation",
              list: [
                "The decision needed, and by when.",
                "Recommendation in one sentence, with the primary reason.",
                "Options considered — including priced 'do nothing' — scored against the agreed criteria.",
                "Key assumptions, the sensitivity that matters most, and 'what would change our mind'.",
                "Risks and mitigations from the pre-mortem.",
                "What you need from the decision-maker today.",
                "Everything else — the model, the data, the method — is appendix. One page is a discipline, not a limit on rigour: it proves the thinking compressed."
              ]
            }
          ],
          example: {
            title: "A one-pager, miniaturised",
            body: [
              `Decision needed: replace the 40-vehicle delivery fleet on diesel like-for-like, or begin electrification — commit by 30 November (lease expiries). Recommendation: electrify the 12 urban-route vehicles now, defer the regional 28 to the 2028 cycle. Primary reason: urban routes are where EV economics already clear our hurdle (duty cycles under 140km/day, depot charging feasible) — and where diesel-access regulation risk is concentrated.`,
              `Options: (1) all-diesel like-for-like — lowest capex, carries regulatory risk on urban routes, priced baseline; (2) full electrification — best emissions story, −$1.9M NPV at current regional route lengths and charging costs; (3) recommended split — +$0.6M NPV, contains the risk, builds operating experience before the big cycle. Key assumptions: energy price corridor $0.18–0.31/kWh (recommendation survives the whole corridor); battery-range degradation ≤15% over lease term (vendor-guaranteed). What would change our mind: regional charging infrastructure costs falling ~30%, or diesel-ban timelines accelerating — both being watched quarterly. Pre-mortem top risk: depot charging installation slips past lease expiry, stranding routes — mitigation: installation begins before vehicle orders, with a diesel short-lease bridge priced ($90k) as insurance. Ask today: approve the split and the charging capex gate. — The whole thing fits on one page, and the committee that read it made the decision in twelve minutes. The forty-page appendix was opened by one member. That is the correct ratio.`
            ]
          },
          mistakes: [
            "Presenting options without a recommendation — renting out a calculator while the decision-maker carries all the risk.",
            "Point estimates with invisible assumptions, defended as positions instead of offered as hypotheses.",
            "A 'worst case' that's just base-minus-10% — scenario theatre that has imagined nothing.",
            "Skipping the pre-mortem because the room feels positive (exactly the room that needs one).",
            "Padding the one-pager back into forty pages out of fear — compression is the credential."
          ],
          exercise: {
            minutes: 25,
            prompt: `Take a live decision you're near and write the one-pager using the skeleton above — including the sentence 'what would change our mind'. Then run a personal pre-mortem: it's two years on, the recommendation failed; write the three most plausible causes and one mitigation each. Fold the best mitigation into the page.`
          },
          takeaways: [
            "Always land on a recommendation — options alone leaves the decision-maker alone with the risk.",
            "Expose assumptions, ranges and 'what would change my mind'; let them stress the logic, not your credibility.",
            "Use three coherent scenarios and a pre-mortem — stipulated failure unlocks risks that invited objections never surface.",
            "One page: decision, recommendation, options, assumptions, risks, ask. The appendix holds everything else."
          ],
          sources: [
            { name: "Gary Klein — 'Performing a Project Premortem' (Harvard Business Review, 2007)", note: "the original two-page description of the technique; fifteen minutes to read, career-long returns." },
            { name: "Tetlock & Gardner — Superforecasting", note: "calibration, ranges and updating — the evidence for why stated assumptions and revisable views outperform confident point estimates." }
          ]
        },
        {
          id: "m3l4",
          title: "Hard conversations and guiding through uncertainty",
          minutes: 15,
          sections: [
            {
              h: "Deliver bad news well",
              p: `Early, in person, and with a path forward. "The project is tracking 20% over; here's why, here's the choice we now face, and here's what I recommend" preserves trust. Sitting on bad news until it's undeniable destroys it — the cover-up costs more credibility than the news ever would, and executives are connoisseurs of exactly this difference. Structure the conversation in three beats: the fact, cleanly, without cushioning that buries the headline; the mechanism, briefly, without blame theatre; the path, concretely, with your recommendation. People forgive bad numbers delivered early with options attached. They do not forgive surprises, and they never forget who let them be surprised in front of their board.`
            },
            {
              h: "Saying no like a partner",
              p: `A flat "no, there's no budget" is scorekeeping. A partner's no is a redirect: "We can't fund all of it this year. We could fund the pilot now and revisit at half-year, or trade it against project X — which outcome matters more to you?" You're holding the constraint while staying on the stakeholder's side of the table — the separation of the people from the problem that principled negotiation is built on. The pattern generalises: acknowledge the underlying interest (they don't want budget; they want the outcome the budget buys), restate the constraint honestly, then offer the paths that exist inside it. Stakeholders can accept "no" to a number far more easily than "no" to being taken seriously.`
            },
            {
              h: "When the pushback gets hard",
              p: `Stay curious rather than defensive: "what am I missing?" is stronger than restating your case louder, and it's occasionally sincere — sometimes you are missing something, and the fastest way to find out is to ask the person shouting. If new information emerges, update your view visibly; changing your mind on evidence builds credibility rather than spending it. If it doesn't, hold your position calmly, put both views on paper, and let the decision-maker decide with eyes open: "Operations projects 6% growth; finance's independent view is 3–4%; the paper shows both and the investment case at each." You're paid for your honest view, not for winning — and the written both-views paragraph is the professional's alternative to both surrender and war.`
            },
            {
              h: "Be the calm in ambiguity",
              p: `In genuinely uncertain moments — a downturn, a restructure, a shock — the partner's job is to give the business a way to think: what we know, what we don't, the range of outcomes, the triggers we're watching, and the decisions we can defer versus the ones we can't. Structure is the gift you bring when certainty isn't available, and it's calming precisely because it converts dread (unbounded) into risk (bounded, watchable, actionable). The five-part frame above fits on one slide and can be redrawn weekly as the picture sharpens. In every crisis, someone becomes the person the room looks at when the question is "so what do we actually do?" — the frame is how finance earns that look.`
            }
          ],
          example: {
            title: "Two scripts: the overrun, and the no",
            body: [
              `The overrun, delivered at week 3 instead of week 11: "Dana — the platform migration is tracking 20% over, about $340k. Cause: the data-cleansing effort was underscoped; the vendor's estimate assumed cleaner records than we have. Choice: absorb it and cut the training phase (saves $300k, risks adoption), or extend by six weeks at full scope. I recommend the extension — adoption risk is where these projects actually die — and I've found $200k of the gap in the contingency line. Wanted you to have this before Thursday's steering committee, so nothing surprises you there." Total: 30 seconds. Dana co-presented the extension at steering; the partner's stock rose on a project overrun.`,
              `The no, redirected: a marketing VP requests $500k for an unbudgeted brand campaign. Scorekeeper version: "There's no budget line for this." Partner version: "There's no headroom this year without trading something. Two paths inside the constraint: a $150k pilot in Q4 measured hard, full spend contingent on results in next year's budget — or you and I make the case together to trade it against the events programme, which your own attribution numbers say underperforms. Which outcome matters more — speed or scale?" The VP took the pilot, the pilot underperformed, and the VP — not finance — killed the full campaign. The constraint held itself; the relationship never noticed the 'no'.`
            ]
          },
          mistakes: [
            "Cushioning bad news until the headline is unfindable — or sitting on it until it's a surprise with your name on it.",
            "The flat 'no budget' that answers the request and ignores the interest underneath it.",
            "Meeting pushback with volume instead of curiosity; defending the analysis as if it were your honour.",
            "Splitting the difference on numbers to end conflict — both-views-on-paper beats fake convergence.",
            "Offering commentary in a crisis when the room needs a frame: known / unknown / range / triggers / decisions."
          ],
          exercise: {
            minutes: 15,
            prompt: `Write the 30-second script for one piece of bad news you're currently sitting on (fact → mechanism → path, with your recommendation). Then book the conversation — in person — before the news finds another route. If you have no bad news, script your last flat 'no' as a redirect instead.`
          },
          takeaways: [
            "Bad news: early, in person, fact-mechanism-path, with a recommendation attached.",
            "Say no by redirecting to what's possible inside the constraint — answer the interest, not just the request.",
            "Meet pushback with curiosity; update visibly on evidence, or put both views on paper and let the owner decide.",
            "In ambiguity, provide the frame: known / unknown / range / triggers / decisions-now vs decisions-later."
          ],
          sources: [
            { name: "Stone, Patton & Heen — Difficult Conversations", note: "the three-conversations model underneath every hard exchange; the source of separating fact from blame from feeling." },
            { name: "Fisher & Ury — Getting to Yes", note: "separating people from the problem and positions from interests — the machinery inside the partner's 'no'." }
          ]
        },
        {
          id: "m3l5",
          title: "Forecasts and scenarios people actually use",
          minutes: 15,
          sections: [
            {
              h: "Forecast, target, budget: three different animals",
              p: `Much forecasting dysfunction comes from collapsing three distinct things into one number. The target is aspirational — what we're striving for, set to stretch. The budget is permissive — what you may spend, a control mechanism. The forecast is predictive — your honest best estimate of what will actually happen, given everything known today. When one number is forced to do all three jobs, it does none: forecasts get "negotiated" upward to protect targets, budgets sandbag downward to protect bonuses, and the organisation loses its only honest picture of the future. The partner's first forecasting reform is linguistic: insist the three words mean three things, and publish the forecast as a forecast — "this is what we believe will happen" — even when, especially when, it disagrees with the target.`
            },
            {
              h: "Driver-based and rolling, not line-by-line and annual",
              p: `A forecast built by asking every cost centre to re-guess every GL line is expensive theatre. Build it instead on the driver tree from Module 1: forecast the six or eight drivers (volume, price, churn, utilisation, headcount), let the model translate them into financials, and spend the freed effort on the drivers themselves — where the actual uncertainty lives. Then make it rolling: always looking 4–6 quarters ahead, updated quarterly (or monthly for the volatile drivers), so the horizon doesn't shrink to zero every December and the annual forecast panic disappears. The Beyond Budgeting movement has documented for two decades that organisations run better on rolling driver-based forecasts than on annual budget rituals; you don't need to adopt the whole philosophy to steal its best tool.`
            },
            {
              h: "Ranges, bias, and keeping score",
              p: `A single-number forecast is a lie about certainty. Give the range and the shape: "central estimate $42M; we'd be surprised below $39M or above $44M; the downside has more room than the upside because of the GrocerCo tender." Then keep score in public — the step that separates forecasting from astrology. Two numbers per quarter: bias (are we systematically high or low? by how much?) and calibration (did outcomes land inside our stated ranges about as often as claimed?). The forecasting research is unambiguous: tracked, scored forecasters improve rapidly; untracked ones repeat their favourite error for decades. Publishing your own score is also the credibility play — "our last eight forecasts averaged 2% optimistic; we've corrected for it" is a sentence that buys more trust than any single accurate quarter.`
            },
            {
              h: "Scenarios: two uncertainties, three stories, named triggers",
              p: `Scenario planning goes wrong by producing either arithmetic (base ± 10%) or literature (twenty-page narratives nobody operationalises). The working method: identify the two uncertainties that dominate your next 18 months (a customer concentration, a regulation, an input price, a demand break); build three coherent stories around how they could resolve; quantify each through the driver tree; and — the step that makes it a tool instead of a workshop — attach triggers and pre-agreed responses to each: "if the tender is lost (trigger: formal notice, watched monthly), the response is the cost bridge on page 4, activated within 30 days, owner named." Scenarios with triggers convert future panic into present procedure. When the bad quarter arrives, the organisation that did this doesn't hold an emergency strategy meeting; it opens the drawer.`
            }
          ],
          example: {
            title: "Scenario-planning a 31% customer",
            body: [
              `A manufacturer's largest customer — 31% of revenue — announced a supply tender for the following year. Leadership's instinct split between denial ("we've held them for a decade") and panic (a pre-emptive 15% price cut). The partner built the scenario set in a week. Dominant uncertainties: tender outcome (hold / lose half / lose all) and timing (mid-year vs year-end transition). Three stories, each run through the driver tree: HOLD — revenue flat, margin −120bps from tender pricing; PARTIAL — revenue −16%, EBITDA −$2.1M, breakeven preserved only if the contingency cost bridge fires within 60 days; LOSE — revenue −31%, requires the full bridge plus the mothballing of line 2, cash still positive to 14 months.`,
              `Triggers were named and owned: procurement contact going quiet >3 weeks (early warning, sales owner), tender shortlist announcement (formal trigger, CEO informed same day), award notice (activates the pre-approved bridge — $1.8M of cost actions sequenced and signed off in advance, when signing was cheap and calm). The tender was partially lost eight months later. The bridge activated in 23 days; the year ended at breakeven instead of the −$2.1M the unprepared version implied; and the board minute recorded that the response plan "predated the event" — a sentence worth more to finance's standing than five clean audits. Total cost of the exercise: one analyst-week and one uncomfortable workshop. The alternative — the panicked pre-emptive price cut — would have cost $1.4M a year and probably not held the tender anyway.`
            ]
          },
          mistakes: [
            "Letting one number serve as target, budget and forecast — and losing the honest picture to negotiation.",
            "Re-guessing every GL line instead of forecasting the handful of drivers that carry the uncertainty.",
            "Single-point forecasts with no range, no shape, and no memory of last quarter's miss.",
            "Never keeping score — bias you don't measure is bias you keep.",
            "Scenarios without triggers and pre-agreed responses: a workshop, not a tool; literature, not planning."
          ],
          exercise: {
            minutes: 20,
            prompt: `Name the two uncertainties that dominate your organisation's next 18 months. Sketch the three stories, even roughly quantified. Then write ONE trigger sentence for the worst story: 'if [observable event], watched [how/frequency], then [pre-agreed response], owner [name], within [days].' That sentence is the difference between scenario theatre and a drawer worth opening.`
          },
          takeaways: [
            "Target, budget, forecast: three words, three jobs — collapse them and the honest future disappears.",
            "Forecast the drivers, not the GL lines; make it rolling so the horizon never hits zero.",
            "Publish ranges, then keep public score on bias and calibration — scored forecasters improve, unscored ones don't.",
            "Scenarios earn their keep through named triggers and pre-agreed responses: convert future panic into present procedure."
          ],
          sources: [
            { name: "Tetlock & Gardner — Superforecasting", note: "the case for ranges, scoring and updating; what measurably separates good forecasters from confident ones." },
            { name: "Hope & Fraser — Beyond Budgeting", note: "rolling driver-based forecasts versus annual budget ritual — the organisational evidence." }
          ]
        }
      ],
      workshop: {
        title: "Workshop 3 — The one-page recommendation",
        brief:
          "Build a real recommendation using the full Module 3 toolkit, end to end. " +
          "Use the one-page template and pre-mortem script from this module's tools.",
        steps: [
          "Choose a live decision in your organisation that finance should have a view on (an investment, a renewal, a cost programme, a price change).",
          "Write the one-sentence problem statement: decision, deadline, context. Confirm it with the decision-maker if you can.",
          "Develop three options including a priced 'do nothing'. Agree (or propose) the decision criteria before scoring them.",
          "Run a fifteen-minute pre-mortem on your preferred option and fold the top two risks and mitigations into the page.",
          "Add the sentence executives underrate most: 'what would change our mind' — with the trigger you'll watch.",
          "Write the one-page recommendation using the template, and plan who you'd socialise it with one-to-one before any formal meeting."
        ],
        deliverable:
          "Paste your one-sentence problem statement and one-sentence recommendation below, " +
          "plus the top pre-mortem risk and its mitigation."
      },
      tools: [
        {
          id: "one-page-recommendation",
          title: "One-page recommendation template",
          desc: "The complete decision-page skeleton: decision, recommendation, options, assumptions, pre-mortem risks, ask.",
          body: `# One-Page Recommendation — template

**DECISION NEEDED** (and by when):

**RECOMMENDATION** (one sentence, with the primary reason):

## Options considered
| Option | Criteria score* | Financial impact | Key risk |
|---|---|---|---|
| 1. Do nothing (priced baseline) | | | |
| 2. | | | |
| 3. (recommended) | | | |

*Criteria agreed BEFORE scoring: financial / risk / speed / strategic fit / people.
Add one sentence: how does the recommended option strengthen where we win?

## Assumptions & sensitivity
- Hinges on: 1) ______  2) ______  3) ______
- The recommendation survives from ____ to ____ (state the corridor).
- **What would change our mind:** ______ (trigger: ______, watched ______).

## Pre-mortem (it failed — what killed it?)
| Risk | Mitigation (built into this recommendation) |
|---|---|
| 1. | |
| 2. | |

**ASK TODAY:**

---
*Rules: one page. Everything else is appendix. If it doesn't fit,
the thinking isn't finished compressing.*
`
        },
        {
          id: "premortem-script",
          title: "Pre-mortem facilitation script (15 min)",
          desc: "A ready-to-run agenda for extracting the risks a normal review meeting will never surface.",
          body: `# Pre-Mortem — 15-minute facilitation script

**When:** after a preferred option exists, BEFORE the decision is made.
**Who:** everyone who'd attend the approval meeting. No observers — everyone writes.

## Script
1. (1 min) Set the frame, verbatim: *"It is two years from now. We approved
   this, and it has failed — badly enough that we regret it. That is a fact
   in this exercise, not a possibility. Take three minutes and write down,
   silently and independently, what killed it."*
2. (3 min) Silent writing. No discussion — independence is the whole point;
   the first spoken idea anchors every following one.
3. (6 min) Round-robin: each person reads ONE cause per turn until all are
   out. No rebuttals allowed. Log every cause verbatim.
4. (3 min) Vote: each person marks the two most credible killers.
5. (2 min) Assign: top 2–3 risks each get an owner and a mitigation deadline.
   Mitigations go INTO the recommendation page, not into a risk register
   nobody reopens.

## Why it works (say this if challenged)
Asked for objections, people self-censor to protect the mood and their
standing. Asked to explain a stipulated failure, the same people generate
risks fluently — imagination gets permission that criticism is denied.
(Source: Gary Klein, "Performing a Project Premortem", HBR 2007.)

## Anti-patterns
- Running it after the decision (theatre) · Skipping silent writing (anchoring)
- Debating causes as they're read (kills candour) · Mitigations without owners
`
        },
        {
          id: "scenario-planner",
          title: "Scenario & trigger planner",
          desc: "Two uncertainties → three stories → named triggers and pre-agreed responses, plus the forecast scorecard.",
          body: `# Scenario & Trigger Planner

## 1. The two dominant uncertainties (next 18 months)
A: ______________________  B: ______________________
(Customer concentration? Regulation? Input price? Demand break? Tender?)

## 2. Three coherent stories (quantify through your driver tree)
| | Story 1: ____ | Story 2: ____ | Story 3 (worst): ____ |
|---|---|---|---|
| What happens | | | |
| Revenue impact | | | |
| EBITDA impact | | | |
| Cash / runway | | | |

*A worst case that's just "base minus 10%" has imagined nothing. Make it a story.*

## 3. Triggers & pre-agreed responses (what makes this a tool)
| Trigger (observable event) | Watched how / how often | Owner | Pre-agreed response | Activate within |
|---|---|---|---|---|

Get the responses APPROVED NOW, while approving is calm and cheap.
When the trigger fires, you open the drawer — you don't call a meeting.

## 4. Forecast scorecard (publish quarterly)
- Bias: last 4–8 forecasts averaged ____% high/low → correction applied: ____
- Calibration: outcomes landed inside our stated ranges ____ of ____ times.
- This quarter's forecast: central ____ · surprised below ____ / above ____
- Forecast ≠ target ≠ budget: has each word meant a different number this cycle?
`
        }
      ],
      quiz: {
        title: "Module 3 knowledge check",
        questions: [
          {
            q: "The clearest evidence that finance is operating strategically is:",
            options: [
              "Budgets are finalised earlier each year",
              "Resource allocation visibly shifts toward stated strategic priorities rather than rolling forward 'last year plus 3%'",
              "The strategy document is quoted in the monthly pack",
              "Every project is approved provided it clears the hurdle rate"
            ],
            answer: 1,
            explain: "The real strategy is where money, people and time actually go. Rolling budgets forward keeps yesterday's strategy regardless of what the document says."
          },
          {
            q: "Two projects have identical NPVs. The strategic lens says:",
            options: [
              "They are equivalent — approve whichever is cheaper to run",
              "Prefer the one that strengthens where the business wins over the side bet, and say so",
              "Reject both, since identical NPVs suggest modelling error",
              "Approve both to be safe"
            ],
            answer: 1,
            explain: "NPV alone is blind to strategic fit. A project that builds the competitive moat is a different decision from one with the same NPV that doesn't."
          },
          {
            q: "A good problem statement includes:",
            options: [
              "The full history of the issue over five years",
              "The decision to be made, the deadline, and the essential context",
              "The answer you expect the analysis to reach",
              "Every stakeholder's opinion recorded verbatim"
            ],
            answer: 1,
            explain: "Decision, deadline, context — one sentence. It scopes the analysis and prevents solving the wrong problem well."
          },
          {
            q: "Revenue fell because deliveries were late because a supplier changed spec after procurement switched to save 3%. The root-cause fix is:",
            options: [
              "Discount prices to win the volume back",
              "Increase the revenue forecast to compensate",
              "Fix supplier qualification in procurement",
              "Report the variance and move on"
            ],
            answer: 2,
            explain: "Fix where the causal chain starts. Discounting treats the symptom and adds a margin problem to the volume problem."
          },
          {
            q: "Why should 'do nothing' appear as an option?",
            options: [
              "To make the pack look thorough",
              "Because it's a real choice with real costs, and pricing it gives every other option an honest baseline",
              "Because decision-makers usually prefer it",
              "It shouldn't — it signals indecision"
            ],
            answer: 1,
            explain: "Do-nothing is always available and never free. Pricing it anchors the comparison honestly."
          },
          {
            q: "A pre-mortem asks:",
            options: [
              "'What is the NPV under the base case?'",
              "'It's two years on and this decision failed — what killed it?'",
              "'Who should be blamed if this fails?'",
              "'What does the auditor think?'"
            ],
            answer: 1,
            explain: "Imagining the failure as already having happened licenses people to name risks they'd never raise as objections — and the mitigations strengthen the recommendation."
          },
          {
            q: "Presenting three options with no recommendation is:",
            options: [
              "Best practice — the choice belongs to the business",
              "Unfinished partnering work: stakeholders may disagree with your view, but shouldn't have to guess it",
              "Required for governance reasons",
              "Appropriate whenever the decision is difficult"
            ],
            answer: 1,
            explain: "Options without a view is analysis, not partnering. Commit to a recommendation with reasons; the decision still belongs to the decision-maker."
          },
          {
            q: "A stakeholder pushes back hard on your analysis. The partner's first move is:",
            options: [
              "Restate the conclusion more firmly",
              "Ask 'what am I missing?' and genuinely examine their information",
              "Escalate the disagreement immediately",
              "Withdraw the analysis to keep the relationship"
            ],
            answer: 1,
            explain: "Curiosity first. If their information is new and real, update visibly — that builds credibility. If not, hold your view calmly and document both positions for the decision-maker."
          },
          {
            q: "The forecast, the target and the budget should be:",
            options: [
              "Three distinct numbers: the honest prediction, the aspiration, and the spending permission",
              "One aligned number, to keep the organisation consistent",
              "Whatever the board prefers to see",
              "Set by negotiation between finance and each cost centre"
            ],
            answer: 0,
            explain: "Forcing one number to do all three jobs destroys the honest picture: forecasts get negotiated to protect targets and sandbagged to protect bonuses. Three words, three jobs."
          },
          {
            q: "What converts a scenario exercise from a workshop into a management tool?",
            options: [
              "More detailed narratives for each scenario",
              "Extending the scenarios to a ten-year horizon",
              "Presenting the scenarios to the board annually",
              "Named triggers with pre-agreed, pre-approved responses and owners"
            ],
            answer: 3,
            explain: "Scenarios with observable triggers and drawer-ready responses convert future panic into present procedure. Without triggers, scenarios are literature."
          }
        ]
      }
    }
  ],

  /* ================= CAPSTONE ================= */
  capstone: {
    title: "Capstone — The Harbourline Decision",
    weeks: "Week 7",
    scenario:
      "You are the newly appointed finance business partner to the Consumer division " +
      "of Harbourline Ltd, a mid-sized food manufacturer. The division's results look " +
      "healthy at first glance: revenue up 5% year on year and tracking 2% ahead of " +
      "budget. But your driver analysis shows the growth is entirely price — volumes " +
      "fell 4% — and the volume decline is concentrated in the division's largest " +
      "retail customer, GrocerCo (31% of divisional revenue), whose orders have " +
      "slipped every month since it launched a private-label competitor to your " +
      "flagship product. Meanwhile the divisional GM, Dana, is preparing a board " +
      "paper requesting $8M to expand the flagship line's capacity, based on the " +
      "budget's assumption of 6% volume growth. Manufacturing tells you (informally, " +
      "on the floor) that the existing line runs at 68% utilisation. The board paper " +
      "is due in three weeks. Dana is a driver — impatient, headline-first — and so " +
      "far sees finance as 'the people who send the pack'.",
    tasks: [
      {
        id: "c1",
        title: "The problem statement",
        prompt:
          "Write the one-sentence problem statement you would agree with Dana " +
          "(decision, deadline, context).",
        guide:
          "A strong answer names the actual decision (how to deploy $8M — or whether to bet on capacity " +
          "at all), the hard deadline (board paper in three weeks), and the decisive context (price-led " +
          "growth masking falling volumes; a 31% customer turning competitor; 68% utilisation). Weak " +
          "answers frame the problem as 'whether to approve Dana's paper' — which accepts the wrong question."
      },
      {
        id: "c2",
        title: "The headline",
        prompt:
          "Write the single headline sentence for your analysis, top-down style — " +
          "the answer first, in language Dana will engage with.",
        guide:
          "A strong headline is a claim with a 'therefore', in Dana's currency (her growth story, her " +
          "board credibility), connecting the three facts: growth is price not volume, the volume loss " +
          "sits inside a customer who is now a competitor, and capacity is not the constraint. It should " +
          "be speakable in one breath. Weak versions describe ('volumes declined 4%') or attack the paper."
      },
      {
        id: "c3",
        title: "The conversation plan",
        prompt:
          "Dana is invested in the expansion and you're new. Describe in 3–5 " +
          "sentences how you'll approach the conversation: sequencing, framing in " +
          "Dana's currency, and how you'll challenge without combat.",
        guide:
          "Strong answers go private-first (never premiere the challenge at the board or in a group), " +
          "open with curiosity about the volume assumption rather than a verdict, frame the alternative " +
          "as a BETTER growth story for Dana's board paper (redirected capital, demand recovery), give " +
          "Dana a graceful path to amend her own paper, and plan a deposit or two beforehand given the " +
          "empty trust account. Bonus: sequencing allies (sales? manufacturing?) before the meeting."
      },
      {
        id: "c4",
        title: "The recommendation",
        prompt:
          "Draft your one-page recommendation in brief: the recommendation sentence, " +
          "at least three options (including 'do nothing'), your two key assumptions, " +
          "and the top risk from your pre-mortem with its mitigation.",
        guide:
          "Strong answers recommend deferring the expansion with volume triggers for revisiting it, and " +
          "redirecting some capital at demand recovery / customer diversification; options include priced " +
          "do-nothing and the full $8M; assumptions name GrocerCo trajectory and utilisation headroom; the " +
          "pre-mortem names deferral's real failure mode (demand recovers and we miss the upturn) with a " +
          "trigger-based restart as mitigation. Weak answers pick a side without triggers or price no baseline."
      }
    ],
    /* Final assessment: 20 questions sampled fresh from all modules and the
       scenario on every attempt; 70% to pass; retake as often as needed. */
    assessment: {
      title: "Final assessment",
      count: 20,
      passMark: 0.7
    },
    scenarioQuestions: [
      {
        q: "The single most decision-relevant insight in Harbourline's numbers is:",
        options: [
          "Revenue is 2% ahead of budget, so performance is strong",
          "Growth is entirely price while volumes fall — concentrated in a 31% customer now competing with you — which undermines the expansion case",
          "The monthly pack should include more detail on GrocerCo",
          "Utilisation should be reported weekly"
        ],
        answer: 1,
        explain: "The headline connects the driver analysis (price-led growth, falling volume), the concentration risk (GrocerCo at 31% and now a competitor), and the decision at hand (an $8M capacity bet premised on volume growth)."
      },
      {
        q: "The 68% utilisation figure matters to the board paper because:",
        options: [
          "It shows manufacturing is underperforming and should be restructured",
          "Capacity expansion is hard to justify when a third of existing capacity is idle and volumes are falling",
          "It's informal information and must be ignored entirely",
          "It proves the flagship product should be discontinued"
        ],
        answer: 1,
        explain: "An $8M expansion assumes capacity is the constraint. At 68% utilisation with declining volumes, the constraint is demand — the money solves the wrong problem. Verify the informal figure, but don't ignore it."
      },
      {
        q: "Given Dana's style and stake in the paper, your first move is:",
        options: [
          "Present the contrary analysis at the board pre-read meeting where it will have maximum impact",
          "Email Dana the full analysis with all workings attached",
          "Book a one-to-one, lead with curiosity about the volume assumption, and share the driver analysis as a problem to solve together",
          "Escalate concerns directly to the CFO before speaking to Dana"
        ],
        answer: 2,
        explain: "Socialise before any formal meeting, in person, headline-first for a driver, hard on the problem and soft on the person. Ambushing Dana at the board or going around her destroys the relationship you need."
      },
      {
        q: "The strongest framing of your concern in Dana's currency is:",
        options: [
          "'Finance cannot support this paper as drafted'",
          "'The 6% growth assumption breaches forecasting policy'",
          "'If GrocerCo keeps sliding, the new line sits idle and the $8M is gone — but redirected at winning back volume or diversifying customers, it could actually deliver your growth story'",
          "'The board will probably reject this anyway'"
        ],
        answer: 2,
        explain: "It connects the evidence to what Dana wants (a growth story that succeeds) and offers a path, rather than a veto, a rulebook, or a threat."
      },
      {
        q: "Which option set best serves the decision?",
        options: [
          "Approve $8M now versus reject it — a clean binary for the board",
          "Proceed / do nothing (priced, including the GrocerCo risk) / defer and redirect a smaller amount to demand recovery and customer diversification, with volume triggers for revisiting expansion",
          "Do nothing only, since the analysis is negative",
          "Approve but ask manufacturing to raise utilisation first"
        ],
        answer: 1,
        explain: "Real options with a priced baseline and a trigger-based path give the board a genuine choice. A binary hides the middle path that best fits the evidence."
      },
      {
        q: "Your pre-mortem on 'defer and redirect' should most prominently feature:",
        options: [
          "The risk that the board finds the paper too short",
          "The risk that demand recovers strongly and deferral costs market share — mitigated by defined volume triggers and a ready-to-go expansion plan",
          "The risk that Dana is unhappy with finance",
          "No risks, since deferral is the safe option"
        ],
        answer: 1,
        explain: "Pre-mortems stress your own recommendation. Deferral's real failure mode is missing an upturn — so build triggers and a pre-approved restart path into the recommendation. No option is riskless."
      }
    ]
  },

  /* Suggested pacing — self-paced, so treat weeks as a rhythm, not deadlines. */
  agenda: [
    { when: "Week 1", what: "Module 1 lessons — the role, the mindset, the business", type: "Self-paced lessons" },
    { when: "Week 2", what: "Workshop 1 — Your partnering baseline · Module 1 knowledge check", type: "Applied practice" },
    { when: "Week 3", what: "Module 2 lessons — insight, storytelling, audiences, influence", type: "Self-paced lessons" },
    { when: "Week 4", what: "Workshop 2 — Rewrite the commentary · Module 2 knowledge check", type: "Applied practice" },
    { when: "Week 5", what: "Module 3 lessons — strategy, decisions, forecasts, hard calls", type: "Self-paced lessons" },
    { when: "Week 6", what: "Workshop 3 — The one-page recommendation · Module 3 knowledge check", type: "Applied practice" },
    { when: "Week 7", what: "Capstone scenario, then the final assessment — 20 questions · 70% to pass", type: "Capstone & assessment" }
  ]
};
