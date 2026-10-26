export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col justify-between p-8 md:p-16 selection:bg-neutral-800 selection:text-white font-sans">
      {/* Header Minimalista */}
      <header className="flex justify-between items-center w-full max-w-5xl mx-auto">
        <span className="font-bold tracking-widest text-xs uppercase text-neutral-400">
          // Workspace
        </span>
        <span className="text-xs text-neutral-500 font-mono">
          [Next.js App Router]
        </span>
      </header>

      {/* Seção Principal (Hero) */}
      <section className="max-w-5xl mx-auto my-auto w-full py-16">
        <p className="text-sm uppercase tracking-widest text-neutral-400 mb-4 font-mono">
          Apenas o essencial
        </p>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-balance leading-tight max-w-3xl">
          Construindo experiências simples, diretas e funcionais.
        </h1>
        <p className="mt-6 text-lg text-neutral-400 max-w-xl font-light">
          Ambiente pronto para desenvolvimento. Estrutura limpa sem excesso de código ou distrações.
        </p>

        {/* Botões de Ação */}
        <div className="mt-10 flex flex-wrap gap-4 items-center">
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-neutral-100 text-neutral-900 text-sm font-medium rounded-lg hover:bg-neutral-300 transition-colors"
          >
            Documentação
          </a>
          <button
            type="button"
            className="px-6 py-3 border border-neutral-800 text-neutral-300 text-sm font-medium rounded-lg hover:border-neutral-700 hover:bg-neutral-900 transition-all"
          >
            Explorar Projeto
          </button>
        </div>
      </section>

      {/* Grid Minimalista de Recortes */}
      <footer className="max-w-5xl mx-auto w-full border-t border-neutral-900 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-neutral-500 font-mono">
        <div>
          <span>Status: </span>
          <span className="text-emerald-400 font-medium">● Rodando Localmente</span>
        </div>
      </footer>
    </main>
  );
}