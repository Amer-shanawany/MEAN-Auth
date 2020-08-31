const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
const config = require('./config/database');

mongoose.connect(config.MONGO_URI, { useNewUrlParser: true , useUnifiedTopology: true});
mongoose.connection.on('connected', ()=>{
    console.log(`Connected to database ${config.database}`);
});

mongoose.connection.on('error', (err)=>{
    console.log(`Database Error ${err}`);
});

const app = express();
const users = require('./routes/users');



// Port
const port = process.env.PORT || 3000;
app.set('port',port);

// CORS
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body-Parser
app.use(express.json());
app.use('/users', users)

// Passport
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

app.get('/',(req,res)=>{
    res.send('invalid endpoint');
});
app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

