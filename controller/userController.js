const alertSchema = require("../model/alert");
const graphSchema = require("../model/graph");

let addUser = async(req,res) => {
    try{
        const {name, criteria, value, everyday, email}= req.body
        let newUser = new alertSchema({name, criteria, value, everyday, email})
        let response = await newUser.save()
        res.json(response)
    }
    catch(err){
        console.error(err)
    }
    
}

let getUser = async(req,res) => {
    try{
        let response = await alertSchema.find()
        res.json(response)
    }
    catch(err){
        console.error(err)
    }
}

let deleteUser = async(req,res) => {
    try{
        let user_id = req.params.userId
        let response = await alertSchema.findByIdAndRemove(user_id)
        res.json(response)
    }
    catch(err){
        console.error(err)
    }
}

// let graph = async(req,res) => {
//     try{
//         const {high,low}= req.body
//         let newGraph = new graphSchema({high,low})
//         let response = await newGraph.save()
//         res.json(response)
//     }
//     catch(err){
//         console.error(err)
//     }
    
// }

let graph = async(req,res) => {
    try{
        let response = await graphSchema.find()
        res.json(response)
    }
    catch(err){
        console.error(err)
    }
}

module.exports = {addUser,getUser,deleteUser,graph};