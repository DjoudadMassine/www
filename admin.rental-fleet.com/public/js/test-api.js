/*
    En plus d'utiliser HTTPie pour tester durant le développement,
    on peut utiliser un script fait à la main pour tester l'API automatiquement,
    mais des librairies et outils conçu pour ça existent déjà:

    Jest, Vitest, Node.js, Supertest...

    À chaque fois que vous voulez créer quelque chose, validez si un outil existe déjà.
*/

import * as CONST from './constants.js'

const TestProducts = {

    runTests : async (tests) => {

        for (const fn of tests) {
            if(! await fn()) return false;
        }

        return true;

    },

    generateRandomString : (length = 8) => {
        const chars = 'abcdefghijklmnopqrstuvwxyz';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    },

    GET_products_OK : async () => {

        try {

            console.log('-----------------------');
            console.log('Expected 200 OK : GET /products');

            const response = await fetch(CONST.API_DOMAIN + CONST.ROUTE.getProducts.route);
            
            switch(response.status) {
                case CONST.HTTP_STATUS.OK:
                    const data = await response.json();
                    console.log(data);
                    return true;

                default :
                    console.log(response);
                    break;
            }                

        } catch (error) {
            console.log(error);            
        }        

        return false;

    }, 

    GET_products_NotFound : async () => {

        try {

            console.log('-----------------------');
            console.log('Expected 404 Not Found : GET /something');

            const response = await fetch(CONST.API_DOMAIN + '/something');
            
            switch(response.status) {
                case CONST.HTTP_STATUS.NotFound:
                    return true;

                default :
                    console.log(response);
                    break;
            }               

        } catch (error) {
            console.log(error);
        }        
        
        return false;

    }, 

    POST_products_Created : async () => {

        try {

            console.log('-----------------------');
            console.log('Expected 201 Created : POST /products');

            const data = {
                name: TestProducts.generateRandomString(),
                picture: 'test.png',
                price: 99
            };

            const response = await fetch(CONST.API_DOMAIN + CONST.ROUTE.createProduct.route, {
                method: CONST.ROUTE.createProduct.method,
                headers: {
                    // 'Content-Type': 'application/x-www-form-urlencoded'
                    [CONST.HEADER.contentType]: CONST.CONTENT_TYPE.formUrlEncoded
                },
                body: new URLSearchParams(data)
            });
            
            switch(response.status) {
                case CONST.HTTP_STATUS.Created:
                    const data = await response.json();
                    console.log(data);
                    return true;

                case CONST.HTTP_STATUS.BadRequest:
                case CONST.HTTP_STATUS.Conflict:
                default :
                    console.log(response);
                    break;
            }

        } catch (error) {
            console.log(error);
        }        
        
        return false;

    },

    DELETE_products_NoContent : async () => {

        try {

            console.log('-----------------------');
            console.log('Expected 204 No Content : DELETE /products/:id');

            let response = await fetch(CONST.API_DOMAIN + CONST.ROUTE.getProducts.route);
            const products = await response.json();
            const id = products.at(-1).id;
            console.log('Last ID : ' + id);

            response = await fetch(CONST.API_DOMAIN + CONST.ROUTE.deleteProduct.route + '/' + id, {
                method: CONST.ROUTE.deleteProduct.method
            });
            
            switch(response.status) {
                case CONST.HTTP_STATUS.NoContent:
                    return true;

                case CONST.HTTP_STATUS.NotFound:
                default :
                    console.log(response);
                    break;
            }    

        } catch (error) {
            console.log(error)
        }

        return false;

    },

};

await TestProducts.runTests( 
    [
        TestProducts.GET_products_OK,
        TestProducts.GET_products_NotFound,
        TestProducts.POST_products_Created,
        TestProducts.DELETE_products_NoContent
    ]
);