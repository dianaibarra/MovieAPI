const express = require ('express');
const mongoose = require('mongoose');
const cors = require ('cors');


const Movies = require ('./controllers/movies.js')
const Director = require ('./controllers/directors.js')


const PORT = process.env.PORT || 6660;
const app = express ();
const URL_MONGO= "mongodb+srv://diana:cintaroja123123@cluster0-wgsaz.gcp.mongodb.net/test?retryWrites=true&w=majority"

app.use(express.json()) 
app.use(cors())

mongoose.connect(URL_MONGO, {useNewUrlParser: true, useUnifiedTopology: true}, (error) => {
    if (!error) {
        console.log ('Connected to MongoDB');
    }else{
        console.log (error);
    }
});

app.use(express.json())

app.use('/movies',Movies);
app.use('/diretor', Director)

app.listen(PORT, () => {
    console.log(`server initialized on PORT ${PORT}`)
})