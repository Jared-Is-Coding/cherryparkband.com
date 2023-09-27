import { type HeadFC, type PageProps } from "gatsby"
import * as React from "react"
import { Col, Row } from "react-bootstrap"
import Container from 'react-bootstrap/Container'
import { CherryParkNavbar } from "../components/CherryNavbar"
import { MetaData } from "../components/MetaData"
import { CherryFooter } from "../components/CherryFooter"

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
                <CherryParkNavbar />
            </header>

            <main>
                <Container>
                    <h1 className="flex-center">
                        About
                    </h1>

                    <Row>
                        <Col>
                        </Col>
                    </Row>
                </Container>
            </main>
                
            <CherryFooter />
        </>
    )
}

export default IndexPage