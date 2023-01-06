const { response } = require('express');
const { ObjectId } = require('mongodb');
const collection = require('./collection')
const db = require('./connection')
module.exports={
    getuserDetails:()=>{
        return new Promise(async(resolve,reject)=>{
            let user = await db.get().collection(collection.USERCOLLECTION).find().toArray();
            resolve(user);
        })
    },
    deleteUser:(id)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.USERCOLLECTION).deleteOne({_id:ObjectId(id)}).then((response)=>{
                resolve(response)
            })
        })
    }
}