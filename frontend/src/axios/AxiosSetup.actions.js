import axios from "axios"
import {LOGIN, LOGOUT} from "../redux/users";
import {store} from "../redux/store";

export const setupAxios = () => async (dispatch) => {
    axios.interceptors.request.use(function (config) {
        const token = store.getState().users.access_token;

        if (token != null && !config.forceHeaders) {
            config.headers.authorization = `Bearer ${token}`;
        }
        return config;
    }, function (err) {
        return Promise.reject(err);
    });
    axios.interceptors.response.use((response) => {
        return response;
    }, async (error) => {
        const originalRequest = error.config;
        if (error.response && (error.response.status === 400) && (error.response.data.error === 'invalid_grant')) {
            dispatch({
                type: LOGOUT
            });
            return Promise.reject(error.response);
        } else if (error.response && error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const res = await axios.post('/oauth/token',
                {
                    "refresh_token": store.getState().persistentState.refresh_token,
                    "grant_type": "refresh_token"
                });
            if (res && res.status === 201 || res.status === 200) {
                dispatch({
                    type: LOGIN,
                    tokens: res.data
                });

                const token = store.getState().persistentState.access_token;
                if (token != null) {
                    axios.defaults.headers.authorization = `Bearer ${token}`;
                }
                return axios(originalRequest);
            }
        } else {
            return Promise.reject(error.response);
        }
    });
};