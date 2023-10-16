import { Link, type HeadFC, type PageProps } from "gatsby"
import * as React from "react"
import { Col, Row } from "react-bootstrap"
import Container from 'react-bootstrap/Container'
import { CherryFooter } from "../../components/CherryFooter"
import { CherryParkNavbar } from "../../components/CherryNavbar"
import { MetaData } from "../../components/MetaData"

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
            </header>

            <main>
                <Container>
                    <h1 className="flex-center">
                        Thank you!
                    </h1>

                    <Row>
                        <Col className="flex-center flex-col">
                            <h2>Order Fulfillment</h2>
                            <p>
                                Orders will be fulfilled as soon as we're reasonably able.
                                <br />You can expect single items within 1-2 weeks, and larger orders within 2-3 weeks (we make these to-order!).
                                <br /><br />If you run into any issues or have still not received your order by then, please send us an email.
                            </p>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="flex-center flex-col">
                            <p><Link to="/">ᐊ Home</Link></p>
                        </Col>
                    </Row>
                </Container>
            </main>
                
            <CherryFooter hideListenIconLinks={true} />
        </>
    )
}

export default IndexPage