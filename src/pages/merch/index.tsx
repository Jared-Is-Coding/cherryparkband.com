import { type HeadFC, type PageProps } from "gatsby"
import * as React from "react"
import { Col, Row } from "react-bootstrap"
import Container from 'react-bootstrap/Container'
import Footer from "../../components/Footer"
import MerchCard from "../../components/MerchCard"
import MetaData from "../../components/MetaData"
import Navbar from "../../components/Navbar"
import OrdersInformation from "../../components/OrdersInformation"
import "../../scss/merch.scss"
import allMerch from "./allMerch"

export const Head: HeadFC = () => (
    <>
        <html lang="en" />
        <MetaData title="Merch | Cherry Park" />
    </>
)

const mapMerch = (item: merchData, index: number) => (
    <>
        <Col
            xs={{span: 10, offset: 1}}
            md={{span: 6, offset: 0}}
            lg={{span: 3, offset: 0}}
            className="flex-center"
            key={`merch-card-item-${item.title}-${index}`}>
            <MerchCard item={item} />
        </Col>

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

            <main>
                <Container>
                    <h2 className="flex-center">
                        Currently Available
                    </h2>

                    <Row>
                        {!allMerch.length &&
                            <Col xs={{span: 12}}>
                                <p>No merch is currently available.</p>
                            </Col>
                        }
                        {!!allMerch.length &&
                            allMerch.map(mapMerch)
                        }
                    </Row>

                    <br />

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