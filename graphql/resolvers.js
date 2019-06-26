const juminhark = {
    name: "juminhrak",
    age: 29,
    gender: "male"
}

const resolvers = {
    Query: {
        person: () => juminhark
    }
}

export default resolvers;