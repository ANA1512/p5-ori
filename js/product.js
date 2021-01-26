
 /***********PRODUCT PAGE **********************/

  idCameras:"";
  idCameras= location.search.substring(4); // just the number
  console.log(idCameras);
  
/******API FECTH****/


const apiUrl = fetch('http://localhost:3000/api/cameras/')
        
    apiUrl.then(async(responseData)=>{
        console.log(responseData);

        const response = await responseData.json();
        console.log(response);

     // Loop on products
     for(let i=0; i<response.length; i++){

        //Id page and id for each product
        if(idCameras==response[i]._id){
        
        //Page one product structure       
        let paraName= document.createElement("h3");
        let imgProd = document.createElement("img");
        let priceProd = document.createElement("p");
        let descriptionProd = document.createElement("p");
        
        //add img
        imgProd.setAttribute("src",response[i].imageUrl);
        
        //add contains
        paraName.innerHTML=response[i].name;
        descriptionProd.innerHTML=response[i].description;
        priceProd.innerHTML= response[i].price +" "+"€";
        
        //add to HTML 
        product_select.appendChild(paraName);
        product_select.appendChild(imgProd);
        product_select.appendChild(priceProd);
        product_select.appendChild(descriptionProd);

 /*Structure lenses option for HTML page*/
        
        let selectCustom = document.getElementById("option_lenses");
        
        //Create tag for HTML page
        let customPart = document.createElement("select");
        let optionChoice = document.createElement("option");
        let optionOne = document.createElement("option");
        let optionSecond = document.createElement("option");

        //add tag in HTML page
        selectCustom.appendChild(customPart);
        customPart.appendChild(optionChoice);
        customPart.appendChild(optionOne);
        customPart.appendChild(optionSecond);
        
        //Option choice
        optionChoice.innerHTML= "Sélectionner une option";
        optionOne.innerHTML =response[i].lenses[0];
        optionSecond.innerHTML =response[i].lenses[1];

        /*Redirect button to basket page*/

     
        let btn = document.getElementById("btn");
        btn.innerHTML="Ajouter au panier";


        /*Add  and save buyer basket into localStorage*/
       
        let button=btn.addEventListener("click", save);

                function save(){

                    if(localStorage.getItem("data")==null){

                        localStorage.setItem("data",'[]');
                      
                    }

                    let old =JSON.parse(localStorage.getItem("data"));
                    old.push(response[i].name);
                    

                    localStorage.setItem('data',JSON.stringify(old));
                    

                    //redirect
                    location.href="basket_page.html?id="+ response[i]._id +"?name=" + response[i].name +"?price="+response[i].price;
                    
                    
                };

         
               /* Console message Intro prod*/
                 console.log("you are on this product:"+ " " + response[i].name);


        

    
     }
  
    };

        
    }); 
 


  






            
    

     






