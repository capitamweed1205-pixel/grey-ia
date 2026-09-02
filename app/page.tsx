"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md text-center">

        {/* LOGO CREI */}
        <div className="mb-12">
          <div className="inline-flex items-center justify-center">
            <div className="text-7xl font-black tracking-[-0.08em] leading-none">
              CREI
            </div>
          </div>

          <div className="mt-3 text-xs tracking-[0.35em] text-white/40 uppercase">
            Inteligencia creativa
          </div>
        </div>

        {/* BOTONES */}
        <div className="space-y-3">

          <button
            onClick={() => router.push("/auth/google")}
            className="w-full h-14 rounded-2xl bg-white text-black font-semibold
                       flex items-center justify-center gap-3
                       hover:bg-white/90 active:scale-[0.98] transition"
          >
            <span className="text-lg font-bold">G</span>
            Continuar con Google
          </button>

          <button
            onClick={() => router.push("/auth/apple")}
            className="w-full h-14 rounded-2xl bg-white text-black font-semibold
                       flex items-center justify-center gap-3
                       hover:bg-white/90 active:scale-[0.98] transition"
          >
            <span className="text-xl">●</span>
            Continuar con Apple
          </button>

          <button
            onClick={() => router.push("/auth/email")}
            className="w-full h-14 rounded-2xl border border-white/20
                       bg-white/[0.06] text-white font-semibold
                       flex items-center justify-center
                       hover:bg-white/[0.1] active:scale-[0.98] transition"
          >
            Continuar con correo electrónico
          </button>

        </div>

        {/* INICIAR SESIÓN */}
        <p className="mt-8 text-sm text-white/50">
          ¿Ya tienes una cuenta?{" "}
          <button
            onClick={() => router.push("/login")}
            className="text-white font-semibold hover:underline"
          >
            Iniciar sesión
          </button>
        </p>

      </div>
    </main>
  );
}
