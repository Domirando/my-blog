import Head from 'next/head'
import Layout, { siteTitle } from "../components/layout";
import utilStyles from '../styles/utils.module.css'

export default function Home(){
    return (
        <Layout home>
            <Head>
                <title>{ siteTitle }</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>I am Domirando. Enthusiast which has soo many huge life plans!</p>
                <p>
                    (This is a simple website - you'll be building a site like this on {' '}
                    <a href='https://nextjs.org/learn'>our Next.js tutorial</a>)
                </p>
            </section>
        </Layout>
    )
}