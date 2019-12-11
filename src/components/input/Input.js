import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './Input.css';

export const Input = ({
    type = 'text',
    placeholder,
    theme,
    onChange,
    onFocus,
    onBlur,
    name,
    value,
}) => (
    <input
        type={ type }
        className={ !!theme ? `Input ${theme}` : 'Input' }
        placeholder={ placeholder }
        onChange={ onChange }
        onFocus={ onFocus }
        onBlur={ onBlur }
        value={ value }
        name={ name }
        id={ name }
    />
)

Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    theme: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    name: PropTypes.string,
    value: PropTypes.string,
};