const express = require('express');
const cloudinary = require('cloudinary').v2;
const app = express();


const port = process.env.PORT || 8082;
app.get('/', (req, res) => res.send('Hello world!'));
app.listen(port, () => console.log(`Server running on port ${port}`));






// Return "https" URLs by setting secure: true
cloudinary.config({
  secure: true
});

// Log the configuration
console.log(cloudinary.config());
