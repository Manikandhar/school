import { config } from '../config';
import { authHeader, handleResponse } from '../helpers';

export const userService = {
    getUserDetails
};

function getUserDetails(id) {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}