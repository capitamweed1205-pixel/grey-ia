"use client"
import { useState } from 'react';
import { ImageIcon, Wand2, Download, Trash2 } from 'lucide-react';

export default function ImagesPage() {
  const [prompt, setPrompt] = useState("");
  const [generating, setGenerating] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    setGenerating(true);
    setResult(null);

    // Simulación de generación de IA
    setTimeout(() => {
      setResult("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000");
      setGenerating(false);
    }, 3000);
  };

  return (
    <div style={{
      backgroundColor: '#000',
      color: '#fff',
      minHeight: '100vh',
      padding: '40px',
      fontFamily: 'sans-serif'
    }}>
      {/* Título y descripción */}
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '900', fontStyle: 'italic', margin: '0 0 10px 0', trackingTighter: '-1px' }}>
          VISUAL_GENERATOR
        </h2>
        <p style={{ color: '#666', fontSize: '12px', letterSpacing: '3px', fontWeight: 'bold' }}>
          TRANSFORMA TEXTO EN PÍXELES DE ALTA DEFINICIÓN
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', maxWidth: '900px' }}>
        
        {/* Panel de Control (Input) */}
        <div style={{
          backgroundColor: '#0a0a0a',
          border: '1px solid #1c1c1c',
          padding: '30px',
          borderRadius: '20px'
        }}>
          <label style={{ display: 'block', fontSize: '10px', color: '#555', fontWeight: '900', marginBottom: '15px', letterSpacing: '1px' }}>
            DESCRIPCIÓN_DE_IMAGEN (PROMPT)
          </label>
          
          <textarea 
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            style={{
              width: '100%',
              height: '120px',
              backgroundColor: '#000',
              border: '1px solid #222',
              borderRadius: '15px',
              color: '#fff',
              padding: '15px',
              outline: 'none',
              marginBottom: '20px',
              fontSize: '16px',
              resize: 'none'
            }}
            placeholder="Ej: Un astronauta explorando una ciudad de cristal en Marte, estilo cinemático, 8k..."
          />

          <button 
            onClick={handleGenerate}
            disabled={generating || !prompt.trim()}
            style={{
              width: '100%',
              backgroundColor: generating ? '#222' : '#fff',
              color: generating ? '#555' : '#000',
              padding: '18px',
              borderRadius: '15px',
              fontWeight: '900',
              border: 'none',
              cursor: generating ? 'not-allowed' : 'pointer',
              fontSize: '14px',
              transition: '0.3s'
            }}
          >
            {generating ? 'CONSTRUYENDO PÍXELES...' : 'GENERAR IMAGEN (1 CRD)'}
          </button>
        </div>

        {/* Zona de Resultado (Imagen) */}
        <div style={{
          minHeight: '500px',
          backgroundColor: '#0a0a0a',
          border: '1px solid #1c1c1c',
          borderRadius: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {result ? (
            <>
              <img 
                src={result} 
                alt="Resultado" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
              <div style={{
                position: 'absolute',
                bottom: '20px',
                right: '20px',
                display: 'flex',
                gap: '10px'
              }}>
                <button style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', padding: '10px', borderRadius: '10px', color: '#fff' }}>
                  <Download size={20} />
                </button>
                <button 
                  onClick={() => setResult(null)}
                  style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', padding: '10px', borderRadius: '10px', color: '#fff' }}>
                  <Trash2 size={20} />
                </button>
              </div>
            </>
          ) : (
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                backgroundColor: '#111', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 20px',
                border: '1px solid #222'
              }}>
                <ImageIcon size={30} color="#333" />
              </div>
              <p style={{ color: '#333', fontWeight: 'bold', fontSize: '12px', letterSpacing: '2px' }}>
                {generating ? 'SISTEMA_OCUPADO' : 'SISTEMA_EN_ESPERA'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
