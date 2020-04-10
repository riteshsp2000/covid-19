const express = require('express')
const router = new express.Router()
const firebase = require("firebase/app");
require("firebase/auth");


router.get('/login', (req, res) => {
  res.render('login')
})

router.post('/login', async (req, res) => {
  const login = await req.body

  try {
    await firebase.auth().signInWithEmailAndPassword(login.email, login.password)
    .then(() => {
      console.log('User has signed in successfully')
    })
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      throw new Error(errorCode + ': ' + errorMessage)
    })

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {    
        return res.redirect('/hospitals')
        
      } else {
        throw new Error('Please use the correct email and password')
      }
    })
  } catch (e) {
    res.status(500).send()
    console.log(e)
  }

  

  
})

module.exports = router
