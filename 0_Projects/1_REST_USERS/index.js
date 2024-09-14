const express = require('express');
const users = require('./MOCK_DATA.json')
const PORT = 8080;

const app = express();

// REST Controllers/Handlers

app.get('/', (req, res) => {
    res.send("This is root")
});

app.get('/api/users', (req, res) => {
    res.json(users);
})

app.get('/api/users/:user_id', (req, res) => {
    const user_id = Number(req.params.user_id);
    const user = users.find(({ id }) => id === user_id)
    res.json(user || {})
})




//app listening
app.listen(PORT, () => console.log(`User app is UP and Running at PORT ${PORT}`))