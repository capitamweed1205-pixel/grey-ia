"use client"
import { useState } from 'react';

export default function FaceSwap() {
  const [loading, setLoading] = useState(false);
  return (
    <div style={{ padding: '25px', backgroundColor: '#000', minHeight: '100vh', color: '#fff', fontFamily: 'sans-serif' }}>
      <h2 style={{ fontSize: '24px', fontWeight: '900', fontStyle: 'italic', margin: '0' }}>FACE_SWAP</h2>
      <p style={{ color: '#555', fontSize: '10px', marginBottom: '30px', fontWeight: 'bold' }}>REEMPLAZO_DE_IDENTIDAD_IA</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
        <div style={{ backgroundColor: '#0a0a0a', border: '1px dashed #333', padding: '20px', borderRadius: '15px', textAlign: 'center', fontSize: '10px' }}>SUBIR ROSTRO ORIGEN</div>
        <div style={{ backgroundColor: '#0a0a0a', border: '1px dashed #333', padding: '20px', borderRadius: '15px', textAlign: 'center', fontSize: '10px' }}>SUBIR IMAGEN DESTINO</div>
      </div>
      <button onClick={() => {setLoading(true); setTimeout(()=>setLoading(false), 4000)}} style={{ width: '100%', backgroundColor: '#fff', color: '#000', padding: '18px', borderRadius: '12px', fontWeight: '900', border: 'none' }}>
        {loading ? 'PROCESANDO IDENTIDAD...' : 'INTERCAMBIAR CARAS (4 CRD)'}
      </button>
    </div>
  );
}
