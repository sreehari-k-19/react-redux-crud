const { response } = require('express');
const adminModels = require('../models/adminModels');
const {generateadminAuthtoken} = require('../middlewares/generateAuthtoken');

module.exports = {

    getUsers: (req, res) => {
        adminModels.getuserDetails().then((user) => {
            console.log(user)
            res.send(user)
        })



    },
    userDetailsChange: (req, res) => {
        console.log("update")
        console.log(req.body)
    },
    deleteUser: (req, res) => {
        console.log("delete")
        console.log(req.params.id)
        console.log("delete")
        adminModels.deleteUser(req.params.id).then((response) => {
            res.send(response)
        })
    },
    login: (req, res) => {
        const admin_email="admin@gmail.com";
        const admin_password="123";
        console.log("adminlogin")
        if(admin_email==req.body.email && admin_password==req.body.password){
            const token = generateadminAuthtoken(req.body)
            res.send(token)
            console.log(token)
        }
        

    }

}