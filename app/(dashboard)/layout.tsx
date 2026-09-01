"use client"
import { useState } from 'react';
import Link from 'next/link';

export default function DashLayout({ children }: { children: React.ReactNode }) {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const navegarAtras = () => window.history.back();
  const navegarLante = () => window.history.forward();
  const toggleMenu = () => setMenuAbierto(!menuAbierto);

  const tools = [
    { name: 'CHIP_CHAT', link: '/chat', icon: '🧠' },
    { name: 'VISUAL_GEN', link: '/images', icon: '🖼️' },
    { name: 'GREY_STUDIO', link: '/editor', icon: '🛠️' },
    { name: 'CINEMATIC_V2', link: '/video', icon: '🎬' },
    { name: 'MOTION_ENGINE', link: '/img2video', icon: '✨' },
    { name: 'VIRAL_LAB', link: '/viral', icon: '🚀' },
  ];

  const settings = [
    { name: 'MI_PERFIL', link: '#', icon: '👤' },
    { name: 'RECARGAR_CREDITOS', link: '#', icon: '⚡' },
    { name: 'ADMINISTRACIÓN', link: '#', icon: '🛡️' },
    { name: 'CERRAR_SESIÓN', link: '/', icon: '🚪' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#000', color: '#fff', fontFamily: 'sans-serif', overflow: 'hidden' }}>
      
      {/* BARRA SUPERIOR REORGANIZADA */}
      <header style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '10px 15px', 
        borderBottom: '1px solid #1c1c1c', 
        backgroundColor: '#000', 
        zIndex: 110 
      }}>
        {/* IZQUIERDA: NAVEGACIÓN */}
        <div style={{ display: 'flex', gap: '5px' }}>
          <button onClick={navegarAtras} style={navArrow}> ‹ </button>
          <button onClick={navegarLante} style={navArrow}> › </button>
        </div>

        {/* CENTRO: LOGO */}
        <Link href="/dashboard" style={{ textDecoration: 'none' }}>
          <div style={{ color: '#fff', fontSize: '22px', fontWeight: '900', fontStyle: 'italic', letterSpacing: '-1px' }}>GREY</div>
        </Link>

        {/* DERECHA: BOTÓN MENÚ (3 RAYITAS) */}
        <button onClick={toggleMenu} style={menuBtnStyle}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={lineStyle}></div>
            <div style={lineStyle}></div>
            <div style={lineStyle}></div>
          </div>
        </button>
      </header>

      {/* MENÚ LATERAL DERECHO (CONFIGURACIÓN Y HERRAMIENTAS) */}
      {menuAbierto && (
        <>
          <div onClick={toggleMenu} style={overlayStyle} />
          <div style={sidebarRightStyle}>
            <div style={{ padding: '30px 20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                <h2 style={{ fontSize: '14px', fontWeight: '900', color: '#444', letterSpacing: '2px' }}>PANEL_DE_CONTROL</h2>
                <button onClick={toggleMenu} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '20px' }}>×</button>
              </div>

              {/* SECCIÓN HERRAMIENTAS */}
              <p style={sectionTitle}>MÓDULOS_IA</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '30px' }}>
                {tools.map((t) => (
                  <Link key={t.link} href={t.link} onClick={toggleMenu} style={itemLink}>
                    <span style={{ marginRight: '10px' }}>{t.icon}</span> {t.name}
                  </Link>
                ))}
              </div>

              {/* SECCIÓN AJUSTES */}
              <p style={sectionTitle}>SISTEMA_Y_CUENTA</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {settings.map((s) => (
                  <Link key={s.name} href={s.link} onClick={toggleMenu} style={{ ...itemLink, backgroundColor: '#0a0a0a', border: '1px solid #161616' }}>
                    <span style={{ marginRight: '10px' }}>{s.icon}</span> {s.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {/* CONTENIDO PRINCIPAL */}
      <main style={{ flex: 1, overflowY: 'auto', width: '100%' }}>
        {children}
      </main>

      {/* FOOTER */}
      <footer style={{ padding: '12px 20px', backgroundColor: '#050505', borderTop: '1px solid #1c1c1c', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '9px', color: '#444', fontWeight: 'bold' }}>VERSION_5.0_STABLE</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '9px', color: '#666', fontWeight: 'bold' }}>ENERGÍA</span>
          <span style={{ fontSize: '14px', fontWeight: '900' }}>25.00</span>
        </div>
      </footer>
    </div>
  )
}

// ESTILOS MEJORADOS
const menuBtnStyle = { backgroundColor: '#fff', border: 'none', borderRadius: '6px', width: '40px', height: '40px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' };
const lineStyle = { width: '20px', height: '2px', backgroundColor: '#000', borderRadius: '2px' };
const navArrow = { backgroundColor: '#111', color: '#fff', border: '1px solid #222', borderRadius: '6px', width: '35px', height: '35px', fontSize: '20px', cursor: 'pointer' };
const overlayStyle = { position: 'fixed' as const, top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 120, backdropFilter: 'blur(5px)' };
const sidebarRightStyle = { position: 'fixed' as const, top: 0, right: 0, bottom: 0, width: '300px', backgroundColor: '#000', borderLeft: '1px solid #1c1c1c', zIndex: 130, boxShadow: '-20px 0 50px rgba(0,0,0,0.5)' };
const sectionTitle = { fontSize: '9px', fontWeight: 'bold', color: '#666', marginBottom: '15px', letterSpacing: '2px' };
const itemLink = { color: '#fff', textDecoration: 'none', fontSize: '12px', fontWeight: 'bold', padding: '12px 15px', backgroundColor: '#111', borderRadius: '8px', display: 'flex', alignItems: 'center' };
