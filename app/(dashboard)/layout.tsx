"use client"
import Link from 'next/link';

export default function DashLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#000', color: '#fff', fontFamily: 'sans-serif' }}>
      {/* BARRA SUPERIOR CON 4 BOTONES ADAPTADOS A MÓVIL */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', borderBottom: '1px solid #1c1c1c', backgroundColor: '#000', position: 'sticky', top: 0, zIndex: 10 }}>
        <div style={{ fontSize: '18px', fontWeight: '900', fontStyle: 'italic' }}>GREY</div>
        <div style={{ display: 'flex', gap: '5px' }}>
          <Link href="/chat" style={{ color: '#fff', textDecoration: 'none', fontSize: '9px', fontWeight: 'bold', padding: '8px 8px', border: '1px solid #333', borderRadius: '6px' }}>CHAT</Link>
          <Link href="/images" style={{ color: '#fff', textDecoration: 'none', fontSize: '9px', fontWeight: 'bold', padding: '8px 8px', border: '1px solid #333', borderRadius: '6px' }}>IMG</Link>
          <Link href="/video" style={{ color: '#fff', textDecoration: 'none', fontSize: '9px', fontWeight: 'bold', padding: '8px 8px', border: '1px solid #333', borderRadius: '6px' }}>VIDEO</Link>
          <Link href="/viral" style={{ color: '#000', textDecoration: 'none', fontSize: '9px', fontWeight: 'bold', padding: '8px 8px', backgroundColor: '#fff', borderRadius: '6px' }}>VIRAL</Link>
        </div>
      </header>

      {/* CONTENIDO */}
      <main style={{ flex: 1, overflowY: 'auto', width: '100%' }}>
        {children}
      </main>

      {/* FOOTER DE CRÉDITOS */}
      <footer style={{ padding: '12px 20px', backgroundColor: '#050505', borderTop: '1px solid #1c1c1c', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '9px', color: '#444', fontWeight: 'bold' }}>NODE_STATUS: ACTIVE</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '9px', color: '#555', fontWeight: 'bold' }}>ENERGÍA</span>
          <span style={{ fontSize: '14px', fontWeight: '900' }}>25.00</span>
        </div>
      </footer>
    </div>
  )
}
