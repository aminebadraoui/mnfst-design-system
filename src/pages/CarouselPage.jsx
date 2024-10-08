import React from 'react';
import { Carousel } from '@mnfst-kit/shared-components';

const CarouselPage = () => {
    const items = [
        { id: 1, content: 'Slide 1', color: 'bg-red-200' },
        { id: 2, content: 'Slide 2', color: 'bg-blue-200' },
        { id: 3, content: 'Slide 3', color: 'bg-green-200' },
    ];

    const renderItem = (item) => (
        <div className={`${item.color} h-64 flex items-center justify-center`}>
            {item.content}
        </div>
    );

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Carousel Component</h1>
            <Carousel items={items} renderItem={renderItem} />

            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-2">Custom Carousel</h2>
                <Carousel
                    items={[
                        { id: 1, title: 'Custom 1', description: 'Description 1' },
                        { id: 2, title: 'Custom 2', description: 'Description 2' },
                        { id: 3, title: 'Custom 3', description: 'Description 3' },
                    ]}
                    renderItem={(item) => (
                        <div className="bg-gray-100 p-4 h-64 flex flex-col items-center justify-center">
                            <h3 className="text-xl font-bold">{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    )}
                />
            </div>
        </div>
    );
};

export default CarouselPage;