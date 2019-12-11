import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './Button.css';

export const Button = ({
    children,
    type = 'button',
    theme,
}) => {
    return (
        <button
            className={ !!theme ? `Button ${theme}` : 'Button' }
            type={ type }>
            { children }
        </button>
    );
}

Button.propTypes = {
    type: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    theme: PropTypes.string,
};