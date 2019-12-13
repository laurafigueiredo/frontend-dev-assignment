import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// Components
import { Highlighter } from '../highlighter';

// Styles
import './AutocompleteList.css';

export const AutocompleteList =  ({
    isExpanded,
    items,
    activeSuggestion,
    onSuggestionClicked,
    description,
    searchValue,
}) => (
    <Fragment>
        <ul
            id='autocomplete-box'
            role='listbox'
            className={classnames('AutocompleteList', {'is-active': isExpanded})}>
            { !!items.length && items.map((item, idx) => (
                <li
                    className='AutocompleteList-item'
                    tabIndex='-1'
                    role='option'
                    aria-selected={ activeSuggestion === idx }
                    id={ item.searchterm }
                    key={ item.searchterm }
                    onClick={ () => onSuggestionClicked(item.searchterm) }>
                    <Highlighter
                        text={ item.searchterm }
                        searchValue={ searchValue }
                    />
                    <span className='AutocompleteList-results'> ({ item.nrResults })</span>
                </li>
            ))}
        </ul>
        <span
            id='input-description'
            className='AutocompleteList-label'>{ description }</span>
    </Fragment>
)

AutocompleteList.propTypes = {
    description: PropTypes.string,
    searchValue: PropTypes.string,
    isExpanded: PropTypes.bool,
    activeSuggestion: PropTypes.number,
    items: PropTypes.array,
    onSuggestionClicked: PropTypes.func,
};