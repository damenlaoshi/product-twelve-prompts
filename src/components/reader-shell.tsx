import {
  BookOpen,
  Check,
  Minus,
  Plus,
  Type,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Glossary } from "@/components/glossary";
import { PromptCard } from "@/components/prompt-card";
import { Annotated } from "@/components/term";
import { Button } from "@/components/ui/button";
import { CLOSING, LEDE, SCENES, allPrompts, type Scene } from "@/data/reader";
import { useSettings, type FontSize } from "@/lib/settings";
import { cn } from "@/lib/utils";

export function ReaderShell() {
  const ruby = useSettings((s) => s.ruby);
  const english = useSettings((s) => s.english);
  const fontSize = useSettings((s) => s.fontSize);
  const setRuby = useSettings((s) => s.setRuby);
  const setEnglish = useSettings((s) => s.setEnglish);
  const setFontSize = useSettings((s) => s.setFontSize);
  const [glossary, setGlossary] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    void useSettings.persist.rehydrate();
  }, []);

  const ids = useMemo(
    () => ["lede", ...SCENES.map((s) => s.id), "closing"],
    [],
  );
  const active = useActiveId(ids);

  useEffect(() => {
    function onScroll() {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? Math.min(1, el.scrollTop / max) : 0);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      data-ruby={ruby ? "on" : "off"}
      className={cn(
        "min-h-dvh bg-paper text-ink",
        fontSize === "s" && "text-[15px]",
        fontSize === "l" && "text-[18px]",
      )}
    >
      <div
        className="pointer-events-none fixed top-0 right-0 left-0 z-40 h-0.5 bg-line"
        aria-hidden
      >
        <div
          className="h-full bg-seal transition-[width] duration-150 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      <header className="sticky top-0 z-30 border-b border-line/80 bg-paper/90 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center gap-2 px-4 sm:h-16 sm:px-6">
          <a href="#lede" className="mr-2 flex min-w-0 shrink-0 items-baseline gap-2">
            <span className="font-serif text-lg font-semibold tracking-wide text-ink sm:text-xl">
              十二式
            </span>
            <span className="hidden truncate font-sans text-[11px] tracking-[0.16em] text-muted uppercase sm:inline">
              Twelve Prompts
            </span>
          </a>

          <div className="ml-auto flex min-w-0 items-center justify-end gap-1 sm:gap-1.5">
            <TogglePill pressed={ruby} onPressedChange={setRuby} label="拼音" sub="Pinyin" />
            <TogglePill pressed={english} onPressedChange={setEnglish} label="英文" sub="EN" />
            <SizeControl value={fontSize} onChange={setFontSize} />
            <Button
              variant="subtle"
              size="pill"
              onClick={() => setGlossary(true)}
              className="pl-3 pr-3"
            >
              <BookOpen className="size-4" />
              <span className="hidden sm:inline">词表</span>
              <span className="sm:hidden">词</span>
            </Button>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl grid-cols-1 lg:grid-cols-[14rem_minmax(0,1fr)]">
        <aside className="hidden lg:block">
          <nav className="sticky top-20 px-6 py-10">
            <p className="mb-3 font-sans text-[11px] font-medium tracking-[0.16em] text-faint uppercase">
              Contents
            </p>
            <ol className="space-y-1">
              <TocLink href="#lede" active={active === "lede"} label="导读" en="Lede" />
              {SCENES.map((s) => (
                <li key={s.id}>
                  <TocLink
                    href={`#${s.id}`}
                    active={active === s.id}
                    label={`${s.numeral} ${s.titleZh}`}
                    en={s.titleEn}
                  />
                  {active === s.id ? (
                    <ol className="mt-1 mb-2 ml-3 space-y-0.5 border-l border-line pl-3">
                      {s.prompts.map((p) => (
                        <li key={p.id}>
                          <a
                            href={`#${p.id}`}
                            className="block py-1 font-sans text-[12px] text-muted hover:text-ink"
                          >
                            {p.n}. {p.nameZh}
                          </a>
                        </li>
                      ))}
                    </ol>
                  ) : null}
                </li>
              ))}
              <TocLink href="#closing" active={active === "closing"} label="写在最后" en="Coda" />
            </ol>
          </nav>
        </aside>

        <main className="min-w-0 px-4 pt-8 pb-24 sm:px-8 lg:px-10 lg:pt-12">
          <Hero english={english} />

          <nav className="mt-8 -mx-4 overflow-x-auto px-4 lg:hidden">
            <ul className="flex w-max gap-2 pb-1">
              {SCENES.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className={cn(
                      "flex h-10 items-center rounded-full px-3.5 font-sans text-sm whitespace-nowrap shadow-[var(--shadow-border)]",
                      active === s.id ? "bg-ink text-paper" : "bg-surface text-ink-soft",
                    )}
                  >
                    {s.numeral} {s.titleZh}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {SCENES.map((scene) => (
            <SceneBlock key={scene.id} scene={scene} english={english} />
          ))}

          <Closing english={english} />
        </main>
      </div>

      <Glossary open={glossary} onOpenChange={setGlossary} />
    </div>
  );
}

function Hero({ english }: { english: boolean }) {
  return (
    <header id="lede" className="scroll-mt-24">
      <p className="font-sans text-[12px] font-medium tracking-[0.18em] text-seal uppercase">
        Kazike · 卡兹克
      </p>
      <h1 className="mt-3 font-serif text-[2.6rem] leading-[1.1] font-semibold tracking-tight text-ink sm:text-6xl">
        十二式
      </h1>
      <p className="mt-2 font-sans text-sm tracking-[0.22em] text-muted uppercase">
        Twelve Prompts
      </p>
      <p className="zh mt-6 max-w-2xl font-serif text-[17px] text-ink-soft sm:text-lg">
        <Annotated text={LEDE.zh} />
      </p>
      {english ? (
        <p className="mt-3 max-w-2xl font-sans text-sm leading-relaxed text-muted">
          {LEDE.en}
        </p>
      ) : null}

      <ul className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-5">
        {SCENES.map((s) => (
          <li key={s.id} className="last:col-span-2 sm:last:col-span-1">
            <a
              href={`#${s.id}`}
              className="block rounded-lg bg-surface px-3 py-3 shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-150 hover:shadow-[var(--shadow-border-hover)]"
            >
              <span className="font-serif text-xs text-seal">{s.numeral}</span>
              <span className="mt-1 block font-serif text-sm font-medium text-ink">
                {s.titleZh}
              </span>
              <span className="mt-0.5 block font-sans text-[11px] text-muted">{s.titleEn}</span>
            </a>
          </li>
        ))}
      </ul>

      <p className="mt-6 font-sans text-[12.5px] leading-relaxed text-faint">
        Underlined words open a note: pinyin, English, and a short explanation.
        Turn on 拼音 to keep pronunciation above the word. Every prompt below is
        ready to copy.
      </p>
      <p className="mt-3 max-w-2xl font-sans text-[12.5px] leading-relaxed text-faint">
        每条下面有课堂对照：同一题目，先用一句简易提示，再用完整提示，答案由同一个模型生成。
        {english
          ? " Under each prompt: a classroom demo — same case, simple vs full, real model answers, then what improved."
          : null}
      </p>
    </header>
  );
}

function SceneBlock({ scene, english }: { scene: Scene; english: boolean }) {
  return (
    <section id={scene.id} className="mt-16 scroll-mt-24 sm:mt-20">
      <div className="mb-6 flex items-end gap-4 border-b border-line pb-4">
        <span className="font-serif text-4xl leading-none text-seal">{scene.numeral}</span>
        <div>
          <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
            {scene.titleZh}
          </h2>
          <p className="mt-1 font-sans text-sm text-muted">{scene.titleEn}</p>
        </div>
      </div>
      <p className="font-serif text-xl leading-snug text-ink">{scene.kickerZh}</p>
      {english ? (
        <p className="mt-1 font-sans text-sm text-muted">{scene.kickerEn}</p>
      ) : null}
      <p className="zh mt-4 max-w-2xl font-serif text-[17px] text-ink-soft">
        <Annotated text={scene.introZh} />
      </p>
      {english ? (
        <p className="mt-2 max-w-2xl font-sans text-sm leading-relaxed text-muted">
          {scene.introEn}
        </p>
      ) : null}

      <div className="mt-8 space-y-6">
        {scene.prompts.map((p) => (
          <PromptCard key={p.id} prompt={p} />
        ))}
      </div>
    </section>
  );
}

function Closing({ english }: { english: boolean }) {
  const count = allPrompts().length;
  return (
    <section id="closing" className="mt-20 scroll-mt-24 border-t border-line pt-12">
      <h2 className="font-serif text-2xl font-semibold text-ink">写在最后</h2>
      <p className="mt-1 font-sans text-sm text-muted">Coda</p>
      <p className="zh mt-6 max-w-2xl font-serif text-[17px] text-ink-soft">
        <Annotated text={CLOSING.zh} />
      </p>
      {english ? (
        <p className="mt-4 max-w-2xl font-sans text-sm leading-relaxed text-muted">
          {CLOSING.en}
        </p>
      ) : null}
      <p className="mt-8 font-sans text-xs tracking-wide text-faint">
        {count} copyable prompts · tap any underlined word · 卡兹克
      </p>
    </section>
  );
}

function TogglePill({
  pressed,
  onPressedChange,
  label,
  sub,
}: {
  pressed: boolean;
  onPressedChange: (v: boolean) => void;
  label: string;
  sub: string;
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={() => onPressedChange(!pressed)}
      className={cn(
        "flex h-9 items-center gap-1.5 rounded-full px-3 font-sans text-sm transition-colors duration-150",
        pressed ? "bg-ink text-paper" : "bg-transparent text-ink-soft hover:bg-paper-2",
      )}
    >
      <span
        className={cn(
          "grid size-3.5 place-items-center rounded-full border",
          pressed ? "border-paper bg-paper text-ink" : "border-line",
        )}
      >
        {pressed ? <Check className="size-2.5" strokeWidth={3} /> : null}
      </span>
      <span>
        {label}
        <span className="ml-1.5 hidden text-[10px] font-normal tracking-wide opacity-70 sm:inline">
          {sub}
        </span>
      </span>
    </button>
  );
}

function SizeControl({
  value,
  onChange,
}: {
  value: FontSize;
  onChange: (v: FontSize) => void;
}) {
  const order: FontSize[] = ["s", "m", "l"];
  const i = order.indexOf(value);
  return (
    <div data-size-control className="flex items-center max-sm:hidden">
      <button
        type="button"
        aria-label="Smaller type"
        className="grid size-9 place-items-center rounded-l-full text-ink-soft hover:bg-paper-2"
        onClick={() => onChange(order[Math.max(0, i - 1)])}
      >
        <Minus className="size-3.5" />
      </button>
      <span className="grid size-9 place-items-center text-muted" aria-hidden>
        <Type className="size-4" />
      </span>
      <button
        type="button"
        aria-label="Larger type"
        className="grid size-9 place-items-center rounded-r-full text-ink-soft hover:bg-paper-2"
        onClick={() => onChange(order[Math.min(order.length - 1, i + 1)])}
      >
        <Plus className="size-3.5" />
      </button>
    </div>
  );
}

function TocLink({
  href,
  active,
  label,
  en,
}: {
  href: string;
  active: boolean;
  label: string;
  en: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "block rounded-sm py-1.5 font-sans text-[13px] transition-colors duration-150",
        active ? "text-seal" : "text-ink-soft hover:text-ink",
      )}
    >
      <span className="block leading-tight">{label}</span>
      <span className="block text-[11px] text-faint">{en}</span>
    </a>
  );
}

function useActiveId(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (els.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const vis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (vis[0]?.target.id) setActive(vis[0].target.id);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.15, 0.4, 0.7] },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [ids]);

  return active;
}
