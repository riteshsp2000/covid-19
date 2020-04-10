// <=========================== Importing npm modules ===========================>
const path = require('path')
const express = require('express')
const hbs = require('hbs')
const bodyParser = require('body-parser')

require('./db/firebase_config')


// <====================== Setting up the ports and server ======================>
const app = express()
const port = process.env.PORT || 3000


// <================== Defining paths for express config (hbs) ==================>
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../public/templates/views')
const partialsPath = path.join(__dirname, '../public/templates/partials')


// <=========================== Setting up handlebars ===========================>
hbs.registerPartials(partialsPath)
app.set('view engine', 'hbs')
app.set('views', viewsPath)


// <==================== Setting up static directory to serve ====================>
app.use(express.static(publicDirectoryPath))

// <============================== Using body-parser =============================>
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false}))


// <============================ Importing the routers ===========================>
const indexRouter = require('./router/index')
const loginRouter = require('./router/login')
const registerRouter = require('./router/register')
const aboutRouter = require('./router/about')
const hospitalsRouter = require('./router/hospitals')


// <========================== Setting up the middleware =========================>
app.use(indexRouter)
app.use(loginRouter)
app.use(registerRouter)
app.use(aboutRouter)
app.use(hospitalsRouter)


app.listen(port, () => {
  console.log('Server started on port: ' + port)
})
