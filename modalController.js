// Get the modal
var modal = document.getElementById("modal");
var charQuery = document.querySelectorAll("#char");
console.log(charQuery);

charQuery.forEach(char =>
    char.addEventListener("click",function(event){
        charIcon.src = event.target.src;
        modal.style.display = "none";
    })
)

var charIcon = document.getElementById("charIcon");


var span = document.getElementsByClassName("close")[0];


charIcon.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
