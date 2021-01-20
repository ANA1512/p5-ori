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





/**************PANIER*****************/


    let suppCart = document.getElementById("retirer");
    let resultat= document.getElementById("total");


/* selection article dans le panier*/

/*multiplier la quantité par le prix sur un article*/


function multiply(){


    let nombreUn = document.getElementById("prix").value;
    let nombreDeux= document.getElementById("quantite").value;

    //let result=(Number(parseInt(a))*Number(parseInt(b));

    resultat.innerHTML="total:" +  +(Number(nombreUn)*Number(nombreDeux)) + "€";

    }


/* supprimer ma cart du panier*/


let quantite= document.getElementById("quantite");
let input= document.querySelector("input");
let prix= document.getElementById("prix");
//let resultat=document.getElementById("total");

    suppCart.addEventListener('click',suppression);

    function suppression(){

    suppCart.parentElement.parentElement.remove();
    resultat.remove();

    }


/**************FORMULAIRE***********/

