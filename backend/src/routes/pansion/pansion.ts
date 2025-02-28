import { FastifyInstance, join } from "../../tools/deps.ts";
import multipart from "npm:@fastify/multipart";
import * as pansionController from "../../controllers/pansion/pansion.ts";
import { authenticate } from "../../utils/auth.ts";

export default function (fastify: FastifyInstance) {
  fastify.register(multipart, {
    limits: {
      fileSize: 1000000, // Limit file size to 1MB
    },
  });
  fastify.get(
    "/pansions/:id",
    { preHandler: authenticate },
    pansionController.getPansion
  );

  fastify.get("/p", pansionController.getPansions);
  fastify.get("/pansions", pansionController.getPansions);
  fastify.post(
    "/pansions",
    { preHandler: authenticate },
    pansionController.newPansion
  );
  fastify.put(
    "/pansions/:id",
    { preHandler: authenticate },
    pansionController.updatePansion
  );
  fastify.delete(
    "/pansions/:id",
    { preHandler: authenticate },
    pansionController.deletePansion
  );
  // fastify.post("/addImage", pansionController.addImagePns);
}
