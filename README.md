To install dependencies:
```bash
npm install
```

To run the server
```bash
node server
```

In order to test, the node server needs to be launched in a remote server and then replace {serverIP} by the remote server IP in the following command:
```bash	
curl {serverIP}:8080/api
```

For example, this command will return your country, region, city
```bash
curl 188.226.251.135:8080/api
```
