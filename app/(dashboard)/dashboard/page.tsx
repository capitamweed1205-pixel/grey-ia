"use client"
export default function CommunityFeed() {
  const posts = [
    { id: 1, user: '@Capitan', url: 'https://images.unsplash.com/photo-1614728263952-84ea206f25b1?w=400', prompt: 'Cyberpunk city, neon rain, cinematic' },
    { id: 2, user: '@GreyIA', url: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=400', prompt: 'Abstract neural network, white on black' },
    { id: 3, user: '@DesignPro', url: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=400', prompt: 'Minimalist logo, futuristic shape' },
    { id: 4, user: '@VideoArt', url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400', prompt: 'Deep space explosion, hyper-realistic' },
  ];

  return (
    <div style={{ padding: '20px', backgroundColor: '#000' }}>
      <header style={{ marginBottom: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <h2 style={{ fontSize: '20px', fontWeight: '900', fontStyle: 'italic', margin: 0 }}>EXPLORAR</h2>
          <p style={{ color: '#444', fontSize: '9px', fontWeight: 'bold' }}>TENDENCIAS_DE_LA_COMUNIDAD</p>
        </div>
        <div style={{ color: '#fff', fontSize: '10px', fontWeight: 'bold', borderBottom: '2px solid #fff' }}>TOP_CREATIONS</div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        {posts.map(post => (
          <div key={post.id} style={{ backgroundColor: '#0a0a0a', borderRadius: '15px', overflow: 'hidden', border: '1px solid #161616' }}>
            <img src={post.url} style={{ width: '100%', height: '160px', objectFit: 'cover' }} />
            <div style={{ padding: '12px' }}>
              <p style={{ fontSize: '9px', fontWeight: 'bold', color: '#fff', marginBottom: '5px' }}>{post.user}</p>
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
