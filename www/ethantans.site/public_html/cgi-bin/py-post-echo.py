import requests
URL = "http://google.com"
myObj = {'hihihi':'byebyebye'}
x = requests.post(url, data=myObj)

print("Content-type: text/html\n")
print('<html>')
print('<body>')
print(x.text)
print('</body>')
print('</html>')