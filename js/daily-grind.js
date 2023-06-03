//alert("can you see this");

/*Here are the items we believe we nee to produce each days of coffee

       Pic - image src
       Alt - the alt tag for the image
     Color - color to match the image
      Desc - description of the coffee
      Name - Name of the coffee
       Day - day of the week*/ 






let myDate = new Date();
let today = myDate.getDay();
today = 3;
switch (today){
   case 2:
    today= "Tuesday";
   break;

   case 3:
    today= "Wednesday";
   break;

   default:
today = "Not sure what day it is";
}



coffee = {
    name: "Bubble Tea",
    color: "pink",
    pic:"images/bubble-tea.jpg",
    alt:"A picture of a bubble tea",
    Day:"Wednesday",
    desc:`I like me some bubble tea!`
}


//alert(today);
console.log(coffee);
