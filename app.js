const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const jade = require('jade')
const upload = require('multer')()
const PORT = process.env.PORT || 3000
const path = require('path')

app.use(bodyParser.json())
app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next)=> {
  res.render('index')
})

app.post('/', upload.any(), function(req,res){
	res.json(req.files[0]);
});

app.listen(PORT, ()=> {
  console.log('server listen on port ' + PORT)
})
