/*========================================
        Import Dependencies
========================================*/
import React, { FC, useState } from 'react'
// styling --------------------------------------------------
import "../../assets/styling/NavBar.css"

interface NavBarProps {

}

const NavBar: FC<NavBarProps> = (props: NavBarProps) => {
    const { } = props

    const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(true)

    console.log(mobileNavOpen);

    function onMenuToggle() {
        console.log("I've been pressed")
        setMobileNavOpen(!mobileNavOpen)
    }

    return (
        <div id="navbar">
            {/* <div className="navbar-content"> */}
                <a id="nav-logo" href="#">Andreas Flower Shop</a>
                <div id="mobile-toggle" className={`${mobileNavOpen ? "menu-open" : ""}`} onClick={onMenuToggle}></div>
                <ul id="nav-btns" >
                    <a className="nav-btn" href="" >Gallary</a>
                    <a className="nav-btn" href="" >Contact</a>
                    <a className="nav-btn" href="" >Get Quote</a>
                </ul>
            {/* </div> */}
        </div>
    )
}

export default NavBar