
// total all page
let totalAllProd = document.getElementById("total");
let total=[];
total =0;

//total unit price
let totalUnit= document.getElementById("totalUnit");


// suppress buton
let buttonSup = document.getElementById("supprimer");
let itemsCart =document.getElementById("itemsCart");

/*********************************************************/
let localBasket=  JSON.parse(localStorage.getItem('data'));
//console.log('contenu panier', localBasket);

console.log('localBasket', localBasket);



// init new basket
let editedBasket = []   
let index = {};

//ADD quantity each click on product
localBasket.forEach(element => {
 addQuantity(element);

});
// New basket content
console.log('editedBasket', editedBasket);

// ADD quantity ( product to basket)
function addQuantity(obj) {
   if (obj._id in index) {
       index[obj._id].quantity += 1;
   } else {
       index[obj._id] = obj;
       obj.quantity = 1;
       editedBasket.push(obj);
   }

};



/**********************************************************/
function display(){ 


   let itemsdisplay= document.getElementById("items");

        //Structure tableau 
        itemsdisplay.innerHTML =''

        editedBasket.forEach((items,index)=>{ 
        // console.log(editedBasket[index]);

        
         itemsdisplay.innerHTML += `  

         <table class="table">
         <tbody>

         <tr id= "itemsCart">
         <td>${editedBasket[index].name}</td>
         <td id= "price"  type="text" >${editedBasket[index].price}</td>

        
         <td><input  type="number" value='${editedBasket[index].quantity}' id="quantite" onclick="ajout()"></td>
         

         <td id= "totalUnit"></td>
         <td><button id="supprimer" onclick="suppression('${editedBasket[index]._id}')">SUPPRIMER</button></td>
         </tr>

         </tbody>
         </table>
         `
        //Somme total et nombre total Item 
        totalAllProd.innerHTML ="total:" +" "+(total+=editedBasket[index].price*editedBasket[index].quantity)+ "€"+" "+"("+localBasket.length+")";
       // console.log(totalAllProd);
        

                                      

       

      
       });
    };

    display();

/********************ADD QUANTITY*************************/

function ajout(){

   
   let input= document.getElementById("quantite");
 
   let add= input.value = parseInt(input.value);
    //console.log(add);



      let pos = editedBasket[0].quantity;
      
      console.log(pos);
      
      editedBasket.splice(pos,1, add);

    
 

};




/****************DELETE ******************************/
 
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


/*************************FORMS******************/

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



/********variable texte erreur ********/
let note= document.getElementById("note");
let text= document.getElementById("text");
let text1= document.getElementById("text-1");
let test= document.getElementById("test");
let one= document.getElementById("one");
let two= document.getElementById("two");
/***** variable icone *****/

const icone1= document.querySelector(".icone1"); // ! invalide
const icone2= document.querySelector(".icone2"); //  v de valide
const icone3= document.querySelector(".icone3"); //x champs vide


const icone4= document.querySelector(".icone4"); // ! invalide
const icone5= document.querySelector(".icone5"); //  v de valide
const icone6= document.querySelector(".icone6"); //x champs vide
/********* OBJET  REGEXP *******/

// validation mail
const emailRegExp ='^[ a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$';

/****STRUCTURE FORM********/

let infoPerso= document.createElement("h3");
let contact= document.getElementById("formulaire");





/**********Vérification du champs mail apres submit***************/

document.forms["inscription"].addEventListener("submit", function(e){
    
  e.preventDefault();
  let erreur;
  let inputs= this;

    
  if(inputs["mail"].value != emailRegExp){
       text1.innerHTML = "Veuillez entrer votre email";
       text1.style.color="red";

    
     }



/* Vérification de tous les champs*/
  
  for (let i=0; i<inputs.length; i++){

      

        if(!inputs[i].value){
          erreur= "Veuillez remplir tous les champs";
         // button.style.visibility="hidden"; 
        }
    }

     if(erreur){
        
    e.preventDefault();
    document.getElementById("erreur").innerHTML = "Votre formulaire comporte des erreurs";
  

    }else{

        alert('formulaire envoyé!'); 

      }

  
});


/****************Vérification du champs mail uniquement*******/

function check(){

        // si mail est ok
         if(mail.value.match(emailRegExp)){

          icone1.style.display="none";
          icone2.style.display="block";
          one.textContent="email ok"; // mail valid
          one.style.color="lightgreen";
          test.style.display="none"; // mail invalid disparait
          //two.style.visibility="hidden"; // remplir champs si vide disparaît
          icone3.style.display="none";
         
          

        // Si mail vide 
          
        }else if(mail.value ==''){

         //console.log("le mail est vide");
         
         icone3.style.display="block"; //x
         icone1.style.visibility="hidden"; // ! disparait
         one.style.visibility="hidden";
         two.textContent="Veuillez remplir le champs";
         two.style.color="blue"; // couleur du message
        
       }

        //si mail est faux

         if(!mail.value.match(emailRegExp)){ 

          icone1.style.display="block";//!
          icone2.style.display="none"; // v
          test.textContent= "Votre email est incorrecte";
          test.style.color="purple";

 
        }


}

/****** CHAMPS MAIL VALIDATION ******/

function ok(){

    if(inputs["mail"].value === confirmation.value){

      //console.log("perfect");
      msg.textContent= "votre mail de confirmation est correcte";
      msg.style.color="lightgreen";
      icone1.style.display="none";
      icone2.style.display="block";
      icone3.style.display="none";


    }else if(inputs["mail"].value != confirmation.value){
      console.log("erreur mail");
      msg.textContent=" votre mail de confirmation est incorrecte";
      msg.style.color="red";
      icone1.style.display="block";
      icone2.style.display="none";
      icone3.style.display="none";

    }
    
    if(mail.value ==''){

       msg.textContent="vous devez remplir le champs mail précédent";
       msg.style.color="orange";
      icone1.style.display="none";
      icone2.style.display="none";
      icone6.style.display="block";
      
    }
  


  }

  /****************FIN CHAMPS MAIL VALIDATION**************/


