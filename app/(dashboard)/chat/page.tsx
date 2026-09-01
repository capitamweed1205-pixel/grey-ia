"use client"
import { useState } from 'react';

export default function ChatPage() {
  const [input, setInput] = useState("");
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '20px', backgroundColor: 'black' }}>
      <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ padding: '20px', backgroundColor: '#111', border: '1px solid #222', borderRadius: '15px', maxWidth: '80%' }}>
          SISTEMA_GREY CONECTADO. Esperando instrucciones...
        </div>
      </div>
      <div style={{ padding: '20px' }}>
        <input 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ width: '100%', padding: '20px', backgroundColor: '#050505', border: '1px solid #1c1c1c', borderRadius: '15px', color: 'white', outline: 'none' }}
          placeholder="Escribe un comando a la IA..."
        />
      </div>
    </div>
  );
}
