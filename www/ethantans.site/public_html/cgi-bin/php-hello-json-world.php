<html>
    <body>
        <?php
          $ip = $_SERVER['REMOTE_ADDR'];
          date_default_timezone_set('America/Los_Angeles');
          $date = date('m/d/Y h:i:s a', time());
          $message = "Hello World from PHP";
          $Obj = array("message"=>$message, "date"=>$date, "ipAddress"=>$ip);
          echo json_encode($Obj);
        ?>
    </body>
</html>