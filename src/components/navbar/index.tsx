/*========================================
        Import Dependencies
========================================*/
import React, { FC, useState } from 'react'
// styling --------------------------------------------------
import "../../assets/styling/NavBar.css"

interface NavBarProps {
    handleLightBoxOpen: (openLightBox: boolean) => void
    handleOpenGetQuoteLightBox: () => void
}

const NavBar: FC<NavBarProps> = (props: NavBarProps) => {
    const { handleLightBoxOpen, handleOpenGetQuoteLightBox } = props

    const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)

    function onMenuToggle() {
        setMobileNavOpen(!mobileNavOpen)
        handleLightBoxOpen(!mobileNavOpen)
    }
    function openMobileMenu() {
        setMobileNavOpen(true)
        handleLightBoxOpen(false)
    }
    function closeMobileMenu() {
        setMobileNavOpen(false)
        handleLightBoxOpen(false)
    }
    function handleNavClick() {
        handleLightBoxOpen(false)
        if (mobileNavOpen) setMobileNavOpen(false)
    }
    function handleGetQuoteClick() {
        closeMobileMenu()
        handleOpenGetQuoteLightBox()
    }



    return (
        <div id="navbar">
                <a id="nav-logo" href="#" >Andrea's Flower Shop</a>
                <div id="mobile-toggle" className={`${mobileNavOpen ? "menu-open" : ""}`} onClick={onMenuToggle}>
                    <div className="mobile-toggle-bar"></div>
                </div>
                <ul id="nav-btns" >
                    <a onClick={handleNavClick} className="nav-btn" href="#about-div" >About</a>
                    <a onClick={handleNavClick} className="nav-btn" href="#services-section" >Service</a>
                    <a onClick={handleNavClick} className="nav-btn" href="#gallery-section" >Gallery</a>
                    <a onClick={handleGetQuoteClick} className="nav-btn" >Contact Us</a>
                </ul>
        </div>
    )
}

export default NavBar