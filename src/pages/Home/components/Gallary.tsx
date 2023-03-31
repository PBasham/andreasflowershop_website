import React, { FC, useState, ChangeEvent, ChangeEventHandler, useEffect } from 'react'
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
        "Valentine's Day",
        "Mother's Day",
        "Sympathy",
        "Funeral",
    ]

    const [selectedCategory, setSelectedCategory] = useState<string>("All")

    interface GalleryImage {
        label: string;
        src: string;
        categories: string[];
    }

    const [selectedGalleryImages, setSelectedGalleryImages] = useState<GalleryImage[]>([])

    function getSelectedCategoryImages(selection: string) {
        let selections: GalleryImage[] = allGalleryImages.filter((curImg) => curImg.categories.includes(selectedCategory.toLowerCase()))
    
        setSelectedGalleryImages(selections)

    }
    
    useEffect(() => {
        getSelectedCategoryImages(selectedCategory)
    }, [selectedCategory])


    /** // TODO  
     * [] button for each category
     * [] on button click, sort and display only those
     * [] Unfilter button   
    */

    const handleCategoryChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
        let selection = e.target.value
        setSelectedCategory(selection)
        getSelectedCategoryImages(selection)
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
                    autoFocus
                    autoPlay
                    showThumbs={false}
                    showStatus={false}
                    interval={4000}
                    centerMode
                >
                    {selectedGalleryImages.map((image) => (
                    <div className="gallery-card">
                        <img src={`./src/assets/imgs/${image.src}`} alt="Flowers from our collection" />
                        {image.label ? <p>{image.label}</p> : null}
                    </div>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}