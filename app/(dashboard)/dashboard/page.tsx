"use client"
import Link from 'next/link';

export default function CentralHub() {
  const tools = [
    { id: '1', name: 'CHIP_CHAT', desc: 'IA Conversacional', link: '/chat', cat: 'BRAIN' },
    { id: '2', name: 'VISUAL_GEN', desc: 'Imagen Ultra HD', link: '/images', cat: 'IMAGE' },
    { id: '3', name: 'MOTION_ENGINE', desc: 'Animar Fotos (I2V)', link: '/img2video', cat: 'VIDEO' },
    { id: '4', name: 'CINEMATIC_V2', desc: 'Vídeo Real Realista', link: '/video', cat: 'VIDEO' },
    { id: '5', name: 'FACE_SWAP', desc: 'Cambio de Rostros', link: '/faceswap', cat: 'IMAGE' },
    { id: '6', name: 'REMASTER_4K', desc: 'Calidad Máxima', link: '/remaster', cat: 'IMAGE' },
    { id: '7', name: 'MUSIC_GEN', desc: 'Creador de Beats', link: '/music', cat: 'AUDIO' },
    { id: '8', name: 'LOGO_PRO', desc: 'Diseño de Marcas', link: '/logo', cat: 'DESIGN' },
    { id: '9', name: 'VIRAL_LAB', desc: 'Algoritmo Social', link: '/viral', cat: 'MARKET' },
    { id: '10', name: 'CAPTIONS_AI', desc: 'Subtítulos Pro', link: '/subtitles', cat: 'VIDEO' },
  ];

  return (
    <div style={{ padding: '25px', backgroundColor: '#000' }}>
      <header style={{ marginBottom: '30px', borderLeft: '3px solid #fff', paddingLeft: '15px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: '900', fontStyle: 'italic', margin: 0 }}>CENTRAL_HUB</h1>
        <p style={{ color: '#444', fontSize: '9px', letterSpacing: '2px', fontWeight: 'bold' }}>MODULOS_DE_EJECUCION_V2</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        {tools.map((tool) => (
          <Link href={tool.link} key={tool.id} style={{ textDecoration: 'none' }}>
            <div style={{ backgroundColor: '#0a0a0a', border: '1px solid #161616', padding: '15px', borderRadius: '15px', height: '110px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontSize: '7px', color: '#fff', backgroundColor: '#111', padding: '2px 5px', borderRadius: '3px', fontWeight: 'bold' }}>{tool.cat}</span>
                <h3 style={{ color: '#fff', fontSize: '13px', fontWeight: '900', margin: '8px 0 2px 0' }}>{tool.name}</h3>
                <p style={{ color: '#444', fontSize: '9px', lineHeight: '1.1' }}>{tool.desc}</p>
              </div>
              <div style={{ textAlign: 'right', color: '#222', fontSize: '10px' }}> > </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}       
