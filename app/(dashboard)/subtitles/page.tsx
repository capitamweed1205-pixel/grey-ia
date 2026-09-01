"use client"
import { useState } from 'react';

export default function SubtitlesPage() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleProcess = () => {
    setLoading(true);
    setDone(false);
    setTimeout(() => {
      setLoading(false);
      setDone(true);
    }, 5000);
  };

  return (
    <div style={{ padding: '25px', backgroundColor: '#000', minHeight: '100vh', color: '#fff', fontFamily: 'sans-serif' }}>
      <h2 style={{ fontSize: '24px', fontWeight: '900', fontStyle: 'italic', margin: '0' }}>CAPTIONS_AI</h2>
      <p style={{ color: '#555', fontSize: '10px', marginBottom: '30px', fontWeight: 'bold' }}>TRANSCRIPCIÓN_Y_ESTILO_DINÁMICO</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* CARGA DE ARCHIVO */}
        <div style={{ backgroundColor: '#0a0a0a', border: '2px dashed #222', padding: '40px 20px', borderRadius: '15px', textAlign: 'center' }}>
          <p style={{ fontSize: '12px', color: '#888' }}>ARRASTRA TU VÍDEO AQUÍ O</p>
          <button style={{ marginTop: '10px', backgroundColor: '#111', color: '#fff', border: '1px solid #333', padding: '10px 20px', borderRadius: '8px', fontSize: '12px', fontWeight: 'bold' }}>
            SELECCIONAR ARCHIVO
          </button>
        </div>

        {/* AJUSTES DE ESTILO */}
        <div style={{ backgroundColor: '#0a0a0a', border: '1px solid #1c1c1c', padding: '20px', borderRadius: '15px' }}>
          <label style={{ fontSize: '10px', color: '#444', fontWeight: 'bold', display: 'block', marginBottom: '15px' }}>CONFIGURACIÓN_DE_ESTILO</label>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '20px' }}>
             <select style={{ backgroundColor: '#000', color: '#fff', border: '1px solid #222', padding: '12px', borderRadius: '10px', fontSize: '12px' }}>
                <option>Estilo: DINÁMICO (Hormozi)</option>
                <option>Estilo: MINIMALISTA</option>
                <option>Estilo: BRUTALISTA</option>
             </select>
             <select style={{ backgroundColor: '#000', color: '#fff', border: '1px solid #222', padding: '12px', borderRadius: '10px', fontSize: '12px' }}>
                <option>Idioma: ESPAÑOL</option>
                <option>Idioma: INGLÉS</option>
             </select>
          </div>
          <button 
            onClick={handleProcess}
            style={{ width: '100%', backgroundColor: '#fff', color: '#000', padding: '18px', borderRadius: '10px', fontWeight: '900', border: 'none' }}
          >
            {loading ? 'SINCRONIZANDO PALABRAS...' : 'GENERAR SUBTÍTULOS (3 CRD)'}
          </button>
        </div>

        {/* VISTA PREVIA */}
        <div style={{ height: '200px', backgroundColor: '#0a0a0a', border: '1px solid #1c1c1c', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {loading ? (
            <p style={{ fontSize: '12px', color: '#fff', letterSpacing: '2px' }}>ANALIZANDO AUDIO...</p>
          ) : done ? (
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontWeight: 'bold', color: '#fff' }}>VÍDEO_SUBTITULADO.MP4</p>
              <button style={{ marginTop: '10px', color: '#fff', background: 'none', border: '1px solid #333', padding: '5px 15px', borderRadius: '5px', fontSize: '10px' }}>DESCARGAR</button>
            </div>
          ) : (
            <p style={{ color: '#222', fontWeight: 'bold' }}>PREVISUALIZACIÓN</p>
          )}
        </div>
      </div>
    </div>
  );
}
