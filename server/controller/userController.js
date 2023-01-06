const {generateAuthtoken} = require('../middlewares/generateAuthtoken');
const userModels = require('../models/userModels');
module.exports = {
    signUp: (req, res) => {
        console.log(req.body);
        userModels.signUp(req.body).then((response) => {
            req.body._id = response.insertedId;
            const token = generateAuthtoken(req.body)
            res.send(token)
        })


    },
    signin: (req, res) => {
        console.log(req.body);
        userModels.signIn(req.body).then((response) => {
            console.log(response)
            const token = generateAuthtoken(response)
            console.log(token)
            res.send(token)
        })
        .catch(()=>{
            console.log('rejected')
            res.status(500).send("Invalid username or password")
     
        })
            
        

    },
}