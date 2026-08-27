import { pinyin } from "pinyin-pro";
import { useMemo } from "react";
import { useSettings } from "@/lib/settings";
import { cn } from "@/lib/utils";

type Token =
  | { kind: "zh"; ch: string; py: string }
  | { kind: "other"; value: string }
  | { kind: "space" }
  | { kind: "nl" };

export function PinyinText({
  text,
  className,
  tone = "paper",
}: {
  text: string;
  className?: string;
  tone?: "paper" | "ink";
}) {
  const ruby = useSettings((s) => s.ruby);
  const tokens = useMemo(() => tokenize(text), [text]);

  if (!ruby) {
    return <span className={className}>{text}</span>;
  }

  const pyColor = tone === "ink" ? "text-paper/55" : "text-muted";

  return (
    <span className={cn("pinyin-run", className)}>
      {tokens.map((t, i) => {
        if (t.kind === "nl") return <br key={i} />;
        if (t.kind === "space") return <span key={i}>{" "}</span>;
        if (t.kind === "other") {
          return (
            <span
              key={i}
              className="inline-flex flex-col items-center justify-end px-px py-1"
            >
              <span className="mb-0.5 h-2.5 select-none" aria-hidden />
              <span className="leading-none">{t.value}</span>
            </span>
          );
        }
        return (
          <span
            key={i}
            className="inline-flex flex-col items-center justify-end px-0.5 py-1"
          >
            <span
              aria-hidden
              className={cn(
                "mb-0.5 h-2.5 select-none font-sans text-[9px] leading-none font-medium",
                pyColor,
              )}
            >
              {t.py}
            </span>
            <span className="leading-none">{t.ch}</span>
          </span>
        );
      })}
    </span>
  );
}

function tokenize(text: string): Token[] {
  const raw = pinyin(text, {
    type: "all",
    toneType: "symbol",
    nonZh: "consecutive",
    v: true,
  }) as { origin: string; pinyin: string; isZh: boolean }[];

  const out: Token[] = [];
  for (const item of raw) {
    if (item.isZh && item.pinyin) {
      for (const ch of item.origin) {
        out.push({
          kind: "zh",
          ch,
          py: item.origin.length === 1 ? item.pinyin : pinyin(ch, { toneType: "symbol", v: true }),
        });
      }
      continue;
    }
    for (const part of item.origin.split(/(\n)/)) {
      if (!part) continue;
      if (part === "\n") {
        out.push({ kind: "nl" });
        continue;
      }
      for (const piece of part.split(/( +)/)) {
        if (!piece) continue;
        if (/^ +$/.test(piece)) out.push({ kind: "space" });
        else out.push({ kind: "other", value: piece });
      }
    }
  }
  return out;
}
