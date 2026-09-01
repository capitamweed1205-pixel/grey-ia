"use client"
import Link from 'next/link';

export default function DashLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#000', color: '#fff', fontFamily: 'sans-serif' }}>
      {/* BARRA SUPERIOR ÚNICA */}
      <header style={{ borderBottom: '1px solid #1c1c1c', backgroundColor: '#000', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 20px' }}>
          <Link href="/dashboard" style={{ textDecoration: 'none', color: '#fff' }}>
            <div style={{ fontSize: '22px', fontWeight: '900', fontStyle: 'italic', letterSpacing: '-1px' }}>GREY</div>
          </Link>
          <Link href="/dashboard" style={{ color: '#000', textDecoration: 'none', fontSize: '10px', fontWeight: 'bold', padding: '8px 15px', backgroundColor: '#fff', borderRadius: '8px' }}>HUB_CENTRAL</Link>
        </div>

        {/* NAVEGACIÓN RÁPIDA (DESLIZABLE) */}
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', padding: '0 20px 15px 20px', whiteSpace: 'nowrap' }}>
          <Link href="/chat" style={navBtn}>CHAT</Link>
          <Link href="/images" style={navBtn}>IMG</Link>
          <Link href="/video" style={navBtn}>VIDEO</Link>
          <Link href="/viral" style={navBtn}>VIRAL</Link>
          <Link href="/subtitles" style={navBtn}>SUB</Link>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main style={{ flex: 1, overflowY: 'auto', width: '100%' }}>
        {children}
      </main>

      {/* BARRA DE CRÉDITOS */}
      <footer style={{ padding: '10px 20px', backgroundColor: '#050505', borderTop: '1px solid #1c1c1c', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '9px', color: '#444', fontWeight: 'bold' }}>SYSTEM_READY</span>
        <span style={{ fontSize: '13px', fontWeight: '900', color: '#fff' }}>25.00 CRD</span>
      </footer>

      <style>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  )
}

const navBtn = {
  color: '#555',
  textDecoration: 'none',
  fontSize: '9px',
  fontWeight: 'bold',
  padding: '6px 12px',
  border: '1px solid #1c1c1c',
  borderRadius: '5px'
};
