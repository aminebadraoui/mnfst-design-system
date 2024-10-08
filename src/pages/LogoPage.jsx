import React from 'react';
import { Logo } from '@mnfst-kit/shared-components';

const LogoPage = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Logo Component</h1>
            <div className="p-4 bg-gray-100">
                <Logo />
            </div>
            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-2">Custom Logo</h2>
                <Logo className="text-3xl font-bold text-primary-500" />
            </div>
        </div>
    );
};

export default LogoPage;