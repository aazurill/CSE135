#!/usr/bin/env python3
import socket
import json
from datetime import date
hostname = socket.gethostname()
ip = socket.gethostbyname(hostname)

today = date.today()
time = today.strftime("%d:%m:%Y")
thisdate = "current date is " + time
print("Content-type: text/html\n")
print('<html>')
print('<head>')
print('<title>Hello World from Python!</title>')
print('</head>')
print('<body>')
print('<h2>Hello World from Python!</h2>')
print(f'<p>{time}</p>')
print(f'<p>{ip}</p>')
print('</body>')
print('</html>')