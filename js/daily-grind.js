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
let coffee = "";
let today = myDate.getDay();


//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate query string parameters
const urlParams = new URLSearchParams(queryString);

today = 3;

if(urlParams.has("day")){//from querystring
  today = urlParams.get("day");}
 today= parseInt(today); // changes the string  to number
// swith function to change from day to day
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
    coffee = {
      name: "Drip",
      color: "black",
      pic: "images/drip.jpg",
      alt: "A picture of a Drip Coffee",
      day: "Tuesday",
      desc: " give it to me straight!",
    };
  break;

  case 3:
    today= "Wendesday";
    coffee = {
      name: "Caramel Latte",
      color: "beige",
      pic: "images/caramel-latte.jpg",
      alt: "A picture of caramel latte",
      day: "Wendesday",
      desc: " Start your day with Caramel Latte!",
    };
  break;

  case 4:
    today= "Thursday";
    coffee = {
      name: "Cold Brew",
      color: "#590000",
      pic: "images/cold-brew.jpg",
      alt: "A picture of Cold Brew",
      day: "Thursday",
      desc: " Enjoy your summer with our chillied Cold Brew!",
    };
  break;

  case 5:
    today= "Friday";
    coffee = {
      name: "Frappaccino",
      color: "#8B4513",
      pic: "images/frappaccino.jpg",
      alt: "A picture of Frappaccino",
      day: "Friday",
      desc: " Enjoy our Chocolate topped Frap!",
    };
  break;

  case 6:
    today= "Saturday";
    coffee = {
      name: "Mocha",
      color: "#FFF5EE",
      pic: "images/mocha.jpg",
      alt: "A picture of Mocha",
      day: "Saturday",
      desc: " Enjoy your day with our italian style Mocha!",
    };
  break;
  
  default:
    today= "Sunday";
    coffee = {
      name: "Pumpkin Spice",
      color: "#FF7518",
      pic: "images/pumpkin-spice-latte.jpg",
      alt: "A Our Pumpkin Spice Latte tastes great on a Fall Day! of Pumkin Spice Latte",
      day: "Sunday",
      desc: "give which makes us wish it was always Fall, as this is one of our top sellers! to me straight!",
    };
}

document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);
document.querySelector("html").style.backgroundColor= coffee.color;
//alert(today);
console.log(coffee);
