#!/usr/bin/env python3
import socket
import json
from datetime import date
hostname = socket.gethostname()
ip = socket.gethostbyname(hostname)

today = date.today()
time = today.strftime("%d:%m:%Y")
thisdate = "current date is " + time
obj = {"message":"Hello World from Python!", "date": thisdate, "ipAddress": ip}
realobj = json.dumps(obj)
print("Content-type: text/html\n")
print('<html>')
print('<head>')
print('<title>Hello Python (JSON)!</title>')
print('</head>')
print('<body>')
print(obj)
print('</body>')
print('</html>')