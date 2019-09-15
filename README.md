## Express.js

express.js is a web Framework for node.js. The most popular framework for node.js.
It is a server-side or back-end framework. Absolute barebone to run a server in the browser

## Basic server syntax:

//bring express in common.js module syntax
const express = require('express');

//init express
const app = express();

//create endpoints/route handlers
app.get('/', (req, res)=> res.send('Hello world'));

// Listen to a port
app.listen(5000);

## open forlder in VS Code and open terminal and type:

npm init -y
npm install express
npm instal -D nodemon //dev dependecy only for dev not for production
npm install momnet
npm install uuid // to generate random universal id
