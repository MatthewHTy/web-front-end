console.log("hello world");

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form submitted successfully!");
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

function getAlert(image) {
	alert('I know one thing, and one thing only, you look Ducktastic!')
  }
