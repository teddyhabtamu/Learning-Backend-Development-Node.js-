import express from 'express';

const app = express();
const port = 3000

app.get('/', (req, res)=>{
  res.send("<h1>Home Page</h1>")
})

app.get('/contact', (req, res)=>{
  res.send("<p>Phone: 1234567890</p>")
})

app.get('/about', (req, res)=>{
  res.send("<h1>About Me</h1>")
})

app.listen(port, ()=>{
  console.log(`server is running at port ${port}`)
} )