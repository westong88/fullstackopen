const { response } = require('express')
const express = require('express')
const app = express()

app.use(express.json())

const cors = require('cors')

app.use(cors)