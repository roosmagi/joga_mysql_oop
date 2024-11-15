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

    async findMany(author){
        const articles = await super.findMany('author_id', author.id)
        return articles
    }
    async create(article){
        const createdArticleId = await super.create(article)
        return createdArticleId
    } 

} 
module.exports = ArticleModel