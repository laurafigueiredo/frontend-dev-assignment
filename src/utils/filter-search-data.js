// Filters out result based on inputValue
export const filterSearchData = ( suggestions, value ) => {
    // Performance: using regex is here because its the fastest way to filter within a string.
    const stringRegex = new RegExp(value.toLowerCase());
    return suggestions.filter( ({ searchterm }) => stringRegex.test(searchterm.toLowerCase()));
};