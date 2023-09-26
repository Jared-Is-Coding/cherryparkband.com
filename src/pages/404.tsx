import { HeadFC, Link, PageProps } from "gatsby"
import * as React from "react"
import { MetaData } from "../components/MetaData"
import "../css/styles.scss"

export const Head: HeadFC = () => (
    <MetaData title="Page not found | Cherry Park" />
)

const NotFoundPage: React.FC<PageProps> = () => {
    return (
        <>
            <header className="flex-col flex-center">
                <h1>
                    404
                </h1>
            </header>
            
            <main className="flex-col">
                <div className="flex-col flex-center">
                    <h2>That page doesn't exist</h2>
                    <p><Link to="/">Go back</Link>.</p>
                </div>
            </main>
        </>
    )
}

export default NotFoundPage
