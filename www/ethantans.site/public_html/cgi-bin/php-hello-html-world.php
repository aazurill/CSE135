<html>
    <head>
        <title>Hello HTML World</title>
    </head>
    <body>
        <?php
            echo "<p>Hello World!</p>";
            echo "<p>Current Time: </p>";
            echo "<p>Your IP Address: <?php echo $_SERVER['REMOTE_ADDR']?></p>";
        ?>
    </body>
</html>