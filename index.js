var express = require('express');
var cors = require('cors');
require('dotenv').config()
const multer  = require('multer')

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});




const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});

app.post('/api/fileanalyse',multer().single('upfile'),(req,res)=>{
  const resObj={};
  resObj['name']=req.file.originalname;
  resObj['type']=req.file.mimetype;
  resObj['size']=req.file.size;
  res.json(resObj)
})