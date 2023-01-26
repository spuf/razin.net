import type { NextPage } from 'next'
import Head from 'next/head'

const Found: NextPage = () => {
  return (
    <div>
      <Head>
        <meta name="robots" content="noindex" />
        <title>Found</title>
      </Head>
      <div style={{ margin: '1rem' }}>
        <a href="mailto:arseny@razin.net">arseny@razin.net</a>
      </div>
    </div>
  )
}

export default Found
