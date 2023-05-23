<?php
    //Set globally used variables
    $action = $_GET['action'];
    $SecurityLevel = $_GET['securityLevel'];

    //Change config to the right one according to the securityLevel before executing any task!
    //Remove all files in directory conf.d, copy the config file with the wanted security level into the folder and restart nginx using this config
    exec("rm /etc/nginx/conf.d/* && cp /etc/nginx/Config/$SecurityLevel.conf /etc/nginx/conf.d/ && nginx -s reload");
    
        //BrokenAccessControl/Vulnerabilities/AutoIndex.htm -> Change Config
    if($action === "LoadConfig") {
        header("Location: ./BrokenAccessControl/$SecurityLevel/Netflix.htm", true, false);
        
        //BrokenAccessControl/Secure/NetflixLogin.htm -> Check password
    }else if($action === "CheckLoginCredentials") {
        if ($_GET['user'] === "user@test" && $_GET['password'] === "userTest1997") {
            header("Location: ./BrokenAccessControl/Secure/NetflixUserChoice.htm", true, false);
        }else if($_GET['user'] === "admin" && $_GET['password'] === "admin") {
            header("Location: /root");
        } else {
            header("Location: ./BrokenAccessControl/Secure/NetflixLogin.htm", true, false);
        }

        //BrokenAccessControl/$SecurityLevel/NetflixHome.htm
    }else if($action === "CheckUserIdentity"){
        if(base64_decode($_GET['u']) === "admin" && base64_decode($_GET['p']) === "admin") {
            header("Location: /root");
        } else {            
            header("Location: ./BrokenAccessControl/$SecurityLevel/NetflixUserChoice.htm?u=" . $_GET['u'] . "&p=" . $_GET['p'], true, false);
        }
        
        //Database/$SecurityLevel/DatabaseLogin.htm -> Check for correct password
    }else if($action === "CheckDataBaseLogin") {
        $result = checkLoginCredentials($_GET['username'], $_GET['password'], $SecurityLevel);
        if($SecurityLevel === "Vulnerable") {
            printf("<h2>No entry found for \" Username= " . $_GET['username'] . " and Loginpassword= " . $_GET['password'] . " in Table UserLoginData!</h2><h2> Your request found the following though: $result</h2><h2>Did you mean to search in Table Admin, UserPreferences or ExampleTable instead?");
        }else{
            printf("<h2>No entry found for " . $_GET['username'] . " and " . $_GET['password'] . ". Please try again with different login data!</h2>");
        }
        checkAuthorization($_GET['username'], $_GET['password'], $SecurityLevel);
        
        //Database/$SecurityLevel/Database.php -> Execute SQL Statement
    }else if($action === "ExecuteSQLStatement") {
        $statement = $_GET['statement'];
        if ($SecurityLevel === "Secure") {
            $result = getPreparedStatementResult($statement);
        } else //$SecurityLevel = "Vulnerable"
        {
            exec("sqlite3 ./Database/$SecurityLevel/UserData \"$statement\" > ./Database/$SecurityLevel/CommandProcessorOutput/temp.html");
            $result = htmlentities(readThisFile("./Database/$SecurityLevel/CommandProcessorOutput/temp.html"));
            exec("rm ./Database/$SecurityLevel/CommandProcessorOutput/temp.html");
        }
        
        createTable($result, $SecurityLevel);
        header("Location: ./Database/$SecurityLevel/DatabasePassword.htm", true, false);
    }
    
    function checkAuthorization($username, $password, $SecurityLevel)
    {
        if ($username === "test" && $password === "NoChanceMr.Hacker!123") {
            header("Location: ./Database/$SecurityLevel/Database.htm", true, false);
        }else if ($username === "admin" && $password === "GiveUp!Y0uWillN3verF!ndOutS1nceThisIsTo0Long!!!"){
            exec("sqlite3 ./Database/$SecurityLevel/UserData \"select Databasepassword from Admin where Username=$username and Loginpassword= $password\" > ./Database/$SecurityLevel/output.txt");
            $result = readThisFile("./Database/$SecurityLevel/output.txt");
            exec("rm ./Database/$SecurityLevel/output.txt");
            header("Location: ./Database/$SecurityLevel/Database.php?password=$result&remember=true", true, false);
        } else {
            printf("<h3>You will be redirected to the login page in 10 seconds!</h3>");
            header("refresh: 10; ./Database/$SecurityLevel/DatabaseLogin.htm", true, false);
        }
    }
    
    function readThisFile($filename)
    {
        $readLines = "";
        
        $file = fopen($filename, "r") or die("Unable to open file!");
        
        // Output one line until end-of-file
        while(!feof($file)) {
            $readLines .= fgets($file);
        }
        fclose($file);
        return $readLines;
    }
    
    function checkLoginCredentials($username, $password, $SecurityLevel)
    {
        $db = new SQLite3("./Database/$SecurityLevel/UserData");
        
        if($SecurityLevel === "Vulnerable")
        {
            $sqlString = "SELECT * FROM UserLoginData WHERE Username = '$username' AND Loginpassword = '$password'";
            exec("sqlite3 ./Database/$SecurityLevel/UserData \"$sqlString\" > ./Database/$SecurityLevel/CommandProcessorOutput/output.txt");
            $result = readThisFile("./Database/$SecurityLevel/CommandProcessorOutput/output.txt");
            exec("rm ./Database/$SecurityLevel/CommandProcessorOutput/output.txt");
            
        }else{ //$SecurityLevel = "Secure"
            $preparedStatement = $db->prepare("SELECT * FROM UserLoginData WHERE Username = :username AND Loginpassword = :password");
            $preparedStatement->bindParam(':username', $username);
            $preparedStatement->bindParam(':password', $password);

            $result = executePreparedStatement($preparedStatement);
        }
        
        return $result;
    }
    
    function getPreparedStatementResult($statement): string
    {
        $statementLowerCase = strtolower($statement);
        
        //Search for "insert" in the given string -> if it is not included it would return 0 (bool: false), as well as "insert" is included since it is at the start of string
        //Therefore "ert" is used to be sure it really means insert and not just "not found"
        if(strpos($statementLowerCase, "ert") === 3)
        {
            $db = new SQLite3("./Database/Secure/UserData");

            $preparedStatement = $db->prepare("insert into ExampleTable (firstname, lastname, email) values (:firstname, :lastname, :email)");
            $preparedStatement->bindParam(':firstname', $firstname);
            $preparedStatement->bindParam(':lastname', $lastname);
            $preparedStatement->bindParam(':email', $email);
            
            //Get Startposition of valuestring - only this begins with (' -> exclude the (
            $startPosition = strpos($statement, "('")+1;
            //Get Endposition of valuestring - it always ends with ') -> exclude the )
            $endPosition = strpos($statement, "')")+1;
            //Create the valuestring by cutting the statement string at the defined positions
            $valueString = substr($statement, $startPosition, $endPosition-$startPosition);
            
            //Save the first and the last part of the query to build the complete string afterwards
            //$firstPartOfQuery = substr($statement, 0, strpos($statement, "('")+1);
            //$secondPartOfQuery = substr($statement, strpos($statement, "')")+1);
            
            //Create an array of values by cutting the valuestring in 3 parts -> 3 parameters
            $values = explode(",", $valueString);
            $firstname = $values[0];
            $lastname = $values[1];
            $email = $values[2];
            
            return executePreparedStatement($preparedStatement);
        }
        return "";
    }
    
    function executePreparedStatement($preparedStatement): string
    {
        $result = "";
        $preparedResult = $preparedStatement->execute();
        while($row=$preparedResult->fetchArray()){
            for($i = 0; $i < count($row); $i++)
            {
                if($row[$i] != null) {
                    $result .= htmlentities($row[$i]) . "|";
                }
            }
        }
        
        //Return the created string without the last "|", to get everything into the same format
        return rtrim($result);
    }
    
    function createTable($result, $SecurityLevel){
        
        //Get everything from ExampleTable and write it into output.html to build a table out of it
        exec("sqlite3 ./Database/$SecurityLevel/UserData \"select * from ExampleTable\" > ./Database/$SecurityLevel/CommandProcessorOutput/output.html");
        $readFile = readThisFile("./Database/$SecurityLevel/CommandProcessorOutput/output.html");
        
        //Bring the read lines all to the same format and seperate them into their parts to build a good looking table in the next step 
        $tableRows = str_replace("\n", "|", $readFile);
        $tableItems = explode("|", $tableRows);
        
        //
        $tableString = "<head><style>table{ margin: auto; border: 3px solid lightgrey; width: 100%; padding: 3%; font-family: 'Open Sans',sans-serif; border-radius: 5px} tr, th{color: lightgrey; text-align: center} tr:nth-child(even) { background-color: #333333; } div{padding: 10px; border: lightgrey solid 3px; color: lightgrey; text-align: center; background-color: #222222; font-family: 'Open Sans',sans-serif; border-radius: 5px;}</style></head>";
        $tableString .= "<body><div><b>The result of your last request was: $result</b></div><table><tr><th>firstname</th><th>lastname</th><th>email</th></tr>";
        
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
        
        exec("echo \"$tableString\" > ./Database/$SecurityLevel/CommandProcessorOutput/output.html");
    }
?>