/*========================================
        Import Dependencies
========================================*/
import React, { FC } from 'react'

interface ServiceCardProps {
    header: string
    text: string
}

export const ServiceCard: FC<ServiceCardProps> = (props: ServiceCardProps) => {
    const { header, text } = props
    return (
        <div className="service-card">
            <h3 className="service-card-header">{header}</h3>
            <p className="service-card-text" >{text}</p>
        </div>
    )
}