import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import Layout from "../components/layout";
import utilsStyles from '../styles/utils.module.css';
export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First nushoatn</title>
            </Head>
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                }
            />
            <h1>First Post</h1>

            <h2 className={utilsStyles.heading2XL}>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
            <p className={utilsStyles.lightText}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, beatae in delectus asperiores voluptatum similique. Explicabo cum vel non, laborum eaque dignissimos suscipit reprehenderit assumenda nam consequuntur blanditiis, ullam nesciunt!
            </p>
            <h1 className="text-3xl underline">
      Hello world!
    </h1>
        </Layout>


    );
}
