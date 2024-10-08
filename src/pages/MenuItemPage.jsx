import React from 'react';
import { MenuItem } from '@mnfst-kit/shared-components';

const MenuItemPage = () => {
    const handleClick = (itemName) => {
        alert(`Clicked on ${itemName}`);
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Menu Item Component</h1>
            <div className="space-y-4">
                <MenuItem name="Home" onClick={() => handleClick("Home")} />
                <MenuItem name="About" onClick={() => handleClick("About")} />
                <MenuItem name="Contact" onClick={() => handleClick("Contact")} />
            </div>
            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-2">Custom Menu Item</h2>
                <MenuItem name="Custom Item" onClick={() => alert('Custom item clicked!')} className="bg-yellow-100" />
            </div>
        </div>
    );
};

export default MenuItemPage;