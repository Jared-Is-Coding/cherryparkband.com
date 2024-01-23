import { Link, type HeadFC, type PageProps } from "gatsby"
import * as React from "react"
import { Carousel, Col, Container, Row } from "react-bootstrap"
import { CarouselImage } from "../components/CarouselImage"
import { CherryFooter } from "../components/CherryFooter"
import { CherryParkNavbar } from "../components/CherryNavbar"
import { ListenIconLinks } from "../components/ListenIconLinks"
import { MetaData } from "../components/MetaData"

export const Head: HeadFC = () => (
    <>
        <html lang="en" />
        <MetaData title="Home | Cherry Park" />
    </>
)

const carouselSlides: carouselSlideData[] = [
    {
        imageSrc: "/images/albums/antidote/icon_widescreen.jpg",
        imageSrcMobile: "/images/albums/antidote/icon.jpg",
        imageTitle: "Cherry Park's upcoming EP, Antidote, available February 16th, 2024",
        imageAlt: "Painted album art of a chair in a window's light, for the Cherry Park EP, Antidote"
    },
    {
        imageSrc: "/images/shows/2023.09.24_the_queen/band3.jpg",
        imageSrcMobile: "/images/band/mobile/band1.jpg",
        imageTitle: "Live @ The Queen, Sept 24th 2023",
        imageAlt: "Cherry Park playing in the Crown Room at The Queen, in Wilmington Delaware"
    },
    {
        imageSrc: "/images/band/desktop/band2.jpg",
        imageSrcMobile: "/images/band/mobile/band2.jpg",
        imageAlt: "Cherry Park band members sitting on a picnic blanket"
    }
]

const IndexPage: React.FC<PageProps> = () => {
    return (
        <>
            <header>
                <CherryParkNavbar />

                <h1 className="flex-center">
                    Cherry Park
                    <p className="tagline">East Coast indie band</p>
                </h1>
            </header>

            <main>
                <Container>
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
                                                <CarouselImage src={thisImage.imageSrc} title={thisImage.imageTitle} alt={thisImage.imageAlt} />
                                                
                                                {thisImage.imageTitle && 
                                                    <Carousel.Caption style={{color: !!thisImage.darkText ? "black" : "white"}}>
                                                        {thisImage.imageTitle && 
                                                            <p>{thisImage.imageTitle}</p>
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
                                        {carouselSlides.map((thisImage, index) => (!!thisImage.imageSrcMobile && 
                                            <Carousel.Item key={`carousel-mobile-item-${index}`}>
                                                <CarouselImage src={thisImage.imageSrcMobile} title={thisImage.imageTitle} alt={thisImage.imageAlt} />
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