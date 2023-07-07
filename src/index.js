const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')
const { engine } = require('express-handlebars') 
const path = require('path')

const route = require('./routes')

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

// XMLHttpRequest, fetch, axios
// HTTP Logger
// app.use(morgan('combined'))

// template engine (handlebars files)
app.engine('.hbs',engine({extname: '.hbs'}))
app.set('view engine','.hbs')
app.set('views', path.join(__dirname, 'resources\\views'));

route(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})