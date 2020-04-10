const express = require('express')
const router = new express.Router()
const firebase = require("firebase/app");
require("firebase/auth");

const database = firebase.app().database()

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/index/hospitals', async (req, res) => {
  const docRef = database.ref()

  const snapshot = await docRef.once('value')
  const value = snapshot.val()

  // console.log(value)

  res.send(value)

})

module.exports = router