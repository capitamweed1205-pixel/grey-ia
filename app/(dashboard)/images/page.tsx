"use client"
import { useState } from 'react';

export default function ImagesPage() {
  const [prompt, setPrompt] = useState("");
  const [generating, setGenerating] = useState(false);

  return (
    <div style={{ padding: '25px', backgroundColor: '#000', minHeight: '100%', fontFamily: 'sans-serif' }}>
      <h2 style={{ fontSize: '26px', fontWeight: '900', fontStyle: 'italic', margin: '0 0 5px 0', color: '#fff' }}>VISUAL_GEN</h2>
      <p style={{ color: '#555', fontSize: '10px', letterSpacing: '2px', marginBottom: '30px', fontWeight: 'bold' }}>TEXT_TO_IMAGE_ENGINE_V1</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
        {/* CAJA DE TEXTO */}
        <div style={{ backgroundColor: '#0a0a0a', border: '1px solid #1c1c1c', padding: '20px', borderRadius: '20px' }}>
          <textarea 
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            style={{ width: '100%', height: '120px', backgroundColor: '#000', border: '1px solid #222', borderRadius: '15px', color: '#fff', padding: '15px', fontSize: '16px', outline: 'none', boxSizing: 'border-box', marginBottom: '15px', resize: 'none' }}
            placeholder="Describe tu imagen aquí..."
          />
          <button 
            onClick={() => { setGenerating(true); setTimeout(() => setGenerating(false), 3000); }}
            style={{ width: '100%', backgroundColor: '#fff', color: '#000', padding: '20px', borderRadius: '15px', fontWeight: '900', border: 'none', fontSize: '14px', cursor: 'pointer' }}
          >
            {generating ? 'PROCESANDO...' : 'GENERAR IMAGEN (1 CRD)'}
          </button>
        </div>
        
        {/* ZONA DE RESULTADO */}
        <div style={{ height: '350px', backgroundColor: '#0a0a0a', border: '1px solid #1c1c1c', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          {generating ? (
            <div style={{ color: '#fff' }}>
               <div style={{ width: '30px', height: '30px', border: '3px solid #333', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 1s linear infinite', margin: '0 auto 15px' }}></div>
               <p style={{ fontSize: '11px', fontWeight: 'bold' }}>CONSTRUYENDO PÍXELES...</p>
            </div>
          ) : (
            <span style={{ color: '#222', fontWeight: '900', fontSize: '12px', letterSpacing: '2px' }}>ESPERANDO_DATOS</span>
          )}
        </div>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
