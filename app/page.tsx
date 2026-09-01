import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', textAlign: 'center', backgroundColor: 'black' }}>
      <h1 style={{ fontSize: '5rem', fontWeight: '900', fontStyle: 'italic', marginBottom: '10px', color: 'white' }}>GREY IA</h1>
      <p style={{ color: '#666', letterSpacing: '5px', marginBottom: '40px' }}>SISTEMA NEURONAL PRIVADO</p>
      <Link href="/chat" style={{ backgroundColor: 'white', color: 'black', padding: '15px 40px', borderRadius: '50px', fontWeight: 'bold', textDecoration: 'none' }}>
        ENTRAR AL SISTEMA
      </Link>
    </div>
  )
}
