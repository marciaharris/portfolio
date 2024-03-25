/* import path from 'path';
import { fileURLToPath } from 'url';
import express from "express"
const app = express();
const PORT = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/', function (req, res){
	// res.sendFile(__dirname + '/index.html');
	res.send("Hi")
})

app.listen(PORT, function() {
	console.log(`Server is live! Listening at port ${PORT}`);
}) */