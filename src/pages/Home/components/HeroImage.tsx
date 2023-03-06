import React, { FC, useState } from 'react'
// components --------------------------------------------------
import { ButtonOne } from "../../../components/ui/Buttons"
//  misc --------------------------------------------------

interface HeroImageProps {

}

export const HeroImage: FC<HeroImageProps> = (props: HeroImageProps) => {
    const { } = props

    const [openEmailForm, setOpenEmailForm] = useState(false)

    function handleOpenEmailForm() {
        setOpenEmailForm(true)
    }
    function handleCloseEmailForm() {
        setOpenEmailForm(false)
    }

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
                    onClick={() => console.log("I've been clicked!")}
                />
            </div>
        </div>
    )
}