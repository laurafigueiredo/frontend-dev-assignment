import React from 'react';
import renderer from 'react-test-renderer';

import { Button } from './index';

describe('Button', () => {
    test('renders correctly', () => {
        const component = renderer.create(<Button>ButtonText</Button>);
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });
});