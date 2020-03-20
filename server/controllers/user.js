const { User, Room } = require('../models')

class UserController {
    static register(req, res, next){
        let obj = {
            name : req.body.name
        }
        User.create(obj)
        .then(data=>{
            res.status(201).json(data)
        })
        .catch(err=>{
            if(err.name === 'SequelizeValidationError'){
                res.status(400).json(err.errors)
            } else {
                res.status(500).json(err)
                console.log(err)
            }
        })
    }
    static logout(req, res, next){
        let id = req.params.id
        User.destroy({where : {id:id}})
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            console.log(err)
            res.status(500).json(err)
        })
    }
}

module.exports = UserController