"use client"
import Link from 'next/link';

export default function DashLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#000', color: '#fff', fontFamily: 'sans-serif' }}>
      {/* CABECERA CON BOTONES DESLIZABLES */}
      <header style={{ backgroundColor: '#000', borderBottom: '1px solid #1c1c1c', position: 'sticky', top: 0, zIndex: 10 }}>
        <div style={{ padding: '15px 20px 5px 20px', fontSize: '18px', fontWeight: '900', fontStyle: 'italic' }}>GREY</div>
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', padding: '10px 15px 15px 15px', whiteSpace: 'nowrap' }}>
          <Link href="/chat" style={btnStyle}>CHAT</Link>
          <Link href="/images" style={btnStyle}>IMG</Link>
          <Link href="/img2video" style={{...btnStyle, border: '1px solid #fff'}}>I2V</Link>
          <Link href="/video" style={btnStyle}>VIDEO</Link>
          <Link href="/viral" style={btnStyle}>VIRAL</Link>
          <Link href="/subtitles" style={btnStyle}>SUB</Link>
        </div>
      </header>

      <main style={{ flex: 1, overflowY: 'auto' }}>{children}</main>

      <footer style={{ padding: '10px 20px', backgroundColor: '#050505', borderTop: '1px solid #1c1c1c', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '9px', color: '#444' }}>ENGINE_V1.5</span>
        <span style={{ fontSize: '13px', fontWeight: '900' }}>25.00 CRD</span>
      </footer>

      <style>{`
        div::-webkit-scrollbar { display: none; }
        div { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  )
}

const btnStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '10px',
  fontWeight: 'bold',
  padding: '10px 18px',
  border: '1px solid #222',
  borderRadius: '8px',
  backgroundColor: '#0a0a0a',
  flexShrink: 0
};
