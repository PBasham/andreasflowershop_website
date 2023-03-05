// depencencies --------------------------------------------------
import React, { FC } from 'react'
// components --------------------------------------------------
import { About, Gallary, HeroImage, Services } from "./components"

interface HomeProps {

}

const Home: FC<HomeProps> = (props: HomeProps) => {
    const { } = props

    return (
        <div id="home-page-div">
            <HeroImage />
            <About />
            <Services />
            <Gallary />
        </div>
    )
}

export default Home