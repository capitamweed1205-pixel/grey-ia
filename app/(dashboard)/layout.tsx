"use client"
import Link from 'next/link';

export default function DashLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#000', color: '#fff', fontFamily: 'sans-serif' }}>
      {/* Barra lateral */}
      <aside style={{ width: '220px', borderRight: '1px solid #222', padding: '20px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: '24px', fontWeight: '900', fontStyle: 'italic', marginBottom: '40px' }}>GREY</div>
        
        <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Link href="/chat" style={{ color: '#fff', textDecoration: 'none', fontSize: '14px', fontWeight: 'bold', padding: '12px', backgroundColor: '#111', borderRadius: '10px' }}>
             > CHAT_IA
          </Link>
          <Link href="/images" style={{ color: '#fff', textDecoration: 'none', fontSize: '14px', fontWeight: 'bold', padding: '12px', backgroundColor: '#111', borderRadius: '10px' }}>
             > IMAGENES
          </Link>
        </nav>

        <div style={{ padding: '15px', backgroundColor: '#050505', border: '1px solid #222', borderRadius: '10px' }}>
          <p style={{ fontSize: '9px', color: '#555', margin: '0' }}>ENERGÍA</p>
          <p style={{ fontSize: '18px', fontWeight: '900', margin: '0' }}>25.00</p>
        </div>
      </aside>

      <main style={{ flex: 1, overflow: 'hidden' }}>
        {children}
      </main>
    </div>
  )
}
