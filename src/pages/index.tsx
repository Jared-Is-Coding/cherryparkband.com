import { type HeadFC, type PageProps } from "gatsby"
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
        imageTitle: "Cherry Park's newly released EP, Antidote",
        imageAlt: "Painted album art of a chair in a window's light, for the Cherry Park EP, Antidote",
        url: "https://open.spotify.com/album/5XcJP9bbWJaEwOlwjLzMFa"
    },
    {
        imageSrc: "/images/shows/2024.02.17_elkton_music_hall/band1.jpg",
        imageSrcMobile: "/images/shows/2024.02.17_elkton_music_hall/band3.jpg",
        imageTitle: "Live @ Elkton Music Hall, Feb 17th 20234",
        imageAlt: "Cherry Park playing at Elkton Music Hall, in Elkton Maryland"
    },
    {
        imageSrc: "/images/albums/secret_garden/icon_wide.png",
        imageSrcMobile: "/images/albums/secret_garden/icon.png",
        imageTitle: "Cherry Park's EP, Secret Garden",
        imageAlt: "Painted album art of an archway leading to water with the moon over it, for the Cherry Park EP, Secret Garden",
        url: "https://open.spotify.com/album/4uxRAidPaTHs8qcvYajCHb"
    },
    {
        imageSrc: "/images/band/desktop/winter_2.jpg",
        imageSrcMobile: "/images/band/mobile/winter_3.jpg",
        imageAlt: "Cherry Park band members in front of a brick wall"
    },
    {
        imageSrc: "/images/band/desktop/summer_2.jpg",
        imageSrcMobile: "/images/band/mobile/summer_1.jpg",
        imageAlt: "Cherry Park band members sitting on a picnic blanket"
    }
]

const IndexPage: React.FC<PageProps> = () => {
    return (
        <>
            <header>
                <CherryParkNavbar isHomepage={true} />

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
                        {!!carouselSlides.length &&
                            <Row>
                                <Col key="carousel-desktop">
                                    <Carousel touch controls={carouselSlides.length > 1}>
                                        {carouselSlides.map((thisImage, index) => (
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
                        {!!carouselSlides.length &&
                            <Row>
                                <Col key="carousel-mobile">
                                    <Carousel touch controls={carouselSlides.length > 1}>
                                        {carouselSlides.map((thisImage, index) => (!!thisImage.imageSrcMobile && 
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
                
            <CherryFooter hideListenIconLinks={true} />
        </>
    )
}

export default IndexPage