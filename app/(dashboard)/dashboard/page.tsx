"use client"
export default function DiscoveryFeed() {
  const creations = [
    { id: 1, title: 'Photo Edit', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500' },
    { id: 2, title: 'Reimagine', url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500' },
    { id: 3, title: 'Smart Resize', url: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=500' },
    { id: 4, title: 'BG Removal', url: 'https://images.unsplash.com/photo-1544465531-028d6238ef42?w=500' },
  ];

  return (
    <div style={{ padding: '20px', backgroundColor: '#000' }}>
      <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '20px', letterSpacing: '-0.5px' }}>Tendencias destacadas</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        {creations.map(c => (
          <div key={c.id} style={{ position: 'relative', height: '260px', borderRadius: '25px', overflow: 'hidden', border: '1px solid #161616' }}>
            <img src={c.url} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }} />
            <span style={{ position: 'absolute', bottom: '15px', left: '15px', fontWeight: 'bold', fontSize: '13px' }}>{c.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
