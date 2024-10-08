import React from 'react';
import { Hero } from '@mnfst-kit/shared-components';

const HeroPage = () => {
    return (
        <div>


            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-2">Custom Hero</h2>
                <Hero
                    imageUrl="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
                    title="Discover the Future of Design"
                    subtitle="Create stunning interfaces with our cutting-edge components"
                    buttonTitle="Start Designing"
                    secondaryButtonTitle="View Demo"
                    mainAction={() => alert('Custom main action clicked!')}
                    secondaryAction={() => alert('Custom secondary action clicked!')}
                />
            </div>
        </div>
    );
};

export default HeroPage;