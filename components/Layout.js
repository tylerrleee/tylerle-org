import Head from 'next/head'
import Header from './Header'
import favicon from '/public/tle.png'

export default function Layout({ children, title = 'Tyler Le' }) {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link rel="icon" href='/tle.png' sizes="any" />
        <link rel="apple-touch-icon" href='/tle.png' />
        <link rel="stylesheet" href="/styles/style.css/" />
        <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
        <title>{title}</title>
      </Head>
      <div className="container">
        <Header />
        <main>
          {children}
        </main>
      </div>
    </>
  )
}