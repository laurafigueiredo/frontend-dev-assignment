import React from 'react';
import Enzyme from 'enzyme';
const { mount } = Enzyme;

import { Search } from './index';


//on input change -> calls mock function
describe('Search:', () => {
    let wrapper;
    let instance;

    beforeEach(() => {
        wrapper = mount(<Search />);
        instance = wrapper.instance();
    }); 

    afterEach(() => {
        wrapper = null;
    });
    

    test('should change the searchValue state if handleOnChange is called', () => {
        const mockEvent = {
            target: {
                value: 'aa',
            },
        };

        expect(instance.state.searchValue).toBe(null);

        instance.handleOnChange(mockEvent);

        expect(instance.state.searchValue).toBe('aa');
    });

    test('should change isActive state when input on focus is triggered', () => {
        const handleOnFocusSpy = jest.spyOn(instance, 'handleOnFocus');

        expect(instance.state.isActive).toBe(false);

        wrapper.find('#searchInput').simulate('focus');

        expect(handleOnFocusSpy).toHaveBeenCalled;
        expect(instance.state.isActive).toBe(true);
    });

    test('should change isActive state  when input on blur is triggered', () => {
        const handleOnBlurSpy = jest.spyOn(instance, 'handleOnBlur');

        instance.setState({isActive:true});
        expect(instance.state.isActive).toBe(true);
    
        wrapper.find('#searchInput').simulate('blur');

        expect(handleOnBlurSpy).toHaveBeenCalled;
        expect(instance.state.isActive).toBe(false);
    });

    test('should change showReset state on close button clicked', () => {
        const handleOnResetSpy = jest.spyOn(instance, 'handleOnReset');

        expect(instance.state.showReset).toBe(false);

        instance.setState({showReset:true});
        expect(instance.state.showReset).toBe(true);

        wrapper.find('.Search-button--reset').simulate('click');

        expect(handleOnResetSpy).toHaveBeenCalled;
        expect(instance.state.showReset).toBe(false);
    });
});