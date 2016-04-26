const initialState = {
    contacts: [
        { name: 'Nilove', phone: '123'},
        { name: 'Under 14', phone: '420'},
        { name: 'Rinku', phone: '987'},
        { name: 'Mahfuza', phone: '121'},
        { name: 'Imran', phone: '333'},
        { name: 'Ronju', phone: '4200'},
        { name: 'Tadim', phone: '2420'}
    ],
    search: ''
};

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case 'SAVE_SEARCH_TEXT':
            return Object.assign({}, state, {search: action.search});
            break;
        default:

    }
    return state;
}
