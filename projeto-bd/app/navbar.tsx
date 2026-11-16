import Link from "next/link";
export default function Navbar() {
    return (    
<>
    <nav className="w-full flex items-center justify-between gap-4 px-6 py-3 bg-gradient-to-r from-[#220e01] via-[#9b0000] to-[#ff6100] shadow-lg">

        {/* LOGO */}
        <Link href="/" className="shrink-0">
            <img
                src=""
                className="w-12 h-12 object-contain"
                alt=""
            />
        </Link>

        {/* MENU DESKTOP */}
        <div className="hidden lg:flex items-center gap-8">

            <Link
                href="/"
                className="text-white font-semibold hover:text-orange-300 transition-colors"
            >
                Início
            </Link>

            <Link
                href="/explorar"
                className="text-white hover:text-orange-300 transition-colors"
            >
                Explorar
            </Link>

            <Link
                href="/comunidade"
                className="text-white hover:text-orange-300 transition-colors"
            >
                Comunidade
            </Link>

            <Link
                href="/loja"
                className="text-white hover:text-orange-300 transition-colors"
            >
                Loja
            </Link>

        </div>

        {/* MENU MOBILE */}
        <details className="relative lg:hidden">
            <summary className="list-none cursor-pointer text-white text-2xl">
                ☰
            </summary>

            <div className="absolute right-0 top-full mt-3 z-50 flex flex-col gap-4 min-w-44 rounded-xl bg-[#282828] p-5 shadow-xl">

                <Link href="/" className="text-white hover:text-orange-500">
                    Início
                </Link>

                <Link href="/explorar" className="text-white hover:text-orange-500">
                    Explorar
                </Link>

                <Link href="/comunidade" className="text-white hover:text-orange-500">
                    Comunidade
                </Link>

                <Link href="/loja" className="text-white hover:text-orange-500">
                    Loja
                </Link>

            </div>
        </details>

        {/* PESQUISA */}
        <div className="hidden md:flex items-center w-56 relative">

            <input
                type="text"
                placeholder="Pesquisar"
                aria-label="Pesquisar"
                className="w-full rounded-full bg-white px-4 py-2 pr-10 text-black outline-none focus:ring-2 focus:ring-orange-300"
            />

            <button
                type="button"
                aria-label="Pesquisar"
                className="absolute right-3 text-gray-600 hover:text-orange-600"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-5 h-5"
                >
                    <circle cx="11" cy="11" r="7" />
                    <path strokeLinecap="round" d="m20 20-4-4" />
                </svg>
            </button>

        </div>

        {/* AÇÕES */}
        <div className="flex items-center gap-3 shrink-0">

            {/* TEMA */}
            <button
                type="button"
                id="switchButton"
                aria-label="Alternar tema"
                className="rounded-full p-2 text-white text-xl hover:bg-white/20 transition-colors"
            >
                🌙
            </button>

            {/* PERFIL */}
            <button
                type="button"
                id="perfilButton"
                aria-label="Perfil"
                className="rounded-full p-2 text-white text-xl hover:bg-white/20 transition-colors"
            >
                👤
            </button>

        </div>

    </nav>
</>
    );
}