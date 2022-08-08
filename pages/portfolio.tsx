import Head from 'next/head'
import type { NextPage } from 'next'
import { Layout } from 'components/FixedElement/Layout'
import { PortFolioT } from 'components/Template/PortFolioT'

const Home: NextPage = () => {
  return (
    <Layout title="PortFolio">
      <Head>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PortFolioT />
    </Layout>
  )
}

export default Home
