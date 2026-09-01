"use client"
import { useState } from 'react';
import Link from 'next/link';

export default function ChatPage() {
  const [input, setInput] = useState("");

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#000' }}>
      <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
        <div style={{ backgroundColor: '#111', padding: '15px', borderRadius: '18px', maxWidth: '85%', border: '1px solid #222', fontSize: '15px' }}>
          SISTEMA_GREY CONECTADO. ¿Qué misión tenemos hoy?
        </div>
      </div>

      {/* BARRA DE CHAT FLOTANTE */}
      <div style={{ position: 'fixed', bottom: '30px', left: '15px', right: '15px', zIndex: 500 }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          backgroundColor: 'rgba(30, 30, 30, 0.7)', 
          backdropFilter: 'blur(20px)', 
          borderRadius: '40px', 
          padding: '8px 10px', 
          gap: '10px',
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
        }}>
          {/* CÍRCULO BIBLIOTECA (MI CONTENIDO) */}
          <Link href="/library" style={{ textDecoration: 'none' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#fff', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="https://api.dicebear.com/7.x/bottts/svg?seed=Felix" style={{ width: '80%' }} />
            </div>
          </Link>

          <button style={{ background: '#333', border: 'none', width: '35px', height: '35px', borderRadius: '50%', color: '#fff', fontSize: '20px' }}>+</button>

          <input 
            value={input} onChange={(e) => setInput(e.target.value)}
            style={{ flex: 1, background: 'none', border: 'none', color: '#fff', outline: 'none', fontSize: '14px' }}
            placeholder="(Generado por IA)"
          />

          <div style={{ display: 'flex', gap: '15px', marginRight: '10px' }}>
            <span style={{ fontSize: '18px', opacity: 0.6 }}>⚙️</span>
            <span style={{ fontSize: '18px' }}>|||</span>
          </div>
        </div>
      </div>
    </div>
  );
}
