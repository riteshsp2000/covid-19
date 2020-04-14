const express = require('express')
const router = new express.Router()
const firebase = require('firebase');



router.get('/register', (req, res) => {
  res.render('register')
})

router.post('/register', async (req, res) => {
  const register = await req.body

  firebase.auth().createUserWithEmailAndPassword(register.email, register.password)
  .then(() => {
    console.log('User has successfully created the account')
    
  })
  .catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode + ': ' + errorMessage)
  })

  // firebase.auth().onAuthStateChanged(function(user) {
  //   if (user) {    
  //     res.redirect('/hospitals')
      
  //   } else {
  //     throw new Error('Please use the correct email and password')
  //   }
  // })
  // console.log('Completed')

  res.redirect('/hospitals')
})
  

module.exports = router
