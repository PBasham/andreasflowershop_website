// depencencies --------------------------------------------------
import React, { FC, useState, useSyncExternalStore } from 'react'
import { Divider } from "../../components/divider"
// components --------------------------------------------------
import { About, Gallary, HeroImage, Services } from "./components"
import { truck } from 'react-icons-kit/icomoon/truck'
import { flower } from 'react-icons-kit/entypo/flower'
import { GetQuote } from "../../components/lightbox/GetQuote"
import { GetQuoteForm } from "../../interfaces"

interface HomeProps {
    // this will toggle the page to make overflow hidden/shown to handle scrolling.
    handleOpenGetQuoteLightBox: () => void
}

const Home: FC<HomeProps> = (props: HomeProps) => {
    const { handleOpenGetQuoteLightBox } = props

    return (
        <>
            <div id="home-page-div">
                <HeroImage handleGetQuote={handleOpenGetQuoteLightBox} />
                <About />
                <Divider
                    barHeader="Services"
                    barIcon={truck}
                    barStyling={{ transform: "translatey(-2px)", }}
                />
                <Services />
                <Divider
                    barHeader="Gallery"
                    barIcon={flower}
                    barStyling={{ transform: "translatey(-2px)", }}
                />
                <Gallary />
                <Divider barHeader="" barStyling={{ transform: "translatey(-2px)", }} />
            </div>
        </>
    )
}

export default Home