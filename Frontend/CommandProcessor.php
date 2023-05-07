<?php
    if($_GET['action'] === "LoadSecureConfig") {
        exec("sh changeToSecure.sh");
        header("Location: ./BrokenAccessControl/Secure/Netflix.htm", true, false);
    }else if($_GET['action'] === "LoadVulnerableConfig") {
        exec("sh changeToVulnerable.sh");
        header("Location: ./BrokenAccessControl/Vulnerable/Netflix.htm", true, false);
    }
?>