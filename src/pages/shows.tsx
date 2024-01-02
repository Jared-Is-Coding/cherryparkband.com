import { type HeadFC, type PageProps } from "gatsby"
import * as React from "react"
import { Col, Row } from "react-bootstrap"
import Container from 'react-bootstrap/Container'
import { CherryFooter } from "../components/CherryFooter"
import { CherryParkNavbar } from "../components/CherryNavbar"
import { MetaData } from "../components/MetaData"
import { ShowCard } from "../components/ShowCard"

export const Head: HeadFC = () => (
    <>
        <html lang="en" />
        <MetaData title="Shows | Cherry Park" />
    </>
)

const allShows: showData[] = [
    {
        showTitle: "Elkton Music Hall, Elkton MD",
        showDate: "February 17, 2024",
        imageSrc: "/images/venues/elkton_music_hall.jpg",
        imageTitle: "Elkton Music Hall venue image",
        imageAlt: "Venue image for Elkton Music Hall in Elkton Maryland",
        target: "_blank"
    },
    {
        showTitle: "Elkton Music Hall, Elkton MD",
        showDate: "December 2, 2023",
        otherPerformers: "Kendra Morris",
        imageSrc: "/images/venues/elkton_music_hall.jpg",
        imageTitle: "Elkton Music Hall venue image",
        imageAlt: "Venue image for Elkton Music Hall in Elkton Maryland",
        url: "https://www.elktonmusichall.com/",
        target: "_blank"
    },
    {
        showTitle: "The Queen, Wilmington DE",
        showDate: "September 24, 2023",
        otherPerformers: "Chvnce | Rachel Ana Dobken",
        imageSrc: "/images/venues/the_queen.png",
        imageTitle: "The Queen venue image",
        imageAlt: "Venue image for The Queen in Wilmington Delaware",
        url: "https://thequeenwilmington.com/",
        target: "_blank"
    }
]

const today = new Date().valueOf()
const upcomingShows = allShows.filter((show) => new Date(show.showDate + " 23:59:59").valueOf() >= today)
const pastShows = allShows.filter((show) => new Date(show.showDate + " 23:59:59").valueOf() < today)
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
                <CherryParkNavbar />

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
                
            <CherryFooter />
        </>
    )
}

export default IndexPage