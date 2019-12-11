import React, { Component } from 'react';
import classnames from 'classnames';

// Components
import { Button } from '../button';
import { Input } from '../input';

// Styles
import './Search.css';

export class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchValue: null,
            isActive: false,
            showReset: false,
        }

        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnFocus = this.handleOnFocus.bind(this);
        this.handleOnBlur = this.handleOnBlur.bind(this);
        this.handleOnReset = this.handleOnReset.bind(this);
    }

    handleOnChange( event ) {
        const { value } = event.target;
        const hasCharacters = !!value.trim().length;

        this.setState({
            searchValue: value,
            showReset: hasCharacters,
        });
    }

    handleOnFocus() {
        this.setState((prevState) => ({
            isActive: true,
            showReset: (prevState.searchValue && !!prevState.searchValue.length) ? true : false,
        }));
    }

    handleOnBlur() {
        this.setState({
            isActive: false,
        });
    }

    handleOnReset() {
        this.setState({
            showReset: false,
        });
    }

    render() {
        const { isActive, showReset } = this.state;

        return (
            <form
                className={ classnames('Search', {'is-active': isActive}) }
                onSubmit={ () => {} }
                role='search'>
                <Input
                    name='searchInput'
                    type='text'
                    placeholder='Zoeken'
                    theme='Search-input'
                    onBlur={ this.handleOnBlur }
                    onChange={ this.handleOnChange }
                    onFocus={ this.handleOnFocus }
                    aria-label='Search' />
                <Button
                    type='reset'
                    theme={ classnames('Search-button Search-button--reset', {'is-invisible': !showReset}) }
                    onClick={ this.handleOnReset } />
                <Button
                    type='submit'
                    theme='Search-button'>
                    <span className='sr-only'>Submit Search</span>
                </Button>
            </form>
        );
    }
}