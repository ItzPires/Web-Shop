import React from 'react';
import './Modal.css';

/**
 * Modal component
 *
 * @param {boolean} isOpen - Whether the modal is open (true) or closed
 * (false).
 * @param {function} onClose - A callback to call when the user closes the
 * modal.
 * @param {*} children - The content of the modal, which will be rendered
 * inside a div. If the user clicks on
 * this content, the modal will not close.
 */
const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    const handleOverlayClick = () => {
        onClose();
    };

    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-content" onClick={stopPropagation}>
                {children}
            </div>
        </div>
    );
};

export default Modal;
