const { DataTypes, Model } = require('sequelize')
const sequelize = require('./db')

class Post extends Model {}

Post.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Post',
})

module.exports = Post
