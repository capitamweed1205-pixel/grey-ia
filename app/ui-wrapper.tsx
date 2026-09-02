"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';

export default function UIWrapper({ children }: { children: React.ReactNode }) {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const router = useRouter();

  const settings = [
    { name: 'MI_CUENTA_PRO', icon: '👤', href: '/profile' },
    { name: 'GESTIÓN_DE_CRÉDITOS', icon: '⚡', href: '/billing' },
    { name: 'PANEL_CONTROL_ADMIN', icon: '🛡️', href: '/admin' },
    { name: 'CERRAR_SESIÓN', icon: '🚪', action: 'logout' },
  ];

  const manejarClick = (s: any) => {
    if (s.action === 'logout') {
      signOut({ callbackUrl: '/' });
    } else if (s.href) {
      router.push(s.href);
      setMenuAbierto(false);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#000', color: '#fff' }}>
      <header style={{ borderBottom: '1px solid #111', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ visibility: 'hidden', width: '40px' }}></div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '22px', fontWeight: '900', fontStyle: 'italic' }}>GREY</div>
          <div style={{ fontSize: '8px', color: '#555', letterSpacing: '2px' }}>ESTUDIO CREATIVO</div>
        </div>
        <button onClick={() => setMenuAbierto(true)} style={{ backgroundColor: '#fff', border: 'none', borderRadius: '6px', width: '35px', height: '35px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '3px' }}>
          <div style={{ width: '15px', height: '2px', backgroundColor: '#000' }}></div>
          <div style={{ width: '15px', height: '2px', backgroundColor: '#000' }}></div>
        </button>
      </header>

      {menuAbierto && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 2000, display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ width: '80%', maxWidth: '300px', backgroundColor: '#050505', height: '100%', padding: '30px', borderLeft: '1px solid #111' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
              <span style={{ fontSize: '10px', color: '#444' }}>CONFIGURACIÓN</span>
              <button onClick={() => setMenuAbierto(false)} style={{ color: '#fff', background: 'none', border: 'none', fontSize: '20px' }}>×</button>
            </div>
            {settings.map(s => (
              <div key={s.name} onClick={() => manejarClick(s)} style={{ padding: '18px', backgroundColor: '#0a0a0a', borderRadius: '12px', marginBottom: '10px', fontSize: '11px', fontWeight: 'bold', border: '1px solid #111', cursor: 'pointer' }}>
                {s.icon} {s.name}
              </div>
            ))}
          </div>
        </div>
      )}
      <main style={{ flex: 1, overflowY: 'auto' }}>{children}</main>
    </div>
  );
}
