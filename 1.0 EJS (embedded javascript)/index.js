import express from 'express';
import ejs from 'ejs';

const app = express();
const port = 3000;
const d = new Date();
let day = d.getDay();
var dayType = ''
var advice = ''
if (day == 0 || day ==6){
  dayType = 'a weekend'
  advice = "It is time to relax";
}
else{
  dayType = 'a weekday'
  advice = "It is time to work hard";
}


app.get ("/", (req, res)=>{
  console.log(day)
  res.render("index.ejs", { 
    dayType: dayType, 
    advice: advice})
})

app.listen(port, ()=>{
  console.log(`Server is running on port ${port} `)
})
