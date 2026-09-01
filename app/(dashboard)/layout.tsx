"use client"
import Link from 'next/link';

export default function DashLayout({ children }: { children: React.ReactNode }) {
  const navegarAtras = () => window.history.back();
  const navegarLante = () => window.history.forward();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#000', color: '#fff', fontFamily: 'sans-serif' }}>
      
      <header style={{ borderBottom: '1px solid #1c1c1c', backgroundColor: '#000', position: 'sticky', top: 0, zIndex: 100, padding: '10px 15px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          
          <div style={{ display: 'flex', gap: '5px' }}>
            <button onClick={navegarAtras} style={navArrow}> ‹ </button>
            <button onClick={navegarLante} style={navArrow}> › </button>
          </div>

          <Link href="/dashboard" style={{ textDecoration: 'none' }}>
            <div style={{ color: '#fff', fontSize: '20px', fontWeight: '900', fontStyle: 'italic', letterSpacing: '-1px' }}>GREY</div>
          </Link>

          <Link href="/dashboard" style={hubBtn}>SALIR_AL_HUB</Link>
        </div>

        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', padding: '5px 0', whiteSpace: 'nowrap' }}>
          <Link href="/chat" style={toolBtn}>CHAT</Link>
          <Link href="/images" style={toolBtn}>IMG</Link>
          <Link href="/video" style={toolBtn}>VIDEO</Link>
          <Link href="/editor" style={{...toolBtn, border: '1px solid #fff'}}>STUDIO</Link>
          <Link href="/img2video" style={toolBtn}>I2V</Link>
          <Link href="/viral" style={toolBtn}>VIRAL</Link>
        </div>
      </header>

      <main style={{ flex: 1, overflowY: 'auto', width: '100%' }}>
        {children}
      </main>

      <footer style={{ padding: '12px 20px', backgroundColor: '#050505', borderTop: '1px solid #1c1c1c', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '9px', color: '#444', fontWeight: 'bold' }}>SYSTEM_V3.0_PRO</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '9px', color: '#666', fontWeight: 'bold' }}>ENERGÍA</span>
          <span style={{ fontSize: '14px', fontWeight: '900' }}>25.00</span>
        </div>
      </footer>

      <style>{`header div::-webkit-scrollbar { display: none; }`}</style>
    </div>
  )
}

const navArrow = { backgroundColor: '#111', color: '#fff', border: '1px solid #222', borderRadius: '6px', width: '35px', height: '35px', fontSize: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' };
const hubBtn = { color: '#000', textDecoration: 'none', fontSize: '9px', fontWeight: '900', padding: '8px 15px', backgroundColor: '#fff', borderRadius: '6px' };
const toolBtn = { color: '#666', textDecoration: 'none', fontSize: '9px', fontWeight: 'bold', padding: '8px 14px', border: '1px solid #161616', borderRadius: '5px', backgroundColor: '#0a0a0a', flexShrink: 0 };
