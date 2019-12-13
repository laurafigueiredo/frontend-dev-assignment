import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './Highlighter.css';

export const Highlighter = ({ text, searchValue }) => {
    if( !searchValue ) return text;

    // Create regex based upon search value and split it.
    // Other option would be to use replace but thats mean setting dangeriouslyHMTL of React ;)
    const regex = new RegExp(`(${searchValue})`, 'gi');
    const highlightedParts = text.split(regex);
    const finalText = highlightedParts.map((text, index) => (
        regex.test(text) ? <span className='Highlighter' key={index}>{ text }</span> : text
    ));

    return (<span>{ finalText }</span>);
}

Highlighter.propTypes = {
    searchValue: PropTypes.string,
    text: PropTypes.string,
};
