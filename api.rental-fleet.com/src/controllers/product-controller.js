import ResponseManager from '#utils/response-magager.js';
import ProductView from '#views/product-view.js';
import ProductModel from '#models/product-model/js';

const ProductController = {

    index: async (req, res) => {

        try {

            const products = await ProductModel.selectAll();

            ResponseManager.send(req, res, 200, ProductView.collection(products));

            return true;

        } catch (err) {
            
            // Something whent wrong with the database query. 
            // Check the error code to determine what happened.
            
            if (err instanceof ErrorTypes.DatabaseError) {
                
                res.statusCode = 503;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Service Unavailable');
                return false;

            }

            throw err;
        
        }        

    },

    show: async (req, res) => {

        try {

            const id = res.locals.url.params.id;

            const product = await ProductModel.selectById(id);
            
            if (product) {
                ResponseManager.send(req, res, 200, ProductView.single(product));
                return true;
            }

            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Ressouce does not exists');
            return false;

        } catch (err) {
            
            // Something whent wrong with the database query. 
            // Check the error code to determine what happened.
            
            if (err instanceof ErrorTypes.DatabaseError) {
                
                res.statusCode = 503;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Service Unavailable');
                return false;

            }

            throw err;
        
        }        
        
    }

};

export default ProductController;