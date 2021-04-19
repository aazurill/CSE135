import requests
URL = "https://google.com"
r = requests.get(url=URL)
data = r.json()
print("Content-type: text/html\n")
print('<html>')
print('<body>')
print(data)
print('</body>')
print('</html>')