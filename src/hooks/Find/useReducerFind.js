export const initialState = {
    a: 1
}

export const reducer = (state = initialState, action) => {
    if(action.type === 'aaa') {
        return {
            ...state,
            a: action.a
        }
    }
    return state;
}