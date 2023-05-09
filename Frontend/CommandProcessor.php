<?php
    
    if($_GET['action'] === "LoadSecureConfig") {
        exec("sh changeToSecure.sh");
        header("Location: ./BrokenAccessControl/Secure/Netflix.htm", true, false);
    }else if($_GET['action'] === "LoadVulnerableConfig") {
        exec("sh changeToVulnerable.sh");
        header("Location: ./BrokenAccessControl/Vulnerable/Netflix.htm", true, false);
    }else if($_GET['action'] === "ExecuteSQLStatement")
    {
        $statement = $_GET['statement'];
        exec("sqlite3 ./Database/Vulnerable/ExampleDB \"$statement\" > ./Database/Vulnerable/output.html");
        printf("No entry found for \"" . $statement . "\" in Database ExampleDB, in Table ExampleTable! Please enter in this format: \"SELECT firstname, lastname, email where ...\"");
        createTable();
        header("Location: ./DataBase/Vulnerable/DatabasePassword.htm", true, false);
    }
    
    function createTable(){
        $sortedFile = "";
        
        $myfile = fopen("./Database/Vulnerable/output.html", "r") or die("Unable to open file!");
        // Output one line until end-of-file
        while(!feof($myfile)) {
            $sortedFile .= fgets($myfile);
        }
        fclose($myfile);
        
        $tableRows = str_replace("\n", "|", $sortedFile);
        $tableItems = explode("|", $tableRows);
        $tableString = "<head><style>table{ margin: auto; width: 100%; padding: 10px; border: whitesmoke solid 2px} tr, th{color: whitesmoke;} tr:nth-child(even) { background-color: #; }</style></head>";
        $tableString .= "<body><table><tr><th>firstname</th><th>lastname</th><th>email</th>";
        
        for ($i = 0; $i < count($tableItems); $i++) {
            if (($i % 3) === 0)
            {
                $tableString .= "<tr>";
            }
            $tableString .= "<td>" . $tableItems[$i] . "</td>";
            if (($i % 3) === 2)
            {
                $tableString .= "</tr>";
            }
        }
        
        $tableString .= "</table></body>";
        
        exec("echo \"$tableString\" > ./Database/Vulnerable/output.html");
    }
?>