<?php
$start = microtime(true);
$pwdhash = password_hash("test", PASSWORD_ARGON2ID, ["memory_cost" => 128000, "time_cost" => 20, "threads" => 8]);
$time = microtime(true) - $start;
echo "Berechnung: $time Sekunden<br>";
echo'Hash: '.$pwdhash . "<br>"; 
if(hash_equals($pwdhash, password_hash("test", PASSWORD_ARGON2ID, ["memory_cost" => 128000, "time_cost" => 20, "threads" => 8])))
{
    echo "Hello<br>";
}
echo password_hash("test", PASSWORD_ARGON2ID, ["memory_cost" => 128000, "time_cost" => 20, "threads" => 8]) . "<br>";
echo $pwdhash . "<br>";

