"use client"
import { useState } from 'react';

export default function MusicGen() {
  const [loading, setLoading] = useState(false);
  return (
    <div style={{ padding: '25px', backgroundColor: '#000', minHeight: '100vh', color: '#fff', fontFamily: 'sans-serif' }}>
      <h2 style={{ fontSize: '24px', fontWeight: '900', fontStyle: 'italic', margin: '0' }}>MUSIC_GEN</h2>
      <p style={{ color: '#555', fontSize: '10px', marginBottom: '30px', fontWeight: 'bold' }}>SINTETIZADOR_DE_AUDIO_Y_MELODÍA</p>
      <textarea style={{ width: '100%', height: '100px', backgroundColor: '#0a0a0a', border: '1px solid #222', borderRadius: '10px', color: '#fff', padding: '15px', outline: 'none', marginBottom: '15px', boxSizing: 'border-box' }} placeholder="Ej: Un beat de trap oscuro con violines cinemáticos..." />
      <button onClick={() => {setLoading(true); setTimeout(()=>setLoading(false), 5000)}} style={{ width: '100%', backgroundColor: '#fff', color: '#000', padding: '18px', borderRadius: '12px', fontWeight: '900', border: 'none' }}>
        {loading ? 'COMPONIENDO PISTA...' : 'GENERAR MÚSICA (6 CRD)'}
      </button>
    </div>
  );
}
