// app/layout.js
import './globals.css'

export const metadata = {
  title: 'Notes Viewer',
  description: 'A simple notes viewer for your Google Sheets data',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}
