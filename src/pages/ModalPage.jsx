import React, { useState } from 'react';
import { Modal, Button } from '@mnfst-kit/shared-components';

const ModalPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Modal Component</h1>
            <Button title="Open Modal" onClick={openModal} />

            {isModalOpen && (
                <Modal title="Demo Modal" onClose={closeModal}>
                    <p>This is the content of the modal.</p>
                    <p>You can put any components or text here.</p>
                    <div className="mt-4">
                        <Button title="Close Modal" onClick={closeModal} />
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default ModalPage;