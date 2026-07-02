/* Course content — Certificate in Finance Business Partnering.
   Original material modelled on the skill set of finance business partnering
   certificates (mindset, insight, communication, influence). */

const COURSE = {
  title: "Certificate in Finance Business Partnering",
  passMark: 0.8,
  modules: [

    /* ================= MODULE 1 ================= */
    {
      id: "m1",
      title: "Finance Business Partnering Essentials",
      weeks: "Weeks 1–2",
      intro:
        "What a finance business partner actually does, the mindset shift from " +
        "scorekeeper to strategist, and how to understand the business and its " +
        "stakeholders well enough to add value beyond the numbers.",
      lessons: [
        {
          id: "m1l1",
          title: "What is a finance business partner?",
          minutes: 20,
          sections: [
            {
              h: "From scorekeeper to strategist",
              p: "Traditional finance roles look backwards: close the books, report " +
                 "what happened, explain variances. A finance business partner looks " +
                 "forwards: they sit alongside operational leaders and use financial " +
                 "insight to shape decisions before they're made. Think of a continuum — " +
                 "scorekeeper → commentator → advisor → strategist. Most finance teams " +
                 "live at the left end; business partnering is the deliberate move to " +
                 "the right."
            },
            {
              h: "The value proposition of finance",
              p: "Finance sees the whole organisation in one language: money. No other " +
                 "function has that vantage point. Marketing sees campaigns, operations " +
                 "sees throughput, HR sees people — finance sees how all of it converts " +
                 "into value. A business partner's job is to bring that whole-of-business " +
                 "view into the room where decisions happen, and to say clearly what the " +
                 "numbers mean for the choice at hand."
            },
            {
              h: "What it looks like in practice",
              list: [
                "You're invited to the planning meeting, not just sent the minutes.",
                "Your monthly commentary answers 'so what should we do?' — not just 'what moved?'",
                "Operational leaders call you before a decision, not after something breaks.",
                "You challenge assumptions respectfully — and get thanked for it.",
                "Your forecasts shape resource allocation rather than merely recording it."
              ]
            },
            {
              h: "What it is not",
              p: "Business partnering is not saying yes to everything the business wants, " +
                 "and it is not abandoning control and stewardship. The best partners hold " +
                 "the tension: commercially supportive and independently minded. If you " +
                 "lose your objectivity you're a cheerleader; if you only police the rules " +
                 "you're back to scorekeeping. Trusted advisor sits in between."
            }
          ],
          takeaways: [
            "Business partnering means shaping decisions before they're made, not reporting on them after.",
            "Finance's unique asset is the whole-of-business view expressed in one common language.",
            "Hold the tension between commercial support and independent challenge."
          ]
        },
        {
          id: "m1l2",
          title: "The business partner mindset",
          minutes: 20,
          sections: [
            {
              h: "Curiosity before calculation",
              p: "The defining habit of a good business partner is curiosity about the " +
                 "business itself. Before you open the model, ask: how does this unit " +
                 "actually make money? What keeps its leader awake at night? What would " +
                 "'great' look like for them this quarter? Numbers only become insight " +
                 "when they're connected to something the business cares about."
            },
            {
              h: "Own the outcome, not just the report",
              p: "Scorekeepers deliver reports; partners deliver outcomes. If your " +
                 "analysis was accurate but nobody acted on it, a partner treats that as " +
                 "a failure worth diagnosing: was the message unclear, too late, aimed at " +
                 "the wrong person, missing a recommendation? Taking ownership of whether " +
                 "insight lands is the mindset shift that changes everything else."
            },
            {
              h: "Commercial acumen",
              p: "Commercial acumen is knowing which numbers matter and why. It's built " +
                 "deliberately: read your company's strategy and your competitors' " +
                 "results, walk the floor or sit in on sales calls, learn the two or " +
                 "three operational drivers that move your P&L most. A partner who knows " +
                 "that a one-point change in churn is worth more than a five-point cut in " +
                 "travel spend gives very different advice to one who treats every line " +
                 "equally."
            },
            {
              h: "Comfort with ambiguity",
              p: "Decisions rarely wait for perfect data. Partners give a view with " +
                 "ranges, assumptions and confidence levels instead of refusing to answer " +
                 "until the numbers are final. 'Roughly right and on time' beats " +
                 "'precisely right and too late' in almost every business decision."
            }
          ],
          takeaways: [
            "Be curious about how the business makes money before you analyse it.",
            "Measure yourself on decisions influenced, not reports delivered.",
            "Give a roughly-right view on time rather than a precise one too late."
          ]
        },
        {
          id: "m1l3",
          title: "Knowing the business: models, drivers and KPIs",
          minutes: 25,
          sections: [
            {
              h: "Map the business model",
              p: "Every business answers three questions: who do we serve, what do we " +
                 "sell them, and how does the economics work? Sketch it: revenue streams, " +
                 "cost structure, where the margin is actually made, and where cash gets " +
                 "trapped. A one-page picture of the model is worth more to a partner " +
                 "than a hundred-tab workbook, because it tells you where to look."
            },
            {
              h: "Find the value drivers",
              p: "Value drivers are the small set of operational levers that " +
                 "disproportionately move financial results — price realisation, " +
                 "capacity utilisation, conversion rate, retention, mix. Build a simple " +
                 "driver tree from profit down to operational metrics. When a leader asks " +
                 "'where should we focus?', the driver tree is your answer, and it's how " +
                 "you translate finance goals into words operations can act on."
            },
            {
              h: "KPIs beyond the financials",
              p: "Financial results are lagging indicators — they tell you what already " +
                 "happened. Leading indicators (pipeline, on-time delivery, staff " +
                 "turnover, NPS) tell you what's about to happen. A partner watches both " +
                 "and connects them: 'complaints rose in March, so expect churn in Q3, " +
                 "which puts roughly this much revenue at risk.' That sentence is " +
                 "business partnering in miniature."
            },
            {
              h: "Learn by asking",
              list: [
                "Ask a sales leader: 'What deal did we lose recently, and why?'",
                "Ask an ops leader: 'What's the bottleneck you'd fix with free money?'",
                "Ask a product owner: 'Which customers would pay more, and for what?'",
                "Ask everyone: 'What does finance do that helps you least?' — and listen."
              ]
            }
          ],
          takeaways: [
            "A one-page business model map tells you where to focus analysis.",
            "Driver trees translate financial goals into operational language.",
            "Pair lagging financial KPIs with leading operational indicators."
          ]
        },
        {
          id: "m1l4",
          title: "Stakeholders, trust and relationships",
          minutes: 25,
          sections: [
            {
              h: "Map your stakeholders",
              p: "List everyone your role touches, then place them on a two-by-two grid: " +
                 "influence over decisions (low→high) against how much your work affects " +
                 "them (low→high). High-influence, high-impact people are your key " +
                 "partners — invest in them deliberately. The map also exposes gaps: the " +
                 "influential leader you've never had a real conversation with is your " +
                 "biggest opportunity."
            },
            {
              h: "The trust equation",
              p: "A useful model: trust = (credibility + reliability + closeness) ÷ " +
                 "self-orientation. Credibility is knowing your stuff; reliability is " +
                 "doing what you said, when you said; closeness is being safe to think " +
                 "aloud with. The divisor matters most: if stakeholders sense you're " +
                 "playing for finance's scoreboard rather than the business outcome, " +
                 "everything above the line gets discounted."
            },
            {
              h: "Deposits before withdrawals",
              p: "Influence works like a bank account. Deposits are small, consistent " +
                 "acts of usefulness: answering quickly, sharing an insight they didn't " +
                 "ask for, making their report to their boss easier. Withdrawals are the " +
                 "hard moments — challenging a pet project, saying no, delivering bad " +
                 "news. Partners who only show up for withdrawals get frozen out. Build " +
                 "the balance before you need it."
            },
            {
              h: "Contract the relationship",
              p: "With key stakeholders, agree explicitly how you'll work together: what " +
                 "they need from you, what you need from them, meeting cadence, and how " +
                 "you'll handle disagreement. Ten minutes of contracting prevents months " +
                 "of mismatched expectations — and signals that you take the partnership " +
                 "seriously."
            }
          ],
          takeaways: [
            "Map stakeholders by influence and impact; invest deliberately in the top-right.",
            "Trust = (credibility + reliability + closeness) ÷ self-orientation.",
            "Make deposits of usefulness long before you need to make a withdrawal."
          ]
        }
      ],
      workshop: {
        title: "Workshop 1 — Your partnering baseline",
        brief:
          "Apply Module 1 to your own role. This is the work that turns theory into " +
          "practice — treat it like a live engagement, not homework.",
        steps: [
          "Sketch your organisation's business model on one page: who it serves, what it sells, where the margin is made.",
          "Draw a driver tree from profit (or your unit's key result) down to 4–6 operational drivers.",
          "Map your top 8 stakeholders on the influence × impact grid and mark the relationship strength of each (strong / working / absent).",
          "Pick the one high-influence stakeholder with the weakest relationship and book 30 minutes with them this week. Prepare three curious questions from Lesson 3.",
          "Write a two-sentence 'finance value statement': what your partnership offers that stakeholder, in their language."
        ],
        deliverable:
          "Record your finance value statement and the stakeholder you chose below. " +
          "You'll build on both in the capstone."
      },
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
            explain: "A driver tree decomposes a financial result into operational drivers — it translates finance goals into levers the business can actually pull."
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
          }
        ]
      }
    },

    /* ================= MODULE 2 ================= */
    {
      id: "m2",
      title: "Influential Finance Business Partnering",
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
          minutes: 20,
          sections: [
            {
              h: "Data → information → insight → action",
              p: "Data is raw numbers. Information is data organised ('travel spend is " +
                 "12% over budget'). Insight adds meaning ('travel is over because we're " +
                 "flying people to fix a quality problem that's costing us twice the " +
                 "overspend in rework'). Action closes the loop ('fix the root cause at " +
                 "the plant; the travel line will fix itself'). Most finance output " +
                 "stops at information. Partners climb the whole ladder every time."
            },
            {
              h: "The two questions",
              p: "Interrogate every finding with 'so what?' until you reach something a " +
                 "decision-maker cares about, then ask 'now what?' to reach a " +
                 "recommendation. If you can't answer 'so what?', the finding probably " +
                 "doesn't belong in your report. If you can't answer 'now what?', you're " +
                 "not finished analysing."
            },
            {
              h: "Insight needs a comparison",
              p: "A number on its own means nothing. Insight lives in comparison: " +
                 "versus plan, versus last year, versus the market, versus what the " +
                 "decision assumed. Choose the comparison that matters for the decision " +
                 "at hand — beating budget is cold comfort if competitors grew twice as " +
                 "fast."
            },
            {
              h: "Materiality is audience-relative",
              p: "What's material to a cost-centre manager is noise to the CEO. Before " +
                 "writing, ask: at this audience's altitude, what are the three things " +
                 "that could change what they do next? Lead with those. Everything else " +
                 "is appendix."
            }
          ],
          takeaways: [
            "Climb the full ladder: data → information → insight → action.",
            "Ask 'so what?' until it matters and 'now what?' until it's actionable.",
            "Pick the comparison and the altitude that fit the decision-maker."
          ]
        },
        {
          id: "m2l2",
          title: "Storytelling with numbers",
          minutes: 25,
          sections: [
            {
              h: "Lead with the headline",
              p: "Structure findings top-down: state the answer first, then support it. " +
                 "'We should exit product line C; it destroys margin and the trend is " +
                 "worsening' — then the evidence. Busy executives decide in the first " +
                 "thirty seconds whether to keep listening. Building suspense towards a " +
                 "conclusion works in novels and fails in boardrooms."
            },
            {
              h: "The pyramid: one message, three supports",
              p: "Under one clear headline, group your evidence into roughly three " +
                 "supporting points, each backed by data. If you have ten points, you " +
                 "have none — group and prune until the structure is one message deep " +
                 "and three wide. Anything that doesn't support the headline goes to the " +
                 "appendix or the bin."
            },
            {
              h: "Situation, complication, resolution",
              p: "For narrative flow, open with the situation everyone agrees on " +
                 "('Q2 revenue grew 6%'), introduce the complication ('but all growth " +
                 "came from one customer, who is tendering their contract'), then " +
                 "resolve ('here are three options to de-risk, and we recommend the " +
                 "second'). This shape creates the tension that makes people care about " +
                 "the resolution."
            },
            {
              h: "Concrete beats abstract",
              p: "'A 2% margin decline' is abstract. 'That's the entire profit of the " +
                 "Brisbane operation, gone' is concrete. Translate percentages into " +
                 "things your audience can picture: headcount, stores, customers, days " +
                 "of cash. Concrete framing is remembered and repeated — which is how " +
                 "your insight travels when you're not in the room."
            }
          ],
          takeaways: [
            "Answer first, evidence second — executives decide fast whether to listen.",
            "One headline, about three supporting points, everything else cut or appended.",
            "Situation → complication → resolution creates the tension that drives action.",
            "Translate abstract percentages into concrete, picturable terms."
          ]
        },
        {
          id: "m2l3",
          title: "Communicating with non-finance audiences",
          minutes: 20,
          sections: [
            {
              h: "Translate, don't simplify down",
              p: "Non-finance leaders aren't less intelligent — they're fluent in a " +
                 "different language. 'EBITDA margin compression from adverse mix' " +
                 "becomes 'we're selling more of the products we make less money on'. " +
                 "Keep the substance, change the vocabulary. If you must use a finance " +
                 "term, define it in the same breath, once."
            },
            {
              h: "Adapt to the person, not just the topic",
              p: "People consume information differently. Some want the detail and the " +
                 "workings (analytical); some want the headline and the action (driver); " +
                 "some want to know who's affected (relational); some want the vision " +
                 "and the story (expressive). Watch how a stakeholder communicates and " +
                 "mirror it: the driver gets one page with a recommendation up top; the " +
                 "analytical gets the model and the assumptions."
            },
            {
              h: "Choose the channel deliberately",
              list: [
                "Bad news or challenge: face-to-face (or video) first, never email first.",
                "Complex analysis: pre-read plus a short walkthrough, not a live data dump.",
                "Quick decisions: one-pager with a clear recommendation and options.",
                "Routine updates: consistent dashboard, same shape every time so change stands out."
              ]
            },
            {
              h: "Check for landing",
              p: "Communication happened only if it was received. Close conversations by " +
                 "asking what the other person will take away or do next. If their " +
                 "summary doesn't match your message, that's your rework, not their " +
                 "failure."
            }
          ],
          takeaways: [
            "Translate finance language into business language without losing substance.",
            "Match style to the person: detail for analyticals, headlines for drivers.",
            "Bad news travels in person first; complex analysis travels as pre-read plus walkthrough.",
            "Confirm what landed — the message is what they heard, not what you said."
          ]
        },
        {
          id: "m2l4",
          title: "Making numbers visible",
          minutes: 20,
          sections: [
            {
              h: "One chart, one message",
              p: "Every chart should have a job: a single message a viewer gets in five " +
                 "seconds. Put that message in the title ('Churn is concentrated in " +
                 "customers onboarded in 2024', not 'Churn by cohort'). If a chart needs " +
                 "a paragraph of explanation, it's the wrong chart or the wrong message."
            },
            {
              h: "Choose the form from the comparison",
              list: [
                "Change over time → line chart.",
                "Compare categories → horizontal bars, sorted by size.",
                "Composition of a whole → stacked bar (avoid pies beyond two or three slices).",
                "Relationship between two measures → scatter.",
                "A single key number → state it big, with its comparison next to it."
              ]
            },
            {
              h: "Declutter ruthlessly",
              p: "Ink that isn't information is friction: gridlines, borders, " +
                 "3-D effects, legends when direct labels work, ten colours when one " +
                 "plus grey works. Highlight the one series that matters and mute the " +
                 "rest. The goal is not a pretty chart; it's a chart nobody has to " +
                 "study."
            },
            {
              h: "Tables still have a place",
              p: "When the audience needs to look up specific values — a board pack " +
                 "appendix, a price list — a well-designed table beats a chart. " +
                 "Right-align numbers, use consistent decimals, order rows by what " +
                 "matters, and bold only the rows you want compared."
            }
          ],
          takeaways: [
            "Put the message in the chart title; one chart, one job.",
            "Let the comparison choose the chart type.",
            "Delete non-information ink; highlight one thing, mute the rest."
          ]
        },
        {
          id: "m2l5",
          title: "Influencing without authority",
          minutes: 25,
          sections: [
            {
              h: "You can't mandate — so persuade",
              p: "Business partners rarely have line authority over the people whose " +
                 "decisions they need to shape. Influence substitutes for authority, and " +
                 "it rests on three pillars: credibility (your track record and command " +
                 "of the facts), reciprocity (the deposits from Module 1), and framing " +
                 "(presenting the choice in terms of what the stakeholder values)."
            },
            {
              h: "Frame in their currency",
              p: "The same recommendation lands differently depending on the frame. To a " +
                 "growth-minded MD, a cost programme is 'funding for the expansion " +
                 "without going back to the board'. To a risk-averse chair, the same " +
                 "programme is 'resilience if the downturn comes'. Neither frame is " +
                 "dishonest — you're connecting one truth to what each audience already " +
                 "cares about."
            },
            {
              h: "Timing and sequencing",
              p: "Big recommendations shouldn't premiere in big meetings. Socialise the " +
                 "thinking one-to-one first: you'll surface objections while they're " +
                 "cheap to address, recruit allies, and let stakeholders feel ownership. " +
                 "By the time the formal meeting happens, the decision should mostly be " +
                 "made — the meeting confirms it."
            },
            {
              h: "Challenge without combat",
              p: "Disagreeing with a stakeholder's plan is part of the job. Do it by " +
                 "being hard on the problem and soft on the person: lead with genuine " +
                 "curiosity ('help me understand the assumption behind the volume " +
                 "uplift'), present evidence as a puzzle to solve together, and give " +
                 "them a graceful path to change position. Public wins are expensive; " +
                 "private ones are free."
            }
          ],
          takeaways: [
            "Influence = credibility + reciprocity + framing, in place of authority.",
            "Frame recommendations in the currency each stakeholder values.",
            "Socialise big ideas one-to-one before any big meeting.",
            "Be hard on the problem, soft on the person; leave a graceful path to agreement."
          ]
        }
      ],
      workshop: {
        title: "Workshop 2 — Rewrite the commentary",
        brief:
          "Take a real (or realistic) piece of monthly variance commentary from your " +
          "world and rebuild it as insight.",
        steps: [
          "Pick one month's commentary or a recent analysis you produced (or write a typical 'revenue up X%, costs down Y%' example).",
          "For each point, ask 'so what?' until you reach something a decision-maker cares about, then 'now what?' until you have a recommendation. Cut anything that survives neither.",
          "Restructure top-down: one headline sentence, up to three supporting points, one recommendation.",
          "Rewrite it for a non-finance operations leader: no undefined jargon, one concrete translation of the biggest number.",
          "Sketch (or describe) the single chart that would carry the headline, with the message as its title."
        ],
        deliverable:
          "Paste your rewritten headline and recommendation below — one sentence each."
      },
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
      title: "Strategic Finance Business Partnering",
      weeks: "Weeks 5–6",
      intro:
        "Bringing the strategic lens to partnering: human-centred problem solving, " +
        "confident recommendations under uncertainty, and the hard conversations " +
        "that come with the trusted-advisor seat.",
      lessons: [
        {
          id: "m3l1",
          title: "The strategic lens",
          minutes: 20,
          sections: [
            {
              h: "Strategy is resource allocation",
              p: "Whatever the strategy document says, the real strategy is where the " +
                 "money, people and time actually go — and finance is the custodian of " +
                 "that allocation. A budget rolled forward as 'last year plus 3%' is a " +
                 "decision to keep yesterday's strategy. A strategic partner tests every " +
                 "allocation against the stated priorities and makes the mismatches " +
                 "visible: if digital is the priority, why did its funding shrink?"
            },
            {
              h: "Know where the business wins",
              p: "Every business wins somewhere specific — certain customers, products, " +
                 "capabilities or cost positions competitors can't easily match. " +
                 "Proposals that strengthen that advantage deserve different treatment " +
                 "from proposals that merely clear a hurdle rate. Two projects with the " +
                 "same NPV are not the same decision if one builds the moat and the " +
                 "other builds a side bet."
            },
            {
              h: "Guard the long term",
              p: "Most short-term profit levers — cutting maintenance, brand spend, " +
                 "training, R&D — quietly tax future performance. Because those costs " +
                 "hit the P&L now while the damage arrives later, someone has to make " +
                 "the trade-off explicit. That someone is you: 'we can hit this year's " +
                 "number this way, and here is what it borrows from the next three " +
                 "years.'"
            },
            {
              h: "Zoom out, zoom in",
              p: "Strategic partners switch altitude deliberately. Zoom out: what does " +
                 "this month's variance say about our position — is the price pressure " +
                 "cyclical or structural? Zoom in: what specifically do we do about it " +
                 "this quarter? Analysis that stays zoomed in is bookkeeping; analysis " +
                 "that stays zoomed out is hand-waving. Insight lives in the movement " +
                 "between the two."
            }
          ],
          takeaways: [
            "The real strategy is where resources actually go — test allocations against stated priorities.",
            "Weight decisions by whether they strengthen where the business wins, not NPV alone.",
            "Make short-term/long-term trade-offs explicit before they're taken silently.",
            "Move between altitudes: connect monthly numbers to strategic position and back to action."
          ]
        },
        {
          id: "m3l2",
          title: "Human-centred problem solving",
          minutes: 25,
          sections: [
            {
              h: "Solve the right problem",
              p: "Half of bad analysis is good analysis of the wrong question. Before " +
                 "modelling, write a one-sentence problem statement with the " +
                 "decision-maker and get it agreed: 'We need to decide whether to renew " +
                 "the Auckland lease by 30 September, given hybrid working has halved " +
                 "occupancy.' A good statement names the decision, the deadline and the " +
                 "context — and rules half the possible analysis out of scope."
            },
            {
              h: "Go to the root cause",
              p: "Ask 'why' repeatedly until you pass symptoms and reach causes. Revenue " +
                 "is down → because volumes fell → because deliveries were late → " +
                 "because a supplier changed spec → because procurement switched to save " +
                 "3%. The fix at the root (supplier qualification) is different — and " +
                 "cheaper — than the fix at the symptom (discounting to win volume " +
                 "back)."
            },
            {
              h: "Start with the people affected",
              p: "Human-centred means understanding the problem as the people inside it " +
                 "experience it. Before recommending a fix to a process, watch the " +
                 "process and talk to the people who run it. They usually know both the " +
                 "real cause and the workable fix; the analysis's job is often to " +
                 "quantify and legitimise what the floor already knows."
            },
            {
              h: "Options, criteria, then choice",
              p: "Present real options — including 'do nothing' as a priced baseline — " +
                 "and evaluate them against criteria agreed before anyone anchors on an " +
                 "answer: financial impact, risk, speed, strategic fit, people impact. " +
                 "Agreeing the criteria first turns an argument about opinions into a " +
                 "conversation about evidence."
            }
          ],
          takeaways: [
            "Agree a one-sentence problem statement before any modelling.",
            "Ask 'why' past symptoms to root causes; fix there.",
            "Talk to the people inside the problem — then quantify what they know.",
            "Agree decision criteria before evaluating options, and always price 'do nothing'."
          ]
        },
        {
          id: "m3l3",
          title: "Confident recommendations under uncertainty",
          minutes: 25,
          sections: [
            {
              h: "Have a view",
              p: "'Here are three options' is analysis. 'Here are three options and we " +
                 "recommend the second, because…' is partnering. Stakeholders can " +
                 "disagree with your recommendation, but they should never have to " +
                 "guess it. A partner who won't commit to a view is renting out a " +
                 "calculator."
            },
            {
              h: "Show your assumptions, not just your answer",
              p: "Confidence under uncertainty comes from transparency, not bravado. " +
                 "State the two or three assumptions the recommendation hinges on, show " +
                 "the range ('NPV is positive from 4% growth upward; we've assumed 6%'), " +
                 "and name what would change your mind. This lets stakeholders stress " +
                 "your logic instead of your credibility."
            },
            {
              h: "Scenarios and pre-mortems",
              p: "For material decisions, model best / base / worst rather than one " +
                 "number, and run a pre-mortem: 'It's two years on and this decision " +
                 "failed — what killed it?' The pre-mortem surfaces risks politely that " +
                 "no one would raise as objections, and the mitigations become part of " +
                 "the recommendation."
            },
            {
              h: "The one-page recommendation",
              list: [
                "The decision needed, and by when.",
                "Recommendation in one sentence, with the primary reason.",
                "Options considered, with the agreed criteria scored.",
                "Key assumptions and the sensitivity that matters most.",
                "Risks and mitigations from the pre-mortem.",
                "What you need from the decision-maker today."
              ]
            }
          ],
          takeaways: [
            "Always land on a recommendation — options alone is unfinished work.",
            "Expose assumptions, ranges and 'what would change my mind'.",
            "Use best/base/worst and a pre-mortem for material decisions.",
            "One page: decision, recommendation, options, assumptions, risks, ask."
          ]
        },
        {
          id: "m3l4",
          title: "Hard conversations and guiding through uncertainty",
          minutes: 20,
          sections: [
            {
              h: "Deliver bad news well",
              p: "Early, in person, and with a path forward. 'The project is tracking " +
                 "20% over; here's why, here's the choice we now face, and here's what " +
                 "I recommend' preserves trust. Sitting on bad news until it's " +
                 "undeniable destroys it — the cover-up costs more credibility than the " +
                 "news ever would."
            },
            {
              h: "Saying no like a partner",
              p: "A flat 'no, there's no budget' is scorekeeping. A partner's no is a " +
                 "redirect: 'We can't fund all of it this year. We could fund the pilot " +
                 "now and revisit at half-year, or trade it against project X — which " +
                 "outcome matters more to you?' You're holding the constraint while " +
                 "staying on the stakeholder's side of the table."
            },
            {
              h: "When the stakeholder pushes back hard",
              p: "Stay curious rather than defensive: 'What am I missing?' is stronger " +
                 "than restating your case louder. If new information emerges, update " +
                 "your view visibly — changing your mind on evidence builds credibility. " +
                 "If it doesn't, hold your position calmly, put both views on paper, and " +
                 "let the decision-maker decide with eyes open. You're paid for your " +
                 "honest view, not for winning."
            },
            {
              h: "Be the calm in ambiguity",
              p: "In genuinely uncertain moments — a downturn, a restructure, a shock — " +
                 "the partner's job is to give the business a way to think: what we " +
                 "know, what we don't, the range of outcomes, the triggers we're " +
                 "watching, and the decisions we can defer versus the ones we can't. " +
                 "Structure is the gift you bring when certainty isn't available."
            }
          ],
          takeaways: [
            "Bad news: early, in person, with a recommended path forward.",
            "Say no by redirecting to what's possible within the constraint.",
            "Meet pushback with curiosity; update on evidence, or hold calmly and document both views.",
            "In ambiguity, provide structure: known / unknown / range / triggers / decisions."
          ]
        }
      ],
      workshop: {
        title: "Workshop 3 — The one-page recommendation",
        brief:
          "Build a real recommendation using the Module 3 toolkit, end to end.",
        steps: [
          "Choose a live decision in your organisation that finance should have a view on (an investment, a renewal, a cost programme, a price change).",
          "Write the one-sentence problem statement: decision, deadline, context. Confirm it with the decision-maker if you can.",
          "Develop three options including a priced 'do nothing'. Agree (or propose) the decision criteria before scoring them.",
          "Run a five-minute pre-mortem on your preferred option and fold the top two risks and mitigations into the page.",
          "Write the one-page recommendation using the Lesson 3 skeleton, and identify who you'd socialise it with one-to-one before any formal meeting."
        ],
        deliverable:
          "Paste your one-sentence problem statement and one-sentence recommendation below."
      },
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
          "(decision, deadline, context)."
      },
      {
        id: "c2",
        title: "The headline",
        prompt:
          "Write the single headline sentence for your analysis, top-down style — " +
          "the answer first, in language Dana will engage with."
      },
      {
        id: "c3",
        title: "The conversation plan",
        prompt:
          "Dana is invested in the expansion and you're new. Describe in 3–5 " +
          "sentences how you'll approach the conversation: sequencing, framing in " +
          "Dana's currency, and how you'll challenge without combat."
      },
      {
        id: "c4",
        title: "The recommendation",
        prompt:
          "Draft your one-page recommendation in brief: the recommendation sentence, " +
          "at least three options (including 'do nothing'), your two key assumptions, " +
          "and the top risk from your pre-mortem with its mitigation."
      }
    ],
    /* Final assessment mirrors the real certificate: 20 questions drawn from all
       modules (plus the scenario), 50% pass mark, up to three attempts. */
    assessment: {
      title: "Final assessment",
      count: 20,
      passMark: 0.5,
      maxAttempts: 3
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
          explain: "Socialise before any formal meeting, in person, headline-first for a driver, hard on the problem and soft on the person. Ambushing Dana at the board or going around them destroys the relationship you need."
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

  /* Cohort agenda modelled on the Sep 2026 intake. */
  agenda: [
    { when: "From 7 September 2026", what: "Finance business partnering essentials (MC1)", type: "Self-paced digital learning" },
    { when: "15 September 2026, 1–3pm AEST", what: "Workshop 1 — Your partnering baseline", type: "Live virtual workshop" },
    { when: "From 16 September 2026", what: "Influential finance business partnering (MC2)", type: "Self-paced digital learning" },
    { when: "29 September 2026, 1–3pm AEST", what: "Workshop 2 — Rewrite the commentary", type: "Live virtual workshop" },
    { when: "From 30 September 2026", what: "Strategic finance business partnering (MC3)", type: "Self-paced digital learning" },
    { when: "13 October 2026, 1–3pm AEDT", what: "Workshop 3 — The one-page recommendation", type: "Live virtual workshop" },
    { when: "18–23 October 2026", what: "Final assessment — 20 questions across all modules · 50% to pass · 3 attempts", type: "Assessment window" }
  ]
};
