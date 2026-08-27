import { Check, Copy } from "lucide-react";
import { useState, type ReactNode } from "react";
import { CompareDemo } from "@/components/compare-demo";
import { PinyinText } from "@/components/pinyin-text";
import { Annotated } from "@/components/term";
import { Button } from "@/components/ui/button";
import { DEMO_BY_ID } from "@/data/comparisons";
import type { PromptItem } from "@/data/reader";
import { useSettings } from "@/lib/settings";
import { cn } from "@/lib/utils";

export function PromptCard({ prompt }: { prompt: PromptItem }) {
  const english = useSettings((s) => s.english);
  const ruby = useSettings((s) => s.ruby);
  const [lang, setLang] = useState<"zh" | "en">("zh");
  const [copied, setCopied] = useState(false);

  const body = lang === "zh" ? prompt.promptZh : prompt.promptEn;

  async function copy() {
    try {
      await navigator.clipboard.writeText(body);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <article
      id={prompt.id}
      className="scroll-mt-28 rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] sm:p-7"
    >
      <header className="flex items-start gap-4">
        <span
          className="mt-0.5 grid size-11 shrink-0 place-items-center rounded-sm bg-seal font-serif text-lg font-semibold tabular-nums text-seal-fg"
          aria-hidden
        >
          {String(prompt.n).padStart(2, "0")}
        </span>
        <div className="min-w-0">
          <h3 className="font-serif text-xl font-semibold leading-snug text-ink sm:text-2xl">
            <PinyinText text={prompt.nameZh} />
          </h3>
          <p className="mt-1 font-sans text-sm tracking-wide text-muted">{prompt.nameEn}</p>
        </div>
      </header>

      <dl className="mt-6 space-y-5">
        <Field labelZh="适用" labelEn="When">
          <p className="zh font-serif text-[1.05em] text-ink-soft">
            <Annotated text={prompt.whenZh} />
          </p>
          {english ? <En>{prompt.whenEn}</En> : null}
        </Field>
        <Field labelZh="逻辑" labelEn="Logic">
          <p className="zh font-serif text-[1.05em] text-ink-soft">
            <Annotated text={prompt.logicZh} />
          </p>
          {english ? <En>{prompt.logicEn}</En> : null}
        </Field>
        <Field labelZh="要点" labelEn="Keys">
          <ul className="space-y-2.5">
            {prompt.points.map((p) => (
              <li key={p.en} className="flex gap-2.5">
                <span className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-seal" />
                <div className="min-w-0">
                  <p className="zh font-serif text-[1.05em] text-ink-soft">
                    <Annotated text={p.zh} />
                  </p>
                  {english ? <En>{p.en}</En> : null}
                </div>
              </li>
            ))}
          </ul>
        </Field>
        <Field labelZh="产出" labelEn="Output">
          <p className="zh font-serif text-[1.05em] text-ink-soft">
            <Annotated text={prompt.outputZh} />
          </p>
          {english ? <En>{prompt.outputEn}</En> : null}
        </Field>
      </dl>

      <div className="mt-6 overflow-hidden rounded-lg bg-ink">
        <div className="flex items-center gap-1 border-b border-paper/10 px-2 py-1.5">
          <button
            type="button"
            onClick={() => setLang("zh")}
            className={cn(
              "h-9 rounded-sm px-3 font-sans text-sm transition-colors duration-150",
              lang === "zh" ? "bg-paper/10 text-paper" : "text-paper/55 hover:text-paper",
            )}
          >
            中文<span className="hidden sm:inline"> Prompt</span>
          </button>
          <button
            type="button"
            onClick={() => setLang("en")}
            className={cn(
              "h-9 rounded-sm px-3 font-sans text-sm transition-colors duration-150",
              lang === "en" ? "bg-paper/10 text-paper" : "text-paper/55 hover:text-paper",
            )}
          >
            <span className="sm:hidden">EN</span>
            <span className="hidden sm:inline">English prompt</span>
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
            "max-h-[28rem] overflow-auto p-4 font-sans text-[13px] whitespace-pre-wrap text-paper-2",
            lang === "zh" && ruby ? "leading-none" : "leading-relaxed",
          )}
        >
          {lang === "zh" ? <PinyinText text={prompt.promptZh} tone="ink" /> : body}
        </pre>
      </div>

      {DEMO_BY_ID[prompt.id] ? (
        <CompareDemo demo={DEMO_BY_ID[prompt.id]} english={english} />
      ) : null}
    </article>
  );
}

function Field({
  labelZh,
  labelEn,
  children,
}: {
  labelZh: string;
  labelEn: string;
  children: ReactNode;
}) {
  return (
    <div>
      <dt className="mb-1.5 flex items-baseline gap-2 font-sans text-[11px] font-medium tracking-[0.14em] text-faint uppercase">
        <span>{labelZh}</span>
        <span className="text-line">/</span>
        <span>{labelEn}</span>
      </dt>
      <dd>{children}</dd>
    </div>
  );
}

function En({ children }: { children: ReactNode }) {
  return (
    <p className="mt-1.5 font-sans text-[13.5px] leading-relaxed text-muted">{children}</p>
  );
}
