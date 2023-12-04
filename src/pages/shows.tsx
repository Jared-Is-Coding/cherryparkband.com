import { type HeadFC, type PageProps } from "gatsby"
import * as React from "react"
import { Card, Col, Row } from "react-bootstrap"
import Container from 'react-bootstrap/Container'
import { CherryFooter } from "../components/CherryFooter"
import { CherryParkNavbar } from "../components/CherryNavbar"
import { MetaData } from "../components/MetaData"

export const Head: HeadFC = () => (
    <>
        <html lang="en" />
        <MetaData title="Shows | Cherry Park" />
    </>
)

const upcomingShows: showData[] = [
    
]

const pastShows: showData[] = [
    {
        showTitle: "Elkton Music Hall, Elkton MD",
        showDate: "December 2nd, 2023",
        otherPerformers: "Kendra Morris",
        imageSrc: "/images/venues/elkton_music_hall.jpg",
        imageTitle: "Elkton Music Hall venue image",
        imageAlt: "Venue image for Elkton Music Hall in Elkton Maryland",
        url: "https://www.elktonmusichall.com/",
        target: "_blank"
    },
    {
        showTitle: "The Queen, Wilmington DE",
        showDate: "September 24th, 2023",
        otherPerformers: "Chvnce | Rachel Ana Dobken",
        imageSrc: "/images/venues/the_queen.png",
        imageTitle: "The Queen venue image",
        imageAlt: "Venue image for The Queen in Wilmington Delaware",
        url: "https://thequeenwilmington.com/",
        target: "_blank"
    }
]

const mapShows = (show: showData, index: number) => (
    <Card key={`show-card-item-${show.showTitle}-${index}`}>
        {show.imageSrc && 
            <Card.Img variant="top" src={show.imageSrc} className={show.imageSrc.endsWith(".png") ? "flex-center card-image png" : "flex-center card-image"} title={show.imageTitle} alt={show.imageAlt} />
        }
        {show.url && show.showTitle &&
            <Card.Text as="h4">
                <a href={show.url} target={show.target ?? "_self"}>{show.showTitle}</a>
            </Card.Text>
        }
        {show.otherPerformers && 
            <Card.Text>ft. {show.otherPerformers}</Card.Text>
        }
        {show.showDate && 
            <Card.Subtitle>{show.showDate}</Card.Subtitle>
        }
    </Card>
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
                        <Col sm={{span: 12}} md={{span: 6}}>
                            <h2 className="flex-center">
                                Upcoming Shows
                            </h2>

                            <div className="flex-center">
                                {!upcomingShows.length &&
                                    <p>No shows are currently scheduled.</p>
                                }
                                {!!upcomingShows.length &&
                                    upcomingShows.map(mapShows)
                                }
                            </div>
                        </Col>
                        <Col sm={{span: 12}} md={{span: 6}}>
                            <h2 className="flex-center">
                                Past Shows
                            </h2>

                            <div className="flex-center">
                                {!pastShows.length &&
                                    <p>No recent shows found.</p>
                                }
                                {!!pastShows.length &&
                                    pastShows.map(mapShows)
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </main>
                
            <CherryFooter />
        </>
    )
}

export default IndexPage