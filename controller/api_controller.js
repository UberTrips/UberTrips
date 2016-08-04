const    router    = require('express').Router()
const    request   = require('request')

router.get('/dummy', function(req, res){
  res.json({
    WDI : 0.45
  })
})

router.get('/', function(req, res){
  let hood_id = req.query['hood_id']
  let day_period = req.query['day_period']
  let day_of_week = req.query['day_of_week']

  request.get('http://127.0.0.1:4000/predict?hood_id='+hood_id+'&day_period='+day_period+'&day_of_week='+day_of_week , (err,response,body)=>{
    console.log(body)
    res.send(JSON.parse(body))
  })


})


module.exports = router
