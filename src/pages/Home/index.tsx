// depencencies --------------------------------------------------
import React, { FC } from 'react'
// components --------------------------------------------------
import { About, Gallary, HeroImage, Services } from "./components"

interface HomeProps {

}

const Home: FC<HomeProps> = (props: HomeProps) => {
    const { } = props

    return (
        <>
            <h1>HomePage</h1>
            <HeroImage />
            <About />
            <Services />
            <Gallary />
        </>
    )
}

export default Home