const db = require('./connection')
const collection=require('./collection')
module.exports = {
    signUp: (user) => {
        return new Promise((resolve, reject) => {
            db.get().collection(collection.USERCOLLECTION).insertOne(user).then((data) => {
                resolve(data)
            })
        })
    },
    signIn: (userDetails) => {
        console.log(userDetails)
        return new Promise(async (resolve, reject) => {
            console.log(userDetails)
            let user = await db.get().collection(collection.USERCOLLECTION).findOne({ email: userDetails.email })
            if (user) {
                if (user.password === userDetails.password) {
                    resolve(user)
                } else {
                    reject()
                }
            } else {
                reject()
            }

        })
    }

}