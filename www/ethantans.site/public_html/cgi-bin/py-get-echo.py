import requests
#!/usr/bin/env python3
print("Content-type: text/html\n")
r = requests.get("http://www.google.com")
print("Content-type: text/html\n")
print('<html>')
print('<body>')
print(r.content)
print('</body>')
print('</html>')