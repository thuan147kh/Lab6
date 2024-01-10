const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();
const route = require('./routes');
const port = 3000;
const cors = require('cors')
const methodOverride = require('method-override');
const { default: mongoose } = require('mongoose');
const User = require('./app/models/User');
const cookieParser = require('cookie-parser');
app.use(express.urlencoded({
    extended: true
}));
app.use(cors({credentials: true, origin: 'http://localhost:3001'}));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const path = require('path');

// ...

app.use('/public/uploads', express.static(path.join(__dirname, '/public/uploads')));

 
mongoose.connect('mongodb+srv://SyCung:07122002@blogcluster.9crdeuf.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...'));
route(app);
app.listen(port, () =>{ console.log(`App listening at http://localhost:${port}`)},
);
