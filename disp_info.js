function disp_info() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("p1").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "p1.txt", true);
    xhttp.send();
}