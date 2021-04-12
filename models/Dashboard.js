const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Dashboard extends Model { }

Dashboard.init(
    {
        title: DataTypes.STRING,
        body: DataTypes.STRING,
    },
    {
        sequelize
    }
)
module.exports = Dashboard;