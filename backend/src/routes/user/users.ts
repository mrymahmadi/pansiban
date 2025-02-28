import { FastifyInstance } from "npm:fastify@5";

import * as usr from "../../controllers/user/user.ts";
import * as sign from "../../utils/signIn.ts";
import { authenticate } from "../../utils/auth.ts";

export default function (fastify: FastifyInstance) {
  fastify.get("/user/:id", usr.getUser);
  fastify.get("/users", usr.getUsers);
  fastify.post("/users", usr.newUser);
  fastify.put("/upUser", usr.updateUser);
  fastify.delete("/users/:id", usr.deleteUser);
  fastify.post("/signin", sign.signin);
  fastify.get("/protectGets", { preHandler: authenticate }, usr.getUsers);
  fastify.post("/protectGet/:id", { preHandler: authenticate }, usr.getUser);
  fastify.post("/protectUp/:id", { preHandler: authenticate }, usr.updateUser);
  fastify.post("/protectCreate", { preHandler: authenticate }, usr.newUser);
  fastify.post(
    "/protectRemove/:id",
    { preHandler: authenticate },
    usr.deleteUser
  );
}
