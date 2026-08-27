/**
 * One-shot generator: run simple vs full prompts through grok-4.5
 * and write src/data/comparisons.ts for the classroom demos.
 */
const API = "https://api.x.ai/v1/chat/completions";
const key = process.env.XAI_API_KEY;
if (!key) {
  console.error("XAI_API_KEY missing");
  process.exit(1);
}

const JOBS = [
  {
    id: "socratic",
    caseZh: "大三学生。嘴上说“想学 AI”，但每个教程 20 分钟就放弃。开始怀疑要不要换专业。",
    caseEn: "A third-year student says they want to “learn AI,” but quits every tutorial after 20 minutes. They wonder if they should change majors.",
    simpleZh: "帮我想想我到底该怎么办。我想学 AI，但又学不下去。",
    simpleEn: "Help me figure out what to do. I want to learn AI but I keep quitting.",
    complexUser: `请扮演一位苏格拉底式提问者，而不是直接给答案的顾问。

我现在卡住的问题是：
我想学 AI，但每个教程看 20 分钟就放弃。我是大三学生，开始怀疑要不要换专业。

规则：
1. 每次只问 1 个问题。
2. 优先区分：可验证的事实、我对事实的解释、价值判断、我真正希望实现的目标。
3. 根据回答调整下一问。
4. 最多追问 6 次。信息足够就停止。
5. 信息不足时不要编造结论。

【课堂演示说明】请不要等待真人。请模拟 4 轮简短问答（虚构合理的学生回答），然后给出最终输出：
- 我最初的问题
- 我真正想解决的问题
- 已确认的事实
- 未验证的假设
- 关键变量
- 一个可立即行动的新问题
全文控制在 350 词以内。用英文写，方便外国学生对照。`,
  },
  {
    id: "two-layer",
    caseZh: "学生第一次在机器学习课上听到 “overfitting / 过拟合”。",
    caseEn: "A student hears “overfitting” for the first time in a machine-learning class.",
    simpleZh: "什么是过拟合？",
    simpleEn: "What is overfitting?",
    complexUser: `请用「双层解释法」讲解这个概念：过拟合（overfitting）

请严格按这个结构输出（用英文写，方便外国学生对照，专有名词保留中英）：
1. 小白版：用一个生活化的例子讲清楚它是什么。不要用行话。
2. 专业版：讲清核心机制、适用边界、常见误解。
3. 对照：把小白说法和专业术语一一对应。
4. 易错点：列出最容易理解错的地方。
5. 自查：给我 3 个问题，用来检验我是不是真懂了。
控制在 350 词以内。`,
  },
  {
    id: "reverse",
    caseZh: "拆解 Duolingo 的连续打卡（streak）为什么让人每天打开 App。",
    caseEn: "Deconstruct why Duolingo’s streak makes people open the app every day.",
    simpleZh: "分析一下 Duolingo 为什么让人每天都打开。",
    simpleEn: "Analyze why people open Duolingo every day.",
    complexUser: `请反向拆解 Duolingo 的 streak（连续打卡）系统。目标是迁移它的逻辑，而不是抄它的猫头鹰皮肤。

请按这些维度分析（用英文写，350 词以内）：
1. 它到底在为谁解决什么问题？
2. 结构与流程是怎样的？
3. 哪些关键选择拉开了它和普通打卡 App 的差距？
4. 它的「完成标准」是什么？
5. 哪些是可迁移的规律，哪些只属于这个案例？

最终请输出：
- 3 到 5 条可复用规律
- 一份我可以照着做的操作清单
- 一个 30 分钟内能完成的小练习`,
  },
  {
    id: "hv",
    caseZh: "系统研究 Spotify 为什么能在 Apple Music、YouTube Music 之间仍被很多人选。",
    caseEn: "Study why many people still choose Spotify over Apple Music and YouTube Music.",
    simpleZh: "分析一下 Spotify。",
    simpleEn: "Analyze Spotify.",
    complexUser: `请对 Spotify 做一次「横纵分析」。对比对象：Apple Music、YouTube Music。

纵向：诞生背景、关键转折、早期选择如何变成今天的路径依赖。
横向：用同一组维度比较优劣势，解释用户为什么选它。

研究纪律：
1. 优先用已知的公开事实；不确定就写 insufficient evidence，不要编财报数字。
2. 事实与观点分开标注。

【课堂演示】不要写 10000 字。请按完整报告的结构写一份 350 词的缩微版（英文）：
- 核心结论
- 关键时间线（3–5 个节点）
- 横向对比（用几句话，不要假表）
- 未来 1 条可能路径
- 待确认问题`,
  },
  {
    id: "factcheck",
    caseZh: "核查这段话：“每天必须喝 8 杯水，2023 年研究证明每人刚好需要 2 升。少喝就会头痛，所以头痛一定是缺水。”",
    caseEn: "Fact-check: “You must drink 8 glasses a day. A 2023 study proved everyone needs exactly 2 liters. Drink less and you get headaches, so a headache means you are dehydrated.”",
    simpleZh:
      "这段话是真的吗？每天必须喝 8 杯水，2023 年研究证明每人刚好需要 2 升。少喝就会头痛，所以头痛一定是缺水。",
    simpleEn:
      "Is this true? You must drink 8 glasses a day. A 2023 study proved everyone needs exactly 2 liters. Drink less and you get headaches, so a headache means you are dehydrated.",
    complexUser: `请对下面这段内容做事实核查。不要先站队，先拆解。用英文写，350 词以内。

待核查内容：
“You must drink 8 glasses of water a day. A 2023 study proved everyone needs exactly 2 liters. People who drink less get headaches, so if you have a headache you are dehydrated.”

请分成三部分：可验证事实 / 从事实推出的结论 / 价值判断。
对事实逐条标记：confirmed / mostly true but needs narrowing / disputed / insufficient evidence / clearly false。
检查推理：能否推出、隐藏假设、相关当因果、遗漏信息。
最终输出：可信事实清单、推理链漏洞、补强后的更合理版本、总体可信度评级（高/中/低）及理由。`,
  },
  {
    id: "experts",
    caseZh: "两个学生做的校园二手书小程序：70% 的留言没人回。想提高成交。",
    caseEn: "A campus used-book mini-app run by two students: 70% of messages get no reply. They want more completed sales.",
    simpleZh: "我们的二手书小程序没人回消息，怎么改？",
    simpleEn: "Nobody replies on our used-book app. How do we fix it?",
    complexUser: `请为下面这个问题组建一场「专家会诊」。用英文写，350 词以内。

问题：校园二手书小程序，用户发帖后 70% 的私信没有回复。团队只有两名学生。目标是提高真正成交，而不是下载量。

请选择 3 个互补专家视角。每位必须：重新定义问题、提一个方案、指出最大风险。然后互相质疑。

请明确写出：共同事实、真正分歧、分歧背后的假设、综合后的最优方案、仍未消除的风险。

若信息不足，不要编材料；可先提出 1 个最关键问题，并假设这个回答：“我们没有做过用户访谈，只看过后台：晚上 11 点后发的帖回复率更低。”然后继续给最终方案。`,
  },
  {
    id: "first-principles",
    caseZh: "创业小团队每周开 90 分钟全员会，大家都觉得没用，但创始人说“好公司都开会”。",
    caseEn: "A tiny startup holds a 90-minute all-hands every week. Everyone finds it useless. The founder says “good companies have meetings.”",
    simpleZh: "周会没用，怎么优化周会？",
    simpleEn: "Our weekly meeting is useless. How do we improve it?",
    complexUser: `请用第一性原理重看这个问题。现有方案都在打补丁，我想推倒重来。用英文写，350 词以内。

问题与现有方案：
8 人创业团队，每周五下午 90 分钟全员会。没人提前写纪要。创始人认为“好公司都开会”，所以不断给会议加环节（分享、表彰、同步），会议越来越长。

请先拆到最底层：已确认事实、未验证假设、真正目标、现实约束。
然后暂时放下行业惯例，从基本事实从零推导一条新路径，标明成立前提，给出最小的第一步验证动作。
请明确指出：原方案里哪些只是表面修补。`,
  },
  {
    id: "cross-domain",
    caseZh: "大学图书馆座位被占：有人用书占座，人却不在，别人没地方坐。",
    caseEn: "Library seats are hoarded: students leave books on chairs and disappear. Others cannot sit.",
    simpleZh: "图书馆占座怎么解决？",
    simpleEn: "How do we stop people hogging library seats?",
    complexUser: `我的场景里这个问题好像无解。请用「跨领域借解」帮我找办法。用英文写，350 词以内。

我的问题：大学图书馆座位被书包和书占着，人去吃饭或回宿舍，一占就是几小时。管理员人手不够，贴告示没用。

步骤：
1. 剥掉行业术语，用中性语言写出底层结构。
2. 从至少 3 个远距离领域各找一个相似案例。
3. 抽出可迁移机制，不是外表。
4. 适配到图书馆。
5. 设计一个低成本、可逆、7 天内能做完的小实验（动作、成本、指标、继续/停止信号）。`,
  },
  {
    id: "steelman",
    caseZh: "本科毕业：直接读计算机硕士，还是先工作两年。",
    caseEn: "Just graduated: go straight into a CS master’s, or work for two years first.",
    simpleZh: "我该先工作还是直接读研？帮我决定。",
    simpleEn: "Should I get a job first or go straight to grad school? Please decide for me.",
    complexUser: `我在两个选项之间摇摆。请做一场「双向钢人论证」，不要做稻草人。用英文写，350 词以内。

选项 A：本科毕业后直接读计算机硕士
选项 B：先工作两年再决定要不要读研
背景：22 岁，普通高校 CS 本科，无顶尖论文，家里能负担部分学费但不能全包，更在意 5 年后的选择权而不是起薪。

请分别给出 A 和 B 的最强理由、适用条件、最大收益与风险、最难回答的反对意见。
然后写出真正分歧、会改变结论的关键变量。
只问 1 个最可能改变结论的问题，并假设我的回答是：“我还不知道自己喜欢做研究还是做产品。”然后给出明确判断（在什么条件下选哪个）和接下来 3 个行动步骤。`,
  },
  {
    id: "experiment",
    caseZh: "想做一份给外国学生的双语中文学习 newsletter，但只停留在幻想。",
    caseEn: "Wants to start a bilingual Chinese-learning newsletter for foreign students — still only a daydream.",
    simpleZh: "我想做中文学习 newsletter，要不要做？",
    simpleEn: "I want to start a Chinese-learning newsletter. Should I?",
    complexUser: `请把我的纠结收成一个「最小实验」，不要再帮我空想。用英文写，280 词以内。

我在犹豫的事：做一份给外国学生的双语中文学习 newsletter（每周一篇，文化 + 词语）。我还没有读者，没有写作习惯，晚上只有 5 小时。

请：
1. 找出决定成败的 3 个假设
2. 指出最关键的一个及为什么先测它
3. 设计低成本、可逆、7 天内完成的最小实验（动作、投入、指标、继续/停止信号、做完后新知道什么）
最后只给我：明天就能开始的第一步动作。一步，不要十条。`,
  },
  {
    id: "talent",
    caseZh: "学生觉得自己“没天赋”：小时候画公交线路图被说没用；总爱问为什么被批评；羡慕纪录片剪辑师；小组头脑风暴让她很累，一对一访谈却很兴奋。",
    caseEn: "A student feels “talentless”: drew bus maps as a kid and was told it was useless; was scolded for asking why; envies documentary editors; group brainstorms drain her, 1:1 interviews light her up.",
    simpleZh: "我有什么天赋？我感觉自己没什么特长。",
    simpleEn: "What talent do I have? I feel like I have none.",
    complexUser: `请做一次「挖掘隐藏天赋」的深度对话。不要用鸡汤，不要急着下标签。用英文写。

【课堂演示】不要真的连问 10 题。请根据下面这份已经给出的材料，直接写一份缩微版《个人天赋使用说明书》（约 280–350 词），必须包括：底层天赋、阴影面、能量地图、适合的环境/工作/合作方式、一个 30 天验证实验。

已知材料：
- 16 岁前：会自己画公交线路图、给同学设计“最短回家路线”，没人要求。
- 反复被批评的缺点：课堂上不停问“为什么要这样”，老师说耽误进度。
- 无意识胜任区：别人觉得“整理一团乱信息”很难，她觉得这还要学吗。
- 亢奋：做完一对一访谈、把别人的故事梳成时间线。抽干：多人头脑风暴、即兴表演。
- 嫉妒：纪录片剪辑师，能把几天的素材剪成 8 分钟还让人哭。`,
  },
  {
    id: "life-design",
    caseZh: "23 岁刚毕业。父母希望考公务员。她喜欢博物馆教育实习。很担心钱。",
    caseEn: "23, just graduated. Parents want the civil-service exam. She loved a museum-education internship. Money anxiety is high.",
    simpleZh: "我对未来很迷茫，接下来该走哪条路？",
    simpleEn: "I'm lost about the future. Which path should I take?",
    complexUser: `请按斯坦福人生设计课的方法，带我做一次「人生设计」。用英文写。把人生当成可试错的项目。

【课堂演示】不要连问四阶段。根据下面处境，直接写一份缩微《个人人生设计蓝图》（约 350 词），必须包括：现状解读、真问题定义、能量地图、三个完全不同的五年奥德赛计划、原型行动清单（各 1 个小实验）、一句失败免疫。

我目前的处境：
23 岁，刚毕业。健康 7/10，工作（实习）6，娱乐 4，爱（家庭压力）5。
重力问题：本地公务员考试是父母的硬期待；我不能瞬间改变房价。
可设计问题：我可以同时准备考试，也可以做博物馆教育的兼职原型。
工作观：工作要能把复杂东西讲给陌生人听。
人生观：有意义 = 让一个小孩在展厅里真正看懂一件文物。
心流：给小学生讲青铜器。耗能：刷备考题库到半夜。
钱的约束：需要 18 个月内能负担房租，不能“先追梦再谈钱”。`,
  },
];

function extractJson(text) {
  const fenced = text.match(/```json\s*([\s\S]*?)```/);
  const raw0 = fenced ? fenced[1] : text;
  const start = raw0.indexOf("{");
  const end = raw0.lastIndexOf("}");
  if (start === -1 || end === -1) throw new Error("no json object");
  const raw = raw0.slice(start, end + 1);
  try {
    return JSON.parse(raw);
  } catch {
    return JSON.parse(fixNewlinesInStrings(raw));
  }
}

function fixNewlinesInStrings(s) {
  let out = "";
  let inStr = false;
  let esc = false;
  for (const ch of s) {
    if (inStr) {
      if (esc) {
        out += ch;
        esc = false;
        continue;
      }
      if (ch === "\\") {
        out += ch;
        esc = true;
        continue;
      }
      if (ch === "\"") {
        out += ch;
        inStr = false;
        continue;
      }
      if (ch === "\n") {
        out += "\\n";
        continue;
      }
      if (ch === "\r") continue;
      if (ch === "\t") {
        out += "\\t";
        continue;
      }
      out += ch;
      continue;
    }
    if (ch === "\"") inStr = true;
    out += ch;
  }
  return out;
}

async function runJob(job) {
  for (let attempt = 1; attempt <= 2; attempt++) {
  const system = `You are writing a classroom demo that shows WHY a carefully designed prompt beats a naive one.
Return ONLY valid JSON with this shape:
{
  "simpleAnswerEn": "the model's answer to the SIMPLE prompt, 90-140 words, typical generic LLM voice",
  "complexAnswerEn": "the model's answer to the FULL prompt, 220-350 words, actually following the prompt's structure",
  "gaps": [{"zh":"简易答案缺了什么（一句中文）","en":"what the simple answer missed (one sentence)"}],
  "gains": [{"zh":"完整提示多出来的能力（一句中文）","en":"what the full prompt added (one sentence)"}]
}
Rules:
- simpleAnswerEn must sound like a real default ChatGPT/Grok reply: fluent, generic, slightly confident, missing structure.
- complexAnswerEn must obviously use the requested headings / lists / checks. Do not be vague.
- Exactly 3 gaps and 3 gains. No emoji. No markdown fences.`;

  const user = `CASE: ${job.caseEn}

SIMPLE PROMPT (answer this first, as a typical model):
${job.simpleEn}

FULL PROMPT (answer this second, faithfully):
${job.complexUser}`;

  const res = await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify({
      model: "grok-4.5",
      temperature: 0.4,
      max_tokens: 2200,
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: system },
        { role: "user", content: user },
      ],
    }),
  });
  if (!res.ok) {
    const t = await res.text();
    if (attempt === 2) throw new Error(`${job.id} HTTP ${res.status} ${t.slice(0, 400)}`);
    console.error("retry http", job.id, res.status);
    continue;
  }
  const body = await res.json();
  const content = body.choices?.[0]?.message?.content ?? "";
  try {
    const parsed = extractJson(content);
    if (!parsed.simpleAnswerEn || !parsed.complexAnswerEn) {
      throw new Error("missing answers");
    }
    return {
      id: job.id,
      caseZh: job.caseZh,
      caseEn: job.caseEn,
      simpleZh: job.simpleZh,
      simpleEn: job.simpleEn,
      simpleAnswerEn: String(parsed.simpleAnswerEn).trim(),
      complexAnswerEn: String(parsed.complexAnswerEn).trim(),
      gaps: (parsed.gaps ?? []).slice(0, 3),
      gains: (parsed.gains ?? []).slice(0, 3),
    };
  } catch (e) {
    if (attempt === 2) throw new Error(`${job.id} parse: ${e.message}`);
    console.error("retry parse", job.id, e.message);
  }
  }
  throw new Error(`${job.id} exhausted retries`);
}

async function pool(items, n, fn) {
  const out = [];
  let i = 0;
  async function worker() {
    while (i < items.length) {
      const idx = i++;
      out[idx] = await fn(items[idx]);
    }
  }
  await Promise.all(Array.from({ length: n }, worker));
  return out;
}

const results = await pool(JOBS, 4, async (job) => {
  console.error("running", job.id);
  try {
    const r = await runJob(job);
    console.error("ok", job.id, r.simpleAnswerEn.length, r.complexAnswerEn.length);
    return r;
  } catch (e) {
    console.error("fail", job.id, e.message);
    throw e;
  }
});

function esc(s) {
  return s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
}

const file = `export type CompareBullet = { zh: string; en: string };

export type PromptDemo = {
  id: string;
  caseZh: string;
  caseEn: string;
  simpleZh: string;
  simpleEn: string;
  simpleAnswerEn: string;
  complexAnswerEn: string;
  gaps: CompareBullet[];
  gains: CompareBullet[];
};

export const DEMOS: PromptDemo[] = ${JSON.stringify(results, null, 2)};

export const DEMO_BY_ID: Record<string, PromptDemo> = Object.fromEntries(
  DEMOS.map((d) => [d.id, d]),
);
`;

const { writeFileSync } = await import("node:fs");
writeFileSync("/workspace/src/data/comparisons.ts", file);
console.log("wrote", results.length, "demos");
