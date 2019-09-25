export const Person = [
  {
    id: 1,
    name: "milban",
    age: 18,
    gender: "male"
  },
  {
    id: 2,
    name: "a",
    age: 19,
    gender: "female"
  },
  {
    id: 3,
    name: "b",
    age: 20,
    gender: "male"
  },
  {
    id: 4,
    name: "c",
    age: 21,
    gender: "female"
  },
  {
    id: 5,
    name: "d",
    age: 22,
    gender: "male"
  }
]

export const getById = id => {
  return Person.find(item => item.id === id)
}
