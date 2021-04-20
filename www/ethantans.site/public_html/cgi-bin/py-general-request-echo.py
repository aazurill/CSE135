#!/usr/bin/env python3
import os
import requests
# envi = os.environ
# r = requests.get('https://ethantans.site')
# print(envi)
# print(r.headers)
# for k, v in os.environ.items():
#     print(f'{k}={v}')
# method = envi['REQUEST_METHOD']
# protocol = envi['SERVER_PROTOCOL']
# query = envi['QUERY_STRING']
# r = requests.get('https://ethantans.site/cgi-bin/py-general-request-echo.py')
# body = r.content
print("Content-type: text/html\n")
method = os.environ['REQUEST_METHOD']
protocol = os.environ['SERVER_PROTOCOL']
query = os.environ['QUERY_STRING']
# body = ''
print('<html>')
print('<head>')
print('<title>General Request Echo</title>')
print('</head>')
print('<body>')
print('<h2>General Request</h2>')
print(f'<p>Request Method:{method} </p>')
print(f'<p>Protocol: {protocol}</p>')
print(f'<p>Query: {query} </p>')
print('<p>Message Body: {body}</p>')
print('</body>')
print('</html>')

