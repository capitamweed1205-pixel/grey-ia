"use client"
import Link from 'next/link';

export default function DashLayout({ children }: { children: React.ReactNode }) {
  // Funciones para las flechas de navegación
  const navegarAtras = () => window.history.back();
  const navegarLante = () => window.history.forward();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#000', color: '#fff', fontFamily: 'sans-serif' }}>
      
      {/* CABECERA DE CONTROL TOTAL */}
      <header style={{ 
        borderBottom: '1px solid #1c1c1c', 
        backgroundColor: '#000', 
        position: 'sticky', 
        top: 0, 
        zIndex: 100,
        padding: '10px 15px'
      }}>
        {/* FILA 1: NAVEGACIÓN Y LOGO */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          
          {/* BOTONES TÉCNICOS ATRÁS/LANTE */}
          <div style={{ display: 'flex', gap: '5px' }}>
            <button onClick={navegarAtras} style={navArrow}> ‹ </button>
            <button onClick={navegarLante} style={navArrow}> › </button>
          </div>

          {/* LOGO QUE SIEMPRE TE SACA AL HUB */}
          <Link href="/dashboard" style={{ textDecoration: 'none' }}>
            <div style={{ color: '#fff', fontSize: '20px', fontWeight: '900', fontStyle: 'italic', letterSpacing: '-1px' }}>GREY</div>
          </Link>

          {/* BOTÓN "SALIR" MUY CLARO */}
          <Link href="/dashboard" style={{ 
            color: '#000', 
            textDecoration: 'none', 
            fontSize: '10px', 
            fontWeight: '900', 
            padding: '8px 15px', 
            backgroundColor: '#fff', 
            borderRadius: '6px' 
          }}>SALIR_AL_HUB</Link>
        </div>

        {/* FILA 2: ACCESO DIRECTO ENTRE HERRAMIENTAS (DESLIZABLE) */}
        <div style={{ 
          display: 'flex', 
          gap: '8px', 
          overflowX: 'auto', 
          padding: '5px 0', 
          whiteSpace: 'nowrap',
          WebkitOverflowScrolling: 'touch'
        }}>
          <Link href="/chat" style={toolBtn}>CHAT</Link>
          <Link href="/images" style={toolBtn}>IMG</Link>
          <Link href="/video" style={toolBtn}>VIDEO</Link>
          <Link href="/img2video" style={toolBtn}>I2V</Link>
          <Link href="/faceswap" style={toolBtn}>FACE</Link>
          <Link href="/viral" style={toolBtn}>VIRAL</Link>
        </div>
      </header>

      {/* AQUÍ SE MUESTRAN LAS HERRAMIENTAS */}
      <main style={{ flex: 1, overflowY: 'auto', width: '100%', position: 'relative' }}>
        {children}
      </main>

      {/* ESTADO DE ENERGÍA ABAJO */}
      <footer style={{ padding: '12px 20px', backgroundColor: '#050505', borderTop: '1px solid #1c1c1c', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '9px', color: '#444', fontWeight: 'bold' }}>SISTEMA_V2.8</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '9px', color: '#666', fontWeight: 'bold' }}>ENERGÍA</span>
          <span style={{ fontSize: '14px', fontWeight: '900', color: '#fff' }}>25.00</span>
        </div>
      </footer>

      {/* ESTILO PARA OCULTAR LA BARRA DE SCROLL DE LOS BOTONES */}
      <style>{`
        header div::-webkit-scrollbar { display: none; }
        * { box-sizing: border-box; }
      `}</style>
    </div>
  )
}

// Estilos de los botones
const navArrow = {
  backgroundColor: '#111',
  color: '#fff',
  border: '1px solid #222',
  borderRadius: '6px',
  width: '35px',
  height: '35px',
  fontSize: '22px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  fontWeight: 'bold'
};

const toolBtn = {
  color: '#666',
  textDecoration: 'none',
  fontSize: '9px',
  fontWeight: 'bold',
  padding: '8px 14px',
  border: '1px solid #161616',
  borderRadius: '5px',
  backgroundColor: '#0a0a0a',
  flexShrink: 0
};
