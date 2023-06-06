//alert("can you see this");

/*Here are the items we believe we nee to produce each days of coffee

       Pic - image src
       Alt - the alt tag for the image
     Color - color to match the image
      Desc - description of the coffee
      Name - Name of the coffee
       Day - day of the week*/ 




  function coffeeTemplate(coffee) {
    return `
      <p>
        <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
        <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is
        <strong class="feature">${coffee.name}</strong>, ${coffee.desc}
      </p>
    `;
  }


let myDate = new Date();
let today = myDate.getDay();

//today = 1;
  switch (today) {
    case 1:
      today = "Monday";
      coffee = {
        name: "Bubble Tea",
        color: "pink",
        pic: "images/bubble-tea.jpg",
        alt: "A picture of a bubble tea",
        day: "Monday",
        desc: "I like me some bubble tea!",
      };
  break;

  case 2:
    today= "Tuesday";
  break;

  case 3:
    today= "Wendesday";
  break;

   default:
    today = "Not sure what day it is";
}





document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

//alert(today);
console.log(coffee);
