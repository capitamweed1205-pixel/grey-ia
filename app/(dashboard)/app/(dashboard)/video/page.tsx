"use client"
import { useState } from 'react';

export default function VideoPage() {
  const [generating, setGenerating] = useState(false);
  const [videoDone, setVideoDone] = useState(false);

  const handleVideo = () => {
    setGenerating(true);
    setVideoDone(false);
    setTimeout(() => {
      setGenerating(false);
      setVideoDone(true);
    }, 5000);
  };

  return (
    <div style={{ padding: '25px', backgroundColor: '#000', minHeight: '100%', fontFamily: 'sans-serif' }}>
      <h2 style={{ fontSize: '26px', fontWeight: '900', fontStyle: 'italic', margin: '0 0 5px 0', color: '#fff' }}>CINEMATIC_VIDEO</h2>
      <p style={{ color: '#555', fontSize: '10px', letterSpacing: '2px', marginBottom: '30px', fontWeight: 'bold' }}>REAL_SOUND_ENGINE_V2</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* PANEL DE CONTROL */}
        <div style={{ backgroundColor: '#0a0a0a', border: '1px solid #1c1c1c', padding: '20px', borderRadius: '20px' }}>
          <label style={{ display: 'block', fontSize: '10px', color: '#555', fontWeight: 'bold', marginBottom: '10px' }}>DESCRIBE LA ESCENA CINEMATOGRÁFICA</label>
          <textarea 
            style={{ width: '100%', height: '100px', backgroundColor: '#000', border: '1px solid #222', borderRadius: '12px', color: '#fff', padding: '15px', fontSize: '16px', outline: 'none', marginBottom: '15px', resize: 'none', boxSizing: 'border-box' }}
            placeholder="Ej: Un coche deportivo a toda velocidad por Tokyo de noche, lluvia realista y sonido de motor turbo..."
          />
          
          <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
            <div style={{ flex: 1, backgroundColor: '#111', padding: '10px', borderRadius: '10px', border: '1px solid #222' }}>
              <p style={{ fontSize: '8px', color: '#555', margin: '0 0 5px 0' }}>AUDIO_FX</p>
              <select style={{ width: '100%', background: 'none', color: '#fff', border: 'none', fontSize: '12px', outline: 'none' }}>
                <option>Inmersivo (3D)</option>
                <option>Sonido Ambiente</option>
                <option>Solo Música</option>
              </select>
            </div>
            <div style={{ flex: 1, backgroundColor: '#111', padding: '10px', borderRadius: '10px', border: '1px solid #222' }}>
              <p style={{ fontSize: '8px', color: '#555', margin: '0 0 5px 0' }}>MOVIMIENTO</p>
              <select style={{ width: '100%', background: 'none', color: '#fff', border: 'none', fontSize: '12px', outline: 'none' }}>
                <option>Dinámico</option>
                <option>Cámara Lenta</option>
                <option>Zoom In</option>
              </select>
            </div>
          </div>

          <button 
            onClick={handleVideo}
            style={{ width: '100%', backgroundColor: '#fff', color: '#000', padding: '18px', borderRadius: '12px', fontWeight: '900', border: 'none', fontSize: '14px', cursor: 'pointer' }}
          >
            {generating ? 'RENDERIZANDO VÍDEO Y AUDIO...' : 'GENERAR VÍDEO REALISTA (8 CRD)'}
          </button>
        </div>

        {/* PREVISUALIZACIÓN */}
        <div style={{ height: '250px', backgroundColor: '#0a0a0a', border: '1px solid #1c1c1c', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', position: 'relative' }}>
          {generating ? (
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '40px', height: '40px', border: '3px solid #222', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 1s linear infinite', margin: '0 auto 15px' }}></div>
              <p style={{ color: '#fff', fontSize: '10px', fontWeight: 'bold', letterSpacing: '2px' }}>PROCESANDO PÍXELES Y ONDAS DE SONIDO...</p>
            </div>
          ) : videoDone ? (
            <div style={{ width: '100%', height: '100%', backgroundColor: '#111', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
               <p style={{ color: '#fff', fontWeight: 'bold' }}>▶ VÍDEO_GENERADO_CON_ÉXITO.MP4</p>
               <button style={{ marginTop: '15px', backgroundColor: '#222', color: '#fff', border: '1px solid #444', padding: '10px 20px', borderRadius: '8px', fontSize: '12px' }}>DESCARGAR VÍDEO</button>
            </div>
          ) : (
            <p style={{ color: '#222', fontWeight: '900', letterSpacing: '4px' }}>MONITOR_DE_VÍDEO</p>
          )}
        </div>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
