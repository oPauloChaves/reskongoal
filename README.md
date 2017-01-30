# reskongoal

Describe reskongoal here.


## Data comes from a REST API built with json-server

- Install json-server

```sh
# Yarn
$ sudo yarn global add json-server --prefix /usr/local
# NPM
$ npm install -g json-server
```

- Open the dir where the data lives and start the server

```sh
$ cd src/data
$ json-server --watch db.json --port 8080
```

## Credits
- [json-server](https://github.com/typicode/json-server)
- [react-universally](https://github.com/ctrlplusb/react-universally)
- [Create a Mock REST API in Seconds for Prototyping your Frontend](https://coligo.io/create-mock-rest-api-with-json-server/)
