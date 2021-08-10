import Head from 'next/head'

const ReactComp = () => {
    return (
        <div>
            <Head>
                <title>React Components</title>
                <meta name="next.js " content="a nextjs app that explains and demos next.js" />
            </Head>

            <main>
                <h1>React Components</h1>
                <p>React components are organised a little different in next.js, below we will go into the differences</p>

                <section>
                    <h2>Components Folder</h2>
                    <p>In the components folder we place any components that are not used as pages but can be used within pages. Eseentially these components will not have a dedicated url.</p>

                    <ul>
                        <li>The naming convention is to use Uppercase for component names and lower case for page names</li>
                    </ul>
                </section>
            </main>
        </div>
    )
}

export default ReactComp;