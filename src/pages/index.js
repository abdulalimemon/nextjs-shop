import Head from 'next/head'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Next e-commerce app</title>
        <meta name="description" content="Next e-commerce app. Create by next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <div>
          <p>
            Hello
            <code>src/pages/index.js</code>
          </p>
        </div>
      </main>
    </>
  )
}
