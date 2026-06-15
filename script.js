document
.getElementById("registerForm")
.addEventListener("submit", function(e){

e.preventDefault();

const formData = new FormData(this);

fetch("save.php",{
method:"POST",
body:formData
})
.then(res => res.text())
.then(data => {

alert("Registration Submitted Successfully 🎉");

this.reset();

const modal =
bootstrap.Modal.getInstance(
document.getElementById("registerModal")
);

modal.hide();

});

});