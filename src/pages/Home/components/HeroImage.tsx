import React, { FC, useState } from 'react'
// components --------------------------------------------------
import { ButtonOne } from "../../../components/ui/Buttons"
//  misc --------------------------------------------------

interface HeroImageProps {
    handleGetQuote: () => void
}

export const HeroImage: FC<HeroImageProps> = (props: HeroImageProps) => {
    const { handleGetQuote } = props

    return (
        <div id="hero-image-wrapper">
            <div id="hero-image-div">
                <h1>Delivering fresh flowers and happiness</h1>
                <p>Florist in Queens</p>
                <p>7820 101st Avenue, Queens,<br /> NY 11417</p>
                <ButtonOne
                    text="Get A Quote"
                    classes="sendEmail-btn"
                    iconSize={16}
                    iconStyling={{ transform: "translatey(-2px)", }}
                    onClick={handleGetQuote}
                />
            </div>
        </div>
    )
}