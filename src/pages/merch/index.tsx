import { type HeadFC, type PageProps } from "gatsby"
import * as React from "react"
import { Col, Row } from "react-bootstrap"
import Container from 'react-bootstrap/Container'
import Footer from "../../components/Footer"
import MerchCard from "../../components/MerchCard"
import MetaData from "../../components/MetaData"
import Navbar from "../../components/Navbar"
import OrdersInformation from "../../components/OrdersInformation"
import "../../scss/pages/merch.scss"

export const Head: HeadFC = () => (
    <>
        <html lang="en" />
        <MetaData title="Merch | Cherry Park" />
    </>
)

const allMerch: merchData[] = [
    {
        title: "Cherry Park Tee",
        price: "$22.00 - $28.00",
        imageSrc: "/images/merch/tee_collage.jpg",
        url: "https://square.link/u/p7Xu6VAp?src=embed"
    },
    {
        title: "Cherry Park Long Sleeve",
        price: "$32.00 - $38.00",
        imageSrc: "/images/merch/long_sleeve_collage.jpg",
        url: "https://square.link/u/KCjEsfoc?src=embed"
    },
    {
        title: "Cherry Park Tote Bag",
        price: "$10.00",
        imageSrc: "/images/merch/tote.jpg",
        url: "https://square.link/u/RfAXVbM0?src=embed"
    },
    {
        title: "Cherry Park Beanie",
        price: "$25.00",
        imageSrc: "/images/merch/beanie.jpg",
        url: "https://square.link/u/BcqKDEn0?src=embed"
    },
    /* {
        dateAvailable: "February 16, 2024",
        title: "Cherry Park Hoodie",
        price: "$42.00 - $48.00",
        imageSrc: "",
        url: "https://square.link/u/zvcgoIlW?src=embed"
    } */
]

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