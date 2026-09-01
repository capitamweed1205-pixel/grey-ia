"use client"
import { useState } from 'react';

export default function Img2VideoPage() {
  const [image, setImage] = useState<string | null>(null);
  const [generating, setGenerating] = useState(false);

  return (
    <div style={{ padding: '25px', backgroundColor: '#000', minHeight: '100vh', color: '#fff', fontFamily: 'sans-serif' }}>
      <h2 style={{ fontSize: '24px', fontWeight: '900', fontStyle: 'italic', margin: '0' }}>MOTION_ENGINE</h2>
      <p style={{ color: '#555', fontSize: '10px', marginBottom: '30px', fontWeight: 'bold' }}>ANIMACIÓN_DE_IMÁGENES_ESTÁTICAS</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* ZONA DE CARGA */}
        <div style={{ backgroundColor: '#0a0a0a', border: '2px dashed #222', padding: '40px 20px', borderRadius: '15px', textAlign: 'center' }}>
          {image ? (
            <p style={{ color: '#fff', fontSize: '12px' }}>IMAGEN_SELECCIONADA.JPG</p>
          ) : (
            <p style={{ fontSize: '12px', color: '#888' }}>SUBE LA FOTO QUE QUIERES ANIMAR</p>
          )}
          <button style={{ marginTop: '10px', backgroundColor: '#111', color: '#fff', border: '1px solid #333', padding: '10px 20px', borderRadius: '8px', fontSize: '12px' }}>
            CARGAR FOTO
          </button>
        </div>

        {/* PROMPT DE MOVIMIENTO */}
        <div style={{ backgroundColor: '#0a0a0a', border: '1px solid #1c1c1c', padding: '20px', borderRadius: '15px' }}>
          <label style={{ fontSize: '10px', color: '#444', fontWeight: 'bold', display: 'block', marginBottom: '10px' }}>DESCRIBE EL MOVIMIENTO (OPCIONAL)</label>
          <input 
            style={{ width: '100%', backgroundColor: '#000', border: '1px solid #222', borderRadius: '10px', color: '#fff', padding: '15px', fontSize: '14px', outline: 'none', marginBottom: '15px', boxSizing: 'border-box' }}
            placeholder="Ej: Que el agua se mueva, zoom lento..."
          />
          <button 
            onClick={() => { setGenerating(true); setTimeout(() => setGenerating(false), 5000); }}
            style={{ width: '100%', backgroundColor: '#fff', color: '#000', padding: '18px', borderRadius: '10px', fontWeight: '900', border: 'none' }}
          >
            {generating ? 'ANIMANDO PÍXELES...' : 'DAR VIDA A LA FOTO (5 CRD)'}
          </button>
        </div>

        {/* MONITOR */}
        <div style={{ height: '250px', backgroundColor: '#0a0a0a', border: '1px solid #1c1c1c', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {generating ? <p style={{ fontSize: '12px', color: '#fff' }}>CALCULANDO TRAYECTORIAS...</p> : <p style={{ color: '#222', fontWeight: 'bold' }}>MONITOR_SISTEMA</p>}
        </div>
      </div>
    </div>
  );
}
