#!/usr/bin/env python3
import cgi
import cgitb
import requests
import os
print("Content-type: text/html\n")

val = os.environ['QUERY_STRING']
array = val.split("=")
user = array[1]
print('<html>')
print('<head>')
print('<title>Sessions</title>')
print('</head>')
print('<body>')
print("<h2>Session 2: Hello")
print(array[1])
print("</h2>")

# print("<h2>queryStringtest: this is test ")
# print(full_url)
# print("</h2>")


print(f"<a href='./py-sessions-1.py?var={user}'>")
print("Session 1")
print("</a>")
print('<form action="./py-destroy-session.py" method=get><button type=submit>Destroy Session</button>')
print('</body>')
print('</html>')
#<a href='./py-sessions-2.py?={user}>