 
 // <====================== Age calculator ======================>

  const  name   = document.querySelector('#name');
  const  year   = document.querySelector('#year');
  const  button = document.querySelector('#button');
  const  output = document.querySelector('#output');

  
  button.addEventListener('click',function(){

    output.innerHTML =  agecal(name.value,year.value);
    name.value = '';
    year.value = '';
      
  });



  //<======================= Marrige calculator==========================>

 const agebtn = document.querySelector('#agebtn');
 const result = document.querySelector('#result');
 const sal   = document.querySelector('#sal');
 const naam = document.querySelector('#naam');

 agebtn.addEventListener('click',function(){
    result.innerHTML = marrycal(naam.value,sal.value);
    
    
    
 });
 



/**
 * <======================== currency converter =========================>
 */
 const bangladesh = document.querySelector('#bangladesh');
 const currency   = document.querySelector('#currency');
 const currencyCheck = document.querySelector('#currencyCheck');
 const outout = document.querySelector('#outout');

 currencyCheck.addEventListener('click',function(){
  

  outout.innerHTML = currencycal(bangladesh.value,currency.value)
 

 });




 /**
  *<===================== Form validation ====================>
  */
   

  const Sign_up = document.querySelector('#Sign_up');
  const text = document.querySelector('#text');
  const email = document.querySelector('#email');
  const uname = document.querySelector('#uname');
  const submit = document.querySelector('#submit');
  const msg = document.querySelector('#msg');
  const amr = document.querySelector('#amr');

  Sign_up.addEventListener('submit',function(e){
    e.preventDefault()


    if(text.value == ''){
      text.style.border = '1px solid red'
    }else{
      text.style.border = '1px solid black'
    }

    if(email.value == ''){
      email.style.border = '1px solid red'
    }else{
      email.style.border = '1px solid black'
    }

    if(uname.value == ''){
      uname.style.border = '1px solid red'
    }else{
      uname.style.border = '1px solid black'
    }




   

     if(text.value == '' || email.value == '' || uname.value == '' ){
     msg.innerHTML = `<p class = 'alert alert-danger'>All fields are required !</p>`
    }else{
      msg.innerHTML = `<p class = 'alert alert-success'> *Data Stable*</p>`
    }
    


});



const boxdiv = document.querySelector(' .boxdiv input');
const eye   = document.querySelector('#eye');


boxdiv.addEventListener('keyup',function(){
  let usersharmin = boxdiv.value;

  let pettern = /^[a-z0-9_]{4,12}$/;

  if(usersharmin == ''){
    eye.innerHTML = `<i class = 'alert alert-danger'>please enter usename</i>`
  }else if(pettern.test(usersharmin) == false ){
    eye.innerHTML = `<p class = 'alert alert-warning'>please select more then 4 and less then 12 word</p>`
  }
  
  else{
    eye.innerHTML = '';
  }
  
});








 


  