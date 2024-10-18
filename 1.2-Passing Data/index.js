import express from 'express'
import ejs from 'ejs'
import bodyParser from 'body-parser';

const app = express()
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => {
  res.render('index.ejs', {data: null})
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})

app.post('/submit', (req, res) => {
  console.log(req.body)
  res.render('index.ejs', {data: req.body})
})


