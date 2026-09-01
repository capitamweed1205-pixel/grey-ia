"use client"
import { useState } from 'react';
import Link from 'next/link';

export default function DashLayout({ children }: { children: React.ReactNode }) {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const navegarAtras = () => window.history.back();
  const navegarLante = () => window.history.forward();
  const toggleMenu = () => setMenuAbierto(!menuAbierto);

  const tools = [
    { name: 'CHIP_CHAT', link: '/chat' },
    { name: 'VISUAL_GEN', link: '/images' },
    { name: 'GREY_STUDIO', link: '/editor' },
    { name: 'CINEMATIC_V2', link: '/video' },
    { name: 'MOTION_ENGINE', link: '/img2video' },
    { name: 'FACE_SWAP', link: '/faceswap' },
    { name: 'VIRAL_LAB', link: '/viral' },
    { name: 'CAPTIONS_AI', link: '/subtitles' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#000', color: '#fff', fontFamily: 'sans-serif', overflow: 'hidden' }}>
      
      {/* BARRA SUPERIOR LIMPIA */}
      <header style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '15px 20px', 
        borderBottom: '1px solid #1c1c1c', 
        backgroundColor: '#000', 
        zIndex: 110 
      }}>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <button onClick={toggleMenu} style={menuBtnStyle}> ☰ </button>
          <div style={{ display: 'flex', gap: '4px' }}>
            <button onClick={navegarAtras} style={navArrow}> ‹ </button>
            <button onClick={navegarLante} style={navArrow}> › </button>
          </div>
        </div>

        <Link href="/dashboard" style={{ textDecoration: 'none', color: '#fff' }}>
          <div style={{ fontSize: '20px', fontWeight: '900', fontStyle: 'italic', letterSpacing: '-1px' }}>GREY</div>
        </Link>

        <Link href="/dashboard" style={hubBtn}>HUB</Link>
      </header>

      {/* MENÚ LATERAL (SE ABRE AL PULSAR ☰) */}
      {menuAbierto && (
        <>
          <div onClick={toggleMenu} style={overlayStyle} />
          <div style={sidebarStyle}>
            <div style={{ padding: '30px 20px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: '900', marginBottom: '30px', color: '#444' }}>NAVEGACIÓN</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {tools.map((t) => (
                  <Link key={t.link} href={t.link} onClick={toggleMenu} style={sidebarItemStyle}>
                    {t.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {/* CONTENIDO PRINCIPAL (AHORA MÁS LIMPIO) */}
      <main style={{ flex: 1, overflowY: 'auto', width: '100%' }}>
        {children}
      </main>

      {/* FOOTER */}
      <footer style={{ padding: '12px 20px', backgroundColor: '#050505', borderTop: '1px solid #1c1c1c', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '9px', color: '#444', fontWeight: 'bold' }}>SYSTEM_V4.0</span>
        <span style={{ fontSize: '13px', fontWeight: '900' }}>25.00 CRD</span>
      </footer>
    </div>
  )
}

// ESTILOS
const menuBtnStyle = { backgroundColor: '#fff', color: '#000', border: 'none', borderRadius: '6px', width: '35px', height: '35px', fontSize: '18px', cursor: 'pointer', fontWeight: 'bold' };
const navArrow = { backgroundColor: '#111', color: '#fff', border: '1px solid #222', borderRadius: '6px', width: '35px', height: '35px', fontSize: '20px', cursor: 'pointer' };
const hubBtn = { color: '#000', textDecoration: 'none', fontSize: '9px', fontWeight: '900', padding: '10px 15px', backgroundColor: '#fff', borderRadius: '6px' };
const overlayStyle = { position: 'fixed' as const, top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 120 };
const sidebarStyle = { position: 'fixed' as const, top: 0, left: 0, bottom: 0, width: '280px', backgroundColor: '#0a0a0a', borderRight: '1px solid #1c1c1c', zIndex: 130, boxShadow: '20px 0 50px rgba(0,0,0,0.5)' };
const sidebarItemStyle = { color: '#fff', textDecoration: 'none', fontSize: '14px', fontWeight: 'bold', padding: '15px', backgroundColor: '#111', borderRadius: '10px', border: '1px solid #1c1c1c' };
