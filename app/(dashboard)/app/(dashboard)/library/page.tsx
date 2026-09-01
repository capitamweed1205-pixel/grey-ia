"use client"
import Link from 'next/link';

export default function PrivateLibrary() {
  const misCreaciones = [
    { id: 1, type: 'VIDEO', url: 'https://images.unsplash.com/photo-1614728263952-84ea206f25b1?w=400', label: 'Coche en Tokyo' },
    { id: 2, type: 'IMAGE', url: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=400', label: 'Samurai Neon' },
  ];

  return (
    <div style={{ padding: '25px', backgroundColor: '#000', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <header style={{ marginBottom: '30px', borderLeft: '3px solid #fff', paddingLeft: '15px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '900', fontStyle: 'italic', margin: 0 }}>MI_BOVEDA_PRIVADA</h2>
        <p style={{ color: '#444', fontSize: '9px', fontWeight: 'bold', letterSpacing: '2px' }}>CONTENIDO PROTEGIDO POR IA</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        {misCreaciones.map(item => (
          <div key={item.id} style={{ backgroundColor: '#0a0a0a', borderRadius: '15px', overflow: 'hidden', border: '1px solid #161616' }}>
            <img src={item.url} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
            <div style={{ padding: '10px' }}>
              <span style={{ fontSize: '8px', color: '#fff', backgroundColor: '#222', padding: '2px 5px', borderRadius: '3px' }}>{item.type}</span>
              <p style={{ fontSize: '11px', fontWeight: 'bold', color: '#fff', marginTop: '5px' }}>{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
