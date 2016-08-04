const    router    = require('express').Router()



router.get('/', function(req, res){
  res.json({
    'WDI' : '0.98'
  })
})




module.exports = router
