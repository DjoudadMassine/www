const ProductView = {

    single: (product) => {

        return {

            id: product.id,
            name: product.name

        };

    }, 

    collection: (products) => {

       // Map va créer un tableau avec tous les résultats 
       return products.map(ProductView.single);

    }

};

export default ProductView;