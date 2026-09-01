"use client"
import Link from 'next/link';

export default function StudioPage() {
  const herramientas = [
    { name: 'CHIP_CHAT', link: '/chat', cat: 'CEREBRO', desc: 'IA Conversacional' },
    { name: 'VISUAL_GEN', link: '/images', cat: 'IMAGEN', desc: 'Generador Pro' },
    { name: 'CINEMATIC_V2', link: '/video', cat: 'VIDEO', desc: 'Video con Sonido' },
    { name: 'GREY_STUDIO', link: '/editor', cat: 'EDITOR', desc: 'Retoque Pro' },
    { name: 'MOTION_IA', link: '/img2video', cat: 'ANIMAR', desc: 'Imagen a Video' },
    { name: 'FACE_SWAP', link: '/faceswap', cat: 'ROSTROS', desc: 'Cambio de Identidad' },
    { name: 'REMASTER_4K', link: '/remaster', cat: 'CALIDAD', desc: 'Limpieza HD' },
    { name: 'MUSIC_GEN', link: '/music', cat: 'AUDIO', desc: 'Creador de Beats' },
    { name: 'LOGO_PRO', link: '/logo', cat: 'DISEÑO', desc: 'Diseño de Marcas' },
    { name: 'VIRAL_LAB', link: '/viral', cat: 'SOCIAL', desc: 'Blueprint Viral' },
    { name: 'CAPTIONS_AI', link: '/subtitles', cat: 'VIDEO', desc: 'Subtítulos IA' },
  ];

  return (
    <div style={{ padding: '25px', backgroundColor: '#000', minHeight: '100vh', color: '#fff', fontFamily: 'sans-serif' }}>
      <h2 style={{ fontSize: '24px', fontWeight: '900', fontStyle: 'italic', marginBottom: '25px', borderLeft: '3px solid #fff', paddingLeft: '15px' }}>PANEL_DE_CONTROL</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        {herramientas.map((h) => (
          <Link key={h.link} href={h.link} style={{ textDecoration: 'none' }}>
            <div style={{ backgroundColor: '#0a0a0a', border: '1px solid #161616', padding: '15px', borderRadius: '15px', height: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span style={{ fontSize: '7px', color: '#fff', backgroundColor: '#222', padding: '2px 5px', width: 'fit-content', borderRadius: '3px', marginBottom: '5px', fontWeight: 'bold' }}>{h.cat}</span>
              <h3 style={{ color: '#fff', fontSize: '13px', fontWeight: '900', margin: 0 }}>{h.name}</h3>
              <p style={{ color: '#444', fontSize: '9px', marginTop: '4px' }}>{h.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
