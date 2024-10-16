import express from 'express'
import bodyParser from 'body-parser'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const app = express();
const port = 3000;
const PASSWORD = 'TeddyHabtamu'
var status = false;

app.use(bodyParser.urlencoded({extended: true}));

function authenticate(req, res, next){
  if (req.body.password === PASSWORD){
    status = true;
  }
  next();
}

app.use(authenticate)

const dirName = dirname(fileURLToPath(import.meta.url));

app.listen(port, ()=>{
  console.log(`Server is running on port ${port}`)
})

app.get('/', (req, res)=>{
  res.sendFile(dirName + '/public/index.html');
})

app.post('/check', (req, res)=>{
  console.log(req.body);
  if (status){
    res.sendFile(dirName + '/public/secret.html');
  }
})