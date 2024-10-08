import React from 'react';
import { LoadingSpinner } from '@mnfst-kit/shared-components';

const LoadingSpinnerPage = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Loading Spinner Component</h1>
            <div className="flex space-x-4">
                <LoadingSpinner size="sm" />
                <LoadingSpinner size="md" />
                <LoadingSpinner size="lg" />
            </div>
        </div>
    );
};

export default LoadingSpinnerPage;