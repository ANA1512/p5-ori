console.log("salut");

/*****  Connection avec l'API caméras ***/

    
		
        function allCamera(){


		 let request = new XMLHttpRequest();
		
		
		 request.open("GET", "http://localhost:3000/api/cameras");
         
         request.onload= function() {

         	if(this.status=== 200){


          const allCamerasInfos = JSON.parse(request.responseText);

          //alert(allCamerasInfos[1].name);

          console.log(allCamerasInfos);


         	}else{

         		console.log ("La requête n'a pas été envoyé");
         	}

        };
	
    request.send();

      };

      /** Appel de ma fonction**/

      //allCamera();
     /*************************/
    
    
    function cameraStructs(){

    
    const cameraStructs = allCamera();

	cameraStructs.forEach(function(cameraStruct){

       //console.log(cameraStruct);

   });
	};
         

console.log(allCamera);

		

/******  structure la page index HTML ****/ 


// Boucle FOR EACH pour la création de chaque produit sur HTML***

//display 

//let allProductSell = document.getElementById("products"); 

//  Création des balises

/*

let articlePart = document.createElement("article");
let partProd = document.createElement("div");
let imgProd= document.createElement("img");
let nameProd = document.createElement("h3");
let priceProd = document.createElement("p");
let linkPageProd= document.createElement("a");

 

// Ajout des attributs 

//partProd.setAttribute("class","product_part")
imgProd.setAttribute("src","#" );
nameProd.setAttribute("class"," product_name");
priceProd.setAttribute("class", "product_price")
linkPageProd.setAttribute("href", 'page_product.html');


//  Ajout du texte dans la page HTML

imgProd.innerHTML ="mon image";
nameProd.innerHTML = " nom du produit";
priceProd.innerHTML = "prix";
linkPageProd.innerHTML ="#";

// Ajout des éléments dans la page HTML 

allProductSell.appendChild(nameProd);
allProductSell.appendChild(priceProd);
allProductSell.appendChild(imgProd);
allProductSell.appendChild(linkPageProd);


//  Structure de la page PRODUCT*/






