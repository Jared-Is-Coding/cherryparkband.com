import * as React from "react"
import { Card, Col, Image, Row } from "react-bootstrap"

type ShowCardProps = {
    show: showData
}

export const ShowCard = ({show}: ShowCardProps) => (
    <Row>
        {show.imageSrc && 
            <Col xs={{span: 3}} md={{span: 3}} className="flex-center">
                <Image src={show.imageSrc} className={show.imageSrc.endsWith(".png") ? "flex-center show-card-image png" : "flex-center show-card-image"} title={show.imageTitle} alt={show.imageAlt} />
            </Col>
        }

        <Col xs={{span: 9}} md={{span: 9}} className="show-card-data">
            {show.showDate && 
                <Card.Subtitle>
                    {show.showDate}

                    {/* Age requirement */}
                    {show.ageRequirement &&
                        <span className="twenty-one float-end">21+</span>
                    }
                </Card.Subtitle>
            }
            <hr />
            {show.url && show.showTitle &&
                <Card.Text as="h4">
                    <a href={show.url} target={show.target ?? "_self"}>{show.showTitle}</a>
                </Card.Text>
            }
            {!show.url && show.showTitle &&
                <>
                    <Card.Text as="h4">
                        {show.showTitle}
                    </Card.Text>
                    <Card.Text className="other-performers">
                        More information coming soon!
                    </Card.Text>
                </>
            }
            {show.otherPerformers && 
                <Card.Text className="other-performers">
                    ft. {show.otherPerformers}
                </Card.Text>
            }
        </Col>
    </Row>
)