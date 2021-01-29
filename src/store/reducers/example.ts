const initialState = {
    a: 1,
};

export const exampleReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'TEST':
            return {
                ...state,
            };
        default:
            return state;
    }
};
