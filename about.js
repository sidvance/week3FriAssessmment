console.log("hey guys im really sad");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submitted successfully!!!!!');
}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);


let jack = document.querySelector('#jack-ducko')

const compliment = () => {
	alert('Ahoy there beauty! Care to help steer me ship?')
}

jack.addEventListener('mouseover', compliment)


// // Change the event listener that is listening for the Contact Us form to submit. Instead of doing a console.log message on submit, 
// the form should alert the user that the form has been submitted successfully. Use the alert function in Javascript.

// // Add an event listener that listens for a mouseover event. When the user mouses over the picture on the page (cat or rubber duck) the page 
// should alert give the user a compliment.

