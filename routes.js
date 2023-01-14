import { Router } from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import { v4 as uuidv4 } from 'uuid'

const router = Router()

const products = []

console.log(products)
router.get('/', (req, res) => {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)

  res.sendFile(path.join(__dirname, '/index.html'))
})

router.get('/user/:id', (req, res) => {
  res.json({
    id: req.params.id,
    name: 'John Doe',
    age: 25,
    job: 'Software Engineer',
  })
})

// Get all products
router.get('/product', (req, res) => {
  res.json(products)
})

// Get product by id
router.get('/product/:productId', (req, res) => {
  const product = products.find((x) => x.id === req.params.productId)

  if (product) {
    res.json(product)
  } else {
    res.status(404).json({ message: 'Product not found' })
  }
})

router.post('/product', (req, res) => {
  const { name, brand, type, price, stock } = req.body

  const isExist = products.find((x) => x.name === name)

  if (!isExist) {
    const newProduct = {
      id: uuidv4(),
      name,
      brand,
      type,
      price,
      stock,
    }

    products.push(newProduct)
    res.status(201).json(products)
  } else {
    res.status(409).json({ message: 'Product already exist' })
  }
})

export default router
