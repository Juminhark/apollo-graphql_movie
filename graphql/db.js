export const people = [
    {
        id: "1",
        name: "first",
        age: 29,
        gender: "male"
    },
    {
        id: "2",
        name: "second",
        age: 29,
        gender: "male"
    },
    {
        id: "3",
        name: "third",
        age: 29,
        gender: "male"
    },
    {
        id: "4",
        name: "fourth",
        age: 29,
        gender: "male"
    }
]


export const getById = id => {
    const filteredPeople = people.filter(person => id === people.id)
    return filteredPeople[0]
}