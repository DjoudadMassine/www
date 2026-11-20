import { API_DOMAIN, ROUTE } from './constants.js';
import * as CONST from './constants.js'

const ProductTab = {

    // Identifiants des éléments HTML du panneau
    createFormId : '#product #product-form',
    listContainerId : '#product #product-list',
    globalMessageId : '#product #global-message',
    timerId : undefined,
        
    myList : async () => {
        
        const tabContent = document.querySelector(ProductTab.listContainerId);
        tabContent.replaceChildren();

        try{

            const response = await fetch(API_DOMAIN + ROUTE.products);
            // console.log(response);

            if (!response.ok) {

                throw new Error(`Statut de réponse : ${reponse.status}`);

            }

            const data = await response.json();
            // console.log(data);

            if (!data) return;

            data.forEach(product => {
                
                const p = document.createElement('p');
                p.textContent = product.id + ', ' + product.name + ', ' + product.picture + ', ' + product.price;
                
                // Ajout d'un bouton supprimer
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.classList.add('btn', 'btn-danger', 'mx-2');
                deleteButton.addEventListener('click', () => { console.log('Delete: ' + product.id) } );
                p.appendChild(deleteButton);

                tabContent.appendChild(p);     
            
            });

        } catch (error) {

            // pour le moment on ne va qu'afficher l'erreur
            console.log(error.message);
        }

    },
    
    loadList : async () => {
        
        const tabContent = document.querySelector(ProductTab.listContainerId);
        tabContent.replaceChildren();

        try{

            const response = await fetch(CONST.API_DOMAIN + CONST.ROUTE.products);
        
            if (!response.ok) {

                throw new Error(`Statut de réponse : ${reponse.status}`);

            }

            const data = await response.json();
            
            if (!data) return;

            // À partir d'ici l'affichage change comparé à myList()
           
            data.forEach(product => {
                
                const form = document.createElement('form');
                form.classList.add('d-inline-block', 'm-2');
                
                const thumb = document.createElement('img');
                thumb.name = 'thumb';
                thumb.classList.add('mx-2');
                thumb.src = CONST.API_CDN + product.picture;
                
                const inputId = document.createElement('input');
                inputId.name = CONST.PRODUCT.id;
                inputId.type = 'text';
                inputId.value = product.id
                inputId.classList.add('mx-2', 'text-center');
                inputId.setAttribute('disabled', true);
                inputId.setAttribute('style', "max-width: 50px");

                const inputName = document.createElement('input');
                inputName.type = 'text';
                inputName.name = CONST.PRODUCT.name;
                inputName.value = product.name;
                inputName.dataset.name = product.name;
                inputName.placeholder = 'Name';
                inputName.classList.add('mx-2');

                const inputPicture = document.createElement('input');
                inputPicture.type = 'file';
                inputPicture.name = CONST.PRODUCT.picture;
                inputPicture.title = product.picture;
                inputPicture.dataset.picture = product.picture;
                inputPicture.classList.add('mx-2');

                const inputPrice = document.createElement('input');
                inputPrice.type = 'text';
                inputPrice.name = CONST.PRODUCT.price;
                inputPrice.placeholder = 'Price';
                inputPrice.value = product.price;
                inputPrice.dataset.price = product.price;
                inputPrice.classList.add('mx-2', 'text-center');
                inputPrice.setAttribute('style', "max-width: 75px");

                const saveButton = document.createElement('button');
                saveButton.type = 'submit';
                saveButton.textContent = 'Save';
                saveButton.classList.add('btn', 'btn-primary', 'mx-2');
                saveButton.addEventListener('click', async (event) => { await ProductTab.saveProduct(event, product.id) } );
                
                const resetButton = document.createElement('button');
                resetButton.textContent = 'Reset';
                resetButton.classList.add('btn', 'btn-warning', 'mx-2');
                resetButton.addEventListener('click', async (event) => { await ProductTab.resetProduct(event) } );
                
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.classList.add('btn', 'btn-danger', 'mx-2');
                deleteButton.addEventListener('click', async (event) => { await ProductTab.deleteProduct(event, product.id) } );
                
                form.appendChild(thumb);
                form.appendChild(inputId);
                form.appendChild(inputName);
                form.appendChild(inputPicture);
                form.appendChild(inputPrice);
                form.appendChild(saveButton);
                form.appendChild(resetButton);
                form.appendChild(deleteButton);
                                
                tabContent.appendChild(form);     
            
            });

        } catch (error) {

            // pour le moment on ne va qu'afficher l'erreur
            console.log(error.message);
        }

    },

    // Associer le bouton "Create" avec la fonction "createProduct"
    createProductSubmitBindEvent : () => {

        try {

            const form = document.querySelector(ProductTab.createFormId);
            form.addEventListener('submit', async (event) => { await ProductTab.createProduct(event) } );

        } catch (error) {

            // pour le moment on ne va qu'afficher l'erreur
            console.log(error.message);
        }
        
    
    },

    // Créer un produit par appel API
    createProduct : async (event) => {

        try {

            event.preventDefault();

            const form = document.querySelector(ProductTab.createFormId);

            ProductTab.disableFormButtons(form);
            
            const data = {

                name : form.elements[CONST.PRODUCT.name].value,

                // .split('\\').pop() est temporaire car on simule le fichier en utilisant son nom
                picture : form.elements[CONST.PRODUCT.picture].value.split('\\').pop(),

                price : form.elements[CONST.PRODUCT.price].value

            };

            console.log(data);

            // Normalement ici on devrait valider les données avant l'appel à l'API

            // === Compléter la suite de la fonction ===
            
            // Appel à l'API pour créer le produit
            
            const response = await fetch(CONST.API_DOMAIN + CONST.ROUTE.createProduct.route, {
                method: CONST.ROUTE.createProduct.method,
                headers: {
                    // 'Content-Type': 'application/x-www-form-urlencoded'
                    [CONST.HEADER.contentType]: CONST.CONTENT_TYPE.formUrlEncoded
                },
                body: new URLSearchParams(data)
            });

                      
            // === Idée de code à utiliser pour la suite ===
            // form.reset();
            // form.elements['name'].focus();
            // response.headers.get('Location')
            // ProductTab.loadList();            
            // ProductTab.disableFormButtons(form,false);
            
            // === Utilisez les constantes pour les textes ===
            // ProductTab.displayGlobalMessage('The product has been created', true);
            // ProductTab.displayGlobalMessage('The product name already exists',false);
            // ProductTab.displayGlobalMessage('An error has occurred', false);

            // === Utilisez un switch() car il y a 4 cas possibles ===
            switch(response.status){

                case CONST.HTTP_STATUS.Created:

                    console.log(response.headers.get(CONST.HEADER.location));

                    const product = await response.json();
                    console.log(product); 

                    form.reset();
                    form.elements[CONST.PRODUCT.name].focus();

                    ProductTab.loadList();

                    ProductTab.displayGlobalMessage(CONST.TEXT.productCreated, true);

                    break;

                case CONST.HTTP_STATUS.Conflict:

                    ProductTab.displayGlobalMessage(CONST.TEXT.productNameAlreadyExists, false);
                    
                    form.elements[CONST.PRODUCT.name].focus();

                    break;

                case CONST.HTTP_STATUS.BadRequest:

                    ProductTab.displayGlobalMessage(CONST.TEXT.fieldsMissingValuesInvalid, false);
                    
                    break;

                default:

                    ProductTab.displayGlobalMessage(CONST.TEXT.errorOccurred, false);

                    break;

            }

            ProductTab.disableFormButtons(form, false);

        } catch (error) {

            // pour le moment on ne va qu'afficher l'erreur
            console.log(error.message);

        }                   

    },

    // Enregistrer la modification du produit par appel API
    saveProduct : async (event, id) => {

        try {

            event.preventDefault();
            // console.log('Save: ' + id);

            const form = event.target.parentElement;
            
            ProductTab.disableFormButtons(form);

            const thumb = form.querySelector('img[name="thumb"]');
            const nameInput = form.elements[CONST.PRODUCT.name];
            const pictureInput = form.elements[CONST.PRODUCT.picture];
            const priceInput = form.elements[CONST.PRODUCT.price];

            // On va obtenir la valeur des champs
            const data = {

                name : nameInput.value,

                // .split('\\').pop() est temporaire car onsimule le fichier en utilisant son nom
                picture : pictureInput.value.split('\\').pop(),

                price : priceInput.value

            };

            // On va retirer ceux qui n'ont pas changé
            if (data.name === nameInput.dataset.name) delete data.name;

            if (
                data.picture === pictureInput.dataset.picture ||
                data.picture === ''
            ) {
                delete data.picture;
                pictureInput.value = '';
            }

            if (data.price === priceInput.dataset.price) delete data.price;

            console.log(data);
                       
            // Normalement ici on devrait valider les données avant l'appel à l'API

            // Nous n'avons aucune nouvelle donnée, on quitte la fonction
            if (Object.keys(data).length === 0) {
                 ProductTab.disableFormButtons(form,false);
                 return;
            }            

            // ici on simule la réponse juste pour que le code fonctionne
		    // le temps que vous puissiez compléter la fonction
            let response = {};
            response.status = 204;

            // === Compléter la suite de la fonction ===
            
            // Appel API PUT ou PATCH ?

            // Changement complet ou partiel de la ressource ?
            // Sélectionnez le bon objet de CONST.ROUTE
            const action = Object.keys(data).length === 3 ? CONST.ROUTE.updateProduct : CONST.ROUTE.modifyProduct;
            
            // const action = Object.keys(data).length === 3 ? ... : ...;

            // let action = {};
            // if (Object.keys(data).length === 3) {
            //     action = ...
            // } else {
            //     action = ...
            // }

            response = await fetch(CONST.API_DOMAIN + action.route + '/' + id, {
                method : action.method, 
                headers: {
                    // 'Content-Type': 'application/x-www-form-urlencoded'
                    [CONST.HEADER.contentType]: CONST.CONTENT_TYPE.formUrlEncoded
                },
                body: new URLSearchParams(data)
            });
                       
            switch (response.status) {
                
                case CONST.HTTP_STATUS.NoContent:
                
                    if (Object.hasOwn(data, "name")) {

                        nameInput.dataset.name = nameInput.value;

                    }

                    if (Object.hasOwn(data, "picture")) {
                        
                        const value = pictureInput.value.split('\\').pop();

                        pictureInput.dataset.picture = value;
                        pictureInput.title = value;
                        pictureInput.value = '';

                        thumb.src = CONST.API_CDN + value;

                    }

                    if (Object.hasOwn(data, "price")) {

                        priceInput.dataset.price = priceInput.value; 

                    }
                    
                    ProductTab.displayGlobalMessage(CONST.TEXT.productSaved);
                    
                    break;

                case CONST.HTTP_STATUS.BadRequest:
                
                    ProductTab.displayGlobalMessage(CONST.TEXT.fieldsMissingValuesInvalid, false);

                    break;

                case CONST.HTTP_STATUS.NotFound:
                
                    ProductTab.displayGlobalMessage(CONST.TEXT.productNotExists, false);

                    break;

                case CONST.HTTP_STATUS.Conflict:
                
                    ProductTab.displayGlobalMessage(CONST.TEXT.productNameAlreadyExists, false);

                    break;

                default :
                
                    ProductTab.displayGlobalMessage(CONST.TEXT.errorOccurred, false);

                    break;
            }

            ProductTab.disableFormButtons(form, false);

        } catch (error) {

            // pour le moment on ne va qu'afficher l'erreur
            console.log(error.message);

        } 

    },
    
    // Remettre les valeurs originales du produit grâce à "dataset"
    resetProduct : async (event) => {

        try {

            event.preventDefault();
            const form = event.target.parentElement;
            
            form.elements[CONST.PRODUCT.name].value = form.elements[CONST.PRODUCT.name].dataset.name;
            form.elements[CONST.PRODUCT.picture].value = '';
            form.elements[CONST.PRODUCT.price].value = form.elements[CONST.PRODUCT.price].dataset.price;

        } catch (error) {

            // pour le moment on ne va qu'afficher l'erreur
            console.log(error.message);
        } 

    },

    // Supprimer un produit par appel API
    deleteProduct : async (event, id) => {

        try {

            event.preventDefault();
            console.log('Delete: ' + id);

            // === Compléter la suite de la fonction ===

            // Appel API
            const response = await fetch(CONST.API_DOMAIN + CONST.ROUTE.deleteProduct.route + '/' + id, {
                method: CONST.ROUTE.deleteProduct.method
            });
           
            switch(response.status) {

                case CONST.HTTP_STATUS.NoContent:
                    
                    ProductTab.loadList();
                    ProductTab.displayGlobalMessage(CONST.TEXT.productDeleted);

                    break;

                case CONST.HTTP_STATUS.BadRequest:
                    
                    ProductTab.displayGlobalMessage(CONST.TEXT.productNotExists, false);

                    break;

                default :
                    
                    ProductTab.displayGlobalMessage(CONST.TEXT.errorOccurred, false);
                    
                    break;

            }            

        } catch (error) {

            // pour le moment on ne va qu'afficher l'erreur
            console.log(error.message);
        } 
        
    }, 

    // Fonctions utilitaires, pourrait être déplacé dans tools.js
    displayGlobalMessage(message = null, success = null){

        const globalMessage = document.querySelector(ProductTab.globalMessageId);

        if (success ?? true) {

            globalMessage.classList.toggle('text-danger', false);
            globalMessage.classList.toggle('text-success', true);

        } else {

            globalMessage.classList.toggle('text-success', false);
            globalMessage.classList.toggle('text-danger', true);

        }

        globalMessage.textContent = message ?? '';

        if (typeof ProductTab.timerId === "number") {

            clearTimeout(ProductTab.timerId);
            ProductTab.timerId = undefined;

        }
        
        ProductTab.timerId = setTimeout(() => {
            ProductTab.displayGlobalMessage();
        }, 5000);
       
    }, 

    disableFormButtons (form, disable = true) {

        form.querySelectorAll('button').forEach( (b) => {
            b.disabled = disable;
        });

    }

};

export default ProductTab;