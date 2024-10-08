import React, { useState } from 'react';
import { MultiStepFormLayout } from '@mnfst-kit/shared-components';

const MultistepFormPage = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const steps = ['Personal Info', 'Contact Details', 'Review'];

    const handleNext = () => {
        setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    };

    const handlePrev = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 0));
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Multi-Step Form Layout</h1>
            <MultiStepFormLayout
                steps={steps}
                currentStep={currentStep}
                onNext={handleNext}
                onPrev={handlePrev}
            >
                {currentStep === 0 && <div>Step 1: Personal Info Form</div>}
                {currentStep === 1 && <div>Step 2: Contact Details Form</div>}
                {currentStep === 2 && <div>Step 3: Review Form</div>}
            </MultiStepFormLayout>
        </div>
    );
};

export default MultistepFormPage;