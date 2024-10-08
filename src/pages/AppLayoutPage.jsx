import React from 'react';
import { AppLayout } from '@mnfst-kit/shared-components';

const AppLayoutPage = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">App Layout</h1>
            <AppLayout>
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">Main Content</h2>
                    <p>This is the main content area of the App Layout.</p>
                </div>
            </AppLayout>
        </div>
    );
};

export default AppLayoutPage;