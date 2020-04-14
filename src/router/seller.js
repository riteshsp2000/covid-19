const express = require('express')
const router = new express.Router()


router.get('/seller', (req, res) => {
  res.render('seller')
})

module.exports = router