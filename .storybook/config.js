import { configure } from '@storybook/react';

function loadStories() {
  require('../src/components/button/Button.stories.js');
  require('../src/components/input/Input.stories.js');
  require('../src/components/autocomplete-list/AutocompleteList.stories.js');
}

configure(loadStories, module);