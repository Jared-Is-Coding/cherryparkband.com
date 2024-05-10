import { type HeadFC, type PageProps } from "gatsby"
import * as React from "react"
import { Col, Row } from "react-bootstrap"
import Container from 'react-bootstrap/Container'
import Footer from "../../components/Footer"
import MetaData from "../../components/MetaData"
import Navbar from "../../components/Navbar"
import ShowCard from "../../components/ShowCard"
import { allShows } from "./allShows"

export const Head: HeadFC = () => (
    <>
        <html lang="en" />
        <MetaData title="Shows | Cherry Park" />
    </>
)

const today = new Date().valueOf()
const dateStringValue = (d: string) => new Date(d + " 23:59:59").valueOf()

const upcomingShows = allShows
    .filter((show) => dateStringValue(show.showDate) >= today)
    .sort((a, b) => dateStringValue(a.showDate) - dateStringValue(b.showDate))
const pastShows = allShows
    .filter((show) => dateStringValue(show.showDate) < today)
    .sort((a, b) => dateStringValue(b.showDate) - dateStringValue(a.showDate))

const mapShow = (show: showData, index: number) => (
    <Col
        xs={{span: 10, offset: 1}}
        md={{span: 10, offset: 1}}
        className="show-card"
        key={`show-card-item-${show.showDate}-${index}`}>
        <ShowCard show={show} />
    </Col>
)

const IndexPage: React.FC<PageProps> = () => {
    return (
        <>
            <header>
                <Navbar />

                <h1 className="flex-center">
                    Shows
                    <p className="tagline">Come see us live!</p>
                </h1>
            </header>

            <main>
                <Container>
                    <Row>
                        <Col xs={{span: 12}} lg={{span: 6}}>
                            <h2 className="flex-center">
                                Upcoming Shows
                            </h2>

                            <Row>
                                {!upcomingShows.length &&
                                    <Col xs={{span: 12}}>
                                        <p>No shows are currently scheduled.</p>
                                    </Col>
                                }
                                {!!upcomingShows.length &&
                                    upcomingShows.map(mapShow)
                                }
                            </Row>
                        </Col>
                        <Col xs={{span: 12}} lg={{span: 6}}>
                            <h2 className="flex-center">
                                Past Shows
                            </h2>

                            <Row>
                                {!pastShows.length &&
                                    <Col xs={{span: 12}}>
                                        <p>No recent shows found.</p>
                                    </Col>
                                }
                                {!!pastShows.length &&
                                    pastShows.map(mapShow)
                                }
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </main>
                
            <Footer />
        </>
    )
}

export default IndexPage