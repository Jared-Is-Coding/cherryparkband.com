import { Link, type HeadFC, type PageProps } from "gatsby"
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
        date: "August 4th, 2023",
        image: "/images/albums/secret_garden/icon.png",
        imageTitle: "Secret Garden album art",
        imageAlt: "Logo icon for the Secret Garden album by Cherry Park",
        url: "https://open.spotify.com/album/4uxRAidPaTHs8qcvYajCHb",
        target: "_blank",
        iframe: <>
            <iframe
                style={{borderRadius: "12px"}}
                src="https://open.spotify.com/embed/album/4uxRAidPaTHs8qcvYajCHb?utm_source=generator"
                frameBorder="0"
                width="100%"
                height="352"
                allowFullScreen={true}
                allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"/>
        </>
    }
]

const IndexPage: React.FC<PageProps> = () => {
    return (
        <>
            <header className="flex-col flex-center">
                <h1>
                    Cherry Park<span className="hide-on-small"> | East coast indie band</span>
                </h1>
            </header>

            <main className="flex-col">
                <div className="flex-row flex-wrap flex-center">
                    {/* Our music */}
                    <div className="flex-col">
                        <h2 className="flex-center">
                            Check out our music!
                        </h2>

                        <div className="flex-row">
                            {albumData.map((album) => (
                                <>
                                    <div className="card flex-col flex-center">
                                        {(album.iframe)&&
                                            <div className="card-iframe">
                                                {album.iframe}
                                            </div>
                                        }
                                        {(album.url) && (album.image) && (!album.iframe) &&
                                            <Link to={album.url} target={album.target}>
                                                <img className="card-image" src={album.image} title={album.imageTitle} alt={album.imageAlt} />
                                            </Link>
                                        }

                                        <h3 className="card-text">{album.text}</h3>

                                        {album.date && 
                                            <p className="card-text">{album.date}</p>
                                        }
                                    </div>
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            
            <StickyFooter />
        </>
    )
}

export default IndexPage