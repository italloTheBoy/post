const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('postapp', ''/* username */, ''/* password */,{
  host: 'localhost',
  dialect: 'postgres'
})

module.exports = sequelize
