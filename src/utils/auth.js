const BASE_URl = "https://api.raccoondiploma.nomoredomains.sbs";

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error(res.status);
  }
}

export const authorization = (email, password) => {
  return fetch(`${BASE_URl}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password }),
    credentials: "include",
  })
    .then(checkResponse)
}

export const registration = (name, email, password) => {
  return fetch(`${BASE_URl}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password }),
    credentials: "include",
  })
  .then(checkResponse)
}

export const getContent = () => {
  return fetch(`${BASE_URl}/users/me`, {
    method: 'GET',
    headers: {
      "Accept": "application/json",
      'Content-Type': 'application/json',
    },
    credentials: "include",
  })
  .then(checkResponse)
}

export const signout = () => {
  return fetch(`${BASE_URl}/signout`, {
    method: 'GET',
    headers: {
      "Accept": "application/json",
      'Content-Type': 'application/json',
    },
    credentials: "include",
  })
  .then(checkResponse)
}
