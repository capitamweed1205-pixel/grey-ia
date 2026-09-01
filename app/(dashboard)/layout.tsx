"use client"
import { MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function DashLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-black">
      <aside className="w-20 lg:w-64 border-r border-zinc-800 flex flex-col p-4">
        <div className="text-2xl font-black italic mb-10 text-white">GREY</div>
        <nav className="flex-1">
          <Link href="/chat" className="flex items-center gap-3 text-white bg-zinc-900 p-3 rounded-xl font-bold">
            <MessageSquare size={20}/> <span className="hidden lg:block">CHAT</span>
          </Link>
        </nav>
        <div className="mt-auto bg-zinc-900 p-4 rounded-xl border border-zinc-800 text-white">
          <p className="text-[10px] text-zinc-500 font-bold">ENERGÍA</p>
          <p className="text-xl font-black">25.00</p>
        </div>
      </aside>
      <main className="flex-1 overflow-hidden">{children}</main>
    </div>
  )
}
