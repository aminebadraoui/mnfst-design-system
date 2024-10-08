import React from 'react';
import { Navbar } from '@mnfst-kit/shared-components';

const NavbarPage = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Navbar Component</h1>
            <div className="mb-8">
                <Navbar className="border-2 border-gray-200" />
            </div>
            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-2">Custom Navbar</h2>
                <Navbar className="bg-gray-100" />
            </div>
        </div>
    );
};

export default NavbarPage;