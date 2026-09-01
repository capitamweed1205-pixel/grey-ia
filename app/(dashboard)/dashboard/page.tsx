"use client"
export default function DiscoveryPage() {
  const creaciones = [
    { id: 1, user: '@Capitan', url: 'https://images.unsplash.com/photo-1614728263952-84ea206f25b1?w=400' },
    { id: 2, user: '@GreyIA', url: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=400' },
    { id: 3, user: '@UserX', url: 'https://images.unsplash.com/photo-1464802686167-b939a6910659?w=400' },
    { id: 4, user: '@Visual', url: 'https://images.unsplash.com/photo-1518005020252-3b8c5c70ad45?w=400' },
    { id: 5, user: '@Design', url: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=400' },
    { id: 6, user: '@Space', url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400' },
  ];

  return (
    <div style={{ padding: '20px', backgroundColor: '#000' }}>
      <header style={{ marginBottom: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <h2 style={{ fontSize: '20px', fontWeight: '900', fontStyle: 'italic', margin: 0 }}>EXPLORAR</h2>
          <p style={{ color: '#444', fontSize: '9px', fontWeight: 'bold' }}>TENDENCIAS_GLOBALES</p>
        </div>
        <div style={{ color: '#fff', fontSize: '9px', fontWeight: 'bold', borderBottom: '2px solid #fff', paddingBottom: '2px' }}>POPULAR</div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
        {creaciones.map(item => (
          <div key={item.id} style={{ backgroundColor: '#0a0a0a', borderRadius: '15px', overflow: 'hidden', border: '1px solid #161616' }}>
            <img src={item.url} style={{ width: '100%', height: '200px', objectFit: 'cover', opacity: 0.8 }} />
            <div style={{ padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '9px', fontWeight: 'bold', color: '#555' }}>{item.user}</span>
              <button style={{ backgroundColor: '#fff', color: '#000', border: 'none', padding: '5px 10px', borderRadius: '5px', fontSize: '8px', fontWeight: '900' }}>USAR</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
