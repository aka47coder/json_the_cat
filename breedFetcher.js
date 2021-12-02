const args = process.argv;
let q = String(args[2]);
//console.log(q);
const request = require("request");

request(
  "https://api.thecatapi.com/v1/breeds/search?q=sib",
  function (error, response, body) {
    //console.error('error:', error); // Print the error if one occurred
    if (response.statusCode===404){
     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //console.log('body:', body); // Print the HTML for the Google homepage.
    }
    if (q === "Siberian") {
      const data = JSON.parse(body);
      console.log(data[0].description);
      //console.log(typeof data);
    }
    if (q!=="Siberian"){
        console.log( "Breed Not Found")
    }

  }
);
