import axios from 'axios';
const API_KEY = 'AIzaSyBOkq6RdFYtfpmhtb4J_6Pd_RCPCENXUD8';

const authenticate = async (mode, email, password) => {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
  return response.data.idToken;
};

export const createUser = async (email, password) => {
  const token = await authenticate('signUp', email, password);
  console.log('tk1', token);

  return token;
};

export const login = async (email, password) => {
  const token = await authenticate('signInWithPassword', email, password);
  console.log('tk2', token);

  return token;
};
