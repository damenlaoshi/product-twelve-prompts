export type CompareBullet = { zh: string; en: string };

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

export const DEMOS: PromptDemo[] = [
  {
    "id": "socratic",
    "caseZh": "大三学生。嘴上说“想学 AI”，但每个教程 20 分钟就放弃。开始怀疑要不要换专业。",
    "caseEn": "A third-year student says they want to “learn AI,” but quits every tutorial after 20 minutes. They wonder if they should change majors.",
    "simpleZh": "帮我想想我到底该怎么办。我想学 AI，但又学不下去。",
    "simpleEn": "Help me figure out what to do. I want to learn AI but I keep quitting.",
    "simpleAnswerEn": "You should stick with learning AI because it's a valuable skill in today's job market, but if quitting after 20 minutes is frustrating, it might indicate that the tutorials aren't the right fit. Try switching to interactive platforms, YouTube channels, or free online courses that offer more practical examples. As a third-year student, you can still change majors if you're not passionate about it, but first assess what aspects of AI you find interesting or boring. Perhaps the pace is too slow or the concepts are abstract. Experiment with small projects to see if it builds momentum. It's okay to pivot if it's not working out.",
    "complexAnswerEn": "Simulated 4-round dialogue:\nQuestion 1: What specific elements in the AI tutorials are causing you to quit after 20 minutes? Student: The theory is overwhelming without enough practical examples.\nQuestion 2: What do you hope to achieve by learning AI, and how does this relate to your current struggles? Student: I want to create AI applications but feel lost in the basics.\nQuestion 3: Are there any facts about your learning preferences or background that we should consider? Student: I'm a third-year student who enjoys coding but dislikes abstract lectures.\nQuestion 4: What value judgments are you making about whether to continue or change majors? Student: I question if AI is the right major for my skills and interests.\n\nFinal output:\n- My initial question: I want to learn AI but I keep quitting.\n- The real problem I want to solve: Whether the issue is “AI is wrong for me” or “I have never met AI in a form that fits how I learn.”\n- Confirmed facts: Third-year student; quits tutorials after ~20 minutes; enjoys coding; dislikes abstract lectures; considering a major change.\n- Unverified assumptions: The tutorials are the primary barrier; AI does not align with the student's abilities; quitting means the field is a bad fit.\n- Key variables: Practical vs theoretical interest; time; alternative resources; whether “change majors” is solving boredom or avoiding a learning-design problem.\n- One immediately actionable new question: What is one small AI thing you could build this week that produces a visible result in under two hours?",
    "gaps": [
      {
        "zh": "简易答案直接建议尝试不同资源但没有区分事实、解释、价值判断和目标。",
        "en": "The simple answer directly suggested trying different resources but did not distinguish facts, interpretations, value judgments, and goals."
      },
      {
        "zh": "简易答案没有模拟苏格拉底式提问的轮次和调整。",
        "en": "The simple answer did not simulate the rounds of Socratic questioning and adjustments based on responses."
      },
      {
        "zh": "简易答案没有提供结构化的最终输出和对话模拟。",
        "en": "The simple answer did not provide the structured final output and dialogue simulation."
      }
    ],
    "gains": [
      {
        "zh": "完整提示多出来的能力是引导用户通过提问来探索问题而非直接给出答案。",
        "en": "The full prompt added the ability to guide the user through questioning to explore the problem rather than giving direct answers."
      },
      {
        "zh": "它优先区分可验证的事实、我对事实的解释、价值判断和真正目标。",
        "en": "It prioritized distinguishing verifiable facts, my interpretations of those facts, value judgments, and my true goals."
      },
      {
        "zh": "提供了最多追问6次并在信息足够时停止的框架，以及模拟4轮对话的结构。",
        "en": "It added a framework for up to 6 follow-up questions and stopping when information is sufficient, along with simulating 4 rounds of dialogue."
      }
    ]
  },
  {
    "id": "two-layer",
    "caseZh": "学生第一次在机器学习课上听到 “overfitting / 过拟合”。",
    "caseEn": "A student hears “overfitting” for the first time in a machine-learning class.",
    "simpleZh": "什么是过拟合？",
    "simpleEn": "What is overfitting?",
    "simpleAnswerEn": "Overfitting is a problem in machine learning where the model learns the training data too well, including noise, and fails to generalize to new data. It happens when the model is too complex for the available data. For example, if you have a dataset of house prices and fit a very high degree polynomial, it will match the training points exactly but predict new houses wrongly. This is different from underfitting, where the model is too simple and misses patterns. To avoid overfitting, use regularization, cross-validation, or simpler models. It's important to check if your model overfits by comparing training and test performance.",
    "complexAnswerEn": "1. 小白版：用一个生活化的例子讲清楚它是什么。不要用行话。\n小白版：Imagine you are learning to drive. The teacher gives you many examples of parking in different spots. If you only remember the exact locations and obstacles in each parking lot instead of learning how to park safely, then when you go to a new parking lot, you might hit things. This is overfitting – the model memorizes the training examples too much so it can't apply the skill to new situations.\n2. 专业版：讲清核心机制、适用边界、常见误解。\n专业版：The core mechanism of overfitting is that the model fits the noise and random variations in the training data rather than the true signal. This results in excellent performance on training data but poor generalization to unseen data. It occurs at the boundary when model complexity exceeds data complexity, such as having too many parameters with small datasets or without regularization. Common misconceptions are that overfitting only happens in deep learning models or that it means the model is performing badly overall, when in fact it is just not generalizing well.\n3. 对照：把小白说法和专业术语一一对应。\n对照：\n小白说法：只记住每个停车场的具体位置和障碍物 -> 专业术语：memorizing specific training instances\n小白说法：遇到新停车场就容易撞到东西 -> 专业术语：poor generalization to unseen data\n小白说法：没学到安全停车的技巧 -> 专业术语：fitting noise instead of signal\n4. 易错点：列出最容易理解错的地方。\n易错点：\n- Confusing overfitting with underfitting: Overfitting happens when the model is too complex, while underfitting is when it is too simple.\n- Thinking overfitting only occurs in neural networks: It can occur in simpler models like linear regression with high-degree polynomials.\n- Believing more data solves overfitting: Sometimes regularization techniques are needed even with abundant data.\n- Misunderstanding that the model is 'bad': It actually has high accuracy on training data but low on test data.\n5. 自查：给我 3 个问题，用来检验我是不是真懂了。\n自查：\n1. Can you give an example of overfitting in daily life?\n2. What is the primary difference between overfitting and underfitting?\n3. How would you check if a machine learning model is overfitting?",
    "gaps": [
      {
        "zh": "简易答案没有用生活化例子来解释过拟合是什么",
        "en": "The simple answer missed using a relatable everyday example to explain what overfitting is."
      },
      {
        "zh": "简易答案没有讲核心机制、适用边界和常见误解",
        "en": "The simple answer missed explaining the core mechanisms, applicability boundaries, and common misconceptions."
      },
      {
        "zh": "简易答案没有提供对照、易错点和自查问题",
        "en": "The simple answer missed providing correspondences, easily misunderstood points, and self-check questions."
      }
    ],
    "gains": [
      {
        "zh": "完整提示引入了双层解释法来讲解概念",
        "en": "The full prompt introduced the two-layer explanation method for teaching the concept."
      },
      {
        "zh": "完整提示要求按特定5部分结构输出，包括小白版和专业版",
        "en": "The full prompt required outputting in a specific 5-part structure including beginner and professional versions."
      },
      {
        "zh": "完整提示指定用英文输出并保留中英专有名词以便对照",
        "en": "The full prompt specified writing in English while retaining Chinese-English terms for easy comparison."
      }
    ]
  },
  {
    "id": "reverse",
    "caseZh": "拆解 Duolingo 的连续打卡（streak）为什么让人每天打开 App。",
    "caseEn": "Deconstruct why Duolingo’s streak makes people open the app every day.",
    "simpleZh": "分析一下 Duolingo 为什么让人每天都打开。",
    "simpleEn": "Analyze why people open Duolingo every day.",
    "simpleAnswerEn": "People open Duolingo every day to maintain their language learning streak. The system encourages consistency by resetting if you miss a day, creating a sense of urgency and motivation. Users get notifications and see progress with points and levels. It's addictive because of the gamification, making learning feel like a game. Many people find it hard to skip a day once the streak starts. This helps build the habit of practicing every single day, which is crucial for language acquisition. The fear of losing the streak keeps them coming back.",
    "complexAnswerEn": "1. It solves the problem of building consistent daily language learning habits for beginners and intermediate users who struggle with motivation and forgetfulness. It targets people who want to learn a language but need a nudge to practice every day. 2. The structure and process are as follows: The app sends a daily notification to remind users to open it. Users then complete a short lesson, which extends the streak if consecutive. Visual indicators like a burning fire show the streak length. If missed, it triggers a reset and a motivational message. 3. Key choices that pull it apart from ordinary streak apps are: integrating the streak directly with educational content so practicing language is the streak action; using strong loss aversion by threatening to break the streak; and tying rewards like XP and hearts to the learning task itself rather than generic points. 4. The completion standard is achieving a streak of consecutive days, with milestones such as 7, 30, or 100 days for badges or leaderboards. The ultimate goal is long-term consistency in language practice. 5. Transferable patterns include daily commitment devices, notifications for reminders, and psychological triggers like loss aversion. What only belongs to this case is the specific embedding of language lessons into the streak mechanic and the use of a cartoon owl for engagement. - Reusable rules: 1. Make the daily action the core of your streak. 2. Use loss aversion to increase motivation. 3. Send timely reminders via notifications. 4. Link rewards closely to the action. 5. Set progressive milestones. - Operation checklist: 1. Define the exact daily habit to track. 2. Implement the streak counter with reset logic. 3. Add reminder features. 4. Design feedback and visual elements. 5. Test and iterate based on user feedback. - A 30 minute small exercise: Spend 30 minutes creating a streak system for a new habit like drinking water daily, including a sample reminder script and a simple decision tree for streak maintenance.",
    "gaps": [
      {
        "zh": "简易答案只说了动机和习惯，没有结构和流程的分析",
        "en": "The simple answer only talked about motivations and habits without analyzing the structure and process"
      },
      {
        "zh": "简易答案缺少对关键选择的讨论和完成标准的说明",
        "en": "The simple answer lacked discussion on key choices and explanation of completion standards"
      },
      {
        "zh": "简易答案没有提供可复用规律、操作清单和小练习",
        "en": "The simple answer did not provide reusable rules, operation checklists, or small exercises"
      }
    ],
    "gains": [
      {
        "zh": "完整提示指定了五个分析维度并要求输出特定部分",
        "en": "The full prompt specified five analysis dimensions and required output of specific sections"
      },
      {
        "zh": "完整提示要求反向拆解以迁移逻辑而非复制界面",
        "en": "The full prompt required reverse deconstruction to migrate logic rather than copy the interface"
      },
      {
        "zh": "完整提示提供了详细的框架让回答更全面和可操作",
        "en": "The full prompt provided a detailed framework to make the answer more comprehensive and actionable"
      }
    ]
  },
  {
    "id": "hv",
    "caseZh": "系统研究 Spotify 为什么能在 Apple Music、YouTube Music 之间仍被很多人选。",
    "caseEn": "Study why many people still choose Spotify over Apple Music and YouTube Music.",
    "simpleZh": "分析一下 Spotify。",
    "simpleEn": "Analyze Spotify.",
    "simpleAnswerEn": "Spotify is one of the top music streaming services available today. It provides access to a massive library of songs, albums, and artists from around the world. The platform offers personalized playlists and recommendations that help users discover new music. Many people choose Spotify because of its user-friendly interface, social sharing options, and the option to listen offline. It also has a strong focus on podcasts, which adds to its appeal. Compared to Apple Music and YouTube Music, Spotify has a larger user base and has been refining its features for years. Its innovative approach to music discovery keeps it popular among listeners.",
    "complexAnswerEn": "Core Conclusion\nSpotify continues to attract users over Apple Music and YouTube Music primarily due to its extensive music library, advanced recommendation algorithms, and integrated podcast offerings. While Apple Music benefits from seamless integration with Apple devices and YouTube Music from video content, Spotify's path of focusing on audio streaming and community features has led to higher user retention in many markets. This choice is driven by better personalization and lower effective costs for premium features. Users still choose Spotify because of its superior discovery tools and the vast amount of user-generated content. This explains the continued preference despite competition.\n\nKey Timeline (3–5 nodes)\n1. 2006: Founded by Daniel Ek and Martin Lorentzon in Stockholm, Sweden, as a music discovery platform.\n2. 2008: Launched as a free service with ads, expanding to premium on-demand streaming.\n3. 2011: Signed deals with major record labels (Universal, Warner, EMI), enabling a large music catalog.\n4. 2014: Went public via IPO, raising capital for expansion.\n5. 2018: Acquired The Echo Nest, enhancing music recommendation technology.\nEarly choices like ad-supported free tier created path dependency on user data for improvements, leading to today's dominant position.\n\nLateral Comparison (use a few sentences, no fake table)\nUsing dimensions of library size, pricing, discovery tools, podcast integration, and ecosystem compatibility: Spotify offers the largest independent music selection and superior algorithmic discovery via Discover Weekly. It has lower pricing for premium and strong podcast features. Apple Music excels in Apple ecosystem integration and lossless audio options, while YouTube Music provides free access with ads and video ties but smaller music focus. Users select Spotify for its overall balance and innovation in audio experiences.\n\nFuture 1 possible path\nSpotify may integrate more AI-driven social features and expand into live music events or AR experiences to further differentiate from competitors.\n\nPending confirmation questions\nWhat are the exact market share figures in key regions? How do user demographics influence preference for Spotify's features? What impact will AI advancements have on recommendation accuracy?",
    "gaps": [
      {
        "zh": "简易答案只泛泛分析了Spotify，没有深入的背景和对比。",
        "en": "The simple answer only gave a generic analysis of Spotify without in-depth background or comparisons."
      },
      {
        "zh": "它没有提供关键时间线或横向维度比较。",
        "en": "It missed providing key timelines or horizontal dimension comparisons."
      },
      {
        "zh": "缺少对用户选择原因的结构化解释和待确认问题。",
        "en": "It lacked a structured explanation for user choice reasons and pending confirmation questions."
      }
    ],
    "gains": [
      {
        "zh": "完整提示提供了横纵分析的框架，包括诞生背景和路径依赖。",
        "en": "The full prompt provided a framework for longitudinal and horizontal analysis, including birth background and path dependency."
      },
      {
        "zh": "它增加了用同一组维度比较优劣势的能力。",
        "en": "It added the ability to compare advantages and disadvantages using the same set of dimensions."
      },
      {
        "zh": "完整提示要求包含核心结论、时间线、未来路径和待确认问题等结构。",
        "en": "The full prompt required structures like core conclusion, timeline, future path, and pending questions."
      }
    ]
  },
  {
    "id": "factcheck",
    "caseZh": "核查这段话：“每天必须喝 8 杯水，2023 年研究证明每人刚好需要 2 升。少喝就会头痛，所以头痛一定是缺水。”",
    "caseEn": "Fact-check: “You must drink 8 glasses a day. A 2023 study proved everyone needs exactly 2 liters. Drink less and you get headaches, so a headache means you are dehydrated.”",
    "simpleZh": "这段话是真的吗？每天必须喝 8 杯水，2023 年研究证明每人刚好需要 2 升。少喝就会头痛，所以头痛一定是缺水。",
    "simpleEn": "Is this true? You must drink 8 glasses a day. A 2023 study proved everyone needs exactly 2 liters. Drink less and you get headaches, so a headache means you are dehydrated.",
    "simpleAnswerEn": "Actually, this claim isn't fully accurate. Drinking 8 glasses of water a day is a common suggestion, but it's not something you must do—it's more of a guideline. There's no specific 2023 study that proves everyone needs exactly 2 liters; hydration requirements vary based on individual factors like age, weight, exercise, and climate. While dehydration can cause headaches, headaches have many other causes too, such as stress, hunger, or sinus problems. So, a headache doesn't always mean you're dehydrated. The advice here is too rigid and could lead people to worry unnecessarily or ignore other health issues. It's best to stay hydrated but listen to your body.",
    "complexAnswerEn": "Verifiable Facts:\n1. 'You must drink 8 glasses of water a day.' This is clearly false. The '8 glasses' rule is a popular myth and not a strict requirement based on science. Actual needs depend on many personal variables.\n2. 'A 2023 study proved everyone needs exactly 2 liters.' This is disputed. There is no credible 2023 study that establishes an exact 2-liter requirement for all people. Hydration guidelines are broad and individualized.\n3. 'People who drink less get headaches.' This is mostly true but needs narrowing. While dehydration is a known cause of headaches, it doesn't happen to everyone who drinks less, and other factors play a role.\n4. 'so if you have a headache you are dehydrated.' This is clearly false. Headaches can have numerous causes including tension headaches, migraines, dehydration from other reasons, or even non-physical issues.\n\nConclusions drawn from facts:\nThe conclusion drawn is that adhering to exactly 2 liters per day is mandatory to prevent headaches, and that any headache signals dehydration, which would discourage fluid reduction and promote the 8-glass rule as absolute.\n\nValue judgments:\nThis statement makes a value judgment that water intake is the most important health factor, suggesting that not following it leads to poor health outcomes like headaches, while downplaying the importance of other health practices.\n\nReasoning check:\nThe inference cannot be made because the facts do not support the absolute conclusions. Hidden assumptions are that all people need the same amount of water and that headaches are solely or primarily from dehydration. The reasoning confuses correlation with causation by assuming less water directly causes headaches and that headaches directly indicate dehydration. Omitted information includes better ways to check hydration like urine color and volume, the role of diet in hydration, and the need for professional medical evaluation for headaches.\n\nCredible facts list:\n- The 'must drink 8 glasses' claim: clearly false.\n- The 2023 study claim: disputed.\n- Link between less drinking and headaches: mostly true but needs narrowing.\n- Headache as indicator of dehydration: clearly false.\n\nReasoning chain vulnerabilities:\n1. The jump from general advice to 'must' without evidence.\n2. Misapplication of causation in both directions.\n3. Lack of consideration for multifactorial causes of headaches.\n\nStrengthened more reasonable version:\nIt is generally recommended to drink about 2 liters of water daily, but this varies by individual circumstances. Dehydration can contribute to headaches, but so can many other conditions. A headache alone does not confirm dehydration. For accurate assessment, monitor symptoms and consult a doctor if headaches are frequent. The focus should be on sustainable hydration habits rather than strict quotas.\n\nOverall credibility rating: low. The original statement presents unverified and exaggerated claims as facts, which can mislead people about basic health practices and potentially delay seeking proper medical care for headaches.",
    "gaps": [
      {
        "zh": "简易答案没有将内容拆解为可验证事实、从事实推出的结论和价值判断三个部分。",
        "en": "The simple answer did not break down the content into three parts: verifiable facts, conclusions drawn from facts, and value judgments."
      },
      {
        "zh": "它没有对每个事实进行确认/争议等标记，也没有检查推理中的隐藏假设和因果关系。",
        "en": "It did not mark each fact with labels like confirmed or disputed, nor check for hidden assumptions and correlation-causation issues in the reasoning."
      },
      {
        "zh": "没有提供可信事实清单、推理漏洞、补强版本和总体可信度评级。",
        "en": "It did not provide a list of credible facts, reasoning vulnerabilities, a strengthened version, or an overall credibility rating."
      }
    ],
    "gains": [
      {
        "zh": "完整提示要求使用特定结构和标记，帮助模型系统性地分析事实和推理。",
        "en": "The full prompt requires a specific structure and fact-marking, enabling systematic analysis of facts and reasoning."
      },
      {
        "zh": "它指导检查推理链的漏洞，如因果关系和假设，防止简单误解。",
        "en": "It instructs to examine reasoning chain flaws like causation and assumptions, preventing oversimplified misunderstandings."
      },
      {
        "zh": "最终输出包括补强后的合理版本和可信度评级，提供更全面的指导。",
        "en": "It includes a strengthened reasonable version and credibility rating in the final output, providing more comprehensive guidance."
      }
    ]
  },
  {
    "id": "experts",
    "caseZh": "两个学生做的校园二手书小程序：70% 的留言没人回。想提高成交。",
    "caseEn": "A campus used-book mini-app run by two students: 70% of messages get no reply. They want more completed sales.",
    "simpleZh": "我们的二手书小程序没人回消息，怎么改？",
    "simpleEn": "Nobody replies on our used-book app. How do we fix it?",
    "simpleAnswerEn": "Hi, to fix the issue where 70% of messages on your used-book app get no replies, hurting sales, focus on user engagement. Improve notifications for new messages and add features like book suggestions or quick reply options. Analyze data for patterns, like lower replies late at night. Promote the app on campus to attract more students. Ensure it's easy to use for busy schedules. This should boost replies and completed transactions. It's also good to test different approaches and gather user feedback. With a small team, prioritize high-impact changes like better notifications first.",
    "complexAnswerEn": "Since the information is insufficient, the most critical question is: What are the reasons users fail to reply and what barriers do they face? We assume the following: we have not done user interviews, only seen backend data showing that reply rates are lower for posts after 11 PM. Proceeding with this assumption, here is the expert consultation in English for the problem of 70% no replies on the campus used-book mini-app, aiming to increase completed sales with only two student developers.\n\nExpert 1 - UX Expert: Redefines the problem as users feeling overwhelmed or unmotivated in the messaging process, turning potential sales into no interaction. Proposes scheme: Create intuitive chat interfaces with templates for common book queries and auto-complete suggestions. Maximum risk: Increased development time could delay app updates given the small team.\n\nExpert 2 - Sales Strategist: Redefines the problem as missing incentives that make users hesitant to engage in transactions. Proposes scheme: Add features for instant book previews, price negotiation tools, and follow-up reminders. Maximum risk: Complicated features might confuse users and reduce adoption.\n\nExpert 3 - Data Analyst: Redefines the problem as suboptimal timing and relevance in message delivery. Proposes scheme: Implement predictive algorithms to suggest best reply times and highlight active listings. Maximum risk: Over-reliance on data might ignore qualitative user feedback.\n\nExperts question each other: UX Expert asks Sales Strategist if incentives alone fix disinterest without good design. Sales Strategist asks UX if templates are enough without motivation. Data Analyst asks Sales if reminders work without timing optimization. Sales asks Data if algorithms can compensate for poor UX. UX asks Data if predictions are accurate without testing.\n\nCommon facts: Low reply rate of 70% affects sales completion. Small team of two students. Goal is sales not downloads. Backend observation of lower replies after 11 PM.\n\nReal disagreements: UX and Sales disagree on whether design or incentives are primary. Sales and Data disagree on whether reminders or algorithms matter more. UX and Data on combining all vs separate fixes.\n\nAssumptions behind: UX assumes poor interface causes no replies. Sales assumes lack of incentives. Data assumes time patterns are causal.\n\nComprehensive optimal scheme: Synthesize by launching a combined feature set starting with time-based notifications and basic templates, followed by incentives, validated by a quick user survey on the 11 PM assumption, measuring impact on replies.\n\nRemaining risks: Small team capacity for implementation; potential user fatigue with new elements; unknown long-term effects; need for continuous monitoring.",
    "gaps": [
      {
        "zh": "简易答案缺少多专家视角和相互质疑的深入分析框架。",
        "en": "The simple answer missed the multi-expert perspective analysis and mutual questioning process."
      },
      {
        "zh": "简易答案未明确列出共同事实、分歧假设以及综合最优方案。",
        "en": "The simple answer missed the clear framework for common facts, real disagreements, and the comprehensive optimal scheme."
      },
      {
        "zh": "简易答案没有讨论最大风险和仍未消除的风险点。",
        "en": "The simple answer missed pointing out the maximum risks and remaining uneliminated risks."
      }
    ],
    "gains": [
      {
        "zh": "完整提示增加了组建专家会诊的多视角互补分析能力。",
        "en": "The full prompt added the capability to organize a multi-expert consultation with complementary perspectives."
      },
      {
        "zh": "完整提示多出了风险评估、分歧澄清和假设识别的能力。",
        "en": "The full prompt added risk evaluation, disagreement clarification, and assumption identification."
      },
      {
        "zh": "完整提示提供了相互质疑、共同事实到最优方案的系统结构。",
        "en": "The full prompt added systematic mutual questioning and synthesis of the optimal scheme."
      }
    ]
  },
  {
    "id": "first-principles",
    "caseZh": "创业小团队每周开 90 分钟全员会，大家都觉得没用，但创始人说“好公司都开会”。",
    "caseEn": "A tiny startup holds a 90-minute all-hands every week. Everyone finds it useless. The founder says “good companies have meetings.”",
    "simpleZh": "周会没用，怎么优化周会？",
    "simpleEn": "Our weekly meeting is useless. How do we improve it?",
    "simpleAnswerEn": "Improving your weekly meeting can begin by creating an agenda in advance so that everyone is prepared. Encourage team members to contribute ideas and updates beforehand through a shared channel. Set a timer to keep the discussion focused and on track. After the meeting, gather feedback from the team on what they found useful and what could be improved. This structured approach will make the meeting more effective and less of a waste of time. Additionally, consider having different formats for different parts of the meeting, like brainstorming sessions or updates. The goal is to make it collaborative and result-oriented.",
    "complexAnswerEn": "Applying first principles to the problem of the useless weekly meeting in our 8-person startup team.\n\nConfirmed facts: We have an 8-person team holding a 90-minute all-hands meeting every Friday afternoon. No one writes minutes or prepares agendas in advance. The founder believes good companies have meetings, so they keep adding segments such as sharing, recognition, and sync updates, which is making the meeting longer and longer.\n\nUnverified assumptions: That the meeting is useless solely due to lack of preparation. That adding more content will make it useful. That industry norms require regular meetings for team alignment.\n\nTrue goals: Achieve team alignment, share knowledge, motivate the team, and ensure productivity.\n\nReal constraints: 90 minutes time limit, small team of 8, founder's influence on meeting format.\n\nTemporarily setting aside industry conventions, from basic facts: People need to coordinate and share information efficiently. In a small team, this can be done with less time through better systems.\n\nNew path: Switch to asynchronous communication where each member submits a short written update before the meeting. The meeting becomes a quick review and decision-making session only for what can't be documented.\n\nFounding premise: Clear written updates and minimal meetings suffice for alignment in a small team.\n\nSmallest first step verification action: Implement a shared document for weekly progress notes; review and discuss only unresolved items in the meeting. Test for two weeks and measure time usage and satisfaction.\n\nThe original scheme's additions of more segments are just surface repairs. They patch the symptoms without changing the underlying meeting format that requires preparation and wastes time. The true issue is the default assumption of meeting-based communication.",
    "gaps": [
      {
        "zh": "简易答案没有拆解问题到第一性原理，也没有提出推倒重来的新路径。",
        "en": "The simple answer didn't break down the problem to first principles or propose rebuilding with a new path."
      },
      {
        "zh": "它忽略了未验证假设和真正目标的分析。",
        "en": "It ignored the analysis of unverified assumptions and true goals."
      },
      {
        "zh": "没有指出原方案的表面修补部分。",
        "en": "It didn't point out the superficial repair parts of the original solution."
      }
    ],
    "gains": [
      {
        "zh": "完整提示要求使用第一性原理，并提供了结构化的拆解框架。",
        "en": "The full prompt requires first-principles thinking and provides a structured breakdown framework."
      },
      {
        "zh": "它引导从零推导新路径，包括前提和最小验证步骤。",
        "en": "It guides deriving a new path from scratch, including premises and minimal verification steps."
      },
      {
        "zh": "明确区分了表面修补和需要重构的核心问题。",
        "en": "It clearly distinguishes superficial repairs from core issues requiring reconstruction."
      }
    ]
  },
  {
    "id": "cross-domain",
    "caseZh": "大学图书馆座位被占：有人用书占座，人却不在，别人没地方坐。",
    "caseEn": "Library seats are hoarded: students leave books on chairs and disappear. Others cannot sit.",
    "simpleZh": "图书馆占座怎么解决？",
    "simpleEn": "How do we stop people hogging library seats?",
    "simpleAnswerEn": "To stop people hogging library seats, we can have library staff regularly patrol the area and move items if the person is away. We can also post more signs reminding students to be considerate and limit their time on seats. Another idea is to create more study rooms or provide lockers for personal items. This problem is common in many libraries, and these solutions can help improve the situation. By implementing these measures, we can make the library more enjoyable for everyone. Additionally, implementing a digital reservation system for seats could prevent hogging altogether.",
    "complexAnswerEn": "Using cross-domain borrowing to solve the library seat hogging problem, we follow these structured steps in English:\n\n1. Strip industry jargon and use neutral language to describe the underlying structure. The core issue is that users leave personal belongings on seats to secure them for later, blocking others who need to sit, which wastes shared space in a public facility.\n\n2. Find similar cases from at least three distant domains. In urban parking management, drivers leave cars parked for hours, preventing others from using spots. In retail management, customers leave shopping carts in aisles, disrupting store flow. In event coordination, attendees leave items at venues to save seats during performances.\n\n3. Extract the transferable mechanism, not the surface. The mechanism is active monitoring and timely intervention to enforce fair resource use, rather than just rules or signs. This involves staff presence to observe and relocate items when the occupant is absent.\n\n4. Adapt to the library. In libraries, this means librarians patrol aisles to relocate books and bags if the owner is away for an extended period, while using neutral signage to inform users about the issue and expected behavior.\n\n5. Design a low-cost, reversible, 7-day small experiment. Select one section of the library and have a staff member monitor seats for one week. Actions: observe hogging and politely ask to move items or note details. Cost: primarily staff time, estimated at 10-15 hours. Indicators: count of hogging incidents and average available seats per hour. Continue or stop signals: if hogging reduces by at least 30% with positive feedback, continue and expand; if not or issues arise, stop immediately.\n\nThis method borrows effective practices from parking, retail, and events to create a targeted, practical solution for libraries.",
    "gaps": [
      {
        "zh": "简易答案没有采用跨领域借解来寻找图书馆座位的创新解决方案。",
        "en": "The simple answer missed adopting cross-domain borrowing to find innovative solutions for library seats."
      },
      {
        "zh": "简易答案没有遵循剥掉术语、提取机制和设计实验的五步结构。",
        "en": "The simple answer missed following the five-step structure of stripping jargon, extracting mechanisms, and designing experiments."
      },
      {
        "zh": "简易答案没有包括低成本、可逆的小实验设计，包括动作、成本、指标和信号。",
        "en": "The simple answer missed including the design of a low-cost, reversible small experiment with actions, costs, indicators, and signals."
      }
    ],
    "gains": [
      {
        "zh": "完整提示增加了使用跨领域借解的能力。",
        "en": "The full prompt added the capability to use cross-domain borrowing to solve complex problems."
      },
      {
        "zh": "完整提示提供了详细的五步框架来系统地从远距离领域借解。",
        "en": "The full prompt provided a detailed five-step framework to systematically borrow solutions from distant domains."
      },
      {
        "zh": "完整提示强调设计一个低成本、可逆的小实验来安全测试解决方案。",
        "en": "The full prompt emphasized designing a small, low-cost, reversible experiment to safely test the solution."
      }
    ]
  },
  {
    "id": "steelman",
    "caseZh": "本科毕业：直接读计算机硕士，还是先工作两年。",
    "caseEn": "Just graduated: go straight into a CS master’s, or work for two years first.",
    "simpleZh": "我该先工作还是直接读研？帮我决定。",
    "simpleEn": "Should I get a job first or go straight to grad school? Please decide for me.",
    "simpleAnswerEn": "Should I get a job first or go straight to grad school? It depends. Going straight to a CS master's can accelerate your career, build deep expertise, and open doors to advanced research or higher-paying tech roles faster. Working two years first allows you to gain practical experience, clarify your interests, and make an informed decision about further education. For a 22-year-old from an ordinary university with family support for partial tuition and a focus on 5-year options over starting salary, I lean towards working first to explore the field and decide if grad school fits. This approach balances immediate earning potential with long-term planning. In tech, experience often matters as much as degrees.",
    "complexAnswerEn": "Option A - Direct to CS Master's:\nStrongest reasons: Accelerates career in tech, builds specialized knowledge quickly, potential for better research opportunities and higher long-term earnings.\nApplicable conditions: Ideal if you are inclined towards research or academia, and want to maximize educational investment from the start.\nMaximum benefits: Deeper expertise, access to PhD paths, stronger credentials. Risks: High debt if family can't cover all, opportunity cost if you dislike the program.\nHardest to answer objections: You might not be research-oriented, making the program feel like a waste; working first could provide better context for choosing grad school.\n\nOption B - Work Two Years First:\nStrongest reasons: Gathers real-world experience, helps clarify career interests, builds network and savings for future education.\nApplicable conditions: Best if you want to test your fit in the industry before committing to further studies.\nMaximum benefits: Practical skills, informed decision-making, flexibility to switch paths. Risks: Delayed advanced education, potential for job dissatisfaction during the period.\nHardest to answer objections: You could miss out on cutting-edge knowledge and face lower initial salary; the two years might not guarantee better future choices.\n\nThe real differences between A and B lie in the focus on accelerated academic path versus experiential learning and decision refinement.\n\nKey variables that could change the conclusion include your specific interests in research versus product development, the job market conditions in two years, and your family's financial support for tuition.\n\nThe one most likely question that could change my conclusion: How do you envision your career evolving between research and product roles, and what experiences might clarify your preferences?\n\nAssuming my answer is: “我还不知道自己喜欢做研究还是做产品.”\n\nClear judgment: Under the condition of uncertainty between research and product, and prioritizing 5-year choice over starting salary, I recommend option B: work for two years first. This period can help you explore interests and make a more informed decision later.\n\nNext 3 action steps: 1. Target entry-level CS or software roles to gain practical experience. 2. Network with professionals and take on projects that involve both coding and user-focused problem-solving. 3. After two years, evaluate your experiences and decide on applying to master's programs or industry positions.",
    "gaps": [
      {
        "zh": "简易答案只给出模糊的建议，没有结构化的论证或具体分析。",
        "en": "The simple answer only gives vague advice without structured arguments or specific analysis."
      },
      {
        "zh": "简易答案没有考虑用户的背景细节如家庭负担、学费和5年选择权。",
        "en": "The simple answer did not consider the user's background details such as family tuition burden and 5-year choice priority."
      },
      {
        "zh": "简易答案缺少对A和B的全面比较，包括收益风险和关键变量。",
        "en": "The simple answer lacks a comprehensive comparison of A and B, including benefits, risks, and key variables."
      }
    ],
    "gains": [
      {
        "zh": "完整提示要求进行双向钢人论证，提供了结构化的最强理由、适用条件、收益风险和反对意见。",
        "en": "The full prompt requires a bidirectional steelman argument, providing structured strongest reasons, conditions, benefits/risks, and objections."
      },
      {
        "zh": "完整提示指定了用户的具体背景并要求分析关键变量和可能改变结论的问题。",
        "en": "The full prompt specifies the user's specific background and requires analysis of key variables and questions that could change the conclusion."
      },
      {
        "zh": "完整提示假设了用户的回答并给出明确判断和行动步骤，使回答更具针对性和实用性。",
        "en": "The full prompt assumes the user's answer and provides a clear judgment and action steps, making the response more targeted and practical."
      }
    ]
  },
  {
    "id": "experiment",
    "caseZh": "想做一份给外国学生的双语中文学习 newsletter，但只停留在幻想。",
    "caseEn": "Wants to start a bilingual Chinese-learning newsletter for foreign students — still only a daydream.",
    "simpleZh": "我想做中文学习 newsletter，要不要做？",
    "simpleEn": "I want to start a Chinese-learning newsletter. Should I?",
    "simpleAnswerEn": "Yes, you should start a Chinese-learning newsletter for foreign students. Newsletters can help share language learning tips and cultural information weekly. With your limited 5 hours in the evening, you can dedicate time to creating content without too much pressure. You can use free tools to write and distribute it. Start small by outlining ideas and sharing with a few people. I think it's a good idea to try because it matches your interest and could be rewarding. If it doesn't work out, you can always change plans. Overall, go for it and see how it develops.",
    "complexAnswerEn": "Here is how to turn your hesitation into a minimal experiment:\n\n1. The three assumptions that determine whether this succeeds or fails are:\n- Assumption 1: Foreign students are interested in receiving a bilingual Chinese learning newsletter that includes weekly cultural topics and vocabulary words.\n- Assumption 2: I can maintain a regular writing schedule using only the 5 hours available in the evening without burnout.\n- Assumption 3: I can produce and distribute content that attracts at least some initial readers despite having no existing audience.\n\n2. The most critical assumption is Assumption 1. It must be tested first because if there is no real demand from the target audience, the entire project is pointless and will waste time. Testing interest early allows us to pivot or stop before deeper investment.\n\n3. The low-cost, reversible, 7-day minimal experiment design:\n- Actions: On day 1, write a draft of one newsletter issue featuring one cultural story and 5-10 new vocabulary words with explanations. On day 2, revise the draft for better flow and engagement. On day 3, format it simply using free tools. On day 4, create a brief promotional message. On day 5, send it to 10 potential readers via email or WeChat. On day 6, gather feedback from them. On day 7, analyze the results including time spent and reader responses.\n- Input: Approximately 5 hours total per week, using free resources like Google Docs for writing, Canva for basic formatting, and no paid advertising.\n- Metrics: Successful completion of each day's task, total words written, time taken per day, and number of positive responses from readers.\n- Continue/stop signals: Continue the experiment if I can complete tasks daily without significant stress and receive at least 3 positive feedbacks; stop immediately if tasks exceed available time or feedback is negative or absent.\n- After completing the 7 days, new knowledge: The realistic time investment required, the quality of content I can produce consistently, and the actual level of interest from a small test group of foreign students.\n\nTomorrow, the first step is to write the first newsletter draft.",
    "gaps": [
      {
        "zh": "简易答案只提供了模糊的鼓励，没有任何结构化的计划。",
        "en": "The simple answer only provided vague encouragement without any structured plan."
      },
      {
        "zh": "它忽略了识别关键假设和测试优先级的重要性。",
        "en": "It ignored the importance of identifying key assumptions and testing priorities."
      },
      {
        "zh": "没有提供具体的实验设计、指标或下一步行动。",
        "en": "It did not provide specific experiment design, metrics, or next actions."
      }
    ],
    "gains": [
      {
        "zh": "完整提示教给了如何将犹豫转化为最小实验，包括假设分析和7天计划。",
        "en": "The full prompt taught how to turn hesitation into a minimal experiment including assumption analysis and 7-day plan."
      },
      {
        "zh": "它要求用英文写并控制词数，确保回答精确和简洁。",
        "en": "It required writing in English and controlling word count to ensure precise and concise answer."
      },
      {
        "zh": "它只指定了一步明天行动，避免了空想的多个建议。",
        "en": "It only specified one step for tomorrow's action, avoiding multiple vague suggestions."
      }
    ]
  },
  {
    "id": "talent",
    "caseZh": "学生觉得自己“没天赋”：小时候画公交线路图被说没用；总爱问为什么被批评；羡慕纪录片剪辑师；小组头脑风暴让她很累，一对一访谈却很兴奋。",
    "caseEn": "A student feels “talentless”: drew bus maps as a kid and was told it was useless; was scolded for asking why; envies documentary editors; group brainstorms drain her, 1:1 interviews light her up.",
    "simpleZh": "我有什么天赋？我感觉自己没什么特长。",
    "simpleEn": "What talent do I have? I feel like I have none.",
    "simpleAnswerEn": "Everyone feels talentless sometimes, but it's not true. You drew bus maps as a kid and designed routes for classmates, showing creativity and pattern recognition, even if told it's useless. Asking why in class repeatedly, despite scolding, indicates curiosity and critical thinking. Organizing chaotic information comes easy to you, suggesting synthesis skills. Envy for documentary editors points to storytelling and editing talent. Interviews energize you with personal connections, while groups drain you due to chaos. So your talents are in visualization, inquiry, organization, and empathy. Don't let others label things useless; explore what lights you up.",
    "complexAnswerEn": "Personal Talent User Manual\n\n底层天赋\nFrom your background, the underlying talents include creative spatial mapping, evident in drawing bus route maps and creating the shortest home routes for classmates without any external request. This demonstrates an innate ability to perceive patterns in transportation systems and optimize them intuitively. Your persistent questioning of 'why' in classroom settings, even when told it delays progress, showcases a talent for deep analytical thinking and a desire to understand underlying reasons. This curiosity is valuable in investigative or research-oriented roles. The ability to organize a chaotic jumble of information, which others find difficult, points to a talent in bringing clarity and structure to disorder. Your enthusiasm for one-on-one interviews and transforming others' stories into timelines reveals a talent for empathetic connection and narrative synthesis. Envy for documentary editors who can edit extensive footage into an 8-minute segment that moves viewers emotionally indicates a talent in precise editing and emotional storytelling.\n\n阴影面\nThe shadow side includes the frustration from being criticized for asking why, which might lead to self-doubt and hesitation in situations requiring questions. Envy towards documentary editors could foster feelings of inadequacy and comparison, making you feel like you have no talents. The unconscious competence in organizing information might cause you to undervalue your skills, as you wonder why you need to learn it. These shadows can be managed by building self-awareness and celebrating your unique ways of processing the world.\n\n能量地图\nYour energy map shows that you are energized by focused one-on-one interactions, such as interviews and organizing stories into timelines, which allow for personal depth and creative flow. You are drained by multi-person brainstorms and improvisational performances, which feel chaotic and require excessive social energy. This energy map is key to identifying activities that recharge you and avoid depletion.\n\n适合的环境/工作/合作方式\nYou are best suited to environments that allow for solitary creative work, such as quiet spaces for designing maps or editing sessions. Work environments that involve media production, urban planning, or information management would play to your strengths. In terms of collaboration, you prefer one-on-one settings or small groups that value depth over quantity. Avoid large group dynamics and high-pressure brainstorming to maintain your energy levels. Seek partners who engage in meaningful conversations and appreciate your questioning nature.\n\n30 天验证实验\nTo verify these talents, undertake a 30-day experiment where you practice organizing one chaotic piece of information or story into a timeline or map each day. Use a journal to track your energy levels before and after each activity on a scale of 1 to 10. Additionally, engage in at least one one-on-one interview per week and note the insights gained. At the end of the period, review your journal to identify which talents energize you most and how they align with your interests. Adjust your daily habits by increasing solo creative tasks and reducing group activities. This practical experiment will help you confirm and apply your hidden talents effectively.",
    "gaps": [
      {
        "zh": "简易答案没有使用提供的具体材料细节来描述天赋",
        "en": "The simple answer did not use the provided materials to detail specific talents like map drawing and questioning."
      },
      {
        "zh": "简易答案缺少能量地图和适合方式的描述",
        "en": "It missed describing the energy map and suitable environments and collaboration methods."
      },
      {
        "zh": "简易答案没有包括30天验证实验",
        "en": "There was no 30-day verification experiment included in the simple answer."
      }
    ],
    "gains": [
      {
        "zh": "完整提示要求使用材料并结构化成使用说明书",
        "en": "The full prompt required using the given materials and structuring them into a user manual."
      },
      {
        "zh": "它指定了必须包含的五个具体部分：底层天赋、阴影面等",
        "en": "It specified the five required sections: underlying talents, shadow side, etc."
      },
      {
        "zh": "添加了30天验证实验作为实践工具",
        "en": "It added the 30-day verification experiment as a practical tool."
      }
    ]
  },
  {
    "id": "life-design",
    "caseZh": "23 岁刚毕业。父母希望考公务员。她喜欢博物馆教育实习。很担心钱。",
    "caseEn": "23, just graduated. Parents want the civil-service exam. She loved a museum-education internship. Money anxiety is high.",
    "simpleZh": "我对未来很迷茫，接下来该走哪条路？",
    "simpleEn": "I'm lost about the future. Which path should I take?",
    "simpleAnswerEn": "I'm lost about the future. At 23, just graduated, parents want the civil-service exam, you loved museum-education internship, money anxiety high. I think the best path is to prepare for the exam to get stability, while applying for museum internships part-time to keep your passion alive. It's important to manage your health and energy, maybe set a schedule for both. Don't forget to talk to your parents about your interests to reduce family pressure. This way you can balance dreams with reality.",
    "complexAnswerEn": "Current Situation Interpretation: 23, just graduated, health 7/10, work 6, entertainment 4, love 5. Gravity: parents' civil service exam expectation, can't change rent prices. Designable: prepare exam and museum part-time prototype. Work view: explain complex to strangers. Life view: meaningful = child understands artifact. Flow: explain bronze to kids. Consumption: cram till midnight. Money: afford rent in 18 months, no delaying for dreams.\nTrue Problem Definition: Design a life that balances family expectations with passion for museum education, managing money anxiety and energy to make a difference in children's understanding of artifacts.\nEnergy Map: High energy in flow activities like teaching artifacts; moderate in work; low in prep and pressures. Boost by scheduling high-energy tasks.\nThree Distinct Five-Year Odyssey Plans\nPlan 1: Focus on exam success first, then pivot to museums. 5 years: stable civil servant educator.\nPlan 2: Dive into museums full-time, exam as backup. 5 years: museum professional with qualification.\nPlan 3: Hybrid, 3 hrs exam prep/week + museum work. 5 years: balanced income, meaningful work.\nPrototype Action List\n1. Experiment: Submit 5 museum job applications this month.\n2. Experiment: Study 1 exam topic 30 min/day.\n3. Experiment: Volunteer explaining artifacts to kids, note feedback.\nOne Sentence Failure Immunity: Even if plans fail, I will keep prototyping until the path fits my meaningful life view.",
    "gaps": [
      {
        "zh": "简易答案没有定义真问题，也没有能量地图",
        "en": "The simple answer missed defining the true problem and creating an energy map."
      },
      {
        "zh": "简易答案没有给出三个五年奥德赛计划",
        "en": "The simple answer missed providing three distinct five-year odyssey plans."
      },
      {
        "zh": "简易答案没有包括原型行动清单和失败免疫",
        "en": "The simple answer missed including prototype action lists with experiments and a failure immunity statement."
      }
    ],
    "gains": [
      {
        "zh": "完整提示教给了用斯坦福人生设计课的结构化方法",
        "en": "The full prompt added the structured Stanford life design method with specific sections."
      },
      {
        "zh": "完整提示要求把人生当成可试错的项目并提供原型实验",
        "en": "The full prompt added treating life as a prototype project with small experiments."
      },
      {
        "zh": "完整提示强调了能量管理和失败免疫来避免常见陷阱",
        "en": "The full prompt added energy mapping and failure immunity to avoid common pitfalls."
      }
    ]
  }
];

export const DEMO_BY_ID: Record<string, PromptDemo> = Object.fromEntries(
  DEMOS.map((d) => [d.id, d]),
);
