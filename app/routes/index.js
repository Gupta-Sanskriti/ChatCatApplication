const router = require('express').Router();

router.get('/', (req, res, next)=>{
    res.render('login')
})
router.get('/rooms', (req, res, next)=>{
    res.render('rooms')
})
router.get('/char', (req, res, next)=>{
    res.render('chatroom')
})
router.post('/')



module.exports = {
    router 
}