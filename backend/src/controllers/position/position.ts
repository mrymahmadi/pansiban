import { FastifyRequest, FastifyReply } from "../../tools/deps.ts";
import { authInfo, IPosition, Role } from "../../models/users.ts";
/*
import { PrismaClient } from "../../../../generated/client/index.d.ts";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const Prisma = require("../../../../generated/client/index.js");
const prisma: PrismaClient = new Prisma.PrismaClient();
*/
import { prisma } from "../../tools/prismaConf.ts";
export const getPositions = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const positions = await prisma.position.findMany();
  reply.send(positions);
  reply.status(200);
};

export const getPosition = async (
  request: FastifyRequest<{ Params: { id: string }; Body: authInfo }>,
  reply: FastifyReply
) => {
  const id = parseInt(request.params.id);
  console.log(id);
  if (id) {
    const pos = await prisma.position.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        level: true,
      },
    });
    reply.send(pos);
  } else {
    reply.status(404).send("position not found");
  }
};

export const newPosition = async (
  request: FastifyRequest<{
    Body: unknown;
  }>,
  reply: FastifyReply
) => {
  const { name, level } = request.body as IPosition;
  if (!name || !level) {
    reply.status(501).send("name or level not required");
    return;
  }

  try {
    const newPos = await prisma.position.create({
      data: { name, level },
      select: {
        name: true,
        level: true,
      },
    });
    reply.status(201).send(newPos);
  } catch (error) {
    reply
      .status(500)
      .send(
        "An error occurred while creating the position, meybe you try choose a not existing position!"
      );
  }
};

export const updatePos = async (
  request: FastifyRequest<{
    Params: { id: string };
    Body: IPosition;
  }>,
  reply: FastifyReply
) => {
  const id = parseInt(request.params.id);
  const { name } = request.body;

  if (!name) {
    reply.status(501).send(" not any true key/value for set");
  }

  try {
    const newInfo = await prisma.position.update({
      where: { id },
      data: { name },
    });

    reply.status(201).send(newInfo);
  } catch (error) {
    reply.status(404).send("this id for position not exist.");
  }
};

export const deletePosition = async (
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) => {
  reply.send("you cant delete any position!");
};

//this actions have managed another of toghether, and checking position in users for every actions.
