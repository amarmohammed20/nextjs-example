import Head from 'next/head'

const Seo = () => {
    return (
        <div>
            <Head>
                <title>SEO &amp; Performance</title>
                <meta name="next.js " content="a nextjs app that explains and demos next.js" />
            </Head>

            <main>
                <h1>SEO &amp; Performance</h1>
                <p>Source of the info can be found <b><a href="https://nextjs.org/docs/basic-features/pages#pre-rendering" target="_blank" rel="noreferrer">HERE</a></b></p>
            </main>

            <section>
                <ul>
                    <li>Pre rendering helps next.js to generate HTML for each page in advance better for performance and SEO.</li>
                </ul>
            </section>
        </div>
    )
}

export default Seo;