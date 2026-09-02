import './globals.css'

export const metadata = {
  title: 'GREY IA',
  description: 'Premium Intelligent Interface',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
      </head>
      <body style={{ margin: 0, backgroundColor: 'black', color: 'white' }}>
        {children}
      </body>
    </html>
  )
}
