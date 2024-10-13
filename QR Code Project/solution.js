import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    {"message":"Enter the URL to generate QR code", 
      "name":"url"},
  ])
  .then((answers) => {
    const URL = answers.url;
    var qr_svg = qr.image(URL);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));

    fs.writeFile("qr_img.txt", URL, (err) => {
      if (err) throw err;
      console.log("The file has been successfully saved!");
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in the current environment");
    } else{
      console.log("An error occurred", error);
    }
  });