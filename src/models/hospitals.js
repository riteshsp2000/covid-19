const express = require('express')
const firebase = require("firebase/app");
require("firebase/auth");

const database = firebase.app().database()

const addHospital = (hospitals, uid) => {
  hospitals["uid"] = uid

  const data = JSON.stringify(hospitals)

  var docRef = database.ref().child('Hospitals').child(hospitals.name)

  docRef.set(data).then(() => {
    console.log('Data has been added to the database')
  })
}

module.exports = {addHospital}