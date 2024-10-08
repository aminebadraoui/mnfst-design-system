import React, { useState } from 'react';
import { ImageUpload } from '@mnfst-kit/shared-components';

const ImageUploadPage = () => {
    const [uploadedImage, setUploadedImage] = useState(null);

    const handleUpload = (imageUrl) => {
        setUploadedImage(imageUrl);
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Image Upload Component</h1>
            <ImageUpload onUpload={handleUpload} />
            {uploadedImage && (
                <div className="mt-4">
                    <h2 className="text-xl font-semibold mb-2">Uploaded Image:</h2>
                    <img src={uploadedImage} alt="Uploaded" className="max-w-full h-auto" />
                </div>
            )}
        </div>
    );
};

export default ImageUploadPage;