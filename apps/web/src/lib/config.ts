// don't import files or modules into this file
export const IS_PRODUCTION = process.env.NODE_ENV === "production";
export const REDIRECT_PATH = "/";
export const REDIRECT_REFRESH_KEY = "session_expired";

export const API_URL = IS_PRODUCTION
  ? `http://${process.env.NEXT_PUBLIC_API_HOSTPORT}`
  : process.env.NEXT_PUBLIC_API_HOSTPORT;

export const GQL_URL = `${API_URL}/graphql`;

export const ACCESS_TOKEN = process.env.ACCESS_TOKEN as string;
export const REFRESH_TOKEN = process.env.REFRESH_TOKEN as string;
export const LOGIN_TOKEN_KEY = "token";
export const LOGIN_REFRESH_TOKEN_KEY = "refreshToken";
