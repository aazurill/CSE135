import requests
r = requests.get("http://www.google.com")
print("Content-type: text/html\n")
print('<html>')
print('<body>')
print(r.content)
print('</body>')
print('</html>')