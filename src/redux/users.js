import axios from "axios";

const initialState = {
    access_token: null,
    refresh_token: null,
    role: null,
    profile: null,
};

const LOGOUT = "LOGOUT"
const LOGIN = "LOGIN"
const PROFILE_LOAD = "PROFILE_LOAD"

export const logout = () => {
    return {
        type: LOGOUT
    }
}

export const login = (dispatch) => async (email, password, errorCallback) => {
    try {
        const {data} = await axios.request({
            url: "http://localhost:4000/api/oauth/token",
            method: "POST",
            data: {email, password, grant_type: "password"},
        });
        console.log(data)
        dispatch({type: LOGIN, tokens: data});
        reloadProfile(dispatch)();
    } catch (e) {
        errorCallback();
    }
}

export const reloadProfile = (dispatch) => () => {
    const profileConfig = {
        url: 'http://localhost:4000/api/profile',
    };
    axios.request(profileConfig).then(
        response =>
            dispatch({
                type: PROFILE_LOAD,
                profile: response.data
            }));
}

export const usersReducer = (statePart = initialState, action = {}) => {
    switch (action.type) {
        case LOGOUT:
            return {...initialState}
        case LOGIN:
            return {
                ...statePart,
                ...action.tokens
            }
        case PROFILE_LOAD:
            return {
                ...statePart,
                profile: action.profile,
                role: action.profile.role,
            };
        default:
            return statePart;
    }
};
