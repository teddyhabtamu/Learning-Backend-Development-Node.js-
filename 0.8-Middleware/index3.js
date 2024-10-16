import express from 'express'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import bodyParser from 'body-parser';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var brandName = '';

app.use(bodyParser.urlencoded({extended: true}));

function bandNameGenerator(req, res, next){
  console.log(req.body);
  brandName = `${req.body.street}${req.body.pet}`
  next()
}

app.use(bandNameGenerator);


app.get('/', (req, res)=>{
  res.sendFile(__dirname + '/public/index.html');
})

app.post('/submit', (req, res)=>{
  const info = req.body;
  const {a, b} = info;

  res.send(`
    <html>
      <body>
        <h1>Your band name is </h1>
        <h2>${brandName}</h2>
      </body>
    </html>
  `)
})


app.listen(port, ()=>{
  console.log(`Server is running on port ${port}`)
})