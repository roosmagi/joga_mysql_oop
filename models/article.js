const baseSQLModel = require('./base')

class ArticleModel extends baseSQLModel {
    constructor() {
        super('article')
    } 
    async findALL(){
        const articles = await super.findALL()
        return articles
    } 
    async findOne(slug){
        const article = await super.findOne('slug', slug)
        return article
    } 
} 
module.exports = ArticleModel