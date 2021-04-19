<html>
    <body>
        <?php
          $headers = apache_request_headers();
          $env = getenv();
          echo"<h1>Environment Variables</h1>";
          foreach($env as $envir => $value) {
            echo "<p>$envir: $value <br />\n<p>";
          }
          echo "<h1>Server Variables</h1>";
          foreach ($headers as $header => $value) {
              echo "<p>$header: $value <br />\n<p>";
          }
        ?>
    </body>
</html>