//use Express
const express = require('express')

//access public folder
app.use(express.static('public'))

//use CORS
app.use(cors())

//serve up HTML
app.get('/', (req, res) => {
  res.sendFile(--dirname + '/index.html')
})

//serve up JSON
app.get('/API', (req, res) => {
  response.json(object)
})

app.get(
  db
    .json('ARTISTS')
    .find()
    .toArray()
    .then((data) => {
      response.render('INDEX.EJS', { info: data })
    })
    .catch((error) => console.log(error))
)

//add a new document to the jpeg api/database
app.post('/uploadFlyer', (req, res) => {
  db.json('flyers')
    .insertOne()
    .then((result) => {
      console.log('Flyer Uploaded with Success') // somewhere in here we need to point to returning the parsed artist array
      response.redirect('/')
    })
})

//add a cleaned textual array of artists back into the api for Spotify playlist generation

app.post('/uploadArtists', (req, res) => {
  db.json('artists') //this will be an array of varying numbers of indices based on each unique festival lineup
    .insertOne()
    .then((result) => {
      //return the Spotify playlist URI (image, embed from Spotify, etc)
      console.log('Cleaned Artist Info from Flyer Uploaded with Success') // somewhere in here we need to point to returning the parsed artist array
      response.redirect('/')
    })
})
