import express from "express";


const app = express();
const port = 3000;

function logger(req, res, next){
  console.log(`Logged ${req.url} ${req.method}`);
  next()
}

app.use(logger)

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
