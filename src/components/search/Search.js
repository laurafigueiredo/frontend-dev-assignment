import React, { Component } from 'react';

// Components
import { Button } from '../button';
import { Input } from '../input';
import { Label } from '../label';

// Styles
import './Search.css';

export class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchValue: null,
        }

        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange( event ) {
        const { value } = event.target;

        this.setState({
            searchValue: value,
        });
    }

    render() {
        return (
            <form
                className='Search'
                onSubmit={ () => {} }
                role='search'>
                <Label theme='sr-only' labelFor={'header-search'}>
                    Search
                </Label>
                <Input
                    name='searchInput'
                    type='text'
                    placeholder='Zoeken'
                    theme='Search-input'
                    onChange={ this.handleOnChange } />
                <Button
                    type='submit'
                    theme='Search-button'>
                    <span className='sr-only'>Submit Search</span>
                </Button>
            </form>
        );
    }
}