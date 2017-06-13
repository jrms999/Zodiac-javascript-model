'use strict'

// Array of all data
var signs = [
	{
		name: "Aquarius",
		image: "img/aquarius.jpg",
		positivetraits: "Friendly, honest, loyal, inventive, independent, and intellectual.",
		negativetraits: "Intractible, contrarian, perverse, unpredictable, and detached."
	},
	{
		name: "Pisces",
		image: "img/pisces.jpg",
		positivetraits: "Imaginative, sensitive, compassionate, selfless, and sympathetic.",
		negativetraits: "Escapist, idealistic, secretive, vague, and weak-willed."
	},
	{
		name: "Aries",
		image: "img/aries.jpg",
		positivetraits: "Adventurous, energetic, courageous, enthusiastic, confident, dynamic, and witty.",
		negativetraits: "Selfish, quick-tempered, impulsive, and impatient."
	},
	{
		name: "Taurus",
		image: "img/taurus.jpg",
		positivetraits: "Patient, reliable, warmhearted, loving, persistent, and determined.",
		negativetraits: "Jealous, possessive, resentful, inflexible, and greedy."
	},
	{
		name: "Gemini",
		image: "img/gemini.jpg",
		positivetraits: "Adaptable, versatile, communicative, witty, intellectual, eloquent, and lively.",
		negativetraits: "Nervous, tense, superficial, inconsistent, and shrewd."
	},
	{
		name: "Cancer",
		image: "img/cancer.png",
		positivetraits: "Loving, intuitive, imaginative, cautious, protective, and sympathetic.",
		negativetraits: "Moody, touchy, and clingy."
	},
	{
		name: "Leo",
		image: "img/leo.png",
		positivetraits: "Generous, warmhearted, creative, enthusiastic, open-minded, and faithful.",
		negativetraits: "Pompous, patronizing, bossy, and intolerant."
	},
	{
		name: "Virgo",
		image: "img/virgo.jpg",
		positivetraits: "Modest, meticulous, reliable, practical, diligent, intelligent, and analytical.",
		negativetraits: "Fussy, anxious, over-critical, and conservative."
	},
	{
		name: "Libra",
		image: "img/libra.jpg",
		positivetraits: "Diplomatic, romantic, charming, easygoing, sociable, and idealistic.",
		negativetraits: "Indecisive, changable, gullible, flirtatious, and self-indulgent."
	},
	{
		name: "Scorpio",
		image: "img/scorpio.jpg",
		positivetraits: "Determined, forceful, emotional, intuitive, passionate, exciting, and magnetic.",
		negativetraits: "Jealous, resentful, compulsive, obsessive, and secretive."
	},
	{
		name: "Sagittarius",
		image: "img/sagittarius.jpg",
		positivetraits: "Jovial, good-humored, honest, intellectual, and philosophical.",
		negativetraits: "Blindly optimistic, careless, irresponsible, superficial, and tactless."
	},
	{
		name: "Capricorn",
		image: "img/capricorn.jpg",
		positivetraits: "Practical, prudent, ambitious, disciplined, patient, careful, humorous, and reserved.",
		negativetraits: "Pessimistic, fatalistic, miserly, and grudging."
	}
];

// For loop used to create the option tags for the dropdown
for(var i = 0; i < signs.length; i++) {
	// Store the actual dropdown as a variable
	var dropdown = document.getElementById('myList');
	// Create an option element
	var selection = document.createElement('option');

	// Give the option element a value
	selection.value = signs[i].name;
	// Set the text of the option element
	selection.textContent = signs[i].name;
	// Append the option element to the dropdown
	dropdown.appendChild(selection);
}

// Using 'dropdown' because we created that variable in the above for loop
dropdown.onchange = function() {
		// Targeting several elements from the HTML and storing them as variables
  	var container = document.getElementById("displayInfo");
  	var sign = document.getElementById("sign");
  	var icon = document.getElementById("icon");
  	var goodInfo = document.getElementById("goodinfo");
  	var badInfo = document.getElementById("badinfo");
		// Creating a function, storing it as a variable. This function removes the animate.css classes from an element so that when they get re-applied, the animation happens again
  	var animation = function() {
			container.className = 'form-group displayInfo';
		};

		// Loop through the array
    for(var i = 0; i < signs.length; i++) {
			// If the value selected is signs[0].name or signs[2].name AND the value of i = 2, then do this block of code. The i = 2 is necessary because signs[i].name has a value regardless of the loop, so if a user selects signs[2].name, but the loop has just begun (i = 0), then the conditional will evaluate as 'true' and execute the code, but will display all the signs[0] data, not the signs[2] data.
    	if(this.value == signs[0].name || this.value == signs[2].name && i == 2) {
					// Change all the data according to what object in the signs array we are targetting
	        sign.textContent = "You are an " + signs[i].name;
	      	icon.src = signs[i].image;
	      	icon.width = "200";
	      	icon.height = "200";
	      	goodInfo.textContent = "You are: " + signs[i].positivetraits;
	      	badInfo.textContent = "Unfortunately, you are also: " + signs[i].negativetraits;

					// Add these classes to 'container' - the last two are from animate.css
	      	container.className = "form-group displayInfo animated zoomIn";
					// This 'animation' function is called 1 second after the classes are added, using the setTimeout() method, so the animation can take place.

	      	setTimeout(animation, 1000);
				// If the user selects something that doesn't match the above two instances, then run the below code - which is functionality identical, except for some grammar differences.
    	} else if(this.value == signs[i].name) {
	        sign.textContent = "You are a " + signs[i].name;
	      	icon.src = signs[i].image;
	      	icon.width = "200";
	      	icon.height = "200";
	      	goodInfo.textContent = "You are: " + signs[i].positivetraits;
	      	badInfo.textContent = "Unfortunately, you are also: " + signs[i].negativetraits;
	      	container.className = "form-group displayInfo animated zoomIn";

	      	setTimeout(animation, 1000);
    };
  };
};