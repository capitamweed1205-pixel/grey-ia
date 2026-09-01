"use client"
import Link from 'next/link';

export default function DiscoveryPage() {
  const stories = [
    { id: 1, img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200', txt: 'ERA ORDENADOR' },
    { id: 2, img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200', txt: 'HACKEO ELITE' },
    { id: 3, img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200', txt: 'SISTEMA_IA' },
    { id: 4, img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200', txt: 'CONEXIÓN' },
  ];

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', padding: '15px', color: '#fff', fontFamily: 'sans-serif' }}>
      <header style={{ padding: '20px 5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '24px', fontWeight: '900', fontStyle: 'italic' }}>GREY</h1>
      </header>

      {/* SECCIÓN ANIMA TUS FOTOS */}
      <div style={{ marginBottom: '30px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 'bold' }}>Anima tus fotos</h2>
          <span style={{ color: '#666', fontSize: '12px' }}>Ver todo ›</span>
        </div>
        <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '10px' }}>
          {stories.map(s => (
            <div key={s.id} style={{ flexShrink: 0, width: '100px', height: '140px', borderRadius: '12px', overflow: 'hidden', position: 'relative', border: '1px solid #222' }}>
              <img src={s.img} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} />
              <div style={{ position: 'absolute', bottom: '8px', left: '8px', right: '8px', fontSize: '8px', fontWeight: '900', textAlign: 'center', backgroundColor: 'rgba(0,0,0,0.5)', padding: '2px', borderRadius: '4px' }}>{s.txt}</div>
            </div>
          ))}
        </div>
      </div>

      {/* PLANTILLAS DESTACADAS */}
      <div>
        <h2 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '15px' }}>Plantillas destacadas</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <div style={cardStyle}><img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400" style={imgStyle} /><div style={cardLabel}>Photo Edit</div></div>
          <div style={cardStyle}><img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400" style={imgStyle} /><div style={cardLabel}>Reimagine</div></div>
          <div style={cardStyle}><img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=400" style={imgStyle} /><div style={cardLabel}>Smart Resize</div></div>
          <div style={cardStyle}><img src="https://images.unsplash.com/photo-1544465531-028d6238ef42?w=400" style={imgStyle} /><div style={cardLabel}>BG Removal</div></div>
        </div>
      </div>
    </div>
  );
}

const cardStyle = { height: '220px', backgroundColor: '#0a0a0a', borderRadius: '20px', overflow: 'hidden', position: 'relative' as const, border: '1px solid #161616' };
const imgStyle = { width: '100%', height: '100%', objectFit: 'cover' as const, opacity: 0.8 };
const cardLabel = { position: 'absolute' as const, bottom: '15px', left: '15px', fontSize: '12px', fontWeight: 'bold', color: '#fff' };
