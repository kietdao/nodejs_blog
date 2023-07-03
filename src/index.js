const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')
const { engine } = require('express-handlebars') 
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))
// HTTP Logger
app.use(morgan('combined'))

// template engine (handlebars files)
app.engine('.hbs',engine({extname: '.hbs'}))
app.set('view engine','.hbs')
app.set('views', path.join(__dirname, 'resources\\views'));

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/news', (req, res) => {
  res.render('news')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})