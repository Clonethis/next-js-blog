// https://nextjs.org/docs/basic-features/data-fetching/overview
// https://nextjs.org/docs/basic-features/data-fetching/overview#getserversideprops-server-side-rendering
// https://nextjs.org/docs/basic-features/data-fetching/overview#getstaticprops-static-generation
export async function getServerSideProps(context) {
    return {
        props: {
            // props for your component
        },
    };
}
import useSWR from 'swr';
// https://swr.vercel.app/

function Profile() {
    const { data, error } = useSWR('/api/user', fetch);

    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;
    return <div>hello {data.name}!</div>;
}
