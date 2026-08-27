import * as Dialog from "@radix-ui/react-dialog";
import { Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { TERM_LIST } from "@/data/reader";

export function Glossary({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const raw = q.trim();
    const s = raw.toLowerCase();
    if (!s) return TERM_LIST;
    return TERM_LIST.filter(
      (t) =>
        t.hanzi.includes(raw) ||
        t.pinyin.toLowerCase().includes(s) ||
        t.en.toLowerCase().includes(s) ||
        t.note.toLowerCase().includes(s),
    );
  }, [q]);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/40 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0" />
        <Dialog.Content
          className="fixed inset-y-0 right-0 z-50 flex h-full w-[min(26rem,100vw)] flex-col border-l border-line bg-paper shadow-[-16px_0_40px_-20px_rgba(28,25,23,0.35)] outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:slide-in-from-right-4 data-[state=closed]:slide-out-to-right-4"
        >
          <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-4">
            <div>
              <Dialog.Title className="font-serif text-lg font-semibold text-ink">
                词表 Glossary
              </Dialog.Title>
              <Dialog.Description className="mt-0.5 font-sans text-xs text-muted">
                {TERM_LIST.length} annotated words
              </Dialog.Description>
            </div>
            <Dialog.Close asChild>
              <button
                type="button"
                className="grid size-11 place-items-center rounded-md text-ink hover:bg-paper-2"
                aria-label="Close glossary"
              >
                <X className="size-5" />
              </button>
            </Dialog.Close>
          </div>

          <div className="border-b border-line px-5 py-3">
            <label className="relative block">
              <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-faint" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search 汉字 / pinyin / English"
                className="h-11 w-full rounded-md bg-surface pr-3 pl-10 font-sans text-sm text-ink shadow-[var(--shadow-border)] outline-none placeholder:text-faint focus:shadow-[var(--shadow-border-hover)]"
              />
            </label>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-4">
            <ul className="space-y-2.5">
              {filtered.map((t) => (
                <li
                  key={t.hanzi}
                  className="rounded-lg bg-surface px-4 py-3 shadow-[var(--shadow-border)]"
                >
                  <p className="font-serif text-base font-medium text-ink">{t.hanzi}</p>
                  <p className="mt-0.5 font-sans text-xs text-muted">{t.pinyin}</p>
                  <p className="mt-1 font-sans text-sm text-ink-soft">{t.en}</p>
                  <p className="mt-2 font-sans text-[13px] leading-relaxed text-muted">
                    {t.note}
                  </p>
                </li>
              ))}
            </ul>
            {filtered.length === 0 ? (
              <p className="py-12 text-center font-sans text-sm text-muted">No matches.</p>
            ) : null}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
