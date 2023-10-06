const express = require('express');
const app = express();
const PORT = '3000';

// Home page
app.get('/', (req, res) => {
    res.status(200).send('<h1>We are up and running mate!!</h1>');
})


app.get('/api/v1/insta', (req, res) => {
    const resp = {
        userName: 'IG-SA@official',
        followers: 400,
        follows: 1000,
        date: Date.now()
    }
    res.status(200).json(resp);
})

app.get('/api/v1/fb', (req, res) => {
    const resp = {
        userName: 'FB-SA@official',
        followers: 543,
        follows: 43,
        date: Date.now()
    }
    res.status(200).json(resp);
})

app.get('/api/v1/linkedin', (req, res) => {
    const resp = {
        userName: 'LinkedIn-SA@official',
        followers: 744,
        follows: 93,
        date: Date.now()
    }
    res.status(200).json(resp);
})

// handles invalid url
app.get('/api/v1/:token', (req, res) => {
    res.status(404).json({
        param: req.params.token
    });
})

app.listen(PORT, () => {
    console.log('Server is up at ', PORT);
});