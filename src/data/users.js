const { v4: uuidv4 } = require('uuid')

const users = [
  {
    _id: uuidv4(),
    name: 'Admin User',
    email: 'admin@example.com',
    isAdmin: true,
  },
  { _id: uuidv4(), name: 'John Doe', email: 'john@example.com' },
  { _id: uuidv4(), name: 'Jane Doe', email: 'jane@example.com' },
]

module.exports = users
