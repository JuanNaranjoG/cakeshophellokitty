var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/hellokitty', { useCreateIndex: true,useNewUrlParser: true });

const connection = mongoose.connection;
connection.once('open', ()=>{
console.log('DB is conected');
});