import React, { FC } from 'react'
interface HeroImageProps {

}

export const HeroImage: FC<HeroImageProps> = (props: HeroImageProps) => {
    const { } = props

    return (
        <div id="hero-image-div">
            <h1>Andrea's Flower Shop</h1>
            <h2>Florist in Queens<br/>7820 101st Avenue, Queens, NY</h2>
            <button className="btn sendEmail-btn">Get Quote</button>
        </div>
    )
}