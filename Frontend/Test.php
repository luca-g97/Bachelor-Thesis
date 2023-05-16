<?php

$db = new SQLite3("./Database/Secure/UserData");

    $preparedStatement = $db->prepare("select * from ExampleTable");
    //$preparedStatement->bindParam(':username', $username);
    //$preparedStatement->bindParam(':password', $password);
    //$username = "test";
    //$password = "NoChanceMr.Hacker!123";
    $result = $preparedStatement->execute();
while($row=$result->fetchArray()){
    for($i = 0; $i < count($row); $i++)
    {
        if($row[$i] != null) {
            echo htmlentities($row[$i]) . "|";
        }
    }
}
    //$result = str_replace(" ", "|", $result);

    //return "SELECT * FROM UserLoginData WHERE Username = '$username' AND Loginpassword = '$password'";