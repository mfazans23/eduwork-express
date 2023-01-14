const { Router } = require('express')
const path = require('path')
const { v4 } = require('uuid')
const products = require('./data/products')
const users = require('./data/users')

const router = Router()

router.get('/', (req, res) => {
  res.send(`<h2>Endpoints:</h2>
              <ul>
                <li>GET /user  --> (Get all users)</li>
                <li>GET /user/:userId  --> (Get user by id)</li>
                <li>GET /product  --> (Get all products)</li>
                <li>GET /product/:productId  --> (Get product by id)</li>
              </ul>`)
})

// Get all users
router.get('/user', (req, res) => {
  res.json(users)
})

// Get user by id
router.get('/user/:userId', (req, res) => {
  const existeduser = users.find((x) => x._id === req.params.userId)

  if (existeduser) {
    res.json(existeduser)
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

// Get all products
router.get('/product', (req, res) => {
  res.json(products)
})

// Get product by id
router.get('/product/:productId', (req, res) => {
  const existedProduct = products.find((x) => x._id === req.params.productId)

  if (existedProduct) {
    res.json(existedProduct)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

module.exports = router
