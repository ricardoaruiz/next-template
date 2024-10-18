import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-6xl font-light">Next Template</h1>
      <Button className="min-w-52">Click Me</Button>
    </main>
  );
}
