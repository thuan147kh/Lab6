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
const fileUpload = require("express-fileupload");
const multer = require('multer');
app.use(express.urlencoded({
    extended: true
}));
// app.use(cors({credentials: true, origin: 'http://localhost:3001'}));
// app.use(cors({credentials: true, origin: 'https://frontend-blogwebsite.vercel.app'}));
app.use(cors({
    origin: 'https://frontend-blogwebsite.vercel.app',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload())


console.log("static",path.join(__dirname, 'app/public/images/upload'))

app.use("/static", express.static(path.join(__dirname, 'app/public/images/upload')));

mongoose.connect('mongodb+srv://sycung:07122002@blogweb.c8um31o.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('Connected to MongoDB...'))
    .catch((err) => {
        console.log(err);
        console.error('Could not connect to MongoDB...')
    });
    

route(app);
app.listen(port, () =>{ console.log(`App listening at http://localhost:${port}`)},
);

