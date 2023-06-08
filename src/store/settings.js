const SET_CURSOR = "settings/SET_CURSOR";


export const setCursor = (cursor) => {
    return {
        type: SET_CURSOR,
        cursor
    };
};

const initialState = {
    cursor: "cursor-circle-dark"
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_CURSOR:
            return { ...state, cursor: action.cursor};
        default:
            return state
    }
};