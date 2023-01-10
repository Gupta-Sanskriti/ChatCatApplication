const express = require('express');

const chatApp = require('./app')

// creating express app --> top level express core application
const app = express()

// creating middleware
// let hellomiddleware = (req, res, next)=>{
//     req.hello = "Namastey JS"
//     next()
// }

// To bring view engine property to set ejs 
app.use(express.static('public'))
app.set('view engine', 'ejs')

// to use middleware in app -- without app.use middleware is nothing
// app.use('/dashboards',hellomiddleware)

// routes
app.get('/', chatApp.router)
app.get('/info', chatApp.router)

app.get('/', (req, res, next)=>{
    // to send the file in the response 
    // res.sendFile(__dirname+'/views/login.htm')

    // To render the ejs file we use res.render
    res.render('login', {
        pagetitle: 'Chatroom application'
    });

    // res.send("<h1>Hello chat app</h1>")
    // console.log(req.hello)
})

app.get('/dashboard', (req, res, next)=>{
    res.send(`<h1> Middleware says: ${req.hello}`)
})






// Listen on port
const port = process.env.PORT || 3030

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})