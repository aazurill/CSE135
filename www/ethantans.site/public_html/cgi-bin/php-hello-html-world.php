<html>
    <head>
        <title>Hello PHP World</title>
    </head>
    <body>
        <?php
            $ip = $_SERVER['REMOTE_ADDR'];
            date_default_timezone_set('America/Los_Angeles');
            $date = date('m/d/Y h:i:s a', time());
            echo "<p>Hello World!</p>";
            echo "<p>Current Time: $date</p>";
            echo "<p>Your IP Address: $ip</p>";
        ?>
    </body>
</html>