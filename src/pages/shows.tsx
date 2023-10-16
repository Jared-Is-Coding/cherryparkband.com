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
        showTitle: "The Queen, Wilmington DE",
        showDate: "September 24th, 2023",
        imageSrc: "/images/venues/the_queen.png",
        imageTitle: "The Queen venue image",
        imageAlt: "Venue image for The Queen in Wilmington Delaware",
        url: "https://thequeenwilmington.com/",
        target: "_blank"
    }
]

const IndexPage: React.FC<PageProps> = () => {
    return (
        <>
            <header>
                <CherryParkNavbar />
            </header>

            <main>
                <Container>
                    <h1 className="flex-center">
                        Shows
                    </h1>

                    <Row>
                        <Col sm={{span: 12}} md={{span: 6}}>
                            <h2 className="flex-center">
                                Upcoming Shows
                            </h2>

                            <div className="flex-center">
                                {!upcomingShows.length &&
                                    <>
                                        <p>No shows are currently scheduled.</p>
                                    </>
                                }
                                {!!upcomingShows.length &&
                                    <>
                                        {upcomingShows.map((show, index) => (
                                            <Card key={`show-card-item-${index}`}>
                                                {show.imageSrc && 
                                                    <Card.Img variant="top" src={show.imageSrc} className={show.imageSrc.endsWith(".png") ? "flex-center card-image png" : "flex-center card-image"} title={show.imageTitle} alt={show.imageAlt} />
                                                }
                                                {show.url && show.showTitle &&
                                                    <Card.Text as="h4">
                                                        <a href={show.url} target={show.target ?? "_self"}>{show.showTitle}</a>
                                                    </Card.Text>
                                                }
                                                {show.showDate && 
                                                    <Card.Subtitle>{show.showDate}</Card.Subtitle>
                                                }
                                            </Card>
                                        ))}
                                    </>
                                }
                            </div>
                        </Col>
                        <Col sm={{span: 12}} md={{span: 6}}>
                            <h2 className="flex-center">
                                Past Shows
                            </h2>

                            <div className="flex-center">
                                {!pastShows.length &&
                                    <>
                                        <p>No recent shows found.</p>
                                    </>
                                }
                                {!!pastShows.length &&
                                    <>
                                        {pastShows.map((show, index) => (
                                            <Card key={`pastshow-card-item-${index}`}>
                                                {show.imageSrc && 
                                                    <Card.Img variant="top" src={show.imageSrc} className={show.imageSrc.endsWith(".png") ? "flex-center card-image png" : "flex-center card-image"} title={show.imageTitle} alt={show.imageAlt} />
                                                }
                                                {show.url && show.showTitle &&
                                                    <Card.Text as="h4">
                                                        <a href={show.url} target={show.target ?? "_self"}>{show.showTitle}</a>
                                                    </Card.Text>
                                                }
                                                {show.showDate && 
                                                    <Card.Subtitle>{show.showDate}</Card.Subtitle>
                                                }
                                            </Card>
                                        ))}
                                    </>
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