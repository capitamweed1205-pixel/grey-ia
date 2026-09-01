import Link from 'next/link';

export default function Home() {
  return (
    <div style={{backgroundColor: '#000', color: '#fff', height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: 0, fontFamily: 'sans-serif', textAlign: 'center'}}>
      <h1 style={{fontSize: '80px', fontWeight: '900', fontStyle: 'italic', margin: '0 0 10px 0', letterSpacing: '-2px'}}>GREY IA</h1>
      <p style={{color: '#666', letterSpacing: '5px', fontSize: '12px', marginBottom: '40px'}}>SISTEMA NEURONAL PRIVADO</p>
      <Link href="/chat" style={{backgroundColor: '#fff', color: '#000', padding: '18px 45px', borderRadius: '50px', fontWeight: '900', textDecoration: 'none', fontSize: '14px', letterSpacing: '1px'}}>
        INICIAR SISTEMA
      </Link>
      <div style={{position: 'absolute', bottom: '40px', opacity: 0.3, fontSize: '10px', fontMono: 'monospace', display: 'flex', gap: '20px'}}>
        <span>CORE_V1.0</span>
        <span>STATUS: ONLINE</span>
      </div>
    </div>
  );
}
