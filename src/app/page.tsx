import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 text-black">
      <h1 className="text-5xl font-black">Shadcn/UI Demo React</h1>
      <p className="max-w-96">
        Start adding components by either copy/pasting the code from the docs or
        by using the shadcn cli.
      </p>
      <Button>
        <a href="https://ui.shadcn.com/docs" target="_blank">
          Read the docs
        </a>
      </Button>
    </main>
  );
}
