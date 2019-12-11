import React from 'react';
import Enzyme from 'enzyme';
const { shallow } = Enzyme;

import { Search } from './index';


//on input change -> calls mock function
describe('Search:', () => {
    test('should change the searchValue if handleOnChange is called', () => {
        const wrapper = shallow(<Search />).instance();
        const mockEvent = {
            target: {
                value: 'aa',
            },
        };

        expect(wrapper.state.searchValue).toBe(null);

        wrapper.handleOnChange(mockEvent);

        expect(wrapper.state.searchValue).toBe('aa');
    });
});