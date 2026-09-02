"use client"
import Link from 'next/link';

export default function StudioPage() {
  const tools = [
    { name: 'Photo Edit', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500', link: '/editor' },
    { name: 'CHIP_CHAT', img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500', link: '/chat' },
    { name: 'Cinematic Video', img: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500', link: '/video' },
    { name: 'Face Swap', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500', link: '/faceswap' },
  ];

  return (
    <div style={{ padding: '20px', backgroundColor: '#000' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        {tools.map((tool, i) => (
          <Link href={tool.link} key={i} style={{ textDecoration: 'none', position: 'relative', height: '240px', borderRadius: '25px', overflow: 'hidden', border: '1px solid #161616', display: 'block' }}>
            <img src={tool.img} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }} />
            <span style={{ position: 'absolute', bottom: '15px', left: '15px', fontWeight: 'bold', fontSize: '13px', color: '#fff' }}>{tool.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
