console.log("hello world");

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form submitted successfully!");
}
let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

function myFavoriteColor(evt){
    evt.preventDefault();
   
    alert("Blue");

}
let color = document.querySelector('#color')

color.addEventListener("click", myFavoriteColor)
    function myFavoritePlace(evt){
        evt.preventDefault();
       
        alert("Japan :)");
    
    }
    let place = document.querySelector('#place')
    
    place.addEventListener("click", myFavoritePlace)

function myFavoriteRitual(evt){
    evt.preventDefault();
   
    alert("Workout and listen to music!");

}
let ritual = document.querySelector('#ritual')

ritual.addEventListener("click", myFavoriteRitual)
