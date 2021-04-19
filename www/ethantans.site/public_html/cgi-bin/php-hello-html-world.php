<html>
    <head>
        <title>Hello HTML World</title>
    </head>
    <body>
        <?php
          $ip = $_SERVER['REMOTE_ADDR'];
          $date = getdate();
            echo "<p>Hello World!</p>";
            echo "<p>Current Time: $date</p>";
            echo "<p>Your IP Address: $ip</p>";
        ?>
    </body>
</html>