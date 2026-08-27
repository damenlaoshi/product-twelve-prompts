export type TermDef = {
  hanzi: string;
  pinyin: string;
  en: string;
  note: string;
};

export const TERM_LIST: TermDef[] = [
  {
    hanzi: "深度分享",
    pinyin: "shēndù fēnxiǎng",
    en: "in-depth sharing",
    note: "A long, carefully organized piece that goes below the surface.",
  },
  {
    hanzi: "梳理",
    pinyin: "shūlǐ",
    en: "to sort out / comb through",
    note: "Literally “to comb.” Used for organizing messy ideas into a clear order.",
  },
  {
    hanzi: "核心",
    pinyin: "héxīn",
    en: "core / essential",
    note: "The center of something — the part that matters most.",
  },
  {
    hanzi: "插件",
    pinyin: "chājiàn",
    en: "plugin / add-on",
    note: "Extra software you attach to a tool. These prompts work without any.",
  },
  {
    hanzi: "适配",
    pinyin: "shìpèi",
    en: "to adapt / be compatible with",
    note: "To fit different systems. Here: the prompts work with every major model.",
  },
  {
    hanzi: "大模型",
    pinyin: "dà móxíng",
    en: "large language model (LLM)",
    note: "AI systems such as Grok, ChatGPT, Claude, Gemini.",
  },
  {
    hanzi: "场景",
    pinyin: "chǎngjǐng",
    en: "scenario / use case",
    note: "A situation in which you would use a tool. The article has five.",
  },
  {
    hanzi: "本质",
    pinyin: "běnzhì",
    en: "essence / nature",
    note: "What something really is, after you strip away the surface.",
  },
  {
    hanzi: "协作",
    pinyin: "xiézuò",
    en: "collaboration",
    note: "Working together. Here: you and the AI as partners, not a vending machine.",
  },
  {
    hanzi: "底层",
    pinyin: "dǐcéng",
    en: "foundational / underlying",
    note: "The base layer. 底层思维 = thinking that still works when tools change.",
  },
  {
    hanzi: "思维框架",
    pinyin: "sīwéi kuàngjià",
    en: "thinking framework",
    note: "A reusable structure for how you think, not a one-off trick.",
  },
  {
    hanzi: "苏格拉底式",
    pinyin: "Sūgélādǐ shì",
    en: "Socratic",
    note: "In the style of Socrates: teaching by asking, not by lecturing.",
  },
  {
    hanzi: "追问",
    pinyin: "zhuīwèn",
    en: "follow-up questioning",
    note: "To keep asking, one question after another, until the real issue appears.",
  },
  {
    hanzi: "剥离",
    pinyin: "bōlí",
    en: "to peel away / strip off",
    note: "To separate layers (facts, opinions, goals) that are stuck together.",
  },
  {
    hanzi: "价值判断",
    pinyin: "jiàzhí pànduàn",
    en: "value judgment",
    note: "A claim about what is good, bad, should, or ought — not a fact.",
  },
  {
    hanzi: "可验证",
    pinyin: "kě yànzhèng",
    en: "verifiable",
    note: "Something you can check against evidence, not just believe.",
  },
  {
    hanzi: "假设",
    pinyin: "jiǎshè",
    en: "assumption / hypothesis",
    note: "Something you are treating as true without having proved it yet.",
  },
  {
    hanzi: "关键变量",
    pinyin: "guānjiàn biànliàng",
    en: "key variable",
    note: "The factor that, if it changes, would change the whole conclusion.",
  },
  {
    hanzi: "双层解释法",
    pinyin: "shuāngcéng jiěshì fǎ",
    en: "two-layer explanation",
    note: "Explain once in plain language, once in expert language.",
  },
  {
    hanzi: "接地气",
    pinyin: "jiē dìqì",
    en: "down-to-earth",
    note: "Literally “touching the earth’s energy.” Plain, close to real life.",
  },
  {
    hanzi: "反向拆解",
    pinyin: "fǎnxiàng chāijiě",
    en: "reverse deconstruction",
    note: "Take a finished work apart to see why it works, then reuse the logic.",
  },
  {
    hanzi: "可迁移",
    pinyin: "kě qiānyí",
    en: "transferable",
    note: "A pattern you can carry from one case to another.",
  },
  {
    hanzi: "横纵分析",
    pinyin: "héng-zòng fēnxī",
    en: "horizontal–vertical analysis",
    note: "Vertical = history of one thing. Horizontal = compare it with rivals.",
  },
  {
    hanzi: "路径依赖",
    pinyin: "lùjìng yīlài",
    en: "path dependence",
    note: "Early choices lock you into a road that is hard to leave later.",
  },
  {
    hanzi: "一手来源",
    pinyin: "yīshǒu láiyuán",
    en: "primary source",
    note: "Original evidence: filings, papers, interviews — not blogs about blogs.",
  },
  {
    hanzi: "幻觉",
    pinyin: "huànjué",
    en: "hallucination (AI)",
    note: "When a model invents confident-sounding facts that are not true.",
  },
  {
    hanzi: "信息茧房",
    pinyin: "xìnxī jiǎnfáng",
    en: "information cocoon / filter bubble",
    note: "You only see what agrees with you, so your world gets smaller.",
  },
  {
    hanzi: "专家会诊",
    pinyin: "zhuānjiā huìzhěn",
    en: "expert consultation",
    note: "Doctors from different fields examine one case together. Used as a metaphor.",
  },
  {
    hanzi: "第一性原理",
    pinyin: "dìyīxìng yuánlǐ",
    en: "first principles",
    note: "Break a problem back to basic truths, then reason up from there.",
  },
  {
    hanzi: "打补丁",
    pinyin: "dǎ bǔdīng",
    en: "to patch / apply a patch",
    note: "Fixing a broken system with small repairs instead of redesigning it.",
  },
  {
    hanzi: "跨领域借解",
    pinyin: "kuà lǐngyù jièjiě",
    en: "cross-domain borrowing",
    note: "Steal a working solution from a distant field and adapt it.",
  },
  {
    hanzi: "信息不对称",
    pinyin: "xìnxī bù duìchèn",
    en: "information asymmetry",
    note: "One side knows more than the other, which distorts the whole system.",
  },
  {
    hanzi: "钢人论证",
    pinyin: "gāngrén lùnzhèng",
    en: "steelman argument",
    note: "Opposite of a straw man: state the other side in its strongest form.",
  },
  {
    hanzi: "最小实验",
    pinyin: "zuìxiǎo shíyàn",
    en: "minimum experiment",
    note: "The smallest real-world test that can confirm or kill an idea.",
  },
  {
    hanzi: "可逆",
    pinyin: "kě nì",
    en: "reversible",
    note: "You can undo it cheaply if it fails. Good experiments should be this.",
  },
  {
    hanzi: "盖洛普优势",
    pinyin: "Gàiluòpǔ yōushì",
    en: "Gallup Strengths",
    note: "A psychology framework that maps natural talent themes, not just skills.",
  },
  {
    hanzi: "心流",
    pinyin: "xīnliú",
    en: "flow (psychology)",
    note: "Csíkszentmihályi’s state: full absorption, time disappears, work feels inevitable.",
  },
  {
    hanzi: "荣格",
    pinyin: "Rónggé",
    en: "Carl Jung",
    note: "Swiss psychologist. His “shadow” is the part of you that you refuse to see.",
  },
  {
    hanzi: "无意识胜任区",
    pinyin: "wúyìshí shèngrèn qū",
    en: "unconscious competence",
    note: "Things you are good at without noticing — “wait, people have to learn this?”",
  },
  {
    hanzi: "阴影面",
    pinyin: "yīnyǐng miàn",
    en: "the shadow side",
    note: "A talent seen from the back: the same trait that looks like a flaw.",
  },
  {
    hanzi: "奥德赛计划",
    pinyin: "Àodésài jìhuà",
    en: "Odyssey Plan",
    note: "From Stanford Life Design: three very different five-year versions of you.",
  },
  {
    hanzi: "失败免疫",
    pinyin: "shībài miǎnyì",
    en: "failure immunity",
    note: "A plan for when a prototype fails, so one miss does not freeze you.",
  },
  {
    hanzi: "原型",
    pinyin: "yuánxíng",
    en: "prototype",
    note: "A cheap, testable version of a life path — not a life sentence.",
  },
  {
    hanzi: "重力问题",
    pinyin: "zhònglì wèntí",
    en: "gravity problem",
    note: "A fact you cannot redesign (like gravity). Stop fighting it; work around it.",
  },
  {
    hanzi: "提问权",
    pinyin: "tíwèn quán",
    en: "the power to ask",
    note: "Whoever sets the question sets the frame. Do not hand this to the model.",
  },
  {
    hanzi: "冷饭",
    pinyin: "lěngfàn",
    en: "leftovers / reheated old ideas",
    note: "Literally “cold rice.” Recycled tricks with no new thinking.",
  },
  {
    hanzi: "基石",
    pinyin: "jīshí",
    en: "cornerstone / foundation stone",
    note: "The block everything else is built on.",
  },
  {
    hanzi: "困惑",
    pinyin: "kùnhuò",
    en: "confusion / puzzle",
    note: "A fuzzy stuck feeling — before it has been turned into a real question.",
  },
  {
    hanzi: "推倒重来",
    pinyin: "tuīdǎo chónglái",
    en: "tear it down and start over",
    note: "Stop patching. Rebuild from the ground.",
  },
  {
    hanzi: "纸上谈兵",
    pinyin: "zhǐ shàng tán bīng",
    en: "armchair strategy",
    note: "Idiom: “talking war on paper.” Plans that never meet reality.",
  },
  {
    hanzi: "压箱底",
    pinyin: "yā xiāng dǐ",
    en: "kept at the bottom of the chest",
    note: "Your most valued tools, stored away and taken out only when it counts.",
  },
  {
    hanzi: "怪癖",
    pinyin: "guàipǐ",
    en: "quirk / odd habit",
    note: "A personal peculiarity. In this article, quirks often hide talent.",
  },
  {
    hanzi: "天赋",
    pinyin: "tiānfù",
    en: "innate talent",
    note: "What comes unusually easily to you — not just what you were trained to do.",
  },
  {
    hanzi: "工作观",
    pinyin: "gōngzuòguān",
    en: "philosophy of work",
    note: "Why you work at all — money, craft, status, service, freedom…",
  },
  {
    hanzi: "人生观",
    pinyin: "rénshēngguān",
    en: "philosophy of life",
    note: "What makes a life feel meaningful to you.",
  },
  {
    hanzi: "路径",
    pinyin: "lùjìng",
    en: "path / trajectory",
    note: "The road a person, company, or idea actually took — including lock-in.",
  },
];

export const TERMS: Record<string, TermDef> = Object.fromEntries(
  TERM_LIST.map((t) => [t.hanzi, t]),
);

export type PromptItem = {
  id: string;
  n: number;
  nameZh: string;
  nameEn: string;
  whenZh: string;
  whenEn: string;
  logicZh: string;
  logicEn: string;
  points: { zh: string; en: string }[];
  outputZh: string;
  outputEn: string;
  promptZh: string;
  promptEn: string;
};

export type Scene = {
  id: string;
  numeral: string;
  titleZh: string;
  titleEn: string;
  kickerZh: string;
  kickerEn: string;
  introZh: string;
  introEn: string;
  prompts: PromptItem[];
};

export const SCENES: Scene[] = [
  {
    id: "clarify",
    numeral: "一",
    titleZh: "问清问题",
    titleEn: "Clarify the question",
    kickerZh: "先搞懂“你到底想问什么”",
    kickerEn: "First understand what you are actually asking.",
    introZh:
      "很多人和AI聊不下去，不是AI不行，是自己问题没问清。这一组帮你把模糊的{困惑}拆成可执行的具体问题。",
    introEn:
      "When a chat with AI dies, it is often not the model. It is an unclear question. This set turns a foggy worry into a question you can actually act on.",
    prompts: [
      {
        id: "socratic",
        n: 1,
        nameZh: "苏格拉底式提问",
        nameEn: "Socratic questioning",
        whenZh:
          "你卡在某个问题里，嘴上说“我想问A”，心里其实想解决B。",
        whenEn:
          "You are stuck. You say you want to ask A, but what you really need is B.",
        logicZh:
          "让AI通过最多6次{追问}，帮你{剥离}事实、解释、{价值判断}和目标，找到真正的{核心}问题。",
        logicEn:
          "Let the AI ask at most six follow-up questions, peeling facts, interpretations, value judgments, and goals apart until the real core problem shows up.",
        points: [
          {
            zh: "每次只问1个问题，根据回答调整下一问。",
            en: "One question at a time. Let the next question depend on the answer.",
          },
          {
            zh: "优先区分“{可验证}事实”“对事实的解释”“{价值判断}”“希望实现的目标”。",
            en: "Separate verifiable facts, interpretations, value judgments, and goals.",
          },
          {
            zh: "信息足够时立刻停止，不用凑满6问。",
            en: "Stop as soon as you have enough. Do not pad to six.",
          },
        ],
        outputZh:
          "你最初的问题、真正想解决的问题、已确认事实、未验证{假设}、{关键变量}、可行动的新问题。",
        outputEn:
          "Your original question, the real problem, confirmed facts, untested assumptions, key variables, and a new actionable question.",
        promptZh: `请扮演一位苏格拉底式提问者，而不是直接给答案的顾问。

我现在卡住的问题是：
【在这里写下你此刻想问的问题】

规则：
1. 每次只问我 1 个问题。
2. 优先帮我区分四类信息：可验证的事实、我对事实的解释、价值判断、我真正希望实现的目标。
3. 根据我的回答调整下一问。
4. 最多追问 6 次。一旦信息足够，立刻停止，不必凑满 6 问。
5. 信息不足时不要编造结论。

全部问完后，请输出：
- 我最初的问题
- 我真正想解决的问题
- 已确认的事实
- 未验证的假设
- 关键变量
- 一个可立即行动的新问题`,
        promptEn: `Act as a Socratic questioner, not as an advisor who jumps to answers.

The problem I am stuck on:
[paste your current question]

Rules:
1. Ask me only one question at a time.
2. Help me separate four kinds of information: verifiable facts, my interpretation of those facts, value judgments, and the goal I actually want.
3. Let each next question depend on my last answer.
4. Ask at most six follow-ups. Stop the moment you have enough — do not pad to six.
5. Do not invent conclusions when information is missing.

When you stop, output:
- My original question
- The problem I actually want to solve
- Confirmed facts
- Untested assumptions
- Key variables
- One new question I can act on immediately`,
      },
    ],
  },
  {
    id: "learn",
    numeral: "二",
    titleZh: "学习",
    titleEn: "Learn",
    kickerZh: "从“听懂”到“会用”",
    kickerEn: "From “I followed that” to “I can use that.”",
    introZh:
      "面对陌生领域，这4个Prompt覆盖从入门到深度研究的全链路。",
    introEn:
      "Four prompts that cover a whole learning chain: from first contact with a field to serious research.",
    prompts: [
      {
        id: "two-layer",
        n: 2,
        nameZh: "双层解释法",
        nameEn: "Two-layer explanation",
        whenZh:
          "遇到专业术语（比如数据库、网络安全概念），怕“好像懂了其实没懂”。",
        whenEn:
          "You hit a technical term (a database idea, a security concept) and fear you only think you understand it.",
        logicZh:
          "分两层解释，既{接地气}又触达{本质}。",
        logicEn:
          "Explain in two layers: one down-to-earth, one that reaches the mechanism.",
        points: [
          {
            zh: "小白版：用生活化例子讲清楚是什么。",
            en: "Beginner layer: a life example that makes the “what” clear.",
          },
          {
            zh: "专业版：讲清核心机制、适用边界、常见误解。",
            en: "Expert layer: mechanism, limits of use, common misunderstandings.",
          },
          {
            zh: "补充：小白说法与专业术语的对应、易错点、3个自查问题。",
            en: "Then map plain words to jargon, list pitfalls, and give three self-check questions.",
          },
        ],
        outputZh:
          "小白版、专业版、术语对照、易错点、3个自查问题。",
        outputEn:
          "Plain version, expert version, term mapping, pitfalls, three self-check questions.",
        promptZh: `请用「双层解释法」讲解下面这个概念：
【在这里写下术语或概念】

请严格按这个结构输出：
1. 小白版：用一个生活化的例子讲清楚它是什么。不要用行话。
2. 专业版：讲清核心机制、适用边界、常见误解。
3. 对照：把小白说法和专业术语一一对应。
4. 易错点：列出最容易理解错的地方。
5. 自查：给我 3 个问题，用来检验我是不是真懂了。

如果我的概念范围太大，先把它收窄到一个可以一次讲清的点，并告诉我你收窄了什么。`,
        promptEn: `Explain the following concept with a two-layer method:
[paste the term]

Use this exact structure:
1. Beginner layer: one everyday example. No jargon.
2. Expert layer: core mechanism, where it does not apply, common misunderstandings.
3. Mapping: pair each plain phrase with the technical term.
4. Pitfalls: the ways people most often get this wrong.
5. Self-check: three questions I can use to test whether I actually understand.

If the concept is too broad, narrow it to one teachable point and tell me what you narrowed.`,
      },
      {
        id: "reverse",
        n: 3,
        nameZh: "反向拆解",
        nameEn: "Reverse deconstruction",
        whenZh:
          "看到优秀作品（网页、方案、产品），想模仿其逻辑。",
        whenEn:
          "You see an excellent page, plan, or product and want to copy its logic — not its costume.",
        logicZh:
          "从“它解决了什么问题”出发，反向推导“为什么有效”。",
        logicEn:
          "Start from “what problem did this solve?” and work backwards to “why did it work?”",
        points: [
          {
            zh: "分析：服务对象与目标、结构流程、拉开差距的关键选择。",
            en: "Audience and goal, structure and flow, the few choices that created the gap.",
          },
          {
            zh: "区分：完成标准、{可迁移}规律、仅适用本案例的细节。",
            en: "Separate the definition of done, transferable patterns, and case-only details.",
          },
        ],
        outputZh:
          "3–5条{可迁移}规律、操作清单、一个小练习。",
        outputEn:
          "3–5 transferable patterns, a checklist, and one small drill.",
        promptZh: `请反向拆解下面这个作品，目标是让我能迁移它的逻辑，而不是抄它的外表。

作品：
【链接、截图描述，或粘贴方案】

请按这些维度分析：
1. 它到底在为谁解决什么问题？
2. 结构与流程是怎样的？
3. 哪些关键选择拉开了它和普通作品的差距？
4. 它的「完成标准」是什么？
5. 哪些是可迁移的规律，哪些只属于这个案例？

最终请输出：
- 3 到 5 条可复用规律
- 一份我可以照着做的操作清单
- 一个 30 分钟内能完成的小练习`,
        promptEn: `Reverse-deconstruct the work below. I want its logic, not its costume.

The work:
[link, description, or paste]

Analyze:
1. Who is this for, and what problem does it actually solve?
2. What is the structure and flow?
3. Which few choices create the gap versus ordinary work?
4. What is the definition of done?
5. Which patterns transfer, and which details belong only to this case?

Then output:
- 3 to 5 reusable patterns
- A checklist I can follow
- One small drill I can finish in 30 minutes`,
      },
      {
        id: "hv",
        n: 4,
        nameZh: "横纵分析法",
        nameEn: "Horizontal–vertical analysis",
        whenZh:
          "想系统研究一个行业、公司、技术或事件（比如半导体、AI赛道）。",
        whenEn:
          "You want a systematic study of an industry, company, technology, or event.",
        logicZh:
          "纵向：看它怎么来的（诞生背景、关键转折、早期选择如何变成今天的{路径依赖}）。横向：看它和竞品的差异（选对比对象、统一维度比较优劣势、用户选择它的原因）。",
        logicEn:
          "Vertical: how it arrived (origin, turning points, how early choices became today’s path dependence). Horizontal: how it differs from rivals on the same dimensions, and why users pick it.",
        points: [
          {
            zh: "配合AI的“深度研究”功能，优先用官方财报、论文、访谈等{一手来源}。",
            en: "Use deep-research mode. Prefer filings, papers, interviews — primary sources.",
          },
          {
            zh: "事实与观点分开标注。",
            en: "Label facts and opinions separately.",
          },
        ],
        outputZh:
          "{核心}结论、关键时间线、横向对比表、详细分析、未来3条可能{路径}、待确认问题。报告篇幅10000–30000字。",
        outputEn:
          "Core conclusions, a timeline, a comparison table, the full analysis, three possible futures, and open questions. Length: 10,000–30,000 words.",
        promptZh: `请对下面这个对象做一次「横纵分析」。

研究对象：
【行业 / 公司 / 技术 / 事件】

纵向（它怎么来的）：
- 诞生背景
- 关键转折
- 早期选择如何变成今天的路径依赖

横向（它和谁不同）：
- 先选合适的对比对象
- 用同一组维度比较优劣势
- 解释用户为什么选它而不是别人

研究纪律：
1. 优先使用官方财报、论文、访谈、监管文件等一手来源。
2. 每个关键事实后面标明来源。找不到就写「证据不足」，不要编。
3. 事实与观点必须分开标注。

最终输出一份 10000–30000 字的报告，结构如下：
- 核心结论
- 关键时间线
- 横向对比表
- 详细分析
- 未来 3 条可能路径
- 待确认问题`,
        promptEn: `Do a horizontal–vertical analysis of this subject.

Subject:
[industry / company / technology / event]

Vertical (how it got here):
- Origin
- Turning points
- How early choices became today’s path dependence

Horizontal (how it differs):
- Choose fair comparison objects
- Compare on one shared set of dimensions
- Explain why users pick it over the others

Discipline:
1. Prefer primary sources: filings, papers, interviews, regulators.
2. Cite every important fact. If you cannot, write “insufficient evidence.” Do not invent.
3. Label facts and opinions separately.

Deliver a 10,000–30,000 word report:
- Core conclusions
- Timeline
- Comparison table
- Full analysis
- Three possible future paths
- Open questions`,
      },
      {
        id: "factcheck",
        n: 5,
        nameZh: "事实核查",
        nameEn: "Fact check",
        whenZh:
          "验证观点、数据、方案的真实性（防AI{幻觉}，也防人类“{信息茧房}”）。",
        whenEn:
          "You need to test whether a claim, number, or plan is true — against AI hallucination and human filter bubbles.",
        logicZh:
          "把内容拆成“{可验证}事实”“从事实推出的结论”“{价值判断}”三部分，逐一核查。",
        logicEn:
          "Split the text into verifiable facts, conclusions drawn from facts, and value judgments. Check each.",
        points: [
          {
            zh: "事实：标记“已证实 / 基本成立需收窄 / 有争议 / 证据不足 / 明显错误”。",
            en: "Facts: confirmed / mostly true but too wide / disputed / insufficient evidence / clearly false.",
          },
          {
            zh: "推理：事实能否推出结论、是否有未验证{假设}、是否混淆相关与因果、是否遗漏关键信息。",
            en: "Reasoning: do the facts support the leap, hidden assumptions, correlation vs causation, missing information.",
          },
        ],
        outputZh:
          "可信事实清单、推理链漏洞、补强后的合理版本、可信度评级。",
        outputEn:
          "A list of trusted facts, holes in the reasoning, a repaired version, and a credibility rating.",
        promptZh: `请对下面这段内容做事实核查。不要先站队，先拆解。

待核查内容：
【粘贴观点、数据或方案】

请分成三部分处理：
1. 可验证事实
2. 从事实推出的结论
3. 价值判断

对事实部分，逐条标记：
已证实 / 基本成立但需收窄 / 有争议 / 证据不足 / 明显错误

对推理部分，检查：
- 现有事实是否真能推出这个结论
- 有没有未验证的假设
- 有没有把相关当成因果
- 有没有遗漏关键信息

最终输出：
- 可信事实清单
- 推理链上的漏洞
- 一个补强后的更合理版本
- 总体可信度评级（高 / 中 / 低）及理由`,
        promptEn: `Fact-check the passage below. Do not pick a side first. Disassemble it.

Passage:
[paste the claim, data, or plan]

Split into:
1. Verifiable facts
2. Conclusions drawn from facts
3. Value judgments

For each fact, mark:
confirmed / mostly true but needs narrowing / disputed / insufficient evidence / clearly false

For the reasoning, check:
- whether the facts actually support the conclusion
- hidden assumptions
- correlation treated as causation
- missing key information

Then output:
- a list of trusted facts
- holes in the reasoning chain
- a repaired, more reasonable version
- an overall credibility rating (high / medium / low) with reasons`,
      },
    ],
  },
  {
    id: "solve",
    numeral: "三",
    titleZh: "解决问题",
    titleEn: "Solve",
    kickerZh: "从“单视角”到“多维度”",
    kickerEn: "From one angle to several.",
    introZh:
      "遇到复杂问题，别急着要方案，先换角度拆解。",
    introEn:
      "On a hard problem, do not rush the plan. Change the angle first.",
    prompts: [
      {
        id: "experts",
        n: 6,
        nameZh: "专家会诊",
        nameEn: "Expert consultation",
        whenZh:
          "问题涉及多领域（比如产品设计+运营+技术），单一视角容易漏风险。",
        whenEn:
          "The problem crosses fields (product + ops + engineering). One lens will miss risk.",
        logicZh:
          "让AI组建3个互补的专家视角，各自重新定义问题、提方案、找风险，再互相质疑。",
        logicEn:
          "Ask the AI to assemble three complementary experts. Each reframes the problem, proposes, finds risk, then challenges the others.",
        points: [
          {
            zh: "找出共同事实、真正分歧、分歧背后的{假设}，最后综合出最优方案。",
            en: "Find shared facts, real disagreements, the assumptions under them, then synthesize.",
          },
          {
            zh: "信息不足时，AI只会问你1个最关键的问题。",
            en: "If information is missing, the AI asks you only one critical question.",
          },
        ],
        outputZh:
          "共同事实、分歧与{假设}、综合方案、各自风险。",
        outputEn:
          "Shared facts, disagreements and assumptions, a synthesized plan, and the risks each expert still sees.",
        promptZh: `请为下面这个问题组建一场「专家会诊」。

问题：
【描述你的问题，以及已知约束】

请选择 3 个互补的专家视角（例如：用户研究专家 + 技术架构师 + 商业分析师）。每位专家必须：
1. 用自己的语言重新定义问题
2. 提出一个方案
3. 指出最大风险

然后让他们互相质疑。

请明确写出：
- 三方共同承认的事实
- 真正的分歧
- 分歧背后的假设
- 综合后的最优方案
- 仍未消除的风险

如果信息不足，不要编材料。只问我 1 个最关键的问题，等我回答后再继续。`,
        promptEn: `Run an expert consultation on this problem.

Problem:
[describe the problem and known constraints]

Pick three complementary expert lenses (for example: user researcher + architect + commercial analyst). Each expert must:
1. Redefine the problem in their own language
2. Propose a plan
3. Name the largest risk

Then have them challenge one another.

Write down:
- facts all three accept
- the real disagreements
- the assumptions under those disagreements
- a synthesized best plan
- risks that still remain

If information is missing, do not invent it. Ask me only one critical question, then continue after I answer.`,
      },
      {
        id: "first-principles",
        n: 7,
        nameZh: "第一性原理",
        nameEn: "First principles",
        whenZh:
          "现有方案全是“{打补丁}”，想{推倒重来}（比如优化组织流程、重构产品架构）。",
        whenEn:
          "Every current fix is a patch. You want to tear it down and start over.",
        logicZh:
          "把问题拆回最底层——已确认的基本事实、未验证的{假设}、真正目标、现实约束，暂时放下行业惯例，从零推导新{路径}。",
        logicEn:
          "Strip the problem to confirmed facts, untested assumptions, the real goal, and real constraints. Set industry habit aside. Derive a new path from zero.",
        points: [
          {
            zh: "暂时放下“别人都这么做”。",
            en: "Temporarily drop “this is how everyone does it.”",
          },
          {
            zh: "新路径必须带上成立前提和第一步验证。",
            en: "Any new path needs its premises and a first verification step.",
          },
        ],
        outputZh:
          "原方案的“表面修补”部分、从基本事实推导的新{路径}、路径成立前提、第一步验证动作。",
        outputEn:
          "Which parts of the old plan were only surface patches, a new path from basic facts, the premises it needs, and the first verification move.",
        promptZh: `请用第一性原理重看这个问题。现有方案都在打补丁，我想推倒重来。

问题与现有方案：
【粘贴】

请先拆到最底层：
1. 已确认的基本事实
2. 未验证的假设（尤其是被当成常识的那些）
3. 真正目标
4. 现实约束（时间、钱、人、法律、物理）

然后：
- 暂时放下行业惯例
- 从基本事实从零推导一条新路径
- 标明这条路径成立的前提
- 给出一个最小的第一步验证动作

请明确指出：原方案里哪些只是表面修补。`,
        promptEn: `Rebuild this problem from first principles. The current plan is all patches. I want to start over.

Problem and current plan:
[paste]

First split it down to:
1. Confirmed basic facts
2. Untested assumptions (especially the ones treated as common sense)
3. The real goal
4. Real constraints (time, money, people, law, physics)

Then:
- set industry habit aside
- derive a new path from the facts, from zero
- state the premises the path needs
- give the smallest first verification move

Call out which parts of the old plan were only surface patches.`,
      },
      {
        id: "cross-domain",
        n: 8,
        nameZh: "跨领域借解",
        nameEn: "Cross-domain borrowing",
        whenZh:
          "本行业无解，想找其他领域的成熟解法（比如用“医院分诊逻辑”优化客服流程）。",
        whenEn:
          "Your industry has no good answer. You want a mature solution from somewhere else — triage logic from a hospital, applied to support.",
        logicZh:
          "先剥掉行业术语，抽象出问题的{底层}结构（比如“资源分配不均”“{信息不对称}”），再从历史、生物、工程等至少3个远距离领域找相似案例。",
        logicEn:
          "Strip the jargon. Abstract the underlying structure (uneven resources, information asymmetry). Then hunt similar cases in at least three distant fields — history, biology, engineering.",
        points: [
          {
            zh: "借的是机制，不是皮相。",
            en: "Borrow the mechanism, not the costume.",
          },
          {
            zh: "每个方案都要配一个低成本、{可逆}的小实验。",
            en: "Each adapted idea needs a cheap, reversible experiment.",
          },
        ],
        outputZh:
          "3种{可迁移}的解决机制、适配你{场景}的方案、一个低成本{可逆}的小实验。",
        outputEn:
          "Three transferable mechanisms, a version fitted to your case, and one cheap reversible experiment.",
        promptZh: `我的行业里这个问题好像无解。请用「跨领域借解」帮我找办法。

我的问题：
【描述】

步骤：
1. 先剥掉行业术语，用中性语言写出问题的底层结构（例如资源分配不均、信息不对称、排队拥堵）。
2. 从至少 3 个距离很远的领域（历史、生物、工程、军事、游戏、医疗……）各找一个相似案例。
3. 对每个案例，抽出可迁移的解决机制，而不是外表细节。
4. 把这些机制适配到我的场景。
5. 选出一个低成本、可逆、一周内能做完的小实验。

最终输出：
- 3 种可迁移机制
- 适配后的方案
- 那个小实验（动作、成本、观察指标、继续/停止信号）`,
        promptEn: `This problem looks unsolved in my industry. Borrow a solution from far away.

My problem:
[describe]

Steps:
1. Strip the jargon. State the underlying structure in neutral language (uneven resources, information asymmetry, queue congestion…).
2. Find a similar case in at least three distant fields (history, biology, engineering, military, games, medicine…).
3. Extract the transferable mechanism from each case, not the costume.
4. Fit those mechanisms to my situation.
5. Design one cheap, reversible experiment I can finish in a week.

Output:
- three transferable mechanisms
- the fitted plan
- the experiment (actions, cost, metrics, continue/stop signals)`,
      },
    ],
  },
  {
    id: "decide",
    numeral: "四",
    titleZh: "决策",
    titleEn: "Decide",
    kickerZh: "从“纠结”到“落地”",
    kickerEn: "From looping to a landing.",
    introZh:
      "两个选项都有道理时，用这两个Prompt帮你拍板。",
    introEn:
      "When both options sound right, these two prompts help you actually choose.",
    prompts: [
      {
        id: "steelman",
        n: 9,
        nameZh: "双向钢人论证",
        nameEn: "Double steelman",
        whenZh:
          "在两个选项间摇摆（比如“跳槽还是留任”“选A项目还是B项目”）。",
        whenEn:
          "You are swinging between two options — stay or leave, project A or B.",
        logicZh:
          "让AI分别扮演“支持方”和“反对方”，给出最强理由、适用条件、最大收益/风险、最难回答的反对意见，再找出双方分歧和{关键变量}。",
        logicEn:
          "The AI plays both sides at their strongest: best reasons, when each applies, upside and downside, the hardest objection. Then it names the split and the key variable.",
        points: [
          {
            zh: "AI只会问你1个最可能改变结论的问题。",
            en: "It asks you only the one question most likely to change the conclusion.",
          },
          {
            zh: "你回答后，再给出明确判断和行动步骤。",
            en: "After you answer, it gives a clear call and the next steps.",
          },
        ],
        outputZh:
          "双方最强论证、分歧、{关键变量}、判断、行动步骤。",
        outputEn:
          "Each side at full strength, the split, the key variable, a judgment, and action steps.",
        promptZh: `我在两个选项之间摇摆。请做一场「双向钢人论证」，不要做稻草人。

选项 A：
【】
选项 B：
【】
背景：
【约束、期限、我在乎什么】

请分别扮演支持 A 的一方和支持 B 的一方。每一方必须给出：
- 最强理由
- 这个选项真正适用的条件
- 最大收益与最大风险
- 最难回答的反对意见

然后：
1. 写出双方真正的分歧（不是表面吵点）
2. 找出那个会改变结论的关键变量
3. 只问我 1 个最可能改变结论的问题

等我回答后，再给出：
- 明确判断（选哪个，在什么条件下）
- 接下来 3 个行动步骤`,
        promptEn: `I am stuck between two options. Steelman both sides. No straw men.

Option A:
[]
Option B:
[]
Context:
[constraints, deadline, what I care about]

Play the strongest case for A and the strongest case for B. Each side must give:
- its best reasons
- the conditions where it actually applies
- the largest upside and the largest risk
- the hardest objection it still cannot shrug off

Then:
1. name the real disagreement (not the surface fight)
2. name the key variable that would change the conclusion
3. ask me only one question — the one most likely to change the call

After I answer, give:
- a clear judgment (which one, under what conditions)
- the next three action steps`,
      },
      {
        id: "experiment",
        n: 10,
        nameZh: "用最小实验替代空想",
        nameEn: "Replace daydreaming with a minimum experiment",
        whenZh:
          "{纸上谈兵}没用，需要现实反馈（比如“要不要做短视频”“要不要换赛道”）。",
        whenEn:
          "Armchair talk is useless. You need reality — start a channel or not, change lanes or not.",
        logicZh:
          "找出决定成败的3个{假设}，选最关键的一个，设计“低成本、{可逆}、7天内完成”的{最小实验}。",
        logicEn:
          "Name the three assumptions that decide success. Pick the most important one. Design a cheap, reversible experiment you can finish in seven days.",
        points: [
          {
            zh: "实验要素：具体动作、投入资源、观察指标、继续/停止信号、能获得的新信息。",
            en: "Spell out the actions, the spend, the metric, continue/stop signals, and the new information you will have.",
          },
        ],
        outputZh:
          "明天就能开始的第一步动作。",
        outputEn:
          "A first move you can start tomorrow.",
        promptZh: `请把我的纠结收成一个「最小实验」，不要再帮我空想。

我在犹豫的事：
【】

请：
1. 找出决定这件事成败的 3 个假设
2. 指出其中最关键的一个，并说明为什么先测它
3. 围绕它设计一个低成本、可逆、7 天内能完成的最小实验

实验必须写清：
- 具体动作
- 投入的时间/钱/人情
- 观察指标
- 继续信号 / 停止信号
- 做完后我会新知道什么

最后只给我：明天就能开始的第一步动作。一步，不要十条。`,
        promptEn: `Turn this indecision into a minimum experiment. No more armchair talk.

What I am hesitating about:
[]

Please:
1. name the three assumptions that decide whether this works
2. pick the most important one, and say why we test that first
3. design a cheap, reversible experiment I can finish in 7 days

The experiment must specify:
- concrete actions
- time / money / favors spent
- the metric I will watch
- continue signal / stop signal
- what I will newly know when it ends

Then give me only the first move I can start tomorrow. One step, not ten.`,
      },
    ],
  },
  {
    id: "self",
    numeral: "五",
    titleZh: "认识自己",
    titleEn: "Know yourself",
    kickerZh: "从“迷茫”到“清晰”",
    kickerEn: "From fog to a clearer outline.",
    introZh:
      "最后两个Prompt是作者“{压箱底}”的工具，帮你挖掘{天赋}、设计人生。",
    introEn:
      "The last two are the author’s bottom-of-the-chest tools: mining talent, and designing a life.",
    prompts: [
      {
        id: "talent",
        n: 11,
        nameZh: "挖掘隐藏天赋",
        nameEn: "Mine hidden talent",
        whenZh:
          "不知道自己擅长什么，或觉得“没{天赋}”。",
        whenEn:
          "You do not know what you are good at — or you believe you have no talent.",
        logicZh:
          "基于{盖洛普优势}、{心流}理论、{荣格}心理学，通过10个主问题的深度对话，找到藏在“{怪癖}、缺点、嫉妒、{无意识胜任区}”里的{天赋}。",
        logicEn:
          "Using Gallup Strengths, flow theory, and Jung: a deep dialogue of ten main questions, looking for talent hidden in quirks, flaws, envy, and unconscious competence.",
        points: [
          {
            zh: "16岁前没人要求也会做的事；反复被批评却改不掉的“缺点”。",
            en: "What you did before 16 with no one asking; the “flaw” you were scolded for and never dropped.",
          },
          {
            zh: "别人觉得难、你却觉得“这还要学？”的{无意识胜任区}。",
            en: "The zone of “people need to learn this?” — unconscious competence.",
          },
          {
            zh: "做完精神亢奋 / 抽干能量的事；嫉妒的人与生活（嫉妒背后是未被满足的{天赋}需求）。",
            en: "What leaves you lit vs drained; who you envy (envy often points to an unmet talent need).",
          },
        ],
        outputZh:
          "约一万字的《个人{天赋}使用说明书》：底层{天赋}、{阴影面}、能量地图、适合的环境/工作/合作方式、30天验证实验。",
        outputEn:
          "A ~10,000-word Personal Talent Manual: underlying talents, the shadow side, an energy map, fit of environment / work / collaboration, and a 30-day test.",
        promptZh: `请做一次「挖掘隐藏天赋」的深度对话。不要用鸡汤，不要急着下标签。

理论背景你可以调用：盖洛普优势、心流、荣格心理学。但请用我的具体经历说话。

请通过大约 10 个主问题带我走完，每次只问 1 题，根据回答再追问。主线必须覆盖：
1. 16 岁前，没人要求我也会做的事
2. 反复被批评、我却改不掉的「缺点」
3. 别人觉得难、我却觉得「这还要学？」的无意识胜任区
4. 做完让我精神亢奋的事，以及抽干我能量的事
5. 我嫉妒的人，或我羡慕的生活状态（把嫉妒当成线索，而不是道德问题）

全部问完后，写一份约一万字的《个人天赋使用说明书》，包括：
- 底层天赋
- 阴影面（这些「缺点」为什么是天赋的背面）
- 能量地图
- 适合我的环境、工作、合作方式
- 一个 30 天验证实验

我先说一段关于自己的话：
【可选：先写你现在怎么看自己】`,
        promptEn: `Run a deep dialogue to mine hidden talent. No pep talk. No rushing to labels.

You may use Gallup Strengths, flow theory, and Jung — but speak from my actual stories.

Guide me with about ten main questions. One question at a time. Follow the answers. Cover:
1. What I did before 16 with nobody asking
2. The “flaw” I was repeatedly scolded for and never dropped
3. Unconscious competence: what other people find hard that I find obvious
4. What leaves me lit, and what drains me
5. Who I envy, or whose life I want (treat envy as a clue, not a sin)

When we are done, write a ~10,000-word Personal Talent Manual:
- underlying talents
- the shadow side (why those “flaws” are the back of a talent)
- an energy map
- environments, work, and ways of collaborating that fit
- a 30-day verification experiment

Here is how I currently see myself:
[optional]`,
      },
      {
        id: "life-design",
        n: 12,
        nameZh: "人生设计术",
        nameEn: "Life design",
        whenZh:
          "对未来迷茫，不知道“接下来往哪走”。",
        whenEn:
          "The future is fog. You do not know where to go next.",
        logicZh:
          "基于斯坦福人生设计课，把人生当成“可试错的项目”：先看清现状，再设计三个完全不同的五年版本。",
        logicEn:
          "From Stanford’s Life Design course: treat a life as a project you can prototype. See where you are. Then design three very different five-year versions.",
        points: [
          {
            zh: "第一阶段「你在这里」：给健康、工作、娱乐、爱打分；区分{重力问题}和可设计问题。",
            en: "Stage 1 — You are here: score health, work, play, love. Split gravity problems from designable ones.",
          },
          {
            zh: "第二阶段「指南针」：梳理{工作观}和{人生观}，找冲突与一致。",
            en: "Stage 2 — Compass: work view vs life view. Where they clash, where they rhyme.",
          },
          {
            zh: "第三阶段「寻路」：回忆{心流}时刻，区分回血型事和耗能型事。",
            en: "Stage 3 — Wayfinding: flow moments; what restores you vs what spends you.",
          },
          {
            zh: "第四阶段「创造可能」：三个五年版本——现有路、现有路消失后的备选、不考虑钱和他人评价的理想路。",
            en: "Stage 4 — Odyssey: the current road; a backup if that road vanishes; the road if money and other people’s opinions did not count.",
          },
        ],
        outputZh:
          "8000–12000字《个人人生设计蓝图》：现状解读、真问题定义、能量地图、三个{奥德赛计划}、{原型}行动清单、{失败免疫}指南。",
        outputEn:
          "An 8,000–12,000-word Personal Life Design Blueprint: reading of the present, the real problem, energy map, three Odyssey plans, prototype actions, failure-immunity notes.",
        promptZh: `请按斯坦福人生设计课的方法，带我做一次「人生设计」。把人生当成可试错的项目，而不是一次必须做对的选择。

请分四阶段对话，每阶段结束再进入下一阶段。每次只问必要的问题。

第一阶段「你在这里」
- 让我给健康、工作、娱乐、爱打分
- 帮我区分重力问题（无法改变）和可设计问题（可以行动）

第二阶段「指南针」
- 梳理我的工作观（我为什么工作）和人生观（什么让人生有意义）
- 找出两者的冲突与一致

第三阶段「寻路」
- 回忆心流时刻
- 区分回血型的事和耗能型的事

第四阶段「创造可能」
生成三个完全不同的五年「奥德赛计划」：
1. 现有路走下去
2. 现有路消失后的备选
3. 暂时不考虑钱和他人评价的理想路

全部完成后，写一份 8000–12000 字的《个人人生设计蓝图》，包括：
- 现状解读
- 真问题定义
- 能量地图
- 三个奥德赛计划
- 原型行动清单
- 失败免疫指南

我目前的处境：
【可选】`,
        promptEn: `Walk me through life design the Stanford way. Treat a life as a project I can prototype, not a single choice I must get right.

Use four stages. Finish one before the next. Ask only the questions you need.

Stage 1 — You are here
- Have me score health, work, play, love
- Split gravity problems (cannot redesign) from designable problems (I can act)

Stage 2 — Compass
- My philosophy of work (why I work) and of life (what makes a life matter)
- Where they conflict and where they agree

Stage 3 — Wayfinding
- Flow moments
- What restores me vs what drains me

Stage 4 — Odyssey
Build three very different five-year versions:
1. Keep walking the current road
2. A backup if that road disappears
3. The road if money and other people’s opinions did not count

Then write an 8,000–12,000-word Personal Life Design Blueprint:
- a reading of the present
- the real problem, named
- an energy map
- three Odyssey plans
- a list of prototype actions
- a failure-immunity guide

Where I am right now:
[optional]`,
      },
    ],
  },
];

export const CLOSING = {
  zh: "作者说：“Prompt是使用AI的{基石}。” 不管AI怎么进化，人怎么问问题、怎么判断真假、怎么理解世界、怎么认识自己，这些{底层}能力永远不会过时。这12个Prompt不是“{冷饭}”，而是帮你和AI{协作}时，始终握紧“{提问权}”的工具——毕竟，人生这道题，最终还是要你自己回答。",
  en: "Kazike’s last line: “A prompt is the foundation stone of using AI.” Models will keep changing. How you ask, how you judge what is true, how you read the world, how you know yourself — those underlying abilities do not expire. These twelve prompts are not reheated tricks. They are tools that keep the power of questioning in your hands while you work with AI. The question of a life, in the end, is still one you answer yourself.",
};

export const LEDE = {
  zh: "这是一篇来自作者「卡兹克」的{深度分享}，{梳理}了他在Agent时代依然坚持使用的12个{核心}Prompt。这些Prompt不依赖任何{插件}，{适配}所有主流{大模型}，覆盖「问清问题、学习、解决问题、决策、认识自己」五大{场景}，{本质}是帮人建立与AI{协作}的{底层}{思维框架}。",
  en: "A long, careful essay by Kazike (卡兹克): the twelve core prompts he still uses in the age of agents. No plugins. They work with every major model. They cover five scenes — clarify, learn, solve, decide, know yourself. Underneath, they are a thinking framework for collaborating with AI.",
};

export function allPrompts(): PromptItem[] {
  return SCENES.flatMap((s) => s.prompts);
}
