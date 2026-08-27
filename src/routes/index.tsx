import { createFileRoute } from "@tanstack/react-router";
import { ReaderShell } from "@/components/reader-shell";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <ReaderShell />;
}
