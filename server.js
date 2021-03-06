const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
app.use(express.json())

const posts = [
    {
        username : 'Dev',
        title : 'Post 1'
    },
    {
        username : 'Dave',
        title : 'Post 2'
    }
]


app.get('/posts',(req, res) => {
    res.json(posts)

})

app.post('/login',(req, res) => { 
    //authenticate user
    res.json(posts)
    const username = req.body.username
})

app.listen(3000)