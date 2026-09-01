"use client"
import { useState } from 'react';

export default function ChatPage() {
  const [input, setInput] = useState("");

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#000', fontFamily: 'sans-serif' }}>
      
      {/* AREA DE MENSAJES */}
      <div style={{ flex: 1, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div style={{ alignSelf: 'flex-start', backgroundColor: '#111', padding: '15px', borderRadius: '18px', maxWidth: '85%', border: '1px solid #222' }}>
          <p style={{ margin: 0, fontSize: '15px', color: '#fff' }}>SISTEMA_GREY CONECTADO. ¿Qué misión tenemos hoy?</p>
        </div>
      </div>

      {/* BARRA FLOTANTE ESTILO SUPERGROK / CHAGPT */}
      <div style={{ padding: '20px', paddingBottom: '40px' }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          backgroundColor: 'rgba(30, 30, 30, 0.8)', 
          backdropFilter: 'blur(20px)', 
          borderRadius: '40px', 
          padding: '8px 12px',
          gap: '10px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          
          {/* Avatar Usuario */}
          <div style={{ width: '35px', height: '35px', borderRadius: '50%', backgroundColor: '#333', overflow: 'hidden' }}>
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" style={{ width: '100%' }} />
          </div>

          {/* Botón "+" de IA */}
          <button style={{ background: '#fff', border: 'none', width: '35px', height: '35px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <span style={{ fontSize: '18px', fontWeight: 'bold' }}>+</span>
          </button>

          {/* Input de Texto */}
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ flex: 1, backgroundColor: 'transparent', border: 'none', color: '#fff', fontSize: '14px', outline: 'none' }}
            placeholder="(Generado por IA)"
          />

          {/* Iconos Derecha */}
          <div style={{ display: 'flex', gap: '12px', paddingRight: '5px' }}>
            <div style={{ cursor: 'pointer', opacity: 0.7 }}>⚙️</div>
            <div style={{ cursor: 'pointer', color: '#fff' }}>
              <div style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
                {[1,2,3,4].map(i => <div key={i} style={{ width: '2px', height: '12px', backgroundColor: '#fff', borderRadius: '2px' }}></div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
