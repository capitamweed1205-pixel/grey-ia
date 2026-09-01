"use client"
import { useState } from 'react';

export default function ImagesPage() {
  const [prompt, setPrompt] = useState("");
  const [generating, setGenerating] = useState(false);

  return (
    <div style={{backgroundColor: '#000', color: '#fff', height: '100vh', padding: '40px', fontFamily: 'sans-serif', overflowY: 'auto'}}>
      <h2 style={{fontSize: '30px', fontWeight: '900', fontStyle: 'italic', marginBottom: '10px'}}>VISUAL_GENERATOR</h2>
      <p style={{color: '#666', marginBottom: '40px', fontSize: '12px', letterSpacing: '2px'}}>TRANSFORMA TEXTO EN PÍXELES</p>

      <div style={{display: 'flex', flexDirection: 'column', gap: '30px', maxWidth: '800px'}}>
        {/* Cuadro de texto */}
        <div style={{backgroundColor: '#0a0a0a', border: '1px solid #1c1c1c', padding: '25px', borderRadius: '20px'}}>
          <textarea 
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            style={{width: '100%', height: '120px', backgroundColor: '#000', border: '1px solid #222', borderRadius: '15px', color: '#fff', padding: '15px', outline: 'none', marginBottom: '20px', fontSize: '16px'}}
            placeholder="Describe la imagen que quieres crear..."
          />
          <button 
            onClick={() => { setGenerating(true); setTimeout(() => setGenerating(false), 3000); }}
            style={{width: '100%', backgroundColor: '#fff', color: '#000', padding: '18px', borderRadius: '15px', fontWeight: '900', border: 'none', cursor: 'pointer'}}
          >
            {generating ? 'GENERANDO...' : 'GENERAR IMAGEN (1 CRD)'}
          </button>
        </div>

        {/* Zona de resultado */}
        <div style={{height: '400px', backgroundColor: '#0a0a0a', border: '1px solid #1c1c1c', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          {generating ? (
            <p style={{color: '#fff', animate: 'pulse'}}>SISTEMA PROCESANDO...</p>
          ) : (
            <p style={{color: '#333', fontWeight: 'bold'}}>EL RENDER APARECERÁ AQUÍ</p>
          )}
        </div>
      </div>
    </div>
  );
}
