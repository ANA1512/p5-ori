
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
console.log('contenu panier', localBasket);

console.log('localBasket', localBasket);


// init new basket
let editedBasket = []   
let index = {};

//ADD quantity each click on product
localBasket.forEach(element => {
 addQuantity(element);

} );
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
         
         <td id= "price">${editedBasket[index].price}</td>
         <td><input  type="number" value=${editedBasket[index].quantity} id="quantite" onclick="ajouter()"></td>
         <td id= "totalUnit"></td>
         <td><button id="supprimer" onclick="suppression('${editedBasket[index]._id}')">SUPPRIMER</button></td>
         </tr>

         </tbody>
         </table>
         `
        //Somme total et nombre total Item 
        totalAllProd.innerHTML ="total:" +" "+(total+=editedBasket[index].price*editedBasket[index].quantity)+ "€"+" "+"("+localBasket.length+")";
        //console.log(totalAllProd);

      
       });
    };

    display();

/*********************************************/
    function ajouter(){ 
     
  



     let quantity= parseInt(document.getElementById("quantite").value);
     let quantityUnit= editedBasket[index].quantity +=1;
      

  

   };



/**********************************************/
 
 function suppression(id){
      
    //console.log("suppression  javascript shopping");
    
    let list= localBasket.filter(item => {
      return item._id != id;
    });

   localBasket=list;
   console.log(localBasket);
   console.log(editedBasket);
   localStorage.setItem('data', JSON.stringify(list));
   location.reload();


 };
















