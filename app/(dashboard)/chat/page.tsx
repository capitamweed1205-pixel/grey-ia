"use client"
import { useState } from 'react';
import Link from 'next/link';

export default function ChatPage() {
  const [input, setInput] = useState("");

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#000' }}>
      <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
        <div style={{ backgroundColor: '#111', padding: '15px', borderRadius: '15px', maxWidth: '85%', border: '1px solid #222', color: '#fff', fontSize: '14px' }}>
          SISTEMA_GREY CONECTADO. ¿Qué misión tenemos hoy?
        </div>
      </div>

      {/* BARRA FLOTANTE CON ACCESO A BIBLIOTECA */}
      <div style={{ padding: '20px 20px 40px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#1a1a1a', borderRadius: '40px', padding: '8px 12px', gap: '12px', border: '1px solid #333' }}>
          
          {/* EL CÍRCULO A LA IZQUIERDA (ACCESO A GUARDADOS) */}
          <Link href="/library" style={{ textDecoration: 'none' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: '#333', border: '2px solid #fff', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              <img src="https://api.dicebear.com/7.x/shapes/svg?seed=Grey" style={{ width: '100%' }} />
            </div>
          </Link>

          <button style={{ background: '#fff', border: 'none', width: '32px', height: '32px', borderRadius: '50%', fontSize: '18px', fontWeight: 'bold' }}>+</button>

          <input 
            value={input} onChange={(e) => setInput(e.target.value)}
            style={{ flex: 1, background: 'none', border: 'none', color: '#fff', outline: 'none', fontSize: '14px' }}
            placeholder="(Generado por IA)"
          />

          <div style={{ display: 'flex', gap: '10px' }}>
            <span>⚙️</span>
            <span style={{ fontWeight: 'bold' }}>|||</span>
          </div>
        </div>
      </div>
    </div>
  );
}
