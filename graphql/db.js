export const movies = [
    {
        id: 0,
        name: "Star Wars - The new one",
        score: 22
    },
    {
        id: 1,
        name: "신세계",
        score: 48
    },
    {
        id: 2,
        name: "악인전",
        score: 36
    },
    {
        id: 3,
        name: "알라딘",
        score: 33
    },
    {
        id: 4,
        name: "범죄의 재구성",
        score: 30
    },
    {
        id: 5,
        name: "기생충",
        score: 45
    }
]

export const getMovies = () => movies

export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === id)
    return filteredMovies[0]
}

export const deleteMovies = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id)
    if(movies.length > cleanedMovies.length) {
        movie = cleanedMovies
        return true
    } else {
        return false
    }
}

export const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.length +1}`,
        name,
        score
    }
    movies.push(newMovie)
    console.log(movies)
    return newMovie
}