const mongoose = require('mongoose');
const Celebrity = require('../model/Celebrity');
const Movie = require('../model/Movie');

mongoose.connect(`mongodb://localhost/starter-code`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
Celebrity.collection.drop();
Movie.collection.drop();

const celebrities = [{
        name: 'Shakira',
        occupation: 'Singer',
        catchPhrase: "You're a song written by the hands of God."
    },
    {
        name: 'Mariano Rajoy',
        occupation: 'Ex-president and walker',
        catchPhrase: 'Es el vecino el que elige al alcalde y es el alcalde el que quiere que sean los vecinos el alcalde.'
    },
    {
        name: 'Will Smith',
        occupation: 'Actor',
        catchPhrase: "Sorry, I'm allergic to bullshit."
    }
]


const movies = [{
        title: 'Interestellar',
        genre: 'Sci-Fi',
        plot: `A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.`
    },
    {
        title: 'La La Land',
        genre: 'Musical',
        plot: `While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.`
    },
    {
        title: 'Kung Fu Panda',
        genre: 'Animation',
        plot: `The Dragon Warrior has to clash against the savage Tai Lung as China's fate hangs in the balance. However, the Dragon Warrior mantle is supposedly mistaken to be bestowed upon an obese panda who is a novice in martial arts.`
    }
]

celebrities.map(celebrity => {
    const newCelebrity = new Celebrity(celebrity);
    return newCelebrity.save()
        .then((celebrity) => {
            console.log(`${celebrity.name} has been saved in the data base`);
        })
        .catch(err => {
            throw new Error(`Impossible to add the author. ${err}`);
        })
})

movies.map(movie => {
    const newMovie = new Movie(movie);
    return newMovie.save()
        .then((movie) => {
            console.log(`${movie.title} has been saved in the data base`);
        })
        .catch(err => {
            throw new Error(`Impossible to add the movie. ${err}`);
        })
})