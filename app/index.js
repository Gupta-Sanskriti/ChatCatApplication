const router = require('express').Router();

router.get('/', (req, res, next)=>{
    res.render('login')
});

router.get('/info', (req, res, next)=>{
    res.send('namastey JS')
    console.log('info')
});


module.exports = {
    router 
}