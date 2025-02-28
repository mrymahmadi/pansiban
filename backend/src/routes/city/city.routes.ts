import { FastifyInstance } from "../../tools/deps.ts";
import * as cities from "../../controllers/city/mod.ts";
import { authenticate } from "../../utils/auth.ts";

export default function (fastify: FastifyInstance) {
  fastify.get("/cities/:id", cities.getCity);
  fastify.get("/cities", cities.getCities);
  fastify.post("/cities", cities.newCity);
  fastify.put("/cities/:id", cities.updateCity);
  fastify.delete("/cities/:id", cities.deletecity);
}
