"use client"
import Link from 'next/link';

export default function StudioPage() {
  const tools = [
    { name: 'CHIP_CHAT', link: '/chat', desc: 'IA Conversacional', cat: 'BRAIN' },
    { name: 'VISUAL_GEN', link: '/images', desc: 'Imágenes 4K', cat: 'IMAGE' },
    { name: 'CINEMATIC_V2', link: '/video', desc: 'Video con Sonido', cat: 'VIDEO' },
    { name: 'STUDIO_PRO', link: '/editor', desc: 'Editor Foto/Vídeo', cat: 'EDIT' },
    { name: 'MOTION_IA', link: '/img2video', desc: 'Animar Fotos', cat: 'VIDEO' },
    { name: 'FACE_SWAP', link: '/faceswap', desc: 'Cambio de Rostros', cat: 'ROSTROS' },
    { name: 'REMASTER_4K', link: '/remaster', desc: 'Limpieza HD', cat: 'CALIDAD' },
    { name: 'MUSIC_GEN', link: '/music', desc: 'Creador de Beats', cat: 'AUDIO' },
    { name: 'LOGO_PRO', link: '/logo', desc: 'Diseño de Marcas', cat: 'DISEÑO' },
    { name: 'VIRAL_LAB', link: '/viral', desc: 'Estrategia Redes', cat: 'SOCIAL' },
    { name: 'CAPTIONS_AI', link: '/subtitles', desc: 'Subtítulos Pro', cat: 'VIDEO' },
  ];

  return (
    <div style={{ padding: '25px', backgroundColor: '#000', minHeight: '100vh' }}>
      <h2 style={{ fontSize: '24px', fontWeight: '900', fontStyle: 'italic', marginBottom: '25px', borderLeft: '3px solid #fff', paddingLeft: '15px' }}>ESTUDIO_CREATIVO</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        {tools.map(t => (
          <Link key={t.link} href={t.link} style={{ textDecoration: 'none' }}>
            <div style={{ backgroundColor: '#0a0a0a', border: '1px solid #161616', padding: '15px', borderRadius: '15px', height: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span style={{ fontSize: '7px', color: '#fff', backgroundColor: '#222', padding: '2px 5px', width: 'fit-content', borderRadius: '3px', marginBottom: '5px', fontWeight: 'bold' }}>{t.cat}</span>
              <h3 style={{ color: '#fff', fontSize: '13px', fontWeight: '900', margin: 0 }}>{t.name}</h3>
              <p style={{ color: '#444', fontSize: '9px', marginTop: '4px' }}>{t.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
