const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');

//settings
app.set('port',4000);


//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


//routes
app.use('/api/session', require('./routes/session'));
app.use('/api/coccion', require('./routes/coccion'));
app.use('/api/elaboracion', require('./routes/elaboracion'));
app.use('/api/empleado', require('./routes/empleado'));
app.use('/api/empresa', require('./routes/empresa'));
app.use('/api/horno', require('./routes/horno'));
app.use('/api/ingrediente', require('./routes/ingrediente'));
app.use('/api/orden', require('./routes/orden'));
app.use('/api/pastel', require('./routes/pastel'));
app.use('/api/personaexterna', require('./routes/personaexterna'));


module.exports = app;