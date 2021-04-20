#!/usr/bin/env python3
import os
envi = os.environ
method = envi['REQUEST_METHOD']
protocol = envi['SERVER_PROTOCOL']
query = envi['QUERY_STRING']
r = requests.get('https://ethantans.site/cgi-bin/py-general-request-echo.py')
body = r.content
print("Content-type: text/html\n")
print('<html>')
print('<head>')
print('<title>General Request Echo</title>')
print('</head>')
print('<body>')
print('<h2>Server Variables</h2>')
print('<p>Request Method:{method} </p>')
print('<p>Protocol: {protocol}</p>')
print('<p>Query: {query} </p>')
print('<p>Message Body: {body}</p>')
print('</body>')
print('</html>')