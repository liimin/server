'use strict';
var sequelize=require('../dbConnect');
var User = sequelize.import('./user.js');
// 同步模型到数据库中
sequelize.sync();

module.exports={
    User
}
