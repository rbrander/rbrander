const express = require('express');
const router = express.Router();
const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(express.static('build'))
app.use('/api', router);

// API endpoints
router.get('/', (req, res) => {
  res.json({ message: 'To be implemented' });
});

// Start the server
app.listen(port);
console.log('listening on port ' + port);