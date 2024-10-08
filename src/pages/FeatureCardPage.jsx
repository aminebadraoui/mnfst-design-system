import React from 'react';
import { FeatureCard } from '@mnfst-kit/shared-components';

const FeatureCardPage = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Feature Card Component</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <FeatureCard
                    title="Easy to Use"
                    description="Our components are designed for simplicity and ease of use."
                    icon="🚀"
                />
                <FeatureCard
                    title="Customizable"
                    description="Tailor components to fit your specific needs and brand."
                    icon="🎨"
                />
                <FeatureCard
                    title="Responsive"
                    description="All components are fully responsive and mobile-friendly."
                    icon="📱"
                />
            </div>
        </div>
    );
};

export default FeatureCardPage;