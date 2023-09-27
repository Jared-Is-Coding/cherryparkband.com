import { HeadFC, Link, PageProps } from "gatsby"
import * as React from "react"
import { CherryFooter } from "../components/CherryFooter"
import { CherryParkNavbar } from "../components/CherryNavbar"
import { MetaData } from "../components/MetaData"

export const Head: HeadFC = () => (
    <>
        <html lang="en" />
        <MetaData title="404 | Cherry Park" />
    </>
)

const NotFoundPage: React.FC<PageProps> = () => {
    return (
        <>
            <header>
                <CherryParkNavbar />
            </header>
            
            <main className="flex-col">
                <h1>
                    404
                </h1>

                <div className="flex-col flex-center">
                    <h2>That page doesn't exist</h2>
                    <p><Link to="/">Go back</Link>.</p>
                </div>
            </main>

            <CherryFooter />
        </>
    )
}

export default NotFoundPage
