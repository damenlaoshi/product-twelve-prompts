# 十二式 · Twelve Prompts

An annotated Chinese reader of **Kazike (卡兹克)**’s 12 core prompts for working with any large language model.

Built for **foreign students of Chinese**: the article stays in Chinese, hard words open a glossary (pinyin + English), and you can turn pinyin on above every character in the copyable prompts.

Live idea: clarify a question → learn → solve → decide → know yourself.

## What’s inside

- 12 copyable prompts (Chinese + English)
- A **simple** one-line version of each prompt, plus a **full** version
- Classroom demos: same case, same model, simple vs full answers, and what improved
- Clickable vocabulary, searchable glossary, pinyin overlay, English gloss toggle

## Stack

TanStack Start, React, Tailwind CSS v4, Zustand, pinyin-pro.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:8080](http://localhost:8080).

```bash
npm run typecheck
npm run build
```

Optional: set `XAI_API_KEY` if you re-run `scripts/gen-comparisons.mjs` to regenerate the classroom demos. The checked-in answers do not need the key.

## Credit

Prompts and framing by **卡兹克 (Kazike)**. This site is a teaching edition: annotation, pinyin, bilingual notes, and simple-vs-full comparisons.

## License

MIT
