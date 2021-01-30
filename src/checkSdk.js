var AWS = require("aws-sdk");
require('dotenv').config('.env');

AWS.config.getCredentials(function(err) {
  if (err) console.log(err.stack);
  // credentials not loaded
  else {
    console.log("Access key:", AWS.config.credentials.accessKeyId);
    console.log("Access key:", AWS.config.credentials.secretAccessKey);
  }
});
console.log(process.env)