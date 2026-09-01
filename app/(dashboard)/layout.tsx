"use client"
import { useState } from 'react';
import Link from 'next/link';

export default function DashLayout({ children }: { children: React.ReactNode }) {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const navegarAtras = () => window.history.back();
  const navegarLante = () => window.history.forward();

  const settings = [
    { name: 'MI_PERFIL', icon: '👤' },
    { name: 'ADMINISTRACIÓN', icon: '🛡️' },
    { name: 'CERRAR_SESIÓN', icon: '🚪' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#000', color: '#fff', fontFamily: 'sans-serif', overflow: 'hidden' }}>
      <header style={{ borderBottom: '1px solid #1c1c1c', backgroundColor: '#000', zIndex: 110, padding: '10px 15px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '5px' }}>
            <button onClick={navegarAtras} style={btnStyle}> ‹ </button>
            <button onClick={navegarLante} style={btnStyle}> › </button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link href="/dashboard" style={{ textDecoration: 'none', color: '#fff' }}>
              <div style={{ fontSize: '20px', fontWeight: '900', fontStyle: 'italic', letterSpacing: '-1px' }}>GREY</div>
            </Link>
            <Link href="/studio" style={{ textDecoration: 'none', display: 'block', marginTop: '2px' }}>
              <div style={{ fontSize: '9px', fontWeight: 'bold', color: '#888' }}>ESTUDIO CREATIVO</div>
            </Link>
          </div>
          <button onClick={() => setMenuAbierto(!menuAbierto)} style={menuBtn}> ☰ </button>
        </div>
      </header>
      {menuAbierto && (
        <div style={sidebarRightStyle}>
          <div style={{ padding: '30px 20px' }}>
            <h2 style={{ fontSize: '11px', fontWeight: '900', color: '#444', marginBottom: '30px' }}>CONFIGURACIÓN</h2>
            {settings.map((s) => <div key={s.name} style={itemStyle}>{s.icon} {s.name}</div>)}
          </div>
        </div>
      )}
      <main style={{ flex: 1, overflowY: 'auto' }}>{children}</main>
    </div>
  );
}
const btnStyle = { backgroundColor: '#111', color: '#fff', border: '1px solid #222', borderRadius: '5px', width: '32px', height: '32px' };
const menuBtn = { backgroundColor: '#fff', border: 'none', borderRadius: '5px', width: '38px', height: '38px', fontWeight: 'bold' };
const sidebarRightStyle = { position: 'fixed' as const, top: 0, right: 0, bottom: 0, width: '280px', backgroundColor: '#0a0a0a', zIndex: 130, borderLeft: '1px solid #1c1c1c' };
const itemStyle = { color: '#fff', padding: '15px', backgroundColor: '#111', borderRadius: '10px', fontSize: '11px', fontWeight: 'bold', marginBottom: '10px' };
