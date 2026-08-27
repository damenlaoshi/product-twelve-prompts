import * as Popover from "@radix-ui/react-popover";
import { useMemo } from "react";
import { TERMS, type TermDef } from "@/data/reader";
import { useSettings } from "@/lib/settings";
import { cn } from "@/lib/utils";

export function Term({ term }: { term: TermDef }) {
  const ruby = useSettings((s) => s.ruby);

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button
          type="button"
          className={cn(
            "relative mx-px inline-block max-w-full border-0 bg-transparent p-0 align-baseline font-serif text-[length:inherit] leading-none text-ink",
            ruby && "pt-[1.12em]",
          )}
          aria-label={`${term.hanzi}, ${term.pinyin}, ${term.en}`}
        >
          {ruby ? (
            <span
              aria-hidden
              className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 rounded-sm bg-paper/90 px-0.5 font-sans text-[10px] leading-none font-medium whitespace-nowrap text-muted"
            >
              {term.pinyin}
            </span>
          ) : null}
          <span className="whitespace-nowrap border-b border-dashed border-seal/80">
            {term.hanzi}
          </span>
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          sideOffset={8}
          collisionPadding={16}
          className={cn(
            "z-50 w-[min(18rem,calc(100vw-2rem))] rounded-lg bg-ink p-4 text-paper",
            "shadow-[0_12px_40px_-12px_rgba(28,25,23,0.45)]",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
            "data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95",
            "origin-[var(--radix-popover-content-transform-origin)]",
          )}
        >
          <p className="font-serif text-lg font-medium tracking-wide">{term.hanzi}</p>
          <p className="mt-1 font-sans text-sm text-paper-2">{term.pinyin}</p>
          <p className="mt-2 font-sans text-sm font-medium text-seal-fg">{term.en}</p>
          <p className="mt-2 font-sans text-[13px] leading-relaxed text-paper-2/80">
            {term.note}
          </p>
          <Popover.Arrow className="fill-ink" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

export function Annotated({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const nodes = useMemo(() => parseAnnotated(text), [text]);
  return (
    <span className={className}>
      {nodes.map((node, i) =>
        node.kind === "text" ? (
          <span key={i}>{node.value}</span>
        ) : (
          <Term key={`${node.term.hanzi}-${i}`} term={node.term} />
        ),
      )}
    </span>
  );
}

type Node =
  | { kind: "text"; value: string }
  | { kind: "term"; term: TermDef };

function parseAnnotated(text: string): Node[] {
  const parts = text.split(/(\{[^}]+\})/g);
  return parts
    .filter((p) => p.length > 0)
    .map((part) => {
      const m = part.match(/^\{([^}]+)\}$/);
      if (!m) return { kind: "text" as const, value: part };
      const term = TERMS[m[1]];
      if (!term) return { kind: "text" as const, value: m[1] };
      return { kind: "term" as const, term };
    });
}
