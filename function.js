
// ===========================Age calculator============================

function agecal(name,year){
  
    let date    = new Date();
    let age     = date.getFullYear()-year
    let dataage = agecheck(age)
    return`<p class = 'alert alert-${dataage.status}'>Hii ${name} you are ${age} years old and you are also ${dataage.name}</p>`



}



function agecheck(age){

  if(age > 0 && age < 10){
      return{
          name   : 'babu',
          status : 'success'
      }
  }else if(age > 10 && age < 17){
      return{
          name   : 'Kishor',
          status : 'primary'
      }
  }else if(age > 17 && age < 35){
    return{
        name   : 'Togboge Jubok',
        status : 'warning  '
    }
 }else if(age > 35 && age < 70){
    return{
        name   : 'Boyosko',
        status : 'secondary'
    }
 }else if(age > 70 && age < 100){
    return{
        name   : 'Briddho',
        status : 'dark'
    }
 }else{
     return{
         name   : 'jin/bhot',
         status : 'danger'
     }
 }




};




//=======================Marrige calculator==========================

function marrycal(sharmin,akter){

   let  somoy = new Date();
    let motage = somoy.getFullYear()-akter;

   let marryages = marrizeage(motage)

   return` <b class = 'alert alert-${marryages.status}'> hii ${sharmin} you are ${motage} and  ${marryages.name}  </b>`

//    return`hii ${sharmin} and you are ${motage}`




}



function marrizeage(ages){
    if(ages > 0 && ages < 10){
        return{
            name  : 'you are babu..your age is not perfect ...to marrige',
            status : 'success'
        };
    }else if(ages > 10 && ages < 17){
        return{
            name  : 'you are kishor/kishori..your age is not perfect for marrige',
            status : 'primary'
        };
    }else if(ages > 17 && ages < 30){
        return{
            name  : 'you are also jubok/juboti..your age is perfect for marrige ',
            status : 'warning'
        };
    }else if(ages > 30 && ages < 50){
        return{
            name  : 'your age is not perfect for marrige.',
            status : 'danger'
        };
    }else if(ages > 50 && ages < 100){
        return{
            name  : 'you are briddho...marrige is not perfect for you',
            status : 'info'
        };
    }else{
        return{
            name  : 'you are jin/bhot...how can u think marrige?',
            status : 'dark'
        };
    }
}




// =======================Currency converter===================

 function currencycal(amount,type){
  

    if(type == 'USD'){
        return `${amount} USD  = ${amount * 86 .toFixed(2)} BDT`;
    } if(type == 'CAD'){
        return `${amount} CAD  = ${amount * 96 .toFixed(2)} BDT`;
    } if(type == 'Pound'){
        return `${amount} Pound = ${amount * 115 .toFixed(2)} BDT`;
    } if(type == 'Euro'){
        return `${amount} Euro  = ${amount * 88 .toFixed(2)} BDT`;
    }
    

 };





