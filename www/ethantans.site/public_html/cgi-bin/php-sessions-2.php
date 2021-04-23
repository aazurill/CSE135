<html>
  <body>
    <?php
      $name = $_GET['varname'];
      session_start();
      // $name = $_SESSION['user'];
      $_SESSSION['before'] = true;
    ?>
    <h1>Hello <?php echo $name; ?>!</h1>
    <a href="./php-sessions-1.php?varname=<?php echo $name ?>">Session Page 1</a><br/>
    <a href="../php-cgiform.html">Perl CGI Form</a><br />
    <form action="./php-destroy-session.php" method=get>
    <button type=submit>Destroy Session</button>
    </form>
  </body>
</html>