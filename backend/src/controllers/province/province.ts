import Fastify, {
  FastifyRequest,
  FastifyReply,
  FastifyInstance,
} from "npm:fastify@5.1.0";
//import { Pool } from "https://deno.land/x/postgres/mod.ts";
const fastify: FastifyInstance = Fastify();

import { IProvince } from "../../models/users.ts";
/*
import { PrismaClient } from "../../../../generated/client/index.d.ts";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const Prisma = require("../../../../generated/client/index.js");
const prisma: PrismaClient = new Prisma.PrismaClient();
*/
import { prisma } from "../../tools/prismaConf.ts";
export const getProvinces = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const provinces = await prisma.province.findMany();
  reply.send(provinces);
  reply.status(200);
};

export const getProvince = async (
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) => {
  const id = parseInt(request.params.id);

  if (id) {
    const user = await prisma.province.findUnique({
      where: { id },
      select: { id: true, name: true, enName: true, pansions: true },
    });
    reply.send(user);
  } else {
    reply.status(404).send("province not found");
  }
};

export const newProvince = async (
  request: FastifyRequest<{
    Body: { name: string; enName: string; positionId: string };
  }>,
  reply: FastifyReply
) => {
  const { name, enName, positionId } = request.body;
  const posid = parseInt(request.body.positionId);

  if (!name || !enName || !positionId) {
    reply.send("for add new Province have to set name & enName & positionId");
  }

  const findpos = await prisma.user.findFirst({ where: { positionId: posid } });
  const findPosLevel = await prisma.position.findUnique({
    where: { id: posid },
  });
  if (!findpos) {
    reply.send(" this pos not exist");
  }
  if (findPosLevel.level === "USER") {
    reply.send(
      " you cant add new province. just ADMIN & GHOST have this access."
    );
  }

  const newUser = await prisma.province.create({
    data: {
      name,
      enName,
    },
  });
  reply.status(201).send(newUser);
};

export const updateProvince = async (
  request: FastifyRequest<{
    Params: { id: string };
    Body: IProvince;
  }>,
  reply: FastifyReply
) => {
  const id = parseInt(request.params.id);
  const { name } = request.body;
  if (!name) {
    reply.status(501).send("can not set new value for enName");
  }
  const newInfo = await prisma.province.update({
    where: { id },
    data: { name },
  });
  reply.status(201).send(newInfo);
};

export const deleteProvince = async (
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) => {
  const id = parseInt(request.params.id);
  await prisma.province.delete({ where: { id } });
  reply.send({ message: "province deleted" });
};

//have to provide this file to:>  just ghost have access for all CRUD actions
