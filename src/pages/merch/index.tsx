import { type HeadFC, type PageProps } from "gatsby"
import * as React from "react"
import { Col, Image, Row } from "react-bootstrap"
import Container from 'react-bootstrap/Container'
import { CherryFooter } from "../../components/CherryFooter"
import { CherryParkNavbar } from "../../components/CherryNavbar"
import { MetaData } from "../../components/MetaData"
import "../../scss/merch.scss"

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

                <h1 className="flex-center">
                    Merch
                </h1>
            </header>

            <main>
                <Container>
                    <h2 className="flex-center">
                        Currently Available
                    </h2>

                    <Row>
                        <Col xs={{span: 10, offset: 1}} md={{span: 5, offset: 1}} lg={{span: 4, offset: 2}} className="flex-center">
                            <div className="parent">
                                <div className="child">
                                    <p>Pictures coming soon...</p>
                                    <p>Secret Garden Tee</p>
                                    <p>$22.00 - $25.00</p>
                                    <a target="_blank" href="https://square.link/u/aMBuK2ZP?src=embed">
                                        Get it!
                                    </a>
                                </div>
                            </div>
                        </Col>

                        <Col xs={{span: 12}} className="d-sm-inline d-md-none"><br /></Col>
                        
                        <Col xs={{span: 10, offset: 1}} md={{span: 5, offset: 0}} lg={{span: 4, offset: 0}} className="flex-center">
                            <div className="parent">
                                <div className="child">
                                    <p>Pictures coming soon...</p>
                                    <p>Secret Garden Long Sleeve</p>
                                    <p>$32.00 - $35.00</p>
                                    <a target="_blank" href="https://square.link/u/KCjEsfoc?src=embed">
                                        Heck yeah!
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <br />

                    <Row className="d-none d-md-inline">
                        <Col xs={{span: 10, offset: 1}} md={{span: 6, offset: 3}} lg={{span: 4, offset: 4}} className="flex-center">
                            <Image
                                src="/images/shows/2023.09.24_the_queen/merch.jpg"
                                title="Merch Table"
                                alt="Band member standing behind merchandise table, looking at the camera"
                                fluid
                                roundedCircle />
                        </Col>
                    </Row>

                    <h2 className="flex-center">
                        Other Information
                    </h2>

                    <Row>
                        <Col xs={{span: 12}} md={{span: 4}} className="flex-col">
                            <h3>Order Fulfillment</h3>
                            <p>
                                Orders will be fulfilled as soon as we're reasonably able.
                                <br />You can expect single items within 1-2 weeks, and larger orders within 2-3 weeks (we make these to-order!).
                                <br /><br />If you run into any issues or have still not received your order by then, please <a href="mailto:thecherryparkband@gmail.com?subject=Cherry Park | Merch Related Question">send us an email</a>.
                            </p>
                        </Col>
                        <Col xs={{span: 12}} md={{span: 4}} className="flex-col">
                            <h3>Return Policy</h3>
                            <p>
                                If an item you received is severely damaged or otherwise unusable for its purpose on arrival, please <a href="mailto:thecherryparkband@gmail.com?subject=Cherry Park | Merch Related Question">send us an email</a> within 3 days of receiving it.
                                <br /><br />Otherwise, returns, refunds and exchanges are not able to be processed at this time. Thank you!
                            </p>
                        </Col>
                        <Col xs={{span: 12}} md={{span: 4}} className="flex-col">
                            <h3>Problems or Questions</h3>
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