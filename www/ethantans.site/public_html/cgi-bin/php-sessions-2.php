<html>
  <body>
    <?php
      session_start();
      $username = $_SESSION['user'];
    ?>
    <h1>Hello <?php echo $username; ?>!</h1>
    <a href="./php-sessions-1.php">Session Page 1</a><br/>
    <a href="../php-cgiform.html">Perl CGI Form</a><br />
    <form action="./php-destroy-session.php" method=get>
    <button type=submit>Destroy Session</button>
    </form>
  </body>
</html>