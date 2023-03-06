// depencencies --------------------------------------------------
import React, { FC } from 'react'
import { Divider } from "../../components/divider"
// components --------------------------------------------------
import { About, Gallary, HeroImage, Services } from "./components"
import { truck } from 'react-icons-kit/icomoon/truck'
import { flower } from 'react-icons-kit/entypo/flower'

interface HomeProps {

}

const Home: FC<HomeProps> = (props: HomeProps) => {
    const { } = props

    return (
        <div id="home-page-div">
            <HeroImage />
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
        </div>
    )
}

export default Home