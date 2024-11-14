const baseSQLModel = require('./base')

class AuthorModel extends baseSQLModel {
    constructor() {
        super('author')
    } 
    async findById(id){
        const authors = await super.findById(id)
        return authors
    } 
     
} 
module.exports = AuthorModel