export const API_CONFIG = {
  BASE_URL: 'https://api.yourservice.com/v1',
  TIMEOUT: 30000,
  HEADERS: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

export const ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    PROFILE: '/auth/me',
  },
  USER: {
    GET_ALL: '/users',
    UPDATE: '/users/:id',
  },
  PRODUCTS: {
    GET_ALL: '/products',
    GET_BY_ID: '/products/:id',
  },
};

export const ERROR_CODES = {
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
};

export const getEndpoint = (endpoint, params = {}) => {
  let finalEndpoint = endpoint;
  Object.keys(params).forEach(key => {
    finalEndpoint = finalEndpoint.replace(`:${key}`, params[key]);
  });
  return finalEndpoint;
};