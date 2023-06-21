const SET_CURSOR = "settings/SET_CURSOR";
const SET_THEME = "settings/SET_THEME";
const SET_PROJECT = "settings/SET_PROJECT";


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

export const setProject = (project) => {
    return {
        type: SET_PROJECT,
        project
    };
};

const initialState = {
    cursor: "circle",
    theme: "light",
    project: ""
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_CURSOR:
            return { ...state, cursor: action.cursor };
        case SET_THEME:
            return { ...state, theme: action.theme };
        case SET_PROJECT:
            return { ...state, project: action.project };
        default:
            return state
    }
};