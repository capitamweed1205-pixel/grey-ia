"use client"
import { useState } from 'react';

export default function ChatPage() {
  const [input, setInput] = useState("");
  return (
    <div style={{backgroundColor: '#000', color: '#fff', height: '100vh', display: 'flex', flexDirection: 'column', fontFamily: 'sans-serif'}}>
      <div style={{flex: 1, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '15px'}}>
        <div style={{backgroundColor: '#111', border: '1px solid #222', padding: '15px', borderRadius: '15px', maxWidth: '85%', fontSize: '14px', lineHeight: '1.5'}}>
          SISTEMA_GREY CONECTADO. La red neuronal está lista para procesar comandos locales.
        </div>
      </div>
      <div style={{padding: '20px', backgroundColor: '#000'}}>
        <div style={{backgroundColor: '#0a0a0a', border: '1px solid #1c1c1c', borderRadius: '20px', display: 'flex', padding: '5px'}}>
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{flex: 1, backgroundColor: 'transparent', border: 'none', color: '#fff', padding: '15px', outline: 'none', fontSize: '16px'}}
            placeholder="Pregunta a GREY..."
          />
          <button style={{backgroundColor: '#fff', color: '#000', border: 'none', padding: '10px 20px', borderRadius: '15px', fontWeight: 'bold', margin: '5px'}}>
            ENVIAR
          </button>
        </div>
      </div>
    </div>
  );
}
