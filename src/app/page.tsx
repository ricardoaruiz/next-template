import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-6xl font-light">Next Template</h1>
      <Button className="min-w-52">Click Me</Button>
      <Text as="h1" size="lg" className="mb-4">
        H1
      </Text>
      <Text as="h2" size="sm" className="mb-4">
        H2
      </Text>
      <Text>Paragraph</Text>
    </main>
  );
}
