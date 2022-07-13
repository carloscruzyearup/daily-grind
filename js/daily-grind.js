/* 


    - One unique image, with appropriate and matching content in the alt tag.  
    - A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
    - A unique color that supports the image and paragraph of content

	pic - image src
	alt - the alt tag for the image
	desc - a description of the coffee
	day - the day of the week for the coffee
	color - the color associated witht the coffee
	name - the name of the coffee
	

 */

function coffeeTemplate( coffee ) {
	let myCoffee = "";

	myCoffee += `
					<img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
					<strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}
				`;

	return myCoffee;
}

function createCoffee( color, name, pic, alt, day, desc, info ) {
	return {
		color: color,
		name: name,
		pic: pic,
		alt: alt,
		day: day,
		desc: desc,
		info: info
	};
}

const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);

let myDay = "";

if( urlParams.has("day") ) {
	myDay = parseInt(urlParams.get("day"));
}
else {
	let myDate = new Date();
	myDay = myDate.getDay();
}

let today = "";
let coffee = "";
let coffeeName = "";

switch( myDay ) {
	case 0:
		today = "Sunday";
		coffeeName = "Pumpkin Spice Latte";
		coffee = createCoffee("Orange", coffeeName, "images/pumpkin-spice-latte.jpg", "A picture of a pumpkin spice latte", today, `I like ${coffeeName}!`, "a coffee drink made with a mix of traditional autumn spice flavors, steamed milk, espresso, and often sugar, topped with whipped cream and pumpkin pie spice.");
		break;

	case 1:
		today = "Monday";
		coffeeName = "Frappaccino";
		coffee = createCoffee("seagreen", coffeeName, "images/frappaccino.jpg", "A picture of a frappaccino", today, `I like ${coffeeName}!`, "made with a coffee or crème base, blended with ice and ingredients such as flavored syrups and usually topped with whipped cream and or spices.");
		break;

	case 2:
		today = "Tuesday";
		coffeeName = "Drip Coffee";
		coffee = createCoffee("slateblue", coffeeName, "images/drip.jpg", "A picture of a drip coffee", today, `I like ${coffeeName}!`, "made by pouring hot water onto ground coffee beans, then allowing to brew.");
		break;

	case 3:

		today = "Wednesday";

		coffeeName = "Bubble Tea";
		coffee = createCoffee("Pink", coffeeName, "images/bubble-tea.jpg", "A picture of a bubble tea", today, `I like me some ${coffeeName}!`, "a tea-based drink that originated in Taiwan in the early 1980s. It most commonly consists of tea accompanied by chewy tapioca balls, but it can be made with other toppings as well such as grass jelly, aloe vera, red bean, etc.");

		break;

	case 4:
		today = "Thursday";
		coffeeName = "Mocha";
		coffee = createCoffee("Brown", coffeeName, "images/mocha.jpg", "A picture of a mocha", today, `I like ${coffeeName}!`, "an intensely flavorful coffee blend that originated in Ethiopia and was brought over to Europe by traders from Yemen in the late 1700s. It is made up of espresso and hot chocolate milk.");
		break;

	case 5:
		today = "Friday";
		coffeeName = "Caramel Latte";
		coffee = createCoffee("Tan", coffeeName, "images/caramel-latte.jpg", "A picture of a caramel latte", today, `I like ${coffeeName}!`, "a coffee drink that contains espresso coffee, steamed and frothed milk, and caramel sauce. The espresso and milk are combined, and then the caramel syrup is mixed in.");
		break;

	case 6:
		today = "Saturday";
		coffeeName = "Cold Brew";
		coffee = createCoffee("sienna", coffeeName, "images/cold-brew.jpg", "A picture of a cold brew", today, `I like ${coffeeName}!`, "coffee made by steeping ground coffee in room-temperature water for several hours, usually 12 to 18 hours or even longer, then straining out the grounds and chilling it before serving it either as-is, over ice, or diluted with water.");
		break;

	default:
	today = "Something went wrong!";
}

document.getElementById("coffee-special").innerHTML = coffeeTemplate(coffee);
document.getElementById("coffee-info").innerHTML = coffee.info;
document.querySelector("html").style.backgroundColor = coffee.color;

let features = document.getElementsByClassName("feature");

for( i = 0; i < features.length ; i++ ) {
	features[i].style.color = coffee.color;
}

let coffeeNames = document.getElementsByClassName("coffeeName");

for( i = 0; i < coffeeNames.length; i++ ) {
	coffeeNames[i].innerHTML = coffee.name;
}
