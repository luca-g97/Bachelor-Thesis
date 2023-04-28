<?php
printf($_GET['type'] . ", " . $_GET['run']);
if($_GET['run'] === true){
    #This code will run if ?run=true is set.
    if($_GET['type'] === "Secure") {
        exec(".changeToSecure.sh");
    }else if($_GET['type'] === "Vulnerable"){
        exec("./changeToVulnerable.sh");
    }
}

Redirect("./" . $_GET['type'] . "/Netflix.htm");
?>