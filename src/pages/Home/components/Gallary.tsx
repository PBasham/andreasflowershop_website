import React, { FC, useState, ChangeEvent, ChangeEventHandler } from 'react'
// carousel --------------------------------------------------
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// components --------------------------------------------------
import { ButtonOne } from "../../../components/ui/Buttons"
import { allGalleryImages } from "../../../assets/imgs";

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

    const handleCategoryChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
        let selection = e.target.value
        setSelectedCategory(selection)
    }

    return (
        <div id="gallery-section">
            <div id="filter-input-div">
                <h1>Flowers for any occasion</h1>
                <select id="categorySelector" onChange={handleCategoryChange} name="category" value={selectedCategory} >
                    {categories.map((category) => (
                        <option
                            key={category}
                            value={`${category}`}

                        >{category}</option>
                    ))}
                </select>
            </div>
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
                <Carousel
                    infiniteLoop
                    autoPlay
                    interval={4000}
                    centerMode
                >
                    {allGalleryImages.map((image) => (
                        <div className="gallery-card">
                            <img src={`./src/assets/imgs/${image}`} alt="" />
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}