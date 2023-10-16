import { HeadFC, Link, PageProps } from "gatsby"
import * as React from "react"
import { CherryFooter } from "../components/CherryFooter"
import { CherryParkNavbar } from "../components/CherryNavbar"
import { MetaData } from "../components/MetaData"
import { Container } from "react-bootstrap"

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
            
            <main>
                <Container>
                    <h1 className="flex-center">
                        404
                    </h1>

                    <h2 className="flex-center">
                        That page doesn't exist
                    </h2>

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
