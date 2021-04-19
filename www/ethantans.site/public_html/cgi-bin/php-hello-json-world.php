<html>
    <head>
        <title>Hello PHP World</title>
    </head>
    <body>
        <?php
          $ip = $_SERVER['REMOTE_ADDR'];
          $date = date('m/d/Y h:i:s a', time());
          $myObj->message = "Hello World from PHP";
          $myObj->ipAddress = $ip;
          $myObj->date = $date;
          echo $myObj;
        ?>
    </body>
</html>