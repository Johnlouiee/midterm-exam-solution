// Import the Express module
const express = require('express');


const app = express();

// Define the /test route
app.get('/test', (req, res) => {
  res.json({ message: 'Express is working! John Louie N. Purisima' });
});

// Make the server listen on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

