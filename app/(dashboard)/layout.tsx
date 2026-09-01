"use client"
import Link from 'next/link';

export default function DashLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#000', color: '#fff', fontFamily: 'sans-serif' }}>
      {/* BARRA SUPERIOR PARA MÓVIL */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 20px', borderBottom: '1px solid #1c1c1c', backgroundColor: '#000', position: 'sticky', top: 0, zIndex: 10 }}>
        <div style={{ fontSize: '22px', fontWeight: '900', fontStyle: 'italic', trackingTighter: '-1px' }}>GREY</div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Link href="/chat" style={{ color: '#fff', textDecoration: 'none', fontSize: '11px', fontWeight: 'bold', padding: '8px 15px', border: '1px solid #333', borderRadius: '8px', backgroundColor: '#0a0a0a' }}>CHAT</Link>
          <Link href="/images" style={{ color: '#fff', textDecoration: 'none', fontSize: '11px', fontWeight: 'bold', padding: '8px 15px', border: '1px solid #333', borderRadius: '8px', backgroundColor: '#0a0a0a' }}>IMG</Link>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main style={{ flex: 1, overflowY: 'auto', width: '100%' }}>
        {children}
      </main>

      {/* BARRA DE CRÉDITOS ABAJO */}
      <footer style={{ padding: '12px 20px', backgroundColor: '#050505', borderTop: '1px solid #1c1c1c', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '10px', color: '#555', fontWeight: 'bold', letterSpacing: '1px' }}>ENERGÍA DISPONIBLE</span>
        <span style={{ fontSize: '14px', fontWeight: '900', color: '#fff' }}>25.00</span>
      </footer>
    </div>
  )
}
