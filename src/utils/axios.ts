import Cookies from 'js-cookie';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import { HOST_API, LANGUAGE } from 'src/config-global';

export interface Params {
  page: number;
  limit: number;
  status?: string;
  filters?: string;
  created_at?: string;
  headers?: { access_token: string };
}

const axiosInstance: AxiosInstance = axios.create({
  baseURL: HOST_API,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Accept: 'application/json',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    // Remove static Authorization header
  },
});

// Add request interceptor to dynamically set Authorization and Language headers
axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get('access_token');
    const lang = Cookies.get('Language');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    if (lang) {
      config.headers['Accept-Language'] = lang;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle 401 Unauthorized (Expired or Invalid Token)
    if (error?.response?.status === 401 && typeof window !== 'undefined') {
      // 1. Clear credentials
      Cookies.remove('access_token', { path: '/' });
      Cookies.remove('user', { path: '/' });
      try {
        window.sessionStorage.removeItem('access_token');
        window.sessionStorage.removeItem('user');
      } catch (e) {
        // ignore storage errors
      }
      delete axiosInstance.defaults.headers.common.Authorization;

      // 2. Redirect to login if not already on auth pages
      const currentPath = window.location.pathname;
      const isAuthPage =
        currentPath.startsWith('/login') ||
        currentPath.startsWith('/register') ||
        currentPath.startsWith('/forgot-password') ||
        currentPath.startsWith('/reset-password');

      if (!isAuthPage) {
        const returnTo = encodeURIComponent(currentPath + window.location.search);
        window.location.href = `/login?returnTo=${returnTo}`;
      }
    }

    return Promise.reject((error?.response && error?.response?.data) || error || 'Something went wrong');
  }
);

export default axiosInstance;

export const baseUrl = HOST_API;

export const fetcher = async ({ url, config }: { url: string; config?: AxiosRequestConfig }) => {
  // Use axiosInstance directly instead of creating a new instance
  const response = await axiosInstance.get(url, {
    ...config,
    headers: {
      // Authorization header is now handled by the request interceptor
      /*       'Accept-Language': lang,
       */
    },
  });

  return response.data;
};
export const getErrorMessage = (error: unknown): string => {
  let message: string;
  if (error instanceof Error) {
    // eslint-disable-next-line prefer-destructuring
    message = error.message;
  } else if (error && typeof error === 'object' && 'message' in error) {
    message = String(error.message);
  } else if (typeof error === 'string') {
    message = error;
  } else {
    message = 'Something went wrong';
  }
  return message;
};

export const endpoints = {
  auth: {
    me: '/auth/me',
    login: '/auth/login',
    register: '/auth/register',
    forgot: `/auth/send-password-reset-otp`,
    verify: `/auth/verify-otp-and-reset-password`,
    requestResetPassword: '/auth/request-reset-password',
    verifyResetOtp: '/auth/verify-reset-otp',
    resetPassword: '/auth/reset-password',
  },
  users: {
    fetch: '/users',
    new: '/users/create',
    edit: (userId: string | number) => `/users/${userId}`,
    delete: (userId: string | number) => `/users/remove-user/${userId}`,
    updateRole: '/users/update-user-role',
    changeAccountStatus: '/users/change-account-status',
  },
  lookups: {
    fetch: (type: string) => `/lookups/${type}`,
  },
  notifications: {
    fetch: '/notification',
  },
  settings: {
    account: '/settings/account',
    uploadPhoto: '/settings/account/upload-photo',
    deleteAccount: '/settings/account',
    pushNotifications: '/settings/push-notifications',
  },
};
