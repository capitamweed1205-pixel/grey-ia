"use client"
import Link from 'next/link';

export default function DashboardHub() {
  const tools = [
    { name: 'CHIP_CHAT', desc: 'Inteligencia Conversacional', link: '/chat', cat: 'CEREBRO' },
    { name: 'VISUAL_GEN', desc: 'Texto a Imagen HD', link: '/images', cat: 'IMAGEN' },
    { name: 'MOTION_ENGINE', desc: 'Animar Fotos Estáticas', link: '/img2video', cat: 'VÍDEO' },
    { name: 'CINEMATIC_VIDEO', desc: 'Vídeo con Sonido Real', link: '/video', cat: 'VÍDEO' },
    { name: 'FACE_SWAP', desc: 'Intercambio de Rostros', link: '/faceswap', cat: 'IMAGEN' },
    { name: 'REMASTER_4K', desc: 'Escalado de Calidad', link: '/remaster', cat: 'IMAGEN' },
    { name: 'MUSIC_GEN', desc: 'Creador de Melodías', link: '/music', cat: 'AUDIO' },
    { name: 'LOGO_PRO', desc: 'Diseño de Marcas', link: '/logo', cat: 'DISEÑO' },
    { name: 'VIRAL_LAB', desc: 'Estrategia de Contenido', link: '/viral', cat: 'MARKETING' },
    { name: 'CAPTIONS_AI', desc: 'Subtítulos Automáticos', link: '/subtitles', cat: 'VÍDEO' },
  ];

  return (
    <div style={{ padding: '30px', backgroundColor: '#000', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <header style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '900', fontStyle: 'italic', margin: 0 }}>CENTRAL_HUB</h1>
        <p style={{ color: '#555', fontSize: '11px', letterSpacing: '2px', fontWeight: 'bold' }}>SELECCIONA UN MÓDULO DE EJECUCIÓN</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '15px' }}>
        {tools.map((tool) => (
          <Link href={tool.link} key={tool.name} style={{ textDecoration: 'none' }}>
            <div style={{ 
              backgroundColor: '#0a0a0a', 
              border: '1px solid #1c1c1c', 
              padding: '20px', 
              borderRadius: '15px', 
              height: '140px', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'space-between',
              transition: '0.2s'
            }}>
              <div>
                <span style={{ fontSize: '8px', color: '#fff', backgroundColor: '#222', padding: '3px 6px', borderRadius: '4px', fontWeight: 'bold' }}>{tool.cat}</span>
                <h3 style={{ color: '#fff', fontSize: '14px', fontWeight: '900', margin: '10px 0 5px 0' }}>{tool.name}</h3>
                <p style={{ color: '#555', fontSize: '10px', lineHeight: '1.2' }}>{tool.desc}</p>
              </div>
              <div style={{ color: '#fff', fontSize: '12px', textAlign: 'right', fontWeight: 'bold' }}> > </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
