import { type HeadFC, type PageProps } from "gatsby"
import * as React from "react"
import { Col, Row } from "react-bootstrap"
import Container from 'react-bootstrap/Container'
import Footer from "../components/Footer"
import MetaData from "../components/MetaData"
import Navbar from "../components/Navbar"

export const Head: HeadFC = () => (
    <>
        <html lang="en" />
        <MetaData title="About | Cherry Park" />
    </>
)

const IndexPage: React.FC<PageProps> = () => {
    return (
        <>
            <header>
                <Navbar />

                <h1 className="flex-center">
                    About
                </h1>
            </header>

            <main>
                <Container>
                    <Row>
                        <Col>
                        </Col>
                    </Row>
                </Container>
            </main>
                
            <Footer />
        </>
    )
}

export default IndexPage