const people = [
    {
        name: "first",
        age: 29,
        gender: "male"
    },
    {
        name: "second",
        age: 29,
        gender: "male"
    },
    {
        name: "third",
        age: 29,
        gender: "male"
    },
    {
        name: "fourth",
        age: 29,
        gender: "male"
    }
]

const resolvers = {
    Query: {
        people: () => people
    }
}

export default resolvers;