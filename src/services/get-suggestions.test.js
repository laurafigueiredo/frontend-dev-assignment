import { getSuggestions } from '../services/get-suggestions';

const VALID_SEARCH_QUERY = 'truien';
const INVALID_SEARCH_QUERY = '123';

describe('get-suggestions: ', () => {

    test('fetch empty results, if search value does not exist in API', () => {
        getSuggestions(INVALID_SEARCH_QUERY).then( response => {
            expect( response ).toEqual([]);
        });
    });

    test('fetches results, if search value exist in the API', () => {
        getSuggestions(VALID_SEARCH_QUERY).then( response => {

            // Expect to not be empty
            expect( response ).not.toEqual([]);

            // Expect searchterm key
            expect( response.some((item) => item.hasOwnProperty('searchterm') )).toBe(true);
            expect( response.some((item) => item.hasOwnProperty('nrResults') )).toBe(true);

            // API call should return suggestions
            expect( response.filter(({ searchterm }) => searchterm.includes( VALID_SEARCH_QUERY ) ).length ).toBe(response.length);

            // Expect if so the number of results to be a number
            expect( response.filter(({nrResults}) => typeof nrResults === 'number' ).length ).toBe(response.length);

        });
    });

});