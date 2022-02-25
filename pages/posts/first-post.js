import Link from 'next/link'
import Script from 'next/script'
import Head from 'next/head'
import Layout from '../../components/layout'
export default function FirstPost(){
	return <Layout>
		<Head>
			<title>First Post</title>
		</Head>
		<Script src="https://connect.facebook.net/en_US/sdk.js" strategy="lazyOnload" onLoad={() => console.log(`script loaded correctly, window.FB has been populated`)}/>
		<i>
			<Link href="/"><a>Go to the homepage!</a></Link>
		</i>
		<h1>This is my first post!!!</h1>
		<p>There will be a post text...</p>
		</Layout>
}
