import { type HeadFC, type PageProps } from "gatsby"
import * as React from "react"
import { Col, Row } from "react-bootstrap"
import Container from 'react-bootstrap/Container'
import { CherryParkNavbar } from "../components/CherryNavbar"
import { MetaData } from "../components/MetaData"
import { CherryFooter } from "../components/CherryFooter"

export const Head: HeadFC = () => (
    <>
        <html lang="en" />
        <MetaData title="Listen | Cherry Park" />
    </>
)

const albumData = [
    {
        text: "Secret Garden (EP)",
        date: null,
        image: "/images/albums/secret_garden/icon.png",
        imageTitle: "Secret Garden album art",
        imageAlt: "Logo icon for the Secret Garden album by Cherry Park",
        url: "https://open.spotify.com/album/4uxRAidPaTHs8qcvYajCHb",
        target: "_blank",
        iframes: [
            <>
                <iframe
                    style={{borderRadius: "12px", border: "none"}}
                    src="https://open.spotify.com/embed/album/4uxRAidPaTHs8qcvYajCHb?utm_source=generator"
                    width="100%"
                    height="352"
                    allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"/>
            </>,
            <>
                <iframe
                    style={{borderRadius: "12px", border: "none", background: "transparent", maxWidth: ""}}
                    src="https://embed.music.apple.com/us/album/secret-garden/1699107941?wmode=opaque"
                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                    data-embed="true"
                    width="100%"
                    height="352"
                    allow="encrypted-media; fullscreen"/>
            </>
        ]
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
                        Listen
                    </h1>

                    <Row>
                        <Col>
                            {/* Our music */}
                            <h3 className="text-center">
                                Our Music
                            </h3>
                            <Row>

                            </Row>
                            <div className="flex-col">

                                <div className="flex-row">
                                    {albumData.map((album, index) => (
                                        <div className="card flex-col flex-center" key={`album-item-${index}`}>
                                            <div className="flex-row flex-center flex-wrap">
                                                <div className="card-iframe">
                                                    {album.iframes.at(0)}
                                                </div>
                                                {(album.iframes) && (album.iframes.length > 1) &&
                                                    <>
                                                        {album.iframes.slice(1).map((iframe) => (
                                                            <div className="card-iframe hide-on-small" key={`album-iframe-item-${index}`}>
                                                                {iframe}
                                                            </div>
                                                        ))}
                                                    </>
                                                }
                                                {(album.url) && (album.image) && (!album.iframes) &&
                                                    <a href={album.url} target={album.target}>
                                                        <img className={album.image.endsWith(".png") ? "card-image png" : "card-image"} src={album.image} title={album.imageTitle} alt={album.imageAlt} />
                                                    </a>
                                                }
                                            </div>

                                            <h3 className="card-text">{album.text}</h3>


                                            {album.date && 
                                                <p className="card-text">{album.date}</p>
                                            }
                                        </div>
                                    ))}
                                </div>
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