"use client"
import { useState } from 'react';
import Link from 'next/link';

export default function DashLayout({ children }: { children: React.ReactNode }) {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const navegarAtras = () => window.history.back();
  const navegarLante = () => window.history.forward();

  const settings = [
    { name: 'MI_PERFIL', icon: '👤' },
    { name: 'RECARGAR_CREDITOS', icon: '⚡' },
    { name: 'ADMINISTRACIÓN', icon: '🛡️' },
    { name: 'CERRAR_SESIÓN', icon: '🚪' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#000', color: '#fff', fontFamily: 'sans-serif', overflow: 'hidden' }}>
      
      {/* CABECERA CON NAVEGACIÓN Y ESTUDIO CREATIVO */}
      <header style={{ borderBottom: '1px solid #1c1c1c', backgroundColor: '#000', zIndex: 110, padding: '10px 15px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          {/* IZQUIERDA: NAVEGACIÓN */}
          <div style={{ display: 'flex', gap: '5px' }}>
            <button onClick={navegarAtras} style={navArrow}> ‹ </button>
            <button onClick={navegarLante} style={navArrow}> › </button>
          </div>

          {/* CENTRO: LOGO Y ESTUDIO CREATIVO */}
          <div style={{ textAlign: 'center' }}>
            <Link href="/dashboard" style={{ textDecoration: 'none', color: '#fff' }}>
              <div style={{ fontSize: '22px', fontWeight: '900', fontStyle: 'italic', letterSpacing: '-1px' }}>GREY</div>
            </Link>
            <Link href="/studio" style={{ textDecoration: 'none', display: 'block', marginTop: '2px' }}>
              <div style={{ fontSize: '9px', fontWeight: 'bold', letterSpacing: '2px', color: '#888' }}>ESTUDIO CREATIVO</div>
            </Link>
          </div>

          {/* DERECHA: AJUSTES (3 RAYITAS) */}
          <button onClick={() => setMenuAbierto(!menuAbierto)} style={menuBtn}>
             <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ width: '18px', height: '2px', backgroundColor: '#000' }}></div>
                <div style={{ width: '18px', height: '2px', backgroundColor: '#000' }}></div>
                <div style={{ width: '18px', height: '2px', backgroundColor: '#000' }}></div>
             </div>
          </button>
        </div>
      </header>

      {/* MENÚ DE CONFIGURACIÓN LATERAL */}
      {menuAbierto && (
        <>
          <div onClick={() => setMenuAbierto(false)} style={overlayStyle} />
          <div style={sidebarRightStyle}>
            <div style={{ padding: '30px 20px' }}>
              <h2 style={{ fontSize: '12px', fontWeight: '900', color: '#444', letterSpacing: '2px', marginBottom: '30px' }}>CONFIGURACIÓN</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {settings.map((s) => (
                  <div key={s.name} style={settingItem}>
                    <span style={{ marginRight: '12px' }}>{s.icon}</span> {s.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      <main style={{ flex: 1, overflowY: 'auto', width: '100%' }}>{children}</main>

      <footer style={{ padding: '10px 20px', backgroundColor: '#050505', borderTop: '1px solid #1c1c1c', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '9px', color: '#333' }}>GREY_CORE_V6</span>
        <span style={{ fontSize: '12px', fontWeight: '900' }}>25.00 CRD</span>
      </footer>
    </div>
  );
}

const navArrow = { backgroundColor: '#111', color: '#fff', border: '1px solid #222', borderRadius: '5px', width: '32px', height: '32px', fontSize: '20px', cursor: 'pointer' };
const menuBtn = { backgroundColor: '#fff', border: 'none', borderRadius: '5px', width: '38px', height: '38px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' };
const overlayStyle = { position: 'fixed' as const, top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 120, backdropFilter: 'blur(4px)' };
const sidebarRightStyle = { position: 'fixed' as const, top: 0, right: 0, bottom: 0, width: '280px', backgroundColor: '#0a0a0a', zIndex: 130, borderLeft: '1px solid #1c1c1c' };
const settingItem = { color: '#fff', padding: '15px', backgroundColor: '#111', borderRadius: '10px', fontSize: '11px', fontWeight: 'bold', border: '1px solid #1c1c1c' };
