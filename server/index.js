const fs = require('fs');
const winston = require('winston');
const express = require('express');
const router = express.Router();
const app = express();
const port = process.env.PORT || 8080;
const logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({ filename: './server/logs.log', json: false })
  ]
});

////////////////////////////////////////////////////////////////
// Middleware

// Logging middleware
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.path} <= ${req.ip} @ ${new Date().toString()}`);
  next();
});

// Static content middleware (build folder)
app.use(express.static('build'))

// API middleware
app.use('/api', router);

// API endpoints
router.get('/logs', (req, res) => {
  res.set('Content-Type', 'text/plain');
  fs.readFile('./server/logs.log', 'utf8', (err, data) => {
    if (err)
      res.send(err)
    else
      res.send(data);
  });
});


// Start the server
app.listen(port);
console.log('listening on port ' + port);