import Head from 'next/head'

const Api = ({articles}) => {
    return (
        <div>
            <Head>
                <title>API Next.js</title>
                <meta name="next.js " content="a nextjs app that explains and demos next.js" />
            </Head>

            <main>
                <h1>API</h1>
                <p>They are two main interactions with API&apos;s in Next.js and this page we will disucss both, fetching data and creating API end points</p>

                <section>
                    <h2>Data Fetching</h2>
                    <p>Source of the info can be found <b><a href="https://nextjs.org/docs/basic-features/data-fetching" target="_blank" rel="noreferrer">HERE</a></b></p>

                    <p>Below are some functions we can use for data fetching. These functions can be added above or below the page component.</p>
                    <ul>
                        <li><a href='https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation' target='_blank' rel='noreferrer'>getStaticProps</a> - This is a function provided by Next.js and is run at build time. </li>
                        <li><a href='https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation' target='_blank' rel='noreferrer'>getStaticPaths</a> - </li>
                        <li><a href='https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering' target='_blank' rel='noreferrer'>getServerSideProps</a> - </li>
                    </ul>
                </section>

                <hr />

                <section>
                    <h3>API Test Data - getStaticProps</h3>
                    <p>Using the api Next.js function <b>getStaticProps</b> to use the fethc method on the json place holder site.</p>
                    {articles.map((article) => (
                    <div key={article.id}> 
                        <h5>{article.title}</h5>
                    </div>
                    ))}
                </section>

            </main>
        </div>
    )
}

export default Api;

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
    const articles = await res.json();
  
    return {
      props: {
        articles
      }
    }
  }
  