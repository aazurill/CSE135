#!/usr/bin/env python3
import cgi, cgitb
print("Content-type: text/html\n")
print('<html>')
print('<head>')
print('<title>Sessions</title>')
print('</head>')
print('<body>')
print("<h2>Destroying Session</h2>")

print(f"<a href='./py-sessions-1.py'>")
print("Session 1")
print("</a><br>")

print(f"<a href='./py-sessions-2.py'>")
print("Session 2")
print("</a><br>")

print(f"<a href='../py-cgiform.html'>")
print("CGI Form")
print("</a>")


print('</body>')
print('</html>')
#<a href='./py-sessions-2.py?={user}>