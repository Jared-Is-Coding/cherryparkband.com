import { Script, type HeadFC, type PageProps } from "gatsby"
import * as React from "react"
import { Carousel, Col, Container, Row } from "react-bootstrap"
import { CherryParkNavbar } from "../components/CherryNavbar"
import { MetaData } from "../components/MetaData"
import { CherryFooter } from "../components/CherryFooter"
import { CarouselImage } from "../components/CarouselImage"
import { ListenIconLinks } from "../components/ListenIconLinks"

export const Head: HeadFC = () => (
    <>
        <html lang="en" />
        <MetaData title="Home | Cherry Park" />
    </>
)

const carouselSlides: carouselSlideData[] = [
    {
        src: "/images/shows/2023.09.24_the_queen/band3.jpg",
        srcMobile: "/images/band/mobile/band1.jpg",
        title: "Live @ The Queen, Sept 24th 2023",
        alt: "Cherry Park playing in the Crown Room at The Queen, in Wilmington Delaware"
    },
    {
        src: "/images/band/desktop/band2.jpg",
        srcMobile: "/images/band/mobile/band2.jpg",
        title: "Cherry Park",
        alt: "Cherry Park band members sitting on a picnic blanket"
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
                        Cherry Park, East Coast indie band
                    </h1>

                    {/* Desktop View */}
                    <div className="d-none d-lg-inline">
                        <h2 className="flex-center">
                            Find us on: <ListenIconLinks />
                        </h2>

                        {!!carouselSlides.length &&
                            <Row>
                                <Col key="carousel-desktop">
                                    <Carousel touch controls={carouselSlides.length > 1}>
                                        {carouselSlides.map((thisImage, index) => (
                                            <Carousel.Item key={`carousel-desktop-item-${index}`}>
                                                <CarouselImage src={thisImage.src} title={thisImage.title} alt={thisImage.alt} />
                                                
                                                {(thisImage.title || thisImage.subtitle) && 
                                                    <Carousel.Caption>
                                                        {thisImage.title && 
                                                            <h3>{thisImage.title}</h3>
                                                        }
                                                        {thisImage.subtitle && 
                                                            <p>{thisImage.subtitle}</p>
                                                        }
                                                    </Carousel.Caption>
                                                }
                                            </Carousel.Item>
                                        ))}
                                    </Carousel>
                                </Col>
                            </Row>
                        }
                    </div>

                    {/* Mobile View */}
                    <div className="d-inline d-lg-none">
                        {!!carouselSlides.length &&
                            <Row>
                                <Col key="carousel-mobile">
                                    <Carousel touch controls={carouselSlides.length > 1}>
                                        {carouselSlides.map((thisImage, index) => (!!thisImage.srcMobile && 
                                            <Carousel.Item key={`carousel-mobile-item-${index}`}>
                                                <CarouselImage src={thisImage.srcMobile} title={thisImage.title} alt={thisImage.alt} />
                                                
                                                {(thisImage.title || thisImage.subtitle) && 
                                                    <Carousel.Caption>
                                                        {thisImage.title && 
                                                            <h3>{thisImage.title}</h3>
                                                        }
                                                        {thisImage.subtitle && 
                                                            <p>{thisImage.subtitle}</p>
                                                        }
                                                    </Carousel.Caption>
                                                }
                                            </Carousel.Item>
                                        ))}
                                    </Carousel>
                                </Col>
                            </Row>
                        }
                        
                        <h2 className="flex-center">
                            Find us on: <ListenIconLinks />
                        </h2>
                    </div>
                </Container>
            </main>
                
            <CherryFooter hideListenIconLinks={true} />
        </>
    )
}

export default IndexPage