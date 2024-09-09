import { type HeadFC, type PageProps } from "gatsby"
import * as React from "react"
import { Carousel, Col, Container, Row } from "react-bootstrap"
import CarouselImage from "../components/CarouselImage"
import Footer from "../components/Footer"
import ListenIconLinks from "../components/ListenIconLinks"
import MetaData from "../components/MetaData"
import Navbar from "../components/Navbar"
import allIndexSlides from "../util/lists/allIndexSlides"

export const Head: HeadFC = () => (
    <>
        <html lang="en" />
        <MetaData title="Home | Cherry Park" />
    </>
)

const IndexPage: React.FC<PageProps> = () => {
    return (
        <>
            <header>
                <Navbar isHomepage={true} />

                <h1 className="flex-center">
                    Cherry Park
                </h1>

                <p className="tagline flex-center">
                    East Coast indie band
                </p>
            </header>

            <main>
                <Container>
                    <h2 className="flex-center">
                        Find us on: <ListenIconLinks />
                    </h2>
                    
                    {/* Desktop View */}
                    <div className="d-none d-lg-inline">
                        {!!allIndexSlides.length &&
                            <Row>
                                <Col key="carousel-desktop">
                                    <Carousel touch controls={allIndexSlides.length > 1}>
                                        {allIndexSlides.map((thisImage, index) => (
                                            <Carousel.Item key={`carousel-desktop-item-${index}`}>
                                                {/* URL is present */}
                                                {thisImage.url && 
                                                    <a href={thisImage.url} title={thisImage.imageTitle}>
                                                        <CarouselImage src={thisImage.imageSrc} title={thisImage.imageTitle} alt={thisImage.imageAlt} />
                                                    </a>
                                                }

                                                {/* No URL is present */}
                                                {!thisImage.url &&
                                                    <CarouselImage src={thisImage.imageSrc} title={thisImage.imageTitle} alt={thisImage.imageAlt} />
                                                }
                                                
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
                        {!!allIndexSlides.length &&
                            <Row>
                                <Col key="carousel-mobile">
                                    <Carousel touch controls={allIndexSlides.length > 1}>
                                        {allIndexSlides.map((thisImage, index) => (!!thisImage.imageSrcMobile && 
                                            <Carousel.Item key={`carousel-mobile-item-${index}`}>
                                                {/* URL is present */}
                                                {thisImage.url && 
                                                    <a href={thisImage.url} title={thisImage.imageTitle}>
                                                        <CarouselImage src={thisImage.imageSrcMobile} title={thisImage.imageTitle} alt={thisImage.imageAlt} />
                                                    </a>
                                                }

                                                {/* No URL is present */}
                                                {!thisImage.url &&
                                                    <CarouselImage src={thisImage.imageSrcMobile} title={thisImage.imageTitle} alt={thisImage.imageAlt} />
                                                }
                                                
                                            </Carousel.Item>
                                        ))}
                                    </Carousel>
                                </Col>
                            </Row>
                        }
                    </div>
                </Container>
            </main>
                
            <Footer hideListenIconLinks={true} />
        </>
    )
}

export default IndexPage