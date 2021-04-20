#!/usr/bin/env python3
import cgi, cgitb
form = cgi.FieldStorage()
user = form.getvalue('username')
print("Content-type: text/html\n")
print('<html>')
print('<head>')
print('<title>Sessions</title>')
print('</head>')
print('<body>')
print "<h2>Hello %s</h2>" % (user)
print('</body>')
print('</html>')