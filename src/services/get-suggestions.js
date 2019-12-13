import { filterSearchData } from '../utils/filter-search-data';

const API_BASE_PATH = 'http://localhost:3000';

export const getSuggestions = ( value ) => {
    return fetch(`${API_BASE_PATH}/search?q=${ value }`)
        .then(( response ) => response.json())
        .then(( response ) => filterSearchData( response.suggestions, value ));
};