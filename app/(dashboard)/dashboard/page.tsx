"use client"
export default function DiscoveryPage() {
  const feed = [
    { id: 1, type: 'VIDEO', user: '@Capitan', prompt: 'Cyberpunk Tokyo Lofi', url: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=400' },
    { id: 2, type: 'IMAGE', user: '@GreyIA', prompt: 'Neon Samurai 4k', url: 'https://images.unsplash.com/photo-1544465531-028d6238ef42?w=400' },
    { id: 3, type: 'VIDEO', user: '@UserX', prompt: 'Nebula Space Journey', url: 'https://images.unsplash.com/photo-1464802686167-b939a6910659?w=400' },
    { id: 4, type: 'IMAGE', user: '@Visual', prompt: 'Minimalist Architecture', url: 'https://images.unsplash.com/photo-1518005020252-3b8c5c70ad45?w=400' },
  ];

  return (
    <div style={{ padding: '20px', backgroundColor: '#000' }}>
      <header style={{ marginBottom: '25px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: '900', fontStyle: 'italic', margin: 0 }}>EXPLORAR_TENDENCIAS</h2>
        <p style={{ color: '#444', fontSize: '9px', fontWeight: 'bold', letterSpacing: '2px' }}>LAS MEJORES CREACIONES DE LA COMUNIDAD</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
        {feed.map(item => (
          <div key={item.id} style={{ backgroundColor: '#0a0a0a', border: '1px solid #161616', borderRadius: '15px', overflow: 'hidden', position: 'relative' }}>
            <img src={item.url} style={{ width: '100%', height: '180px', objectFit: 'cover', opacity: 0.7 }} />
            
            <div style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'rgba(0,0,0,0.6)', padding: '3px 6px', borderRadius: '4px', fontSize: '7px', fontWeight: 'bold' }}>
              {item.type}
            </div>

            <div style={{ padding: '10px' }}>
              <p style={{ fontSize: '9px', fontWeight: 'bold', color: '#fff', margin: '0 0 4px 0' }}>{item.user}</p>
              <p style={{ fontSize: '8px', color: '#555', margin: '0 0 10px 0', height: '20px', overflow: 'hidden' }}>"{item.prompt}"</p>
              <button style={{ width: '100%', backgroundColor: '#fff', color: '#000', border: 'none', padding: '8px', borderRadius: '6px', fontSize: '9px', fontWeight: '900' }}>
                USAR_ESTILO
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
