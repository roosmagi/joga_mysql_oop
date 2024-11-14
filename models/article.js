const baseSQLModel = require('./base')

class ArticleModel extends baseSQLModel {
    constructor() {
        super('article')
    } 
    async findALL(){
        const articles = await super.findALL()
        return articles
    } 
} 
module.exports = ArticleModel