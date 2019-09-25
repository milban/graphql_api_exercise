import { Person, getById } from "./db"

const resolvers = {
  Query: {
    people: () => Person,
    person: (_, { id }) => getById(id)
  }
}

export default resolvers
