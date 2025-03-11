function open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

function toggleRow(id) {
    var row = document.getElementById(id);
    var icon = document.getElementById("icon-" + id);
    if (row.classList.contains("w3-hide")) {
        row.classList.remove("w3-hide");
        icon.textContent = "+";
    }else{
        row.classList.add("w3-hide");
        icon.textContent = "-";
    }
}