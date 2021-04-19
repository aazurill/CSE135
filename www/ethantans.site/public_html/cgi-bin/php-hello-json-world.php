<html>
    <body>
        <?php
          $ip = $_SERVER['REMOTE_ADDR'];
          date_default_timezone_set('America/Los_Angeles');
          $date = date('m/d/Y h:i:s a', time());
          $myObj->message = "Hello World from PHP";
          $myObj->ipAddress = $ip;
          $myObj->date = $date;
          $json_output = json_decode($myObj, true);
          echo $json_output;
        ?>
    </body>
</html>