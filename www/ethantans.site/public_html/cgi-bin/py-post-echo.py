#!/usr/bin/env python3
import requests
print("Content-type: text/html\n")
URL = "http://google.com"
myObj = {'hihihi':'byebyebye'}
x = requests.post(url=URL, data=myObj)

print('<html>')
print('<body>')
print('<h1>Post Echo</h1>')
print('<p>')
print(x.request.body)
print('</p>')
print('</body>')
print('</html>')