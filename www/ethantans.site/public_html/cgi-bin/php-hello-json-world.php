        <?php
            $ip = $_SERVER['REMOTE_ADDR'];
            date_default_timezone_set('America/Los_Angeles');
            $date = date('m/d/Y h:i:s a', time());
            $myObj->message = "Hello World from PHP";
            $myObj->ipAddress = $ip;
            $myObj->date = $date;
            header('Content-Type: application/json');
            echo $myObj;
        ?>