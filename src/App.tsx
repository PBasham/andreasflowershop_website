import { useState } from "react"
// pages / components --------------------------------------------------
import NavBar from "./components/navbar"
import Home from "./pages/Home"
import Footer from "./components/footer"
// styling --------------------------------------------------
// pages
import "./assets/styling/App.css"
import "./assets/styling/HomePage.css"
import "./assets/styling/LightBox.css"
// components
import "./assets/styling/Buttons.css"
// misc
import "./assets/colors.css"
import { GetQuote } from "./components/lightbox/GetQuote"
import { GetQuoteForm } from "./interfaces"

function App() {

    const [lightBoxOpen, setLightBoxOpen] = useState<boolean>(false)

    const [lightBoxGetQuoteOpen, setLightBoxGetQuoteOpen] = useState<boolean>(false)

    function handleLightBoxOpen(openLightBox: boolean) {
        if (openLightBox) setLightBoxOpen(true)
        else setLightBoxOpen(false)
    }
    function handleOpenGetQuoteLightBox() {
        handleLightBoxOpen(true)
        setLightBoxGetQuoteOpen(true)
    }
    function handleSubmitGetQuoteEmail(contactInfo: GetQuoteForm | null) {
        const contactEmail = contactInfo?.email
        const contactName = contactInfo?.email
        const contactMessage = contactInfo?.email

    }
    function handleCloseGetQuoteLightBox() {
        handleLightBoxOpen(false)
        setLightBoxGetQuoteOpen(false) // Clear out form info.
    }
    return (
        <div className={`App ${lightBoxOpen ? "overflow-hidden" : ""}`}>
            <NavBar handleLightBoxOpen={handleLightBoxOpen} handleOpenGetQuoteLightBox={handleOpenGetQuoteLightBox} />
            {lightBoxGetQuoteOpen ?
                <GetQuote closeLightBox={handleCloseGetQuoteLightBox} handleSubmitEmail={handleSubmitGetQuoteEmail} />
                :
                null} {/* LightBox that will pull up for for QetQuote */}
            <Home handleOpenGetQuoteLightBox={handleOpenGetQuoteLightBox} />
            <Footer />
        </div>
    )
}

export default App
