const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;//Heroku  provide this variables
const app = express();

app.use(express.static(__dirname)); // send static files: js. css etc

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port,function(){
	console.log('Server started!');
});
