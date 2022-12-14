// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
const submitButton = document.querySelector('submit-button');

function change() {
const myText = document.querySelectorAll('h2, form');
myText.forEach(function(form, h2){
    (h2,form).remove();
    
});
}
 
function add(){
    const myText = document.querySelector("#endMessage p");
    myText.textContent = "Thank you for your message!";
    myText.style.fontSize = "24px";
    this.classList.add("message");
}
submitButton.addEventListener('click', change, add);

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

//function change() {
 //   const myText = document.querySelector("#endMessage p");
 //   myText.textContent = "Thank you for your message";
 //   this.classList.add("message");
 //   }
  //  submitButton.addEventListener('click', change);   