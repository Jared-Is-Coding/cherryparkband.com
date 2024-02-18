import { type HeadFC, type PageProps } from "gatsby"
import * as React from "react"
import { Col, Row } from "react-bootstrap"
import Container from 'react-bootstrap/Container'
import { CherryFooter } from "../../components/CherryFooter"
import { CherryParkNavbar } from "../../components/CherryNavbar"
import { MerchCard } from "../../components/MerchCard"
import { MetaData } from "../../components/MetaData"
import "../../scss/merch.scss"
import { BandEmail } from "../../util/SiteVariables"

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
        title: "Cherry Park Beanie",
        price: "$30.00",
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
            md={{span: 5, offset: index % 2 == 0 ? 1 : 0}}
            lg={{span: 4, offset: index % 2 == 0 ? 2 : 0}}
            className="flex-center"
            key={`merch-card-item-${item.title}-${index}`}>
            <MerchCard item={item} />
        </Col>

        {index % 2 == 0 && 
            <Col xs={{span: 12}} className="d-sm-inline d-md-none"><br /></Col>
        }

        {index % 2 !== 0 && 
            <Col xs={{span: 12}} className="d-sm-inline"><br /></Col>
        }
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

                    <Row>
                        <Col xs={{span: 12}} className="flex-col">
                            <h3>Purchasing Multiple Items</h3>
                            <p>
                            Due to technical constraints, we cannot currently process multiple items in one order. If you would like to order multiple items, please pay for shipping on one of them, then use coupon code "<b>MULTI</b>" to waive the shipping cost on additional items. Thank you!
                            </p>
                            <br />
                        </Col>
                        <Col xs={{span: 12}} md={{span: 4}} className="flex-col">
                            <h3>Order Fulfillment</h3>
                            <p>
                                Orders will be fulfilled as soon as we're reasonably able.
                                <br /><br />You can expect single items within 1-2 weeks, and larger orders within 2-3 weeks (we make these to-order!).
                                <br /><br />If you run into any issues or have still not received your order by then, please <a href={`mailto:${BandEmail}?subject=Cherry Park | Merch Related Question`}>send us an email</a>.
                            </p>
                        </Col>
                        <Col xs={{span: 12}} md={{span: 4}} className="flex-col">
                            <h3>Return Policy</h3>
                            <p>
                                If an item you received is severely damaged or otherwise unusable for its purpose on arrival, please <a href={`mailto:${BandEmail}?subject=Cherry Park | Merch Related Question`}>send us an email</a> within 3 days of receiving it.
                                <br /><br />Otherwise, returns, refunds and exchanges are not able to be processed at this time. Thank you!
                            </p>
                        </Col>
                        <Col xs={{span: 12}} md={{span: 4}} className="flex-col">
                            <h3>Problems or Questions</h3>
                            <p>For questions about Cherry Park merchandise or issues with a past sale, please <a href={`mailto:${BandEmail}?subject=Cherry Park | Merch Related Question`}>send us an email</a> and we can help you out!</p>
                        </Col>
                    </Row>
                </Container>
            </main>
                
            <CherryFooter />
        </>
    )
}

export default IndexPage