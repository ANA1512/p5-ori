/*********CONNECTION API**************/

    const apiUrl = fetch('http://localhost:3000/api/cameras/')
         
    apiUrl.then(async(responseData)=>{
        console.log(responseData);

        const response = await responseData.json();
        console.log(response);
        
        
        try{

        const cameraImg= response[0].imageUrl;
        console.log(cameraImg);


        }catch(err){
          
          console.log(error);

        }

 /* Home Page build*/

	response.forEach(function(responses){ 
    let liste = document.getElementById("test");
	let imgProd = document.createElement("img");
	let nameProd = document.createElement("h2");
	let detailProd = document.createElement("a");
	let priceProd = document.createElement("p");
	
	



	imgProd.setAttribute("src",responses.imageUrl);
	//redirection to Page Product
	detailProd.setAttribute("href", "product_page.html?id=" + responses._id);

	
	nameProd.innerHTML= responses.name;
	detailProd.innerHTML="En Savoir Plus";
	priceProd.innerHTML= responses.price +" "+"€";
	


	liste.appendChild(imgProd);
	liste.appendChild(nameProd);
	liste.appendChild(priceProd);
	liste.appendChild(detailProd);

  
	
  })
 
 });

/*************PRODUCT PAGE****************/




	let product= document.getElementById("product_select");
  	let prodImg =document.createElement("img");
    let prodName =document.createElement("h2");
    let prodDescription= document.createElement("p");
    let prodPrice= document.createElement("p");





  //imgProd.setAttribute("src",responses.imageUrl);

   product.appendChild(prodImg);
   product.appendChild(prodName);
   product.appendChild(prodPrice);


  