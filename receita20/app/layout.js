export const metadata = {
  title: 'Receita 20 - Next.js',
  description: 'Aplicação Web com Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  )
}