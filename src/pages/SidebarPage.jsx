import React from 'react';
import { Sidebar } from '@mnfst-kit/shared-components';

const SidebarPage = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Sidebar Component</h1>
            <div className="h-64 w-64 mb-8">
                <Sidebar className="h-full">
                    <ul className="p-4">
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>
                </Sidebar>
            </div>
            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-2">Custom Sidebar</h2>
                <div className="h-64 w-64">
                    <Sidebar className="h-full bg-blue-500">
                        <ul className="p-4 text-white">
                            <li>Custom Item 1</li>
                            <li>Custom Item 2</li>
                            <li>Custom Item 3</li>
                        </ul>
                    </Sidebar>
                </div>
            </div>
        </div>
    );
};

export default SidebarPage;