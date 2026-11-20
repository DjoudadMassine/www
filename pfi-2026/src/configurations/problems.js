const BASE_URL = 'http://your-domain-here.com/errors';

const PROBLEMS = Object.freeze({

    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status#client_error_responses
    
    VALIDATION_FAILED:  {
        type: `${BASE_URL}/validation-failed`,
        title: "Validation failed",
        instance: `${BASE_URL}/occurrences/`,
        code: "VALIDATION_FAILED",
        status : 400,
    },

    UNAUTHORIZED:  {
        type: `${BASE_URL}/unauthorized`,
        title: "Client must authenticate",
        instance: `${BASE_URL}/occurrences/`,
        code: "UNAUTHORIZED",
        status : 401,
    },

    INVALID_TOKEN:  {
        type: `${BASE_URL}/invalid-token`,
        title: "Invalid token",
        instance: `${BASE_URL}/occurrences/`,
        code: "INVALID_TOKEN",
        status : 401,
    },

    EXPIRED_ACCESS_TOKEN:  {
        type: `${BASE_URL}/expired-access-token`,
        title: "Expired access token",
        instance: `${BASE_URL}/occurrences/`,
        code: "EXPIRED_ACCESS_TOKEN",
        status : 401,
    },

    FORBIDDEN:  {
        type: `${BASE_URL}/forbidden`,
        title: "No access rights",
        instance: `${BASE_URL}/occurrences/`,
        code: "FORBIDDEN",
        status : 403,
    },

    NOT_FOUND:  {
        type: `${BASE_URL}/not-found`,
        title: "Ressouce does not exists",
        instance: `${BASE_URL}/occurrences/`,
        code: "NOT_FOUND",
        status : 404,
    },

    METHOD_NOT_ALLOWED:  {
        type: `${BASE_URL}/method-not-allowed`,
        title: "Method not allowed",
        instance: `${BASE_URL}/occurrences/`,
        code: "METHOD_NOT_ALLOWED",
        status : 405,
    },

    DUPLICATE:  {
        type: `${BASE_URL}/duplicate`,
        title: "Resource already registered",
        instance: `${BASE_URL}/occurrences/`,
        code: "DUPLICATE",
        status : 409,
    },

    CONTENT_TOO_LARGE:  {
        type: `${BASE_URL}/content-too-large`,
        title: "Content Too Large",
        instance: `${BASE_URL}/occurrences/`,
        code: "CONTENT_TOO_LARGE",
        status : 413,
    },

    UNSUPPORTED_MEDIA_TYPE:  {
        type: `${BASE_URL}/unsupported-media-type`,
        title: "Unsupported Media Type",
        instance: `${BASE_URL}/occurrences/`,
        code: "UNSUPPORTED_MEDIA_TYPE",
        status : 415,
    },

    TOO_MANY_REQUESTS:  {
        type: `${BASE_URL}/too-many-requests`,
        title: "Too Many Requests",
        instance: `${BASE_URL}/occurrences/`,
        code: "TOO_MANY_REQUESTS",
        status : 429,
    },
    
    // 500
    INTERNAL_SERVER_ERROR:  {
        type: "about:blank", // default if omitted
        title: "Internal Server Error",
        instance: `${BASE_URL}/occurrences/`,
        code: "INTERNAL_SERVER_ERROR",
        status : 500,
    }, 

    SERVICE_UNAVAILABLE:  {
        type: "about:blank", // default if omitted
        title: "Service Unavailable",
        instance: `${BASE_URL}/occurrences/`,
        code: "SERVICE_UNAVAILABLE",
        status : 503,
    }, 

});

export default PROBLEMS;