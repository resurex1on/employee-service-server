const express = require('express');
const app = express();

app.use(express.json());

app.listen(3001, () => {
    console.log('Server is listening on the port 3001')
});