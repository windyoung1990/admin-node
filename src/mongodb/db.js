'use strict';
import mongoose from 'mongoose';
// import config from 'config-lite';
const config = require('../../config/default')

import chalk from 'chalk';
mongoose.connect(config.url);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.once('open', () => {
    console.log(chalk.green('数据库链接成功'))
});
db.on('error', (error) => {
    console.error(
        chalk.red('Error in MongoDb connection: ' + error)
      );
    mongoose.disconnect();
});
db.on('close', function() {
    console.log(
      chalk.red('数据库断开，重新连接数据库')
    );
    mongoose.connect(config.url, {server:{auto_reconnect:true}});
});

export default db;