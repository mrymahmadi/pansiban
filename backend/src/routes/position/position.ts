import { FastifyInstance } from "../../tools/deps.ts";
import * as positionController from "../../controllers/position/position.ts";
import { authenticate } from "../../utils/auth.ts";

export default function (fastify: FastifyInstance) {
  fastify.get(
    "/positions/:id",
    { preHandler: authenticate },
    positionController.getPosition
  );
  fastify.get("/positions", positionController.getPositions);
  fastify.post("/positions", positionController.newPosition);
  fastify.put("/positions/:id", positionController.updatePos);
  fastify.delete("/positions/:id", positionController.deletePosition);
}
