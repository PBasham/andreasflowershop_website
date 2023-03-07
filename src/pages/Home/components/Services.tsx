import React, { FC } from 'react'
import { ServiceCard } from "../../../components/ServiceCard"

interface ServicesProps {

}

export const Services: FC<ServicesProps> = (props: ServicesProps) => {
    const { } = props

    return (
        <div id="services-section">

            <ServiceCard 
                header="Chair/Table Rental"
                text="We offer xx chairs and xx tables. We something something, and something the something."
            />
            <ServiceCard 
                header="Delivery"
                text="Order for same day or sometime in the future and we will make sure to deliver on time!"
            />

        </div>
    )
}