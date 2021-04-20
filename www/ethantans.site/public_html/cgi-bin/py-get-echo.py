#!/usr/bin/env python3
import requests
r = requests.get("http://www.google.com")
print("Content-type: text/html\n")
print('<html>')
print('<body>')
print('<h1>Query String: </h1>')
print('<p>')
print(r.content)
print('</p>')
print('</body>')
print('</html>')