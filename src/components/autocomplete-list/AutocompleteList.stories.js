import React from 'react';
import { storiesOf } from '@storybook/react';
import { AutocompleteList } from './AutocompleteList';

storiesOf('AutocompleteList', module)
  .add('With search value: tru', () => <AutocompleteList
    isExpanded
    items={[
      {
          "searchterm":"heren truien",
          "nrResults":1100
      },
      {
          "searchterm":"dames truien",
          "nrResults":1501
      },
  ]} 
  searchValue={'tru'} />);