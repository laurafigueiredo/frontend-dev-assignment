import { mockSuggestions } from './mock-suggestions';

export default function() {
    return Promise.resolve({
        status: 'success',
        headers: {
            'content-type': 'application/json',
        },
        statusCode: 200,
        json: () => Promise.resolve(mockSuggestions)
    });
}