const cors = require('cors');
const multer = require('multer');
const bodyParser = require('body-parser');
const express = require('express');
const upload = multer({dest:"uploads/"});
const app = express();



app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + '/public')); 
 
app.get('/',(req,res,next) =>{
 res.sendFile(__dirname + "/index.html");  
});

app.post('/upload',upload.single('file'),(req,res,next) =>{
  return res.json(req.file);
});

const port = process.env.PORT || 3000;
app.listen(port,() =>{
    console.log(`Server is running on port: ${port}`); 
}); 