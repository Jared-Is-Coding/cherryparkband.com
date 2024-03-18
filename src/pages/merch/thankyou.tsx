import { Link, type HeadFC, type PageProps } from "gatsby"
import * as React from "react"
import { Col, Row } from "react-bootstrap"
import Container from 'react-bootstrap/Container'
import { CherryFooter } from "../../components/CherryFooter"
import { CherryParkNavbar } from "../../components/CherryNavbar"
import { MetaData } from "../../components/MetaData"
import { OrdersInformation } from "../../components/OrdersInformation"

export const Head: HeadFC = () => (
    <>
        <html lang="en" />
        <MetaData title="Thank you! | Merch | Cherry Park" />
    </>
)

const IndexPage: React.FC<PageProps> = () => {
    return (
        <>
            <header>
                <CherryParkNavbar />

                <h1 className="flex-center">
                    Thank you!
                </h1>

                <p className="tagline flex-center">We appreciate your support!</p>
            </header>

            <main>
                <Container>
                    <Row>
                        <Col className="flex-center flex-col">
                            <p><Link to="/">ᐊ Home</Link></p>
                        </Col>
                    </Row>

                    <h2 className="flex-center">
                        Orders Information
                    </h2>

                    <OrdersInformation />
                </Container>
            </main>
                
            <CherryFooter />
        </>
    )
}

export default IndexPage