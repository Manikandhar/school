
import { BehaviorSubject } from 'rxjs';
import { config } from '../config';
import { handleResponse } from '../helpers';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

export const authenticationService = {
    login,
    logout,
    isValid,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue() { return currentUserSubject.value }
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    }

    return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
        .then(handleResponse)
        .then(user => {
            localStorage.setItem('currentUser', JSON.stringify(user));
            currentUserSubject.next(user);

            return user;
        });
}

function logout() {
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}

function isValid() {
    let requestOptions = { method: 'GET', headers: { 'Content-Type': 'application/json', 'Authorization': (currentUserSubject.value && currentUserSubject.value.token ? `Bearer ${currentUserSubject.value.token}` : '') } }
    return fetch(`${config.apiUrl}/users/valid`, requestOptions)
        .then(handleResponse)
        .then(resp => {
            return resp;
        });
}