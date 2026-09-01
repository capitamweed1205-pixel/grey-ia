"use client"
import { useState } from 'react';

export default function Remaster() {
  const [loading, setLoading] = useState(false);
  return (
    <div style={{ padding: '25px', backgroundColor: '#000', minHeight: '100vh', color: '#fff', fontFamily: 'sans-serif' }}>
      <h2 style={{ fontSize: '24px', fontWeight: '900', fontStyle: 'italic', margin: '0' }}>REMASTER_HD</h2>
      <p style={{ color: '#555', fontSize: '10px', marginBottom: '30px', fontWeight: 'bold' }}>ESCALADO_NEURONAL_4K</p>
      <div style={{ backgroundColor: '#0a0a0a', border: '2px dashed #222', padding: '50px 20px', borderRadius: '15px', textAlign: 'center', marginBottom: '20px' }}>
        <p style={{ fontSize: '12px', color: '#888' }}>ARRASTRA LA IMAGEN BORROSA AQUÍ</p>
      </div>
      <button onClick={() => {setLoading(true); setTimeout(()=>setLoading(false), 4000)}} style={{ width: '100%', backgroundColor: '#fff', color: '#000', padding: '18px', borderRadius: '12px', fontWeight: '900', border: 'none' }}>
        {loading ? 'RECONSTRUYENDO PÍXELES...' : 'LIMPIAR Y ESCALAR (3 CRD)'}
      </button>
    </div>
  );
}
