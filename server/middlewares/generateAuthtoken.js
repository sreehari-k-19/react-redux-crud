const jwt = require("jsonwebtoken")

const generateAuthtoken=(user)=>{
    const jwtSecretKey="secret"
    console.log(user.email )
    const token= jwt.sign({ _id: user._id, name: user.name, email: user.email },jwtSecretKey);
    return token;
};
const generateadminAuthtoken=(admin)=>{
    const jwtSecretKey="secret"
    const token= jwt.sign({ email: admin.email },jwtSecretKey);
    return token;
};
module.exports= {
    generateadminAuthtoken,
    generateAuthtoken,
}