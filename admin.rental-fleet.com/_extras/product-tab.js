import { API_DOMAIN, ROUTE } from './constants';
import * as CONST from './constants'

const ProductTab = {

    // Identifiants des éléments HTML du panneau
    createFormId : '#product #product-form',
    listContainerId : '#product #product-list',
    globalMessageId : '#product #global-message',
    timerId : undefined,
        
    myList : async () => {               

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
                              
            // === Idée de code à utiliser pour la suite ===
            // form.reset();
            // form.elements['name'].focus();
            // response.headers.get('Location')
            // ProductTab.loadList();            
            // ProductTab.disableFormButtons(form,false);
            
            // === Utilisez les constantes pour les textes ===
            // ProductTab.displayGlobalMessage('The product has been created', true);
            // ProductTab.displayGlobalMessage('The product name already exists',false);
            // ProductTab.displayGlobalMessage('Fields are missing or values are invalid',false);
            // ProductTab.displayGlobalMessage('An error has occurred', false);

            // === Utilisez un switch() pour analyser le status, c'est plus "propre" ===
            

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

            const data = {

                name : form.elements[CONST.PRODUCT.name].value,

                // .split('\\').pop() est temporaire car onsimule le fichier en utilisant son nom
                picture : form.elements[CONST.PRODUCT.picture].value.split('\\').pop(),

                price : form.elements[CONST.PRODUCT.price].value

            };

            console.log(data);
            
            // Normalement ici on devrait valider les données avant l'appel à l'API

            // === Compléter la suite de la fonction ===

            // Appel API PUT ou PATCH ?

            // Supposons un succès pour tester la suite
            const response = {};
            response.status = 200;

            switch (response.status) {

                case CONST.HTTP_STATUS.OK:
                
                    form.elements[CONST.PRODUCT.name].dataset.name = data.name;

                    form.elements[CONST.PRODUCT.picture].dataset.picture = data.picture;
                    form.elements[CONST.PRODUCT.picture].title = data.picture;
                    form.elements[CONST.PRODUCT.picture].value = '';

                    form.elements[CONST.PRODUCT.price].dataset.price = data.price;                      

                    ProductTab.displayGlobalMessage(CONST.TEXT.productSaved);

                    break;

                case CONST.HTTP_STATUS.NotFound:
                
                    ProductTab.displayGlobalMessage(CONST.TEXT.productNotExists, false);

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
            
            // === Utilisez un switch() pour analyser le status, c'est plus "propre" ===
           
                        

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