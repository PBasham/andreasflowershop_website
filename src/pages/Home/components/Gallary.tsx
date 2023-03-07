import React, { FC, useState } from 'react'
import { ButtonOne } from "../../../components/ui/Buttons"

interface GallaryProps {

}

export const Gallary: FC<GallaryProps> = (props: GallaryProps) => {
    const { } = props

    const categories = [
        "All",
        "Birthday",
        "Wedding",
        "Anniversary",
        "Valentines Day",
        "Mother's Day",
        "Sympath",
        "Funeral",
    ]

    const [selectedCategory, setSelectedCategory] = useState("All")

    /** // TODO  
     * [] button for each category
     * [] on button click, sort and display only those
     * [] Unfilter button   
    */

    return (
        <div id="gallery-section">
            <div id="filter-btns-div">
                {categories.map((category) => (
                    <ButtonOne
                        key={category}
                        text={category}
                        classes={"filter-btn"}
                        onClick={() => setSelectedCategory(category)}
                    />
                ))}
            </div>
            <div id="gallery-content">

            </div>
        </div>
    )
}