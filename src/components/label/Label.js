import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './Label.css';

export const Label = ({
    theme,
    labelFor,
    children,
}) => (
    <label
        htmlFor={labelFor}
        className={ !!theme && `${theme}` }>
        { children }
    </label>
)

Label.propTypes = {
    theme: PropTypes.string,
    labelFor: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
};