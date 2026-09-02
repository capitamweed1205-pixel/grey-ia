"use client";

import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md text-center">

        {/* LOGOTIPO GREY IA */}
        <div className="mb-14 flex justify-center">
          <div className="relative inline-flex items-end">

            {/* Símbolo del logo */}
            <div className="absolute -left-5 -top-5 w-4 h-4 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.45)]" />

            {/* GREY */}
            <div
              className="
                font-black
                text-[68px]
                sm:text-[78px]
                leading-none
                tracking-[-0.10em]
                italic
                select-none
              "
            >
              GREY
            </div>

            {/* IA pequeño al lado */}
            <div
              className="
                ml-3
                mb-1
                text-[15px]
                font-bold
                tracking-[0.18em]
                text-white/70
              "
            >
              IA
            </div>

          </div>
        </div>

        {/* BOTONES */}
        <div className="space-y-3">

          <button
            onClick={() => router.push("/auth/google")}
            className="
              w-full h-14 rounded-2xl
              bg-white text-black
              font-semibold
              flex items-center justify-center gap-3
              hover:bg-white/90
              active:scale-[0.98]
              transition
            "
          >
            <span className="text-lg font-bold">G</span>
            Continuar con Google
          </button>

          <button
            onClick={() => router.push("/auth/apple")}
            className="
              w-full h-14 rounded-2xl
              bg-white text-black
              font-semibold
              flex items-center justify-center gap-3
              hover:bg-white/90
              active:scale-[0.98]
              transition
            "
          >
            <span className="text-xl">●</span>
            Continuar con Apple
          </button>

          <button
            onClick={() => router.push("/auth/email")}
            className="
              w-full h-14 rounded-2xl
              border border-white/20
              bg-white/[0.06]
              text-white
              font-semibold
              flex items-center justify-center
              hover:bg-white/[0.10]
              active:scale-[0.98]
              transition
            "
          >
            Continuar con correo electrónico
          </button>

        </div>

        {/* LOGIN */}
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
