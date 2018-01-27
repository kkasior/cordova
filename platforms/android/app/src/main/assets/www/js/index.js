 function loadDoc() {
        var req = new XMLHttpRequest();
        req.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var txt = this.responseText;

                document.getElementById("literki").innerHTML = txt;
            }
        };
        req.open("GET", "http://etiktok/detailslist", true);
        req.send();
    }