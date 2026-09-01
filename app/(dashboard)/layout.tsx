"use client"
import { MessageSquare, Image, Zap } from 'lucide-react';
import Link from 'next/link';

export default function DashLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: 'black', color: 'white' }}>
      <aside style={{ width: '250px', borderRight: '1px solid #1c1c1c', padding: '20px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: '24px', fontWeight: '900', fontStyle: 'italic', marginBottom: '40px' }}>GREY</div>
        <nav style={{ flex: 1 }}>
          <Link href="/chat" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
             > CHAT_IA
          </Link>
        </nav>
        <div style={{ padding: '20px', backgroundColor: '#0a0a0a', border: '1px solid #1c1c1c', borderRadius: '10px' }}>
          <p style={{ fontSize: '10px', color: '#666', margin: 0 }}>ENERGÍA</p>
          <p style={{ fontSize: '18px', fontWeight: 'bold', margin: 0 }}>25.00</p>
        </div>
      </aside>
      <main style={{ flex: 1, overflow: 'hidden' }}>{children}</main>
    </div>
  )
}
