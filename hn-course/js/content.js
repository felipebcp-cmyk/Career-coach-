/* Course content — The Human Nature Playbook.
   An original seven-week course on attention, story and influence:
   how minds decide what matters, and how to earn — ethically — the
   attention, trust and action of other people. */

const COURSE = {
  title: "The Human Nature Playbook",
  passMark: 0.8,
  modules: [

    /* ================= MODULE 1 ================= */
    {
      id: "m1",
      title: "Foundations: The Story Engine",
      weeks: "Weeks 1–2",
      intro:
        "How the mind actually allocates attention: why stories beat information, " +
        "and the three tensions — survival, identity, progress — that decide what " +
        "people notice, believe and act on.",
      lessons: [
        {
          id: "m1l1",
          title: "Why minds run on story",
          minutes: 20,
          sections: [
            {
              h: "Attention is a survival budget",
              p: "Your brain processes a fraction of what your senses deliver, so it " +
                 "spends attention the way a poor family spends money: only on what " +
                 "might matter. What might matter, to a brain shaped by a dangerous " +
                 "past, is anything with stakes — outcomes that are uncertain and " +
                 "consequential. That's why a spreadsheet of facts slides off the mind " +
                 "while a story about one person who might lose everything grips it. " +
                 "Story is the packaging format attention was built to receive."
            },
            {
              h: "Utility is invisible; meaning is magnetic",
              p: "Nobody savours renewing a licence or standing in a queue — we want " +
                 "utility handled quickly, cheaply, invisibly, and machines keep taking " +
                 "more of it. What people freely spend money and attention on is the " +
                 "other category: meaning, identity, experience, transformation. The " +
                 "restaurant isn't selling calories and the gym isn't selling barbells. " +
                 "As more utility gets automated, the premium shifts further toward " +
                 "whoever can supply the felt, human part."
            },
            {
              h: "Stakes and novelty: the two attention triggers",
              p: "Watch what hijacks you: the game in its final minute (stakes) and the " +
                 "thing you've never seen before (novelty). Both are prediction " +
                 "problems — the mind is a forecasting machine, and it locks onto " +
                 "whatever it can't yet predict but needs to. Communication that opens " +
                 "with a settled conclusion gives the brain nothing to do. " +
                 "Communication that opens a genuine question makes leaving " +
                 "uncomfortable."
            },
            {
              h: "What this course is really teaching",
              p: "Everything that follows — the three tensions, the five levers — is " +
                 "applied storytelling: how to frame true things so that minds receive " +
                 "them. That's marketing, sales, writing, interviewing and leadership " +
                 "in one skill. It's also a responsibility: the same levers move people " +
                 "toward things that help them and things that hurt them, which is why " +
                 "this course ends with an ethics module instead of an apology."
            }
          ],
          takeaways: [
            "Attention goes to stakes: uncertain outcomes that matter.",
            "Utility is being automated; meaning, identity and experience carry the premium.",
            "Open questions hold minds; settled conclusions release them.",
            "Persuasion technique is neutral — the wielder isn't."
          ]
        },
        {
          id: "m1l2",
          title: "Survival tension: the problem-shaped mind",
          minutes: 20,
          sections: [
            {
              h: "Threat detection never switched off",
              p: "The wiring that once scanned tree lines for predators now scans " +
                 "inboxes, bank balances and social feeds. It doesn't distinguish " +
                 "gracefully between a lion and a missed invoice: a threat is anything " +
                 "that endangers what you depend on. That's why problems seize " +
                 "attention involuntarily while opportunities merely invite it — and " +
                 "why every effective piece of communication starts, one way or " +
                 "another, with a problem."
            },
            {
              h: "Survival is a spectrum, not an emergency",
              p: "Modern survival tension is rarely physical. It's financial (can I " +
                 "cover rent?), social (am I falling behind?), and opportunistic (is " +
                 "everyone else catching a wave I'm missing?). Small versions of these " +
                 "feel existential when they occupy the mind, which is why 'you're " +
                 "quietly wasting your best years' stops more scrolling thumbs than " +
                 "'improve your productivity'. The nearer a message sits to something " +
                 "the reader depends on, the more involuntary the attention."
            },
            {
              h: "Problem first, always",
              p: "A solution presented before its problem is furniture; the same " +
                 "solution presented after the problem is rescue. This is the deep " +
                 "logic of sales and of teaching alike: awareness of the problem " +
                 "creates the slot the solution fits into. If your presentation, post " +
                 "or pitch opens with your method, your credentials or your features, " +
                 "you've asked the audience to hold information with nowhere to put it."
            },
            {
              h: "Use with care",
              p: "Survival tension is the strongest and cheapest lever, which is " +
                 "exactly why fear-mongering works and why it corrodes. Naming a real " +
                 "problem the audience genuinely has builds trust; inflating or " +
                 "inventing one spends trust you can't get back. The test is simple: " +
                 "after the tension resolves, is the audience better off knowing what " +
                 "you told them?"
            }
          ],
          takeaways: [
            "Problems seize attention involuntarily; opportunities merely invite it.",
            "Modern survival tension is financial, social and opportunistic — a spectrum.",
            "Open with the problem: it creates the slot your solution fits into.",
            "Name real problems only — inflated fear spends trust you can't recover."
          ]
        },
        {
          id: "m1l3",
          title: "Identity tension: tribes, status and belonging",
          minutes: 25,
          sections: [
            {
              h: "Beliefs are membership cards",
              p: "Humans don't just survive as bodies; we survive as members. For most " +
                 "of history, exile meant death, so the mind treats belonging as " +
                 "life-support and treats attacks on the tribe's beliefs as attacks on " +
                 "itself. That's why someone will defend a sports team, a diet, a " +
                 "programming language or a political label with the energy of " +
                 "self-defence — because psychologically, it is."
            },
            {
              h: "Identity is adopted, mostly unexamined",
              p: "Nobody chooses their starting beliefs; we absorb them from parents, " +
                 "culture and whichever tribe adopted us first, because dissent was " +
                 "expensive. 'Morning person', 'coffee drinker', 'anti-this', " +
                 "'pro-that' — labels accumulate quietly and then vote on our behalf. " +
                 "The practical upshot for a communicator: people hear messages " +
                 "through the filter of who they believe they are, long before logic " +
                 "gets a turn."
            },
            {
              h: "Speak to the identity, not just the problem",
              p: "'How to fix cash flow' addresses a problem. 'If you're a freelancer " +
                 "who dreads invoicing…' addresses a person — and the person leans in, " +
                 "because being seen accurately is one of the rarest experiences on " +
                 "the internet. Messages that mirror an identity get claimed, shared " +
                 "and defended by the identity they mirror. Messages addressed to " +
                 "everyone belong to no one."
            },
            {
              h: "The escape clause for your own mind",
              p: "Understanding identity tension cuts both ways: notice which of your " +
                 "own positions you hold because they're true, and which you hold " +
                 "because your tribe does. Thinking in absolutes — all-in or " +
                 "all-against — is usually the tribe talking. The freest position is " +
                 "to test claims against reality and let evidence, not membership, " +
                 "update you. Masters of this material are hard to manipulate " +
                 "precisely because they can see the levers being pulled."
            }
          ],
          takeaways: [
            "Belonging registers as survival; attacks on beliefs feel like attacks on self.",
            "People hear messages through who they think they are — identity filters logic.",
            "Mirror a specific identity and the message gets claimed; address everyone and it belongs to no one.",
            "Audit your own labels: tribe-held beliefs are how you get played."
          ]
        },
        {
          id: "m1l4",
          title: "Progress tension: the ladder of needs",
          minutes: 25,
          sections: [
            {
              h: "Needs come in an order",
              p: "A century of developmental psychology converges on a simple shape: " +
                 "human wants stack. First safety and comfort, then belonging and " +
                 "status, then meaning, mastery and purpose. People can want any of " +
                 "these at any time, but acute lower needs narrow the mind — someone " +
                 "frightened about rent cannot hear a lecture about self-actualisation. " +
                 "The ladder isn't a moral ranking; it's a routing table for what will " +
                 "land."
            },
            {
              h: "Meet people where they are",
              p: "The most common mistake made by thoughtful people is broadcasting " +
                 "from the top of the ladder — deep ideas, nuance, purpose — to an " +
                 "audience still fighting fires on the bottom rungs. They're not " +
                 "unready because they're shallow; they're unready because urgency " +
                 "eats bandwidth. Effective sequences solve a felt, immediate problem " +
                 "first, and earn the right to raise the ceiling later."
            },
            {
              h: "Progress is the tension of the almost",
              p: "Once survival is quiet and belonging is secured, a third itch " +
                 "appears: the gap between who someone is and who they suspect they " +
                 "could be. This gap is the engine of every transformation story, " +
                 "every course, every gym membership and every January. Messages that " +
                 "make the gap vivid — and crossable — generate desire that pure " +
                 "problem-solving never touches."
            },
            {
              h: "Diagnose before you communicate",
              p: "Before writing or speaking, ask: which tension is this audience " +
                 "actually in? A stressed audience needs a named problem and a fast " +
                 "win (survival). A stable audience wants to be seen and to belong " +
                 "(identity). A comfortable audience wants to become someone " +
                 "(progress). The same product, pitched at the wrong tension, simply " +
                 "doesn't exist to the listener."
            }
          ],
          takeaways: [
            "Wants stack: safety → belonging/status → meaning/mastery.",
            "Acute lower needs narrow the mind; solve them before raising the ceiling.",
            "Progress tension is the vivid, crossable gap between current and possible self.",
            "Diagnose the audience's active tension before choosing the message."
          ]
        }
      ],
      workshop: {
        title: "Workshop 1 — Tension spotting in the wild",
        brief:
          "The tensions are invisible until you've tagged them a few dozen times — " +
          "then you can't stop seeing them. Build the eye.",
        steps: [
          "Collect five pieces of communication that stopped you this week: posts, ads, headlines, a conversation, a sermon, anything.",
          "For each, name the primary tension it pulls — survival, identity or progress — and the exact words doing the pulling.",
          "Find one piece that pulls two or more tensions at once and map which phrase does which job.",
          "Write your own tension profile: which of the three most reliably hooks YOU? What does that predict about what you'll overvalue and overshare?",
          "Rewrite one weak headline you found so it engages the tension its author missed."
        ],
        deliverable:
          "Record your strongest example (what it said, which tension, why it worked) " +
          "and your own one-sentence tension profile below."
      },
      quiz: {
        title: "Module 1 knowledge check",
        questions: [
          {
            q: "Why do stories hold attention where raw information doesn't?",
            options: [
              "Stories are shorter and easier to remember than facts",
              "Attention evolved to track uncertain outcomes that matter — and story is exactly that packaging",
              "People are less intelligent than they used to be",
              "Information is inherently boring"
            ],
            answer: 1,
            explain: "The brain budgets attention for stakes — consequential, unresolved outcomes. Story is the format built around stakes; a fact list has none."
          },
          {
            q: "As machines absorb more utility work, the lasting premium shifts toward:",
            options: [
              "Whoever can do utility slightly faster",
              "Meaning, identity and experience — the felt, human part of value",
              "Lower prices across every category",
              "Longer, more detailed product documentation"
            ],
            answer: 1,
            explain: "Utility is wanted invisible and cheap. What people freely overpay for — restaurants, brands, transformation — is meaning and identity, which automation doesn't supply."
          },
          {
            q: "Which is an example of survival tension in its modern form?",
            options: [
              "Enjoying a well-made documentary",
              "Preferring one coffee brand over another",
              "The tight-chest feeling that everyone your age is financially ahead of you",
              "Wanting to learn a language for an upcoming holiday"
            ],
            answer: 2,
            explain: "Modern survival tension is financial, social and opportunistic — threats to what you depend on. Falling behind registers as danger; preferences and hobbies don't."
          },
          {
            q: "'Problem first, always' works because:",
            options: [
              "Audiences enjoy hearing about problems",
              "It makes the communicator look knowledgeable",
              "Awareness of the problem creates the slot the solution fits into",
              "It fills time at the start of a presentation"
            ],
            answer: 2,
            explain: "A solution before its problem is furniture; after the problem, it's rescue. The problem gives the audience somewhere to put what follows."
          },
          {
            q: "People defend beliefs like sports teams because:",
            options: [
              "They have carefully verified those beliefs against evidence",
              "Beliefs function as tribal membership, and the mind treats belonging as survival",
              "Arguing is inherently enjoyable for everyone",
              "Beliefs are chosen randomly and defended out of habit"
            ],
            answer: 1,
            explain: "For most of history exile meant death, so attacks on the tribe's beliefs register as attacks on the self. That's identity tension."
          },
          {
            q: "A message that mirrors a specific identity ('If you're a freelancer who dreads invoicing…') outperforms a general one because:",
            options: [
              "Specific messages are always shorter",
              "Being seen accurately is rare, so the mirrored person leans in and claims the message",
              "General messages are grammatically weaker",
              "Freelancers read more than other people"
            ],
            answer: 1,
            explain: "Identity-mirroring messages get claimed, shared and defended by the identity they mirror. Messages addressed to everyone belong to no one."
          },
          {
            q: "Which of these is NOT one of the three tensions?",
            options: [
              "Survival",
              "Identity",
              "Efficiency",
              "Progress"
            ],
            answer: 2,
            explain: "The three tensions are survival, identity and progress. Efficiency is a utility concern — useful, but not what seizes human attention."
          },
          {
            q: "Your deep, nuanced ideas keep landing flat with a stressed, struggling audience. The ladder of needs says:",
            options: [
              "The audience is too shallow for the material",
              "Acute lower needs narrow the mind — solve a felt, immediate problem first, then raise the ceiling",
              "Repeat the same ideas more loudly and more often",
              "Deep ideas only work in books"
            ],
            answer: 1,
            explain: "Urgency eats bandwidth. Sequencing matters: meet the active tension first and earn the right to go deeper later."
          }
        ]
      }
    },

    /* ================= MODULE 2 ================= */
    {
      id: "m2",
      title: "The Five Levers of Attention and Persuasion",
      weeks: "Weeks 3–4",
      intro:
        "The working toolkit: five moves that convert the three tensions into " +
        "attention and action — naming the problem, mirroring identity, drawing " +
        "the line, painting the transformation, and giving the first step.",
      lessons: [
        {
          id: "m2l1",
          title: "Lever 1 — Name the problem (and meet awareness where it is)",
          minutes: 25,
          sections: [
            {
              h: "The five rooms of awareness",
              p: "Every audience member stands in one of five rooms. In the first, " +
                 "they don't know they have a problem. In the second, they feel the " +
                 "problem but don't know solutions exist. In the third, they know " +
                 "solutions exist but not yours. In the fourth, they know yours but " +
                 "aren't convinced. In the fifth, they're convinced and simply haven't " +
                 "acted. Classic advertising thinkers mapped this ladder decades ago, " +
                 "and it remains the highest-leverage diagnostic in communication."
            },
            {
              h: "Each room needs a different sentence",
              p: "The unaware need the problem named — vividly, in their own life's " +
                 "vocabulary. The problem-aware need to hear that a solution category " +
                 "exists. The solution-aware need your difference. The product-aware " +
                 "need proof: results, demonstrations, objections answered. The most " +
                 "aware need only an occasion — a deadline, a bonus, a reason to act " +
                 "today. Most failed communication is a right message delivered to the " +
                 "wrong room: features pitched to people who don't yet know they have " +
                 "the disease."
            },
            {
              h: "Naming is the skill",
              p: "A problem named precisely feels like mind-reading: 'you rewrote that " +
                 "email four times because you were managing their feelings, not the " +
                 "message.' The precision is the persuasion — it proves you've been " +
                 "inside the problem, which implies you know the way out. Vague " +
                 "problems ('life is busy') produce vague attention. Go one level more " +
                 "specific than feels natural."
            },
            {
              h: "The everyday version",
              p: "This lever isn't only for marketing. The meeting that opens 'here's " +
                 "the problem we're solving today' outperforms the one that opens with " +
                 "an agenda. The request that starts by naming the other person's " +
                 "constraint gets a warmer hearing than the one that starts with your " +
                 "need. Frame the situation before you propose anything, every time."
            }
          ],
          takeaways: [
            "Diagnose the room: unaware → problem → solution → product → most aware.",
            "Each room needs a different message; features pitched to the unaware bounce off.",
            "Name problems with uncomfortable precision — specificity reads as mind-reading.",
            "Open everything — meetings, asks, essays — by framing the problem."
          ]
        },
        {
          id: "m2l2",
          title: "Lever 2 — Mirror the identity",
          minutes: 20,
          sections: [
            {
              h: "'If you're…' — two words that sort the world",
              p: "The fastest way to pull identity tension is direct address: 'If " +
                 "you're the friend who always organises the trip…', 'If you're a " +
                 "developer who hates marketing…'. The reader performs an involuntary " +
                 "check — is that me? — and if the answer is yes, you have something " +
                 "no headline trick buys: self-selected attention. They opted in by " +
                 "recognising themselves."
            },
            {
              h: "Mirror the person, not the demographic",
              p: "'Attention: freelancers' is a demographic — a census category nobody " +
                 "feels. 'You've finished the work, and now comes the part you hate: " +
                 "asking to be paid' is a person. Good mirrors reflect behaviour, " +
                 "private thoughts and small scenes, not age brackets. The interior " +
                 "detail is what produces the 'how did you know?' effect that gets a " +
                 "message saved and sent to a friend."
            },
            {
              h: "Aspirational mirrors",
              p: "You can mirror who someone is, or who they're trying to be — 'for " +
                 "writers who ship' flatters an identity into existence. People act to " +
                 "stay consistent with identities they've accepted, which is why " +
                 "'you're clearly someone who takes this seriously' changes behaviour " +
                 "more reliably than instructions do. Offer an identity worth keeping " +
                 "and people will do the work of keeping it."
            },
            {
              h: "One audience per message",
              p: "The price of the mirror is choice. A message aimed at two identities " +
                 "reflects neither; a mirror angled at everyone shows nobody. Decide, " +
                 "before writing a single line, whose face should appear in it — one " +
                 "person, specifically imagined — and accept that everyone else is " +
                 "overhearing."
            }
          ],
          takeaways: [
            "Direct address triggers the involuntary 'is that me?' check.",
            "Mirror behaviour and private thoughts, not demographics.",
            "Aspirational identities recruit consistency: people act to keep identities they accept.",
            "Write to one specifically imagined person; everyone else overhears."
          ]
        },
        {
          id: "m2l3",
          title: "Lever 3 — Draw the line: exclusion and belonging",
          minutes: 20,
          sections: [
            {
              h: "Belonging needs a boundary",
              p: "A club everyone can join confers nothing. The moment you say who " +
                 "something is NOT for, membership starts to mean something — and " +
                 "identity tension does the rest. 'This isn't for people looking for " +
                 "hacks' simultaneously repels the wrong audience and tightens the " +
                 "grip on the right one, who now feel chosen rather than targeted."
            },
            {
              h: "Exclusion clarifies the offer",
              p: "Drawing the line is also honest positioning. 'Not for agencies — " +
                 "built for freelancers' tells the buyer more in six words than a " +
                 "feature table does, because it reveals the trade-offs you designed " +
                 "around. Ambiguity about who something serves reads as either " +
                 "desperation or dishonesty; a clean boundary reads as confidence."
            },
            {
              h: "Sequence: mirror first, then exclude",
              p: "Exclusion lands best immediately after a mirror. First the reader " +
                 "recognises themselves ('if you're tired of your own excuses…'), " +
                 "then the line confirms the recognition ('…this isn't for people who " +
                 "want to feel productive; it's for people who want the result'). The " +
                 "pair converts passive agreement into a small act of choosing — and " +
                 "chosen positions get defended."
            },
            {
              h: "Don't punch down",
              p: "Exclusion defines your standards, not your contempt. 'Not for " +
                 "beginners' is a boundary; mocking beginners is a brand of insecurity " +
                 "the audience reads instantly. Draw lines around commitment, values " +
                 "and fit — never around the people you'd be lucky to serve later."
            }
          ],
          takeaways: [
            "Membership means nothing without a boundary; saying who it's not for creates belonging.",
            "A clean 'not for X' communicates positioning faster than any feature list.",
            "Mirror first, then exclude — recognition, then choice.",
            "Exclude on commitment and fit, never with contempt."
          ]
        },
        {
          id: "m2l4",
          title: "Lever 4 — Paint the transformation",
          minutes: 25,
          sections: [
            {
              h: "Imagination is rehearsal",
              p: "When someone vividly imagines an experience, much of the same neural " +
                 "machinery fires as when they live it. A painted future is therefore " +
                 "not decoration — it's a free sample of the destination. This is why " +
                 "every enduring piece of persuasion, from great speeches to good " +
                 "product pages, spends time in the world after the problem is solved."
            },
            {
              h: "Concrete beats grand",
              p: "'Transform your life' simulates nothing — there's no scene to " +
                 "render. 'It's Tuesday morning; you've sent the invoice without " +
                 "rereading it once' renders instantly. The rule: paint at the " +
                 "resolution of a single ordinary moment. Specific mornings, specific " +
                 "sentences said by specific people. Grand abstractions are how " +
                 "transformations sound fake; small concrete scenes are how they " +
                 "sound inevitable."
            },
            {
              h: "Transformation is an identity event",
              p: "Notice what the best transformations promise: not a feature outcome " +
                 "but a changed self. Not 'your invoices are formatted correctly' but " +
                 "'you stop feeling like an impostor asking to be paid'. The product " +
                 "is the bridge; the destination is who they get to be on the other " +
                 "side. Progress tension and identity tension meet exactly here."
            },
            {
              h: "Earn it with honesty",
              p: "Paint futures you can actually cause. The transformation lever is " +
                 "the most abused in the toolkit — every scam is a beautiful painting " +
                 "— so credibility details matter: realistic timelines, named costs, " +
                 "what it won't do. Paradoxically, admitting limits makes the painted " +
                 "future more believable, not less."
            }
          ],
          takeaways: [
            "A vividly imagined future is a free sample — imagination rehearses experience.",
            "Paint at the resolution of one ordinary moment, not grand abstractions.",
            "Promise the changed self, not just the changed output.",
            "Admit limits and costs — honesty makes the painting believable."
          ]
        },
        {
          id: "m2l5",
          title: "Lever 5 — Give the first step",
          minutes: 20,
          sections: [
            {
              h: "The gap where change dies",
              p: "People rarely fail to change because they're unconvinced; they fail " +
                 "because the distance between conviction and action looks unwalkable. " +
                 "The current life is comfortable and the full journey is enormous, so " +
                 "the mind files 'change' under someday. The last lever closes this " +
                 "gap by shrinking the ask until refusing it feels sillier than doing " +
                 "it."
            },
            {
              h: "Design the ridiculous first step",
              p: "Not 'overhaul your sleep' — 'tonight, in bed one hour earlier'. Not " +
                 "'migrate your business' — 'send one invoice with it, free, in five " +
                 "minutes'. The first step should be so small it embarrasses the " +
                 "excuses, and so immediately rewarding that the second step suggests " +
                 "itself. You're not asking for the journey; you're asking for a " +
                 "single footprint."
            },
            {
              h: "Open loops want closing",
              p: "Once someone starts a task — even just mentally — an unresolved " +
                 "tension forms that nags to be finished; psychologists have observed " +
                 "for a century that interrupted tasks are remembered and resumed far " +
                 "more than never-started ones. Starting is therefore most of " +
                 "persuasion: the checklist begun, the field half-filled, the first " +
                 "chapter free. Momentum is manufactured, not found."
            },
            {
              h: "The full sequence",
              p: "You now hold the whole chain: name the problem (attention), mirror " +
                 "the identity (recognition), draw the line (choice), paint the " +
                 "transformation (desire), give the first step (action). One message " +
                 "rarely needs all five — but every message that works is running at " +
                 "least one, and you should always know which."
            }
          ],
          takeaways: [
            "Change fails at the gap between conviction and action — shrink the ask.",
            "Make the first step embarrassingly small and immediately rewarding.",
            "Started tasks create their own tension to continue; manufacture the start.",
            "Problem → mirror → line → transformation → first step: know which lever each message runs."
          ]
        }
      ],
      workshop: {
        title: "Workshop 2 — Write the five levers",
        brief:
          "Theory becomes skill only under an audience. Write all five levers on one " +
          "idea you actually care about — then let reality grade one of them.",
        steps: [
          "Pick one idea, product or belief you genuinely want more people to get.",
          "Write five short pieces (2–4 sentences each), one per lever: a problem-naming opener, an 'if you're…' mirror, a 'this isn't for…' line, a single-moment transformation scene, and a ridiculous first step.",
          "Read them aloud. Cut every phrase a real person wouldn't say across a table.",
          "Publish or send the strongest one — a post, a message to a friend, an email. Reality is the grader; theory doesn't count.",
          "Record what happened: replies, silence, shares, pushback. Silence is data too — usually about the mirror being angled at no one."
        ],
        deliverable:
          "Paste your strongest lever piece below, name the lever and tension it " +
          "pulls, and note what happened when a real human met it."
      },
      quiz: {
        title: "Module 2 knowledge check",
        questions: [
          {
            q: "Your audience complains constantly about the problem but has never heard that solutions exist. Your first message should:",
            options: [
              "List your product's features and pricing",
              "Show testimonials and handle objections",
              "Announce that this problem is solvable — introduce the solution category",
              "Offer a discount that expires tonight"
            ],
            answer: 2,
            explain: "They're problem-aware. Features, proof and urgency belong to later rooms; the problem-aware need to hear a solution exists at all."
          },
          {
            q: "The 'most aware' segment of an audience needs:",
            options: [
              "A vivid renaming of their problem",
              "An education in why the problem matters",
              "A comparison against every competitor",
              "An occasion to act — a deadline, a reason to do it today"
            ],
            answer: 3,
            explain: "The most aware are convinced and simply haven't moved. More persuasion is noise; a nudge — a real deadline or occasion — is the message."
          },
          {
            q: "Why does naming a problem with uncomfortable precision persuade?",
            options: [
              "Precision makes the message longer and more thorough",
              "It proves you've been inside the problem, which implies you know the way out",
              "Audiences prefer complicated language",
              "It filters out readers who can't follow details"
            ],
            answer: 1,
            explain: "Specificity reads as mind-reading: 'you rewrote that email four times' earns more trust than 'communication is hard', because insight into the problem implies possession of the exit."
          },
          {
            q: "'Attention: freelancers' underperforms 'You've finished the work — now comes the part you hate: asking to be paid' because:",
            options: [
              "The second sentence is grammatically superior",
              "The first is a census category; the second mirrors a lived interior moment",
              "Freelancers dislike being addressed directly",
              "Longer openings always perform better"
            ],
            answer: 1,
            explain: "Good mirrors reflect behaviour and private thoughts, not demographics. The interior detail creates the 'how did you know?' effect."
          },
          {
            q: "The right sequence for mirror and exclusion is:",
            options: [
              "Exclude first to filter, then mirror the survivors",
              "Mirror first (recognition), then draw the line (choice)",
              "Use only one, never both",
              "Alternate them sentence by sentence"
            ],
            answer: 1,
            explain: "Recognition then confirmation: the reader sees themselves, then the line converts agreement into an act of choosing — and chosen positions get defended."
          },
          {
            q: "'This isn't for beginners' versus mocking beginners — the difference matters because:",
            options: [
              "Both are equally effective boundary-setting",
              "Boundaries define standards; contempt broadcasts insecurity and repels the audience you'd serve later",
              "Mocking is fine if the product is good",
              "Exclusion should never be stated openly"
            ],
            answer: 1,
            explain: "Exclude on commitment, values and fit. Punching down reads instantly as insecurity and burns future goodwill."
          },
          {
            q: "Painting a transformation works because:",
            options: [
              "Audiences enjoy fiction",
              "Vividly imagining an experience engages much of the same machinery as living it — a free sample of the destination",
              "It fills space before the call to action",
              "Abstract promises are legally safer"
            ],
            answer: 1,
            explain: "Imagination is rehearsal. A painted future gives a felt preview — which is why the scene must be concrete enough to render."
          },
          {
            q: "The better transformation line is:",
            options: [
              "'Transform your entire financial life'",
              "'Unlock your limitless potential'",
              "'It's Tuesday morning; you've sent the invoice without rereading it once'",
              "'Experience a paradigm shift in workflow optimisation'"
            ],
            answer: 2,
            explain: "Paint at the resolution of one ordinary moment. Grand abstractions render nothing; a small concrete scene renders instantly and feels inevitable."
          },
          {
            q: "A good first step is:",
            options: [
              "A complete plan for the whole journey, to show seriousness",
              "So small it embarrasses the excuses, and immediately rewarding enough to suggest step two",
              "Deliberately difficult, to filter for commitment",
              "Optional, mentioned only in the footnotes"
            ],
            answer: 1,
            explain: "Change dies in the gap between conviction and action. Shrink the ask to a single footprint; started tasks generate their own pressure to continue."
          },
          {
            q: "The five levers in working order are:",
            options: [
              "Transformation → exclusion → problem → step → mirror",
              "Problem → mirror → line → transformation → first step",
              "Mirror → problem → transformation → line → first step",
              "First step → problem → mirror → transformation → line"
            ],
            answer: 1,
            explain: "Attention (problem), recognition (mirror), choice (line), desire (transformation), action (first step). Few messages need all five, but every working message runs at least one."
          }
        ]
      }
    },

    /* ================= MODULE 3 ================= */
    {
      id: "m3",
      title: "Influence in Practice: Ethics, Reality and Mastery",
      weeks: "Weeks 5–6",
      intro:
        "Where the levers meet the real world: the line between persuasion and " +
        "manipulation, testing against reality instead of theory, reading people " +
        "one-to-one, and turning human nature into the meta-skill under every " +
        "other skill.",
      lessons: [
        {
          id: "m3l1",
          title: "The ethics line: persuasion vs manipulation",
          minutes: 25,
          sections: [
            {
              h: "The tool is neutral; the wielder isn't",
              p: "Every lever in this course is used daily to sell medicine and to " +
                 "sell snake oil, to get children to read and to get adults to rage. " +
                 "The technique carries no ethics of its own. What decides the " +
                 "morality is the exchange underneath: manipulation extracts value " +
                 "from the audience for the persuader's benefit; persuasion moves " +
                 "someone toward something that genuinely serves them, faster than " +
                 "they'd have moved alone."
            },
            {
              h: "The transparency test",
              p: "One question separates the two more reliably than any philosophy " +
                 "seminar: if the audience could see exactly what you're doing and " +
                 "why — every lever, every framing choice — would they thank you or " +
                 "feel used? A doctor naming your symptoms precisely passes; a fake " +
                 "countdown timer fails. Techniques that only work while hidden are " +
                 "manipulation by definition."
            },
            {
              h: "Desperation is the corrupting force",
              p: "People rarely choose manipulation as a philosophy; they slide into " +
                 "it under pressure. When your own survival tension is screaming — " +
                 "rent due, launch failing — the shortcut whispers. This is the " +
                 "practical reason to manage your own ladder of needs: an operator " +
                 "with margin can afford to be honest, and honesty compounds while " +
                 "tricks decay. Know which tension YOU are in before you write a " +
                 "single persuasive word."
            },
            {
              h: "Ethics is also strategy",
              p: "Manipulation has a business model: it maximises the first " +
                 "transaction and forfeits every one after it. Refunds, churn, " +
                 "reputation, the audience that never returns — the invoice arrives " +
                 "later but it always arrives. Trust is the only asset in this game " +
                 "that appreciates. The most persuasive thing you will ever build is " +
                 "a track record of people being glad they listened to you."
            }
          ],
          takeaways: [
            "Manipulation extracts value; persuasion delivers it faster than the audience would find it alone.",
            "The transparency test: would they thank you if they saw every move?",
            "Your own unmet needs are the corrupting force — know your tension before persuading.",
            "Trust compounds; tricks decay. Ethics and long-term strategy point the same way."
          ]
        },
        {
          id: "m3l2",
          title: "Test against reality",
          minutes: 20,
          sections: [
            {
              h: "Knowledge that hasn't touched reality isn't knowledge",
              p: "You can read every book on persuasion and psychology and still be " +
                 "unable to hold a room, sell a product or write a post anyone " +
                 "finishes. Until an idea has been tested on actual humans who were " +
                 "free to ignore you, it's a hypothesis wearing a diploma. The " +
                 "difference between people who understand human nature and people " +
                 "who've read about it is a stack of real-world responses."
            },
            {
              h: "Publishing is the laboratory",
              p: "Writing in public, speaking, selling, pitching — these aren't just " +
                 "applications of the skill; they're how the skill is acquired. Every " +
                 "post is an experiment: a tension chosen, a lever pulled, a result " +
                 "measured in replies, silence or shares. The market is a blunt, " +
                 "unflattering, absolutely honest mentor, and it charges nothing but " +
                 "ego."
            },
            {
              h: "Read the feedback correctly",
              p: "Silence usually means the mirror was angled at nobody. Attention " +
                 "without action usually means the transformation was vivid but the " +
                 "first step was missing or too big. Anger often means you hit " +
                 "identity tension without offering belonging on the other side. " +
                 "Treat every response — including none — as information about which " +
                 "lever failed, and iterate the lever, not your self-worth."
            },
            {
              h: "Volume before judgment",
              p: "The first twenty attempts mostly calibrate your instrument. Decide " +
                 "in advance to run the experiment twenty times before concluding " +
                 "anything about your ability — one post proves nothing in either " +
                 "direction. Consistency of testing beats intensity of theorising, " +
                 "in exactly the way ten cold showers beat a semester of reading " +
                 "about discipline."
            }
          ],
          takeaways: [
            "Untested knowledge is a hypothesis wearing a diploma.",
            "Publishing, pitching and selling are the laboratory, not the graduation.",
            "Silence, inaction and anger each diagnose a specific failed lever.",
            "Run twenty experiments before judging yourself; iterate levers, not self-worth."
          ]
        },
        {
          id: "m3l3",
          title: "Reading people one-to-one",
          minutes: 25,
          sections: [
            {
              h: "The tensions walk into every room",
              p: "Interviews, negotiations, sales calls, first dates, family dinners — " +
                 "every conversation has an active tension, and the person will show " +
                 "you which. The one who keeps mentioning runway and costs is in " +
                 "survival. The one who keeps referencing how decisions will look is " +
                 "in identity. The one asking 'where does this go long-term?' is in " +
                 "progress. Your job is to stop broadcasting and start diagnosing."
            },
            {
              h: "Listen for the sentence under the sentence",
              p: "People state positions and hide interests. 'We need more detail' " +
                 "can mean 'I can't defend this upstairs yet' (identity), 'I'm afraid " +
                 "of being blamed' (survival), or 'show me this leads somewhere' " +
                 "(progress) — three different sentences requiring three different " +
                 "replies. The cheapest diagnostic is the one almost nobody uses: " +
                 "genuine curiosity, expressed as short questions, followed by " +
                 "silence you don't fill."
            },
            {
              h: "Persuade in their frame, not yours",
              p: "Once you know the active tension, translate your proposal into its " +
                 "currency. The same project is 'a way to stop the bleeding' to a " +
                 "survival listener, 'the thing your name gets attached to' to an " +
                 "identity listener, and 'the first step toward where you said you " +
                 "want to be' to a progress listener. None of these is dishonest — " +
                 "they're the same truth, addressed to the part of the person that's " +
                 "listening."
            },
            {
              h: "Mastery of self comes first",
              p: "The hardest person in the room to read is you. Your own tensions " +
                 "distort every exchange: unacknowledged survival fear makes you " +
                 "push too hard; identity hunger makes you perform instead of listen. " +
                 "The practitioners people describe as having 'presence' are mostly " +
                 "people whose own tensions are quiet enough to leave attention free " +
                 "for the other side of the table. That is what mastering your mind, " +
                 "rather than serving it, actually looks like."
            }
          ],
          takeaways: [
            "Every conversation has an active tension; the other person shows you which.",
            "Positions hide interests — short questions plus unfilled silence surface them.",
            "Translate one truth into the listener's currency: relief, recognition or direction.",
            "Quiet your own tensions first; presence is spare attention."
          ]
        },
        {
          id: "m3l4",
          title: "The meta-skill: compounding human nature into everything",
          minutes: 20,
          sections: [
            {
              h: "Every 'high-value skill' is a layer on this one",
              p: "Copywriting is the tensions in text. Sales is the tensions in " +
                 "conversation. Product design is the first-step lever industrialised. " +
                 "Leadership is identity and progress tension held for a group. " +
                 "Fashionable skills will keep changing names every two years, but " +
                 "each one routes through the same substrate: a human deciding " +
                 "whether to pay attention, believe, and act. Learn the substrate and " +
                 "every layer above it comes at a discount."
            },
            {
              h: "Why this outlasts the tools",
              p: "Tools now generate competent text, images and code on demand — " +
                 "competence is becoming ambient. What stays scarce is knowing what " +
                 "will move a particular human: which tension is live, which room of " +
                 "awareness they're in, which first step they'd actually take. The " +
                 "person who understands the audience directs the tools; the person " +
                 "who only understands the tools awaits direction."
            },
            {
              h: "The practice loop, permanently installed",
              p: "The course ends; the loop shouldn't. Each week: notice one piece of " +
                 "communication that moved you and name the lever it pulled; ship one " +
                 "small experiment of your own; read the response as diagnosis. " +
                 "Fifteen minutes a week, compounding for years, is how 'studied " +
                 "persuasion once' becomes 'understands people' — a reputation that " +
                 "opens doors no credential opens."
            },
            {
              h: "The standard you carry",
              p: "You now see the levers everywhere — in ads, sermons, headlines and " +
                 "your own drafts — which means you've inherited the operator's " +
                 "burden: you can no longer pull them innocently. Hold the " +
                 "transparency test, paint only futures you can cause, and use the " +
                 "strongest tools on the worthiest problems you can find. Making " +
                 "people glad they listened to you is the entire game, played " +
                 "honestly, for as long as you're in it."
            }
          ],
          takeaways: [
            "Every high-value skill is a layer over the same substrate: human attention, belief, action.",
            "As competence becomes ambient, knowing what moves a human stays scarce.",
            "Install the weekly loop: spot a lever, ship an experiment, read the diagnosis.",
            "You see the levers now — you can't pull them innocently. Carry the standard."
          ]
        }
      ],
      workshop: {
        title: "Workshop 3 — The influence audit",
        brief:
          "Take one real, upcoming ask in your life and design it deliberately — " +
          "tensions, levers, ethics and all.",
        steps: [
          "Choose a real ask with stakes: a job application, a pitch, a raise conversation, a launch post, a difficult favour.",
          "Diagnose the audience: which tension is active for them right now, and which room of awareness are they in?",
          "Draft the ask using at least three levers — name their problem, mirror who they are, and give a first step so small that 'yes' is easy.",
          "Run the transparency test on your draft: if they saw every move, would they thank you? Rewrite anything that fails.",
          "Deliver it in the real world within seven days, and record what happened and which lever you'd adjust."
        ],
        deliverable:
          "Paste your final ask below (or its key lines), name the tension and levers " +
          "it uses, and note the result once it's delivered."
      },
      quiz: {
        title: "Module 3 knowledge check",
        questions: [
          {
            q: "The clearest line between persuasion and manipulation is:",
            options: [
              "Persuasion uses facts; manipulation uses emotion",
              "Whether the technique would still work — and be thanked — if the audience saw every move",
              "Persuasion is done in writing; manipulation in person",
              "There is no meaningful difference"
            ],
            answer: 1,
            explain: "Emotion is legitimate; hidden extraction isn't. Techniques that only work while concealed fail the transparency test — that's the definition of manipulation."
          },
          {
            q: "Why does managing your own needs matter ethically?",
            options: [
              "It doesn't — ethics is independent of circumstances",
              "Desperation is the corrupting force: unmet survival tension makes the manipulative shortcut whisper",
              "Wealthy people are inherently more ethical",
              "It only matters for full-time marketers"
            ],
            answer: 1,
            explain: "People slide into manipulation under pressure, not by philosophy. An operator with margin can afford honesty — which compounds while tricks decay."
          },
          {
            q: "'Untested knowledge is a hypothesis wearing a diploma' argues that:",
            options: [
              "Reading psychology books is a waste of time",
              "Understanding requires feedback from real humans who were free to ignore you",
              "Diplomas are the best evidence of skill",
              "Testing is only necessary for scientists"
            ],
            answer: 1,
            explain: "Books load the hypothesis; reality grades it. The difference between knowing about persuasion and being persuasive is a stack of real-world responses."
          },
          {
            q: "Your post got attention and agreement but nobody acted. The most likely failed lever is:",
            options: [
              "The problem wasn't named",
              "The identity mirror was wrong",
              "The first step was missing or too big",
              "The exclusion line was too harsh"
            ],
            answer: 2,
            explain: "Attention without action is the signature of a conviction–action gap: desire was created, but the footprint-sized first step wasn't offered."
          },
          {
            q: "In a negotiation, the other party keeps returning to how the deal will look to their board. Their active tension is:",
            options: [
              "Survival",
              "Identity — status and how they're seen",
              "Progress",
              "None; they're being irrational"
            ],
            answer: 1,
            explain: "References to appearance, reputation and how decisions will be judged signal identity tension. Frame the proposal as the thing their name is proudly attached to."
          },
          {
            q: "Translating one proposal into 'stops the bleeding' for one listener and 'the first step toward your stated goal' for another is:",
            options: [
              "Dishonest, because the message changed",
              "Honest, if both framings are true — the same truth addressed to the part of the person that's listening",
              "Only acceptable in writing",
              "Manipulation by definition"
            ],
            answer: 1,
            explain: "Framing in the listener's currency is translation, not deception — provided each frame is true. Manipulation begins when the frames are false or hide the exchange."
          },
          {
            q: "Why does the 'meta-skill' argument say human nature outlasts specific hot skills?",
            options: [
              "Because tools change but every skill routes through a human deciding to attend, believe and act",
              "Because psychology degrees are cheaper than technical ones",
              "Because human nature is easier to learn than technical skills",
              "Because employers legally require it"
            ],
            answer: 0,
            explain: "The people with money, opportunities and resources are humans. As tools make competence ambient, knowing what moves a particular human is what stays scarce."
          },
          {
            q: "An A/B test shows your most fear-heavy headline converts best — followed by high refunds and churn. The right conclusion is:",
            options: [
              "Keep it: conversion is the only metric",
              "The headline maximised the first transaction by borrowing against every one after it — choose the sustainable frame",
              "Refunds are unrelated to messaging",
              "Fear should never appear in any message"
            ],
            answer: 1,
            explain: "Manipulation's business model is winning transaction one and forfeiting the rest. Naming real fears is legitimate; inflating them buys conversions with trust you'll repay with interest."
          }
        ]
      }
    }
  ],

  /* ================= CAPSTONE ================= */
  capstone: {
    title: "Capstone — The Quiet Launch",
    weeks: "Week 7",
    scenario:
      "You've spent six months of nights and weekends building Inkwell, a " +
      "portfolio-and-invoicing tool for freelance illustrators. It works — your 20 " +
      "beta users are active, and 14 of them said some version of the same " +
      "sentence: 'I finally sent an invoice without feeling like a fraud.' The " +
      "problem is that nobody else knows Inkwell exists. You have 500 followers, " +
      "no ad budget, and a savings runway of about four months. Your competitor, " +
      "StudioSuite, has more features, a sales team, and messaging so bland it " +
      "could be for any product ('streamline your creative workflow'). Scrolling " +
      "illustrator communities, you notice they complain constantly about clients " +
      "ghosting on payment and about 'not feeling like a real business' — but " +
      "almost nobody mentions wanting software. You need 200 paying users in " +
      "twelve weeks. Design the launch.",
    tasks: [
      {
        id: "c1",
        title: "Diagnose the room",
        prompt:
          "Which stage of awareness are the illustrator communities in, what " +
          "evidence from the scenario tells you, and what must your first wave of " +
          "content therefore do (and NOT do)?"
      },
      {
        id: "c2",
        title: "The mirror and the line",
        prompt:
          "Write the actual launch-post opening: an 'if you're…' identity mirror " +
          "drawn from the scenario's details, followed by a 'this isn't for…' " +
          "exclusion line that positions Inkwell against StudioSuite without naming it."
      },
      {
        id: "c3",
        title: "The transformation and the first step",
        prompt:
          "Paint the after-state in one concrete, single-moment scene (use what the " +
          "beta users told you), then design the smallest possible first step a " +
          "sceptical illustrator could take this week."
      },
      {
        id: "c4",
        title: "The ethics check",
        prompt:
          "Name the two places this campaign would be most tempted to slide into " +
          "manipulation given your four-month runway, and write the guardrail you'll " +
          "hold for each (transparency-test them)."
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
        q: "Illustrators complain about ghosting clients and 'not feeling like a real business' but never mention software. Their awareness stage is:",
        options: [
          "Most aware — they just need a discount",
          "Product aware — they're comparing Inkwell to StudioSuite",
          "Problem aware — they feel the problem but don't know a solution category exists",
          "Unaware — they don't feel any problem"
        ],
        answer: 2,
        explain: "They articulate the pain constantly (problem aware) but don't connect it to a solution category. The first content wave must introduce that the problem is solvable — not pitch features to people who aren't looking for software."
      },
      {
        q: "The strongest launch-post opening for this audience is:",
        options: [
          "'Inkwell: portfolio and invoicing, beautifully integrated'",
          "'If you've ever redrafted a payment reminder five times because you didn't want to seem difficult — this is for you'",
          "'Attention freelance illustrators: new software available'",
          "'StudioSuite is overpriced. Here's why.'"
        ],
        answer: 1,
        explain: "It mirrors a lived interior moment (identity) drawn from the audience's actual behaviour. Feature lists pitch the wrong awareness stage; 'attention freelancers' is a census category; attacking the competitor leads with your insecurity."
      },
      {
        q: "Fourteen beta users said 'I finally sent an invoice without feeling like a fraud.' This tells you the product's real value sits in:",
        options: [
          "Utility — faster invoice formatting",
          "Identity — becoming someone who feels like a legitimate professional",
          "Price — it must be cheaper than StudioSuite",
          "Novelty — illustrators like new tools"
        ],
        answer: 1,
        explain: "The repeated sentence is an identity event, not a feature review. The messaging should sell who they get to be — a real business — with the software as the bridge."
      },
      {
        q: "The best exclusion line for Inkwell's positioning is:",
        options: [
          "'Not for agencies with a billing department — built for one illustrator, alone at the kitchen table, doing everything'",
          "'Not for people who can't afford quality tools'",
          "'Not for beginners who aren't serious yet'",
          "'For everyone who invoices anything'"
        ],
        answer: 0,
        explain: "It draws the line on fit, implicitly positions against the big bland competitor, and deepens belonging for the actual audience. Punching down repels; erasing the boundary makes membership meaningless."
      },
      {
        q: "The smallest effective first step to offer sceptical illustrators is:",
        options: [
          "A 45-minute onboarding call to migrate their whole workflow",
          "A whitepaper on freelance payment statistics",
          "'Send your next invoice with Inkwell — free, five minutes, no migration'",
          "A 20% discount on the annual plan"
        ],
        answer: 2,
        explain: "One footprint: tiny, immediately rewarding, and it starts the loop that wants finishing. Migration calls and annual commitments are journey-sized asks; the whitepaper informs but doesn't start anything."
      },
      {
        q: "With rent pressure mounting, you consider a fake 'only 12 spots left' counter. The course's verdict:",
        options: [
          "Fine — everyone does scarcity",
          "It fails the transparency test, and borrows trust from a brand whose whole promise is making people feel legitimate — use a real deadline or none",
          "Acceptable if it converts well in the A/B test",
          "Only a problem if customers find out"
        ],
        answer: 1,
        explain: "A fabricated constraint only works while hidden — manipulation by definition. It's doubly toxic here: the product's value proposition is professional legitimacy. Desperation is the corrupting force; this is exactly the moment to hold the guardrail."
      }
    ]
  },

  /* Suggested pacing — self-paced, so treat weeks as a rhythm, not deadlines. */
  agenda: [
    { when: "Week 1", what: "Module 1 lessons — the story engine and the three tensions", type: "Self-paced lessons" },
    { when: "Week 2", what: "Workshop 1 — Tension spotting in the wild · Module 1 knowledge check", type: "Applied practice" },
    { when: "Week 3", what: "Module 2 lessons — the five levers", type: "Self-paced lessons" },
    { when: "Week 4", what: "Workshop 2 — Write the five levers · Module 2 knowledge check", type: "Applied practice" },
    { when: "Week 5", what: "Module 3 lessons — ethics, reality, mastery", type: "Self-paced lessons" },
    { when: "Week 6", what: "Workshop 3 — The influence audit · Module 3 knowledge check", type: "Applied practice" },
    { when: "Week 7", what: "Capstone scenario, then the final assessment — 20 questions · 70% to pass", type: "Capstone & assessment" }
  ]
};
