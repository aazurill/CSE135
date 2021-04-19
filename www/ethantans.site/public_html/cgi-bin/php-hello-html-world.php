<html>
    <head>
        <title>Hello HTML World</title>
    </head>
    <body>
        <?php
          $ip = $_SERVER['REMOTE_ADDR'];
            echo "<p>Hello World!</p>";
            echo "<p>Current Time: </p>";
            echo "<p>Your IP Address: $ip</p>";
        ?>
    </body>
</html>