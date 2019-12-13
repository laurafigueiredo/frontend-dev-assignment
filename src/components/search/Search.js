import React, { Component } from 'react';
import classnames from 'classnames';

// Services
import { getSuggestions } from '../../services/get-suggestions';

// Components
import { Button } from '../button';
import { Input } from '../input';
import { AutocompleteList } from '../autocomplete-list';

// Styles
import './Search.css';

export class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchValue: '',
            isActive: false,
            showReset: false,
            items: [],
            isExpanded: false,
            selectedValue: '',
            activeSuggestion: null,
        }

        this.searchWrapperRef = React.createRef();
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside);
    }

    // Closes autocomplete list when the users clicks outside the list
    handleClickOutside = ( event ) => {
        const { current } = this.searchWrapperRef;
        const { isExpanded } = this.state;

        if( isExpanded && !current.contains( event.target ) ) {
            this.setState({
                isExpanded: false
            });
        }
    }

    // Autocomplete functions
    setActiveSuggestion = ( type ) => {
        const { activeSuggestion, items } = this.state;

        if( type === 'up' ) {

            if( activeSuggestion === 0 ) return;

            this.setState((prevState) => ({
                activeSuggestion: prevState.activeSuggestion - 1,
            }));

        } else {

            if( activeSuggestion === items.length - 1 ) {
                return;
            } else if (activeSuggestion === null) {
                this.setState({
                    activeSuggestion: 0,
                });
            } else {
                this.setState((prevState) => ({
                    activeSuggestion: (prevState.activeSuggestion || 0) + 1,
                }));
            }
        }
    }

    closeAutocompleteList = () => {
        const { items, activeSuggestion, isExpanded } = this.state;

        if( isExpanded ) {
            this.setState({
                isExpanded: false,
                searchValue: items[activeSuggestion].searchterm,
                activeSuggestion: null,
            });
        }
    }

    handleAutocompleteOnSuggestionClicked = ( suggestionValue ) => {
        this.setState({
            isExpanded: false,
            searchValue: suggestionValue,
            activeSuggestion: null,
        });
    }

    // Form submit function
    handleFormSubmit = ( event ) => {
        const { currentTarget } = event;
        const { isExpanded } = this.state;

        event.preventDefault();

        // Submit here when a value is selected
        if( !isExpanded ) {
            currentTarget.submit();
        }
    }

    // Input functions
    handleInputOnChange = ( event ) => {
        const { value } = event.target;
        const hasValue = !!value.trim().length;
        const hasMinCharacters = value.trim().length > 2;

        if (!hasValue || !hasMinCharacters) {
            this.setState({
                searchValue: value,
                showReset: hasValue,
                items: [],
                isExpanded: false,
            });
        } else {
            getSuggestions( value )
                .then(( response ) => {
                    this.setState({
                        items: response,
                        isExpanded: true,
                        searchValue: value,
                        showReset: hasValue,
                    });
                });
        }
    }

    handleInputOnFocus = () => {
        this.setState((prevState) => ({
            isActive: true,
            showReset: (!!prevState.searchValue && !!prevState.searchValue.length),
        }));
    }

    handleInputOnBlur = () => {
        this.setState({
            isActive: false,
        });
    }

    handleInputOnKeyUp = ( event ) => {
        const key = window.event ? event.keyCode : event.which;

        switch (key) {
            // Arrow down
            case 40:
                this.setActiveSuggestion();
                break;

            // Arrow up
            case 38:
                this.setActiveSuggestion('up');
                break;

            // Escape
            case 27:
                this.setState({
                    isExpanded: false,
                    activeSuggestion: null,
                });
                break;

            // Enter
            case 13:
                this.closeAutocompleteList();
                break;
        }
    }

    handleClickOnReset = () => {
        this.setState({
            showReset: false,
            searchValue: '',
            isExpanded: false,
            items: [],
            activeSuggestion: null,
        });
    }

    render() {
        const {
            isActive,
            showReset,
            items,
            isExpanded,
            searchValue,
            activeSuggestion,
         } = this.state;

        return (
            <div className='Search-wrapper' ref={this.searchWrapperRef}>
                <form
                    onSubmit={ this.handleFormSubmit }
                    role='search'>
                    <div className={ classnames('Search', {'is-active': isActive}) }>
                        <Input
                            name='searchInput'
                            type='text'
                            placeholder='Zoeken'
                            theme='Search-input'
                            onBlur={ this.handleInputOnBlur }
                            onChange={ this.handleInputOnChange }
                            onFocus={ this.handleInputOnFocus }
                            ariaExpanded={ isExpanded }
                            ariaLabel='Search'
                            ariaOwns='autocomplete-box'
                            ariaAutocomplete='list'
                            autoComplete='off'
                            role='combobox'
                            ariaDescribedBy='input-description'
                            ariaControls='input-description'
                            onKeyUpHandler={ this.handleInputOnKeyUp }
                            value={ searchValue }
                        />
                        <Button
                            type='reset'
                            theme={ classnames('Search-button Search-button--reset', {'is-invisible': !showReset}) }
                            onClick={ this.handleClickOnReset } />
                        <Button
                            type='submit'
                            theme='Search-button'>
                            <span className='sr-only'>Submit Search</span>
                        </Button>
                    </div>
                    <AutocompleteList
                        isExpanded={ isExpanded }
                        items={ items }
                        description={ 'Use the up and down arrows when the results are available.' }
                        searchValue={ searchValue }
                        activeSuggestion={ activeSuggestion }
                        onSuggestionClicked={ this.handleAutocompleteOnSuggestionClicked } />
                </form>
            </div>
        );
    }
}