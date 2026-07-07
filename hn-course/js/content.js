/* Course content — The Human Nature Playbook.
   An original seven-week executive course on attention, story and influence:
   how minds decide what matters, and how to earn — ethically — the
   attention, trust and action of other people.

   Lesson anatomy: sections (core teaching) → example (worked mini-case) →
   mistakes (where this goes wrong) → exercise (apply it today) →
   takeaways → sources (where this comes from / further reading).
   Each module also ships downloadable tools (markdown templates). */

const COURSE = {
  title: "The Human Nature Playbook",
  passMark: 0.8,

  /* Formal learning outcomes, mapped to lessons/assessments. No single external
     body governs this domain; the competency vocabulary follows widely used
     corporate categories plus the named source frameworks (Schwartz's awareness
     stages, Cialdini's principles). */
  outcomes: {
    anchor: "Each outcome names where it is taught (L = lesson, W = workshop, " +
      "Q = quiz, C = capstone) so a marker can verify it. Competency labels use " +
      "common corporate categories; source frameworks are credited in-lesson.",
    list: [
      { text: "Diagnose any audience's active tension (survival / identity / progress) and awareness stage from their verbatim language, and choose the entry-point message accordingly.",
        maps: "L1.2–1.4, L2.1 · W1 · Q1–Q2", competency: "Audience analysis / market research" },
      { text: "Rebuild a testimonial into a five-part story (character, desire, obstacle, stakes, turn) with an unfakeable detail, the customer as hero, and the aggregate as closer.",
        maps: "L1.5 · W1 · Q1", competency: "Narrative communication" },
      { text: "Write all five levers for one offer — problem, mirror, line, transformation with an honest edge, footprint first step — and ship one to a live audience.",
        maps: "L2.1–2.5 · W2 · Q2", competency: "Persuasive writing / copywriting" },
      { text: "Design a first step that passes the five-minute / nothing-new / visible-result test, with endowed progress, for any behaviour you need others to start.",
        maps: "L2.5 · W2 · Q2", competency: "Behaviour design / product onboarding" },
      { text: "Run a component-level transparency audit on a funnel or campaign and write personal guardrail rules that survive runway pressure.",
        maps: "L3.1, L3.5 · W3 · Q3 · C", competency: "Ethical influence / marketing governance" },
      { text: "Run a publish–predict–measure experiment log for at least twenty communication experiments, reading silence, inaction and anger as specific lever diagnoses.",
        maps: "L3.2 · W2–W3 · Q3", competency: "Experimentation / growth practice" },
      { text: "Read a live conversation's active tension using labels and unfilled silence, and reframe one proposal into the listener's currency without changing its truth.",
        maps: "L3.3 · W3 · Q3", competency: "Interpersonal influence / negotiation" },
      { text: "Annotate any persuasive message against the six classic principles, identifying the checkable fact (or its absence) under each.",
        maps: "L3.5 · W3 · Q3 · C", competency: "Influence literacy (offence and defence)" }
    ]
  },

  modules: [

    /* ================= MODULE 1 ================= */
    {
      id: "m1",
      title: "Foundations: The Story Engine",
      weeks: "Weeks 1–2",
      intro:
        "How the mind actually allocates attention: why stories beat information, " +
        "the three tensions — survival, identity, progress — that decide what " +
        "people notice, believe and act on, and the narrative mechanics that " +
        "make a message carry.",
      lessons: [
        {
          id: "m1l1",
          title: "Why minds run on story",
          minutes: 15,
          sections: [
            {
              h: "Attention is a survival budget",
              p: `Your brain processes a fraction of what your senses deliver, so it spends attention the way a poor family spends money: only on what might matter. What might matter, to a brain shaped by a dangerous past, is anything with stakes — outcomes that are uncertain and consequential. That's why a spreadsheet of facts slides off the mind while a story about one person who might lose everything grips it. Story is the packaging format attention was built to receive: it bundles an agent, a goal, an obstacle and an unresolved outcome — exactly the ingredients the mind's threat-and-opportunity scanner was tuned for. This isn't a stylistic preference that education polishes away; executives, professors and toddlers all lean toward the unresolved outcome and away from the list. Work with the grain or watch your work be skimmed.`
            },
            {
              h: "Utility is invisible; meaning is magnetic",
              p: `Nobody savours renewing a licence or standing in a queue — we want utility handled quickly, cheaply, invisibly, and machines keep taking more of it. What people freely spend money and attention on is the other category: meaning, identity, experience, transformation. The restaurant isn't selling calories and the gym isn't selling barbells; the price gap between a commodity and a brand is a precise measurement of how much humans pay for the felt part. As more utility gets automated, the premium shifts further toward whoever can supply meaning — which is why "make it work" is table stakes and "make it matter" is the career. The practical question to ask of anything you build or write: which category am I in, and am I pricing and communicating like it?`
            },
            {
              h: "Stakes and novelty: the two attention triggers",
              p: `Watch what hijacks you: the game in its final minute (stakes) and the thing you've never seen before (novelty). Both are prediction problems — the mind is a forecasting machine, and it locks onto whatever it can't yet predict but needs to. Communication that opens with a settled conclusion gives the brain nothing to do; communication that opens a genuine question makes leaving uncomfortable. This is mechanical enough to engineer: raise a question the audience genuinely wants answered, delay the answer just long enough to matter, and the mind stays. Every "number one mistake people make with X" headline, every cold open, every cliffhanger is running the same loop. You'll learn to run it honestly — with questions the audience actually needs answered.`
            },
            {
              h: "What this course is really teaching",
              p: `Everything that follows — the three tensions, the five levers, the narrative mechanics — is applied storytelling: how to frame true things so that minds receive them. That's marketing, sales, writing, interviewing and leadership in one skill. It's also a responsibility: the same levers move people toward things that help them and things that hurt them, which is why this course ends with an ethics module instead of an apology. One promise to hold onto: nothing here requires you to say anything false. The entire discipline is choosing, ordering and framing true things — and the moment a technique needs a lie to work, you've left this course's territory.`
            }
          ],
          example: {
            title: "Two announcements, one product",
            body: [
              `A two-person software studio shipped the same update twice, a week apart, to the same mailing list (a genuine A/B split). Version A: "v2.4 released. New: bulk invoice export, custom payment terms, QuickBooks sync. Full changelog below." Fourteen percent open rate, 1% click-through, three sales. Version B told a story in four sentences: "Last month, a freelancer named Ana told us she spends the last Sunday of every month copying invoices into QuickBooks by hand — three hours, every month, for four years. We built v2.4 for that Sunday. Bulk export, custom terms, one-click sync: her three hours are now four minutes. If you have a Sunday like Ana's, this update is yours."`,
              `Same features, same list: 31% open rate, 9% click-through, nineteen sales. Nothing in version B was invented — Ana existed, the numbers were hers. What changed was packaging: an agent (Ana), a felt problem (the stolen Sunday), stakes (four years of them), and a resolution the reader could claim. Version A asked readers to evaluate software; version B let them recognise their own life. The features were identical; the meaning was only in one of them. That gap — between announcing utility and delivering meaning — is the whole course in one email.`
            ]
          },
          mistakes: [
            "Opening with the conclusion and wondering why nobody stays for the reasoning — give the mind a question, not a verdict.",
            "Communicating meaning-category work (a career change, a product, a cause) in utility-category language (features, specs, dates).",
            "Confusing 'story' with 'long' — Ana's story is four sentences; story is structure, not word count.",
            "Manufacturing fake stakes ('URGENT') instead of surfacing the real ones the audience already feels.",
            "Treating story as decoration to add after the thinking, instead of the shape the thinking ships in."
          ],
          exercise: {
            minutes: 15,
            prompt: `Take the last thing you announced, posted or pitched. Rewrite it as a four-sentence Ana story: one real person (or a composite you'd defend), their felt problem, the stakes, the resolution your thing provides. Every sentence must be true. Notice which version you'd rather receive.`
          },
          takeaways: [
            "Attention goes to stakes: uncertain outcomes that matter — story is the format built around them.",
            "Utility is being automated; meaning, identity and experience carry the premium. Know which category you're in.",
            "Open questions hold minds; settled conclusions release them — engineer the question honestly.",
            "Everything in this course is framing true things; a technique that needs a lie has left the territory."
          ],
          sources: [
            { name: "Chip & Dan Heath — Made to Stick", note: "why concrete, story-shaped, unexpected messages survive and abstractions die — the research base for this whole module." },
            { name: "Daniel Kahneman — Thinking, Fast and Slow", note: "the fast, associative, story-hungry System 1 that all communication actually addresses first." }
          ]
        },
        {
          id: "m1l2",
          title: "Survival tension: the problem-shaped mind",
          minutes: 15,
          sections: [
            {
              h: "Threat detection never switched off",
              p: `The wiring that once scanned tree lines for predators now scans inboxes, bank balances and social feeds. It doesn't distinguish gracefully between a lion and a missed invoice: a threat is anything that endangers what you depend on. That's why problems seize attention involuntarily while opportunities merely invite it — loss looms larger than gain in human judgment, one of the most replicated findings in behavioural science. The asymmetry is roughly two to one: losing $100 hurts about twice as much as winning $100 pleases. Every effective piece of communication starts, one way or another, with a problem, because problems are the only content the mind is contractually obliged to process.`
            },
            {
              h: "Survival is a spectrum, not an emergency",
              p: `Modern survival tension is rarely physical. It's financial (can I cover rent?), social (am I falling behind?), and opportunistic (is everyone else catching a wave I'm missing?). Small versions of these feel existential when they occupy the mind, which is why "you're quietly wasting your best years" stops more scrolling thumbs than "improve your productivity". The nearer a message sits to something the reader depends on — income, standing, options — the more involuntary the attention. Map your audience's dependencies before writing a word: what do they pay rent with, what are they measured on, what window do they believe is closing? Those three answers are your available survival hooks; everything else is decoration.`
            },
            {
              h: "Problem first, always",
              p: `A solution presented before its problem is furniture; the same solution presented after the problem is rescue. This is the deep logic of sales and of teaching alike: awareness of the problem creates the slot the solution fits into. If your presentation, post or pitch opens with your method, your credentials or your features, you've asked the audience to hold information with nowhere to put it — and minds don't hold unfiled information, they drop it. The discipline generalises beyond marketing: the meeting that opens "here's the problem we're solving today" outperforms the one that opens with an agenda, and the favour that starts by naming the other person's constraint gets a warmer hearing than the one that starts with your need.`
            },
            {
              h: "Use with care",
              p: `Survival tension is the strongest and cheapest lever, which is exactly why fear-mongering works and why it corrodes. Naming a real problem the audience genuinely has builds trust; inflating or inventing one spends trust you can't get back — and audiences keep ledgers. The test is simple and worth writing on your monitor: after the tension resolves, is the audience better off knowing what you told them? A security researcher naming a real vulnerability passes; a headline engineered to make retirees fear a crash that isn't coming fails. Both use the same lever. Only one gets to use it twice.`
            }
          ],
          example: {
            title: "The newsletter subject line, run as an experiment",
            body: [
              `A financial-literacy writer with 8,000 subscribers split her list to test one edition's subject line. Version A, the opportunity frame: "Five smart moves for your annual bonus." Version B, the survival frame — same article, same advice: "The bonus mistake that quietly costs people five figures." Open rates: 24% versus 41%. Nothing about B was false: the article genuinely documented a common, expensive error (taking the bonus as salary instead of pension-sacrificing part of it, in her jurisdiction losing many readers real money).`,
              `Two details make this a lesson rather than a trick. First, B outperformed because it attached to a dependency (money already earned, about to leak) rather than an aspiration — loss over gain, exactly as the research predicts. Second, and more important: her follow-up survey showed B's readers rated the newsletter MORE trustworthy after reading, not less — because the promised problem was real and the fix was genuinely worth five figures to some of them. The same test with an inflated headline would have printed the opposite result on the trust question. The lever is neutral. The ledger isn't.`
            ]
          },
          mistakes: [
            "Leading with your solution's features and asking the mind to hold them with no problem to file them under.",
            "Writing opportunity frames ('unlock growth') when the audience is sitting in a loss frame ('stop the leak').",
            "Inventing or inflating threats — the open rate goes up once, and the trust ledger charges interest forever.",
            "Naming problems so vaguely ('life is busy') that no one's threat detector fires.",
            "Forgetting the resolution: tension without a genuine path forward is just anxiety farming."
          ],
          exercise: {
            minutes: 10,
            prompt: `Write your audience's dependency map: what do they pay rent with, what are they measured on, what window do they fear is closing? Then rewrite one current headline or opener of yours to attach to the strongest real dependency — and run it through the test: after the tension resolves, are they better off for having read it?`
          },
          takeaways: [
            "Problems seize attention involuntarily; losses loom roughly twice as large as gains.",
            "Modern survival tension is financial, social and opportunistic — map the audience's actual dependencies.",
            "Open with the problem: it creates the slot your solution fits into, in marketing and meetings alike.",
            "Name real problems only — the audience keeps a trust ledger, and inflation compounds against you."
          ],
          sources: [
            { name: "Kahneman & Tversky — loss aversion (in Thinking, Fast and Slow)", note: "the two-to-one asymmetry between losses and gains that makes problem-framing mechanically stronger." },
            { name: "Eugene Schwartz — Breakthrough Advertising", note: "the 1966 classic on meeting a market's existing desire and awareness rather than manufacturing it — the ancestor of this whole toolkit." }
          ]
        },
        {
          id: "m1l3",
          title: "Identity tension: tribes, status and belonging",
          minutes: 15,
          sections: [
            {
              h: "Beliefs are membership cards",
              p: `Humans don't just survive as individuals; we survive as members of groups — and the mind treats belonging as critical infrastructure. A useful lens (treat it as a lens, not settled evolutionary fact): for most of human history, being expelled from the group was catastrophic, so we're descended from people who took membership very seriously. Whatever its origin, the present-day behaviour is unmistakable and measurable: people defend a sports team, a diet, a programming language or a political label with the energy of self-defence, because an attack on the tribe's beliefs registers as an attack on the self. Argue with someone's data and they'll check it; argue with their identity and they'll check you.`
            },
            {
              h: "Identity is adopted, mostly unexamined",
              p: `Nobody chooses their starting beliefs; we absorb them from parents, culture and whichever tribe adopted us first, because dissent was expensive and agreement was free. "Morning person", "coffee drinker", "anti-this", "pro-that" — labels accumulate quietly and then vote on our behalf. The practical upshot for a communicator: people hear messages through the filter of who they believe they are, long before logic gets a turn. The same argument lands as wisdom from an in-group voice and as attack from an out-group one — which is why the highest-leverage question before communicating anything contested isn't "is my evidence strong?" but "who does this audience think I am?"`
            },
            {
              h: "Speak to the identity, not just the problem",
              p: `"How to fix cash flow" addresses a problem. "If you're a freelancer who dreads invoicing…" addresses a person — and the person leans in, because being seen accurately is one of the rarest experiences on the internet. Messages that mirror an identity get claimed, shared and defended by the identity they mirror; messages addressed to everyone belong to no one. There's a compounding effect too: each time someone acts under an identity ("I'm the kind of person who ships"), the identity strengthens — the consistency principle in action. Offer people an identity worth keeping and they'll do the work of keeping it, long after your message is forgotten.`
            },
            {
              h: "The escape clause for your own mind",
              p: `Understanding identity tension cuts both ways: notice which of your own positions you hold because they're true, and which you hold because your tribe does. Thinking in absolutes — all-in or all-against — is usually the tribe talking. The freest position is to test claims against reality and let evidence, not membership, update you. This isn't just hygiene; it's operational advantage. The communicator who can feel the levers being pulled on them can read a room, an argument or a marketing campaign at a level tribal thinkers can't — and is nearly impossible to manipulate, because the machinery is visible. Every technique you learn to use, you simultaneously learn to see.`
            }
          ],
          example: {
            title: "The framework wars, observed from the bleachers",
            body: [
              `A developer-tools company watched two competitors announce nearly identical performance improvements in the same week. Competitor A's post: "Benchmark results: 40% faster builds in v3." Solid engagement from their existing users; crickets beyond. Competitor B's post opened: "If you've ever defended our framework in a meeting and needed better ammunition — this release is for you. 40% faster builds. Go win the argument." Same claim, same benchmarks. B's post travelled four times as far, and the sharing pattern told the story: it was reshared overwhelmingly by users adding their own commentary — 'vindicated', 'told you so', 'sending this to my tech lead'.`,
              `B understood what was actually going on in its community: framework choice had become identity, users were fighting proxy battles for it in meetings, and the release wasn't information — it was ammunition for the tribe, and status for its members. The company hadn't manufactured that identity (it can't be manufactured); it recognised an identity that existed and armed it. Note the ethics line, cleanly visible: B said nothing false and mocked nobody. Arming your tribe passes the transparency test; inventing an enemy to bind the tribe together does not — and companies that try the second usually discover the tribe eventually notices who the real manipulator was.`
            ]
          },
          mistakes: [
            "Bringing evidence to an identity fight — data doesn't beat membership; reframing to a shared identity might.",
            "Addressing demographics ('attention freelancers') instead of mirroring lived moments.",
            "Attacking the current identity ('you're doing it wrong') instead of offering a better one to grow into.",
            "Building belonging by inventing enemies — it works, it's manipulation, and tribes eventually audit their founders.",
            "Exempting yourself: the analyst who can't feel their own tribal reflexes gets played by everyone who can."
          ],
          exercise: {
            minutes: 15,
            prompt: `List five 'I'm the kind of person who…' sentences your best audience member would say about themselves. Then rewrite your current pitch or bio so it mirrors the strongest one back. Separately — and privately — write one belief you hold mostly because your tribe does. You don't have to change it. You have to be able to name it.`
          },
          takeaways: [
            "Attacks on beliefs register as attacks on self — argue with data and they check it; with identity and they check you.",
            "People hear messages through who they think they are; before evidence, establish who they think YOU are.",
            "Mirror a specific identity and the message gets claimed; identities act to stay consistent with themselves.",
            "Audit your own labels: every lever you learn to use, you learn to see — and become harder to play."
          ],
          sources: [
            { name: "Robert Cialdini — Influence", note: "commitment & consistency, and unity/belonging — the evidence for identity as the strongest filter on persuasion." },
            { name: "Chip & Dan Heath — Made to Stick", note: "the 'identity appeals' research: people ask 'what would someone like me do?' before 'what's in my interest?'" }
          ]
        },
        {
          id: "m1l4",
          title: "Progress tension: the ladder of needs",
          minutes: 15,
          sections: [
            {
              h: "Needs come in a rough order — hold it loosely",
              p: `The famous pyramid of needs — safety, then belonging, then esteem, then self-actualisation — is one of psychology's most repeated images, and it's worth stating honestly: as a strict staircase, it has weak empirical support. People pursue meaning while broke and status while unsafe; the tidy stages are a simplification. What IS robustly supported is the part that matters for communication: acute scarcity narrows the mind. The research on scarcity shows that pressing shortfalls — of money, time, safety — capture cognitive bandwidth so completely that long-horizon thinking measurably degrades. So use the ladder as a routing heuristic, not a law: someone frightened about rent physically cannot give sustained attention to a lecture about purpose, and no eloquence changes that.`
            },
            {
              h: "Meet people where they are",
              p: `The most common mistake made by thoughtful people is broadcasting from the top of the ladder — deep ideas, nuance, purpose — to an audience still fighting fires on the bottom rungs. They're not unready because they're shallow; they're unready because urgency eats bandwidth. Effective sequences solve a felt, immediate problem first, and earn the right to raise the ceiling later. This is the architecture of every durable audience relationship: the fitness coach who starts with "fix your sleep this week" before the philosophy of embodiment; the finance writer who kills a money leak before discussing meaning. First aid before worldview. Always.`
            },
            {
              h: "Progress is the tension of the almost",
              p: `Once survival is quiet and belonging is secured, a third itch appears: the gap between who someone is and who they suspect they could be. This gap is the engine of every transformation story, every course, every gym membership and every January. Messages that make the gap vivid — and crossable — generate desire that pure problem-solving never touches. Both halves matter: vivid without crossable produces despair (the "fitspiration" account that demotivates); crossable without vivid produces indifference (the sensible plan nobody starts). The craft is holding both: here is the you that's waiting, and here is the believable bridge.`
            },
            {
              h: "Diagnose before you communicate",
              p: `Before writing or speaking, ask: which tension is this audience actually in? A stressed audience needs a named problem and a fast win (survival). A stable audience wants to be seen and to belong (identity). A comfortable audience wants to become someone (progress). The same product, pitched at the wrong tension, simply doesn't exist to the listener — a retirement fund pitched as self-actualisation to someone drowning in rent, or as loss-prevention to someone hunting for meaning, misses identically. Diagnosis is thirty seconds of discipline: read their language, their questions, their complaints, and match the tension before you draft the message.`
            }
          ],
          example: {
            title: "The creator who was writing three rungs too high",
            body: [
              `A former product manager launched a newsletter about "designing a meaningful career". Beautiful essays on purpose, mastery, craft — Rung Four material. After six months: 400 subscribers, flat. Reading her replies and survey responses, the actual audience situation emerged: most readers were mid-career, anxious about layoffs and AI, and their most common phrase was "falling behind". They weren't seeking meaning. They were scanning for safety. Her essays were addressed to the person her readers hoped to become, not the person reading.`,
              `The pivot kept every value she had and moved the entry point down the ladder: the flagship piece became "The 90-minute career audit: how exposed is your role, actually?" (survival — a named fear, a fast diagnostic win), followed by a community of people running the same playbook (belonging), and only then the essays on meaningful work (progress) — now landing with readers whose bandwidth had been freed by the first two steps. Fourteen months later: 22,000 subscribers, and — the detail worth keeping — her ORIGINAL purpose essays became her most-shared work. Nothing was wrong with the top of her ladder. It just wasn't the door. The door is wherever the audience's bandwidth currently lives; the rest of the ladder is what you earn the right to show them.`
            ]
          },
          mistakes: [
            "Teaching the pyramid as settled science — the staircase is folk psychology; scarcity-narrows-bandwidth is the solid core.",
            "Broadcasting purpose to an audience in survival — not wrong, just inaudible.",
            "Painting the gap vividly without a crossable bridge (despair) or a bridge without vividness (indifference).",
            "Assuming your own rung is the audience's rung — creators are usually two rungs above the people they serve.",
            "Treating the ladder as one-way: layoffs, illness and shocks send whole audiences back down it overnight. Re-diagnose."
          ],
          exercise: {
            minutes: 15,
            prompt: `Collect ten verbatim phrases your audience actually uses (replies, reviews, community posts). Sort them: survival / identity / progress. Whatever wins, check it against your current entry-point message. If they don't match, sketch the 'door' piece — the survival-or-identity entry that earns the right to your real material.`
          },
          takeaways: [
            "Hold the pyramid loosely: strict stages are weakly supported; scarcity narrowing bandwidth is the robust core.",
            "Meet the active tension first — first aid before worldview — and earn the right to go deeper.",
            "Progress tension needs both halves: a vivid gap AND a crossable bridge.",
            "Diagnose from their verbatim language before drafting; and re-diagnose when the world shocks them down the ladder."
          ],
          sources: [
            { name: "Mullainathan & Shafir — Scarcity", note: "the bandwidth research: what shortfalls of money and time measurably do to cognition — the defensible core of the needs ladder." },
            { name: "Abraham Maslow — 'A Theory of Human Motivation' (1943)", note: "the original paper — subtler than the pyramid meme it became; read it to see what the simplification dropped." }
          ]
        },
        {
          id: "m1l5",
          title: "Narrative mechanics: how stories actually carry",
          minutes: 15,
          sections: [
            {
              h: "The five load-bearing parts",
              p: `Strip any story that holds attention — a film, a case study, a founder's origin post — and you find the same load-bearing parts: a character (someone to see the world through), a desire (what they're trying to get), an obstacle (what's in the way), stakes (what happens if they fail), and a turn (the moment something changes). Miss the character and there's no one to care about; miss the obstacle and there's nothing to watch; miss the stakes and there's no reason to stay; miss the turn and nothing was learned. Most business "stories" are missing three of the five — they have a character and a happy ending and nothing in between, which is a testimonial, not a story. Testimonials inform. Stories transport.`
            },
            {
              h: "One person beats a thousand",
              p: `The mind attaches to individuals, not aggregates — the well-documented "identifiable victim" pattern: people donate more to one named child than to statistics about a million. The same machinery governs commercial attention: "40,000 users save time with us" bounces off; "Ana got her Sundays back" lands. The craft implication is uncomfortable for analytical people: your strongest evidence (the aggregate) is your weakest opener, and your weakest evidence (one instance) is your strongest. The professional resolution is sequence, not choice — lead with Ana, prove with the 40,000. Story opens the door; data furnishes the room.`
            },
            {
              h: "Specificity is the price of belief",
              p: `"The last Sunday of every month, three hours, for four years" is believed; "lots of wasted time" is skimmed. Specific detail does two jobs at once: it renders (the mind can picture a Sunday; it cannot picture 'inefficiency'), and it verifies (invented stories drift generic, so concrete detail functions as a costly signal of truth). This is why the best case studies read like journalism — named constraints, actual numbers, the detail that only someone who was there would include. Rule of thumb: every story needs at least one detail so specific it would be embarrassing to have invented.`
            },
            {
              h: "Status moves the room",
              p: `Underneath most human drama runs a quieter current: status — who's rising, who's falling, who's being seen. Audiences track it constantly and involuntarily, which gives the storyteller two practical rules. First, position your customer or reader as the rising character; you (or your product) are the guide, not the hero — the mentor who hands over the tools, not the star who uses them. Brands that make themselves the hero produce audiences who feel like spectators; brands that make the customer the hero produce audiences who feel like protagonists, and protagonists act. Second, never tell a story in which the audience's current self is the falling character ("you're doing it all wrong"); people don't buy from stories that humiliate them. The gap between current and possible self must be framed as ascent available, not descent underway.`
            }
          ],
          example: {
            title: "Rebuilding a case study that wasn't working",
            body: [
              `Before — the version on the website: "TechFlow Solutions implemented our platform and achieved a 34% reduction in processing time, improving operational efficiency across their invoice workflow. 'Great tool, highly recommend' — Operations Manager." Every word true; zero pulse. Diagnosis against the five parts: character (a company name — no one to see through), desire (absent), obstacle (absent), stakes (absent), turn (absent). A number and a compliment.`,
              `After — same client, one interview later: "Priya runs a four-person ops team that was drowning: every Thursday she stayed until nine reconciling invoices, and she'd started to believe that was just the job (character, obstacle). Her actual fear wasn't the hours — it was that her team's error rate was becoming visible upstairs (stakes, and note it's an identity stake: being seen as sloppy). The turn came three weeks after switching: her Thursday finished at five-thirty, and the month-end error report went to her boss with two exceptions instead of forty. Her line, verbatim: 'I stopped dreading the email with the subject line "question about invoice…"' (the detail too specific to invent). Across the team, processing time fell 34% (the aggregate, sealing the door the story opened)." Same client, same number. One version is a claim; the other is an experience the reader tries on. The interview took twenty-five minutes.`
            ]
          },
          mistakes: [
            "Shipping testimonials (character + happy ending) and calling them stories — no obstacle, no transport.",
            "Opening with the aggregate and saving the person for later; sequence backwards.",
            "Sanding off the specific details in editing — they were the belief; what's left is copy.",
            "Casting your product as the hero and your customer as the audience.",
            "Telling stories where the reader's current self is the falling character — humiliation doesn't convert."
          ],
          exercise: {
            minutes: 20,
            prompt: `Take your flattest case study, testimonial or 'about' section. Run the five-part audit: character, desire, obstacle, stakes, turn — mark what's missing. Then get (or reconstruct from memory) the twenty-five-minute interview and rewrite it with: one named person, one embarrassingly specific detail, the customer as hero, the aggregate as the closer.`
          },
          takeaways: [
            "Five load-bearing parts: character, desire, obstacle, stakes, turn — most business stories are missing three.",
            "Lead with one person, prove with the aggregate; the mind attaches to individuals.",
            "Specificity renders and verifies: every story needs one detail too specific to have invented.",
            "The customer is the hero; you are the guide. Ascent available, never descent underway."
          ],
          sources: [
            { name: "Robert McKee — Story", note: "the structural mechanics — desire, obstacle, turning points — from the screenwriting tradition that business storytelling quietly borrows." },
            { name: "Donald Miller — Building a StoryBrand", note: "hero/guide positioning for brands, systematised; the 'customer as hero' discipline in practical form." }
          ]
        }
      ],
      workshop: {
        title: "Workshop 1 — Tension spotting in the wild",
        brief:
          "The tensions are invisible until you've tagged them a few dozen times — " +
          "then you can't stop seeing them. Build the eye. Use the field journal " +
          "and audience-diagnosis tools from this module's toolkit.",
        steps: [
          "Collect five pieces of communication that stopped you this week: posts, ads, headlines, a conversation, a sermon, anything.",
          "For each, name the primary tension it pulls — survival, identity or progress — and the exact words doing the pulling.",
          "Find one piece that pulls two or more tensions at once and map which phrase does which job.",
          "Run the five-part story audit (character / desire / obstacle / stakes / turn) on the strongest piece you collected.",
          "Write your own tension profile: which of the three most reliably hooks YOU? What does that predict about what you'll overvalue and overshare?",
          "Rewrite one weak headline you found so it engages the tension its author missed."
        ],
        deliverable:
          "Record your strongest example (what it said, which tension, why it worked), " +
          "your own one-sentence tension profile, and the rewritten headline below."
      },
      tools: [
        {
          id: "tension-journal",
          title: "Tension-spotting field journal",
          desc: "A week's worth of structured observation: log what stopped you, name the tension, extract the technique.",
          body: `# Tension-Spotting Field Journal

Log 2–3 entries a day for a week. After ~15 entries the tensions become
impossible to unsee — that's the point.

## Entry template (copy per item)

**What stopped me** (verbatim headline / opening line):
**Where** (feed, email, billboard, conversation):
**Primary tension:** survival / identity / progress
**The exact words doing the pulling:**
**Secondary tension present?**
**Awareness stage it assumes** (unaware / problem / solution / product / most):
**Honest or inflated?** (after the tension resolves, is the audience better off?)
**Technique worth stealing:**

## End-of-week synthesis
1. Which tension appeared most in what stopped YOU? (That's your profile —
   and your blind spot as a writer: you'll overuse it.)
2. Which tension does your own audience's language suggest they live in?
3. The three best techniques you logged, restated as rules you'll try:
`
        },
        {
          id: "audience-diagnosis",
          title: "Audience diagnosis worksheet",
          desc: "Tension + awareness-stage + dependency mapping for one audience, before you write a word.",
          body: `# Audience Diagnosis — before writing anything

**The audience (one person, specifically imagined):**

## 1. Dependency map (survival hooks)
- They pay rent with: ______
- They're measured on: ______
- The window they fear is closing: ______

## 2. Identity map
- Five "I'm the kind of person who…" sentences they'd say:
  1. ______  2. ______  3. ______  4. ______  5. ______
- Who do they think YOU are? (in-group voice / neutral / out-group):

## 3. Ladder position
- Ten verbatim phrases they actually use (from replies/reviews/posts):
- Sorted: survival ___ / identity ___ / progress ___
- Active tension (the door): ______
- The material you REALLY want to give them (earned later): ______

## 4. Awareness stage
unaware / problem-aware / solution-aware / product-aware / most-aware
Evidence for that diagnosis:

## 5. Therefore
- The entry-point message (door): ______
- The tension it pulls: ______
- The first step it offers: ______
`
        },
        {
          id: "story-outline",
          title: "Five-part story outline",
          desc: "Character / desire / obstacle / stakes / turn — the case-study and origin-story builder.",
          body: `# Five-Part Story Outline

Use for case studies, launch posts, origin stories, talks.

**CHARACTER** (one named person the audience can see through — the customer
or reader as hero; you/your product are the guide):

**DESIRE** (what they were trying to get, in their words):

**OBSTACLE** (what stood in the way — the drama lives here; no obstacle, no story):

**STAKES** (what failure would have cost — money, standing, identity):

**TURN** (the moment something changed):

**RESOLUTION** (life after, in one concrete scene):

**THE UNFAKEABLE DETAIL** (one thing too specific to have invented):

**THE AGGREGATE CLOSER** (the big number that seals what the story opened):

---
## Pre-flight
- [ ] Testimonial check: does it have an obstacle, or just a happy ending?
- [ ] One person first, statistics second
- [ ] Customer is the hero; we are the guide
- [ ] Reader's current self is never the falling character
- [ ] Every sentence true; every detail defensible
`
        }
      ],
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
            explain: "Membership registers as critical infrastructure, so attacks on the tribe's beliefs register as attacks on the self. That's identity tension."
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
            explain: "The robust core of the ladder is that scarcity eats cognitive bandwidth. Meet the active tension first and earn the right to go deeper — the staircase is a heuristic, the narrowed bandwidth is measured."
          },
          {
            q: "A case study reads: 'MegaCorp achieved 34% efficiency gains. Great tool! — Manager.' The five-part story audit says it's missing:",
            options: [
              "A bigger efficiency number and more testimonials from executives",
              "Desire, obstacle, stakes and a turn — it's a testimonial (character + ending), not a story",
              "The company's founding date and headquarters location",
              "Nothing — case studies should be exactly this short"
            ],
            answer: 1,
            explain: "Character plus happy ending is a testimonial; it informs but doesn't transport. The drama — and the belief — live in the obstacle, the stakes and the turn."
          },
          {
            q: "In brand storytelling, the customer should be cast as:",
            options: [
              "The audience, watching the brand's achievements",
              "The obstacle the product overcomes",
              "A statistic that proves the aggregate claim",
              "The hero — with the brand as the guide who hands over the tools"
            ],
            answer: 3,
            explain: "Brands that star as the hero create spectators; brands that guide create protagonists — and protagonists act. Lead with one person, prove with the aggregate."
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
          minutes: 15,
          sections: [
            {
              h: "The five rooms of awareness",
              p: `Every audience member stands in one of five rooms — the ladder Eugene Schwartz mapped for advertisers in 1966, still the highest-leverage diagnostic in communication. In the first room, they don't know they have a problem. In the second, they feel the problem but don't know solutions exist. In the third, they know solutions exist but not yours. In the fourth, they know yours but aren't convinced. In the fifth, they're convinced and simply haven't acted. The ladder's power is that it converts "why isn't my message working?" — an unanswerable lament — into "which room did I address, and which room are they in?" — a fixable diagnosis. Most failed communication is a right message delivered to the wrong room.`
            },
            {
              h: "Each room needs a different sentence",
              p: `The unaware need the problem named — vividly, in their own life's vocabulary; features would bounce off them like a language they don't speak. The problem-aware need to hear that a solution category exists at all ("this is fixable" is the entire message). The solution-aware need your difference from the alternatives they're comparing. The product-aware need proof: results, demonstrations, objections answered. The most aware need only an occasion — a deadline, a bonus, a reason to act today; more persuasion at this stage is noise that delays the sale. Write the five sentences for your own offer once and you'll never again wonder what to say — only who you're saying it to.`
            },
            {
              h: "Naming is the skill",
              p: `A problem named precisely feels like mind-reading: "you rewrote that email four times because you were managing their feelings, not the message." The precision is the persuasion — it proves you've been inside the problem, which implies you know the way out. Vague problems ("life is busy") produce vague attention. Go one level more specific than feels natural: not "freelancers struggle with admin" but "you invoice late because sending it feels like asking for a favour." The uncomfortable specificity is the point; the reader's flinch of recognition is the sound of the lever working. Harvest the language from the audience themselves — their reviews, replies and complaints contain the problem pre-named, in words already proven to resonate.`
            },
            {
              h: "The everyday version",
              p: `This lever isn't only for marketing. The meeting that opens "here's the problem we're solving today" outperforms the one that opens with an agenda. The request that starts by naming the other person's constraint gets a warmer hearing than the one that starts with your need. The CV that opens with the employer's problem ("scaling support without scaling headcount") beats the one that opens with your chronology. Frame the situation before you propose anything, every time — it's the single most portable habit in this course, and you can install it today.`
            }
          ],
          example: {
            title: "One product, five rooms, five openers",
            body: [
              `The product: a bookkeeping service for independent tradespeople. Watch the same offer address each room. UNAWARE: "Most sole traders lose four figures a year to missed deductions they never knew existed — here are the three biggest." (No product mention; the problem IS the content.) PROBLEM-AWARE: "You know tax season is a mess — what most tradies don't know is that done-for-you bookkeeping exists for less than a phone bill." (The category is the news.) SOLUTION-AWARE: "Unlike generic bookkeepers, we only do trades — so we know a scaffold hire is deductible and your accountant's hourly rate isn't worth your Sunday." (The difference is the message.)`,
              `PRODUCT-AWARE: "Here's a real month from a real sparkie's books — before and after. 212 transactions, categorised, reconciled, three deductions his old spreadsheet missed. His words: 'first BAS I've ever filed early.'" (Proof, demonstration, objection handling.) MOST-AWARE: "Prices go up July 1 for new clients. Sign up before then and you're locked at the current rate." (An occasion, nothing more — notice there's no re-explanation of the product; the fifth room finds re-persuasion patronising.) Five rooms, five completely different messages, one product that never changed. The diagnostic question before every piece you write: which of these five am I talking to?`
            ]
          },
          mistakes: [
            "Pitching features to the unaware — the most common and expensive mismatch in marketing.",
            "Re-educating the most-aware, who needed only a deadline; over-persuasion reads as desperation.",
            "Naming problems in your vocabulary instead of harvesting the audience's own words.",
            "Writing one message for a list that spans three rooms — segment or sequence, don't average.",
            "Vagueness as safety: 'life is busy' offends no one and stops no one."
          ],
          exercise: {
            minutes: 20,
            prompt: `Write the five sentences for your own offer or idea — one per awareness room, using the tradesperson example as the pattern. Then diagnose your main audience's actual room from the evidence (what do they say, search, ask?) and check: is your current headline addressed to that room? If not, you've found the fix.`
          },
          takeaways: [
            "Diagnose the room: unaware → problem → solution → product → most aware — then write for that room only.",
            "Each room needs a different sentence; the fifth needs only an occasion.",
            "Name problems with uncomfortable precision, in language harvested from the audience.",
            "Open everything — meetings, asks, CVs — by framing the problem before the proposal."
          ],
          sources: [
            { name: "Eugene Schwartz — Breakthrough Advertising", note: "the original five stages of awareness (1966) — this lesson is its modern working summary." },
            { name: "Rob Fitzpatrick — The Mom Test", note: "how to harvest real problem-language from real people without leading the witness." }
          ]
        },
        {
          id: "m2l2",
          title: "Lever 2 — Mirror the identity",
          minutes: 15,
          sections: [
            {
              h: "'If you're…' — two words that sort the world",
              p: `The fastest way to pull identity tension is direct address: "If you're the friend who always organises the trip…", "If you're a developer who hates marketing…". The reader performs an involuntary check — is that me? — and if the answer is yes, you have something no headline trick buys: self-selected attention. They opted in by recognising themselves, which means they arrive already agreeing with your premise about who they are. That agreement is the beachhead every subsequent claim lands on. The mechanism is cheap to use and impossible to overuse well — the constraint isn't the phrase, it's whether the mirror behind it is accurate.`
            },
            {
              h: "Mirror the person, not the demographic",
              p: `"Attention: freelancers" is a demographic — a census category nobody feels. "You've finished the work, and now comes the part you hate: asking to be paid" is a person. Good mirrors reflect behaviour, private thoughts and small scenes, not age brackets. The interior detail is what produces the "how did you know?" effect that gets a message saved and sent to a friend — and the way you find interior detail is research, not imagination: read fifty of your audience's forum posts, reviews or replies, and collect the sentences where someone describes their own behaviour with embarrassment or resignation. Those sentences are mirrors waiting to be polished.`
            },
            {
              h: "Aspirational mirrors",
              p: `You can mirror who someone is, or who they're trying to be — "for writers who ship" flatters an identity into existence. People act to stay consistent with identities they've accepted, one of the most reliable levers in the influence literature, which is why "you're clearly someone who takes this seriously" changes behaviour more durably than instructions do. Offer an identity worth keeping and people will do the work of keeping it. The craft constraint: the aspirational mirror must be within reach of the current self. "For writers who ship" recruits; "for future billionaires" embarrasses. Flattery the reader can't quite believe converts to distrust of everything that follows.`
            },
            {
              h: "One audience per message",
              p: `The price of the mirror is choice. A message aimed at two identities reflects neither; a mirror angled at everyone shows nobody. Decide, before writing a single line, whose face should appear in it — one person, specifically imagined, ideally an actual person you know from your audience — and accept that everyone else is overhearing. The overhearers are fine: a sharply mirrored message travels further with the wrong audiences than a diluted message does with any audience, because even people outside the mirror can feel that something true is happening in it. Specificity is a spectacle; averaging is invisible.`
            }
          ],
          example: {
            title: "Fifty forum posts, one sentence, 4,000 subscribers",
            body: [
              `A woodworker launching an online course did the unglamorous research: two evenings reading r/BeginnerWoodWorking, collecting verbatim sentences. The pattern that emerged wasn't about technique. Post after post circled the same private moment: buying wood at the hardware store and feeling like a fraud in front of the staff — not knowing the names, fearing the question "what's it for?". His original landing page had said "Learn woodworking fundamentals from scratch" (a demographic message: beginners). The rewrite led with the mirror: "If you've ever rehearsed what to say at the timber counter so you don't sound like you don't belong there — this course was built for you."`,
              `The page's conversion rate tripled, but the more telling signal was qualitative: signup replies kept quoting the sentence back ("the timber counter thing — how did you know?") and sharing it into the same forums it was harvested from. Nothing was invented; the mirror was assembled from the audience's own confessions and angled back at them. One caution from the same story: his follow-up email tried an aspirational mirror that overreached ("you're a craftsman now") and produced visible pushback from people three weekends into the hobby — out of reach, so it read as sales-flattery. The fix was one notch down: "you're someone who's decided to stop just watching videos about it." Within reach. Claimed instantly.`
            ]
          },
          mistakes: [
            "Mirroring census categories (age, job title) instead of lived interior moments.",
            "Imagining the audience's private thoughts instead of harvesting them from their own writing.",
            "Aspirational mirrors out of reach of the current self — unbelievable flattery converts to distrust.",
            "Averaging across two audiences and reflecting neither.",
            "Using the mirror to open, then switching to features-speak — the recognition you earned dissipates in a paragraph."
          ],
          exercise: {
            minutes: 20,
            prompt: `Spend thirty minutes where your audience talks candidly (forum, reviews, community, replies). Collect five verbatim sentences where someone describes their own behaviour with embarrassment or resignation. Turn the strongest into an 'if you're…' opener. Send or publish it this week and count the 'how did you know?' responses.`
          },
          takeaways: [
            "Direct address triggers the involuntary 'is that me?' check; a yes is a beachhead.",
            "Mirror behaviour and private thoughts, harvested from the audience's own words — not demographics, not imagination.",
            "Aspirational identities recruit consistency, but only within reach of the current self.",
            "Write to one specifically imagined person; sharp mirrors travel further than averaged messages."
          ],
          sources: [
            { name: "Robert Cialdini — Influence", note: "commitment & consistency: why people work to keep identities they've accepted — the engine under aspirational mirrors." },
            { name: "Eugene Schwartz — Breakthrough Advertising", note: "channeling existing desire rather than creating it — the mirror is Schwartz's principle applied to identity." }
          ]
        },
        {
          id: "m2l3",
          title: "Lever 3 — Draw the line: exclusion and belonging",
          minutes: 15,
          sections: [
            {
              h: "Belonging needs a boundary",
              p: `A club everyone can join confers nothing. The moment you say who something is NOT for, membership starts to mean something — and identity tension does the rest. "This isn't for people looking for hacks" simultaneously repels the wrong audience and tightens the grip on the right one, who now feel chosen rather than targeted. The psychology is symmetrical: humans infer value from boundaries (what admits everyone must be worth nothing) and infer identity from membership (if this is for people like X, and I'm in, I'm an X). Every strong brand, community and movement you can name has a legible answer to "who is this not for?" — and every forgettable one doesn't.`
            },
            {
              h: "Exclusion clarifies the offer",
              p: `Drawing the line is also honest positioning. "Not for agencies — built for freelancers" tells the buyer more in six words than a feature table does, because it reveals the trade-offs you designed around. Ambiguity about who something serves reads as either desperation or dishonesty; a clean boundary reads as confidence — and it pre-answers the buyer's real question, which is never "what does it do?" but "was this made for someone in my situation?". The line also protects you operationally: the customers a boundary turns away are overwhelmingly the ones who would have churned, refunded and reviewed you bitterly, because the product genuinely wasn't for them. Exclusion is refund-prevention written in advance.`
            },
            {
              h: "Sequence: mirror first, then exclude",
              p: `Exclusion lands best immediately after a mirror. First the reader recognises themselves ("if you're tired of your own excuses…"), then the line confirms the recognition ("…this isn't for people who want to feel productive; it's for people who want the result"). The pair converts passive agreement into a small act of choosing — and chosen positions get defended, another consistency effect: the reader who mentally said "that's me, and I'm not the other thing" has performed a micro-commitment your later ask will inherit. Reverse the order and the same words repel: exclusion before recognition reads as gatekeeping by a stranger.`
            },
            {
              h: "Don't punch down",
              p: `Exclusion defines your standards, not your contempt. "Not for beginners" is a boundary; mocking beginners is a brand of insecurity the audience reads instantly — including the audience you kept, who quietly note how you talk about people you don't need. Draw lines around commitment, values and fit — never around the people you'd be lucky to serve later. The test: could the excluded person read your line and nod ("fair — that's genuinely not me right now") rather than flinch? Boundaries that the excluded can agree with are positioning; boundaries that humiliate are just cruelty with a marketing budget.`
            }
          ],
          example: {
            title: "The cohort course that halved signups and tripled revenue",
            body: [
              `A designer ran a four-week portfolio course. Cohort one was marketed inclusively ("for anyone who wants a better portfolio") and filled fast: 60 students, wildly mixed — students, hobbyists, working designers, career-changers. The mix strangled it: every session pitched too basic for half the room and too advanced for the other. Completion: 22%. Refunds: 15%. The reviews were polite and lukewarm, which is the worst kind.`,
              `Cohort two launched with a line, placed right after the mirror: "If you're a working designer whose portfolio still shows five-year-old client work you're no longer proud of — this is for you. It is NOT for beginners building a first portfolio, and it's not for people with ten spare hours a week; the course assumes real client work exists and time doesn't." Signups halved to 31. But: completion 71%, refunds zero, and the price — justified now by the specificity — was 2.4× cohort one's. Revenue was up, support load was down, and the testimonials wrote themselves in the language of the line ("finally something that assumes you have a job"). The excluded beginners? Several replied asking to be told when a beginner version existed — the boundary they could nod at converted them into a waiting list instead of refunds. That's the whole lever: the line didn't shrink the business. The averaging had been shrinking it.`
            ]
          },
          mistakes: [
            "No line at all — 'for anyone who…' reads as 'made for no one in particular'.",
            "Excluding before mirroring: gatekeeping from a stranger instead of confirmation from a friend.",
            "Punching down — mocking the excluded poisons trust with the included, who are watching how you talk.",
            "Drawing the line on wealth or status ('not for broke people') instead of commitment and fit.",
            "Writing a line you don't enforce: if the 'not for' audience can buy anyway and you let them, the refunds will finish the lesson."
          ],
          exercise: {
            minutes: 15,
            prompt: `Write the 'not for' sentence for your main offer or project: one line naming who it doesn't serve, drawn on commitment or fit, that the excluded person could read and nod at. Place it directly after your identity mirror. If writing it feels scary, list what the ambiguity is currently costing you (mismatched clients, refunds, lukewarm reviews) — then decide which fear is better founded.`
          },
          takeaways: [
            "Membership means nothing without a boundary; value and identity are both inferred from the line.",
            "A clean 'not for X' communicates positioning faster than any feature list — and prevents the refunds in advance.",
            "Mirror first, then exclude: recognition, then a micro-commitment that later asks inherit.",
            "Exclude on commitment and fit, never with contempt — the excluded should be able to nod."
          ],
          sources: [
            { name: "Robert Cialdini — Influence", note: "scarcity and unity: why boundaries raise perceived value and bind the in-group." },
            { name: "Chip & Dan Heath — Made to Stick", note: "concreteness in positioning — why 'built for freelancers' outcommunicates a feature table." }
          ]
        },
        {
          id: "m2l4",
          title: "Lever 4 — Paint the transformation",
          minutes: 15,
          sections: [
            {
              h: "Imagination is rehearsal",
              p: `When someone vividly imagines an experience, much of the same neural machinery engages as when they live it — the mental-simulation research is one of the sturdier corners of cognitive science. A painted future is therefore not decoration; it's a free sample of the destination. This is why every enduring piece of persuasion, from great speeches to good product pages, spends time in the world after the problem is solved: the audience isn't being told about the destination, they're being given a supervised visit. And a visited future is easier to choose — it's already partly theirs.`
            },
            {
              h: "Concrete beats grand",
              p: `"Transform your life" simulates nothing — there's no scene to render. "It's Tuesday morning; you've sent the invoice without rereading it once" renders instantly. The rule: paint at the resolution of a single ordinary moment. Specific mornings, specific sentences said by specific people, the mundane Tuesday rather than the epic someday — because the simulator runs on sensory detail, not abstractions. Grand abstractions are how transformations sound fake; small concrete scenes are how they sound inevitable. If you can't paint the after-state as one filmable moment, you don't yet understand what you're selling — which is useful information about the product, not just the copy.`
            },
            {
              h: "Transformation is an identity event",
              p: `Notice what the best transformations promise: not a feature outcome but a changed self. Not "your invoices are formatted correctly" but "you stop feeling like an impostor asking to be paid". The product is the bridge; the destination is who they get to be on the other side. Progress tension and identity tension meet exactly here, and it's why "before/after" is the oldest structure in advertising — done honestly, it's also the truest: people don't buy drills or courses or software, they buy the person they expect to be after. Write the after-identity in one sentence before you write anything else; every other line either serves it or pads it.`
            },
            {
              h: "Earn it with honesty",
              p: `Paint futures you can actually cause. The transformation lever is the most abused in the toolkit — every scam is a beautiful painting — so credibility details matter: realistic timelines, named costs, what it won't do. Paradoxically, admitting limits makes the painted future more believable, not less: "this won't fix a broken niche, and week one is genuinely tedious" buys belief for everything around it, because readers know real things have edges. The transformation you paint should be the median honest outcome, not the best case wearing the median's clothes — your refund rate, your reviews and your ability to use this lever twice all depend on that choice.`
            }
          ],
          example: {
            title: "Two courses, one promise, opposite honesty",
            body: [
              `Two competing job-interview courses ran ads the same quarter. Course A painted the maximal case: "Land your dream job in 30 days. Six-figure offers. Life-changing." Course B painted one Tuesday, with edges: "Three weeks from now you walk out of an interview and, for the first time, you're not replaying what you should have said. You know how it went — because you steered it. (This course won't fix a thin CV, and the first week of drills is honestly repetitive. It fixes the twenty minutes that decide whether the CV matters.)"`,
              `A generated more clicks — inflation always does. B generated buyers who stayed: completion nearly double, refunds a third of A's, and the reviews echoed the painted scene back ("the not-replaying-it-afterwards thing happened in week two"). That echo is the tell of an honest transformation: when customers describe their outcome in your copy's words, the painting matched the destination. When the reviews instead argue with the copy ("not quite the miracle promised"), the painting was a debt — and reviews are how it gets collected. Same lever in both ads. One built an asset; the other borrowed against one.`
            ]
          },
          mistakes: [
            "Painting at the resolution of a slogan ('transform your life') — nothing renders, nothing moves.",
            "Promising the changed output but not the changed self — features where the identity should be.",
            "Best-case futures dressed as typical ones: the clicks arrive now, the invoice arrives in reviews and refunds.",
            "No edges: a transformation without named limits reads as fiction to everyone who's bought anything before.",
            "Painting a future your product can't cause — the one mistake this course's ethics module exists to stop."
          ],
          exercise: {
            minutes: 15,
            prompt: `Write your offer's after-state as one filmable Tuesday moment: where they are, what they do, the sentence they no longer say (or finally say). Then add one honest edge — what it won't fix, or which week is tedious. Read both aloud; if the edge makes the scene MORE believable, ship the pair.`
          },
          takeaways: [
            "A vividly imagined future is a free sample — imagination rehearses experience.",
            "Paint at the resolution of one ordinary, filmable moment; the simulator runs on detail.",
            "Promise the changed self, not just the changed output — the after-identity is the product.",
            "Admit limits and paint the median honest outcome; reviews are where inflated paintings get repriced."
          ],
          sources: [
            { name: "Chip & Dan Heath — Made to Stick", note: "concreteness and the simulation effect: why detail-rich scenarios outperform abstractions in memory and action." },
            { name: "Robert Cialdini — Pre-Suasion", note: "how directing attention to an imagined experience shifts what the audience is ready to accept next." }
          ]
        },
        {
          id: "m2l5",
          title: "Lever 5 — Give the first step",
          minutes: 15,
          sections: [
            {
              h: "The gap where change dies",
              p: `People rarely fail to change because they're unconvinced; they fail because the distance between conviction and action looks unwalkable. The current life is comfortable and the full journey is enormous, so the mind files "change" under someday. The last lever closes this gap by shrinking the ask until refusing it feels sillier than doing it. Behaviour-change research converges on the same equation from several directions: action happens when motivation, ability and a prompt coincide — and since motivation is expensive and unreliable, the professional move is to raise ability by shrinking the behaviour. You can't make them want it more; you can always make it smaller.`
            },
            {
              h: "Design the ridiculous first step",
              p: `Not "overhaul your sleep" — "tonight, in bed one hour earlier". Not "migrate your business" — "send one invoice with it, free, in five minutes". The first step should be so small it embarrasses the excuses, and so immediately rewarding that the second step suggests itself. Test every first step against three properties: under five minutes, requires nothing they don't already have, and produces a visible result (a sent invoice, a saved draft, a number on a screen). You're not asking for the journey; you're asking for a single footprint — and engineering the footprint so the ground feels good enough to take another.`
            },
            {
              h: "Open loops want closing — probably",
              p: `A century ago, Bluma Zeigarnik reported that interrupted tasks are remembered better than completed ones — the "open loop" that nags to be closed. Honesty requires a footnote: modern replications of the effect are mixed, so treat open loops as a real but unreliable tendency, not a law of physics. What IS robust in practice: started tasks recruit consistency (I began, so I'm someone who's doing this), visible progress motivates continuation, and endowed progress — the loyalty card that comes with two stamps already filled — measurably increases completion. So don't rely on the mystique of the unclosed loop; rely on the engineering around it: make the start tiny, make the progress visible, and hand them the first stamp.`
            },
            {
              h: "The full sequence",
              p: `You now hold the whole chain: name the problem (attention), mirror the identity (recognition), draw the line (choice), paint the transformation (desire), give the first step (action). One message rarely needs all five — but every message that works is running at least one, and you should always know which. When something you publish underperforms, the chain is also your diagnostic in reverse: no attention means the problem wasn't named; attention without resonance means the mirror missed; resonance without desire means no painted after; desire without action means the first step was missing or too big. Five levers, five failure modes, one checklist.`
            }
          ],
          example: {
            title: "The onboarding funnel that found its missing footprint",
            body: [
              `A budgeting app had a familiar curve: strong signups, 70% never completing setup. The original onboarding asked new users to connect their bank, categorise three months of history and set budgets for twelve categories — a journey presented as a first step. Motivation was demonstrably there (they'd just signed up); ability was the bottleneck: the ask was forty minutes and mildly frightening (bank credentials, day one).`,
              `The redesign shrank the footprint to one action: "Type last month's rent. That's it." Five seconds, nothing needed, and the reward was engineered to be visible — the app immediately rendered a single-bar chart: "Rent is typically 34% of take-home. Want to see what the rest of your picture looks like?" One number in, one insight out, one obvious next stamp. Setup completion went from 30% to 68%, and — the detail that vindicates the whole lever — users who entered that single number connected their banks at twice the rate of the old funnel, three days later on average, once the app had proven it gave back more than it asked. The bank connection hadn't gotten easier. The users arriving at it had a streak to protect. First a footprint, then an identity ('someone who's doing this'), then the journey — in that order, always.`
            ]
          },
          mistakes: [
            "Presenting the journey as the first step — forty minutes and a bank login is a commitment, not a footprint.",
            "First steps with invisible results: unrewarded starts don't suggest second steps.",
            "Relying on 'open loop' mystique instead of the reliable engineering: tiny start, visible progress, endowed first stamp.",
            "Raising motivation with hype when the fix was raising ability by shrinking the ask.",
            "Diagnosing dead messages by intuition instead of walking the five-lever chain in reverse."
          ],
          exercise: {
            minutes: 15,
            prompt: `Take the action you most want your audience (or team, or self) to take. Design its footprint: under five minutes, uses only what they already have, produces a visible result. Then add the endowed stamp — what progress can they start with for free? Ship the redesigned ask this week and compare response to the old journey-sized one.`
          },
          takeaways: [
            "Change dies in the conviction–action gap; shrink the behaviour rather than inflating the motivation.",
            "First steps: under five minutes, nothing new required, visibly rewarding — a footprint, not a journey.",
            "Treat open loops as a tendency, not a law — the reliable levers are consistency, visible progress and endowed starts.",
            "Problem → mirror → line → transformation → first step: run the chain forward to build, backward to diagnose."
          ],
          sources: [
            { name: "BJ Fogg — Tiny Habits", note: "the behaviour = motivation × ability × prompt model, and why shrinking beats hyping." },
            { name: "Bluma Zeigarnik — 'On Finished and Unfinished Tasks' (1927)", note: "the original open-loop study — cited here with its mixed modern replication record, which the lesson states honestly." }
          ]
        }
      ],
      workshop: {
        title: "Workshop 2 — Write the five levers",
        brief:
          "Theory becomes skill only under an audience. Write all five levers on one " +
          "idea you actually care about — then let reality grade one of them. Use the " +
          "five-levers worksheet and message map from this module's toolkit.",
        steps: [
          "Pick one idea, product or belief you genuinely want more people to get.",
          "Diagnose the audience first (tension + awareness room) using the Module 1 worksheet — the levers are aimless without it.",
          "Write five short pieces (2–4 sentences each), one per lever: a problem-naming opener, an 'if you're…' mirror, a 'this isn't for…' line, a single-moment transformation scene with one honest edge, and a footprint-sized first step.",
          "Read them aloud. Cut every phrase a real person wouldn't say across a table.",
          "Publish or send the strongest one — a post, a message to a friend, an email. Reality is the grader; theory doesn't count.",
          "Record what happened, then run the reverse diagnostic: which link of the chain failed (or worked)?"
        ],
        deliverable:
          "Paste your strongest lever piece below, name the lever and tension it " +
          "pulls, and note what happened when a real human met it — plus your " +
          "reverse-diagnostic read on why."
      },
      tools: [
        {
          id: "five-levers-worksheet",
          title: "Five-levers writing worksheet",
          desc: "One idea through all five levers, with quality checks per lever.",
          body: `# Five-Levers Worksheet

**The idea/offer:**
**The audience (one person, from your diagnosis):**
**Their tension:** survival / identity / progress
**Their awareness room:** unaware / problem / solution / product / most

## Lever 1 — Name the problem
Draft (2–4 sentences):
- [ ] One level more specific than feels natural
- [ ] Uses their harvested language, not mine
- [ ] Passes the honesty test: better off after the tension resolves?

## Lever 2 — Mirror the identity
Draft ("If you're…"):
- [ ] Reflects a lived interior moment, not a demographic
- [ ] Harvested, not imagined
- [ ] Aspirational version within reach of the current self

## Lever 3 — Draw the line
Draft ("This isn't for…"):
- [ ] Placed after the mirror
- [ ] Drawn on commitment/fit, not contempt
- [ ] The excluded person could read it and nod

## Lever 4 — Paint the transformation
Draft (one filmable moment + one honest edge):
- [ ] Single ordinary scene, sensory enough to render
- [ ] Promises the changed self, not just changed output
- [ ] Median honest outcome, with a named limit

## Lever 5 — Give the first step
Draft:
- [ ] Under 5 minutes  · [ ] Needs nothing new  · [ ] Visible result
- [ ] Endowed stamp included?

## Ship one. Which, where, when: ______
`
        },
        {
          id: "message-map",
          title: "Awareness-stage message map",
          desc: "The five sentences for your offer — one per room — plus where each audience segment lives.",
          body: `# Awareness-Stage Message Map

**Offer:**

| Room | Their state | Your one sentence | Where this runs |
|---|---|---|---|
| Unaware | Don't know the problem exists | | (top-of-funnel content) |
| Problem-aware | Feel it; don't know solutions exist | | |
| Solution-aware | Comparing categories/options | | |
| Product-aware | Know you; unconvinced | | (proof, demos, objections) |
| Most-aware | Convinced; haven't acted | | (occasions, deadlines) |

## Rules
- Never pitch features to the unaware; never re-educate the most-aware.
- Every list/audience spans rooms: segment or sequence, don't average.
- Evidence for your diagnosis of each segment's room (what they say/search/ask):

## The escalator
What moves someone from each room to the next? Name the content piece per step:
unaware → problem: ______
problem → solution: ______
solution → product: ______
product → most: ______
most → action: ______ (the occasion)
`
        },
        {
          id: "first-step-designer",
          title: "First-step designer",
          desc: "Shrink any ask to a footprint: the 5-minute / nothing-new / visible-result test plus endowed progress.",
          body: `# First-Step Designer

**The behaviour I ultimately want:**
**Who from:**

## Shrink it
Current ask, honestly sized (minutes, tools, courage required):
Footprint version:
- [ ] Under 5 minutes
- [ ] Requires nothing they don't already have (no new accounts/credentials day one)
- [ ] Produces a visible result immediately (what exactly appears?)

## Reward the footprint
What do they SEE the moment they finish? (a chart, a sent thing, a number):
What suggests the second step without demanding it?

## Endowed progress
What stamp can they start with already filled? (progress granted at entry):

## The prompt
Where/when does the ask appear, at the moment ability is highest?

## Diagnostic (run when a message dies)
No attention → problem not named
Attention, no resonance → mirror missed
Resonance, no desire → no painted after
Desire, no action → first step missing or journey-sized
`
        }
      ],
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
            explain: "Exclude on commitment, values and fit. Punching down reads instantly as insecurity and burns future goodwill — including with the audience you kept."
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
        "one-to-one, the six classic principles of influence — and turning human " +
        "nature into the meta-skill under every other skill.",
      lessons: [
        {
          id: "m3l1",
          title: "The ethics line: persuasion vs manipulation",
          minutes: 15,
          sections: [
            {
              h: "The tool is neutral; the wielder isn't",
              p: `Every lever in this course is used daily to sell medicine and to sell snake oil, to get children to read and to get adults to rage. The technique carries no ethics of its own. What decides the morality is the exchange underneath: manipulation extracts value from the audience for the persuader's benefit; persuasion moves someone toward something that genuinely serves them, faster than they'd have moved alone. This means the ethics audit happens before the copywriting: is the thing I'm moving people toward actually good for the people I'm moving? If the answer is no, no amount of gentle technique redeems it; if yes, timidity about using strong technique just means the snake-oil sellers keep winning the attention war unopposed.`
            },
            {
              h: "The transparency test",
              p: `One question separates the two more reliably than any philosophy seminar: if the audience could see exactly what you're doing and why — every lever, every framing choice — would they thank you or feel used? A doctor naming your symptoms precisely passes; a fake countdown timer fails. Techniques that only work while hidden are manipulation by definition. Run the test on components, not just campaigns: an honest product can still carry a manipulative checkout page, and the audit is only useful at the resolution where the tricks actually live — the countdown, the pre-ticked box, the "only 2 left" that regenerates nightly, the cancel flow designed like a maze.`
            },
            {
              h: "Desperation is the corrupting force",
              p: `People rarely choose manipulation as a philosophy; they slide into it under pressure. When your own survival tension is screaming — rent due, launch failing — the shortcut whispers. This is the practical reason to manage your own ladder of needs: an operator with margin can afford to be honest, and honesty compounds while tricks decay. Know which tension YOU are in before you write a single persuasive word, and install the guardrails while you're calm: written rules ("no fabricated scarcity, ever"), a person who reviews your campaigns and is licensed to say no, and — the strongest one — pricing and runway decisions that keep you out of the desperation zone where good people write bad checkouts.`
            },
            {
              h: "Ethics is also strategy",
              p: `Manipulation has a business model: it maximises the first transaction and forfeits every one after it. Refunds, churn, reputation, the audience that never returns — the invoice arrives later but it always arrives, and in the review-and-screenshot era it arrives faster and more publicly every year. Trust is the only asset in this game that appreciates. The most persuasive thing you will ever build is a track record of people being glad they listened to you — a reputation that converts better than any headline you'll ever write, because it pre-answers the only question that matters: "can I believe this person?"`
            }
          ],
          example: {
            title: "Two checkouts, audited line by line",
            body: [
              `Checkout A, from a course seller under revenue pressure: a countdown timer ("offer ends in 14:59") that resets for every visitor; "only 3 spots left" hard-coded into the page; a pre-ticked box adding a $29/month "community membership"; a testimonial from "Jake M." who does not exist; and a guarantee whose conditions live in a PDF nobody opens. Run the transparency test on each: would the buyer thank you if they saw the timer reset, the hard-coded 3, the pre-ticked box, the invented Jake? Four fails and a hedge. Revenue that quarter was fine. Refunds ran 19%, chargebacks put the seller on a payment processor's watchlist, and the screenshots of the resetting timer eventually did their rounds.`,
              `Checkout B, same market: a real cohort limit ("24 seats because I personally review the workshop submissions — here's last cohort's thread"); a real deadline ("enrolment closes Friday because we start Monday"); the membership as an unticked, clearly priced option; three testimonials with full names, links, and one lukewarm one left in ("the first week was slower than I wanted — worth it by week three"); a guarantee in plain sentences on the page. Every line survives being seen. Conversion was a third lower than A's on first visit — and 41% of B's buyers came from referrals within a year, versus a referral rate A's owner described as "basically zero". The lukewarm testimonial, B reported, was the single most-cited line in purchase emails. Nothing builds belief like visible edges — and nothing survives audit like things that were true.`
            ]
          },
          mistakes: [
            "Auditing the campaign but not the components — honest products with manipulative checkouts fail where the tricks live.",
            "Fabricated scarcity: resetting timers and evergreen 'only 3 left' are the fastest transparency-test fails in commerce.",
            "Waiting until you're desperate to decide your rules — guardrails install correctly only in calm weather.",
            "Treating ethics as a tax on conversion instead of a compounding referral asset.",
            "Scrubbing every lukewarm sentence from your proof — edges are what make the rest believable."
          ],
          exercise: {
            minutes: 15,
            prompt: `Audit your own funnel (or your employer's) at component resolution: every scarcity claim, default checkbox, testimonial and guarantee. Mark each pass/fail on the transparency test. Then write your two written rules — the tricks you will never use even when the rent clock runs — and put them somewhere a future, more desperate you will see them.`
          },
          takeaways: [
            "Manipulation extracts value; persuasion delivers it faster than the audience would find it alone — audit the destination before the technique.",
            "The transparency test, run at component resolution: would they thank you if they saw every move?",
            "Desperation corrupts; install written rules, a reviewer with a veto, and margin — while calm.",
            "Trust compounds and tricks decay; the referral rate is where ethics shows up in the accounts."
          ],
          sources: [
            { name: "Robert Cialdini — Influence (the ethics chapters)", note: "the author of the principles on their honest use — and on 'bunglers, smugglers and sleuths' of influence." },
            { name: "Mullainathan & Shafir — Scarcity", note: "why pressure narrows judgment — the mechanism behind desperation-driven ethical slides." }
          ]
        },
        {
          id: "m3l2",
          title: "Test against reality",
          minutes: 15,
          sections: [
            {
              h: "Knowledge that hasn't touched reality isn't knowledge",
              p: `You can read every book on persuasion and psychology and still be unable to hold a room, sell a product or write a post anyone finishes. Until an idea has been tested on actual humans who were free to ignore you, it's a hypothesis wearing a diploma. The difference between people who understand human nature and people who've read about it is a stack of real-world responses — and the stack is the credential the market actually checks. This course is deliberately structured around that: every workshop pushes the material in front of people who owe you nothing, because their indifference is the only honest grader available.`
            },
            {
              h: "Publishing is the laboratory",
              p: `Writing in public, speaking, selling, pitching — these aren't just applications of the skill; they're how the skill is acquired. Every post is an experiment: a tension chosen, a lever pulled, a result measured in replies, silence or shares. Design them like experiments, too: one variable at a time where you can (same content, two openers; same offer, two first steps), stated expectations before you ship ("I predict the mirror version doubles replies"), and a written record — because memory will flatter you, and the log won't. The market is a blunt, unflattering, absolutely honest mentor, and it charges nothing but ego.`
            },
            {
              h: "Read the feedback correctly",
              p: `Silence usually means the mirror was angled at nobody. Attention without action usually means the transformation was vivid but the first step was missing or too big. Anger often means you hit identity tension without offering belonging on the other side. Praise-without-sharing often means you flattered the reader but gave them nothing that raises THEIR status to pass on. Treat every response — including none — as information about which lever failed, and iterate the lever, not your self-worth. One caution from the interviewing literature: what people SAY about your work ("love it!") is nearly worthless next to what they DO (reply, share, buy, return) — compliments are social lubricant; behaviour is data.`
            },
            {
              h: "Volume before judgment",
              p: `The first twenty attempts mostly calibrate your instrument. Decide in advance to run the experiment twenty times before concluding anything about your ability — one post proves nothing in either direction; a portfolio of attempts converges on signal. Consistency of testing beats intensity of theorising, in exactly the way ten cold showers beat a semester of reading about discipline. The practical cadence that survives real life: one small public experiment per week, fifteen minutes of writing the result honestly, one lever adjusted for next week. Fifty-two experiments a year makes you measurably better at this than almost everyone theorising around you.`
            }
          ],
          example: {
            title: "Twenty posts, one log, one finding",
            body: [
              `A data analyst decided to build an audience writing about analytics careers. Instead of posting and hoping, she ran the course's protocol: twenty posts in ten weeks, every one logged in a spreadsheet — date, opener type (problem-named / mirror / story / hot-take), tension pulled, predicted response, actual response (impressions, replies, profile visits, follows). Her predictions were wrong constantly at first, which was the point: the log was calibrating her instrument.`,
              `The finding that emerged by post fourteen was one no book would have given her, because it was about HER audience: mirror-openers ("if you're the analyst who gets handed 'quick questions' at 4:55pm…") outperformed her cleverest hot-takes three-to-one on replies — but story-openers about her own career mistakes outperformed everything on follows, by a wider margin still. Her theory-brain had been rationing the personal stories as "self-indulgent"; the log overruled her. She rebuilt her cadence around the data (two mirrors + one story per week), and the account that had been flat at 800 followers for a year crossed 6,000 in the next five months. The magic ingredient wasn't any single post. It was the log — twenty humble experiments beating a year of taste.`
            ]
          },
          mistakes: [
            "Publishing without predictions — no stated expectation means no calibration, just vibes in hindsight.",
            "Changing three variables per experiment and learning nothing from any of them.",
            "Reading compliments as data; only behaviour (reply, share, buy, return) counts.",
            "Judging your ability on attempt three instead of attempt twenty.",
            "Iterating your self-worth instead of the lever — the diagnosis is always mechanical: which link of the chain failed?"
          ],
          exercise: {
            minutes: 20,
            prompt: `Set up your experiment log (five columns: date, opener/lever, prediction, actual, lesson). Ship experiment #1 this week: one idea, one lever, one stated prediction. The log is the deliverable — the habit of predicting before shipping is what separates practice from posting.`
          },
          takeaways: [
            "Untested knowledge is a hypothesis wearing a diploma; the stack of real responses is the real credential.",
            "Design experiments: one variable, a stated prediction, a written log — memory flatters, logs don't.",
            "Silence, inaction, anger and unshared praise each diagnose a specific failed lever; behaviour outranks words.",
            "Twenty attempts before judgment; one experiment a week beats a semester of theory."
          ],
          sources: [
            { name: "Rob Fitzpatrick — The Mom Test", note: "why what people say is worthless next to what they do, and how to collect honest signal." },
            { name: "Eric Ries — The Lean Startup", note: "build-measure-learn as a discipline: stated hypotheses, small experiments, honest measurement." }
          ]
        },
        {
          id: "m3l3",
          title: "Reading people one-to-one",
          minutes: 15,
          sections: [
            {
              h: "The tensions walk into every room",
              p: `Interviews, negotiations, sales calls, first dates, family dinners — every conversation has an active tension, and the person will show you which. The one who keeps mentioning runway and costs is in survival. The one who keeps referencing how decisions will look is in identity. The one asking "where does this go long-term?" is in progress. Your job is to stop broadcasting and start diagnosing — which requires the discipline most communicators never develop: shutting up long enough for the other person's tension to surface. In the first ten minutes, aim to speak less than a third of the words. The ratio isn't politeness; it's data collection.`
            },
            {
              h: "Listen for the sentence under the sentence",
              p: `People state positions and hide interests. "We need more detail" can mean "I can't defend this upstairs yet" (identity), "I'm afraid of being blamed" (survival), or "show me this leads somewhere" (progress) — three different sentences requiring three different replies. The cheapest diagnostics are the ones almost nobody uses: genuine curiosity expressed as short questions, the label ("it sounds like the board's reaction is the real concern here?"), and silence you don't fill — the negotiator's pause that lets the real sentence emerge because humans reliably complete silences with truth. When a label lands, people say more; when it misses, they correct you — and both outcomes hand you the diagnosis.`
            },
            {
              h: "Persuade in their frame, not yours",
              p: `Once you know the active tension, translate your proposal into its currency. The same project is "a way to stop the bleeding" to a survival listener, "the thing your name gets attached to" to an identity listener, and "the first step toward where you said you want to be" to a progress listener. None of these is dishonest — they're the same truth, addressed to the part of the person that's listening. The failure mode to watch in yourself: defaulting to the frame that would persuade YOU. Analysts pitch numbers to relationship-people, visionaries pitch futures to the risk-averse, and both leave the meeting confused about why the obviously correct argument didn't land. The argument was fine. The address was wrong.`
            },
            {
              h: "Mastery of self comes first",
              p: `The hardest person in the room to read is you. Your own tensions distort every exchange: unacknowledged survival fear makes you push too hard and accept bad terms; identity hunger makes you perform instead of listen; even impatience for progress reads to the other side as pressure. The practitioners people describe as having "presence" are mostly people whose own tensions are quiet enough to leave attention free for the other side of the table. Before any conversation that matters, run the sixty-second self-check: which tension is loudest in me right now, and what will it make me do? Naming it doesn't silence it, but a named tension pulls your strings far less than an unnamed one. That is what mastering your mind, rather than serving it, actually looks like.`
            }
          ],
          example: {
            title: "One objection, three correct answers",
            body: [
              `A freelance developer quoted $18,000 for a website rebuild. The client said: "That's a lot — we need to think about it." Amateur move: defend the price ("it's actually competitive because…"), which answers the position and ignores the interest. Instead she labelled and waited: "Sounds like there's a specific worry behind the number?" — then silence. Three different clients, three different sentences emerged from that same pause, across her next quarter.`,
              `Client one (survival): "Honestly, cash is tight until the funding closes." Answer in that currency: phase the build, small deposit, balance after the round — deal signed. Client two (identity): "Last agency burned us and I approved that spend." The number was never the issue; being burned twice publicly was. Answer: weekly demos, kill-clause at every milestone, references he could call — "something you can defend upstairs at every stage." Signed. Client three (progress): "We're just not sure the site matters this year." A real objection, honestly held — and unpersuadable at any price until the frame connected the site to where they said they wanted to be ("you told me the goal is inbound leads by Q3; this is that machine, or it's nothing — and if it's nothing, don't buy it"). They deferred, returned in Q2, signed. One price. One objection, verbatim. Three tensions, three answers — and the diagnostic that made them possible was a label and four seconds of silence.`
            ]
          },
          mistakes: [
            "Broadcasting in the diagnostic window — if you talked most of the first ten minutes, you collected nothing.",
            "Answering the position ('too expensive') instead of surfacing the interest underneath it.",
            "Pitching in the frame that would persuade YOU rather than the listener's active tension.",
            "Filling the silence that was about to produce the real sentence.",
            "Skipping the self-check and letting your own loudest tension negotiate for you."
          ],
          exercise: {
            minutes: 15,
            prompt: `In your next real conversation with stakes, run the protocol: speak under a third of the words for ten minutes; use one label ('it sounds like…') and let the silence sit. Afterwards, write down which tension surfaced, the sentence under the sentence, and — honestly — which of YOUR tensions was loudest and what it almost made you do.`
          },
          takeaways: [
            "Every conversation has an active tension; diagnosis requires a listening ratio, not just intent.",
            "Positions hide interests — labels plus unfilled silence surface the sentence under the sentence.",
            "Translate one truth into the listener's currency: relief, defensibility or direction — never default to your own frame.",
            "Run the sixty-second self-check; a named tension pulls your strings less than an unnamed one."
          ],
          sources: [
            { name: "Chris Voss — Never Split the Difference", note: "labels, calibrated questions and the disciplined silence — field-tested diagnostic machinery for live conversations." },
            { name: "Fisher & Ury — Getting to Yes", note: "positions versus interests: the classic frame under 'the sentence under the sentence'." }
          ]
        },
        {
          id: "m3l4",
          title: "The meta-skill: compounding human nature into everything",
          minutes: 15,
          sections: [
            {
              h: "Every 'high-value skill' is a layer on this one",
              p: `Copywriting is the tensions in text. Sales is the tensions in conversation. Product design is the first-step lever industrialised. Leadership is identity and progress tension held for a group. Fundraising is the transformation lever with a term sheet attached. Fashionable skills will keep changing names every two years, but each one routes through the same substrate: a human deciding whether to pay attention, believe, and act. Learn the substrate and every layer above it comes at a discount — which is why this course's material will still be current when this year's hot skill list is a nostalgia post.`
            },
            {
              h: "Why this outlasts the tools",
              p: `Tools now generate competent text, images and code on demand — competence is becoming ambient. What stays scarce is knowing what will move a particular human: which tension is live, which room of awareness they're in, which first step they'd actually take. The person who understands the audience directs the tools; the person who only understands the tools awaits direction. This is also the honest career case for deliberate skill-stacking: rare and valuable work comes from combinations, and 'technical skill × human nature' is the most reliably underpopulated combination in every field — the engineer who can persuade, the analyst who can tell a story, the designer who can sell.`
            },
            {
              h: "The practice loop, permanently installed",
              p: `The course ends; the loop shouldn't. Each week: notice one piece of communication that moved you and name the lever it pulled; ship one small experiment of your own; read the response as diagnosis. Fifteen minutes a week, compounding for years, is how "studied persuasion once" becomes "understands people" — a reputation that opens doors no credential opens. Put the loop somewhere structural so it survives motivation: a calendar block, the experiment log from Lesson 3.2, a partner running the same loop who expects your weekly entry. Systems keep what enthusiasm starts.`
            },
            {
              h: "The standard you carry",
              p: `You now see the levers everywhere — in ads, sermons, headlines and your own drafts — which means you've inherited the operator's burden: you can no longer pull them innocently. Hold the transparency test, paint only futures you can cause, and use the strongest tools on the worthiest problems you can find. Making people glad they listened to you is the entire game, played honestly, for as long as you're in it. And one more standard, for the road: teach it. The fastest way to deepen your own grip on this material is to explain a lever to someone who needs it — and a world with more people who can SEE the levers is a world where the manipulative versions work less well on everyone.`
            }
          ],
          example: {
            title: "The same promotion, fought twice",
            body: [
              `Two senior engineers at the same company went for the same staff-engineer promotion, two cycles apart. Engineer one had the stronger technical record and ran the default playbook: a packet listing systems built, incidents resolved, technologies mastered. The committee's feedback, translated from corporate: "impact unclear beyond the team." Denied. He concluded the process was political — which was true, in the sense that all decisions made by humans are.`,
              `Engineer two, technically comparable, treated the promotion as an exercise in this course's material. Audience diagnosis: the committee's tension was survival — their real fear, expressed in every calibration meeting, was promoting someone whose scope collapses under scrutiny from THEIR bosses (an identity stake for the committee members themselves). So the packet was rebuilt: problem first ("the payments platform was the single biggest source of on-call pain in the org — here's the pager data"), one named person as the story's character (the support engineer whose 2am pages went from nine a month to zero), the aggregate as the closer ($2.1M in retained revenue from reliability, methodology attached), and the committee's defensibility engineered directly — each claim pre-endorsed in writing by a director who'd repeat it in the room. Approved, first attempt. The uncomfortable summary is also the encouraging one: the second packet wasn't better spin on weaker work — it was the same calibre of work, made legible to the humans deciding. The work was necessary. It was never going to be sufficient. It never is.`
            ]
          },
          mistakes: [
            "Learning the substrate, then forgetting to apply it to your own career artefacts — CVs, packets, pitches are audiences too.",
            "Waiting for the loop to run on motivation instead of installing it structurally.",
            "Keeping the skill in the marketing silo — the same levers run meetings, hiring, teaching and parenting.",
            "Directing the tools without diagnosing the audience — ambient competence, aimed at nobody.",
            "Using the meta-skill's power on unworthy problems; the standard travels with the toolkit."
          ],
          exercise: {
            minutes: 20,
            prompt: `Pick the career artefact you'll need next (CV, promotion case, portfolio, pitch). Rebuild its opening with the full chain: the audience's problem named, one human story, the aggregate as closer, and the decider's defensibility engineered. Then install the weekly loop: calendar block, log, and one person who expects your entry.`
          },
          takeaways: [
            "Every high-value skill routes through the same substrate: a human deciding to attend, believe and act.",
            "As competence becomes ambient, audience diagnosis stays scarce — combine it with your technical base.",
            "Install the weekly loop structurally: notice a lever, ship an experiment, read the diagnosis — for years.",
            "You see the levers now; carry the standard, and teach it — visible machinery protects everyone."
          ],
          sources: [
            { name: "Cal Newport — So Good They Can't Ignore You", note: "career capital and skill-stacking: why rare, valuable combinations beat passion-following — the honest frame for the meta-skill claim." },
            { name: "Robert Cialdini — Pre-Suasion", note: "the operator's-burden book: how attention direction works, from the researcher most careful about its ethics." }
          ]
        },
        {
          id: "m3l5",
          title: "The six classic principles — and when each tips into manipulation",
          minutes: 15,
          sections: [
            {
              h: "The catalogue, honestly labelled",
              p: `Six decades of persuasion research, most famously synthesised by Robert Cialdini, keep converging on the same short catalogue of forces that move people: reciprocity (we repay what we're given), commitment/consistency (we act like the person we've said we are), social proof (we do what people like us do), authority (we defer to credible expertise), liking (we say yes to people we like), and scarcity (we want what's limited). You've already met several wearing this course's clothing — deposits, identity mirrors, the line, the endowed first step. This lesson gives you the catalogue straight, because each principle is a hinge: every one has an honest form and a manipulative form, and the difference is always the same one — whether the underlying fact is true.`
            },
            {
              h: "The truth hinge, principle by principle",
              p: `Reciprocity: giving genuine value first is honest; the unsolicited "gift" engineered to create obligation is not. Consistency: inviting someone to articulate their own goals is honest; extracting tiny public commitments to weaponise later is not. Social proof: real numbers and real users are honest; invented counters, fake reviews and astroturf are the internet's most common lie. Authority: earned credentials and demonstrated work are honest; borrowed lab coats, misleading titles and rented credibility are not. Liking: genuine warmth and finding real common ground are honest; manufactured similarity ("I'm from there too!") is a con's oldest move. Scarcity: real limits — cohort sizes, closing dates, finite attention — are honest; regenerating countdowns are not. Same six levers. The hinge is never the technique; it's whether the fact underneath would survive being checked.`
            },
            {
              h: "Stacking, and the diminishing-trust budget",
              p: `The principles compound: a launch with real social proof, from a genuinely liked sender, with an honest deadline, converts multiples of any single lever alone. But stack with restraint — every persuasive element spends from the same trust budget, and audiences can feel when a message is ALL technique. The practical ceiling: two, occasionally three principles per message, each carrying a checkable fact. Beyond that, even honest messages start to read as manipulation, because the density of technique itself becomes the message. The strongest communicators you know feel almost artless. That's the stack, disciplined.`
            },
            {
              h: "Defence: reading the levers being pulled on you",
              p: `The catalogue is also armour. When you feel the urge to buy, join, share or rage, run the tap-check: which principle just fired? Is the fact under it true? A regenerating timer, a "9 people are looking at this right now", an influencer's borrowed authority, a stranger's instant warmth before an ask — naming the lever mid-pull is the single most reliable way to restore choice. Teach the tap-check to people you care about; it's the rare skill that gets stronger in a population the more widely it's shared, because visible machinery moves no one. You are now, permanently, harder to manipulate than you were seven weeks ago. That was always half the point.`
            }
          ],
          example: {
            title: "One launch email, six principles, all load-bearing and true",
            body: [
              `A solo consultant launching a group programme sent one email that a student of this catalogue can read like sheet music. Opening: a genuinely useful two-page pricing guide, attached, no strings ("keep this either way") — reciprocity, honest form: the gift has standalone value. Second paragraph: "Last month you told me your goal was to stop trading hours for money — this programme is that goal with a start date" — consistency, honest: HIS stated goal, quoted back with permission from a survey reply. Proof block: "Fourteen of the twenty spring participants raised their rates within 60 days; three said it paid for itself before it ended — names and threads here" — social proof, checkable.`,
              `Credentials: one line, specific and verifiable ("I've priced 200+ consulting engagements; here are the three public case studies") — authority without a costume. Tone throughout: the warmth of someone who'd already sent value for a year — liking, accumulated rather than manufactured. Close: "Twenty seats, because I review every participant's pricing personally — spring's waitlist thread is here if you want evidence that the cap is real. Doors close Thursday because we start Monday." — scarcity with receipts. Six principles, one email, every fact checkable, and — the discipline worth copying — each one WOULD survive the buyer seeing exactly what was being done, because the email says what it's doing out loud. Conversion: 19 of 20 seats in four days, zero refunds, and several 'not this time' replies that read like thank-you notes. That's the catalogue, stacked honestly. It doesn't feel like technique. It feels like a trustworthy person with something real. Which, underneath the sheet music, is what it was.`
            ]
          },
          mistakes: [
            "Using the catalogue's manipulative forms 'just this once' — the trust ledger has no small entries.",
            "Stacking five principles into one message and radiating technique instead of trustworthiness.",
            "Social proof theatre: rounded-up numbers and invented activity counters — the most-checked lie on the internet.",
            "Scarcity without receipts: if the limit is real, show the evidence; if you can't, it isn't.",
            "Learning the catalogue for offence only — the tap-check defence is half its value and all of its ethics."
          ],
          exercise: {
            minutes: 15,
            prompt: `Take one persuasive message you're about to send (or recently received). Annotate it like sheet music: mark every principle in play, and for each, write the checkable fact underneath — or the absence of one. For your own message: cut to the two strongest honestly-backed principles and ship that version.`
          },
          takeaways: [
            "Six forces: reciprocity, consistency, social proof, authority, liking, scarcity — each with an honest and a manipulative form.",
            "The hinge is always the same: would the fact underneath survive being checked?",
            "Stack two, occasionally three, principles per message; technique density itself reads as manipulation.",
            "Run the tap-check on yourself and teach it on — named levers move no one."
          ],
          sources: [
            { name: "Robert Cialdini — Influence: The Psychology of Persuasion", note: "the primary catalogue: six (later seven) principles with the research underneath each." },
            { name: "Robert Cialdini — Pre-Suasion", note: "the sequel on attention and timing — plus the fullest treatment of ethical boundaries by the field's central figure." }
          ]
        }
      ],
      workshop: {
        title: "Workshop 3 — The influence audit",
        brief:
          "Take one real, upcoming ask in your life and design it deliberately — " +
          "tensions, levers, principles, ethics and all. Use the transparency " +
          "checklist and experiment log from this module's toolkit.",
        steps: [
          "Choose a real ask with stakes: a job application, a pitch, a raise conversation, a launch post, a difficult favour.",
          "Diagnose the audience: which tension is active for them right now, and which room of awareness are they in?",
          "Draft the ask using at least three levers — name their problem, mirror who they are, and give a first step so small that 'yes' is easy.",
          "Annotate your draft against the six classic principles: which are in play, and is the fact under each checkable?",
          "Run the transparency test on your draft at component level: if they saw every move, would they thank you? Rewrite anything that fails.",
          "Deliver it in the real world within seven days, log the result in your experiment log, and note which lever you'd adjust."
        ],
        deliverable:
          "Paste your final ask below (or its key lines), name the tensions, levers " +
          "and principles it uses, and note the result once it's delivered."
      },
      tools: [
        {
          id: "transparency-checklist",
          title: "Transparency test checklist",
          desc: "The component-level ethics audit: run every campaign, page and pitch through it before shipping.",
          body: `# Transparency Test — component audit

**The piece being audited:**
**The audience:**

## The master question
If the audience could see exactly what I'm doing and why — every lever,
every framing choice — would they thank me or feel used?

## Component checks (pass / fail / fix)
| Component | Present? | The fact underneath | Would it survive being seen? |
|---|---|---|---|
| Scarcity claim (timer, seats, deadline) | | | |
| Social proof (numbers, testimonials, activity) | | | |
| Authority signals (credentials, titles, borrowed logos) | | | |
| Reciprocity (gifts, free value, obligations created) | | | |
| Commitment devices (micro-yeses, public pledges) | | | |
| Defaults & checkboxes | | | |
| Cancel/refund path (maze or door?) | | | |
| Painted transformation (median honest outcome?) | | | |

## The desperation check
Which of MY tensions is loudest right now, and is it holding the pen?

## My written rules (the tricks I never use, decided in calm weather)
1.
2.

## Reviewer
Who sees this before it ships, with a licensed veto: ______
`
        },
        {
          id: "experiment-log",
          title: "Experiment log",
          desc: "The publish–predict–measure discipline: twenty entries makes you calibrated; a habit makes you dangerous.",
          body: `# Experiment Log

Rule: no publishing without a prediction. Memory flatters; the log doesn't.

## Entry template
| # | Date | Piece (link) | Lever/opener tested | Tension | PREDICTION (written first) | Actual (replies/shares/buys) | Diagnosis | Next adjustment |
|---|---|---|---|---|---|---|---|---|

## Reverse diagnostic (when a piece dies)
- No attention → problem wasn't named
- Attention, no resonance → mirror angled at nobody
- Resonance, no desire → no painted after-state
- Desire, no action → first step missing or journey-sized
- Anger → identity hit without belonging offered
- Praise without sharing → nothing in it raised THEIR status to pass on

## Calibration review (every 10 entries)
- Prediction hit rate: ___ /10
- My systematic bias (optimistic? pessimistic? about which lever?):
- The finding my taste would never have approved:
- Cadence check: am I actually shipping weekly?
`
        },
        {
          id: "principles-card",
          title: "Six principles reference card",
          desc: "The catalogue on one page: honest form, manipulative form, and the tap-check for each.",
          body: `# The Six Principles — reference card

| Principle | The force | Honest form | Manipulative form (never) |
|---|---|---|---|
| Reciprocity | We repay what we're given | Genuine value first, no strings | Engineered gifts that create obligation |
| Consistency | We act like who we've said we are | Invite them to state THEIR goals | Extracted micro-commitments, weaponised |
| Social proof | We do what people like us do | Real numbers, named users, checkable | Fake counters, invented reviews, astroturf |
| Authority | We defer to credible expertise | Earned credentials, shown work | Borrowed costumes, rented credibility |
| Liking | We say yes to people we like | Real warmth, real common ground | Manufactured similarity before the ask |
| Scarcity | We want what's limited | Real limits, with receipts | Regenerating timers, evergreen 'only 3 left' |

## The hinge (memorise)
The technique is never the ethics. The fact underneath is.
Would it survive being checked?

## Stacking rule
Two principles per message, occasionally three — each with a checkable
fact. Density of technique itself reads as manipulation.

## The tap-check (defence)
Feeling the urge to buy/join/share/rage? Ask:
1. Which principle just fired on me?
2. Is the fact under it true? (Check the timer. Count the seats.)
3. Would I still want this if the lever were visible?
Teach this to people you care about. Visible machinery moves no one.
`
        }
      ],
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
          },
          {
            q: "A checkout shows 'only 3 left!' that regenerates for every visitor. Under the six principles, this is:",
            options: [
              "Scarcity in its manipulative form — the fact underneath wouldn't survive being checked",
              "Acceptable social proof",
              "Fine, because scarcity is a documented principle of influence",
              "A reciprocity technique"
            ],
            answer: 0,
            explain: "The principle is never the ethics; the fact underneath is. Real limits with receipts are honest scarcity; regenerating counters are the manipulative form of the same lever."
          },
          {
            q: "The recommended way to stack the six principles in one message is:",
            options: [
              "All six at once for maximum effect",
              "Two, occasionally three — each carrying a checkable fact",
              "Never more than zero; principles are inherently manipulative",
              "One per paragraph, in Cialdini's original order"
            ],
            answer: 1,
            explain: "Principles compound, but every element spends the same trust budget — technique density itself reads as manipulation. Two or three, each with a checkable fact, is the working ceiling."
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
          "content therefore do (and NOT do)?",
        guide:
          "A strong answer diagnoses from the evidence (constant pain-language, zero solution-language), " +
          "names the stage, and derives the content strategy: the first wave must make the problem feel " +
          "solvable — naming the pain in the community's own words and introducing that a solution category " +
          "exists — while explicitly NOT pitching features, pricing or comparisons, which belong to later " +
          "rooms. Bonus: an escalator plan for moving readers room by room over the twelve weeks."
      },
      {
        id: "c2",
        title: "The mirror and the line",
        prompt:
          "Write the actual launch-post opening: an 'if you're…' identity mirror " +
          "drawn from the scenario's details, followed by a 'this isn't for…' " +
          "exclusion line that positions Inkwell against StudioSuite without naming it.",
        guide:
          "A strong mirror reflects a lived interior moment from the scenario's evidence (redrafting payment " +
          "reminders, not feeling like a real business) rather than a demographic ('attention illustrators'). " +
          "The line follows the mirror, excludes on fit (agencies, billing departments, feature-collectors), " +
          "implicitly contrasts the bland do-everything competitor, and could be read by the excluded with a " +
          "nod rather than a flinch."
      },
      {
        id: "c3",
        title: "The transformation and the first step",
        prompt:
          "Paint the after-state in one concrete, single-moment scene (use what the " +
          "beta users told you), then design the smallest possible first step a " +
          "sceptical illustrator could take this week.",
        guide:
          "The scene should be one filmable moment built on the beta users' identity sentence (sending an " +
          "invoice without the fraud feeling) — ordinary, specific, with the changed SELF at its centre — " +
          "ideally with one honest edge. The first step must pass all three tests: under five minutes, needs " +
          "nothing new (no migration, no card), visible result (a sent invoice), with an endowed-progress " +
          "stamp if possible."
      },
      {
        id: "c4",
        title: "The ethics check",
        prompt:
          "Name the two places this campaign would be most tempted to slide into " +
          "manipulation given your four-month runway, and write the guardrail you'll " +
          "hold for each (transparency-test them).",
        guide:
          "Strong answers locate the real temptations: fabricated scarcity/urgency under runway pressure, " +
          "inflated social proof (20 beta users rounded into 'hundreds'), or over-painted transformations. " +
          "Each guardrail should be a written rule that survives the transparency test at component level " +
          "(real deadlines with receipts, exact numbers, median honest outcomes) — and acknowledges that " +
          "desperation, not philosophy, is how the slide happens."
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
        q: "Your first content wave lands: illustrator forums now discuss 'invoicing tools for creatives' as a thing that exists. To move this now solution-aware audience toward Inkwell, your next wave should:",
        options: [
          "Repeat the problem-naming content that worked in wave one",
          "Show Inkwell's specific difference from the generic alternatives they're now comparing",
          "Offer a discount that expires tonight",
          "Stay silent to build mystery"
        ],
        answer: 1,
        explain: "The room has changed: solution-aware audiences are comparing categories and options, so the message becomes your difference. Repeating wave one re-answers a question they've moved past; urgency belongs to the most-aware room, later still."
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
    { when: "Week 1", what: "Module 1 lessons — the story engine, the three tensions, narrative mechanics", type: "Self-paced lessons" },
    { when: "Week 2", what: "Workshop 1 — Tension spotting in the wild · Module 1 knowledge check", type: "Applied practice" },
    { when: "Week 3", what: "Module 2 lessons — the five levers", type: "Self-paced lessons" },
    { when: "Week 4", what: "Workshop 2 — Write the five levers · Module 2 knowledge check", type: "Applied practice" },
    { when: "Week 5", what: "Module 3 lessons — ethics, reality, the six principles, mastery", type: "Self-paced lessons" },
    { when: "Week 6", what: "Workshop 3 — The influence audit · Module 3 knowledge check", type: "Applied practice" },
    { when: "Week 7", what: "Capstone scenario, then the final assessment — 20 questions · 70% to pass", type: "Capstone & assessment" }
  ]
};
