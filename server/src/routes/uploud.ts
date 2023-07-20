import { randomUUID } from 'node:crypto';
import { extname, resolve } from 'node:path';
import { FastifyInstance } from 'fastify';
import { createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream';
import { promisify } from 'node:util';

const pump = promisify(pipeline)

export async function uploudRoutes(app: FastifyInstance) {
  app.post('/uploud', async (request, reply) => {
   const uploud = await request.file({
      limits: {
        fieldSize: 5_242_880, // 5mb
      }
     }) 
     if (!uploud) {
      return reply.status(400).send()
     }

     const mimeTypeRegex = /^(image|video)\/[a-zA-Z]+/
     const isValidFileFormat = mimeTypeRegex.test(uploud.mimetype)

     if (!isValidFileFormat) {
      return reply.status(400).send()
     }

     const fileId = randomUUID()
     const extension = extname(uploud.fieldname)

     const fileName = fileId.concat(extension)


     const writeStream = createWriteStream(
      resolve(__dirname, '../../uploads/', fileName),
     )

    await pump(uploud.file, writeStream)

    const fullUrl = request.protocol.concat('://').concat(request.hostname)
    const fileUrl = new URL(`/uploads/${fileName}`, fullUrl).toString()

})
}