import React from 'react';
import { Button } from '@mnfst-kit/shared-components';

const ButtonPage = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Button Component</h1>
            <div className="space-y-4">
                <Button title="Default Button" onClick={() => alert('Default clicked!')} />
                <Button title="Outline Button" onClick={() => alert('Outline clicked!')} outline />
                <Button title="Disabled Button" onClick={() => alert('This should not alert')} disabled />
                <Button title="Custom Class" onClick={() => alert('Custom class clicked!')} className="bg-green-500 text-white" />
            </div>
            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-2">Custom Button</h2>
                <Button title="Custom Button" onClick={() => alert('Custom button clicked!')} className="bg-purple-500 text-white" />
            </div>
        </div>
    );
};

export default ButtonPage;