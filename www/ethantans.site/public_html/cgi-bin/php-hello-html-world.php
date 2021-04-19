<html>
    <head>
        <title>Hello HTML World</title>
    </head>
    <body>
        <?php
            echo "<p>Hello World!</p>";
            echo "<p>Current Time: <?=date('d F Y')?></p>";
            echo "<p>Your IP Address: <?php echo $_SERVER['REMOTE_ADDR']?></p>";
        ?>
    </body>
</html>