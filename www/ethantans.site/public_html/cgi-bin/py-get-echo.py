#!/usr/bin/env python3
import requests
import os
print("Content-type: text/html\n")

query = os.environ['QUERY_STRING']
print('<html>')
print('<body>')
print('<h1>Query String: </h1>')
print('<p>')
print(query)
print('</p>')
print('</body>')
print('</html>')