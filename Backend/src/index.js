const app = require('./app');
require("./dababase");
require('./passport/local-auth');

async function main(){
   await app.listen(app.get('port'));
   console.log('server on port ',app.get('port'));
}

main();