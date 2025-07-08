var productcon = document.getElementById("products");
var search = document.getElementById("search");
var pro = productcon.querySelectorAll(".products-box");

search.addEventListener("keyup", function (event) {
    var enteredValue = event.target.value.toUpperCase();
    for (let i = 0; i < pro.length; i++) {
        var p = pro[i].querySelector("p").textContent;
        if (p.toUpperCase().indexOf(enteredValue) < 0) {
            pro[i].style.display = "none";
        } else {
            pro[i].style.display = "block";
        }
    }
});
