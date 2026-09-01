"use client"
import Link from 'next/link';

export default function StudioPage() {
  const tools = [
    { name: 'Photo Edit', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500', link: '/editor' },
    { name: 'Reimagine', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500', link: '/images' },
    { name: 'Smart Resize', img: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=500', link: '/editor' },
    { name: 'BG Removal', img: 'https://images.unsplash.com/photo-1544465531-028d6238ef42?w=500', link: '/editor' },
  ];

  return (
    <div style={{ padding: '20px', backgroundColor: '#000' }}>
      <p style={{ color: '#444', fontSize: '10px', fontWeight: '900', letterSpacing: '2px', marginBottom: '20px' }}>ESTUDIO_CREATIVO_IA</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        {tools.map((tool, i) => (
          <Link href={tool.link} key={i} style={{ textDecoration: 'none', position: 'relative', height: '240px', borderRadius: '25px', overflow: 'hidden', border: '1px solid #161616', display: 'block' }}>
            <img src={tool.img} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }} />
            <span style={{ position: 'absolute', bottom: '15px', left: '15px', fontWeight: 'bold', fontSize: '13px', color: '#fff' }}>{tool.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
