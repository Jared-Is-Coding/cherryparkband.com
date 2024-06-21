import * as React from "react"
import { Image } from "react-bootstrap"

type MerchStylesCardProps = {
    item: merchStyles
}

export default ({item}: MerchStylesCardProps) => (
    <div className="parent">
        <div className="child">
            {item.imageSrc &&
                <Image src={item.imageSrc} className="flex-center merch-card-image" title={item.imageTitle ? item.imageTitle : "Cherry Park Merch Style Option: " + item.title} alt={item.imageAlt ? item.imageAlt : "Cherry Park band's clothing merchandise style option: " + item.title} />
            }
            {!item.imageSrc &&
                <p>Pictures coming soon!</p>
            }
            <p>{item.title}</p>
        </div>
    </div>
)