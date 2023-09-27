import React from "react"
import { Image } from "react-bootstrap"

type carouselImageProps = {
    src: string
    title?: string
    alt?: string
    fluid?: boolean
    rounded?: boolean
    roundedCircle?: boolean
    thumbnail?: boolean
}

export const CarouselImage = ({ src, title, alt, fluid, rounded, roundedCircle, thumbnail }: carouselImageProps) => (
    <Image
        src={src}
        title={title}
        alt={alt}
        className="carousel-image flex-center"
        fluid={fluid ?? false}
        rounded={rounded ?? false}
        roundedCircle={roundedCircle ?? false}
        thumbnail={thumbnail ?? false} />
)