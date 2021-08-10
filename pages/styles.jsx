import Head from 'next/head'

const Styles = () => {
    return (
        <div>
            <Head>
                <title>Styles</title>
                <meta name="next.js " content="a nextjs app that explains and demos next.js" />
            </Head>

            <main>
                <h1>Styles Page</h1>
                <p>Source of the info can be found <b><a href="https://nextjs.org/docs/basic-features/built-in-css-support" target="_blank" rel="noreferrer">HERE</a></b></p>
            </main>

            <section>
                <ul>
                    <li>To style the app globally we use the globals.css file which will work in the _app.js file</li>
                    <li>To style each page indiviually we use page name .module.css and import that into the page</li>
                    <li>Speak about the layout component used within the main _app.js file.</li>
                </ul>
            </section>
        </div>
    )
}

export default Styles;