"use client"
import Link from 'next/link';

export default function DashLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#000', color: '#fff', fontFamily: 'sans-serif' }}>
      <header style={{ borderBottom: '1px solid #1c1c1c', backgroundColor: '#000', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 20px' }}>
          <Link href="/dashboard" style={{ textDecoration: 'none', color: '#fff' }}>
            <div style={{ fontSize: '22px', fontWeight: '900', fontStyle: 'italic', letterSpacing: '-1px' }}>GREY</div>
          </Link>
          <Link href="/dashboard" style={{ color: '#000', textDecoration: 'none', fontSize: '10px', fontWeight: 'bold', padding: '8px 15px', backgroundColor: '#fff', borderRadius: '8px' }}>HUB_CENTRAL</Link>
        </div>
      </header>

      <main style={{ flex: 1, overflowY: 'auto', width: '100%' }}>
        {children}
      </main>

      <footer style={{ padding: '12px 20px', backgroundColor: '#050505', borderTop: '1px solid #1c1c1c', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '9px', color: '#444', fontWeight: 'bold' }}>SYSTEM_READY</span>
        <span style={{ fontSize: '13px', fontWeight: '900', color: '#fff' }}>25.00 CRD</span>
      </footer>
    </div>
  )
}
