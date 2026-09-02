"use client";
import { useRouter } from 'next/navigation';

export default function StudioPage() {
  const router = useRouter();

  const herramientas = [
    { name: 'VISUAL_GEN', tag: 'IMAGE', desc: 'Generador de Imágenes', link: '/visual_gen', color: '#ff4d4d' },
    { name: 'CINEMATIC_V2', tag: 'VIDEO', desc: 'Generador de Vídeo', link: '/video', color: '#a855f7' },
    { name: 'CHIP_CHAT', tag: 'BRAIN', desc: 'IA Conversacional', link: '/chat', color: '#3b82f6' },
    { name: 'FACE_SWAP', tag: 'ROSTROS', desc: 'Intercambio Viral', link: '/faceswap', color: '#ec4899' },
    { name: 'MUSIC_GEN', tag: 'AUDIO', desc: 'Creador de Música', link: '/music', color: '#10b981' },
    { name: 'REMASTER_4K', tag: 'CALIDAD', desc: 'Mejora de Imagen', link: '/remaster', color: '#f59e0b' },
  ];

  return (
    <div style={{ padding: '25px', backgroundColor: '#000', minHeight: '100vh' }}>
      <div style={{ marginBottom: '40px', borderLeft: '4px solid #fff', paddingLeft: '20px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: '900', color: '#fff', letterSpacing: '-1px' }}>ESTUDIO_CREATIVO</h1>
        <p style={{ fontSize: '10px', color: '#444', fontWeight: 'bold', marginTop: '5px' }}>SISTEMA_DE_PRODUCCIÓN_IA_V2</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
        {herramientas.map((h) => (
          <div 
            key={h.name} 
            onClick={() => router.push(h.link)}
            style={{ backgroundColor: '#080808', border: '1px solid #111', borderRadius: '24px', padding: '20px', cursor: 'pointer' }}
          >
            <span style={{ fontSize: '8px', fontWeight: '900', color: h.color, border: `1px solid ${h.color}33`, padding: '4px 8px', borderRadius: '6px' }}>
              {h.tag}
            </span>
            <div style={{ marginTop: '20px' }}>
              <h3 style={{ fontSize: '15px', fontWeight: '900', color: '#fff' }}>{h.name}</h3>
              <p style={{ fontSize: '9px', color: '#555', fontWeight: 'bold' }}>{h.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
