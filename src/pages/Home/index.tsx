import React, { FC } from 'react'
import { HeroImage, About, Services, Gallary } from "./components"

interface HomeProps {

}

const Home: FC<HomeProps> = (props: HomeProps) => {
    const { } = props

    // Hero Image
    // About Section
    // Services
    // Gallary
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