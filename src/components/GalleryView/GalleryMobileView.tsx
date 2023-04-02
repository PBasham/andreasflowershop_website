/*========================================
        Import Dependencies
========================================*/
import React, { FC } from 'react'
// interfaces --------------------------------------------------
import { GalleryImage } from "../../interfaces";
// Carousel --------------------------------------------------
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

interface GalleryMobileViewProps {
    galleryImages: GalleryImage[]
}

export const GalleryMobileView: FC<GalleryMobileViewProps> = (props: GalleryMobileViewProps) => {
   const { galleryImages } = props
   return (
    <div id="gallery-content">
    <Carousel
        infiniteLoop
        autoPlay
        showThumbs={false}
        showStatus={false}
        interval={4000}
        centerMode
    >
        {galleryImages.map((image, idx) => (
        <div key={idx + image.src} className="gallery-card">
            <img src={`./src/assets/imgs/${image.src}`} alt="Flowers from our collection" />
            {image.label ? <p>{image.label}</p> : null}
        </div>
        ))}
    </Carousel>
</div>
   )
}