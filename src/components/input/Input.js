import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './Input.css';

export const Input = ({
    type = 'text',
    placeholder,
    theme,
    onChange,
    name,
    value,
}) => (
    <input
        type={ type }
        className={ !!theme ? `Input ${theme}` : 'Input' }
        placeholder={ placeholder }
        onChange={ onChange }
        value={ value }
        name={ name }
        id={ name }
    />
)

Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    theme: PropTypes.string,
    onChange: PropTypes.any,
    name: PropTypes.string,
    value: PropTypes.string,
};