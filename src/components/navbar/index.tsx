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
            <div className="navbar-content">
                <a className="nav-logo" href="#">Andreas Flower Shop</a>
                <div className="nav-btns">
                        <a className="nav-btn"  href="#" >Gallary</a>
                        <a className="nav-btn" href="" >Contact</a>
                        <a className="nav-btn" href="" >Get Quote</a>
                </div>
            </div>
        </div>
    )
}

export default NavBar