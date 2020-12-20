const express = require('express');
// 
const app = express();

app.get('/',(req, res) => {
    res.send('Hello, Shit')
})
 
app.listen(3001);