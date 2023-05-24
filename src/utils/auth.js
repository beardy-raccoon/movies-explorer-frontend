import { BASE_URL } from "./consts";
import { checkResponse } from "./utils";

export const authorization = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password }),
    credentials: "include",
  })
    .then(checkResponse)
};

export const registration = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password }),
    credentials: "include",
  })
    .then(checkResponse)
};

export const getUser = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      "Accept": "application/json",
      'Content-Type': 'application/json',
    },
    credentials: "include",
  })
    .then(checkResponse)
};

export const signout = () => {
  return fetch(`${BASE_URL}/signout`, {
    method: 'GET',
    headers: {
      "Accept": "application/json",
      'Content-Type': 'application/json',
    },
    credentials: "include",
  })
    .then(checkResponse)
};
