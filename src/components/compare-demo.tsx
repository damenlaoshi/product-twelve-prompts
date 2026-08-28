import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { PinyinText } from "@/components/pinyin-text";
import { Button } from "@/components/ui/button";
import type { PromptDemo } from "@/data/comparisons";
import { useSettings } from "@/lib/settings";
import { cn } from "@/lib/utils";

export function CompareDemo({
  demo,
  english,
}: {
  demo: PromptDemo;
  english: boolean;
}) {
  const [copied, setCopied] = useState(false);
  const [lang, setLang] = useState<"zh" | "en">("zh");
  const ruby = useSettings((s) => s.ruby);
  const simple = lang === "zh" ? demo.simpleZh : demo.simpleEn;

  async function copy() {
    try {
      await navigator.clipboard.writeText(simple);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section className="mt-6 rounded-lg bg-paper-2/60 p-4 sm:p-5">
      <header className="mb-4">
        <p className="font-sans text-[11px] font-medium tracking-[0.14em] text-faint uppercase">
          课堂对照 / Classroom demo
        </p>
        <h4 className="mt-1 font-serif text-lg font-semibold text-ink">
          同一题目，两种问法
        </h4>
        {english ? (
          <p className="mt-1 font-sans text-sm text-muted">
            Same case, same model. A one-line prompt vs the full prompt — so you
            can see what the extra structure is for.
          </p>
        ) : (
          <p className="mt-1 font-sans text-sm text-muted">
            同一案例、同一个模型。先用一句话问，再用完整提示问，对照质量差在哪。
          </p>
        )}
      </header>

      <div className="rounded-md bg-surface px-4 py-3 shadow-[var(--shadow-border)]">
        <p className="font-sans text-[11px] font-medium tracking-[0.12em] text-faint uppercase">
          题目 / Case
        </p>
        <p className="zh mt-1.5 font-serif text-[15px] text-ink-soft">
          <PinyinText text={demo.caseZh} />
        </p>
        {english ? (
          <p className="mt-1 font-sans text-sm leading-relaxed text-muted">{demo.caseEn}</p>
        ) : null}
      </div>

      <div className="mt-4 overflow-hidden rounded-md bg-ink">
        <div className="flex items-center gap-1 border-b border-paper/10 px-2 py-1.5">
          <span className="px-2 font-sans text-xs tracking-wide text-paper/55">简易版</span>
          <button
            type="button"
            onClick={() => setLang("zh")}
            className={cn(
              "h-9 rounded-sm px-3 font-sans text-sm transition-colors duration-150",
              lang === "zh" ? "bg-paper/10 text-paper" : "text-paper/55 hover:text-paper",
            )}
          >
            中文
          </button>
          <button
            type="button"
            onClick={() => setLang("en")}
            className={cn(
              "h-9 rounded-sm px-3 font-sans text-sm transition-colors duration-150",
              lang === "en" ? "bg-paper/10 text-paper" : "text-paper/55 hover:text-paper",
            )}
          >
            EN
          </button>
          <Button
            variant="ghost"
            size="sm"
            onClick={copy}
            className="ml-auto h-9 text-paper hover:bg-paper/10 hover:text-paper"
          >
            {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
            {copied ? "Copied" : "Copy"}
          </Button>
        </div>
        <pre
          className={cn(
            "p-4 font-sans text-sm whitespace-pre-wrap text-paper-2",
            lang === "zh" && ruby ? "leading-none" : "leading-relaxed",
          )}
        >
          {lang === "zh" ? <PinyinText text={demo.simpleZh} tone="ink" /> : simple}
        </pre>
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <AnswerPane
          kicker="简易答案"
          kickerEn="Simple answer"
          zh={demo.simpleAnswerZh}
          en={demo.simpleAnswerEn}
          ruby={ruby}
        />
        <AnswerPane
          kicker="完整答案"
          kickerEn="Full-prompt answer"
          zh={demo.complexAnswerZh}
          en={demo.complexAnswerEn}
          ruby={ruby}
          emphasize
        />
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <NoteList
          titleZh="简易问法丢掉了"
          titleEn="What the one-liner dropped"
          items={demo.gaps}
          english={english}
        />
        <NoteList
          titleZh="完整提示多出来的"
          titleEn="What the full prompt added"
          items={demo.gains}
          english={english}
          seal
        />
      </div>
    </section>
  );
}

function AnswerPane({
  kicker,
  kickerEn,
  zh,
  en,
  ruby,
  emphasize,
}: {
  kicker: string;
  kickerEn: string;
  zh: string;
  en: string;
  ruby: boolean;
  emphasize?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex min-h-0 flex-col rounded-md bg-surface shadow-[var(--shadow-border)]",
        emphasize && "shadow-[var(--shadow-border-hover)]",
      )}
    >
      <p
        className={cn(
          "border-b border-line px-4 py-2 font-sans text-[11px] font-medium tracking-[0.12em] uppercase",
          emphasize ? "text-seal" : "text-faint",
        )}
      >
        {kicker}
        <span className="ml-2 font-normal tracking-wide text-faint">{kickerEn}</span>
      </p>
      <div className="max-h-[28rem] overflow-auto px-4 py-3">
        <p
          className={cn(
            "zh font-serif text-[15px] whitespace-pre-wrap text-ink-soft",
            ruby ? "leading-none" : "leading-relaxed",
          )}
        >
          <PinyinText text={zh} />
        </p>
        <p className="mt-3 border-t border-line pt-3 font-sans text-sm leading-relaxed whitespace-pre-wrap text-muted">
          {en}
        </p>
      </div>
    </div>
  );
}

function NoteList({
  titleZh,
  titleEn,
  items,
  english,
  seal,
}: {
  titleZh: string;
  titleEn: string;
  items: { zh: string; en: string }[];
  english: boolean;
  seal?: boolean;
}) {
  return (
    <div>
      <p className={cn("font-serif text-sm font-medium", seal ? "text-seal" : "text-ink")}>
        {titleZh}
      </p>
      {english ? <p className="font-sans text-xs text-muted">{titleEn}</p> : null}
      <ul className="mt-2 space-y-2">
        {items.map((item) => (
          <li key={item.en} className="flex gap-2">
            <span
              className={cn(
                "mt-2 size-1.5 shrink-0 rounded-full",
                seal ? "bg-seal" : "bg-muted",
              )}
            />
            <div className="min-w-0">
              <p className="font-serif text-sm leading-relaxed text-ink-soft">{item.zh}</p>
              {english ? (
                <p className="mt-0.5 font-sans text-xs leading-relaxed text-muted">{item.en}</p>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
