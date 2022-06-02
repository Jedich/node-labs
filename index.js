const express = require('express');
const app = express();
const port = 3000;
var routes = require("./routes");
var bodyParser = require('body-parser');

// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use("/app", routes);

app.listen(port, () => {
	console.log(`Listening on port ${port}`)
})
