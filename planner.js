
let m = moment().format('MMMM Do YYYY, h:mm:ss a');   
console.log(m);
$("#currentDay").text(m);

let h = moment().format('HH');

var mainDiv = document.getElementById("container");





$(document).ready(function(){

   var t = 9;

   for (var i=0; i<9; i++){

   var rows = $("<div>");

   rows.addClass("row");

   rows.css("border", "2px solid black");
//trying to make the row coloring thingy work



var x = parseInt(h.substring(0, 2))



  if (t == x){
     rows.addClass("present");
  }
  
   if (t > x){
      rows.addClass("future");
   }

   else{
      rows.addClass("past");
   }

   $(mainDiv).append(rows);


   var time = $("<div>");
   

   time.addClass("col-sm-2");

   var para = $("<p>");

   if (t >= 9) {
      para.text(t + "AM");

   }

   if (t == 12){
      para.text(t + "PM");

   }

   else {
      para.text(t%12 + "PM");
   }

   rows.append(time);

   time.append(para);

   var textBoxdiv = $("<div>");

   var inputSpot = $("<input>");

   inputSpot.attr("type", "text");

   inputSpot.attr("id", "plans" + i);


   var local = localStorage.getItem("hour" + i); //set to hour

   if (local){

      inputSpot.val(local);
   }

   textBoxdiv.addClass("col-md-8");

   textBoxdiv.append(inputSpot);

   rows.append(textBoxdiv);

   var saveBtn = $("<div>");

   saveBtn.addClass("col-sm-2");

   var inputBtn = $("<input>" + "Save" + "</input>");

   

   inputBtn.attr("type", "button");

   inputBtn.width("100px");

   inputBtn.attr("id", "save" + i);
   
   inputBtn.attr("onclick", "savePlan("+i +"   )");

   var textStuff =  "#save" + i;

   

   inputBtn.text("Save");

   saveBtn.append(inputBtn);

   rows.append(saveBtn);

   




t++;
   }



})




   function savePlan(index ){
    
      
  var certainText = document.getElementById("plans" + index);

  certainText.value;

  localStorage.setItem("hour" + index, certainText.value);



   }



  
  
  
  
  
  
  
  
  





