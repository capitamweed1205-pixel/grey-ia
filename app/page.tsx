import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6 text-center">
      <div className="mb-8 p-4 border border-zinc-800 rounded-2xl animate-pulse">
        <div className="w-12 h-12 bg-white rounded-full"></div>
      </div>
      <h1 className="text-7xl md:text-9xl font-black italic tracking-tighter mb-4 uppercase">GREY IA</h1>
      <p className="text-zinc-500 max-w-md mb-12 font-mono text-xs tracking-[0.4em] uppercase opacity-80">
        Nodos de Inteligencia Neuronal // Acceso Restringido
      </p>
      <Link href="/chat" className="bg-white text-black px-14 py-4 rounded-full font-black hover:bg-zinc-200 transition-all uppercase tracking-widest text-sm shadow-[0_0_30px_rgba(255,255,255,0.1)]">
        Iniciar Sistema
      </Link>
      <div className="mt-20 grid grid-cols-3 gap-8 opacity-20 font-mono text-[10px] tracking-tighter">
        <div>CORE_V1.0</div>
        <div>STATUS_OK</div>
        <div>REGION_EU_WEST</div>
      </div>
    </div>
  )
}
