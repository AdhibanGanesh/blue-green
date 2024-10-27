// app.js
const express = require('express');
const app = express();

app.get('/status', (req, res) => {
    res.json({ status: 'API is running successfully!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});