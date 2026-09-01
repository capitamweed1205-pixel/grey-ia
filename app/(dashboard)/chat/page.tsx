"use client"
import { useState } from 'react';
import Link from 'next/link';

export default function SuperGrokChat() {
  const [input, setInput] = useState("");
  const [showSettings, setShowSettings] = useState(false);
  const [aspectRatio, setAspect] = useState('1:1');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#000', fontFamily: 'sans-serif' }}>
      
      {/* AREA DE CONVERSACIÓN */}
      <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
        <div style={{ backgroundColor: '#111', padding: '15px', borderRadius: '15px', maxWidth: '85%', border: '1px solid #222', fontSize: '14px' }}>
          SISTEMA_GREY ACTIVO. Modo Creativo (2.0) desbloqueado.
        </div>
      </div>

      {/* SELECTORES DE CALIDAD RAPIDOS */}
      <div style={{ display: 'flex', gap: '8px', padding: '0 20px', overflowX: 'auto', marginBottom: '10px' }}>
        <div style={pillBtn}>Velocidad</div>
        <div style={pillBtn}>Quality (2.0)</div>
        <div onClick={() => setShowSettings(!showSettings)} style={pillBtn}>Aspect: {aspectRatio} ▾</div>
      </div>

      {/* BARRA FLOTANTE MAESTRA */}
      <div style={{ padding: '10px 20px 30px 20px' }}>
        <div style={floatingBar}>
          
          {/* CÍRCULO IZQUIERDA (BIBLIOTECA PRIVADA) */}
          <Link href="/library" style={{ textDecoration: 'none' }}>
            <div style={avatarCircle}>
              <img src="https://api.dicebear.com/7.x/pixel-art/svg?seed=Grey" style={{ width: '100%' }} />
            </div>
          </Link>

          {/* BOTÓN + */}
          <button style={plusBtn}>+</button>

          {/* INPUT */}
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={inputStyle}
            placeholder="(Generado por IA)"
          />

          {/* ICONOS DERECHA */}
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center', paddingRight: '5px' }}>
            <span style={{ cursor: 'pointer', fontSize: '18px' }}>⚙️</span>
            <div style={waveIcon}>
              <div style={bar}></div><div style={{...bar, height: '15px'}}></div><div style={bar}></div>
            </div>
          </div>
        </div>
      </div>

      {/* MENU DE AJUSTES FLOTANTE */}
      {showSettings && (
        <div style={modalStyle}>
          <p style={{ fontSize: '10px', fontWeight: 'bold', color: '#666', marginBottom: '10px' }}>RELACIÓN DE ASPECTO</p>
          {['1:1', '9:16', '16:9', '2:3'].map(a => (
            <div key={a} onClick={() => {setAspect(a); setShowSettings(false)}} style={modalItem}>{a}</div>
          ))}
        </div>
      )}
    </div>
  );
}

// ESTILOS
const pillBtn = { backgroundColor: '#111', color: '#fff', padding: '6px 15px', borderRadius: '20px', fontSize: '10px', fontWeight: 'bold', border: '1px solid #222', whiteSpace: 'nowrap' as const };
const floatingBar = { display: 'flex', alignItems: 'center', backgroundColor: '#1a1a1a', borderRadius: '40px', padding: '8px 12px', gap: '12px', border: '1px solid #333' };
const avatarCircle = { width: '38px', height: '38px', borderRadius: '50%', backgroundColor: '#333', border: '2px solid #fff', overflow: 'hidden' };
const plusBtn = { background: '#fff', border: 'none', width: '32px', height: '32px', borderRadius: '50%', fontSize: '20px', fontWeight: 'bold' };
const inputStyle = { flex: 1, background: 'none', border: 'none', color: '#fff', outline: 'none', fontSize: '14px' };
const waveIcon = { display: 'flex', gap: '2px', alignItems: 'center' };
const bar = { width: '2px', height: '10px', backgroundColor: '#fff', borderRadius: '2px' };
const modalStyle = { position: 'fixed' as const, bottom: '100px', right: '20px', backgroundColor: '#111', border: '1px solid #333', padding: '15px', borderRadius: '15px', zIndex: 200, width: '150px' };
const modalItem = { padding: '10px 0', borderBottom: '1px solid #222', fontSize: '12px', color: '#fff', cursor: 'pointer' };
