
let totalAllProd = document.getElementById("total");
let total =0;
let buttonSup = document.getElementById("supprimer");
//let quantity= document.getElementById("quantite").value;


async function display(){ 

         let localBasket= await JSON.parse(localStorage.getItem('data'));
         console.log(localBasket);
         let itemsdisplay= document.getElementById("items");
        
         itemsdisplay.innerHTML =''

         localBasket.forEach((items,index)=>{ 
          itemsdisplay.innerHTML += `  

          <table class="table">
                    <tbody>      
                        <tr>
                            <td>${localBasket[index].name}</td>
                            <td>${localBasket[index].imageUrl}</td>
                            <td>${localBasket[index].price}</td>
                            <td><input  type="number" value="1" id="quantite" ></td>
                            <td><button id="supprimer" onclick= "supprimer('${localBasket[index].name}')">SUPPRIMER</button></td>
                         </tr>
                    </tbody>
                </table>
           `

           totalAllProd.innerHTML ="total:" +" "+(total+=localBasket[index].price)+ "€"+" "+"("+localBasket.length+")";
          

       });
};

display();

