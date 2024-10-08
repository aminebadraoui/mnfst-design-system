import React from 'react';
import { LeftImageSection } from '@mnfst-kit/shared-components';

const LeftImageSectionPage = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Left Image Section Component</h1>
            <LeftImageSection
                imageUrl="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                title="Left Image Section"
                description="This is a sample description for the left image section. It can contain multiple paragraphs or components."
                buttonTitle="Learn More"
                mainAction={() => alert('Button clicked')}
                className="border-2 border-gray-200"
            />
            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-2">Custom Left Image Section</h2>
                <LeftImageSection
                    imageUrl="https://via.placeholder.com/500x300"
                    title="Custom Left Image Section"
                    description="This is a custom left image section with different content and styling."
                    buttonTitle="Explore"
                    mainAction={() => alert('Custom button clicked!')}
                    className="bg-gray-100"
                />
            </div>
        </div>
    );
};

export default LeftImageSectionPage;