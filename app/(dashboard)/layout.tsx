"use client"
import Link from 'next/link';

export default function DashLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#000', color: '#fff', fontFamily: 'sans-serif' }}>
      {/* BARRA SUPERIOR CON 3 BOTONES */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 20px', borderBottom: '1px solid #1c1c1c', backgroundColor: '#000', position: 'sticky', top: 0, zIndex: 10 }}>
        <div style={{ fontSize: '22px', fontWeight: '900', fontStyle: 'italic' }}>GREY</div>
        <div style={{ display: 'flex', gap: '5px' }}>
          <Link href="/chat" style={{ color: '#fff', textDecoration: 'none', fontSize: '10px', fontWeight: 'bold', padding: '8px 10px', border: '1px solid #333', borderRadius: '6px' }}>CHAT</Link>
          <Link href="/images" style={{ color: '#fff', textDecoration: 'none', fontSize: '10px', fontWeight: 'bold', padding: '8px 10px', border: '1px solid #333', borderRadius: '6px' }}>IMG</Link>
          <Link href="/viral" style={{ color: '#fff', textDecoration: 'none', fontSize: '10px', fontWeight: 'bold', padding: '8px 10px', border: '1px solid #fff', borderRadius: '6px', backgroundColor: '#222' }}>VIRAL</Link>
        </div>
      </header>

      <main style={{ flex: 1, overflowY: 'auto', width: '100%' }}>
        {children}
      </main>

      <footer style={{ padding: '12px 20px', backgroundColor: '#050505', borderTop: '1px solid #1c1c1c', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '10px', color: '#555', fontWeight: 'bold' }}>ENERGÍA</span>
        <span style={{ fontSize: '14px', fontWeight: '900' }}>25.00</span>
      </footer>
    </div>
  )
}
