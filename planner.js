



   function savePlan(){
    
    var inputSaver = $(".form-control").val();

    console.log(localStorage.setItem("inputs", inputSaver)); 

  var finalPlan = localStorage.getItem("inputs");

   
   $(".form-control").text(finalPlan);



   }

   $(".btn").click(savePlan());
 

  
  
  
  
  
  
  
  
  





//use create element input
//parse local storage to save input
//use create element for buttons