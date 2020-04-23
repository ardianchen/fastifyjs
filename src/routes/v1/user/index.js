
async function routes (fastify, options) {
  fastify.get('/', function (request, reply) {
    reply.send({ message: 'Hello World', code: 200 })
  })
}
module.exports = routes
