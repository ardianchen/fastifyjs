require('dotenv').config()
const PORT = process.env.PORT || 3000
const ENV = process.env.NODE_ENV

// Inisialisasi awal fastify.
const fastify = require('fastify')({
  logger: true // aktifkan ini untuk menerima log setiap request dari fastify.
})

// Fungsi ini untuk membuat kita bisa melakuakn post melalui www-url-encoded.
fastify.register(require('fastify-formbody'))

// Route yang dipisah dari root file.
fastify.register(require('./routes/v1/user', { prefix: '/v1' }))

// Fungsi file root secara async.
const start = async () => {
  try {
    // Gunakan Port dari ENV APP_PORT, kalo ngga ada variable tersebut maka akan menggunakan port 3000
    await fastify.listen(PORT)

    fastify.log.info(`server listening on ${fastify.server.address().port} in ${ENV} environment`)
    // console.log(`server listening on ${fastify.server.address().port} in ${ENV} environment`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

// Jalankan server!
export default start
