import { type HeadFC, type PageProps } from "gatsby"
import * as React from "react"
import { Col, Image, Row } from "react-bootstrap"
import Container from 'react-bootstrap/Container'
import { CherryParkNavbar } from "../components/CherryNavbar"
import { MetaData } from "../components/MetaData"
import { CherryFooter } from "../components/CherryFooter"

export const Head: HeadFC = () => (
    <>
        <html lang="en" />
        <MetaData title="Merch | Cherry Park" />
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
                        Merch
                    </h1>

                    <h2 className="text-center">
                        Coming soon! Check back later...
                    </h2>

                    <Row>
                        <Col xs="1" md="3" lg="4" />
                        <Col xs="10" md="6" lg="4" className="flex-center">
                            <Image
                                src="/images/shows/2023.09.24_the_queen/merch.jpg"
                                title="Merch Table"
                                alt="Band member standing behind merchandise table, looking at the camera"
                                fluid
                                roundedCircle />
                        </Col>
                    </Row>

                    <Row>
                        <Col className="flex-center">
                            <p>For questions about Cherry Park merchandise or issues with a past sale, please <a href="mailto:thecherryparkband@gmail.com?subject=Cherry Park | Merch Related Question">send us an email</a> and we can help you out!</p>
                        </Col>
                    </Row>
                </Container>
            </main>
                
            <CherryFooter />
        </>
    )
}

export default IndexPage