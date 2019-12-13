import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

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
    ariaLabel,
    ariaExpanded,
    ariaOwns,
    ariaAutocomplete,
    role,
    ariaDescribedBy,
    autoComplete,
    ariaControls,
    onKeyUpHandler
}) => (
    <input
        type={ type }
        className={ classnames( 'Input', {[theme]: !!theme} ) }
        placeholder={ placeholder }
        onChange={ onChange }
        onFocus={ onFocus }
        onBlur={ onBlur }
        value={ value }
        name={ name }
        id={ name }
        aria-label={ ariaLabel }
        aria-expanded={ariaExpanded}
        aria-owns={ariaOwns}
        aria-autocomplete={ariaAutocomplete}
        role={role}
        aria-describedby={ariaDescribedBy}
        autoComplete={autoComplete}
        aria-controls={ariaControls}
        onKeyUp={onKeyUpHandler}
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
    ariaLabel: PropTypes.string,
    ariaExpanded: PropTypes.bool,
    ariaOwns: PropTypes.string,
    ariaAutocomplete: PropTypes.string,
    role: PropTypes.string,
    ariaDescribedBy: PropTypes.string,
    autoComplete: PropTypes.string,
    ariaControls: PropTypes.string,
    onKeyUpHandler: PropTypes.func,
};