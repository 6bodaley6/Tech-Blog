const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model { }

Post.init(
    {
        tite: DataTypes.STRING,
        body: DataTypes.STRING
    },
    {
        sequelize
    }
)
module.exports = Post;