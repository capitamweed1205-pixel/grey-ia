import './globals.css'

export const metadata = {
  title: 'GREY IA',
  description: 'Neural Interface',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body style={{ margin: 0, backgroundColor: 'black', color: 'white', fontFamily: 'sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
