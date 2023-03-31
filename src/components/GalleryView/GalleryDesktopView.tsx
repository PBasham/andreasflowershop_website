/*========================================
        Import Dependencies
========================================*/
import React, { FC } from 'react'
import { ButtonOne } from "../ui/Buttons"
interface GalleryDesktopViewProps {
    selectedCategory: string
    categories: string[]
    handleCategoryChange: React.ChangeEventHandler<HTMLSelectElement>
    updateSelectedCategory: (category: string) => void
}

export const GalleryDesktopView: FC<GalleryDesktopViewProps> = (props: GalleryDesktopViewProps) => {
    const { selectedCategory, categories, handleCategoryChange, updateSelectedCategory } = props
    return (
        <div>
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
                        onClick={() => updateSelectedCategory(category)}
                    />
                ))}
            </div>
        </div>
    )
}