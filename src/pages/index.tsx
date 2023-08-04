import { Link, type HeadFC, type PageProps } from "gatsby"
import * as React from "react"
import { MetaData } from "../components/MetaData"
import { StickyFooter } from "../components/StickyFooter"
import "../css/styles.scss"

export const Head: HeadFC = () => (
    <MetaData />
)

const albumData = [
    {
        text: "Secret Garden (EP)",
        date: "August 2023",
        image: "/images/albums/secret_garden/icon.png",
        imageTitle: "Secret Garden album art",
        imageAlt: "Logo icon for the Secret Garden album by Cherry Park",
        url: "https://distrokid.com/hyperfollow/cherrypark/secret-garden-2",
        target: "_blank"
    }
]

const IndexPage: React.FC<PageProps> = () => {
    return (
        <>
            <main className="flex-col flex-center">
                <div>
                    <h1>
                        Cherry Park
                    </h1>
                </div>

                <div className="flex-row">
                    {albumData.map((album) => (
                        <>
                            <div className="card flex-col flex-center">
                                <Link to={album.url} target={album.target}>
                                    {(album.image) &&
                                        <img className="card-image" src={album.image} title={album.imageTitle} alt={album.imageAlt}></img>
                                    }
                                </Link>

                                <h2 className="card-text">{album.text}</h2>
                                <p className="card-text">{album.date}</p>
                            </div>
                        </>
                    ))}
                </div>
            </main>
            
            <StickyFooter />
        </>
    )
}

export default IndexPage