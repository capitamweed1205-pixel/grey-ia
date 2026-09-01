"use client"
import { useState } from 'react';

export default function ViralLab() {
  const [idea, setIdea] = useState("");
  const [loading, setLoading] = useState(false);
  const [strategy, setStrategy] = useState<any>(null);

  const generatePlan = () => {
    if(!idea) return;
    setLoading(true);
    setStrategy(null);
    
    // Simulación de análisis de algoritmos
    setTimeout(() => {
      setStrategy({
        hook: "Empieza con un plano de 0.5 segundos y el texto: 'El secreto que las marcas te ocultan...'",
        content: "Muestra 3 clips rápidos de 1.2 segundos cada uno con música de tendencia (Phonk).",
        cta: "Diles que comenten 'GRATIS' para recibir el enlace por privado."
      });
      setLoading(false);
    }, 2500);
  };

  return (
    <div style={{ padding: '25px', backgroundColor: '#000', minHeight: '100%', fontFamily: 'sans-serif' }}>
      <h2 style={{ fontSize: '26px', fontWeight: '900', fontStyle: 'italic', margin: '0 0 5px 0' }}>VIRAL_LAB</h2>
      <p style={{ color: '#555', fontSize: '10px', letterSpacing: '2px', marginBottom: '30px', fontWeight: 'bold' }}>CONTENT_STRATEGY_ENGINE</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ backgroundColor: '#0a0a0a', border: '1px solid #1c1c1c', padding: '20px', borderRadius: '20px' }}>
          <label style={{ display: 'block', fontSize: '10px', color: '#555', fontWeight: 'bold', marginBottom: '10px' }}>¿SOBRE QUÉ ES TU VÍDEO?</label>
          <input 
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            style={{ width: '100%', backgroundColor: '#000', border: '1px solid #222', borderRadius: '12px', color: '#fff', padding: '15px', fontSize: '16px', outline: 'none', marginBottom: '15px', boxSizing: 'border-box' }}
            placeholder="Ej: Un café que te quita el sueño..."
          />
          <button 
            onClick={generatePlan}
            style={{ width: '100%', backgroundColor: '#fff', color: '#000', padding: '18px', borderRadius: '12px', fontWeight: '900', border: 'none', cursor: 'pointer' }}
          >
            {loading ? 'ANALIZANDO ALGORITMOS...' : 'CREAR BLUEPRINT VIRAL'}
          </button>
        </div>

        {strategy && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div style={{ padding: '20px', backgroundColor: '#111', border: '1px solid #222', borderRadius: '15px' }}>
              <span style={{ fontSize: '9px', color: '#fff', fontWeight: 'bold', backgroundColor: '#333', padding: '2px 6px', borderRadius: '4px' }}>EL_GANCHO</span>
              <p style={{ marginTop: '10px', fontSize: '14px', lineHeight: '1.5' }}>{strategy.hook}</p>
            </div>
            <div style={{ padding: '20px', backgroundColor: '#111', border: '1px solid #222', borderRadius: '15px' }}>
              <span style={{ fontSize: '9px', color: '#fff', fontWeight: 'bold', backgroundColor: '#333', padding: '2px 6px', borderRadius: '4px' }}>ESTRATEGIA</span>
              <p style={{ marginTop: '10px', fontSize: '14px', lineHeight: '1.5' }}>{strategy.content}</p>
            </div>
            <div style={{ padding: '20px', backgroundColor: '#111', border: '1px solid #222', borderRadius: '15px' }}>
              <span style={{ fontSize: '9px', color: '#fff', fontWeight: 'bold', backgroundColor: '#333', padding: '2px 6px', borderRadius: '4px' }}>LLAMADA_A_LA_ACCIÓN</span>
              <p style={{ marginTop: '10px', fontSize: '14px', lineHeight: '1.5' }}>{strategy.cta}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
