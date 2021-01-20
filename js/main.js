/*********CONNECTION API*************/

function allCam(){ 

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

  
 /*Home Page build*/

    //create HTML tag
	response.forEach(function(responses){ 
  let liste = document.getElementById("test");
	let imgProd = document.createElement("img");
	let nameProd = document.createElement("h2");
	let infoProd = document.createElement("a");
	let priceProd = document.createElement("p");
	
  //create attribute
	imgProd.setAttribute("src",responses.imageUrl);
	//redirection to Page Product
	infoProd.setAttribute("href", "product_page.html?id=" + responses._id);

	//tag contains
	nameProd.innerHTML= responses.name;
	infoProd.innerHTML="En Savoir Plus";
	priceProd.innerHTML= responses.price +" "+"€";
	
    // DOM modif
	liste.appendChild(imgProd);
	liste.appendChild(nameProd);
	liste.appendChild(priceProd);
	liste.appendChild(infoProd);

   })
	
 });

};

allCam();


 


 
  
   
 

   
 




   
  

  

 




	


