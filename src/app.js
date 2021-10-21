// App configs
  // Express
  const express = require('express')
  const app = express()

  app.use(express.urlencoded({extended: false}))
  app.use(express.json())

  // Handlebars
  const handlebars = require('express-handlebars')
  app.engine('handlebars', handlebars({defaultLayout: 'main'}))
  app.set('view engine', 'handlebars')
  
  // Routes
  const routes = require('./routes')
  app.use(routes)
  
// End app
app.listen('3000')
