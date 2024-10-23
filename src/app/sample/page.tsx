import Link from 'next/link';

export default async function SamplePage() {
  return (
    <section className="container mx-auto py-10">
      <ul className="flex flex-col gap-4">
        <li>
          <Link
            href="/sample/form"
            className="rounded-md bg-indigo-400 px-4 py-2 text-xl text-slate-50 transition-all duration-300 hover:bg-indigo-500 hover:text-slate-200"
          >
            Exemplo de validação de formulário
          </Link>
        </li>
        <li>
          <Link
            href="/sample/url-state"
            className="rounded-md bg-indigo-400 px-4 py-2 text-xl text-slate-50 transition-all duration-300 hover:bg-indigo-500 hover:text-slate-200"
          >
            Exemplo de utilização de searchParams para filtros e paginação
          </Link>
        </li>
      </ul>
    </section>
  );
}
