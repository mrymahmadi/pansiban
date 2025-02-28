import { FastifyInstance } from "../../tools/deps.ts";
import * as provinceController from "../../controllers/province/province.ts";

export default function (fastify: FastifyInstance) {
  fastify.get("/provinces/:id", provinceController.getProvince);
  fastify.get("/provinces", provinceController.getProvinces);
  fastify.post("/provinces", provinceController.newProvince);
  fastify.put("/provinces/:id", provinceController.updateProvince);
  fastify.delete("/provinces/:id", provinceController.deleteProvince);
}
