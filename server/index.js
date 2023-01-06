
const express = require('express')
const app = express()
app.use(express.json());
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./models/connection.js')
app.use(cors());
// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
    extended: true
}));


const userRouter = require('./routes/user.js');
const adminRouter = require('./routes/admin.js');

app.use('/', userRouter)
app.use('/admin', adminRouter)

db.connect((err)=>{
    if(err){
      console.log("error"+err)
    }else{
      console.log("databse connected")
    }
  })

app.listen(4000, () => {
    console.log('server conected on 4000')
})