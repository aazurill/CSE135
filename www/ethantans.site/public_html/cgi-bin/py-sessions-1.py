#!/usr/bin/env python3
import cgi, cgitb, os
import urllib.parse as urlparse
from urllib.parse import parse_qs
print("Content-type: text/html\n")
form = cgi.FieldStorage()
user = form.getvalue('username')

val = os.environ['QUERY_STRING']
array = val.split("=")
if(len(array) == 2):
  user = array[1]
print('<html>')
print('<head>')
print('<title>Sessions</title>')
print('</head>')
print('<body>')
print("<h2>Session 1: Hello")
print(user)
print("</h2>")

print(f"<a href='./py-sessions-2.py?var={user}'>")
print("Session 2")
print("</a>")
print('<form action="./py-destroy-session.py" method=get><button type=submit>Destroy Session</button>')
print('</body>')
print('</html>')