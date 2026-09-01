"use client"
import Link from 'next/link';

export default function CentralHub() {
  const tools = [
    { id: '1', name: 'CHIP_CHAT', desc: 'IA Conversacional Avanzada', link: '/chat', cat: 'BRAIN', color: '#fff' },
    { id: '2', name: 'VISUAL_GEN', desc: 'Texto a Imagen Ultra HD', link: '/images', cat: 'IMAGE', color: '#fff' },
    { id: '3', name: 'MOTION_ENGINE', desc: 'Animación de Fotos (I2V)', link: '/img2video', cat: 'VIDEO', color: '#fff' },
    { id: '4', name: 'CINEMATIC_V2', desc: 'Vídeo con Sonido Realista', link: '/video', cat: 'VIDEO', color: '#fff' },
    { id: '5', name: 'FACE_SWAP', desc: 'Intercambio de Rostros IA', link: '/faceswap', cat: 'IMAGE', color: '#fff' },
    { id: '6', name: 'REMASTER_4K', desc: 'Escalado y Limpieza HD', link: '/remaster', cat: 'IMAGE', color: '#fff' },
    { id: '7', name: 'MUSIC_GEN', desc: 'Compositor de Audio/Trap', link: '/music', cat: 'AUDIO', color: '#fff' },
    { id: '8', name: 'LOGO_PRO', desc: 'Diseño de Identidad Visual', link: '/logo', cat: 'DESIGN', color: '#fff' },
    { id: '9', name: 'VIRAL_LAB', desc: 'Estrategia de Algoritmos', link: '/viral', cat: 'MARKET', color: '#fff' },
    { id: '10', name: 'CAPTIONS_AI', desc: 'Subtítulos Automáticos', link: '/subtitles', cat: 'VIDEO', color: '#fff' },
  ];

  return (
    <div style={{ padding: '25px', backgroundColor: '#000', minHeight: '100vh', fontFamily: 'sans-serif', color: '#fff' }}>
      {/* CABECERA TÉCNICA */}
      <header style={{ marginBottom: '40px', borderLeft: '4px solid #fff', paddingLeft: '20px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '900', fontStyle: 'italic', margin: 0, letterSpacing: '-1px' }}>CENTRAL_HUB</h1>
        <p style={{ color: '#555', fontSize: '10px', letterSpacing: '3px', fontWeight: 'bold', marginTop: '5px' }}>SISTEMA DE CONTROL DE NODOS v2.0</p>
      </header>

      {/* REJILLA DE HERRAMIENTAS */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
        {tools.map((tool) => (
          <Link href={tool.link} key={tool.id} style={{ textDecoration: 'none' }}>
            <div style={{ 
              backgroundColor: '#0a0a0a', 
              border: '1px solid #1c1c1c', 
              padding: '20px', 
              borderRadius: '18px', 
              height: '130px', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '8px', color: '#fff', backgroundColor: '#222', padding: '3px 7px', borderRadius: '5px', fontWeight: '900', letterSpacing: '1px' }}>{tool.cat}</span>
                  <span style={{ fontSize: '8px', color: '#333', fontWeight: 'bold' }}>ID_{tool.id}</span>
                </div>
                <h3 style={{ color: '#fff', fontSize: '15px', fontWeight: '900', margin: '12px 0 4px 0' }}>{tool.name}</h3>
                <p style={{ color: '#555', fontSize: '10px', lineHeight: '1.2', margin: 0 }}>{tool.desc}</p>
              </div>
              <div style={{ fontSize: '12px', textAlign: 'right', opacity: 0.5 }}> > </div>
            </div>
          </Link>
        ))}
      </div>

      {/* ESTADO DEL SISTEMA (DECORATIVO) */}
      <div style={{ marginTop: '40px', padding: '20px', borderTop: '1px solid #1c1c1c', display: 'flex', justifyContent: 'space-between', opacity: 0.3 }}>
        <div style={{ fontSize: '9px', fontMono: 'monospace' }}>LATENCY: 14ms</div>
        <div style={{ fontSize: '9px', fontMono: 'monospace' }}>NODES: ACTIVE</div>
        <div style={{ fontSize: '9px', fontMono: 'monospace' }}>GREY_OS_V2</div>
      </div>
    </div>
  );
}
