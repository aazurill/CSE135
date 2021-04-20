#!/usr/bin/env python3
import os
print("Content-type: text/html\n")
print('<html>')
print('<head>')
print('<title>Env Variables</title>')
print('</head>')
print('<body>')
print('<h2>Server Variables</h2>')
for k, v in os.environ.items():
    print(f'{k}: {v}')
print('</body>')
print('</html>')