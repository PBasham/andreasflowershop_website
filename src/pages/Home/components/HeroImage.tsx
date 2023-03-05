import React, { FC, useState } from 'react'
// components --------------------------------------------------
import { ButtonOne } from "../../../components/ui/Buttons"
//  misc --------------------------------------------------
import { bubble } from 'react-icons-kit/icomoon/bubble'

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
                <h1>Andrea's Flower Shop</h1>
                <h2>Florist in Queens<br />7820 101st Avenue, Queens, NY</h2>
                <ButtonOne
                    text="Get Quote"
                    classes="sendEmail-btn"
                    icon={bubble}
                    iconSize={16}
                    iconStyling={{ transform: "translatey(-2px)", }}
                    onClick={() => console.log("I've been clicked!")}
                />
            </div>
        </div>
    )
}