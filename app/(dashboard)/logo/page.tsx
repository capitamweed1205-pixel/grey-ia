"use client"
import { useState } from 'react';

export default function LogoAI() {
  const [loading, setLoading] = useState(false);
  return (
    <div style={{ padding: '25px', backgroundColor: '#000', minHeight: '100vh', color: '#fff', fontFamily: 'sans-serif' }}>
      <h2 style={{ fontSize: '24px', fontWeight: '900', fontStyle: 'italic', margin: '0' }}>LOGO_PRO</h2>
      <p style={{ color: '#555', fontSize: '10px', marginBottom: '30px', fontWeight: 'bold' }}>BRANDING_IDENTIDAD_VISUAL</p>
      <input style={{ width: '100%', backgroundColor: '#0a0a0a', border: '1px solid #222', borderRadius: '10px', color: '#fff', padding: '15px', outline: 'none', marginBottom: '15px', boxSizing: 'border-box' }} placeholder="Nombre de tu marca..." />
      <button onClick={() => {setLoading(true); setTimeout(()=>setLoading(false), 3000)}} style={{ width: '100%', backgroundColor: '#fff', color: '#000', padding: '18px', borderRadius: '12px', fontWeight: '900', border: 'none' }}>
        {loading ? 'DISEÑANDO MARCA...' : 'CREAR LOGOTIPO (2 CRD)'}
      </button>
    </div>
  );
}
