"use client"
import Link from 'next/link';

export default function DashLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#000', color: '#fff', fontFamily: 'sans-serif' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 10px', borderBottom: '1px solid #1c1c1c', backgroundColor: '#000', position: 'sticky', top: 0, zIndex: 10 }}>
        <div style={{ fontSize: '16px', fontWeight: '900', fontStyle: 'italic', paddingLeft: '5px' }}>GREY</div>
        <div style={{ display: 'flex', gap: '3px' }}>
          <Link href="/chat" style={{ color: '#fff', textDecoration: 'none', fontSize: '8px', fontWeight: 'bold', padding: '8px 6px', border: '1px solid #222', borderRadius: '4px' }}>CHAT</Link>
          <Link href="/images" style={{ color: '#fff', textDecoration: 'none', fontSize: '8px', fontWeight: 'bold', padding: '8px 6px', border: '1px solid #222', borderRadius: '4px' }}>IMG</Link>
          <Link href="/video" style={{ color: '#fff', textDecoration: 'none', fontSize: '8px', fontWeight: 'bold', padding: '8px 6px', border: '1px solid #222', borderRadius: '4px' }}>VIDEO</Link>
          <Link href="/viral" style={{ color: '#fff', textDecoration: 'none', fontSize: '8px', fontWeight: 'bold', padding: '8px 6px', border: '1px solid #222', borderRadius: '4px' }}>VIRAL</Link>
          <Link href="/subtitles" style={{ color: '#000', textDecoration: 'none', fontSize: '8px', fontWeight: 'bold', padding: '8px 6px', backgroundColor: '#fff', borderRadius: '4px' }}>SUB</Link>
        </div>
      </header>
      <main style={{ flex: 1, overflowY: 'auto' }}>{children}</main>
      <footer style={{ padding: '10px 15px', backgroundColor: '#050505', borderTop: '1px solid #1c1c1c', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11px' }}>
        <span style={{ color: '#444', fontWeight: 'bold' }}>SYSTEM_OK</span>
        <span style={{ fontWeight: '900' }}>25.00 CRD</span>
      </footer>
    </div>
  )
}
