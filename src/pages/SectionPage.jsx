import React from 'react';
import { Section } from '@mnfst-kit/shared-components';

const SectionPage = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Section Component</h1>
            <Section title="Demo Section" className="bg-primary-50">
                <p>This is some sample content for the Section component.</p>
                <p>You can add any content here.</p>
            </Section>
            <Section title="Custom Section" className="mt-8 bg-gray-100">
                <p>This is a custom section with different content.</p>
            </Section>
        </div>
    );
};

export default SectionPage;