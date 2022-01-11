function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
window.onclick = function (event) {
    let modal = document.getElementById('loginPopup');
    if (event.target == modal) {
        closeForm();
    }
}
