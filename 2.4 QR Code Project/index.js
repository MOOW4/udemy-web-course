import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

inquirer
.prompt([
    /* Pass your questions in here */
    {
        name: "URL",
        message: "Type your URL here: ",
    },
])
.then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL;
    console.log(answers);
    console.log(url);

    var qr_png = qr.image(url, { type: 'png' });
    qr_png.pipe(fs.createWriteStream('qr.png'));

    fs.writeFile("message.txt", url, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });

  })
.catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
});

