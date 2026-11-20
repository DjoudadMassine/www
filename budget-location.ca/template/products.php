<?php

// Par simplicité on ne valide pas l'existence du fichier
require_once CORE . '/Database.php';
require_once SRC . '/ProductDAL.php';

require_once VENDOR . '/RentalFleet/API.php';

$connexion = Database::getConnexion($dbConfig);

$products = [];

$search = $_GET['search'] ?? '';

if (!empty($search)) {

    $search = "%" . strtolower($search) . "%";
    $products = ProductDAL::selectByTitle($connexion, $search);

} else {

    $products = ProductDAL::selectAll($connexion);

}

// Produits provenant de l'API
$apiProducts = API::getProducts();

foreach($apiProducts as $apiProduct) {

    $products[] = [

        'id' => $apiProduct['id'],
        'title' => $apiProduct['name'],
        'description' => '',
        'image' => $apiProduct['picture'],
        'alt' => '',
        'price' => $apiProduct['price'],
        'source' => 'api'

    ];
    
} 
// Fin produits API

?>
<!--Ligne qui contient des colonnes-Row-->
<div class="row">
    
    <?php foreach($products as $product) : ?>

    <!--Colonne-Column-->
    <div class="col-lg-4 d-flex align-items-stretch">                        
            
        <!--Carte-Card-->
        <div class="card mt-4 ">
            
            <?php 
                // Déterminer sur quel domaine est l'image pour avoir le bon URL
                $imgSource = PRODUCT_IMG;

                if (!empty($product['source']) && $product['source'] == 'api'){
                    $imgSource = API_CDN;
                }
            ?>
            
            <img src="<?= $imgSource . '/' . $product['image'] ?>" class="card-img-top" alt="<?= $product['alt'] ?>">
            
            <div class="card-body d-flex flex-column">
                
                <h5 class="card-title"><?= $product['title'] ?></h5>
                <p class="card-text "><?= $product['description'] ?></p>                
                <p class="card-text "><?= $product['price'] ?> $</p>                
                
                <?php if (IS_USER) : ?>
                <a href="" class="btn btn-primary mt-auto align-self-start">Ajouter au panier</a>
                <?php endif; ?>                
                
            </div>
        </div>
        
    </div>
    <!--Colonne-->

    <?php endforeach; ?>    

</div>
<!--Ligne--> 