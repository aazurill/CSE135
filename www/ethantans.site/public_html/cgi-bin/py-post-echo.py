#!/usr/bin/env python3
import requests
print("Content-type: text/html\n")
URL = "http://google.com"
myObj = {'hihihi':'byebyebye'}
x = requests.post(url=URL, data=myObj)

print('<html>')
print('<body>')
print('<p>')
print(x.text)
print('</p>')
print('</body>')
print('</html>')