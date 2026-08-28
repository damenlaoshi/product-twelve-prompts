export type CompareBullet = { zh: string; en: string };

export type PromptDemo = {
  id: string;
  caseZh: string;
  caseEn: string;
  simpleZh: string;
  simpleEn: string;
  simpleAnswerZh: string;
  simpleAnswerEn: string;
  complexAnswerZh: string;
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
    ],
    "simpleAnswerZh": "您应该坚持学习人工智能（AI），因为它是当今就业市场上的宝贵技能，但如果20分钟后就放弃感到沮丧，这可能表明教程并不适合您。尝试切换到交互式平台、YouTube频道或提供更多实际例子的免费在线课程。作为三年级学生，如果您不热爱它，您仍然可以改变专业，但首先评估您觉得人工智能哪些方面有趣或无聊。或许是节奏太慢或概念太抽象。用小项目实验看看是否能建立动力。如果不奏效，改变方向也没关系。",
    "complexAnswerZh": "模拟4轮对话：\n问题1：人工智能（AI）教程中哪些具体元素导致您在20分钟后放弃？学生：理论内容过于丰富，但缺乏足够的实际例子。\n问题2：您希望通过学习AI实现什么，以及这如何与您当前的困境相关？学生：我想要创建AI应用，但感觉在基础知识上迷失了方向。\n问题3：您有关于学习偏好或背景的任何事实，我们应该考虑吗？学生：我是一名三年级学生，喜欢编码但不喜欢抽象讲座。\n问题4：您对是否继续还是改变专业有什么价值判断吗？学生：我质疑AI是否适合我的技能和兴趣。\n最终输出：\n- 我的初始问题：我想学习AI但我一直放弃。\n- 我想解决的真正问题是：问题是“AI不适合我”还是“我从未遇到过适合我学习方式的AI形式”。\n- 已确认的事实：三年级学生；教程放弃后约20分钟；喜欢编码；不喜欢抽象讲座；正在考虑改变专业。\n- 未经验证的假设：教程是主要障碍；AI不适合学生的能力；放弃意味着这个领域不适合。\n- 关键变量：实际与理论兴趣；时间；替代资源；是否“改变专业”是在解决无聊还是避免学习设计问题。\n- 一个立即可采取的新问题：本周您可以构建一个什么小型AI东西，在不到两个小时内产生可见结果？"
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
    ],
    "simpleAnswerZh": "过拟合（Overfitting）是机器学习中的一个问题，其中模型对训练数据学得太好，包括噪声在内，导致无法泛化到新数据。它发生在模型对可用数据过于复杂时。例如，如果你有一个房价数据集，并拟合一个非常高阶的多项式，它会完全匹配训练点，但错误地预测新房屋。这与欠拟合（Underfitting）不同，欠拟合是模型太简单而错过了模式。为了避免过拟合，使用正则化（Regularization）、交叉验证（Cross-validation）或更简单的模型。重要的是通过比较训练和测试性能来检查你的模型是否过拟合。",
    "complexAnswerZh": "1. 小白版：用一个生活化的例子讲清楚它是什么。不要用行话。\n小白版：想象一下你正在学习开车。老师给你很多不同停车位的停车例子。如果你只记住每个停车场的具体位置和障碍物，而不是学习如何安全停车，那么当你去一个新的停车场时，可能会撞到东西。这就是过拟合——模型对训练例子记住了太多，所以无法将技能应用到新情况。\n2. 专业版：讲清核心机制、适用边界、常见误解。\n专业版：过拟合（Overfitting）核心机制是模型拟合了训练数据中的噪声和随机变化，而不是真正的信号。这导致训练数据上表现优秀，但对未见过的数据泛化差。它发生在模型复杂度超过数据复杂度的边界，例如数据集太小而参数太多或没有正则化（Regularization）。常见的误解是过拟合只发生在深度学习模型中，或者认为模型整体表现差，其实它只是没有很好地泛化。\n3. 对照：把小白说法和专业术语一一对应。\n对照：\n小白说法：只记住每个停车场的具体位置和障碍物 -> 专业术语：记忆特定的训练实例\n小白说法：遇到新停车场就容易撞到东西 -> 专业术语：对未见数据的泛化差\n小白说法：没学到安全停车的技巧 -> 专业术语：拟合噪声而不是信号\n4. 易错点：列出最容易理解错的地方。\n易错点：\n- 将过拟合与欠拟合混淆：过拟合发生在模型太复杂时，而欠拟合是模型太简单。\n- 认为过拟合只发生在神经网络中：它可以发生在像高阶多项式线性回归这样的简单模型中。\n- 认为更多数据可以解决过拟合：即使有大量数据，有时也需要正则化技术。\n- 误以为模型是‘差’的：实际上它在训练数据上准确率高，但在测试数据上低。\n5. 自查：给我 3 个问题，用来检验我是不是真懂了。\n自查：\n1. 你能举一个日常生活中过拟合的例子吗？\n2. 过拟合和欠拟合的主要区别是什么？\n3. 你会如何检查机器学习模型是否过拟合？"
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
    ],
    "simpleAnswerZh": "人们每天打开 Duolingo（多邻多）来维持他们的语言学习连胜。该系统通过在用户错过一天时重置来鼓励一致性，制造出紧迫感和动力感。用户会收到通知，并通过积分和等级看到进度。由于游戏化，它让人上瘾，让学习感觉像在玩游戏。许多人一旦开始连胜，就很难跳过一天。这有助于建立每天练习的习惯，这对于语言习得至关重要。害怕失去连胜让他们不断回来。",
    "complexAnswerZh": "1. 它解决了为初学者和中级用户建立一致每日语言学习习惯的问题，这些用户在动机和健忘方面挣扎。它针对那些想学习语言但需要每天练习的人。\n2. 结构和流程如下：应用发送每日通知提醒用户打开它。然后用户完成一个简短的课程，如果连续完成会延长连胜。视觉指示器如燃烧的火焰显示连胜长度。如果错过，会触发重置和激励信息。\n3. 使其与其他普通连胜应用区分开来的关键选择包括：直接将连胜与教育内容整合，使语言练习成为连胜行动；通过威胁打破连胜使用强烈的损失厌恶；并将奖励如经验值和心与学习任务本身紧密联系，而不是通用积分。\n4. 完成标准是达到连续天数的连胜，包括7、30或100天的里程碑以获得徽章或排行榜。最终目标是语言练习的长期一致性。\n5. 可转移的模式包括每日承诺设备、提醒通知和损失厌恶等心理触发器。此案例特有的只有将语言课程具体嵌入连胜机制和使用卡通猫头鹰进行参与。\n- 可复用规则：1. 使每日行动成为连胜的核心。2. 使用损失厌恶来增加动力。3. 通过通知发送及时提醒。4. 将奖励紧密链接到行动。5. 设置渐进里程碑。\n- 操作检查清单：1. 定义要跟踪的确切每日习惯。2. 实现带有重置逻辑的连胜计数器。3. 添加提醒功能。4. 设计反馈和视觉元素。5. 根据用户反馈测试和迭代。\n- 30分钟小练习：花30分钟为新习惯如每天喝水创建一个连胜系统，包括一个样例提醒脚本和一个简单的连胜维护决策树。"
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
    ],
    "simpleAnswerZh": "Spotify（斯波蒂法）是今天最受欢迎的音乐流媒体服务之一。它提供了来自世界各地的海量歌曲、专辑和艺术家的库。该平台提供了个性化播放列表和推荐，帮助用户发现新音乐。许多人选择Spotify是因为其用户友好的界面、社交分享选项以及离线听歌选项。它还非常注重播客，这增加了其吸引力。与Apple Music（苹果音乐）和YouTube Music（优酷音乐）相比，Spotify拥有更大的用户基础，并多年来一直在完善其功能。其创新的音乐发现方法使其在听众中保持受欢迎。",
    "complexAnswerZh": "核心结论\nSpotify（斯波蒂法）继续吸引用户超过Apple Music（苹果音乐）和YouTube Music（优酷音乐），主要得益于其庞大的音乐库、先进的推荐算法和集成的播客服务。虽然Apple Music受益于与Apple设备的无缝集成，YouTube Music受益于视频内容，但Spotify专注于音频流媒体和社区功能的路径在许多市场中导致了更高的用户留存率。这一选择是由更好的个性化功能和更低的优质功能有效成本驱动的。用户仍然选择Spotify是因为其卓越的发现工具和大量的用户生成内容。这解释了尽管存在竞争，仍持续的偏好。\n\n关键时间线（3–5个节点）\n1. 2006年：由Daniel Ek（丹尼尔·埃克）和Martin Lorentzon（马丁·洛伦茨松）在瑞典斯德哥尔摩创立，作为音乐发现平台。\n2. 2008年：作为免费服务推出，附带广告，并扩展到按需付费流媒体。\n3. 2011年：与主要唱片公司（Universal, Warner, EMI）签订交易，启用大型音乐目录。\n4. 2014年：通过IPO上市，为扩展筹集资金。\n5. 2018年：收购The Echo Nest（回声巢），提升音乐推荐技术。\n\n广告支持的免费层等早期选择创造了依赖用户数据的路径依赖性，从而导致今天的主导地位。\n\n横向比较（使用几句话，不要假表）\n使用库大小、定价、发现工具、播客集成和生态系统兼容性等维度：Spotify提供了最大的独立音乐选择和通过Discover Weekly（发现每周）的卓越算法发现。它有更低的优质定价和强大的播客功能。Apple Music在Apple生态系统集成和无损音频选项方面表现出色，而YouTube Music提供了免费访问、广告和视频关联但音乐重点较小。用户选择Spotify是因为其整体平衡和音频体验的创新。\n\n未来可能的路径1\nSpotify可能会集成更多AI（人工智能）驱动的社交功能，并扩展到现场音乐活动或AR（增强现实）体验，以进一步与竞争对手区分开来。\n\n待确认问题\n关键地区的确切市场份额数字是多少？用户人口统计如何影响对Spotify功能的偏好？人工智能进步将如何影响推荐准确度？"
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
    ],
    "simpleAnswerZh": "其实，这个说法并不完全准确。每天喝8杯水是一个常见的建议，但这并不是必须要做的——它更像是一个指导原则。没有任何具体的2023年研究证明每个人都需要正好2升水；水分需求因个人因素如年龄、体重、运动和气候而异。虽然脱水可以引起头痛，但头痛还有许多其他原因，比如压力、饥饿或鼻窦问题。所以，头痛并不总是意味着你脱水了。这里的建议过于僵化，可能导致人们不必要地担心或忽略其他健康问题。最好保持水分充足，但要听从自己的身体。",
    "complexAnswerZh": "可验证的事实：\n1. “你必须每天喝8杯水。” 这显然是错误的。“8杯水”的规则是一个流行的迷思，并不是基于科学的严格要求。实际需求取决于许多个人变量。\n2. “2023年的一项研究证明每个人都需要正好2升水。” 这是有争议的。没有任何可信的2023年研究确立所有人的确切2升要求。水分指南是广泛且个性化的。\n3. “喝得少的人会头痛。” 这基本正确但需要缩小范围。虽然脱水是头痛的已知原因，但并非所有喝得少的人都会发生，并且其他因素起作用。\n4. “所以如果你头痛你就脱水了。” 这显然是错误的。头痛可以有许多原因，包括紧张性头痛、偏头痛、其他原因导致的脱水，甚至非身体问题。\n\n从事实得出的结论：\n得出的结论是，必须严格遵守每天正好2升水来预防头痛，并且任何头痛都表明脱水，这会阻止减少饮水并将8杯水规则推广为绝对要求。\n\n价值判断：\n这个陈述做出了一个价值判断，认为水的摄入是最重要的健康因素，暗示不遵循它会导致像头痛这样的不良健康结果，同时淡化了其他健康实践的重要性。\n\n推理检查：\n无法做出这种推论，因为事实不支持绝对结论。隐藏的假设是所有人都需要相同数量的水，并且头痛仅或主要是由脱水引起的。推理混淆了相关性和因果关系，假设少喝水直接导致头痛，并且头痛直接表明脱水。省略的信息包括检查水分更好的方法，如尿液颜色和体积、饮食在水分中的作用，以及头痛需要专业医学评估。\n\n可信事实列表：\n- “必须喝8杯水”的说法：显然是错误的。\n- 2023年研究的说法：有争议。\n- 少喝水与头痛之间的联系：基本正确但需要缩小范围。\n- 头痛作为脱水指标：显然是错误的。\n\n推理链漏洞：\n1. 从一般建议跳到“必须”而没有证据。\n2. 因果关系的双向误用。\n3. 缺乏对头痛多因素原因的考虑。\n\n更合理的强化版本：\n一般建议每天喝约2升水，但这因个人情况而异。脱水可能导致头痛，但许多其他情况也会导致头痛。头痛本身不能确认脱水。为了准确评估，监测症状，如果头痛频繁，请咨询医生。重点应放在可持续的水分习惯上，而不是严格的配额。\n\n总体可信度评级：低。原始陈述将未经证实的和夸大的说法作为事实，这可能会误导人们关于基本健康实践，并可能延迟寻求头痛的适当医疗护理。"
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
    ],
    "simpleAnswerZh": "您好，为了解决您在二手书小程序上70%的消息没有回复的问题，这会影响销售，重点关注用户参与度。改进新消息的通知，并添加书籍建议或快速回复选项等功能。分析数据找出模式，比如深夜回复率较低。在校园推广小程序吸引更多学生。确保它适合忙碌时间表的用户使用。这应该能提高回复率和完成交易。测试不同方法并收集用户反馈也很不错。小团队要优先高影响力的变化，比如更好的通知。",
    "complexAnswerZh": "由于信息不足，最关键的问题是：用户为什么不回复以及他们面临什么障碍？我们假设如下：我们没有做过用户访谈，只看到后端数据表明11点后的帖子回复率较低。继续这个假设，这里是针对校园二手书小程序上70%消息无回复问题的专家咨询，以仅有两个学生开发者增加完成销售。\n\n专家1 - UX专家：将问题重新定义为用户在消息处理过程中感到不知所措或缺乏动力，将潜在销售转化为无互动。提出方案：创建直观的聊天界面，包含常见书籍查询的模板和自动补全建议。最大风险：由于小团队，开发时间增加可能会延迟应用更新。\n\n专家2 - 销售策略专家：将问题重新定义为缺少激励因素，使用户在交易中犹豫。提出方案：添加即时书籍预览、价格谈判工具和后续提醒功能。最大风险：复杂功能可能混淆用户并降低采用率。\n\n专家3 - 数据分析师：将问题重新定义为消息传递中的时机和相关性不佳。提出方案：实施预测算法来建议最佳回复时间并突出活跃列表。最大风险：过度依赖数据可能忽略定性用户反馈。\n\n专家们相互提问：UX专家问销售策略专家，仅靠激励是否能解决缺乏兴趣而不需良好设计。销售策略专家问UX专家，模板是否足够而不需动力。数据分析师问销售是否提醒有效而不需时机优化。销售问数据算法是否能弥补差的UX。UX问数据预测在未测试的情况下是否准确。\n\n共同事实：70%的低回复率影响销售完成。小团队只有两个学生。目标是销售而非下载。后端观察到11点后回复率较低。\n\n真实分歧：UX和销售在设计还是激励是首要问题上存在分歧。销售和数据在提醒还是算法更重要上存在分歧。UX和数据在整合所有还是单独修复上存在分歧。\n\n背后的假设：UX假设差的界面导致无回复。销售假设缺乏激励。数据假设时间模式是因果的。\n\n综合最优方案：通过启动结合的功能集合成，首先是基于时间的通知和基本模板，然后是激励，通过针对11点假设的快速用户调查验证，衡量对回复的影响。\n\n剩余风险：小团队的实施能力；新元素可能导致用户疲劳；未知的长期影响；需要持续监控。"
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
    ],
    "simpleAnswerZh": "改进你的每周会议可以从提前制定议程开始，让每个人都有准备。鼓励团队成员通过共享渠道提前贡献想法和更新。设置计时器来保持讨论集中且有轨迹。会议后，收集团队反馈，了解他们觉得有用的和可以改进的。这种有条不紊的方法会使会议更有效率，不再是浪费时间。此外，考虑为会议的不同部分使用不同的格式，比如头脑风暴会议或更新。目标是使其协作且有结果导向。",
    "complexAnswerZh": "用第一性原理重看这个「周会没用」的问题。\n\n已确认事实：8 人团队，每周五下午开 90 分钟全员会。没人提前写纪要或议程。创始人相信「好公司都开会」，于是不断加环节（分享、表彰、同步），会议越来越长。\n\n未验证假设：会议没用只是因为没准备；加更多内容就会有用；行业惯例要求靠例会来对齐。\n\n真正目标：对齐、分享信息、激励、保证产出。\n\n现实约束：90 分钟、8 人、创始人对会议形式的影响力。\n\n暂时放下行业惯例，从基本事实推：人需要高效协调和同步。小团队完全可以用更短时间、更好系统做到这一点。\n\n新路径：改成异步。每人会前交一份短书面更新。会议只用来处理「写不下来、必须当场拍板」的事项。\n\n成立前提：清晰的书面更新 + 尽量少的会议，足以让小团队对齐。\n\n最小验证动作：建一份共享文档写每周进展；会上只讨论未解决项。试两周，量时间和满意度。\n\n原方案不断加环节，只是表面修补：在治症状，没改「默认靠开会沟通」这个底层假设。"
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
    ],
    "simpleAnswerZh": "为了阻止人们占用图书馆座位，我们可以让图书馆工作人员定期巡逻该区域，并在有人离开时移动物品。我们还可以张贴更多标志提醒学生要体谅他人并限制他们在座位上的时间。另一个想法是创建更多学习室或为个人物品提供储物柜。这个问题在许多图书馆中很常见，这些解决方案可以帮助改善情况。通过实施这些措施，我们可以让图书馆对每个人都更愉快。此外，实现座位的数字预约系统可以完全防止占用。",
    "complexAnswerZh": "使用跨域借用来解决图书馆座位占用问题，我们遵循以下英语中的结构化步骤：\n\n1. 去除行业术语并使用中性语言来描述底层结构。核心问题是用户在座位上留下个人物品以便稍后使用，这会阻塞需要坐的人，从而浪费公共设施中的共享空间。\n\n2. 从至少三个不同领域找到类似案例。在城市停车管理中，司机将车停放数小时，阻止他人使用车位。在零售管理中，顾客将购物车留在通道中，打断商店流。在活动协调中，与会者将物品留在场馆以在表演期间保存座位。\n\n3. 提取可转移的机制，而非表面。机制是主动监控和及时干预以确保公平资源使用，而不仅仅是规则或标志。这涉及工作人员在场观察，并在占用者缺席时重新安置物品。\n\n4. 适应图书馆。在图书馆中，这意味着图书馆管理员巡逻通道，在主人缺席一段时间后重新安置书籍和包，同时使用中性标志告知用户关于问题和预期行为。\n\n5. 设计低成本、可逆转的7天小实验。选择图书馆的一个区域，让工作人员在座椅上监控一周。行动：观察占用并礼貌地要求移动物品或记录细节。成本：主要是工作人员时间，估计10-15小时。指标：占用事件数量和每小时平均可用座位数。继续或停止信号：如果占用减少至少30%且有积极反馈，则继续并扩大；如果没有或出现问题，则立即停止。\n\n这种方法从停车、零售和活动中借用有效实践，为图书馆创造有针对性、实用的解决方案。"
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
    ],
    "simpleAnswerZh": "应该先找工作还是直接读研究生？取决于情况。直接读 CS 硕士（计算机科学硕士）可以加速职业发展，快速建立深厚专业知识，并更快打开通向高级研究或更高薪科技角色的门。工作两年先积累实践经验，澄清兴趣点，并对进一步教育做出明智决定。对于22岁来自普通大学的年轻人，有家庭部分支付学费支持，并优先考虑5年选项而非起始薪水，我倾向于先工作来探索领域并决定是否适合读研究生。这种方法平衡了即时收入潜力与长期规划。在科技领域，经验往往与学位同样重要。",
    "complexAnswerZh": "选项 A - 直接读 CS 硕士（计算机科学硕士）\n最强理由：加速科技领域的职业发展，快速构建专业知识，有更好的研究机会和更高长期收入的潜力。\n适用条件：如果你倾向于研究或学术领域，并想从一开始就最大化教育投资，则是理想的。\n最大益处：更深的专业知识，通向 PhD（博士）路径，更强的资质。风险：如果家庭无法覆盖全部学费，可能产生高额债务；如果你不喜欢该项目，机会成本高。\n最难回答的反对意见：你可能不是研究导向的，这会让项目感觉像浪费；先工作可以提供更好的背景来选择研究生。\n\n选项 B - 工作两年先\n最强理由：积累真实世界的经验，帮助澄清职业兴趣，构建未来教育的网络和储蓄。\n适用条件：如果你想在投入进一步学习之前测试自己在行业中的契合度，则最佳。\n最大益处：实用技能，明智的决策能力，切换路径的灵活性。风险：延迟高级教育，在该期间可能面临工作不满。\n最难回答的反对意见：你可能会错过前沿知识，并面临较低初始薪水；这两年的时间可能无法保证更好的未来选择。\n\nA 和 B 之间的真正区别在于加速学术路径与经验学习和决策优化的焦点。\n\n可能改变结论的关键变量包括你在研究与产品开发方面的具体兴趣，两年后就业市场条件，以及家庭对学费的财务支持。\n\n最可能改变我结论的问题：你如何设想研究和产品角色之间的职业发展，以及哪些经历可以澄清你的偏好？\n\n假设我的回答是：“我还不知道自己喜欢做研究还是做产品。”\n\n明确判断：在研究和产品之间的不确定条件下，优先考虑5年选项而非起始薪水，我推荐选项 B：先工作两年。这段时间可以帮助你探索兴趣并做出更明智的决定。\n\n接下来的 3 个行动步骤：1. 针对初级 CS（计算机科学）或软件角色，以获得实践经验。2. 与专业人士建立网络，并承担涉及编码和用户导向问题解决的项目。3. 两年后，评估你的经验并决定申请硕士项目或行业职位。"
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
    ],
    "simpleAnswerZh": "是的，你应该为外国留学生创办一份中文学习通讯。通讯可以帮助每周分享语言学习技巧和文化信息。利用你有限的晚上5小时，你可以投入时间创建内容而不必太有压力。你可以使用免费工具来写作和分发它。小步开始，通过大纲想法并与几个人分享。我认为这是一个好主意，因为它符合你的兴趣并且可能会有回报。如果它不成功，你总是可以改变计划。总的来说，试试看，看它如何发展。",
    "complexAnswerZh": "这里是把你的犹豫变成最小实验的方法：\n\n1. 决定这个成功还是失败的三个假设是：\n- 假设1：外国留学生对接收一份包含每周文化主题和词汇解释的双语中文学习通讯感兴趣。\n- 假设2：我可以使用仅有的晚上5小时来维持定期写作计划而不至于 burnout（烧尽）。\n- 假设3：我可以制作并分发内容，即使没有现有受众，也能吸引至少一些初始读者。\n\n2. 最关键的假设是假设1。它必须首先被测试，因为如果目标受众没有真实需求，整个项目就是毫无意义的，会浪费时间。早期测试兴趣允许我们调整或在更深入投资前停止。\n\n3. 低成本、可逆转的7天最小实验设计：\n- 行动：第1天，写一份通讯草稿，包含一个文化故事和5-10个新词汇解释。第2天，修改草稿以改善流畅性和吸引。第3天，使用免费工具简单格式化它。第4天，创建一个简短的推广信息。第5天，通过电子邮件或微信发送给10个潜在读者。第6天，从他们那里收集反馈。第7天，分析结果包括花费时间和读者回应。\n- 输入：每周大约5小时，使用免费资源如谷歌文档（Google Docs）写作、卡纳瓦（Canva）基本格式化，以及无付费广告。\n- 指标：成功完成每天的任务、总字数、每天花费时间、以及读者积极回应的数量。\n- 继续/停止信号：如果我能每天完成任务而不显著压力，并且收到至少3个积极反馈，则继续实验；如果任务超过可用时间或反馈负面或缺失，则立即停止。\n- 完成7天后，新知识：所需的现实时间投入、我能一致生产的內容质量、以及从外国留学生小测试组实际兴趣水平。\n\n明天，第一步是写第一份通讯草稿。"
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
    ],
    "simpleAnswerZh": "有时每个人都会觉得自己没有天赋，但事实并非如此。你小时候画公交地图，为同学设计路线，展示了创造力和模式识别能力，即使被告知这是无用的。反复在课堂上问‘为什么’，尽管被责骂，这表明了好奇心和批判性思维。整理混乱的信息对你来说很容易，这表明了综合技能。对纪录片编辑的羡慕表明了讲故事和编辑的天赋。采访让你充满个人连接的活力，而群体因为混乱而消耗你的精力。所以你的天赋在于可视化、探究、组织和同理心。不要让别人把东西说成无用；探索那些让你感到兴奋的东西。",
    "complexAnswerZh": "个人天赋用户手册\n\n底层天赋\n从你的背景来看，底层天赋包括创造性的空间映射，这在小时候画公交路线地图和为同学设计最短回家路线中体现出来，没有任何外部要求。这展示了天生感知交通系统模式并直观优化的能力。你在课堂上反复提问‘为什么’，即使被告知会耽误进度，这展示了深入分析思维和渴望理解底层原因的天赋。这种好奇心在调查或研究导向的角色中很有价值。整理他人难以处理的混乱信息的能力，表明了在混乱中带来清晰和结构的天赋。你对一对一采访的热情和将他人的故事转化为时间线的能力，揭示了同理心连接和叙事综合的天赋。对纪录片编辑的羡慕，他们能将大量素材编辑成8分钟让观众情感上受到触动的片段，表明了精确编辑和情感讲故事的天赋。\n\n阴影面\n阴影面包括因为被批评问为什么而产生的挫败感，这可能导致在需要提问的情况下自我怀疑和犹豫。对纪录片编辑的羡慕可能滋生不足感和比较，让你觉得自己没有天赋。在无意识中整理信息的能力可能导致你低估自己的技能，因为你想知道为什么需要学习它。这些阴影可以通过建立自我意识和庆祝你独特的世界处理方式来管理。\n\n能量地图\n你的能量地图显示，你通过专注的一对一互动获得能量，例如采访和将故事组织成时间线，这些互动允许个人深度和创造性流动。你被多人头脑风暴和即兴表演消耗精力，因为它们感觉混乱，需要过多的社交能量。这个能量地图是识别充电活动并避免耗竭的关键。\n\n适合的环境/工作/合作方式\n你最适合允许独自创造性工作的环境，例如安静的空间来设计地图或编辑会话。涉及媒体制作、城市规划或信息管理的职业环境会发挥你的优势。在合作方面，你偏好一对一设置或重视深度而非数量的小组。避免大型群体动态和高压头脑风暴以保持你的能量水平。寻找那些参与有意义的对话并欣赏你提问性质的伙伴。\n\n30 天验证实验\n为了验证这些天赋，进行一个30天的实验，每天练习将一个混乱的信息或故事组织成时间线或地图。使用日记跟踪每次活动前后的能量水平，从1到10。此外，每周至少进行一次一对一采访，并记录获得的见解。在期末，回顾你的日记，找出最让你感到充满活力的天赋以及它们如何与你的兴趣一致。通过增加独自创造性任务和减少群体活动来调整日常习惯。这个实际实验将帮助你有效地确认并应用你的隐藏天赋。"
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
    ],
    "simpleAnswerZh": "我对未来感到迷茫。23岁，刚毕业，父母希望你参加公务员考试，你热爱博物馆教育实习，金钱焦虑很高。我认为最好的路径是先准备公务员考试以获得稳定性，同时兼职申请博物馆实习来保持你的热情。管理健康和精力很重要，可以为两者制定一个日程表。不要忘记和父母谈谈你的兴趣爱好，以减少家庭压力。这样，你就可以在梦想和现实之间取得平衡。",
    "complexAnswerZh": "当前情况解读：23岁，刚毕业，健康7/10，工作6，娱乐4，爱情5。引力：父母期望参加公务员考试，无法改变房租价格。可设计：准备考试和博物馆兼职原型。工作观点：向陌生人解释复杂概念。生活观点：有意义=孩子理解文物。流动：向孩子解释青铜器。消费：通宵复习。金钱：18个月内支付房租，不为梦想耽误。\n真问题定义：设计一种生活，在家庭期望与博物馆教育的热情之间取得平衡，管理金钱焦虑和精力，以使孩子们对文物的理解有所不同。\n能量图：在教授文物的流动活动中能量高；在工作中中等；在准备和压力下能量低。通过安排高能量任务来提升。\n三个不同的五年 Odyssey 计划\n计划1：首先专注于考试成功，然后转向博物馆。5年：稳定的公务员教育者。\n计划2：全职投入博物馆，考试作为后备。5年：具有资格的博物馆专业人士。\n计划3：混合模式，每周3小时考试准备 + 博物馆工作。5年：收入平衡，有意义的工作。\n原型行动列表\n1. 实验：本月提交5份博物馆职位申请。\n2. 实验：每天研究1个考试主题30分钟。\n3. 实验：志愿向孩子解释文物，记录反馈。\n一句失败免疫：即使计划失败，我也会继续原型设计，直到路径符合我有意义的生活观点。"
  }
];

export const DEMO_BY_ID: Record<string, PromptDemo> = Object.fromEntries(
  DEMOS.map((d) => [d.id, d]),
);
