/*========================================
        Import Dependencies
========================================*/
import React, { FC } from 'react'
// styling --------------------------------------------------
import "../../assets/styling/NavBar.css"

interface NavBarProps {

}

const NavBar: FC<NavBarProps> = (props: NavBarProps) => {
    const { } = props

    return (
        <div id="navbar">
            <div className="nav-logo">AndreasFlowerShop</div>
            <div className="nav-btns-div">
                <ul className="nav-btns">
                    <li className="nav-btn">Gallary</li>
                    <li className="nav-btn">Contact</li>
                    <li className="nav-btn">Get Quote</li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar