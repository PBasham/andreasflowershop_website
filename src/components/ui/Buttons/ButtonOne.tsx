import React, { FC, ReactNode } from 'react'
// icons --------------------------------------------------
import { Icon } from "react-icons-kit"
interface ButtonOneProps {
    text?: string
    icon?: string
    iconSize?: number
    iconClasses?: string
    iconStyling?: object
    classes?: string
    onClick: () => void
    children?: ReactNode
}

export const ButtonOne: FC<ButtonOneProps> = (props: ButtonOneProps) => {
    const { text, icon, iconSize, iconClasses, iconStyling, classes, onClick } = props

    return (
        <button
            className={`btn ${classes}`}
            onClick={onClick}
        >{icon ? <Icon className={`btn-Icon ${iconClasses}`} style={iconStyling} icon={icon} size={iconSize} /> : null}{text}</button>
    )
}