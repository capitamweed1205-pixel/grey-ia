"use client"
import { useState } from 'react';

export default function VideoPage() {
  const [generating, setGenerating] = useState(false);
  const [done, setDone] = useState(false);

  return (
    <div style={{ padding: '25px', backgroundColor: '#000', minHeight: '100vh', color: '#fff', fontFamily: 'sans-serif' }}>
      <h2 style={{ fontSize: '24px', fontWeight: '900', fontStyle: 'italic', margin: '0' }}>CINEMATIC_VIDEO</h2>
      <p style={{ color: '#555', fontSize: '10px', marginBottom: '30px' }}>REAL_SOUND_ENGINE_V2</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ backgroundColor: '#0a0a0a', border: '1px solid #1c1c1c', padding: '20px', borderRadius: '15px' }}>
          <label style={{ display: 'block', fontSize: '10px', color: '#444', marginBottom: '10px', fontWeight: 'bold' }}>PROMPT_DE_VIDEO_Y_AUDIO</label>
          <textarea 
            style={{ width: '100%', height: '100px', backgroundColor: '#000', border: '1px solid #222', borderRadius: '10px', color: '#fff', padding: '15px', outline: 'none', marginBottom: '15px', resize: 'none', boxSizing: 'border-box' }}
            placeholder="Ej: Un volcán en erupción, sonido de explosiones profundas y lava hirviendo..."
          />
          <button 
            onClick={() => { setGenerating(true); setTimeout(() => { setGenerating(false); setDone(true); }, 4000); }}
            style={{ width: '100%', backgroundColor: '#fff', color: '#000', padding: '18px', borderRadius: '10px', fontWeight: '900', border: 'none', cursor: 'pointer' }}
          >
            {generating ? 'GENERANDO CINE...' : 'GENERAR VÍDEO (8 CRD)'}
          </button>
        </div>

        <div style={{ height: '300px', backgroundColor: '#0a0a0a', border: '1px solid #1c1c1c', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {generating ? (
            <p style={{ color: '#fff' }}>PROCESANDO AUDIO REALISTA...</p>
          ) : done ? (
            <p style={{ fontWeight: 'bold' }}>▶ VÍDEO_CON_SONIDO_LISTO.MP4</p>
          ) : (
            <p style={{ color: '#222', fontWeight: 'bold' }}>MONITOR_DE_SISTEMA</p>
          )}
        </div>
      </div>
    </div>
  );
}
