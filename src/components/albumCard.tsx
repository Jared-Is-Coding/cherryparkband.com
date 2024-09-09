import * as React from "react"
import { Card, Col, Image, Row } from "react-bootstrap"

type AlbumCardProps = {
    album: albumData
}

export default ({album}: AlbumCardProps) => (
    <Row>
        {album.imageSrc && 
            <Col xs={{span: 3}} md={{span: 3}} className="flex-center">
                <Image src={album.imageSrc} className={album.imageSrc.endsWith(".png") ? "flex-center album-card-image png" : "flex-center album-card-image"} title={album.imageTitle} alt={album.imageAlt} />
            </Col>
        }

        <Col xs={{span: 9}} md={{span: 9}} className="show-card-data">
            {album.releaseDate && 
                <Card.Subtitle>
                    {album.releaseDate}
                </Card.Subtitle>
            }

            <hr />

            {album.url && album.albumTitle &&
                <Card.Text as="h4">
                    <a href={album.url} target="_self">{album.albumTitle}</a>
                </Card.Text>
            }

            {!album.url && album.albumTitle &&
                <>
                    <Card.Text as="h4">
                        {album.albumTitle}
                    </Card.Text>
                    
                    <Card.Text className="other-performers">
                        More information coming soon!
                    </Card.Text>
                </>
            }
        </Col>
    </Row>
)