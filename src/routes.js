const { Router } = require('express')
const routes = Router()

const Post = require('../models/Post')

routes.get('/', (req, res) => {
  Post.findAll({order: [['id', 'DESC']] })
    .then((post) => {
      res.render('show', {post: post})
    })
    .catch(err => console.log(err.message))
})

routes.get('/post', (req, res) => {
  res.render('cadastro')
})

routes.post('/registerPost', (req, res) => {
  Post.create({
    title: req.body.title,
    content: req.body.content,
  })
    .then(() => res.redirect('/'))
    .catch(err => res.send(err.message))
})

routes.get('/deletePost/:id', (req, res) => {
  Post.destroy({where: {id: req.params.id}})
    .then(() => res.redirect('/'))
    .catch((err) => res.send(err.message))
})

module.exports = routes
