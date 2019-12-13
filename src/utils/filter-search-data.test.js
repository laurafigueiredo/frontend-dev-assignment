import { filterSearchData } from './filter-search-data';

const testData = [{
    searchterm: 'heren truien',
    nrResults: 1100
},{
    searchterm: 'dames truien',
    nrResults: 1501
}];

describe('Filter search data:', () => {
    test('should return empty array', () => {
        expect(filterSearchData(testData, '123')).toEqual([]);
    });
    test('should return a result', () => {
        expect(filterSearchData(testData, 'Heren')).toEqual([{
            searchterm: 'heren truien',
            nrResults: 1100
        }]);
    });
});