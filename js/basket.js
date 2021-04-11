
/******************BASKET PAGE*********************/

//Variables for the BASKET

//All products selected and store
let localBasket=  JSON.parse(localStorage.getItem('data'));

//Initialization of a new basket including quantity
let editedBasket = [];   
let index = {};

// Total for all products
let totalAllProd = document.getElementById("total");
let total=[];
total =0;

// Suppress item - trash icone (page structure)
let buttonSup = document.getElementById("supprimer");
let itemsCart =document.getElementById("itemsCart");

/*********************************************************/

// Test basket content and store in the localStorage
console.log('localBasket', localBasket);

// New basket content
console.log('editedBasket', editedBasket);

/********************ADD QUANTITY*************************/


//ADD quantity each click on product
localBasket.forEach(element => {
 addQuantity(element);

});

// ADD quantity (in editedBasket)
function addQuantity(obj) {
    
    if (obj._id in index) {
       index[obj._id].quantity += 1;
   } else {
       index[obj._id] = obj;
       obj.quantity = 1;
       editedBasket.push(obj);
   }

};

/****************DELETE ONE PRODUCT (icone) ******************************/
 
 function suppression(id){
         
    let list= localBasket.filter(item => {
      return item._id != id;
    });

     localBasket=list;
     console.log(localBasket);
     console.log(editedBasket);
     localStorage.setItem('data', JSON.stringify(list));
     location.reload();


 };

 /****PANIER VIDE ( editedbasket et localStorage)*******/

if(editedBasket.length==0 && localBasket.length==0 ){
    
    let nothing= document.getElementById("items");
    let panierVide = document.createElement("p");
    panierVide.innerHTML = "VOTRE PANIER EST VIDE"; 
    nothing.appendChild(panierVide);
    panierVide.style.color="#ff33cc";
    console.log( "Votre panier est vide");

    let removeForm= document.getElementById("container");
    let titleForm= document.getElementById("formulaire");
    titleForm.style.visibility="hidden";
    removeForm.style.visibility="hidden";
    localStorage.clear();
    
 };

/***********************PAGE STRUCTURE***********************************/
function display(){ 

   let itemsdisplay= document.getElementById("items");

        //Table structure 
        itemsdisplay.innerHTML =''
        
        //Loop forEach for Item in new Basket
        editedBasket.forEach((items,index)=>{ 
        
        //Display all products in HTML page
         itemsdisplay.innerHTML += `  
         
         <table class="table">
         <tbody>

         <tr id= "itemsCart">
         <td>${editedBasket[index].name}</td>
         <td><img src=${editedBasket[index].imageUrl} class="cartpict">${editedBasket[index].lenses[index]}</td>
         <td id= "price"  type="number" >${editedBasket[index].price}€</td>

         <td><input  type="number" value='${editedBasket[index].quantity}' id="quantite" onclick="ajout(${editedBasket[index]._id})"></td>
         
         <td><div id="supprimer" onclick="suppression('${editedBasket[index]._id}')"><i class="far fa-trash-alt"></i></div></td>
         </tr>
         </tbody>
         </table>
         `
        //Total (sum of all products)
        totalAllProd.innerHTML ="total:" +" "+(total+=editedBasket[index].price*editedBasket[index].quantity)+ "€"+" "+"("+localBasket.length+")";     
       });
    };

    display();





/*************************FORMS********************************************************/

//variables 
let erreur = document.getElementById("erreur");
let inputs = document.getElementsByTagName("input");
let nom = document. getElementById("nom"); 
let mail = document.getElementById("mail");
let confirmation= document.getElementById("mail-confirm");
let button = document.getElementById("button");
let inscription = document.getElementById("inscription");
let msg = document.getElementById("msg");
let password = document.getElementById("mdp");

let passwordMsg = document.getElementById("passwordMsg");
let passError= document.getElementById("passError");



/********variable texte erreur *******/
let note= document.getElementById("note");
let text= document.getElementById("text");
let text1= document.getElementById("text-1");
let test1= document.getElementById("test");
let one= document.getElementById("one");
let two= document.getElementById("two");
/***** variable icone *****/

const iconeA= document.querySelector(".iconeA");
const icone1= document.querySelector(".icone1"); // ! invalide
const icone2= document.querySelector(".icone2"); //  v de valide
const icone3= document.querySelector(".icone3"); //x champs vide


/********* OBJET  REGEXP *******/

// validation mail
const emailRegExp ='^[ a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$';

/****STRUCTURE FORM********/

let infoPerso= document.createElement("h3");
let contact= document.getElementById("formulaire");

infoPerso.innerHTML=" Formulaire";
contact.appendChild(infoPerso);


/****************Test de Vérification du champs mail uniquement*******/

function check(){

        // si mail est ok
         if(mail.value.match(emailRegExp)){
          
          one.textContent="email ok"; // mail valid
          one.style.color="lightgreen";
          
          icone2.style.visibility="visible"; //valid
          icone1.style.visibility="hidden"; //invalid !
         
          test.style.visibility="hidden"; // mail invalid disparait
          two.style.visibility="hidden"; // remplir champs si vide disparaît
          icone3.style.visibility="hidden";
          text1.style.visibility="hidden";

         
          

        // Si mail vide 
          
        }else if(mail.value ==''){
         
         two.textContent="Veuillez remplir le champs";
         button.style.visibility="hidden";
         two.style.color="blue"; // couleur du message 
         
         icone3.style.visibility="visible"; //x
         icone1.style.visibility="hidden"; // ! disparait
         one.style.visibility="hidden";
           
       }

        //si mail est faux

         if(!mail.value.match(emailRegExp)){ 
          
          test1.textContent= "Votre email est incorrecte";
          test1.style.color="purple";
          icone1.style.visibility="visible";//!
          icone2.style.visibility="hidden"; // v
          icone3.style.visibility= "hidden";
          button.style.visibility="hidden"; 
        }

}

/****** CHAMPS MAIL VALIDATION ******/

function ok(){


    //mail de confirmation ok
    if(inputs["mail"].value === confirmation.value){
      msg.textContent= "votre mail de confirmation est correcte";
      msg.style.color="lightgreen";
      icone2.style.visibility="visible"; // v valide ok
      button.style.visibility="visible"; 
      icone1.style.visibility="hidden";//!
      icone3.style.visibility="hidden";//x
      
    //mail de confirmation erreur
    }else if(inputs["mail"].value != confirmation.value){
      console.log("erreur mail");
      msg.textContent=" votre mail de confirmation est incorrecte";
      msg.style.color="red";
      icone1.style.visibility="visible"; //! erreur 
      icone2.style.visibility="hidden";
      icone3.style.visibility="hidden";
      button.style.visibility="hidden"; 

    }
    
    //mail de confirmation vide
    if(mail.value ==''){

      msg.textContent="vous devez remplir le champs mail précédent";
      msg.style.color="orange";
      icone3.style.visibility="visible";// x croix 
      icone1.style.visibility="hidden";
      icone2.style.visibility="hidden";
      button.style.visibility="hidden"; 
      
    }
  }

  /****************FIN CHAMPS MAIL VALIDATION**************/

/**********Vérification du champs mail apres submit*************/

document.forms["inscription"].addEventListener("submit", function(e){
    
  e.preventDefault();
  let erreur;
  let inputs= this;

  if(inputs["mail"].value != emailRegExp){
       text1.innerHTML = "ERROR";
       text1.style.color="red";

     }

/* Vérification de tous les champs*/
  
  for (let i=0; i<inputs.length; i++){

    if(!inputs[i].value){
          erreur= "Veuillez remplir tous les champs";
          button.style.visibility="hidden"; 
        }

    }

     if(erreur){
        
        e.preventDefault();
        let errMsg= document.getElementById("erreur");
         errMsg.textContent = "Votre formulaire comporte des erreurs";
         errMsg.style.color= "yellow";
    }else{
        
        //erreur.style.visibility="hidden";
        button.style.visibility="visible";
    }
         
 /* Enregistrement des données du formulaire dans la session storage*/
        
        // récuperer les inputs et les mettre dans le constructor

        let inputName= document.getElementById("nom").value;
        let inputFirstName = document.getElementById("prenom").value;
       // let inputTel = document.getElementById("telephone").value;
        let inputRue = document.getElementById("rue").value;
       // let inputCode= document.getElementById("code").value;
        let inputVille= document.getElementById("ville").value; 
       // let inputPays= document.getElementById("pays").value;
        let inputMail = document.getElementById("mail").value; 
       // let inputConfirMail = document.getElementById("mail-confirm").value;

// Récuperation des id pour les produits du panier
        let products=[];
        const productSelected=[];

        for(i=0; i<editedBasket.length; i++){
        
        productSelected.push(editedBasket[i]._id);
        }

        console.log(productSelected);

// Constructor pour récupérer les infos contact et produits du formulaire
        order={

            contact: {
              firstName:inputFirstName,
              lastName: inputName,
              address:inputRue ,
              city: inputVille,
              email: inputMail
            },
            products: productSelected

        }
       
         console.log('infoContact',order);
      
/****************ENVOI DU FORMULAIRE A L API**************************/
 
       fetch('http://localhost:3000/api/cameras/order',{

            method: "POST",

            body:JSON.stringify(order),

            headers: {"Content-Type":"application/json"}

       })

       .then(response=> response.json())
        //save info and orderId create in localStorage
       .then(json=> localStorage.setItem('infoProduit', JSON.stringify(json)));

        if(editedBasket !=null){

          alert( "Veuillez confirmer votre commande");
          location.href = "confirmation_page.html";
        }else{
          alert ("votre panier n'est pas valide");
        }
         
});



       


















