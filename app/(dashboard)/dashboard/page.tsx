"use client"
import Link from 'next/link';

export default function DiscoveryPage() {
  const feed = [
    { id: 1, title: 'Photo Edit', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500', label: 'IA_RETOUCH' },
    { id: 2, title: 'Reimagine', url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500', label: 'CREATIVE_GEN' },
    { id: 3, title: 'Smart Resize', url: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=500', label: 'AUTO_LAYOUT' },
    { id: 4, title: 'BG Removal', url: 'https://images.unsplash.com/photo-1544465531-028d6238ef42?w=500', label: 'CLEAN_UP' },
    { id: 5, title: 'Cinematic Video', url: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500', label: 'MOTION_PRO' },
    { id: 6, title: 'Neural Art', url: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=500', label: 'DEEP_LEARNING' },
  ];

  return (
    <div style={{ padding: '15px', backgroundColor: '#000', minHeight: '100vh' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        {feed.map(item => (
          <Link href="/studio" key={item.id} style={{ textDecoration: 'none', position: 'relative', borderRadius: '24px', overflow: 'hidden', height: '240px', display: 'block' }}>
            {/* Imagen de fondo real/animada */}
            <img src={item.url} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            
            {/* Sombra negra abajo para que se lea el texto */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%)' }} />
            
            {/* Texto de la tarjeta */}
            <div style={{ position: 'absolute', bottom: '15px', left: '15px' }}>
              <p style={{ color: '#fff', fontSize: '14px', fontWeight: 'bold', margin: 0 }}>{item.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
