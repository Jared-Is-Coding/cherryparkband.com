import { HeadFC, Link, PageProps } from "gatsby"
import * as React from "react"
import { Container } from "react-bootstrap"
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

                <h1 className="flex-center">
                    404
                    <p className="tagline">That page doesn't exist</p>
                </h1>
            </header>
            
            <main>
                <Container>
                    <div className="flex-center">
                        <p><Link to="/">ᐊ Home</Link>.</p>
                    </div>
                </Container>
            </main>

            <CherryFooter />
        </>
    )
}

export default NotFoundPage
