import "../styles/globals.css"

import { AuthProvider } from "../lib/AuthContext"

export default function RootLayout({children,}: {
  children: React.ReactNode
}) {
  
  return (
    <html>
      <head/>
      <body className="h-screen w-full">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
