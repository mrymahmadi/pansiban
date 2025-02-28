import { FastifyRequest, FastifyReply } from "fastify";
import { LoginInput } from "../models/users.ts";

export const authorize = (roles: string[]) => {
  return async (
    request: FastifyRequest<{ Body: LoginInput }>,
    reply: FastifyReply
  ) => {
    try {
      await request.jwtVerify();
      if (!roles.includes(request.user.role)) {
        return reply.code(403).send({ message: "Forbidden" });
      }
    } catch (err) {
      reply.code(401).send({ message: "Unauthorized" });
    }
  };
};
