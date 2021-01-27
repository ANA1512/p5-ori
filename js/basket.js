idCameras:"";
  idCameras= location.search.substring(4); // just the number
  console.log(idCameras);
 
/******API FECTH****/
const apiUrl = fetch('http://localhost:3000/api/cameras/')
        
    apiUrl.then(async(responseData)=>{
        console.log(responseData);

        const response = await responseData.json();
        console.log(response);
 
   
   }); 

     function display(){ 

        //position dans HTML ok
        let dispOutput= document.getElementById('test'); 
        
        //number of data in LocalStorage
        console.log(JSON.parse(localStorage.getItem('data')));
        
        //loops to get every item on localStorage to html
        for(let i=0; i<localStorage.getItem('data').length; i++){ 

        let localBasket= JSON.parse(localStorage.getItem('data'));
        
         //HTML tag 
         let name= document.createElement('p');
         let price = document.createElement('p');
         let imgProd = document.createElement('img');
         let quantity= document.createElement('input');

         //add attribute
         imgProd.setAttribute("src", localBasket[i].imageUrl);
         quantity.setAttribute("type", "number");
         quantity.setAttribute("value", 1);
         quantity.setAttribute("id","quantity");

         //add tag
         dispOutput.appendChild(name);
         dispOutput.appendChild(price);
         dispOutput.appendChild(quantity);


         //tag content
         name.innerHTML=localBasket[i].name;
         price.innerHTML=localBasket[i].price;         
  
     } 
  
  }; 

display();



  

