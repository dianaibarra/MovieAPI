const express = require('express');
const router = express.Router();


const {
    Movies
} = require('../Models/movies');


router.patch('/update/:id', (req, res) => {
    const { id } = req.params
    const body= req.body;
    Movies
        .findByIdAndUpdate(
            id, 
            {$set:{
                ...body
            }})
        .exec()
        .then(updateMovie => res.status(200).send(updateMovie))
        .catch(error => res.status (400).send(error))
})

router.get('/read/:id',(req,res) => {
    const { id } = req.params

    Movies
        .findById(id)
        .exec()
        .then(movieById => res.status(200).send(movieById))
        .catch(error => res.status (400).send(error))

})

router.get('/read',(req,res) => {

    Movies
        .findById()
        .exec()
        .then(allMovies => res.status(200).send(allMovies))
        .catch(error => res.status (400).send(error))

})


router.post('/create', (req, res) => {
    const {
        title,
        genre,
        year,
        premier,
        img_url
    } = req.body;

    const newMovie = Movies({
        title: title,
        genre: genre,
        year: year,
        premier: premier,
        img_url: img_url
    })

    newMovie
        .save((error, movie) => {
            if (error) {
                res.status(400).send({
                    error:error,
                    message: "Lo sentimos"
                })
            } else {
                res.status(201).send({
                    movie: movie,
                    message: "Petición exitosa"
                })
            }

        });
});

/* router.get("/:name", (req, res) => {
    Movies
        .findOne({
            name: req.params.name
        })
        .then(movies =>  res.status(200).send(movies))
        .catch(err => res.status (400).send(error))
    }) */

router.get("/read", (req, res) => {
    Movies
        .find()
        .exec()
        .then(movies => {
            res.json(movies);
        })
        .catch(err => {
            res.json(err);
        })
})

router.post('/add', (req, res) => {
    const {
        title,
        genre,
        year,
        img_url
    } = req.body;
    Movies
        .create({
            title: title,
            genre: genre,
            year: year,
            img_url: img_url

        })
        .then(movie => {
            res.json(movie);
        })
        .cath(err => {
            res.json(err);
        });
});



module.exports = router;