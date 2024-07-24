import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex justify-end">
        <ThemeToggle />
      </div>
      <main className="flex flex-1 flex-col items-center justify-center gap-10">
        <h1 className="text-5xl font-black">Shadcn/UI Demo React</h1>
        <p className="max-w-96">
          Start adding components by either copy/pasting the code from the docs
          or by using the shadcn cli.
        </p>
        <Button size="xl">
          <a
            href="https://ui.shadcn.com/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read the Docs 📚
          </a>
        </Button>
      </main>
    </div>
  );
}
