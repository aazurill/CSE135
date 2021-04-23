<html>
  <body>
    <?php
      $get = $_GET['varname'];
      session_start();
      if(empty($get)) {
        $name = $_POST["username"];
      }
      else {
        $name = $get;
      }
    ?>
    <h1>Hello <?php echo $name; ?>!</h1>
    <a href="./php-sessions-2.php?varname=<?php echo $name ?>">Session Page 2</a><br/>

    <a href="../php-cgiform.html">Perl CGI Form</a><br />
    <form action="./php-destroy-session.php" method=get>
    <button type=submit>Destroy Session</button>
    </form>
  </body>
</html>