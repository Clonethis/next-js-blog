import Head from 'next/head';
import Link from 'next/link';
import Date from './components/Date';

import Layout, { siteTitle } from '../pages/components/layout'
import utilStyles from '../pages/styles/utils.module.css';
import { getSortedPostsData } from './lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    }
  }
}
export default function Home({ allPostsData }) {
  console.log(allPostsData.date)
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLd}>Blog</h2>
        <ul className={utilStyles.list}>
          {
            allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText} >
                  <Date dateString={date}></Date>
                </small>
              </li>

            ))
          }
        </ul>
      </section>

    </Layout>
  );
}
