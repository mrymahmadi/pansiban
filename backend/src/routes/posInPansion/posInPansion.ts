import { FastifyInstance } from "../../tools/deps.ts";
import * as posInPansionController from "../../controllers/posInPansion/posInPansion.ts";
import { authenticate } from "../../utils/auth.ts";

export default function (fastify: FastifyInstance) {
  fastify.get(
    "/posInPansions",
    { preHandler: authenticate },
    posInPansionController.getPosInpansions
  );
  fastify.get(
    "/posInPansion/:id",
    { preHandler: authenticate },
    posInPansionController.getPosInPansion
  );
  fastify.post(
    "/posInPansion",
    { preHandler: authenticate },
    posInPansionController.addPosInPansion
  );
  // fastify.put("/pansion/:id", pansionController.updatePansion);
  // fastify.delete("/pansion/:id", pansionController.deletePansion);
}
