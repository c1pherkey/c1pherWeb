/**
 * routes doesnt need auth
 * @type {string[]}
 */

export const publicRoutes = [
    "/",
    "/auth/emailVerification"
];

/**
 * routes auth
 * @type {string[]}
 */
export const authRoutes = [
    "/auth/login",
    "/auth/register",
    "/auth/error"
]

/**
 * prefix for api auth routes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * prefix for api auth routes
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";