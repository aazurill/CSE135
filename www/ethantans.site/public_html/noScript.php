<?php
$url = 'https://ethantans.site/api/static/posts';
$data = array(
    'jsEnabled' => 'NOT_ALLOWED',
);

// use key 'http' even if you send the request to https://...
$options = array(
    'http' => array(
        'method'  => 'POST',
        'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
        'content' => json_encode($data)
    )
);
$context  = stream_context_create($options);
$result = file_get_contents($url, false, $context);
if ($result === FALSE) {
echo "<script>console.log('unsuccessful');</script>";
}

var_dump($result);

?>