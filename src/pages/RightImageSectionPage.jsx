import React from 'react';
import { RightImageSection } from '@mnfst-kit/shared-components';

const RightImageSectionPage = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Right Image Section Component</h1>
            <RightImageSection
                imageUrl="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                title="Right Image Section"
                description="This is a sample description for the right image section. It can contain multiple paragraphs or components."
                buttonTitle="Get Started"
                mainAction={() => alert('Button clicked')}
                className="border-2 border-gray-200"
            />
            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-2">Custom Right Image Section</h2>
                <RightImageSection
                    imageUrl="https://via.placeholder.com/500x300"
                    title="Custom Right Image Section"
                    description="This is a custom right image section with different content and styling."
                    buttonTitle="Discover"
                    mainAction={() => alert('Custom button clicked!')}
                    className="bg-blue-100"
                />
            </div>
        </div>
    );
};

export default RightImageSectionPage;