import * as React from "react"
import { Card, Col } from "react-bootstrap"

export default (item: merchStyles, index: number) => (
    <Col
        xs={{span: 6, offset: 0}}
        lg={{span: 3, offset: 0}}
        className="flex-center flex-top"
        key={`merch-style-card-item-${index}`}>

        <Card>
            {/* Image */}
            {item.imageSrc &&
                <Card.Img src={item.imageSrc} className="flex-center merch-card-image" title={item.imageTitle ? item.imageTitle : "Cherry Park Merch Style Option: " + item.title} alt={item.imageAlt ? item.imageAlt : "Cherry Park band's clothing merchandise style option: " + item.title} /> 
            }
            {!item.imageSrc &&
                <p>Pictures coming soon!</p>
            }

            {/* Text */}
            <Card.Body>
                <Card.Title as="h3">
                    {item.title}
                </Card.Title>

                {item.additionalInfo &&
                    <Card.Subtitle>
                        {item.additionalInfo}
                    </Card.Subtitle>
                }
            </Card.Body>
        </Card>

    </Col>
)