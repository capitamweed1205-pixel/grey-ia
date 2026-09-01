"use client"
import Link from 'next/link';

export default function DashLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#000', color: '#fff', fontFamily: 'sans-serif' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', borderBottom: '1px solid #1c1c1c', backgroundColor: '#000', position: 'sticky', top: 0, zIndex: 10 }}>
        <div style={{ fontSize: '18px', fontWeight: '900', fontStyle: 'italic' }}>GREY</div>
        <div style={{ display: 'flex', gap: '4px' }}>
          <Link href="/chat" style={{ color: '#fff', textDecoration: 'none', fontSize: '9px', fontWeight: 'bold', padding: '8px', border: '1px solid #333', borderRadius: '5px' }}>CHAT</Link>
          <Link href="/images" style={{ color: '#fff', textDecoration: 'none', fontSize: '9px', fontWeight: 'bold', padding: '8px', border: '1px solid #333', borderRadius: '5px' }}>IMG</Link>
          <Link href="/video" style={{ color: '#fff', textDecoration: 'none', fontSize: '9px', fontWeight: 'bold', padding: '8px', border: '1px solid #333', borderRadius: '5px' }}>VIDEO</Link>
          <Link href="/viral" style={{ color: '#000', textDecoration: 'none', fontSize: '9px', fontWeight: 'bold', padding: '8px', backgroundColor: '#fff', borderRadius: '5px' }}>VIRAL</Link>
        </div>
      </header>
      <main style={{ flex: 1, overflowY: 'auto' }}>{children}</main>
      <footer style={{ padding: '10px 20px', backgroundColor: '#050505', borderTop: '1px solid #1c1c1c', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px' }}>
        <span style={{ color: '#444', fontWeight: 'bold' }}>ENERGY</span>
        <span style={{ fontWeight: '900' }}>25.00 CRD</span>
      </footer>
    </div>
  )
}
