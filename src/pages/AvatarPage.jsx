import React from 'react';
import { Avatar } from '@mnfst-kit/shared-components';

const AvatarPage = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Avatar Component</h1>
            <div className="flex space-x-4">
                <Avatar size="sm" />
                <Avatar size="md" />
                <Avatar size="lg" />
            </div>
            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-2">Custom Avatar</h2>
                <Avatar size="lg" />
            </div>
        </div>
    );
};

export default AvatarPage;