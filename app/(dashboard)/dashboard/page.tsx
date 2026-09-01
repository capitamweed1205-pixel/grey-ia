"use client"
export default function DiscoveryPage() {
  const tendencias = [
    { id: 1, url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400', user: '@Capitan' },
    { id: 2, url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400', user: '@Grey_IA' },
  ];

  return (
    <div style={{ padding: '20px', backgroundColor: '#000' }}>
      <h2 style={{ fontSize: '18px', fontWeight: '900', fontStyle: 'italic', marginBottom: '20px' }}>TENDENCIAS</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
        {tendencias.map(item => (
          <div key={item.id} style={{ backgroundColor: '#0a0a0a', borderRadius: '20px', overflow: 'hidden', border: '1px solid #161616' }}>
            <img src={item.url} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
            <div style={{ padding: '10px' }}>
              <button style={{ width: '100%', backgroundColor: '#fff', color: '#000', border: 'none', padding: '8px', borderRadius: '8px', fontSize: '10px', fontWeight: '900' }}>USAR_ESTILO</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
