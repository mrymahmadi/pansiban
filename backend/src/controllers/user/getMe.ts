// deno-lint-ignore-file
import Fastify, {
  FastifyRequest,
  FastifyReply,
  FastifyInstance,
} from "npm:fastify@5.1.0";

import { IPosition } from "../../models/users.ts";
import { createRequire } from "node:module";
import { PrismaClient } from "npm:@prisma/client";
const require = createRequire(import.meta.url);
const Prisma = require("../../../../generated/client/index.js");
const prisma: PrismaClient = new Prisma.PrismaClient();

const fastify = Fastify({ logger: true });

export const User = async (
  request: FastifyRequest<{ Params: { id: number } }>,
  reply: FastifyReply
) => {
  const { id } = request.params;
  if (!id) {
    reply.code(201).send("have to insert your id in the params");
  }
  const user = await prisma.user.findUnique({
    where: { id: request.params.id },
    select: { lastName: true, firstName: true, email: true },
  });
};
