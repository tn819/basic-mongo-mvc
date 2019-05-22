const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    mongoUrl: `mongodb://tn819:${process.env.MONGOPW}@test-shard-00-00-veku9.mongodb.net:27017,test-shard-00-01-veku9.mongodb.net:27017,test-shard-00-02-veku9.mongodb.net:27017/test?ssl=true&replicaSet=Test-shard-0&authSource=admin&retryWrites=true`,
    port: process.env.PORT
};