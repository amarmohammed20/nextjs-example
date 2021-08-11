import Head from 'next/head'

const CustomDoc = () => {
    return (
        <div>
            <Head>
                <title>Custom Document</title>
                <meta name="next.js " content="a nextjs app that explains and demos next.js" />
            </Head>

            <main>
                <h1>Custom Document</h1>
                <p>Source of the info can be found <b><a href="https://nextjs.org/docs/advanced-features/custom-document" target="_blank" rel="noreferrer">HERE</a></b></p>
            </main>
        </div>
    )
}

export default CustomDoc;