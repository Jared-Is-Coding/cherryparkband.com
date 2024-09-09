import { type HeadFC, type PageProps } from "gatsby"
import * as React from "react"
import { Col, Row } from "react-bootstrap"
import Container from 'react-bootstrap/Container'
import Footer from "../../components/Footer"
import MerchCard from "../../components/MerchCard"
import MerchStylesCard from "../../components/MerchStylesCard"
import MetaData from "../../components/MetaData"
import Navbar from "../../components/Navbar"
import OrdersInformation from "../../components/OrdersInformation"
import "../../scss/pages/merch.scss"
import merch from "../../util/lists/allMerch"
import styles from "../../util/lists/allStyles"

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
                <Navbar />

                <h1 className="flex-center">
                    Merch
                </h1>
            </header>

            <main className="page-merch">
                <Container>
                    <h2 className="flex-center">
                        Available Merch
                    </h2>

                    <Row>
                        {!merch.length &&
                            <Col xs={{span: 12}}>
                                <p>No merch is currently available.</p>
                            </Col>
                        }
                        {!!merch.length &&
                            merch.map(MerchCard)
                        }
                    </Row>

                    <h2 className="flex-center">
                        Design Styles
                    </h2>

                    <Row>
                        <Col xs={{span: 10, offset: 1}} md={{span: 12, offset: 0}}>
                            <Row>
                                {!styles.length &&
                                    <Col xs={{span: 12}}>
                                        <p>No styles are currently available.</p>
                                    </Col>
                                }
                                {!!styles.length &&
                                    styles.map(MerchStylesCard)
                                }
                            </Row>
                        </Col>
                    </Row>

                    <h2 className="flex-center">
                        Orders Information
                    </h2>

                    <OrdersInformation />
                </Container>
            </main>
                
            <Footer />
        </>
    )
}

export default IndexPage