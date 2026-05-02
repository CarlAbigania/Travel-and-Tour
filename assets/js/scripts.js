var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "edsenman11" && password == "edsenman123"){
alert ("Login successfully");
window.location = "home.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}

}


}
function validateForm() {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const birthday = document.getElementById('birthday').value;
    const contact = document.getElementById('contact').value;

    // Basic validation checks
    if (name === "" || address === "" || birthday === "" || contact === "") {
        alert("All fields are required.");
        return false;
    }

    // Additional validation can be added here (e.g., regex for contact number)
    // Example: Validate contact number is in the correct format (simple example)
    const contactPattern = /^[0-9-+() ]+$/;
    if (!contactPattern.test(contact)) {
        alert("Please enter a valid contact number.");
        return false;
    }

    // If all checks pass
    return true;
}
document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Prevent default form submission
    event.preventDefault();

    // Perform validation here
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Check if fields are empty
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Validate email format
    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // If all fields are filled and email is valid, submit the form
    this.submit();
});

const scrollButton = document.getElementById("scroll-to-button");

        scrollButton.addEventListener("click", function() {

        const targetElement = document.getElementById("target-section");
  
        const offset = 110; // Add a slight offset from the top to avoid overlapping content

        const scrollPosition = targetElement ? targetElement.offsetTop - offset : document.documentElement.scrollTop;

        // Smooth scroll animation
        window.scroll({
            top: scrollPosition,
            behavior: "smooth"
            });
        });