import React from 'react';
import { Menu } from '@mnfst-kit/shared-components';

const MenuPage = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Menu Component</h1>
            <div className="w-64">
                <Menu />
            </div>
        </div>
    );
};

export default MenuPage;