const express = require('express');
const { ExpressPeerServer } = require('peer');

const app = express();
const port = process.env.PORT || 9000;

// Add generic CORS headers for Netlify
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const server = app.listen(port, () => {
  console.log('PeerJS Server listening on port', port);
});

// Initialize PeerJS at the root path
const peerServer = ExpressPeerServer(server, {
  path: '/',
  allow_discovery: true
});

// FIX: Mount to '/' instead of '/peerjs'
app.use('/', peerServer);
