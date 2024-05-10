import * as React from "react"
import { Image } from "react-bootstrap"

type MerchCardProps = {
    item: merchData
}

const orderButtonWords = [
    "Get it!",
    "Heck yeah!",
    "Let's do it!",
    "One of those!",
    "Let's go!",
    "Bring it on!",
    "Yesssss!"
]

export default ({item}: MerchCardProps) => (
    <div className="parent">
        <div className="child">
            {item.imageSrc &&
                <Image src={item.imageSrc} className="flex-center merch-card-image" title={item.imageTitle ? item.imageTitle : "Cherry Park Merch"} alt={item.imageAlt ? item.imageAlt : "Picture of Cherry Park band's clothing merchandise"} />
            }
            {!item.imageSrc &&
                <p>Pictures coming soon!</p>
            }
            <p>{item.title}</p>
            <p>{item.price}</p>
            {item.dateAvailable && 
                <p>Available {item.dateAvailable}!</p>
            }
            {!item.dateAvailable && 
                <a target="_blank" href={item.url}>
                    {orderButtonWords.at(Math.floor(Math.random() * orderButtonWords.length))}
                </a>
            }
        </div>
    </div>
)