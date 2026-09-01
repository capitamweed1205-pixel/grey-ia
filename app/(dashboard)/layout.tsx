"use client"
import Link from 'next/link';

export default function DashLayout({ children }: { children: React.ReactNode }) {
  // Funciones para navegar atrás y adelante
  const goBack = () => window.history.back();
  const goForward = () => window.history.forward();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#000', color: '#fff', fontFamily: 'sans-serif' }}>
      
      {/* BARRA SUPERIOR CON NAVEGACIÓN */}
      <header style={{ 
        borderBottom: '1px solid #1c1c1c', 
        backgroundColor: '#000', 
        position: 'sticky', 
        top: 0, 
        zIndex: 100,
        padding: '10px 15px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          
          {/* BOTONES ATRÁS/LANTE */}
          <div style={{ display: 'flex', gap: '5px' }}>
            <button onClick={goBack} style={navArrowStyle}> ‹ </button>
            <button onClick={goForward} style={navArrowStyle}> › </button>
          </div>

          {/* LOGO CENTRAL */}
          <Link href="/dashboard" style={{ textDecoration: 'none', color: '#fff' }}>
            <div style={{ fontSize: '20px', fontWeight: '900', fontStyle: 'italic', letterSpacing: '-1px' }}>GREY</div>
          </Link>

          {/* BOTÓN HUB */}
          <Link href="/dashboard" style={{ 
            color: '#000', 
            textDecoration: 'none', 
            fontSize: '9px', 
            fontWeight: 'bold', 
            padding: '8px 12px', 
            backgroundColor: '#fff', 
            borderRadius: '6px' 
          }}>HUB</Link>
        </div>

        {/* BARRA DE ACCESO RÁPIDO DESLIZABLE */}
        <div style={{ 
          display: 'flex', 
          gap: '8px', 
          overflowX: 'auto', 
          padding: '5px 0', 
          whiteSpace: 'nowrap',
          msOverflowStyle: 'none',
          scrollbarWidth: 'none'
        }}>
          <Link href="/chat" style={quickBtn}>CHAT</Link>
          <Link href="/images" style={quickBtn}>IMG</Link>
          <Link href="/video" style={quickBtn}>VIDEO</Link>
          <Link href="/viral" style={quickBtn}>VIRAL</Link>
          <Link href="/subtitles" style={quickBtn}>SUB</Link>
          <Link href="/faceswap" style={quickBtn}>FACE</Link>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main style={{ flex: 1, overflowY: 'auto', width: '100%' }}>
        {children}
      </main>

      {/* FOOTER */}
      <footer style={{ padding: '12px 20px', backgroundColor: '#050505', borderTop: '1px solid #1c1c1c', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '9px', color: '#444', fontWeight: 'bold' }}>SYSTEM_V2.5</span>
        <span style={{ fontSize: '13px', fontWeight: '900', color: '#fff' }}>25.00 CRD</span>
      </footer>

      <style>{`
        header div::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  )
}

// Estilos de los botones nuevos de navegación
const navArrowStyle = {
  backgroundColor: '#111',
  color: '#fff',
  border: '1px solid #222',
  borderRadius: '6px',
  width: '32px',
  height: '32px',
  fontSize: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  fontWeight: 'bold'
};

const quickBtn = {
  color: '#666',
  textDecoration: 'none',
  fontSize: '9px',
  fontWeight: 'bold',
  padding: '6px 12px',
  border: '1px solid #161616',
  borderRadius: '5px',
  flexShrink: 0
};
