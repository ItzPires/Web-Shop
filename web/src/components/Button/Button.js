import React from 'react';
import './Button.css';

/**
 * Button component.
 *
 * @param {*} children - The button text
 * @param {function} onClick - A callback to call when the button is clicked.
 * @param {string} type - The type of button. Defaults to 'button'.
 * @param {boolean} disabled - Whether the button is disabled. Defaults to false.
 * @param {string} className - Additional class names to apply to the button.
 */
const Button = ({ children, onClick, type = 'button', disabled = false, className = '' }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`app-button ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
