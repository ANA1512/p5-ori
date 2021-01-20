
 /***********PRODUCT PAGE **********************/

  idCameras:"";
  idCameras= location.search.substring(4); // just the number
  console.log( idCameras);
 


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
        
        //Page structure       
        let paraName= document.createElement("p");
        paraName.innerHTML=response[i].name;
        product_select.appendChild(paraName);

        //Structure lenses option
        
        //let selecCustom = document.createElement("select");
         let selecCustom = document.createElement("div");
        let selectlenses = document.createElement("option");
        

        let option =document.getElementById("option_lenses");
        option.innerHTML=selectlenses;

        // Console message
        console.log("you are on this product:"+ " " + response[i].name);

      }else{

        console.log ('Product page not laoded');
      }
     }
     
});



