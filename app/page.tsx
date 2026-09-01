import Link from 'next/link';

export default function Home() {
  return (
    <div style={{
      backgroundColor: '#000',
      color: '#fff',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'sans-serif',
      textAlign: 'center',
      margin: 0
    }}>
      <div style={{
        padding: '10px 20px',
        border: '1px solid #333',
        borderRadius: '10px',
        fontSize: '10px',
        color: '#666',
        marginBottom: '20px',
        letterSpacing: '3px'
      }}>SYSTEM_ONLINE</div>
      
      <h1 style={{
        fontSize: '70px',
        fontWeight: '900',
        fontStyle: 'italic',
        margin: '0',
        lineHeight: '1'
      }}>GREY IA</h1>
      
      <p style={{
        color: '#888',
        marginTop: '10px',
        marginBottom: '40px',
        fontSize: '14px',
        letterSpacing: '2px'
      }}>INTELIGENCIA PRIVADA v1.0</p>

      <Link href="/chat" style={{
        backgroundColor: '#fff',
        color: '#000',
        padding: '15px 40px',
        borderRadius: '5px',
        fontWeight: '900',
        textDecoration: 'none',
        fontSize: '12px',
        transition: '0.3s'
      }}>
        INICIAR SISTEMA
      </Link>
    </div>
  );
}
