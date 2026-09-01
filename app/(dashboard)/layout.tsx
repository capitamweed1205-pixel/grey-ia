"use client"
import { useState } from 'react';
import Link from 'next/link';

export default function DashLayout({ children }: { children: React.ReactNode }) {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const navegarAtras = () => window.history.back();
  const navegarLante = () => window.history.forward();

  const linksPequeños = [
    { n: 'CHAT', l: '/chat' }, { n: 'IMG', l: '/images' }, { n: 'VIDEO', l: '/video' },
    { n: 'STUDIO', l: '/editor' }, { n: 'I2V', l: '/img2video' }, { n: 'VIRAL', l: '/viral' }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#000', color: '#fff', fontFamily: 'sans-serif', overflow: 'hidden' }}>
      
      <header style={{ borderBottom: '1px solid #1c1c1c', backgroundColor: '#000', zIndex: 110, padding: '10px 15px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '5px' }}>
            <button onClick={navegarAtras} style={navArrow}> ‹ </button>
            <button onClick={navegarLante} style={navArrow}> › </button>
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link href="/dashboard" style={{ textDecoration: 'none', color: '#fff' }}>
              <div style={{ fontSize: '22px', fontWeight: '900', fontStyle: 'italic', letterSpacing: '-1px' }}>GREY</div>
            </Link>
          </div>

          <button onClick={() => setMenuAbierto(!menuAbierto)} style={menuBtn}> ☰ </button>
        </div>

        {/* LINKS PEQUEÑOS DEBAJO DEL LOGO */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '8px', overflowX: 'auto', whiteSpace: 'nowrap' }}>
          {linksPequeños.map(link => (
            <Link key={link.l} href={link.l} style={{ textDecoration: 'none', color: '#444', fontSize: '9px', fontWeight: 'bold', letterSpacing: '1px' }}>
              {link.n}
            </Link>
          ))}
        </div>
      </header>

      {menuAbierto && (
        <div style={sidebarStyle}>
          <div style={{ padding: '30px 20px' }}>
             <button onClick={() => setMenuAbierto(false)} style={{ color: '#fff', background: 'none', border: 'none', float: 'right' }}>×</button>
             <p style={{ color: '#444', fontSize: '10px', fontWeight: 'bold', marginTop: '40px' }}>NAVEGACIÓN_IA</p>
             <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
                <Link href="/dashboard" onClick={() => setMenuAbierto(false)} style={sideLink}>EXPLORAR</Link>
                <Link href="/chat" onClick={() => setMenuAbierto(false)} style={sideLink}>CHIP_CHAT</Link>
                <Link href="/images" onClick={() => setMenuAbierto(false)} style={sideLink}>VISUAL_GEN</Link>
             </div>
          </div>
        </div>
      )}

      <main style={{ flex: 1, overflowY: 'auto', width: '100%' }}>{children}</main>

      <footer style={{ padding: '10px 20px', backgroundColor: '#050505', borderTop: '1px solid #1c1c1c', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '8px', color: '#333' }}>NODE_ACTIVE_V5</span>
        <span style={{ fontSize: '12px', fontWeight: '900' }}>25.00 CRD</span>
      </footer>
    </div>
  );
}

const navArrow = { backgroundColor: '#111', color: '#fff', border: '1px solid #222', borderRadius: '5px', width: '30px', height: '30px', fontSize: '18px' };
const menuBtn = { backgroundColor: '#fff', color: '#000', border: 'none', borderRadius: '5px', width: '35px', height: '35px', fontWeight: 'bold' };
const sidebarStyle = { position: 'fixed' as const, top: 0, right: 0, bottom: 0, width: '250px', backgroundColor: '#0a0a0a', zIndex: 130, borderLeft: '1px solid #1c1c1c' };
const sideLink = { color: '#fff', textDecoration: 'none', padding: '12px', backgroundColor: '#111', borderRadius: '8px', fontSize: '12px', fontWeight: 'bold' };
