<?php
    
    if($_GET['action'] === "LoadSecureConfig") {
        exec("sh changeToSecure.sh");
        header("Location: ./BrokenAccessControl/Secure/Netflix.htm", true, false);
    }else if($_GET['action'] === "LoadVulnerableConfig") {
        exec("sh changeToVulnerable.sh");
        header("Location: ./BrokenAccessControl/Vulnerable/Netflix.htm", true, false);
    }else if($_GET['action'] === "ExecuteVulnerableSQLStatement") {
        $statement = $_GET['statement'];
        exec("sqlite3 ./Database/Vulnerable/ExampleDB \"$statement\"");
        exec("sqlite3 ./Database/Vulnerable/ExampleDB \"select * from ExampleTable\" > ./Database/Vulnerable/output.html");
        printf("No entry found for \"" . $statement . "\" in Database ExampleDB, in Table ExampleTable! Please enter in this format: \"SELECT firstname, lastname, email where ...\"");
        createTable("Vulnerable");
        header("Location: ./DataBase/Vulnerable/DatabasePassword.htm", true, false);
    }else if($_GET['action'] === "ExecuteSecureSQLStatement") {
        ini_set('session.cookie_httponly', '1'); //Value: 1 -> Makes cookie unreadable via Javascript (document.cookie)
        $statement = $_GET['statement'];
        $preparedStatement = prepareStatement($statement);
        exec("sqlite3 ./Database/Secure/ExampleDB \"$preparedStatement\"");
        exec("sqlite3 ./Database/Secure/ExampleDB \"select * from ExampleTable\" > ./Database/Secure/output.html");
        printf("No entry found for \"" . $statement . "\". Please try again with different values!");
        createTable("Secure");
        header("Location: ./DataBase/Secure/DatabasePassword.htm", true, false);
    }else if($_GET['action'] === "CheckLoginCredentials") {
        if($_GET['user'] === "user@test" && $_GET['password'] === "userTest1997")
        {
            header("Location: ./BrokenAccessControl/Secure/NetflixUserChoice.htm", true, false);
        }else{
            header("Location: ./BrokenAccessControl/Secure/NetflixLogin.htm", true, false);
        }
    }else if($_GET['action'] === "CheckVulnerableDatabaseLogin") {
        if ($_GET['username'] === "user@test" && $_GET['password'] === "userTest1997") {
            header("Location: ./Database/Vulnerable/DatabasePassword.htm", true, false);
        } else {
            header("Location: /Database/Vulnerable/DatabaseLogin.htm", true, false);
        }
        echo "alert()";
    } else if($_GET['action'] === "CheckSecureDatabaseLogin") {
        if ($_GET['username'] === "user@test" && $_GET['password'] === "userTest1997") {
            header("Location: ./Database/Secure/DatabasePassword.htm", true, false);
        } else {
            header("Location: ./Database/Secure/DatabaseLogin.htm", true, false);
        }
        echo "alert()";
    }
    
    function prepareStatement($statement)
    {
        $statementLowerCase = strtolower($statement);
        
        //Search for insert into in the given string -> if it is included it will return 0 since it is always at the start
        if(!strpos($statementLowerCase, "insert into"))
        {
            $db = new SQLite3("./Database/Secure/ExampleDB");
            if(!$db) {
                echo $db->lastErrorMsg();
            } else {
                echo "Opened database successfully\n";
            }

            $preparedStatement = $db->prepare("insert into ExampleTable(firstname, lastname, email) values (:firstname, :lastname, :email)");
            $preparedStatement->bindParam(':firstname', $firstname, SQLITE3_TEXT);
            $preparedStatement->bindParam(':lastname', $lastname, SQLITE3_TEXT);
            $preparedStatement->bindParam(':email', $email, SQLITE3_TEXT);
            
            //Get Startposition of valuestring - only this begins with (' -> exclude the (
            $startPosition = strpos($statement, "('")+1;
            //Get Endposition of valuestring - it always ends with ') -> exclude the )
            $endPosition = strpos($statement, "')")+1;
            //Create the valuestring by cutting the statement string at the defined positions
            $valueStringOriginal = substr($statement, $startPosition, $endPosition-$startPosition);
            //Make sure the string looks always the same -> remove every whitespace in valuestring
            $valueString = str_replace(" ", "", $valueStringOriginal);
            
            //Save the first and the last part of the query to build the complete string afterwards
            $firstPartOfQuery = substr($statement, 0, strpos($statement, "('")+1);
            $secondPartOfQuery = substr($statement, strpos($statement, "')")+1);
            
            //Create an array of values by cutting the valuestring in 3 parts -> 3 parameters
            $values = explode(",", $valueString);
            $firstname = $values[0];
            $lastname = $values[1];
            $email = $values[2];
            
            return $firstPartOfQuery . $firstname . ", " . $lastname . ", " . $email . $secondPartOfQuery;
        }
        return $statement;
    }
    function createTable($SecurityLevel){
        $sortedFile = "";
        
        if($SecurityLevel == "Secure") {
            $file = fopen("./Database/Secure/output.html", "r") or die("Unable to open file!");
        }
        else{
            $file = fopen("./Database/Vulnerable/output.html", "r") or die("Unable to open file!");
        }
        // Output one line until end-of-file
        while(!feof($file)) {
            $sortedFile .= fgets($file);
        }
        fclose($file);
        
        $tableRows = str_replace("\n", "|", $sortedFile);
        $tableItems = explode("|", $tableRows);
        $tableString = "<head><style>table{ margin: auto; width: 100%; padding: 10px; border: whitesmoke solid 2px} tr, th{color: whitesmoke; text-align: center} tr:nth-child(even) { background-color: #555555; }</style></head>";
        $tableString .= "<body><table><tr><th>firstname</th><th>lastname</th><th>email</th></tr>";
        
        for ($i = 0; $i < count($tableItems); $i++) {
            if (($i % 3) === 0)
            {
                $tableString .= "<tr>";
            }
            $tableItem = $tableItems[$i];
            if($SecurityLevel == "Secure")
            {
                $tableItem = htmlentities($tableItems[$i]);  
            }
            $tableString .= "<td>" . $tableItem . "</td>";
            if (($i % 3) === 2)
            {
                $tableString .= "</tr>";
            }
        }
        
        $tableString .= "</table></body>";
        
        if($SecurityLevel == "Secure") {
            exec("echo \"$tableString\" > ./Database/Secure/output.html");
        }
        else{
            exec("echo \"$tableString\" > ./Database/Vulnerable/output.html");
        }
    }
?>