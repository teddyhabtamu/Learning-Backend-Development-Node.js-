import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
inquirer
  .prompt([
    {
      type: "input",
      name: "url",
      message: "Please enter the URL of the QR code you would like to generate",
    }
  ])
  .then((answers)=>{
    const URL = answers.url;
    console.log(`you entered: ${URL}`)
    const qr_png = qr.image(URL);
    qr_png.pipe(fs.createWriteStream("qrcode.png"));

    console.log("QR code generated successfully")
    fs.writeFile("qrcode.txt", URL, (err)=>{
      if (err) {
        console.log("Error writing to file")
      }
      else {
        console.log("URL written to file")
      }
    })
  })
  .catch((error)=>{
    if (error.isTyError) {
      console.log("you need to provide a valid URL")
    }
    else {
      console.log("something went wrong")
    }
  })

