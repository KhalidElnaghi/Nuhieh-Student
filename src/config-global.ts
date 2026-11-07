import { paths } from 'src/paths';

// ----------------------------------------------------------------------

export const HOST_API = process.env.NEXT_PUBLIC_HOST_API || '';
export const ASSETS_API = process.env.NEXT_PUBLIC_ASSETS_API || '';
export const LANGUAGE = process.env.NEXT_PUBLIC_LANGUAGE || 'en';

// ROOT PATH AFTER LOGIN SUCCESSFUL
export const PATH_AFTER_LOGIN = paths.dashboard.root; // as '/'

export const COOKIES_KEYS = {
  access_token: 'access_token',
  lang: 'lang',
};

// Validate environment variables during development
if (typeof window !== 'undefined' && !process.env.NEXT_PUBLIC_HOST_API) {
  // eslint-disable-next-line no-console
  console.warn(
    '⚠️ [Config Warning]: NEXT_PUBLIC_HOST_API is not defined in your .env file. Please check .env.example.'
  );
}
