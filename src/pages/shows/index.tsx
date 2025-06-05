import { type HeadFC, type PageProps } from "gatsby"
import * as React from "react"
import { Col, Row } from "react-bootstrap"
import Container from 'react-bootstrap/Container'
import Footer from "../../components/Footer"
import MetaData from "../../components/MetaData"
import Navbar from "../../components/Navbar"
import ShowCard from "../../components/ShowCard"
import "../../scss/pages/shows.scss"
import shows from "../../util/lists/allShows"

export const Head: HeadFC = () => (
    <>
        <html lang="en" />
        <MetaData title="Shows | Cherry Park" />
    </>
)

const nowTimeMS = new Date().valueOf()
const dateStringValue = (d: string) => new Date(d + " 23:59:59").valueOf()
const dateTimeStringValue = (d: string) => new Date(d).valueOf()
const oneAndHalfYearMS = 1000 * 60 * 60 * 24 * 365 * 1.5

const upcomingShows = shows
    .filter((show) => (
        dateStringValue(show.showDate) >= nowTimeMS)
        && (
            !show.hiddenUntilDateTime
            || (nowTimeMS > dateTimeStringValue(show.hiddenUntilDateTime))
        )
    )
    .sort((a, b) => dateStringValue(a.showDate) - dateStringValue(b.showDate))
const pastShows = shows
    .filter((show) => (
        // In the past
        dateStringValue(show.showDate) < nowTimeMS)
        // Within a year and a half ago
        && nowTimeMS - oneAndHalfYearMS < dateStringValue(show.showDate) 
    )
    .sort((a, b) => dateStringValue(b.showDate) - dateStringValue(a.showDate))

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

            <main className="page-shows">
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
                                    upcomingShows.map(ShowCard)
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
                                    pastShows.map(ShowCard)
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