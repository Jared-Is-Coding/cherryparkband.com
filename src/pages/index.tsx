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
        text: "Album Name",
        image: "/images/albums/album_name/icon.png",
        imageTitle: "Album Name album art",
        imageAlt: "Logo icon for the Album Name album by Cherry Park",
        url: "#",
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

                <div>
                    <p>Coming August 2023</p>
                </div>

                {/* <div className="flex-row">
                    {albumData.map((album) => (
                        <div className="row-item card flex-row">
                            {(album.image) &&
                                <img className="card-image flex-center" src={album.image} title={album.imageTitle} alt={album.imageAlt}></img>
                            }
                            
                            <span className="card-content flex-center">
                                <Link to={album.url} target={album.target}>
                                    {album.text}
                                </Link>
                            </span>
                        </div>
                    ))}
                </div> */}
            </main>
            
            {/* <StickyFooter /> */}
        </>
    )
}

export default IndexPage