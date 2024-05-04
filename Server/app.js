
const express = require('express')
const router = require('./routes')
const errHandler = require('./middleware/errHandler')
const app = express()
const port = 3000
const cors = require("cors")

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.use(cors())

app.use(express.urlencoded({
  extended: true
}))
 
app.use(express.json())
const path = require('path')
app.use('/asset', express.static(path.join(__dirname, 'asset')))

app.use(router)

app.use(errHandler)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})