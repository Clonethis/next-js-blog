

import Head from 'next/head';
import Date from '../components/Date';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';

import { getAllPostIds, getPostData } from '../lib/posts';
//Dynamic routing details
//  https://nextjs.org/learn/basics/dynamic-routes/dynamic-routes-details
export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl} >

                    {postData.title}
                </h1>
                <div className={utilStyles.lightText}>

                    {postData.id}
                    {postData.date}
                </div>

                <br />
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                <Date dateString={postData.date} />
            </article>
        </Layout>
    )
}

// Serverside / Cliend side rendering -> due to fallback
// https://nextjs.org/docs/api-reference/data-fetching/get-static-paths#fallback-false

// both functions provide content but only works SERVERSIDE -> so client isn't able to call them
export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}
