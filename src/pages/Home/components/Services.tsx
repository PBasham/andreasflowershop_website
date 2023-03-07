import React, { FC } from 'react'

interface ServicesProps {

}

export const Services: FC<ServicesProps> = (props: ServicesProps) => {
    const { } = props

    return (
        <div id="services-section">

            <div className="service-card">
                <h3 className="service-card-header">Chair/Table Rental</h3>
                <p className="service-card-text" >We offer xx chairs and xx tables. We something something, and something the something.</p>
            </div>

        </div>
    )
}