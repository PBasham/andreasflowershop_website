import React, { FC, useState, ChangeEvent, ChangeEventHandler, useEffect } from 'react'
// interfaces --------------------------------------------------
import { GalleryImage } from "../../../interfaces";
// components --------------------------------------------------
import { ButtonOne } from "../../../components/ui/Buttons"
import { allGalleryImages } from "../../../assets/imgs";
import { GalleryMobileView } from "../../../components/GalleryView/GalleryMobileView";
import { GalleryDesktopView } from "../../../components/GalleryView/GalleryDesktopView";

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
            <GalleryDesktopView selectedCategory={selectedCategory} categories={categories} handleCategoryChange={handleCategoryChange} updateSelectedCategory={(category) => setSelectedCategory(category)} />
            <GalleryMobileView galleryImages={selectedGalleryImages}/>
            
        </div>
    )
}