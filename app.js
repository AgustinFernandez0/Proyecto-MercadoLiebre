const express = require('express');
const app = express();
app.use(express.static('public'))

app.listen(3015, () => {
    console.log('Servidor corriendo en puerto 3015');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

