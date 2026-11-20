export const API_DOMAIN = 'http://api.rental-fleet.com:8080';
export const API_CDN = 'http://cdn.rental-fleet.com:8080/';

export const METHOD = Object.freeze({
    get : 'GET',
    post : 'POST',
    delete : 'DELETE',
    put : 'PUT',
    patch : 'PATCH'
});

// Catalogue de routes disponibles
export const ROUTE = Object.freeze({
    
    // Structure de base
    products : '/products',

    // Structure avancée permettant des informations supplémentaires
    getProducts : { route : '/products', method : METHOD.get },
    createProduct : { route : '/products', method : METHOD.post },
    deleteProduct : { route : '/products', method : METHOD.delete },
    updateProduct : { route : '/products', method : METHOD.put },
    modifyProduct : { route : '/products', method : METHOD.patch },
});

export const HEADER = Object.freeze({
    contentType : 'Content-Type',
    location : 'Location'
});

export const CONTENT_TYPE = Object.freeze({
    formUrlEncoded : 'application/x-www-form-urlencoded',
    applicationJson : 'application/json',
    multipartFormData : 'multipart/form-data'
});

export const HTTP_STATUS = Object.freeze({
    OK : 200,
    Created : 201,
    NoContent : 204,
    BadRequest : 400,
    NotFound : 404, 
    MethodNotAllowed : 405,
    Conflict : 409,
    InternalServerError : 500,
    ServiceUnavailable : 503
});

export const TEXT = Object.freeze({
    
    errorOccurred : 'An error has occurred',
    fieldsMissingValuesInvalid : 'Fields are missing or values are invalid',
    
    productCreated : 'The product has been created',
    productNameAlreadyExists : 'The product name already exists',
    productSaved : 'The product has been saved',
    productNotExists : 'The product does not exists',
    productDeleted : 'The product has been deleted',
    
});

export const PRODUCT = Object.freeze({
    id : 'id',
    name : 'name',
    picture : 'picture',
    price : 'price'
});

