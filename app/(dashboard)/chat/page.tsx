"use client"
import { useState } from 'react';

export default function ChatPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{ role: 'ai', text: 'SISTEMA_GREY CONECTADO. La red neuronal está lista para procesar comandos.' }]);

  const send = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: 'user', text: input }, { role: 'ai', text: 'MODO_DEMO: Procesando consulta...' }]);
    setInput("");
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#000' }}>
      {/* AREA DE MENSAJES */}
      <div style={{ flex: 1, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {messages.map((m, i) => (
          <div key={i} style={{ 
            alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start',
            backgroundColor: m.role === 'user' ? '#fff' : '#111',
            color: m.role === 'user' ? '#000' : '#fff',
            padding: '15px',
            borderRadius: '18px',
            maxWidth: '85%',
            fontSize: '15px',
            lineHeight: '1.4',
            border: m.role === 'user' ? 'none' : '1px solid #222'
          }}>
            {m.text}
          </div>
        ))}
      </div>

      {/* INPUT ABAJO */}
      <div style={{ padding: '20px', paddingBottom: '30px' }}>
        <div style={{ display: 'flex', backgroundColor: '#0a0a0a', border: '1px solid #333', borderRadius: '30px', padding: '5px 5px 5px 20px', alignItems: 'center' }}>
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ flex: 1, backgroundColor: 'transparent', border: 'none', color: '#fff', padding: '12px 0', outline: 'none', fontSize: '16px' }}
            placeholder="Pregunta a GREY..."
          />
          <button onClick={send} style={{ backgroundColor: '#fff', color: '#000', border: 'none', padding: '12px 20px', borderRadius: '25px', fontWeight: 'bold', fontSize: '12px', marginLeft: '10px' }}>
            ENVIAR
          </button>
        </div>
      </div>
    </div>
  );
}
