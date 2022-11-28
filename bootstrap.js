import mongoose from 'mongoose'

require('dotenv').config()

mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => {
    console.log('Connected to mongoDB')
  })
  .catch(err => {
    console.log('Mongoose connect error:' + err)
    process.exit(1)
  })
