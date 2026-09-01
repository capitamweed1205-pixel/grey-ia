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
    { name: 'PANEL_CONTROL_ADMIN', icon: '🛡️' },
    { name: 'NOTIFICACIONES', icon: '🔔' },
    { name: 'IDIOMA_SISTEMA', icon: '🌐' },
    { name: 'CERRAR_SESIÓN', icon: '🚪' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#000', color: '#fff', fontFamily: 'sans-serif', overflow: 'hidden' }}>
      
      {/* CABECERA TÉCNICA */}
      <header style={{ borderBottom: '1px solid #161616', backgroundColor: '#000', zIndex: 1000, padding: '15px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          {/* NAVEGACIÓN IZQUIERDA */}
          <div style={{ display: 'flex', gap: '8px' }}>
            <button onClick={navegarAtras} style={navIcon}> ‹ </button>
            <button onClick={navegarLante} style={navIcon}> › </button>
          </div>

          {/* LOGO CENTRAL Y ESTUDIO CREATIVO */}
          <div style={{ textAlign: 'center' }}>
            <Link href="/dashboard" style={{ textDecoration: 'none', color: '#fff' }}>
              <div style={{ fontSize: '24px', fontWeight: '900', fontStyle: 'italic', letterSpacing: '-1px' }}>GREY</div>
            </Link>
            <Link href="/studio" style={{ textDecoration: 'none', display: 'block' }}>
              <div style={{ fontSize: '9px', fontWeight: 'bold', letterSpacing: '3px', color: '#555', marginTop: '2px' }}>ESTUDIO CREATIVO</div>
            </Link>
          </div>

          {/* MENÚ AJUSTES DERECHA */}
          <button onClick={() => setMenuAbierto(true)} style={menuToggle}>
            <div style={{ width: '18px', height: '2px', backgroundColor: '#000', margin: '3px 0' }}></div>
            <div style={{ width: '18px', height: '2px', backgroundColor: '#000', margin: '3px 0' }}></div>
            <div style={{ width: '18px', height: '2px', backgroundColor: '#000', margin: '3px 0' }}></div>
          </button>
        </div>
      </header>

      {/* MODAL DE AJUSTES (DESDE LA DERECHA) */}
      {menuAbierto && (
        <div style={sidebarOverlay}>
          <div style={sidebarContent}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px' }}>
              <span style={{ fontSize: '10px', fontWeight: '900', color: '#444', letterSpacing: '2px' }}>CONFIGURACIÓN</span>
              <button onClick={() => setMenuAbierto(false)} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '24px', cursor: 'pointer' }}>×</button>
            </div>
            {settings.map(s => (
              <div key={s.name} style={settingRow}>
                <span style={{ marginRight: '15px' }}>{s.icon}</span> {s.name}
              </div>
            ))}
          </div>
        </div>
      )}

      <main style={{ flex: 1, overflowY: 'auto', width: '100%' }}>{children}</main>
    </div>
  );
}

const navIcon = { backgroundColor: '#111', color: '#fff', border: '1px solid #222', borderRadius: '8px', width: '35px', height: '35px', fontSize: '20px' };
const menuToggle = { backgroundColor: '#fff', border: 'none', borderRadius: '8px', width: '40px', height: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' };
const sidebarOverlay = { position: 'fixed' as const, top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 2000, display: 'flex', justifyContent: 'flex-end' };
const sidebarContent = { width: '85%', maxWidth: '350px', backgroundColor: '#050505', height: '100%', padding: '40px 25px', borderLeft: '1px solid #1c1c1c' };
const settingRow = { color: '#fff', padding: '18px', backgroundColor: '#0a0a0a', borderRadius: '12px', marginBottom: '10px', fontSize: '12px', fontWeight: 'bold', border: '1px solid #111' };
