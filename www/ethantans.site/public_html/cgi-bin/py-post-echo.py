#!/usr/bin/env python3
import os
import sys
print("Content-type: text/html\n")

data = sys.stdin.read()
print('<html>')
print('<body>')
print('<h1>Post Echo</h1>')
print('<p>')
print(data)
print('</p>')
print('</body>')
print('</html>')