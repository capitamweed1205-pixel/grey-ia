"use client"
import { useState } from 'react';
import { Send, Bot, User } from 'lucide-react';

export default function ChatPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: 'ai', text: 'SISTEMA_GREY CONECTADO. La red neuronal está lista.' }
  ]);

  const send = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: 'user', text: input }, { role: 'ai', text: 'MODO_DEMO: Procesando en nodos locales...' }]);
    setInput("");
  };

  return (
    <div className="flex flex-col h-screen bg-black text-white">
      {/* Mensajes */}
      <div className="flex-1 overflow-y-auto p-4 md:p-10 space-y-6">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`p-4 rounded-2xl max-w-[85%] ${m.role === 'user' ? 'bg-white text-black' : 'bg-zinc-900 border border-zinc-800 text-zinc-100'}`}>
              {m.text}
            </div>
          </div>
        ))}
      </div>

      {/* Cuadro para escribir abajo */}
      <div className="p-6 max-w-4xl mx-auto w-full">
        <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center p-2">
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Pregunta a GREY..."
            className="flex-1 bg-transparent border-none p-4 text-white outline-none"
          />
          <button onClick={send} className="p-3 bg-white text-black rounded-xl font-bold">
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
