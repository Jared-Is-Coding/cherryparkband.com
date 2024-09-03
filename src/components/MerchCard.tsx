import * as React from "react"
import { Card, Col } from "react-bootstrap"

export default (item: merchData, index: number) => (
    <Col
        xs={{span: 10, offset: 1}}
        md={{span: 6, offset: 0}}
        lg={{span: 3, offset: 0}}
        className="flex-center flex-top"
        key={`merch-card-item-${index}`}>

        <Card>
            {/* Image */}
            {item.imageSrc && !item.dateAvailable &&
                <a target="_blank" href={item.url}>
                    <Card.Img src={item.imageSrc} className="flex-center merch-card-image" title={item.imageTitle ? item.imageTitle : "Cherry Park Merch"} alt={item.imageAlt ? item.imageAlt : "Picture of Cherry Park band's clothing merchandise"} />
                </a>
            }
            {item.imageSrc && item.dateAvailable &&
                <Card.Img src={item.imageSrc} className="flex-center merch-card-image" title={item.imageTitle ? item.imageTitle : "Cherry Park Merch"} alt={item.imageAlt ? item.imageAlt : "Picture of Cherry Park band's clothing merchandise"} />
            }
            {!item.imageSrc &&
                <p>Pictures coming soon!</p>
            }

            {/* Text */}
            <Card.Body>
                <a target="_blank" href={item.url}>
                    <Card.Title as="h3">
                        {item.title}
                    </Card.Title>
                </a>
                    
                <Card.Text>
                    {item.price}
                </Card.Text>
                    
                {item.dateAvailable && 
                    <Card.Text>
                        Available {item.dateAvailable}!
                    </Card.Text>
                }
            </Card.Body>
        </Card>

    </Col>
)