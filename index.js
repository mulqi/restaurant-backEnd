const express = require('express')
const app = express()
const port = 3000
const mysql = require ('mysql')
const connection = mysql.createConnection ({
  host: '109.106.253.140',
  user: 'u1579227_kelompok_2',
  database: 'u1579227_kelompok_2',
  password: 'boba_kelompok_2'
})

connection.connect()
connection.query('SELECT * from menu', (err, rows, fields) => {
  if (err) throw err

  console.log('The result is: ', rows)
})

connection.end()
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/get-menu', (params) => {
    //
})



aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
















app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
