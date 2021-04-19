<html>
    <body>
        <?php
          $request = $_SERVER["REQUEST_METHOD"];
          $protocol = $_SERVER["SERVER_PROTOCOL"];
          $query = $_SERVER["QUERY_STRING"];
          $body = file_get_contents('php://input');
          echo "<p><b>Request Method:</b>$request</p>";
          echo "<p><b>Protocol:</b>$protocol</p>";
          echo "<p><b>Query:</b>$query</p>";
          echo "<p><b>Message Body:</b>$body</p>";
        ?>
    </body>
</html>