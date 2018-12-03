var request = require('request');
var fs = require('fs');

console.log('Downloading image...');
request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function (err) {
         throw err;
       })
       .on('response', function (response) {
         console.log('Response Status Message: ', response.statusMessage);
         console.log('Response Headers: ', response.headers['content-type']);
       })
       .pipe(fs.createWriteStream('./future.jpg'))
       .on('end', function() {
        console.log('Download complete.');
      });