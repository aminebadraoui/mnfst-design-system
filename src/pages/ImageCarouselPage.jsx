import React from 'react';
import { ImageCarousel } from '@mnfst-kit/shared-components';

const ImageCarouselPage = () => {
    const images = [
        'https://via.placeholder.com/800x400?text=Image+1',
        'https://via.placeholder.com/800x400?text=Image+2',
        'https://via.placeholder.com/800x400?text=Image+3',
    ];

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Image Carousel Component</h1>
            <ImageCarousel images={images} />
        </div>
    );
};

export default ImageCarouselPage;