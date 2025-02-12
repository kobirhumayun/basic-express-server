const express = require('express');
const app = express();
const port = 3000; // You can choose any port

app.get('/', (req, res) => {
    res.send('site under construction');
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});