<?php
session_start();
$id = session_id();
echo "<script>console.log('session_id');</script>";
?>