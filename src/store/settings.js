const SET_CURSOR = "settings/SET_CURSOR";
const SET_THEME = "settings/SET_THEME";

export const setCursor = (cursor) => {
    return {
        type: SET_CURSOR,
        cursor
    };
};

export const setTheme = (theme) => {
    return {
        type: SET_THEME,
        theme
    };
};

const initialState = {
    cursor: "circle",
    theme: "light"
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_CURSOR:
            return { ...state, cursor: action.cursor };
        case SET_THEME:
            return { ...state, theme: action.theme };
        default:
            return state
    }
};