const express = require('express')
const router = new express.Router()
const firebase = require("firebase/app");
require("firebase/auth");

const addHospital = require('../models/hospitals').addHospital


router.get('/hospitals', (req, res) => {
  res.render('hospitals')
  // res.redirect('/login')
})

router.post('/hospitals', async (req, res) => {
  const hospitals = await req.body
  
  try {
    let uid = firebase.auth().currentUser.uid

    if(uid) {
      addHospital(hospitals, uid)
      res.status(200).send('Hospital has been added')
    } else {
      throw new Error('User not logged in')
    }

  } catch (e) {
    res.status(500).send()
    console.log(e)
  }
})

router.put('/hospitals', async (req, res) => {

})

router.delete('/hospitals', async (req, res) => {

})

module.exports = router