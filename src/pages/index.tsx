import { type HeadFC, type PageProps } from "gatsby"
import * as React from "react"
import { MetaData } from "../components/MetaData"
import { StickyFooter } from "../components/StickyFooter"
import "../css/styles.scss"

export const Head: HeadFC = () => (
    <>
        <html lang="en" />
        <MetaData />
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

const showData = [
    {
        text: "The Queen, Wilmington DE",
        date: "September 24th, 2023",
        image: "/images/shows/the_queen.png",
        imageTitle: "The Queen venue image",
        imageAlt: "Venue image for The Queen in Wilmington Delaware",
        url: "https://thequeenwilmington.com/events/cherry-park-secret-garden-album-release-w-rachel-ana-dobken-chvnce/",
        target: "_blank"
    }
]

const IndexPage: React.FC<PageProps> = () => {
    return (
        <>
            <header className="flex-col flex-center">
                <h1>
                    Cherry Park
                </h1>
                <h2 className="hide-on-small">
                    East coast indie band
                </h2>
            </header>

            <main className="flex-col">
                <div className="flex-row flex-wrap flex-center">
                    {/* Our music */}
                    <div className="flex-col">
                        <h3 className="flex-center">
                            Our Music
                        </h3>

                        <div className="flex-row">
                            {albumData.map((album) => (
                                <>
                                    <div className="card flex-col flex-center">
                                        <div className="flex-row flex-center flex-wrap">
                                            <div className="card-iframe">
                                                {album.iframes.at(0)}
                                            </div>
                                            {(album.iframes) && (album.iframes.length > 1) &&
                                                <>
                                                    {album.iframes.slice(1).map((iframe) => (
                                                        <div className="card-iframe hide-on-small">
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
                                </>
                            ))}
                        </div>
                    </div>
                    {/* Our Shows */}
                    {/* <div className="flex-col">
                        <h3 className="flex-center">
                            Live Shows
                        </h3>

                        <div className="flex-row">
                            {showData.map((show) => (
                                <>
                                    <div className="card flex-col flex-center">
                                        {(show.url) && (show.image) &&
                                            <a href={show.url} target={show.target}>
                                                <img className={show.image.endsWith(".png") ? "card-image png" : "card-image"} src={show.image} title={show.imageTitle} alt={show.imageAlt} />
                                            </a>
                                        }

                                        <h3 className="card-text">{show.text}</h3>

                                        {show.date && 
                                            <p className="card-text">{show.date}</p>
                                        }
                                    </div>
                                </>
                            ))}
                        </div>
                    </div> */}
                </div>
            </main>
            
            <StickyFooter />
        </>
    )
}

export default IndexPage