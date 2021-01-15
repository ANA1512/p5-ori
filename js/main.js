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
	let description = document.createElement("p");
	let priceProd = document.createElement("p");


	imgProd.setAttribute("src",responses.imageUrl);
	nameProd.innerHTML= responses.name;
	description.innerHTML= responses.description;
	priceProd.innerHTML= responses.price;


	liste.appendChild(imgProd);
	liste.appendChild(nameProd);
	liste.appendChild(priceProd);
	liste.appendChild(description);

  
	
  })
 
 });




  

    

