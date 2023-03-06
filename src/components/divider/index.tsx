// dependencies --------------------------------------------------
import React, { FC } from 'react'
// styling --------------------------------------------------
import "../../assets/styling/Divider.css"
// icons --------------------------------------------------
import { Icon } from "react-icons-kit"

interface DividerProps {
    barHeader?: string
    barIcon?: any
    barStyling?: object
}

export const Divider: FC<DividerProps> = (props: DividerProps) => {
    const { barHeader, barIcon, barStyling } = props


    return (
        <div className="divider-bar">
            <div className="div-bar-left"></div>
            <h2 className={`${ barHeader ? "div-bar-text" : "div-bar-middle"}`}>{barIcon ? <Icon icon={barIcon} className="bar-Icon" style={barStyling} /> : null}{barHeader}</h2>
            <div className="div-bar-right"></div>
        </div>
    )
}