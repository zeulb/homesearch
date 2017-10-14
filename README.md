# Homesearch

![Screenshot](http://i.imgur.com/xd9042j.jpg)

## Installation

```
git clone git@github.com:zeulb/homesearch.git
cd homesearch
```

### Starting up server
Server will be started in port 3000.

```
npm --prefix=server/ install
npm --prefix=server/ start
```


### Starting up client application
Client app will be started in port 3001.

```
npm --prefix=client/ install
npm --prefix=client/ start
```

### Running the application

Open `http://localhost:3001` in the web browser.

## Technologies

### Server

- Express.js (No database used since data is static)
- Embed.ly API to extract Redfin webpage metadata

### Client

- React.js
- Grommet for the UI framework

Other packages used are listed in the corresponding `packages.json`


