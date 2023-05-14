<?php
    //Set globally used variables
    $action = $_GET['action'];
    $SecurityLevel = $_GET['securityLevel'];
    
        //BrokenAccessControl/Vulnerabilities/AutoIndex.htm -> Change Config
    if($action === "LoadConfig") {
        //#Remove all files in directory conf.d - autoprompt answers for filedeletion with yes
        exec("rm /etc/nginx/conf.d/* && cp /etc/nginx/Config/$SecurityLevel.conf /etc/nginx/conf.d/ && nginx -s reload");
        header("Location: ./BrokenAccessControl/$SecurityLevel/Netflix.htm", true, false);
        
        //Database/$SecurityLevel/Database.php -> Execute SQL Statement
    }else if($action === "ExecuteSQLStatement") {
        $statement = $_GET['statement'];
        if($SecurityLevel === "Secure") {
            $statement = prepareStatementForInsert($statement);
        }
        echo $statement;
        exec("sqlite3 ./Database/$SecurityLevel/UserData \"$statement\" > ./Database/$SecurityLevel/CommandProcessorOutput/temp.html");
        exec("sqlite3 ./Database/$SecurityLevel/UserData \"select * from ExampleTable\" > ./Database/$SecurityLevel/CommandProcessorOutput/output.html");
        createTable($SecurityLevel);
        header("Location: ./Database/$SecurityLevel/DatabasePassword.htm", true, false);

        //BrokenAccessControl/Secure/NetflixLogin.htm -> Check password
    }else if($action === "CheckLoginCredentials") {
        if($_GET['user'] === "user@test" && $_GET['password'] === "userTest1997") {
            header("Location: ./BrokenAccessControl/Secure/NetflixUserChoice.htm", true, false);
        }else{
            header("Location: ./BrokenAccessControl/Secure/NetflixLogin.htm", true, false);
        }

        //Database/$SecurityLevel/DatabaseLogin.htm -> Check for correct password
    }else if($action === "CheckDataBaseLogin") {
        $sqlString = buildLoginCredentials($_GET['username'], $_GET['password'], $SecurityLevel);
        exec("sqlite3 ./Database/$SecurityLevel/UserData \"$sqlString\" > ./Database/$SecurityLevel/CommandProcessorOutput/output.txt");
        $result = readThisFile("./Database/$SecurityLevel/CommandProcessorOutput/output.txt");
        exec("rm ./Database/$SecurityLevel/CommandProcessorOutput/output.txt");
        if($SecurityLevel === "Vulnerable") {
            printf("<h2>No entry found for \" Username= " . $_GET['username'] . " and Loginpassword= " . $_GET['password'] . " in Table UserLoginData!</h2><h2> Your request found the following: $result</h2><h2>Did you mean to search in Table Admin, UserPreferences or ExampleTable instead?");
        }else{
            printf("<h2>\nNo entry found for " . $_GET['username'] . " and " . $_GET['password'] . ". Please try again with different login data!</h2>");
        }
        checkLoginData($_GET['username'], $_GET['password'], $SecurityLevel);
    }
    
    function checkLoginData($username, $password, $SecurityLevel)
    {
        if ($username === "test" && $password === "NoChanceMr.Hacker!123") {
            header("Location: ./Database/$SecurityLevel/DatabasePassword.htm", true, false);
        }else if ($username === "admin" && $password === "GiveUp!Y0uWillN3verF!ndOutS1nceThisIsTo0Long!!!"){
            exec("sqlite3 ./Database/$SecurityLevel/UserData \"select Databasepassword from Admin where Username=$username and Loginpassword= $password\" > ./Database/$SecurityLevel/output.txt");
            $result = readThisFile("./Database/$SecurityLevel/output.txt");
            exec("rm ./Database/$SecurityLevel/output.txt");
            header("Location: ./Database/$SecurityLevel/Database.php?password=$result&remember=true", true, false);
        } else {
            printf("<h3>You will be redirected to the login page in 5 seconds!</h3>");
            header("refresh:5; ./Database/$SecurityLevel/DatabaseLogin.htm", true, false);
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
    
    function buildLoginCredentials($username, $password, $SecurityLevel)
    {        
        $db = new SQLite3("./Database/$SecurityLevel/UserData");
        if(!$db) {
            echo $db->lastErrorMsg();
        } else {
            echo "Opened database successfully\n";
        }
        $sqlString = "SELECT * FROM UserLoginData WHERE Username = $username AND Loginpassword = $password";
        
        if($SecurityLevel === "Secure") {
            $preparedStatement = $db->prepare("SELECT * FROM UserLoginData WHERE Username = :username AND Loginpassword = :password");
            $preparedStatement->bindParam(':username', $username);
            $preparedStatement->bindParam(':password', $password);
            
            //Normally you would now do the execution in the database -> in this project is this not possible, so I had to use a workaround
            //$preparedStatement->execute();
            
            return "SELECT * FROM UserLoginData WHERE Username = '$username' AND Loginpassword = '$password'";
        }
        return $sqlString;
    }
    
    function prepareStatementForInsert($statement)
    {
        $statementLowerCase = strtolower($statement);
        
        //Search for insert into in the given string -> if it is included it will return 0 since it is always at the start
        //It also prevents SQL-Injection by splitting up the select statement which is not ideal, but good enough for presentation purposes
        if(!strpos($statementLowerCase, "insert into"))
        {
            $db = new SQLite3("./Database/Secure/UserData");
            if(!$db) {
                echo $db->lastErrorMsg();
            } else {
                echo "Opened database successfully\n";
            }

            $preparedStatement = $db->prepare("insert into ExampleTable (firstname, lastname, email) values (:firstname, :lastname, :email)");
            $preparedStatement->bindParam(':firstname', $firstname, SQLITE3_TEXT);
            $preparedStatement->bindParam(':lastname', $lastname, SQLITE3_TEXT);
            $preparedStatement->bindParam(':email', $email, SQLITE3_TEXT);
            
            //Get Startposition of valuestring - only this begins with (' -> exclude the (
            $startPosition = strpos($statement, "('")+1;
            //Get Endposition of valuestring - it always ends with ') -> exclude the )
            $endPosition = strpos($statement, "')")+1;
            //Create the valuestring by cutting the statement string at the defined positions
            $valueString = substr($statement, $startPosition, $endPosition-$startPosition);
            
            //Save the first and the last part of the query to build the complete string afterwards
            $firstPartOfQuery = substr($statement, 0, strpos($statement, "('")+1);
            $secondPartOfQuery = substr($statement, strpos($statement, "')")+1);
            
            //Create an array of values by cutting the valuestring in 3 parts -> 3 parameters
            $values = explode(",", $valueString);
            $firstname = $values[0];
            $lastname = $values[1];
            $email = $values[2];

            //Normally you would now do the execution in the database -> in this project is this not possible, so I had to use a workaround
            //$preparedStatement->execute();
            
            return $firstPartOfQuery . $firstname . ", " . $lastname . ", " . $email . $secondPartOfQuery;
        }
        return $statement;
    }
    
    function createTable($SecurityLevel){

        $result = htmlentities(readThisFile("./Database/$SecurityLevel/CommandProcessorOutput/temp.html"));
        exec("rm ./Database/$SecurityLevel/CommandProcessorOutput/temp.html");
        
        $readFile = readThisFile("./Database/$SecurityLevel/CommandProcessorOutput/output.html");
        
        $tableRows = str_replace("\n", "|", $readFile);
        $tableItems = explode("|", $tableRows);
        $tableString = "<head><style>table{ margin: auto; width: 100%; padding: 10px; border: whitesmoke solid 2px} tr, th{color: whitesmoke; text-align: center} tr:nth-child(even) { background-color: #555555; } div{padding: 10px; border: whitesmoke solid 2px; color: whitesmoke; text-align: center; background-color: #555555;}</style></head>";
        $tableString .= "<body><div>The result of your last request was: $result</div><table><tr><th>firstname</th><th>lastname</th><th>email</th></tr>";
        
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