"use client"
import { useState } from 'react';
import Link from 'next/link';

export default function DashLayout({ children }: { children: React.ReactNode }) {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const navegarAtras = () => window.history.back();
  const navegarLante = () => window.history.forward();

  const settings = [
    { name: 'MI_CUENTA_PRO', icon: '👤' },
    { name: 'GESTIÓN_DE_CRÉDITOS', icon: '⚡' },
    { name: 'ADMINISTRACIÓN', icon: '🛡️' },
    { name: 'CERRAR_SESIÓN', icon: '🚪' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#000', color: '#fff', fontFamily: 'sans-serif', overflow: 'hidden' }}>
      <header style={{ borderBottom: '1px solid #161616', backgroundColor: '#000', zIndex: 1000, padding: '15px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button onClick={navegarAtras} style={{ backgroundColor: '#111', color: '#fff', border: '1px solid #222', borderRadius: '8px', width: '35px', height: '35px' }}> ‹ </button>
            <button onClick={navegarLante} style={{ backgroundColor: '#111', color: '#fff', border: '1px solid #222', borderRadius: '8px', width: '35px', height: '35px' }}> › </button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link href="/dashboard" style={{ textDecoration: 'none', color: '#fff' }}><div style={{ fontSize: '24px', fontWeight: '900', fontStyle: 'italic' }}>GREY</div></Link>
            <Link href="/studio" style={{ textDecoration: 'none', display: 'block' }}><div style={{ fontSize: '9px', fontWeight: 'bold', color: '#555' }}>ESTUDIO CREATIVO</div></Link>
          </div>
          <button onClick={() => setMenuAbierto(true)} style={{ backgroundColor: '#fff', border: 'none', borderRadius: '8px', width: '40px', height: '40px' }}> ☰ </button>
        </div>
      </header>

      {menuAbierto && (
        <div style={{ position: 'fixed', top: 0, right: 0, bottom: 0, width: '80%', backgroundColor: '#050505', zIndex: 2000, padding: '40px 25px', borderLeft: '1px solid #1c1c1c' }}>
          <button onClick={() => setMenuAbierto(false)} style={{ color: '#fff', background: 'none', border: 'none', fontSize: '24px', float: 'right' }}>×</button>
          <p style={{ fontSize: '10px', color: '#444', marginTop: '50px' }}>CONFIGURACIÓN</p>
          {settings.map(s => (
            <div key={s.name} style={{ color: '#fff', padding: '18px', backgroundColor: '#0a0a0a', borderRadius: '12px', marginBottom: '10px', fontSize: '12px' }}>{s.icon} {s.name}</div>
          ))}
        </div>
      )}
      <main style={{ flex: 1, overflowY: 'auto', width: '100%' }}>{children}</main>
    </div>
  );
