import React, { useState } from 'react';
import { Input } from '@mnfst-kit/shared-components';

const InputPage = () => {
    const [value, setValue] = useState('');
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setValue(e.target.value);
        if (e.target.value.length < 3) {
            setError({ message: 'Input must be at least 3 characters long' });
        } else {
            setError(null);
        }
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Input Component</h1>
            <div className="space-y-4">
                <Input
                    placeholder="Enter text"
                    type="text"
                    onChange={handleChange}
                    errors={error}
                    value={value}
                />
                <p>Current value: {value}</p>
            </div>
            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-2">Custom Input</h2>
                <Input placeholder="Custom input" type="text" onChange={(e) => console.log(e.target.value)} />
            </div>
        </div>
    );
};

export default InputPage;