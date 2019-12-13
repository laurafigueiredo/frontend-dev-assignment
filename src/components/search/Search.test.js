import React from 'react';
import Enzyme from 'enzyme';
const { mount } = Enzyme;
import { Search } from './Search';

const flushPromises = () => new Promise(setImmediate);

describe('Search:', () => {
    let wrapper;
    let instance;
    let input;

    beforeEach(() => {
        wrapper = mount(<Search />);
        instance = wrapper.instance();
        input = wrapper.find('#searchInput');
    });

    afterEach(() => {
        wrapper = null;
        instance = null;
        input = null;
    });

    test('should change the searchValue state if handleInputOnChange is called', () => {
        const mockEvent = {
            target: {
                value: 'aa',
            },
        };

        expect(instance.state.searchValue).toBe('');

        instance.handleInputOnChange(mockEvent);

        expect(instance.state.searchValue).toBe('aa');
    });

    test('should not retrieve data when searchValue is not longer than 2 characters', async() => {
        input.simulate('change', { target: { value: 'tr' } });

        // Waits for getSuggestions to end and update the wrapper
        await flushPromises();
        wrapper.update();

        expect(instance.state.items).toEqual([]);
    });

    test('should retrieve data from API when query is longer than 2 and list show results', async() => {
        input.simulate('change', { target: { value: 'truien' } });

        // Waits for getSuggestions to end and update the wrapper
        await flushPromises();
        wrapper.update();

        expect(instance.state.items).toEqual([{
            nrResults: 1100,
            searchterm: 'heren truien'
        }, {
            nrResults: 1501,
            searchterm: 'dames truien'
        }, {
            nrResults: 39,
            searchterm: 'armani truien'
        }]);

        expect(instance.state.isExpanded).toBe(true);

        // Check if list is visible
        expect(wrapper.find('#autocomplete-box').hasClass('is-active')).toEqual(true);
    });

    test('should highlight search suggestions on keyup', async() => {
        input.simulate('change', { target: { value: 'truien' } });

        // Waits for getSuggestions to end and update the wrapper
        await flushPromises();
        wrapper.update();

        input.simulate('keyup', {which: 40});

        expect( instance.state.activeSuggestion ).toBe(0);
    });

    test('should change isActive state when input on focus is triggered', () => {
        const handleOnFocusSpy = jest.spyOn(instance, 'handleInputOnFocus');

        expect(instance.state.isActive).toBe(false);

        wrapper.find('#searchInput').simulate('focus');

        expect(handleOnFocusSpy).toHaveBeenCalled;
        expect(instance.state.isActive).toBe(true);
    });

    test('should change isActive state  when input on blur is triggered', () => {
        const handleOnBlurSpy = jest.spyOn(instance, 'handleInputOnBlur');

        instance.setState({isActive:true});
        expect(instance.state.isActive).toBe(true);

        wrapper.find('#searchInput').simulate('blur');

        expect(handleOnBlurSpy).toHaveBeenCalled;
        expect(instance.state.isActive).toBe(false);
    });

    test('should change showReset state on close button clicked', () => {
        const handleOnResetSpy = jest.spyOn(instance, 'handleClickOnReset');

        expect(instance.state.showReset).toBe(false);

        instance.setState({showReset:true});
        expect(instance.state.showReset).toBe(true);

        wrapper.find('.Search-button--reset').simulate('click');

        expect(handleOnResetSpy).toHaveBeenCalled;
        expect(instance.state.showReset).toBe(false);
    });
});