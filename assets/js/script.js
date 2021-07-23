// this funciton immediately below is actually jQuery, jQuery makes working with the DOM a little bit easier than plain jane js but you are not bringing it in to your html page so javascript doesnt know how to read it
// google jQuery cdn if you wanted to use it in this project.

$(function() {
	$('.toggler').on('click', function() {
		$('nav').slideToggle(500);
  });
});


function submitFirstName(event)
{
    console.log(event)
	event.preventDefault();
	// on submit, test the name field//
	 let firstName = document.getElementById ('name');
	 
	 if (firstName.value) {
		 alert('Success! Your info was submitted.');
	 } else {
		 alert('invalud first name. Please try again')
	 }
}