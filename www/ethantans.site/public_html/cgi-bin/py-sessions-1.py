#!/usr/bin/env python3
import cgi, cgitbform
form = cgi.FieldStorage()
user = form.getvalue('username')
print("Content-type: text/html\n")
print('<html>')
print('<head>')
print('<title>Sessions</title>')
print('</head>')
print('<body>')
print('<h2>Hello {user}</h2>')
print('</body>')
print('</html>')