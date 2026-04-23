const express = require('express');
const { ExpressPeerServer } = require('peer');

const app = express();
const port = process.env.PORT || 9000;

const server = app.listen(port, () => {
  console.log('PeerJS Server listening on port', port);
});

// Initialize PeerJS
const peerServer = ExpressPeerServer(server, {
  path: '/',
  allow_discovery: true
});

app.use('/peerjs', peerServer);
