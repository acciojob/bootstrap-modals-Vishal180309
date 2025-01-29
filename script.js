//your code here
var modal = document.getElementById("newton-modal");
var button = document.getElementById("open-modal");

button.onclick = function() {
    modal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
