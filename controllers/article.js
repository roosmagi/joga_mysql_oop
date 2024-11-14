const articleDbModel = require('../models/article')
const ArticleModel = new articleDbModel()

class articleController{
    constructor(){
        const articles = [] 
    } 
    async getAllArticles(req, res){
        const articles = await ArticleModel.findALL()
        res.status(201).json({articles: articles})
    } 
} 

module.exports = articleController