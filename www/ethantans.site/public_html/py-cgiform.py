<!DOCTYPE html>
<html>
    <head>
        <title>CGI Form</title>
    </head>
    <body>
        <h1 align="center">Session Test</h1>
        <hr>
        <label for="cgi-lang">CGI using Python</label>
        <form action="./cgi-bin/py-sessions-1.py" method="Post" id="form">
            <label>
                "What is your name? "
                <input type="text" name="username" autocomplete="off">
            </label>
            <br>
            <input type="submit" value="Test Sessioning">
        </form>
        <a href="https://ethantans.site" style="display:inline-block;margin-top:20px;">Home</a>
    </body>
</html>